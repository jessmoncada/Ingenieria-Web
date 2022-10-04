import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getInventarioPorId } from '../../services/inventarioService'
import { getEstadoEquipo } from '../../services/estadoEquipoService';
import { getMarcas } from '../../services/marcaService';
import { getTipoEquipo } from '../../services/tipoEquipoService';
import { getUsuarios } from '../../services/usuarioService';

export const InventarioUpdate = () => {

  const { inventarioId } = useParams();
  console.log(inventarioId);
  const [inventario, setInventario] = useState({});
  const [valoresForm, setValoresForm] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [tipos, setTipoEquipo] = useState([]);
  const [estados, setEstadoEquipo] = useState([]);
  const { serial = '', modelo = '', descripcion = '', color = '', foto = '', fechaCompra = '', precio = '', usuario, marca, tipo, estado } = valoresForm;
 

  const listarUsuarios = async () => {
    try {
      const { data } = await getUsuarios();
      setUsuarios(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarUsuarios();
  },
    []);


  const listarMarcas = async () => {
    try {
      const { data } = await getMarcas();
      setMarcas(data);

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    listarMarcas();
  },
    []);


  const listarTipos = async () => {
    try {
      const { data } = await getTipoEquipo();
      setTipoEquipo(data);

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    listarTipos();
  },
    []);


  const listarEstados = async () => {
    try {
      const { data } = await getEstadoEquipo();
      setEstadoEquipo(data);

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    listarEstados();
  },
    []);
  const getInventario = async () => {
    try {
      const { data } = await getInventarioPorId(inventarioId);
      console.log(data);
      setInventario(data);
    }
    catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getInventario();
  }, [inventarioId]);


  useEffect(() => {
   
      setValoresForm({
        serial: inventario.serial,
        modelo: inventario.modelo,
        descripcion: inventario.descripcion,
        color: inventario.color,
        foto: inventario.foto,
        fechaCompra: inventario.fechaCompra,
        precio: inventario.precio,
        usuario: inventario.usuario,
        marca: inventario.marca,
        tipo: inventario.tipoEquipo,
        estado: inventario.estadoEquipo,
      });
  }, [inventario]);


  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
  }
  return (
    <div className='cantainer-fluid mt-3 mb-2'>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title'> Detalle Activo </h5>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-1 text-white'>
              <img src={inventario?.foto} />

            </div>
            <div className='col-md-9 text-white'>
              <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Serial</label>
                      <input type="text" name='serial'
                        required
                        minLength={3}
                        value={serial}
                        onChange={(e) => handleOnChange(e)}
                        className="form-control" />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Modelo</label>
                      <input type="text" name='modelo'
                        required
                        value={modelo}
                        onChange={(e) => handleOnChange(e)}
                        className="form-control" />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Descripción</label>
                      <input type="text" name='descripcion'
                        required
                        value={descripcion}
                        onChange={(e) => handleOnChange(e)}
                        className="form-control" />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Color</label>
                      <input type="text" name='color'
                        required
                        value={color}
                        onChange={(e) => handleOnChange(e)}
                        className="form-control" />
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Foto</label>
                      <input type="url" name='foto'
                        required
                        value={foto}
                        onChange={(e) => handleOnChange(e)}
                        className="form-control" />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Fecha Compra</label>
                      <input type="date" name='fechaCompra'
                        required
                        value={fechaCompra}
                        onChange={(e) => handleOnChange(e)}
                        className="form-control" />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Precio</label>
                      <input type="number" name='precio'
                        required
                        value={precio}
                        onChange={(e) => handleOnChange(e)}
                        className="form-control" />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Usuario</label>
                      <select className="form-select"
                        required
                        onChange={(e) => handleOnChange(e)}
                        name='usuario'
                        value={usuario}>

                        <option value="">--Seleccione--</option>
                        {
                          usuarios.map(({ _id, nombre }) => {
                            return <option key={_id} value={_id}> {nombre}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Marca</label>
                      <select className="form-select"
                        required
                        onChange={(e) => handleOnChange(e)}
                        name='marca'
                        value={marca}>

                        <option value="">--Seleccione--</option>
                        {
                          marcas.map(({ _id, nombre }) => {
                            return <option key={_id} value={_id}> {nombre}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Tipo Equipo</label>
                      <select className="form-select"
                        required
                        onChange={(e) => handleOnChange(e)}
                        name='tipo'
                        value={tipo}>

                        <option value="">--Seleccione--</option>
                        {
                          tipos.map(({ _id, nombre }) => {
                            return <option key={_id} value={_id}> {nombre}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Estado Equipo</label>
                      <select className="form-select"
                        required
                        onChange={(e) => handleOnChange(e)}
                        name='estado'
                        value={estado}>

                        <option value="">--Seleccione--</option>
                        {
                          estados.map(({ _id, nombre }) => {
                            return <option key={_id} value={_id}> {nombre}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    <button>Guardar</button>

                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
