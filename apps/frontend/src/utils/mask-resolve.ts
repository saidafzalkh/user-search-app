import { IMask } from "react-imask";

const maskNumber = (value: string): string => {
  const mask = IMask.createMask({ mask: "00-00-00" });
  mask.resolve(value);

  return mask.value;
};

export default maskNumber;
