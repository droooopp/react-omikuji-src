import React from "react";
import { Link } from 'react-router-dom'

export default class Button extends React.Component {
  render() {
    return (
      <Link to="/result">{this.props.text}</Link>
    )
  }
}
