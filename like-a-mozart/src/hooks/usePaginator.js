import { useState } from "react";

const usePaginator = (initialPage, initialSize) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [size, setSize] = useState(initialSize);

  const next = () => setCurrentPage(prev => prev + 1);
  const previous = () => setCurrentPage(prev => prev - 1);
  const setPage = val => setCurrentPage(val);

  return {
    page: currentPage,
    size,
    next,
    previous,
    setPage,
    setSize,
  };
};

export default usePaginator;
