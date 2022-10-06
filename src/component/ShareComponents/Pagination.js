import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
  
function Pagination({ page, itemsPerPage, listItems, setCurrentItems }) {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(listItems.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(listItems.length / itemsPerPage));
    }, [itemOffset]);

    useEffect(() => {
      const newOffset = (page * itemsPerPage) % listItems.length;
      setItemOffset(newOffset);
    }, [page]);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % listItems.length;
      const queryParams = {};
      setItemOffset(newOffset);
      for (const entry of searchParams.entries()) {
        queryParams[entry[0]] = entry[1];
      }
      setSearchParams({
        ...queryParams,
        page: event.selected * 1 + 1
      });
    };
  
    return (
        <>
            <div className='pagination-section'>
              <ReactPaginate
                forcePage={page}
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={8}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
              />
            </div>
        </>
    );
}

export default Pagination;