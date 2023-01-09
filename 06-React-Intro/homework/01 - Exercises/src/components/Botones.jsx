import React from "react";

export default class Botones extends React.Component{
    render(){
        return ( <div>
            <button onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button>
            <button onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>
        </div>
        );
    }
}
//export default Botones; el export se puede poner aqui abajo o directamente como esta puesto en la funcion