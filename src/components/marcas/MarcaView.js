import React, {useState, useEffect } from "react"
import {    getMarcas, crearMarcas, editMarcas } from '../../services/marcaService';

export const MarcaView = () => {

  const [valoresForm, setValoresForm] = useState({});
  const [marcas, setMarcas] = useState([])
  const {nombre = " ", estado=""} = valoresForm;


  const listarMarcas = async () => {
    try{
      const resp = await getMarcas();
      setMarcas(resp.data);

    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    listarMarcas();
  }, [])

  const handleOnChange = (e) => {
    setValoresForm({...valoresForm, [e.target.name]: e.target.value});
  }

  const handleCrearMarca = async (e) => {
    e.preventDefault();
    console.log(valoresForm);
    try{
      const resp = await crearMarcas(valoresForm);
      console.log(resp.data);
      setValoresForm({nombre: '', estado: '' });
 
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
      <button type="submit" className="btn btn-outline-primary">Guardar</button>
      </form>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Estado</th>
      </tr>
  </thead>
  <tbody>

    {
      marcas.map(marca => {
        return <tr>
          <td> {marca.nombre}</td>
          <td> {marca.estado}</td>
        </tr>
      })
    }
   
  </tbody>
</table>
      </div>

  )
}
