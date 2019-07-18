import React from 'react';
import axios from 'axios';
import NavMenu from './nav-menu';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {menu: []};


  }

  componentDidMount(){
    let self = this;
    axios.get('http://localhost:8000/servidor.php?menu=1').then(function(response){
      self.setState({
        menu: response.data, 
      });
    });
  }


  render(){
    let menu = this.state.menu;
    let corNav = "nav-wrapper "+ this.props.cor;
    return (
      <nav>
        <div className={corNav}>
          <div className="container">
            <a href="#" className="brand-logo">{this.props.titulo}</a>
            <NavMenu menu={menu} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
