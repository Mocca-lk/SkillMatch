const prompt = require("prompt-sync")()

//Classe base pai para a criação do perfil do usuário usando this
class Usuario {
    constructor(nome, area) {
        this.nome = nome;
        this.area = area;
    }
}

//Criação da classe Candidato extendendo a classe usuário

class Candidato extends Usuario {
    constructor(nome, area, habilidades, experienciaMeses) {
        //chamando classe base
        super(nome, area);
        this.habilidades = habilidades;
        this.experienciaMeses = experienciaMeses;
    }
}

//Criação de um objeto do perfil

const candidato = new Candidato("Maria", "Front-End", ["JavaScript", "GitHub", "Lógica de Programação", "Trello"], 3
);

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

//Usando closure para lembrar de formatar o texto
const criarFormatador = (simbolo) => {
    return (texto) => `${simbolo} ${texto}`
}

const formatarSucesso = criarFormatador("🟢")
const formatarAlerta = criarFormatador("🟡")
const formatarErro = criarFormatador("🔴")

//Usando promise e async/await
const buscarVagasDoBanco = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vagas)
        }, 1000)
    })
}

//Comparar compatibilidade do candidato com a vaga:

const processarMatchmaking = (listaDeVagas) => {
    return listaDeVagas.map(vaga => {
        const habilidadesCompativeis = vaga.requisitos.filter(requisito => candidato.habilidades.includes(requisito))

    //Calcular habilidades Faltantes
    const habilidadesFaltantes = vaga.requisitos.filter(requisito => !candidato.habilidades.includes(requisito))

    //Calcular porcentagem de compatibilidade
    const porcentagem = (habilidadesCompativeis.length / vaga.requisitos.length) * 100

    //Usando estrutura if/else para armazenar nível de compatibilidade
    let statusCompatibilidade = ""

        if (porcentagem >= 80) statusCompatibilidade = formatarSucesso("Alta Compatibilidade 😎")
        else if (porcentagem >= 50 && porcentagem <= 79) statusCompatibilidade = formatarAlerta("Média Compatibilidade😐")
        else statusCompatibilidade = formatarErro("Baixa Compatibilidade 😪")

            return {
                ...vaga,
                porcentagem,
                statusCompatibilidade,
                habilidadesCompativeis,
                habilidadesFaltantes
            }
})
}

const iniciarSistema = async () => {
    console.log("\nCarregando vagas do sistema.")

    const dadosVagas = await buscarVagasDoBanco()
    const vagasCalculadas = processarMatchmaking(dadosVagas)

    let opcao
    do {
        console.log("\n==============================================");
        console.log(`  SISTEMA DE MATCHMAKING - Olá, ${candidato.nome}!`);
        console.log("==============================================");
        console.log("1 - Verificar todas as vagas e compatibilidade");
        console.log("2 - Verificar meu perfil de usuário");
        console.log("3 - Ver a MELHOR vaga para o meu perfil");
        console.log("4 - Sair");
        console.log("==============================================");

        opcao = prompt("Escolha a opção do menu:")

        switch (opcao) {
            case "1":
                vagasCalculadas.forEach(vaga => {
                    console.log(`
                    Empresa: ${vaga.empresa}
                    Vaga: ${vaga.cargo}
                    Classificação: ${vaga.statusCompatibilidade}
                    Compatibilidade de: ${vaga.porcentagem.toFixed(0)}% 
                    Habilidades Encontradas: [${vaga.habilidadesCompativeis.join(", ")}]
                    Habilidades Faltantes: [${vaga.habilidadesFaltantes.length > 0 ? vaga.habilidadesFaltantes.join(", ") : "Nenhuma!"}]`)
                })
                break

        case "2":
            console.log(`
                === SEU PERFIL ===
                Nome: ${candidato.nome}
                Área de Foco: ${candidato.area}
                Suas Habilidades: [${candidato.habilidades.join(", ")}]
                Experiência: ${candidato.experienciaMeses} meses
                `);
                break;

            case "3":
                //Método reduce() para encontrar a melhor vaga 
                const melhorVaga = vagasCalculadas.reduce((melhor, atual) => {
                    return atual.porcentagem > melhor.porcentagem ? atual : melhor;
                });

                console.log(`
                🏆 A VAGA IDEAL PARA VOCÊ:
                Empresa: ${melhorVaga.empresa}
                Cargo: ${melhorVaga.cargo}
                Match Perfeito: ${melhorVaga.porcentagem.toFixed(0)}%
                Nível: ${melhorVaga.statusCompatibilidade}
                Salário: R$ ${melhorVaga.salario}
                `);
                break;

            case "4":
                console.log("\nSaindo do sistema...");
                break;

            default:
                console.log("❌ Opção inválida! Tente novamente.");

        }
    } while (opcao !== "4")
}
  
iniciarSistema()
