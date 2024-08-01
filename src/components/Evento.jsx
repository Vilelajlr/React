

function Evento({numero}){

    function meuEvento(){
        alert(`Evento disparado! ${numero}`);
    }


    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    );
}


export default Evento;