import React from 'react';
import {Link} from "react-router";

class NavbarHeader extends React.Component {
  render() {
    return (
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Pepsi</a>
          </div>
    );
  }
}

class NavbarItems extends React.Component {

  constructor() {
    super();
    this.state = {collapsed: true};
  }

  toggleCollapsed() {
    console.log(this.state)
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }


  render() {

    const { collapsed } = this.state;

    const navClass = collapsed ? "" : "open";

    return (
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><Link to="/">Главная</Link></li>
          <li class={"dropdown" + " " + navClass}  onClick={this.toggleCollapsed.bind(this)}>
            <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Действие <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><Link to="loadfile">Загрузить файл</Link></li>
              <li class="divider"></li>
              <li><Link to="seeresult">Посмотреть результаты</Link></li>

            </ul>
          </li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"></a></li>
        </ul>
      </div>
    );
  }
}
//<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
// <form class="navbar-form navbar-left" role="search">
//   <div class="form-group">
//     <input class="form-control" placeholder="Search" type="text" />
//   </div>
//   <button type="submit" class="btn btn-default">Submit</button>
// </form>
export default class Nav extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <NavbarHeader />
            <NavbarItems />

          </div>
        </nav>
          {this.props.children}
      </div>
    );
  }
}
