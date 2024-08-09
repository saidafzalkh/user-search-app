import SearchForm from "./components/searchForm";

function App() {

  return (
    <div className="md:container mx-auto px-6 py-8">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-black">User Search App</h1>
      </header>
      <main>
        <SearchForm />
      </main>
    </div>
  );
}

export default App;
