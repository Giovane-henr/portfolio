
function Projetos({nome, descricao, link}){
    return(
     
        <div className="flex flex-col items-center w-1/4 p-4 text-white">
            <div className="w-full flex flex-col items-center">
            <h2>{nome}</h2>
            <p>{descricao}</p>
    </div>
</div>
)

}

export default Projetos