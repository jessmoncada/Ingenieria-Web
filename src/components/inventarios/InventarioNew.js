import React from 'react'

export const InventarioNew = ({ handleOpenModal }) => {

  return (
    <div className='sidebar'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <div className='sidebar-header'>
              <h3>Nuevo Inventario</h3>
              <i class="fa-solid fa-square-xmark" onClick={handleOpenModal}></i>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <hr />
          </div>
        </div>
        <form>
          <div className='row'>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Serial</label>
                <input type="text" name='serial' className="form-control" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Modelo</label>
                <input type="text" name='modelo' className="form-control" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <input type="text" name='descripcion' className="form-control" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Color</label>
                <input type="text" name='color' className="form-control" />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Foto</label>
                <input type="text" name='foto' className="form-control" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Fecha Compra</label>
                <input type="date" name='fecha' className="form-control" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Precio</label>
                <input type="number" name='precio' className="form-control" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Usuario</label>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Marca</label>
                <input type="text" name='serial' className="form-control" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Tipo Equipo</label>
                <input type="text" name='modelo' className="form-control" />
              </div>
            </div>
            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Estado Equipo</label>
                <input type="text" name='descripcion' className="form-control" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
