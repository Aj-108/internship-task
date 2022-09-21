import "./App.css";
// eslint-disable-next-line no-unused-vars
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Task2 from "./Components/homescreen/Task2";
import Login from "./Components/loginHomeScreen/Login"; 
import ClearFilterApply from "./Components/clearfilterapply/ClearFilterApply";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Task2/>}/>
            <Route path="/loginHome" element={<Login />} />
            <Route path="/clearfilterapply" element={<ClearFilterApply />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
