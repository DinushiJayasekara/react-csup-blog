import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src="/assets/images/logo.png" alt="Logo" />
                <span>CSUP Blog</span>
            </div>
            <div className="navbar-links">
                <button>Add Blog</button>
            </div>
        </header>
    );
}

export default Navbar;