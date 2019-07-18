import React from 'react';
import axios from 'axios';


import Cartao from './cartao';
import Busca from './../busca/busca';


class ListaCartao extends React.Component {
  constructor(props){
    super(props);
    this.state = {cliques: 0, busca: '', dados:[], servidor: []};
    this.addClique = this.addClique.bind(this);
    this.atualizaBusca = this.atualizaBusca.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


  }
  addClique(){
    this.setState((prevState)=> ({
      cliques: prevState.cliques + 1
    }));
  }

  atualizaBusca(evento){
    console.log("adsdas");
    this.setState({busca: evento.target.value});
    if(evento.target.value == ""){
      this.setState({dados:this.state.servidor});
    }
  }

  onSubmit(evento){
    let busca = this.state.busca;
    let dados = this.state.servidor;
    let novaLista = dados.filter(function(item){
      if(item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1 
      || item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1 
      || item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1 
      ) {
        return item;
      }
    });
    this.setState({dados: novaLista});





    evento.preventDefault();
  }

  componentDidMount(){
    let self = this;
    axios.get('http://localhost:8000/servidor.php?dados=1').then(function(response){
      self.setState({
        dados: response.data, 
        servidor: response.data, 
      });
    });
  }

  render(){
    let noticias = this.state.dados;
    let aux =[];
    let novaLista = [];
    for(let k=0; k<noticias.length;k++){
      aux.push(noticias[k]);
      // verificando se o tamanho da variavel atual é igual ao tamanho do grid por linha
      if(aux.length == this.props.qtdLinha){
        novaLista.push(aux);
        // Se o limite do grid for atingido a lista é zerada
        aux = [];
        // teste se estou na ultima contagem da lista(ex: 4 por linha e restam 3)
      }else if(k == noticias.length - 1){
         // estou na ultima listagem
        novaLista.push(aux);
      }
    }
    
    let tamanhoCol = "col m" + this.props.tamanhoCol;

    let listaCartoes = function(grupo, self){
      return grupo.map(function(item,index){
        return (
          <div key={index} className={tamanhoCol}>
            <Cartao dados={item} addClique={self.addClique} />
          </div>
        );
      });
    };

    let self = this;
    let linha = novaLista.map(function(grupo,index){
      return (
        <div key={index} className="row">
          {listaCartoes(grupo, self)}
        </div>
      );
    });

    //console.log(novaLista);

    return (
      <div>
        <div className="row">
          <Busca atualizaBusca={this.atualizaBusca} onSubmit={this.onSubmit} busca={this.state.busca}/>
        </div>
        <p>Quantidade de cliques: {this.state.cliques}</p>
        {linha}
      </div>
    );
  }
}

export default ListaCartao;
