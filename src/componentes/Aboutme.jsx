
import Tecnologia from "./Tecnologia";
function Aboutme(){
    return(
<section id="sobre" className="bg-primary-500 h-screen ">
    <div className="pl-56 container flex items-center"><h1 className="text-2xl"><span className="text-primary-900 text-5xl">Olá! Eu sou um desenvolvedor apaixonado por tecnologia e engenharia</span> <br/> Atualmente cursando o ensino médio e com experiência em várias linguagens e ferramentas de programação. <br/>Tenho interesse em projetos de software, desenvolvimento web e automação, sempre buscando unir minhas habilidades com minhas paixões em áreas como aviação e engenharia automobilística.<br/>

Com mais de quatro anos de experiência em competições como a FLL, aprendi a importância da inovação, trabalho em equipe e resolução de problemas, trazendo esses valores para os meus projetos pessoais. <br/>Entre minhas habilidades estão C++, Python, JavaScript, HTML, CSS, JSX e frameworks como Tailwind, além de utilizar GitHub para controle de versões.<br/>

Sou movido pela curiosidade e pela vontade de aprender coisas novas, e estou sempre em busca de novos desafios que me ajudem a crescer como profissional e como pessoa. No futuro, espero contribuir para o desenvolvimento de tecnologias que possam impactar positivamente o mundo.</h1>

    </div>
        <div className=" py-8">
        <h1 className=" text-7xl pt-6 pb-3 bg-secondary-900 text-primary-900 rounded-full text-center">---Área de atuação---</h1>
    </div>
    <div className="flex justify-stretch">
    <Tecnologia image="devicon-python-plain" nome="Python"/>
    <Tecnologia image="devicon-cplusplus-plain" nome="C++"/>
    <Tecnologia image="devicon-javascript-plain" nome="JS"/>
    <Tecnologia image="devicon-html5-plain" nome="HTML"/>
    <Tecnologia image="devicon-css3-plain" nome="CSS"/>
</div>
</section>


   );
}
export default Aboutme