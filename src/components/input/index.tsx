import { InputHTMLAttributes } from "react";

type InputType = InputHTMLAttributes<HTMLInputElement> & {
    errors?: string[] | undefined
}

export default function Input({ title, id, errors, ...rest }: InputType) {
    return (
        <div className="flex flex-col w-3/5 my-3">
            <label className="text-xl" htmlFor={id}>
                {title}
            </label>
            <input className="bg-white rounded-lg p-3 w-full mt-2" id={id} {...rest} />
            {errors  && (
                <ul className="p-3 list-decimal">
                    {errors.map((error) => (
                        <li className="text-sm text-red-600" key={error}>{error}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}