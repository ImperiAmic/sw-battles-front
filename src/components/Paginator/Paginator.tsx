import { Link } from "react-router";
import "./Paginator.css";

interface PaginatorProps {
  page: number;
  battlesTotal: number;
}

const Paginator: React.FC<PaginatorProps> = ({ page, battlesTotal }) => {
  const pagesTotal = Math.ceil(battlesTotal / 6);
  const previousPage = page - 1;
  const nextPage = page + 1;

  const hideWhenFirstPage = page > 1 ? "" : "paginator--hidden";
  const hideWhenLastPage = page < pagesTotal ? "" : "paginator--hidden";

  return (
    <div className="paginator">
      <Link
        className={`page-arrow ${hideWhenFirstPage}`}
        to={`/battles?page=${previousPage}`}
        aria-label="Previous page"
      >
        {"<"}
      </Link>

      <span className="page-indicator">{page}</span>

      <Link
        className={`page-arrow ${hideWhenLastPage}`}
        to={`/battles?page=${nextPage}`}
        aria-label="Next page"
      >
        {">"}
      </Link>
    </div>
  );
};

export default Paginator;
