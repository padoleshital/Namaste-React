const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            created By <i class="fa-solid fa-heart"></i>
            <a href="https://www.linkedin.com/in/shital-padole1010/" target="_blank">
            Shital Padole
            </a>
            <i class="fa-solid fa-copyright"></i>
        {year}
        <strong>Zomato</strong>
        </div>
    )
  }
export default Footer;  