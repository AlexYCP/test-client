// Acciones asíncronas
// Watcher Saga escucha
export const API_CALL_REQUEST = 'API_CALL_REQUEST';
// Despachada por Worker Saga
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
// Despachada por Worker Saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

// Acción despachadora genérica
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: method,
                url: url,
                data: data
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    }
}
