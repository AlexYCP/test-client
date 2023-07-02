import PropTypes, { useRef } from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const Form = ({ fetching, loged, onLogin }) => {

    let refEmail = useRef();
    let refPassword = useRef();

    return (
        <div className='form'>
            <form onSubmit={
                async (values) => onLogin(values.email, values.password)
            }>
                <label htmlFor='email'>Correo electrónico</label>
                <input id='email' ref={refEmail} type='email' placeholder='correo electrónico' />
                <label htmlFor='password'>Contraseña</label>
                <input id='password' ref={refPassword} type='password' placeholder='contraseña' />
                <button type='submit'>iniciar sesión</button>
                {fetching ? (<p>cargando...</p>) : null}
            </form>
        </div>
    );

}

Form.propTypes = {
    fetching: PropTypes.bool.isRequired,
    loged: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
}

const mapStateToProps = (state) => { }

const mapDispatchToProps = (dispatch) => { }

export default connect(mapStateToProps, mapDispatchToProps)(Form)