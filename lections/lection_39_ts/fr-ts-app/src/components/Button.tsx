import React, { useEffect, useState } from 'react';

export interface ButtonProps {
    title: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    const [list, setList] = useState<number[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setList([1, 2, 3]);
        }, 2000)
    }, [])


    return <div>Button - {props.title} - {list.join('_')}</div>;
}

export default Button;