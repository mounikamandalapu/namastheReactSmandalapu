import ReactDOM from "react-dom/client";
import Counter from "./Counter";

//JSX element -> babel converts this React Element(Object) -> when rendered on DOM converts to HTML Elements
const heading = (
  <h1 id="heading" className="root">
    Hi Hello Nehansh from REACT
  </h1>
);

const Title = () => {
  return <h1 id="title">Namasthe React Course</h1>;
};

//React Functional Component
const Header = () => (
  <div>
    <Title />
    <h1>React Functional Component</h1>
  </div>
);

// function HeaderNormal() {
//   return (
//     <div>
//       <Title />
//       {(function (a) {
//         if (true) {
//           console.log(a);
//         }
//       })(10)}
//       {true ? heading : null}
//       <h1>REakflsdkfj</h1>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
