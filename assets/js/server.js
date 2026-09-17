const chapa2 = {

            numero: 2,

            nome: "Docente",

            candidatos: [

                {
                    nome: "Elenir",
                    cargo: "Deputada(o) Federal",
                    Partido: "Docente",
                    numero: "5678",
                foto: "Elenir.png"
                },

                {
                    nome: "Rosangela",
                    cargo: "Deputada(o) Estadual",
                    Partido: "Docente",
                    numero: "67891",
                foto: "Rosangela.png"
                },

                {
                    nome: "Israely",
                    cargo: "Senadora(or) - 1ª vaga",
                    Partido: "Docente",
                    numero: "542",
                foto: "Israely.png"
                },

                {
                    nome: "Silvania",
                    cargo: "Senadora(or) - 2ª vaga",
                    Partido: "Docente",
                    numero: "783",
                foto: "Silvania.png"
                },

                {
                    nome: "Natan",
                    cargo: "Governadora(or)",
                    Partido: "Docente",
                    numero: "56",
                foto: "Natan.png"
                },

                {
                    nome: "Rusilânia",
                    cargo: "Presidente da República",
                    Partido: "Docente",
                    numero: "18",
                foto: "Rusilania.png"
                }

            ]

        };

// =====================================================
// TODOS OS CANDIDATOS
// =====================================================

const candidatos = [
    ...chapa1,
    ...chapa2.candidatos
];


// =====================================================
// CARGOS
// =====================================================

const cargos = [
    "Deputada(o) Federal",
    "Deputada(o) Estadual",
    "Senadora(or) - 1ª vaga",
    "Senadora(or) - 2ª vaga",
    "Governadora(or)",
    "Presidente da República"
];