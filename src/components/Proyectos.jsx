import proyectos from "../data/proyectos";

export default function Proyectos() {
    return(
        <section id="proyectos" className="p-8 bg-gray-100">
            <h2 className="text-xl fotn-semibold mb-4">Proyectos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {proyectos.map((p) => (
                    <div key={p.id} className="border rounded-lg p-4">
                        <h3 className="font-bold">{p.titulo}</h3>
                        <p>{p.descripcion}</p>
                        <a href={p.url} target="_blank" className="text-blue-600">Ver más</a>
                </div>
            ))}
            </div>
        </section>
    )
}