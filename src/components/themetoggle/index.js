import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
    changeColorHeader();
  };
  const changeColorHeader = ():void =>{
    let theme : string = localStorage.getItem("theme");
    console.log(theme)
    const headercss : Element = document.querySelector('.site__header')

    if (theme !== 'light'){
      headercss.style.backgroundColor = 'white';
    }else{
      headercss.style.backgroundColor = 'black';
    }
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
