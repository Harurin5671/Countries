import React from "react";

export default function Pagination({
  countriesPerPage,
  allCountries,
  pagination,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      {pageNumber &&
        pageNumber.map((n) => (
          <a onClick={() => pagination(n)} href="#!" key={n}>
            {n}
          </a>
        ))}
    </div>
  );
}
