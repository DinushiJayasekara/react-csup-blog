import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="navbar">
            <Link to="/">
                <div className="navbar-logo">
                    <img src="/assets/images/logo.png" alt="Logo" />
                    <span>CSUP Blog</span>
                </div>
            </Link>
            <div className="navbar-links">
                <Link to="/create">
                    <button>Add New Blog</button>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;