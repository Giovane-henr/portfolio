function Header(){
    return(
        <header className="bg-cyan-900">
        <h1 className="font-bold p-4 text-yellow-400">Giovane</h1>
        <nav className="container flex justify-end  space-x-2 text-yellow-400 text-3xl font-bold ">

            <a href="#sobre" className="p-2  rounded-full mb-2 hover:text-black" > sobre</a>
            <a href="#portfolio" className="p-2  rounded-full mb-2 hover:text-black"> portfolio</a>
            <a href="#contato" className="p-2 rounded-full mb-2 hover:text-black"> contato</a>
        </nav>
        </header>
    )
}
export default Header