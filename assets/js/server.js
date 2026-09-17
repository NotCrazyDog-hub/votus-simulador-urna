// =====================================================
// CHAPA 1
// =====================================================

const chapa1 = [
    {
        nome: "Russas",
        cargo: "Deputada(o) Federal",
        Partido: "Vale do Jaguaribe",
        numero: "1234"
    },
    {
        nome: "Limoeiro do Norte",
        cargo: "Deputada(o) Estadual",
        Partido: "Vale do Jaguaribe",
        numero: "31456"
    },
    {
        nome: "Jaguaribe",
        cargo: "Senadora(or) - 1ª vaga",
        Partido: "Vale do Jaguaribe",
        numero: "278"
    },
    {
        nome: "Quixeré",
        cargo: "Senadora(or) - 2ª vaga",
        Partido: "Vale do Jaguaribe",
        numero: "691"
    },
    {
        nome: "Morada Nova",
        cargo: "Governadora(or)",
        Partido: "Vale do Jaguaribe",
        numero: "37"
    },
    {
        nome: "Tabuleiro do Norte",
        cargo: "Presidente da República",
        Partido: "Vale do Jaguaribe",
        numero: "21"
    }
];


// =====================================================
// CHAPA 2
// =====================================================

const chapa2 = {
    numero: 2,
    nome: "LITORAL LESTE",

    candidatos: [
        {
            nome: "Aracati",
            cargo: "Deputada(o) Federal",
            Partido: "Litoral Leste",
            numero: "5678"
        },
        {
            nome: "Beberibe",
            cargo: "Deputada(o) Estadual",
            Partido: "Litoral Leste",
            numero: "67891"
        },
        {
            nome: "Cascavel",
            cargo: "Senadora(or) - 1ª vaga",
            Partido: "Litoral Leste",
            numero: "542"
        },
        {
            nome: "Fortim",
            cargo: "Senadora(or) - 2ª vaga",
            Partido: "Litoral Leste",
            numero: "783"
        },
        {
            nome: "Icapuí",
            cargo: "Governadora(or)",
            Partido: "Litoral Leste",
            numero: "56"
        },
        {
            nome: "Pindoretama",
            cargo: "Presidente da República",
            Partido: "Litoral Leste",
            numero: "18"
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