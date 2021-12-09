import React from "react"
import Product from "./Product"

export default function Lucas() {

  //soma = 0 

  const [soma, setSoma] = React.useState(0)
  const [number, setNumber] = React.useState(0)
  const [array, setArray] = React.useState([
    {
      name: 'lampada1',
      cor: 'vermelha'
    },
    {
      name: 'lampada2',
      cor: 'amarela'
    }
  ])

  function adicao() {
    setSoma(soma + 1)
  }
  function diminuir() {
    setSoma(soma - 1)
  }

  function teste(type) {
    if (type === 'adicionar') {
      setNumber(number + 1)
    } else if (type === 'retirar') {
      setNumber(number - 1)
    } else if (type === 'manter') {
      setNumber(number)
    } else if (type === 'mutiplicar') {
      setNumber(number * 2)
    }
  }




  return (
    // <>
    //   <button onClick={adicao} >Somar</button>
    //   <button onClick={diminuir} >Subtrair</button>
    //   <h1>{soma}</h1>

    //   <hr />

    //   <button onClick={() => teste('adicionar')} >Soma com 1 função</button>
    //   <button onClick={() => teste('retirar')}>Subtrair com 1 função</button>
    //   <button onClick={() => teste('manter')}>manter com 1 função</button>
    //   <button onClick={() => teste('mutiplicar')}>mutiplicar com 1 função</button>
    //   <h1>{number}</h1>

    //   <hr />

    //   {
    //     array.map(item => (
    //       <>
    //         <h1>Name: {item.name}</h1>
    //         <h1>Cor: {item.cor}</h1>
    //       </>
    //     ))

    //   }

    //   {/* variavel dinamica, é sempre dentro do bigodinho */}

    // </>

    <Product />
  );
}
