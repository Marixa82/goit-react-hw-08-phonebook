// import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { HOME_ROUTE, CONTACTS_ROUTE } from "../constants/route";
import { Link } from "./StylesAppBar.styled";
import { authSelectors } from '../redux/auth';


export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectUserIsLoggedIn)
    return (
       <nav>
        <Link to={HOME_ROUTE}>Home</Link>    
      
        {isLoggedIn && <Link to={CONTACTS_ROUTE}>Phonebook</Link>}
      </nav> 
    )
    
}

