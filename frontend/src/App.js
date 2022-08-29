import React from "react";
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Getnews from "./component/News";
import Table from "./component/Table";



export default function App (){



    return (
      <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Getnews />} />
            {/* <Route exact path="/home" element={< Home/>} />
            <Route exact path="/table" element={<Table />} /> */}
          </Routes>
          <Footer />
        </Router>
      </div>
    );
}