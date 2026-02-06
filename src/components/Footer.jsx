import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-text">
                        &copy; {currentYear} . جميع الحقوق محفوظة.
                    </p>
                    <p className="footer-subtitle">
                        AR.CODER
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
