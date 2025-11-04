import {useCallback, useState} from "react";

export default function useForm(fn, initial = {}, onDone){
    const [form, setForm] = useState(initial);
    const [errors, setErrors] = useState({});
    const [pending, setPending] = useState(false);
    const [notice, setNotice] = useState(null);
    const [result, setResult] = useState(null);

    const update = useCallback((field, value) => {
        setForm(prev => ({
            ...prev,
            [field]: value
        }));
        setErrors(prev => ({ ...prev, [field]: null }));
    }, []);

    const send = useCallback(async (event) => {
        if (event) {
            event.preventDefault();
        }

        setPending(true);
        setErrors({});
        setNotice(null);
        setResult(null);

        try {
            const result = await fn(form);
            setResult(result);

            if (onDone) {
                onDone(result);
            }

            return result;
        } catch (error) {
            if (error.data) {
                setErrors(error.data);
            } else if (error.message) {
                setNotice(error.message);
            } else {
                setNotice('Произошла неизвестная ошибка');
            }
            throw error;
        } finally {
            setPending(false);
        }
    }, [form, fn, onDone]);

    return {
        form,
        errors,
        pending,
        notice,
        send,
        update,
        result
    };
}