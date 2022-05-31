export default function Cabecalho(props) {
    //props is for reading only
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}