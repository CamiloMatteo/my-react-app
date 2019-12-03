// Class component
// Metodos del ciclo de vida y state
import React, { Component } from 'react';

class Buscador extends Component {
    busquedaRef = React.createRef();
    // Handler
    obtenerDatos = (e) => {
        e.preventDefault();
        // Obtener datos desde el input
        const termino = this.busquedaRef.current.value;
        // Enviar datos al componente Principal
        this.props.datosBusqueda(termino);
    }

    render() {
        return ( 
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg"  placeholder="Busca una img, Ej: Pelota" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..." />
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;