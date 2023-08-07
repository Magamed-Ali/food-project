import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";
import {Route, Routes} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import {Category} from "./Layout/Category";
import Recipe from "./components/Recipe";

function App() {
    function powersOfTwo(n){

        let arr = [];
        for (let i = 0; i < n; i++){
            console.log(i)
            arr.push(n / i)
        }
        console.log("asdf",arr)
        return arr
    }

  return (
    <div className="App">
     <Header/>
        <main className="container content ">
            <Routes>
                <Route path="/" element={<Home/> }/>
                <Route path="/" element={<Main/> }/>
                <Route path="/about" element={<About/> }/>
                <Route path="/contacts" element={<Contact/> }/>
                <Route path="/category/:name" element={<Category/> }/>
                <Route path="/meal/:id" element={<Recipe/>}/>
            </Routes>
        </main>
      <Footer/>

    </div>
  );
}

export default App;
