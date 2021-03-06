// import React, { Component } from 'react';
// import './App.css';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './components/MenuComponent';
// import {DISHES} from './shared/dishes'

// //function App() {
// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       dishes:DISHES
//     }
    
//   }
//   render(){
//     return (
//       <div className="App">
//           <Navbar dark color="primary">
//             <div className="container">
//               <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//             </div>
//           </Navbar>
//           <Menu dishes={this.state.dishes}/>
//         </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
class App extends Component{  
  render(){
    return (
      <BrowserRouter>
        <div >
            <Main></Main>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;