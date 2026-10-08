import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-brand-text">AR.CODER</span>
          </div>
          <div className="footer-socials">
            <a href="#" className="social-link">[ GITHUB ]</a>
            <a href="#" className="social-link">[ LINKEDIN ]</a>
            <a href="#" className="social-link">[ TWITTER ]</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} ANWER RUZIQ. ALL RIGHTS RESERVED.
          </div>
          <div className="footer-system-status">
            <span className="status-dot blink"></span>
            SYSTEM ONLINE
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
