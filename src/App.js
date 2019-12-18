import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {
  state = {
    termino : '',
    imagenes : []
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=14489647-cbeeb0895ff91fd9e58386bca&q=${termino}&per_page=10`

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes : resultado.hits }))
  }

  datosBusqueda = (termino) => {
    // Setear el state y hacer un callback
    this.setState({
      termino
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
        <Resultado
            imagenes = {this.state.imagenes}
        />
      </div>
    );
  }
}

export default App;
