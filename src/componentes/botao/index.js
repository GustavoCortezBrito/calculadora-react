import "./botao.css";

function Botao({ char, onClick }) {
  const props = { char, onClick };
  return (
    <button className='botao' {...props}>
      {char}
    </button>
  );
}

export default Botao;
