interface InputProps {
    type: string;
    placeholder: string;
    pattern: string;
    required: boolean;
}

export function InputContato({ type, placeholder, pattern, required }: InputProps) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                pattern={pattern}
                required={required}
                className="px-3 py-3 bg-gray-color rounded-md text-base md:text-lg font-light text-gray-color-input mt-6 opacity-70"
            />
        </>
    );
}