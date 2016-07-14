import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

 import Archives from "./pages/Archives";
// import Featured from "./pages/Featured";
// import Settings from "./pages/Settings";
import Nav from "./components/Nav.js";
import Tables from "./components/Table.js";
//
// import Layout from "./components/Layout";

// class Layout extends React.Component {
//   render() {
//     return <h1>It works!</h1>;
//   };
// }
const app = document.getElementById('app');
//ReactDOM.render(<Tables />, app);


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Nav}>
      <IndexRoute component={Tables} />
      <Route path="accounts" component={Archives}/>
    </Route>
  </Router>

  , app);

  // <Route path="archives" name="archives" component={Archives}></Route>
  // <Route path="archives" name="archives" component={Archives}></Route>
  // <Route path="settings" name="settings" component={Settings}></Route>
  //<IndexRoute component={Featured}></IndexRoute>


// Arrow functions
// Basic Syntax
// (param1, param2, …, paramN) => { statements }
// (param1, param2, …, paramN) => expression
//          // equivalent to:  => { return expression; }
//
// // Parentheses are optional when there's only one parameter:
// (singleParam) => { statements }
// singleParam => { statements }
//
// // A function with no parameters requires parentheses:
// () => { statements }
//
// Advanced Syntax
// // Parenthesize the body to return an object literal expression:
// params => ({foo: bar})
//
// // Rest parameters and default parameters are supported
// (param1, param2, ...rest) => { statements }
// (param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }
//
// // Destructuring within the parameter list is also supported
// var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
// f();  // 6




// import defaultMember from "module-name";
// import * as name from "module-name";
// import { member } from "module-name";
// import { member as alias } from "module-name";
// import { member1 , member2 } from "module-name";
// import { member1 , member2 as alias2 , [...] } from "module-name";
// import defaultMember, { member [ , [...] ] } from "module-name";
// import defaultMember, * as name from "module-name";
// import "module-name";

// export { name1, name2, …, nameN };
// export { variable1 as name1, variable2 as name2, …, nameN };
// export let name1, name2, …, nameN; // also var
// export let name1 = …, name2 = …, …, nameN; // also var, const
//
// export default expression;
// export default function (…) { … } // also class, function*
// export default function name1(…) { … } // also class, function*
// export { name1 as default, … };
//
// export * from …;
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;

// //------ lib.js ------
// export const sqrt = Math.sqrt;
// export function square(x) {
//     return x * x;
// }
// export function diag(x, y) {
//     return sqrt(square(x) + square(y));
// }
//
// //------ main.js ------
// import { square, diag } from 'lib';
// console.log(square(11)); // 121
// console.log(diag(4, 3)); // 5


// //------ myFunc.js ------
// export default function () { ··· } // no semicolon!
//
// //------ main1.js ------
// import myFunc from 'myFunc';
// myFunc();


// Or a class:
//
// //------ MyClass.js ------
// export default class { ··· } // no semicolon!
//
// //------ main2.js ------
// import MyClass from 'MyClass';
// const inst = new MyClass();
