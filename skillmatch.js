//Criação do perfil/um objeto para representar o candidato:

const candidato = {
    nome: "Maria",
    area: "Front-End",
    habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Trello"],
    experienciaMeses: 3
}

// console.log(candidato) - Teste para validação da feature

//Criação da lista/array de vagas
const vagas = [
    {
        id: 1,
        empresa: "TechStart",
        cargo: "Desenvolvedor Front-End Júnior",
        requisitos: ["JavaScript", "GitHub", "Lógica de Programação"],
        salario: 2800,
        modalidade: "Remoto"
    },

    {
        id: 2,
        empresa: "CodeLab",
        cargo: "Estágio Front-End",
        requisitos: ["JavaScript", "GitHub", "Kanban"],
        salario: 1800,
        modalidade: "Híbrido"
    },

    {
        id: 3,
        empresa: "WebSolutions",
        cargo: "Programador JavaScript Júnior",
        requisitos: ["JavaScript", "Arrays", "Objetos", "Funções"],
        salario: 3000,
        modalidade: "Presencial"
    }
]


// console.log(vagas[0]) - Teste de validação feature Vagas