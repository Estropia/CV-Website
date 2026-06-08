import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p>&copy; {year} Mark Nielsen E. Ferreras. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
