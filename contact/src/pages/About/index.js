import React from "react";
import Header from '../../components/layouts/components/Header';
export default function index() {
  return (
    
    <div >
        <Header />
      <div>
        <h1>About This App</h1>
        <p class="my-1">This is a full stack react app for keeping contacts</p>
        <p class="bg-dark p">
          <strong>Version: </strong>1.0.0
        </p>
      </div>
    </div>
  );
}
