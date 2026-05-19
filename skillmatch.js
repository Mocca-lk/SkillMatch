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

//Comparar compatibilidade do candidato com a vaga:
vagas.forEach(vaga => {
    //Filtrando os requisitos das vagas
    const habilidadesCompativeis = vaga.requisitos.filter(requisito => candidato.habilidades.includes(requisito))

    //Calcular habilidades Faltantes
    const habilidadesFaltantes = vaga.requisitos.filter(requisito => !candidato.habilidades.includes(requisito))

    //Calcular porcentagem de compatibilidade
    const totalRequisitosVaga = vaga.requisitos.length
    const porcentagem = (habilidadesCompativeis.length / totalRequisitosVaga) * 100

    //Usando estrutura if/else para armazenar nível de compatibilidade
    let statusCompatibilidade = ""

        if (porcentagem >= 80) {
            statusCompatibilidade = "Alta Compatibilidade 😎"
        } else if (porcentagem >= 50 && porcentagem <= 79) {
            statusCompatibilidade = "Média Compatibilidade 🫤"
        } else {
            statusCompatibilidade = "Baixa Compatibilidade 😪"
        }


    console.log(`
        Empresa: ${vaga.empresa}
        Vaga: ${vaga.cargo}
        Classificação: ${statusCompatibilidade}
        Compatibilidade de: ${porcentagem.toFixed(0)}% 
        Habilidades Encontradas: ${habilidadesCompativeis}
        Habilidades Faltantes: ${habilidadesFaltantes}
        `)

})