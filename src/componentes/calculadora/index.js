import "./calculadora.css";
import Display from "../display";
import Botao from "../botao";
import { useState } from "react";

function Calculadora() {
  const [tela, setTela] = useState("");

  const aoClicado = (evento) => {
    console.log(evento.target.__reactProps$wn3epl29d2.char);
    setTela(tela + evento.target.__reactProps$wn3epl29d2.char);
  };

  const limpa = () => {
    setTela("");
  };

  const inverte = (evento) => {
    setTela(parseInt(tela) * -1);
  };

  const calcula = (evento) => {
    const oi = eval(tela);
    setTela(oi);
  };

  const teste = [
    { char: "AC", funcao: limpa },
    { char: "+/-", funcao: inverte },
    { char: "1", funcao: aoClicado },
    { char: "2", funcao: aoClicado },
    { char: "3", funcao: aoClicado },
    { char: "4", funcao: aoClicado },
    { char: "5", funcao: aoClicado },
    { char: "6", funcao: aoClicado },
    { char: "7", funcao: aoClicado },
    { char: "8", funcao: aoClicado },
    { char: "9", funcao: aoClicado },
    { char: "0", funcao: aoClicado },
    { char: "+", funcao: aoClicado },
    { char: "-", funcao: aoClicado },
    { char: "*", funcao: aoClicado },
    { char: "/", funcao: aoClicado },
    { char: "=", funcao: calcula },
  ];

  return (
    <div className='calculadora'>
      <Display value={tela} />
      <div className='botoes'>
        {teste.map((item) => (
          <Botao char={item.char} onClick={item.funcao} />
        ))}
      </div>
    </div>
  );
}

export default Calculadora;
