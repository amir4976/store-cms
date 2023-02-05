import SideBar from "./components/SideBar/SideBar";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import RoutesData from "./Routes";
import { useRoutes } from "react-router-dom";
import { Theme } from "./context/Theme";
import { useContext } from "react";

function App() {
  const routes = useRoutes(RoutesData);
  let [isDark,setIsDark] = useContext(Theme) 
  let Root = document.querySelector(':root');
  if(isDark){
    Root.style.setProperty('--blue', ' #05070c');
    Root.style.setProperty('--white-50', ' #0d0d14');
    Root.style.setProperty('--text', ' #fff');
    Root.style.setProperty('--mainElement', '#131320');

  }else{
    Root.style.setProperty('--blue', '#471AAA');
    Root.style.setProperty('--white-50', '#f1f1f1');
    Root.style.setProperty('--text', ' #000');
    Root.style.setProperty('--mainElement', ' #fff');

  }

  return (
    <div className="App">
      <SideBar />
      <div className="Main">
        <Navbar />
        {routes}
      </div>
    </div>
  );
}

export default App;
