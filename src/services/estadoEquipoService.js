import { axiosInstance } from '../helpers/axios_config';

const getEstadoEquipo = () => {
    return axiosInstance.get('estadoEquipo', {
    headers: {
        'Content-type': 'application/json'
    }
    });
}

const crearEstadoEquipo= (data) => {
    return axiosInstance.post('estadoEquipo', data, {
    headers: {
        'Content-type': 'application/json'
    }
    });
}

const editEstadoEquipo = (estadoEquipoId, data) => {
    return axiosInstance.put(`estadoEquipo/${estadoEquipoId}`, data, {
    headers: {
        'Content-type': 'application/json'
    }
    });
}

export {
    getEstadoEquipo, crearEstadoEquipo, editEstadoEquipo
}