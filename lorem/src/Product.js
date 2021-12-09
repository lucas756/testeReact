import React from 'react'

export default function Product() {
    const [product, setProduct] = React.useState([
        {
            nome: 'iphone',
            preco: 2.000
        },
        {
            nome: 'pia',
            preco: 3.000
        }
    ])

    const [somaTotal, setSomaTotal] = React.useState(0)
    const [input, setInput] = React.useState('')

    React.useEffect(() => {
        let total = 0
        {product.map(item => {
            total = total + item.preco
        })}

        setSomaTotal(total)
    }, [])

    function buscarProduct() {
        setProduct([product.find(item => item.nome === input)])
    }

    return (
        <>
        <input type="text" placeholder="Busque aqui" onChange={(e) => {
            setInput(e.target.value)
        }} />
        <button onClick={buscarProduct}>Buscar</button>
            {product.map(item => (
                <>
                    <h1>Nome: {item.nome}</h1>
                    <h1>Preço: R$ {item.preco.toString().replace('.', ',')}</h1>
                </>
            ))}
            <h1>Total: {somaTotal}</h1>
        </>
    )
}