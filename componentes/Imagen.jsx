/*import React, { useEffect, useState } from "react";
const axios = require('axios');

const Imagen = (props) => {
    const [datos, setDatos] = useState([]);
    
    let ghostList = [];
    useEffect(() => {
        if(props.id==0) setDatos("")
        else{
            console.log("props:")
            console.log(props.id)
            axios.get(`http://localhost:5000/Mascota`)
            .then(function (response) {
                console.log(response.data[0]);
                ghostList=(response.data[0])
            })
            .catch(function (error) {
                console.log("No se han traido los datos de :( " + props.id)
                console.log(error);
            })
            .then(function () {
                console.log("Finally:")
                console.log(ghostList)
                setDatos(ghostList);
            })   
        }
    }, [props])
    console.log(datos.Imagen)
    return (
        <img
            style={{margin:17.25, marginLeft: 12.25, marginRight:22.25, borderWidth: 4, borderColor: "#655ea3", borderRadius: 6,height: 50, width: 50}}
            src={datos.Imagen ?? "..."}
        />
    );
}

export default Imagen;*/