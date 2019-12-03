import React, { Component } from 'react';
import Buscador from './componentes/Buscador';

class App extends Component {
  state = {
    termino : ''
  }

  consultarApi = () => {
    const url = `https://pixabay.com/api/?key=14489647-cbeeb0895ff91fd9e58386bca&q=${this.state.termino}`
    console.log(url);
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
        {this.state.termino}
      </div>
    );
  }
}

export default App;
