import React from "react";
import { Pagination } from "react-bootstrap";

function Paginate({ pages, page, keyword = "", isAdmin = false }) {
  if (keyword) {
    keyword = keyword.split("?keyword=")[1].split("&")[0];
  }

  return (
    pages > 1 && (
      <Pagination className="gap-3">
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            active={x + 1 === page}
            href={
              !isAdmin
                ? `/?keyword=${keyword}&page=${x + 1}`
                : `/admin/productlist/?keyword=${keyword}&page=${x + 1}`
            }
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;
