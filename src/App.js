import React from "react";
import './Style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./component/Home"

const App = () => {
  return (
    <main>
      <section className="container mt-5">
        <Home />
        <ToastContainer />
      </section>
    </main>

  );
};
export default App;
