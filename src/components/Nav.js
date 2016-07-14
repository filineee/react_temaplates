import React from 'react';

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
            <a class="navbar-brand" href="#">Brand</a>
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
          <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
          <li><a href="#">Link</a></li>
          <li class={"dropdown" + " " + navClass}  onClick={this.toggleCollapsed.bind(this)}>
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a></li>
              <li class="divider"></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input class="form-control" placeholder="Search" type="text" />
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"></a></li>
        </ul>
      </div>
    );
  }
}

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
