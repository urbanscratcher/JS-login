import { useReducer, useEffect } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                dat: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                dat: action.dat,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                dat: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function useAsync(callback, deps = [], skip = false) {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        dat: null,
        error: false
    });

    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const dat = await callback();
            dispatch({ type: 'SUCCESS', dat });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    useEffect(() => {
        if (skip) return;
        fetchData();
    }, deps);

    return [state, fetchData];
}

export default useAsync;