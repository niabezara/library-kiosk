import React from "react";
import { Link } from "react-router-dom";

export default function LandingCards() {
  return (
    <div>
      <Link to="/categories">
        <div>borrow book</div>
      </Link>

      <div>return book</div>
    </div>
  );
}
