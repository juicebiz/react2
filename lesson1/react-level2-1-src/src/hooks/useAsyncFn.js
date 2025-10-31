import { useEffect, useState } from "react";

export default function useAsyncFn(fn, ...params) {
    const [result, setResult] = useState({
        pending: true,
        data: null,
        error: null,
    });

    useEffect(() => {
        fn(...params)
            .then(data => {
                setResult({
                    pending: false,
                    error: null,
                    data
                })
            })
            .catch(error => {
                setResult({
                    pending: false,
                    data: null,
                    error
                })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return result;
}