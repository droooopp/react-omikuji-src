import React from "react";

export default class Result extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
        <a href="/react-omikuji/">トップに戻る</a>
      </div>
    )
  }
}
