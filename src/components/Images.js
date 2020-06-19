import React, { useEffect, useState } from "react";

export default function Images() {
  const Images = [
    "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80",
    "https://images.unsplash.com/photo-1547111962-50a04ac74d73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1506882741710-98761c574b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1487537177666-94b1f521631a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  ];

  function ShowImage() {
    return Images.map((image) => {
      return (
        <div>
          <img src={image} width="150" />
        </div>
      );
    });
  }

  return (
    <section>
      <div className="flex justify-center">
        <ShowImage />
      </div>
    </section>
  );
}
