import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { API_CALL_REQUEST } from '../actions/asyncActions';

// Escucha la siguiente acción
export function* watcherSaga() {
    yield call(API_CALL_REQUEST, workerSaga);
}

// Es llamado por watcherSaga, hace el login y despacha una acción
export function* workerSaga(action) {
    try {
        // hace la petición http
        let response = yield call(fetchHttp(action.payload.request));

        yield put({
            type: action.payload.okAction
        });
    } catch (error) {
        yield put({
            type: action.payload.failAction,
            payload: {
                error: error
            }
        });
    }
}

function fetchHttp(request) {
    return function () {
        return axios(request);
    }
}
