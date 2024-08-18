import "./Footer.scss";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="footer">
      ⓒ {currentYear} miss-gif. All Rights Reserved.
    </footer>
  );
};

export default Footer;
