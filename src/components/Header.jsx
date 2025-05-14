export default function Header (){
    return(
        <header className="p-6 bg-gray-900-text-white flex justify-between items-center">
            <h1 className="text-2x1 font-bold">Mi nombre es Héctor Toro</h1>
            <nav>
                <a href="#acerca" className="mx-2">Sobre mi</a>
                <a href="#proyectos" className="mx-2">Proyectos</a>
                <a href="#contacto" className="mx-2">Contacto</a>
            </nav>
        </header>       
    );
}