import { useState } from "react"

const DEFAULT_VALUES = {
  initialPage: 1,
  initialSize: 10
}

const usePaginator = ({ initialPage, inititialSize } = DEFAULT_VALUES) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [size, setSize] = useState(inititialSize  )

  const next = () => setCurrentPage(prev => prev + 1)
  const previous = () => setCurrentPage(prev => prev - 1)
  const setPage = val => setCurrentPage(val)

  return {
    page: currentPage, 
    size,
    next,
    previous,
    setPage,
    setSize
  }
}

export default usePaginator