import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>JSX é um conceito central</h1>
    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }
    return (
        <Layout titulo="Entendendo jsx">
        <div>
            {titulo}
            {subtitulo()}
            <p>{JSON.stringify({nome: 'Amanda', idade: 19})}</p>
        </div>
        </Layout>
    )
}