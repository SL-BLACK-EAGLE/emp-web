import React from "react";
import {Input} from "@nextui-org/react";
import {color} from "framer-motion";


type InputProps = {
    type?: string;
    label?: string;
    placeholder?: string;
    startContent?: React.ReactNode;
    variant?:any;
    color?:any;
}
const InputComponent = ({type, label, placeholder, startContent, variant, color }: InputProps) => {
    return (
        <Input
            type={type}
            label={label}
            placeholder={placeholder}
            labelPlacement="outside"
            startContent={startContent}
            variant={variant}
            color={color}
        />
    )
}
export default InputComponent