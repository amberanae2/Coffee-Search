import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return <div className="message-box">Coffee Anyone?{this.props.name}</div>;
  }
}
export default Header;
