import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ fetching, loged, onLogin }) => {

    return (
        <div className='login-form'>
            <form onSubmit={
                async (values) => onLogin(values.email, values.password)
            }>
                <label htmlFor='email'>Correo electrónico</label>
                <input id='email' type='email' placeholder='correo electrónico' />
                <label htmlFor='password'>Contraseña</label>
                <input id='password' type='password' placeholder='contraseña' />
                <button type='submit'>iniciar sesión</button>
                {fetching ? (<p>cargando...</p>) : null}
            </form>
        </div>
    );

};

LoginForm.propTypes = {
    fetching: PropTypes.bool.isRequired,
    loged: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
