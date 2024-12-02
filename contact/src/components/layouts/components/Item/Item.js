import React from "react";

export default function Item({ children }) {
  return (
    <div class="card bg-light">
      <h3 class="text-primary text-left">
        <span class="badge badge-primary" style="float: right;"></span>
      </h3>
      <ul class="list">
        <li>
          <i class="fas fa-envelope-open"></i>
        </li>
        <li>
          <i class="fas fa-phone"></i>
        </li>
      </ul>
      <p>
        <button class="btn btn-dark btn-sm"></button>
        <button class="btn btn-danger btn-sm"></button>
      </p>
    </div>
  );
}
