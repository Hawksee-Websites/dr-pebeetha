import { createContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbar, setnavbar] = useState(false);
    const[image, setImage] = useState('../img/pebeetha logo.png');
    const [overlay, setOverlay] = useState(false);
    const html = document.querySelector('html');




    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
        setOverlay(!overlay);
        html.style.overflowY = (html.style.overflowY === 'hidden') ? 'auto' : 'hidden';
    };

    
    const handleNavbar = () => {
        if (window.scrollY > 20) {
            setnavbar(true)
            setImage('../img/pebeetha logo.png')
        } else {
            setImage('../img/pebeetha logo.png')
            setnavbar(false)

        }
    }
    window.addEventListener('scroll', handleNavbar)



    return (
        <MenuContext.Provider value={{menuOpen,navbar, handleToggleMenu,handleNavbar,image,setImage,overlay}}>
            {children}
        </MenuContext.Provider>
    );

}
export default MenuContext;