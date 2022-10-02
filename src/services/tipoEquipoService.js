import { axiosInstance } from '../helpers/axios_config';

const getTipoEquipo = () => {
    return axiosInstance.get('tipoEquipo', {
    headers: {
        'Content-type': 'application/json'
    }
    });
}

const crearTipoEquipo = (data) => {
    return axiosInstance.post('tipoEquipo', data, {
    headers: {
        'Content-type': 'application/json'
    }
    });
}

const editTipoEquipo = (tipoEquipoId, data) => {
    return axiosInstance.put(`tipoEquipo/${tipoEquipoId}`, data, {
    headers: {
        'Content-type': 'application/json'
    }
    });
}

export {
    getTipoEquipo, crearTipoEquipo, editTipoEquipo
}