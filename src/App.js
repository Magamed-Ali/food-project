
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";
import {Route, Routes} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
     <Header/>
        <main className="container content ">
            <Routes>
                <Route path="/" element={<Main/> }/>
                <Route path="/node1" element={<About/> }/>
                <Route path="/node2" element={<Contact/> }/>
                <Route path="/node3" element={<Home/> }/>
            </Routes>
        </main>
      <Footer/>

    </div>
  );
}

export default App;
