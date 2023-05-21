import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/login";
import Login2 from "./components/login/login2";
import ProductCard from "./components/login/productData";

function App() {
  const notify = (e) => {
    toast(e);
  };
  return (
    <div className="App">
      <div className="w-full flex content-center items-center">
        <div className="w-50 m-auto text-center">
          <button
            className="bg-success m-3 p-2 "
            onClick={() => notify("success")}
          >
            success
          </button>
          <button className="bg-info m-3 p-2" onClick={() => notify("info")}>
            info
          </button>
          <button
            className="bg-danger m-3 p-2"
            onClick={() => notify("some error")}
          >
            error
          </button>
          <button
            className="bg-warning m-3 p-2"
            onClick={() => notify("warning")}
          >
            warning
          </button>
          <ToastContainer />
        </div>
        <div className="w-50 m-auto">
          <ProductCard />
        </div>
      </div>
      <hr />
      <div className="flex mt-7">
        <div className="m-auto">
          <Login />
        </div>
        <div className="m-auto">
          <Login2 />
        </div>
      </div>
    </div>
  );
}

export default App;
