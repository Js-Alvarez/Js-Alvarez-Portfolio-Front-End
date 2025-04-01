//Proyectos
const arrayProyectos = [
    {
        id:1,
        nombre:"Amigo Invisible",
        lenguaje:["JavaScript"],
        descripcion: "Ideal para hacer sorteos en la escuela u oficina " 
    },
    {
        id:2,
        nombre:"Memomi Game",
        lenguaje:["Vite", "JavaScript"],
        descripcion: "Un divertido jugo para desafiar tu memoria" 
    },
    {
        id:3,
        nombre:"igo Invisible",
        lenguaje:[],
        descripcion: "" 
    },
    {
        id:4,
        nombre:"igo Invisible",
        lenguaje:[],
        descripcion: "" 
    },
 
    
];

const divProyecto = document.querySelector("#proyecto");

arrayProyectos.forEach(proyecto => {
    const divCodigo=document.createElement("div");

    divCodigo.className="codigoProyecto";

    divCodigo.addEventListener("click",()=>seleccionar(divCodigo,))
    divProyecto.append(divCodigo)
    
});

