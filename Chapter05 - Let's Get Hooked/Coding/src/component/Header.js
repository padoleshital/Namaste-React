import { LOGO_URL } from "../utils/constants";

//Header Component display the logo, search bar and nav bar

const Header = () =>{
    return (
        <div className='Header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL } alt='food-logo'/>
            </div>
            <div className='search-container'>
            <i className="fas fa-search"></i> <input className='search-bar' type='text' placeholder='Search for restaurants, cuisines...'/><button className='button'>Search</button>
            </div>
            <div className="nav-items">
                <ul className='nav-bar'>
                    <li >Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;