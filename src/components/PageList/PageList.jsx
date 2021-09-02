import "./PageList.css";

function PageList({ setPage, page, handleSearchSubmit, request, lastPage }) {
  function onClick(e) {
    const currentPage = parseInt(e.target.innerHTML);
    setPage(currentPage);
    handleSearchSubmit(request, currentPage);
  }
  return (
    <>
      <ul className="page-list">
        {page > 1 && (
          <li onClick={onClick} className="page-item">
            {1}
          </li>
        )}
        {page - 10 > 1 && (
          <li onClick={onClick} className="page-item">
            {page - 10}
          </li>
        )}
        {page - 1 > 1 && (
          <li onClick={onClick} className="page-item">
            {page - 1}
          </li>
        )}
        <li className="page-item">{page}</li>
        {page + 1 < lastPage - 1 && (
          <li onClick={onClick} className="page-item">
            {page + 1}
          </li>
        )}
        {page + 10 < lastPage - 1 && (
          <li onClick={onClick} className="page-item">
            {page + 10}
          </li>
        )}
        {page < lastPage && (
          <li onClick={onClick} className="page-item">
            {lastPage}
          </li>
        )}
      </ul>
    </>
  );
}

export default PageList;
