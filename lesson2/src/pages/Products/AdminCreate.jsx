import React, {useMemo} from "react";
import useForm from "@/hooks/useForm.js";
import useApi from "@/hooks/useApi";
import Field from "@/components/UI/Field.jsx";
import AsyncHelper from "@/components/Shared/AsyncHelper";
import Loader from "@/components/UI/Loader.jsx";

export default function ProductsCreatePage() {
    const api = useApi();

    const {
        form,
        errors,
        pending,
        notice,
        send,
        update,
        result
    } = useForm(
        api.products.add,
        {title: "", price: "", rest: ""},
        (result) => {
            console.log("Товар создан:", result);
        }
    );

    const asyncData = {
        idle: !pending && !result && !notice,
        pending,
        data: result,
        error: notice ? { message: notice } : null
    };

    const fields = useMemo(() => [
        {name: "title", label: "Title", type: "text", placeholder: "Название товара"},
        {name: "price", label: "Price", type: "text", placeholder: "Цена"},
        {name: "rest", label: "Rest", type: "text", placeholder: "Остаток"},
    ], []);

    const handleSubmit = async (e) => {
        await send(e);
    };

    const renderForm = () => (
        <>
            {notice && (
                <div className="alert alert-danger">{notice}</div>
            )}
            <form onSubmit={handleSubmit} noValidate>
                {fields.map(f => (
                    <Field
                        key={f.name}
                        field={f}
                        value={form[f.name] ?? ""}
                        error={errors[f.name]}
                        onChange={update}
                    />
                ))}
                <button type="submit" className="btn btn-primary">
                    Create Product
                </button>
            </form>
        </>
    );

    return (
        <>
            <h1>Создание товара</h1>

            <AsyncHelper
                asyncData={asyncData}
                idleRender={renderForm}
                loaderRender={() => <Loader />}
                render={() => (
                    <div>
                        <div className="alert alert-success mb-3">
                            Товар успешно создан!
                        </div>
                        {renderForm()}
                    </div>
                )}
            />
        </>
    );
}