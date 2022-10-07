import React, {useState, useEffect } from "react"
import {     getUsuarios, crearUsuarios, editUsuarios } from '../../services/usuarioService';
import Moment from 'moment'

export const UsuarioView = () => {

  const [valoresForm, setValoresForm] = useState({});
  const [usuarios, setUsuarios] = useState([])
  const {nombre = " ", email="", estado="" , fechaActualizacion= '', fechaCreacion =''} = valoresForm;



  const listarUsuarios = async () => {
    try{
      const resp = await getUsuarios();
      setUsuarios(resp.data);

    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    listarUsuarios();
  }, [])

  const handleOnChange = (e) => {
    setValoresForm({...valoresForm, [e.target.name]: e.target.value});
  }

  const handleCrearUsuarios = async (e) => {
    e.preventDefault();
    console.log(valoresForm);
    try{
      const resp = await crearUsuarios(valoresForm);
      console.log(resp.data);
      setValoresForm({nombre: '', estado: '', email: '', fechaActualizacion: '', fechaCreacion :''});
 
    }catch(error){
      console.log(error);
    }
    
  }



  

  


  

  return (
      <div className="container-fluid">
        <form onSubmit={(e) => handleCrearUsuarios(e)}>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input required name='nombre' input={nombre} type="text" class="form-control" 
        onChange = { (e) => handleOnChange(e)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input required name='email' input={nombre} type="email" class="form-control" 
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
      <th scope="col">Email</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha Creación</th>
      <th scope="col">Fecha Actualización</th>
      </tr>
  </thead>
  <tbody>

    {
      usuarios.map(usuario => {
  
        return <tr>
          <td> {usuario.nombre}</td>
          <td> {usuario.email}</td>
          <td> {usuario.estado}</td>
          <td> {Moment (usuario.fechaCreacion).format('DD-MM-YYYY HH:mm')}</td>
          <td> {Moment (usuario.fechaActualizacion).format('DD-MM-YYYY HH:mm')}</td>
        </tr>
      })
    }
   
  </tbody>
</table>
      </div>

  )
}



