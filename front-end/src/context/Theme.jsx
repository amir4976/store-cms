import { createContext , useEffect, useState} from "react";

export let Theme = createContext()

export function ThemeProvider ({children}) {
   let [isDark,setIsDark] = useState(false)
   const ToggleTheme = () =>{
        localStorage.setItem('theme',JSON.stringify(!isDark))  
        setIsDark(!isDark)
   }
   useEffect(()=>{
    const isDark = localStorage.getItem('isDark') === 'true'
    setIsDark(isDark)
   },[])
    
return(
    <Theme.Provider value={[isDark,ToggleTheme ]}>
        {children}
    </Theme.Provider>
)
}
