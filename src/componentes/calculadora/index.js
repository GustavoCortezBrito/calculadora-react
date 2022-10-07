import './calculadora.css'
import Display from '../display'
import Botao from '../botao'
import { useState } from 'react'



function Calculadora () {

    const [tela,setTela] = useState('') 

    const aoClicado = (evento) => {
        setTela(tela + evento.target.value)
    }

    const limpa = () => {
        setTela('')
    }

    const inverte = (evento) => {
        setTela(parseInt(tela) * -1)
    }

    const calcula = (evento) => {
        const oi = eval(tela)
        setTela(oi)
    }

    return (
        <div className="calculadora">
            <input type='text' value={tela} className='display'></input>
            <div className='botoes'>
                <Botao char='AC' funcao = {limpa}></Botao>
                <Botao char='+/-'funcao = {inverte}></Botao>
                <Botao char='.'funcao = {aoClicado}></Botao>
                <Botao char='1'funcao = {aoClicado}></Botao>
                <Botao char='2'funcao = {aoClicado}></Botao>
                <Botao char='3'funcao = {aoClicado}></Botao>
                <Botao char='4'funcao = {aoClicado}></Botao>
                <Botao char='5'funcao = {aoClicado}></Botao>
                <Botao char='6'funcao = {aoClicado}></Botao>
                <Botao char='7'funcao = {aoClicado}></Botao>
                <Botao char='8'funcao = {aoClicado}></Botao>
                <Botao char='9'funcao = {aoClicado}></Botao>
                <Botao char='0'funcao = {aoClicado}></Botao>
                <Botao char='-'funcao = {aoClicado}></Botao>
                <Botao char='+'funcao = {aoClicado}></Botao>
                <Botao char='/'funcao = {aoClicado}></Botao>
                <Botao char='*'funcao = {aoClicado}></Botao>
                <Botao char='='funcao = {calcula}></Botao>
            </div>
        </div>
    )
}

export default Calculadora