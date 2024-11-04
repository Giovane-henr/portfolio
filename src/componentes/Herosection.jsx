import Botao from "./Botao";
import img from "../assets/castelo.png"
function Herosection() {
    return( 
        <div className="bg-cyan-800 flex items-center h-hvm">
            <img src={img} alt="castelo" className="shadow-xl p-9 bg-cyan-700 rounded-full w-1/3 ml-10 " />
            <div className="ml-10 ">
                <h1 className="text-yellow-400 font-bold font-sans p-2 text-xl">
                    designer and programmer  <spanc className="text-yellow-400 underline text-2xl">Giovane Nascimento</spanc>
                </h1>
                <h1 className="font-bold text-left">
                    Estudante de CE-099, membro da Equipe Reboot's da FLL por 5 anos, atuando agora como mentor.<br />
                    Conquistou o prêmio regional de 1º lugar na categoria "core", e cursa programação no SENAI.
                </h1>
                <Botao />
            </div>
            <div>
           {/*<a target="_blank" href="https://www.youtube.com/watch?v=X4GThFgL_9k&pp=ygUSY2FudG9zIHRlbXBsw6FyaW9z">clique aqui para acessar meu currículo</a>*/}
            </div>
        </div>
    );
}
export default Herosection