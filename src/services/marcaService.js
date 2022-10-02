import { axiosInstance } from '../helpers/axios_config';

const getMarcas = () => {
    return axiosInstance.get('marcas', {
    headers: {
        'Content-type': 'application/json'
    }
    });
}

const crearMarcas = (data) => {
    return axiosInstance.post('marcas', data, {
    headers: {
        'Content-type': 'application/json'
    }
    });
}

const editMarcas = (marcaId, data) => {
    return axiosInstance.put(`marcas/${marcaId}`, data, {
    headers: {
        'Content-type': 'application/json'
    }
    });
}

export {
    getMarcas, crearMarcas, editMarcas
}