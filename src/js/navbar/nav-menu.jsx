import React from 'react';

class NavMenu extends React.Component {
  constructor(props){
    super(props);
    // valor default do atributo menuAtivo
    this.state = {menuAtivo: 'Home'};
    this.alteraActive= this.alteraActive.bind(this);
  }

  alteraActive(titulo, self){
    self.setState({menuAtivo: titulo});
  }

  render(){
    // recupera o valor do estado através do this
    //console.log(this.state.menuAtivo);
    // perde-se a referencia do this dentro da funcão 'map'. Portando podemos atribuir o this 
    let self = this;
    let lista = this.props.menu.map(function(value){
      return (
        <li key={value.titulo} onClick={self.alteraActive.bind(null, value.titulo, self)}
         className={self.state.menuAtivo == value.titulo ? 'active' : ''}><a href={value.link}>{value.titulo}</a>
        </li>
      );
    });

    return (
      <ul id="nav-mobile" className="right">
        {lista}
      </ul>
    );
  }
}

export default NavMenu;
