import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { httpRequest } from '../store/actions/asyncActions';

const mapStateToProps = (state) => {
    return {
        fetching: state.userState.fetching,
        loged: state.userState.loged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => {
            const url = 'https://reqres.in/api/login';

            const data = {
                email: email,
                password: password
            }

            dispatch(httpRequest('post', url, data));
        }
    }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default LoginFormContainer;
