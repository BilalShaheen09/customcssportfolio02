import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "../css-files/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2 className="footer-title">Bilal Shaheen</h2>
          <p className="footer-description">Web Developer | Creative Thinker | Tech Enthusiast</p>
        </div>

        <div className="footer-icons">
          <Link href="https://github.com/BilalShaheen09" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/bilal-shaheen-437016244/" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaLinkedin />
          </Link>
        </div>

        <p className="footer-text">&copy; {new Date().getFullYear()} Bilal Shaheen. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
