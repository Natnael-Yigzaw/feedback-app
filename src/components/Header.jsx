const Header = ({ bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h1>Feedback App</h1>
      </div>
    </header>
  );
};

Header.defaultProps = {
  bgColor: "#2C3E50",
  textColor: "#21759B",
};

export default Header;
