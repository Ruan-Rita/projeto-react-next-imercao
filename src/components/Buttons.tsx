import { useState } from 'react';
import styles from '../style/components/Button.module.css';

interface ButtosProps {
    color: string;
}


export default function Button(props: ButtosProps){

    const [valor, setValor] = useState(10);

    function mude(){
        setValor(valor+1);
    }
    return (
        <div>
            <button className={styles.buttonAction} onClick={mude} type="button">{props.color} Valor: {valor}</button>
        </div> 
    )
}