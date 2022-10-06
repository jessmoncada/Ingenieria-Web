import React, {useState, useEffect } from "react"
import {    getMarcas, crearMarcas, editMarcas } from '../../services/marcaService';

export const MarcaView = () => {

  const [valoresForm, setValoresForm] = useState({});
  const {nombre = " ", estado=""} = valoresForm;

  const handleOnChange = (e) => {
    setValoresForm({...valoresForm, [e.target.name]: e.target.value});
  }

  const handleCrearMarca = async (e) => {
    e.preventDefault();
    console.log(valoresForm);
    try{
      const resp = await crearMarcas(valoresForm);
      console.log(resp.data);
 
    }catch(error){
      console.log(error);
    }
    
  }

  return (
      <div className="container-fluid">
        <form onSubmit={(e) => handleCrearMarca(e)}>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input required name='nombre' input={nombre} type="text" class="form-control" 
        onChange = { (e) => handleOnChange(e)}/>
      </div>
      <div className="mb-3">
        <label className="form-floating"> Estado </label>
          <select required name='estado' value= {estado} className="form-select"
          onChange = { (e) => handleOnChange(e)}>
            <option selected>--Seleccione--</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
   
   

  )
}
