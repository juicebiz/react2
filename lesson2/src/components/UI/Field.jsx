export default function Field({ field, value, error, onChange }) {
    const { name, label, type = "text", placeholder } = field;
    const errId = `${name}-error`;

    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(name, e.target.value)}
                className={`form-control ${error ? "is-invalid" : ""}`}
                aria-invalid={!!error}
                aria-describedby={error ? errId : undefined}
            />
            {error && (
                <div id={errId} className="invalid-feedback">
                    {error}
                </div>
            )}
        </div>
    );
}