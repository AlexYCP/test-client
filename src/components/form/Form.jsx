import React, { useRef } from 'react';
import './Form.css';
import api from '../../api/axiosConfig';

const Form = () => {
// configuración para el despliegue completado
    const refId = useRef();
    const refName = useRef();
    const refAge = useRef();
    const refCountry = useRef();

    const createInformation = async (e) => {
        try {
            e.preventDefault();

            let response = await api.post('/api/v1/information', {
                name: refName.current.value,
                age: refAge.current.value,
                country: refCountry.current.value
            });

            refName.current.value = '';
            refAge.current.value = '';
            refCountry.current.value = '';

            console.log(response.data);
        } catch (error) {
            console.log(`Error al crear la información: ${error}`);
        }
    }

    const updateInformation = async (e) => {
        try {
            e.preventDefault();

            let response = await api.put('/api/v1/information', {
                id: refId.current.value,
                name: refName.current.value,
                age: refAge.current.value,
                country: refCountry.current.value
            });

            refName.current.value = '';
            refAge.current.value = '';
            refCountry.current.value = '';

            console.log(response.data);
        } catch (error) {
            console.log(`Error al actualizar la información: ${error}`);
        }
    }

    return (
        <div className='form'>
            <form className='form-post' onSubmit={createInformation}>
                <label>
                    Nombre:
                    <input type='text' ref={refName} placeholder='escribe tu nombre' />
                </label>
                <label>
                    Edad:
                    <input type='text' ref={refAge} placeholder='escribe tu edad' />
                </label>
                <label>
                    Pais:
                    <input type='text' ref={refCountry} placeholder='escribe tu pais' />
                </label>
                <button type='submit'>crear información</button>
            </form>
            <form className='form-put' onSubmit={updateInformation}>
                <label>
                    Identificador:
                    <input type='number' ref={refId} placeholder='escribe el identificador' />
                </label>
                <label>
                    Nombre:
                    <input type='text' ref={refName} placeholder='escribe tu nombre' />
                </label>
                <label>
                    Edad:
                    <input type='text' ref={refAge} placeholder='escribe tu edad' />
                </label>
                <label>
                    Pais:
                    <input type='text' ref={refCountry} placeholder='escribe tu pais' />
                </label>
                <button type='submit'>actualizar información</button>
            </form>
        </div>
    );

}

export default Form;
