import ReactPaginate from 'react-paginate';
import { useSearchParams } from "react-router-dom";
  
function Pagination({ pageCount, page, itemPerPage }) {
    const [searchParams, setSearchParams] = useSearchParams();
  
    const handlePageClick = (event) => {
      var scrollDiv = document.getElementById("listData").offsetTop - 100;
      window.scrollTo({top:scrollDiv, behavior:"smooth"});
      const queryParams = {};
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
                pageRangeDisplayed={itemPerPage}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
              />
            </div>
        </>
    );
}

export default Pagination;