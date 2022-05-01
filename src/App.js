import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./component/Authenticate/Register/Register";
import RequireAuth from "./component/Authenticate/RequireAuth/RequireAuth";
import Blog from "./component/Blog/Blog";
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
        <Route
          path="/singleStock/:idOfService"
          element={
            <RequireAuth>
              <SingleServiceDetail></SingleServiceDetail>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
