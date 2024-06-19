interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    placeholder: string;
    required: boolean;
    options: Option[];
}

export function SelectContato({ placeholder, required, options }: SelectProps) {
    return (
            <select
                required={required}
                className="px-3 py-3 bg-gray-color rounded-md text-lg font-light text-gray-color-input mt-6 opacity-70 mb-10"
            >
                <option value="">
                    {placeholder}
                </option>
                {
                    options?.map((opt: any, index: number) => {
                        return <option key={index} value={opt.value}>{opt.label}</option>
                    })
                }
            </select>
    );
}