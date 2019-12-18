import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {
  state = {
    termino : '',
    imagenes : [],
    pagina : ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
    // LEER STATE DE LA PAGINA ACTUAL
    let pagina = this.state.pagina;
    // SI LA PAGINA ES 1, YA NO IR HACIA ATRAS
    if(pagina === 1) return null;
    // SUMAR UNI A LA PAGINA ACTUAL
    pagina -= 1
    // AGREGAR EL CAMBIO AL STATE
    this.setState({
      pagina
    // HACEMOS EL CALLBACK PARA LLAMAR AL CONSULTAR
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  paginaSiguiente = () => {
    // LEER STATE DE LA PAGINA ACTUAL
    let pagina = this.state.pagina;
    // SUMAR UNI A LA PAGINA ACTUAL
    pagina += 1
    // AGREGAR EL CAMBIO AL STATE
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=14489647-cbeeb0895ff91fd9e58386bca&q=${termino}&per_page=20&page=${pagina}`

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes : resultado.hits }))
  }

  datosBusqueda = (termino) => {
    // Setear el state y hacer un callback
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    });
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de img</p>
          {/* utilizar el componente */}
          <Buscador
            // props => pasar del padre al hijo data
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className="row justify-content-center">
          <Resultado
              imagenes = {this.state.imagenes}
              paginaAnterior = {this.paginaAnterior}
              paginaSiguiente = {this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
