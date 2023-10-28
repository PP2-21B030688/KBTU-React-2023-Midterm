function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-copyright">All rights reserved (c) {currentYear}</p>
        </footer>
    );
}

export default Footer;