import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
