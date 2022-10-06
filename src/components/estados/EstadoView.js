import React, {useState, useEffect } from "react"
import {       getEstadoEquipo, crearEstadoEquipo, editEstadoEquipo } from '../../services/estadoEquipoService';
import Moment from 'moment'

export const EstadoView = () => {

  const [valoresForm, setValoresForm] = useState({});
  const [marcas, setEstadoEquipo] = useState([])
  const {nombre = " ", estado="" , fechaActualizacion= '', fechaCreacion =''} = valoresForm;


  const listarEstados = async () => {
    try{
      const resp = await getEstadoEquipo();
      setEstadoEquipo(resp.data);

    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    listarEstados();
  }, [])

  const handleOnChange = (e) => {
    setValoresForm({...valoresForm, [e.target.name]: e.target.value});
  }

  const handleCrearTipo = async (e) => {
    e.preventDefault();
    console.log(valoresForm);
    try{
      const resp = await crearEstadoEquipo(valoresForm);
      console.log(resp.data);
      setValoresForm({nombre: '', estado: '', fechaActualizacion:'', fechaCreacion:'' });
 
    }catch(error){
      console.log(error);
    }
    
  }

  return (
      <div className="container-fluid">
        <form onSubmit={(e) => handleCrearTipo(e)}>
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
      <div className="mb-3">
        <label className="form-label">Fecha Creación</label>
        <input required name='fechaCreacion' input={fechaCreacion} type="date" class="form-control" 
        onChange = { (e) => handleOnChange(e)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Fecha Actualización</label>
        <input required name='fechaActualizacion' input={fechaActualizacion} type="date" class="form-control" 
        onChange = { (e) => handleOnChange(e)}/>
      </div>
   
      <button type="submit" className="btn btn-outline-primary">Guardar</button>
      </form>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha Creación</th>
      <th scope="col">Fecha Actualización</th>
      </tr>
  </thead>
  <tbody>

    {
      marcas.map(tipo => {
  
        return <tr>
          <td> {tipo.nombre}</td>
          <td> {tipo.estado}</td>
          <td> {Moment (tipo.fechaCreacion).format('DD-MM-YYYY HH:mm')}</td>
          <td> {Moment (tipo.fechaActualizacion).format('DD-MM-YYYY HH:mm')}</td>
        </tr>
      })
    }
   
  </tbody>
</table>
      </div>

  )
}


