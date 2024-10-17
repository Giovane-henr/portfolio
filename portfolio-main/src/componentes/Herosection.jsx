import Botao from "./Botao";
import img from "../assets/castelo.png"
function Herosection() {
    return( 
        <div className="bg-cyan-800 flex items-center min-h-5-screen">
            <img src={img} alt="castelo" className="shadow-xl p-9 bg-cyan-700 rounded-full w-1/3 ml-10" />
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
        </div>
    );
}
export default Herosection