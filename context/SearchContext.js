import { createContext, useEffect, useState } from "react";

const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState(null);
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContextProvider, SearchContext };
