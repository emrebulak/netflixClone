import { Link } from "react-router-dom"
import logo from "../assets/img/netflix_logo.svg";

const Header = () => {
    return (
        <header className="mb-10">
            <Link to={'/'}>
                <img className="max-w-[150px]" src={logo} alt="Logo" />
            </Link>
        </header>
    )
}

export default Header