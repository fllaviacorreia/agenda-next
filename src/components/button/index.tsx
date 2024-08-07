import { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    color: string;
}

export default function Button({title, color, ...rest}:ButtonType){
    return (
        <div className="flex my-3 w-3/5 justify-center">
            <button className={`w-5/6 text-white p-2 rounded-2xl ${color}`} {...rest}>{title}</button>
        </div>
    )
}