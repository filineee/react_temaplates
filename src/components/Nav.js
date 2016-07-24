import React from 'react';
import {Link} from "react-router";
import marked from 'marked';
import langAPI from "./langAPI.js";

console.log(langAPI);


class NavbarHeader extends React.Component {

  showHideTogle () {
      this.props.showHide(!this.props.mob_collapsed);
      console.log(this.props);
  }

  render() {
    return (
          <div class="navbar-header">
          {/*Some comment*/}
            <button 
            /*some comment 2*/
            type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" onClick={this.showHideTogle.bind(this)}>
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
    this.state = {
        collapsed: true,
    };
  }

  componentWillMount () {
    this.setState({mob_collapsed: this.props.mob_collapsed});
  }

  toggleCollapsed() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }



  render() {

    const { collapsed } = this.state;
    const { mob_collapsed } = this.props;
    const {location} = this.props;

    const navClass = collapsed ? "" : "open";

    const mob_open = mob_collapsed ? "" : "in";
    const mob_aria = mob_collapsed ? 'aria-expanded="true"' : "";
    
    const loadFileClassActive = location.pathname.match(/loadfile/)? 'active' : ''; 
    const checkresultClassActive = location.pathname.match(/seeresult/)? 'active' : ''; 
    const menuGrpClassActive = loadFileClassActive == 'active' || checkresultClassActive == 'active'? 'active' : ''; 

    const mainClassActive = location.pathname.match(/^\/$/)? 'active' : ''; 

    return (
      <div class={ "navbar-collapse collapse " + mob_open}  id="bs-example-navbar-collapse-1" >
        <ul class="nav navbar-nav">
          <li class={mainClassActive}><Link to="/">{ langAPI.getLang(this.props.lang, 'main') }</Link></li>
          <li class={"dropdown" + " " + navClass + " " + menuGrpClassActive}  onClick={this.toggleCollapsed.bind(this)}>
            <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{ langAPI.getLang(this.props.lang, 'action') } <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li class={loadFileClassActive}><Link to="loadfile">{marked ( langAPI.getLang(this.props.lang, 'loadfile')) } </Link></li>
              <li class="divider"></li>
              <li class={checkresultClassActive}><Link to="seeresult">{ langAPI.getLang(this.props.lang, 'checkresult') }</Link></li>

            </ul>
          </li>
        </ul>

        <NavbarLang changeLang={this.props.changeLang}/>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"></a></li>
        </ul>
      </div>
    );
  }
}

class NavbarLang extends React.Component {
  render () {
    return (
            <ul class="nav navbar-nav navbar-right">
                <li onClick={()=>{ this.props.changeLang('ru')}}><a href="#">RU</a></li>
                <li onClick={()=>{ this.props.changeLang('en')}}><a href="#">EN</a></li>
            </ul> 
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
    this.state = {
        lang: 'ru',
        mob_collapsed: true
    };
  }

  changeLang (lang) {
    //let lang = this.state.lang == 'ru'? 'en': 'ru';
    this.setState({lang});
  }
  
  showHide (mob_collapsed) {
    this.setState( {mob_collapsed} );
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <NavbarHeader lang={this.state.lang} showHide={this.showHide.bind(this)} mob_collapsed={this.state.mob_collapsed}/>
            <NavbarItems  lang={this.state.lang} changeLang={this.changeLang.bind(this)} mob_collapsed={this.state.mob_collapsed} location={this.props.location}/>
          </div>
        </nav>
          {this.props.children}
      </div>
    );
  }
}
