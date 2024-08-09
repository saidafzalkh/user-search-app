import { FormEvent, HTMLAttributes, useRef, useState } from "react";
import cn from "../utils/cn";
import { searchUsers } from "../api/search";
import { User } from "@user-search-app/types";
import { IMaskInput } from "react-imask";
import maskNumber from "../utils/mask-resolve";
import { validateEmail, validateNumber } from "@user-search-app/validation";
import axios from "axios";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const SearchForm = ({ className, ...props }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string | null>(null);
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [validationError, setValidationError] = useState({
    email: "",
    phone: "",
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setValidationError((state) => ({ ...state, email: "Invalid email" }));
      return;
    }

    console.log(phone && validateNumber(phone));
    if (phone && !validateNumber(phone)) {
      setValidationError((state) => ({ ...state, phone: "Invalid number" }));
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    setLoading(true);

    try {
      const res = await searchUsers(
        { email, ...(phone ? { number: phone } : {}) },
        signal,
      );
      setLoading(false);
      setData(res.results);
    } catch (error) {
      if (!axios.isCancel(error)) setLoading(false);
      console.log(error);
    } finally {
      setValidationError({ email: "", phone: "" });
    }
  };

  return (
    <div
      className={cn("p-4 bg-white shadow-md rounded-lg", className)}
      {...props}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 items-start"
      >
        <label className="flex flex-col gap-1 w-full md:w-auto">
          <input
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <span className="text-red-500 text-sm">{validationError.email}</span>
        </label>
        {phone}
        <label className="flex flex-col gap-1 w-full md:w-auto">
          <IMaskInput
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
            mask={"00-00-00"}
            unmask={true}
            onAccept={(value) => setPhone(value)}
            inputMode="numeric"
            placeholder="Enter your number"
          />
          <span className="text-red-500 text-sm">{validationError.phone}</span>
        </label>

        <button
          className="border bg-black text-white rounded-md p-2 hover:bg-gray-800 transition duration-200 w-full md:w-auto mt-4 md:mt-0"
          type="submit"
        >
          Submit
        </button>
      </form>

      <ul className="mt-6 space-y-2">
        {loading ? (
          <li className="text-gray-500">Loading...</li>
        ) : data.length > 0 ? (
          data.map((user) => (
            <li key={user.email} className="text-gray-700">
              {user.email}: {maskNumber(user.number)}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No results</li>
        )}
      </ul>
    </div>
  );
};

export default SearchForm;
