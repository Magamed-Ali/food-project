
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
                <Route path="/about" element={<About/> }/>
                <Route path="/contacts" element={<Contact/> }/>
                <Route path="/category/:name" element={<Home/> }/>
            </Routes>
        </main>
      <Footer/>

    </div>
  );
}

export default App;
