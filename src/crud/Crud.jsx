import React from 'react';
import './Crud.css';
import api from '../api/axiosConfig';

const Crud = () => {

    const getData = async () => {
        try {
            let response = await api.get('/api/v1/information');

            console.log(response.data);
        } catch (error) {
            console.log(`Error al querer obtener los datos: ${error}`);
        }
    }

    const createData = async () => {
        try {
            let response = await api.post('/api/v1/information', {
                id: 1,
                name: 'Alexander Yosimar Cervantes Pineda',
                age: '24',
                country: 'México'
            });

            console.log(response.data);
        } catch (error) {
            console.log(`Error al querer crear los datos: ${error}`);
        }
    }

    const updateData = async () => {
        try {
            let response = await api.put('/api/v1/information', {
                id: 54,
                name: 'Alexander Yosimar',
                age: '24',
                country: 'México'
            });

            console.log(response.data);
        } catch (error) {
            console.log(`Error al querer actualizar los datos: ${error}`);
        }
    }

    const deleteData = async () => {
        try {
            let response = await api.delete('/api/v1/information');

            console.log(response.data);
        } catch (error) {
            console.log(`Error al querer eliminar los datos: ${error}`);
        }
    }

    return (
        <div>
            <button onClick={getData}>
                obtener datos
            </button>
            <button onClick={createData}>
                crear datos
            </button>
            <button onClick={updateData}>
                actualizar datos
            </button>
            <button onClick={deleteData}>
                eliminar datos
            </button>
        </div>
    );

}

export default Crud;
