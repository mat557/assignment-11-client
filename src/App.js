import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home/Home";
import SingleServiceDetail from "./component/Home/SingleServiceDetail/SingleServiceDetail";
import Login from "./component/Login/Login";
import Footer from "./component/Shared/Footer/Footer";
import Header from "./component/Shared/Header/Header";
import NotFound from "./component/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/singleStock/:idOfService" element={<SingleServiceDetail></SingleServiceDetail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
