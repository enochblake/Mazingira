import Login from "./Login"
import SignUp from "./signUp"
export default function Navbar(){
    return(
        <nav className="navbar">
            <Login/>
            <SignUp/>
            
        </nav>
            )
}