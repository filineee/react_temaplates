import React from "react";
import {Link} from "react-router";

import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

//
// import Footer from "./Footer";
// import Header from "./Header";

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Oh no it is you"
    };
  }

  changeTitle (title) {
    this.state.title;
    this.setState({title: this.state.title + ' ' + title});
  }

  render() {

    return (
      <div>
           <Header title={this.state.title} onChangeTitle={this.changeTitle.bind(this)}/>
           {this.props.children}
           <Link to="archives">Archives</Link>
           <Content />
           <Footer />
      </div>
    );
  }
}
