import React from 'react';

export default class Header extends React.Component {

  eventHandle (e) {
    console.log(e);
    this.props.onChangeTitle (e.target.value);
  }

  render() {
    return (
      <div>
        <header>{this.props.title}</header>
        <div> <input onChange={this.eventHandle.bind(this)} /></div>
      </div>
    );
  }
}
