import React from "react";

export default function Pagetitle({ header, breadcrumb, activeBreadcrumb }) {
  return (
    <div className="pagetitle">
      <h1>{header}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">{breadcrumb}</a>
          </li>
          <li className="breadcrumb-item active">{activeBreadcrumb}</li>
        </ol>
      </nav>
    </div>
  );
}
