import './botao.css'


function Botao(props) {

    return(
        <button className='botao' onClick={props.funcao} value={props.char}>{props.char}</button>
    )
}

export default Botao