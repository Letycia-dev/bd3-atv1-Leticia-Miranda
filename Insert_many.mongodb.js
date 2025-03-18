const database = 'BD3-NoSQL-AtlasMongoDB'; 

use (database);

db['bd3-nosql-atv1'].insertMany(
    [
        {
          "codigo": "1",
          "nome": "Ana Souza",
          "cpf": "111.111.111-11",
          "curso": "Engenharia",
          "imagem": "/alunos/ana_souza.jpg",
          "valor": 120,
          "categoria": "Estudante Universitário"
        },
        {
          "codigo": "2",
          "nome": "Bruno Lima",
          "cpf": "222.222.222-22",
          "curso": "Medicina",
          "imagem": "/alunos/bruno_lima.jpg",
          "valor": 100,
          "categoria": "Estudante Universitário"
        },
        {
          "codigo": "3",
          "nome": "Carlos Silva",
          "cpf": "333.333.333-33",
          "curso": "Direito",
          "imagem": "/alunos/carlos_silva.jpg",
          "valor": 115,
          "categoria": "Estudante Universitário"
        },
        {
          "codigo": "4",
          "nome": "Daniela Mendes",
          "cpf": "444.444.444-44",
          "curso": "Administração",
          "imagem": "/alunos/daniela_mendes.jpg",
          "valor": 180,
          "categoria": "Estudante Universitário"
        },
        {
          "codigo": "5",
          "nome": "Eduardo Pereira",
          "cpf": "555.555.555-55",
          "curso": "Ciência da Computação",
          "imagem": "/alunos/eduardo_pereira.jpg",
          "valor": 85,
          "categoria": "Estudante Universitário"
        },
        {
          "codigo": "6",
          "nome": "Fernanda Rocha",
          "cpf": "666.666.666-66",
          "curso": "Psicologia",
          "imagem": "/alunos/fernanda_rocha.jpg",
          "valor": 75,
          "categoria": "Estudante Universitário"
        },
        {
          "codigo": "7",
          "nome": "Gabriel Nunes",
          "cpf": "777.777.777-77",
          "curso": "Economia",
          "imagem": "/alunos/gabriel_nunes.jpg",
          "valor": 195,
          "categoria": "Estudante Universitário"
        },
        {
          "codigo": "8",
          "nome": "Helena Castro",
          "cpf": "888.888.888-88",
          "curso": "Arquitetura",
          "imagem": "/alunos/helena_castro.jpg",
          "valor": 98,
          "categoria": "Estudante Universitário"
        },
        {
          "codigo": "9",
          "nome": "Igor Almeida",
          "cpf": "999.999.999-99",
          "curso": "Física",
          "imagem": "/alunos/igor_almeida.jpg",
          "valor": 120,
          "categoria": "Estudante Universitário"
        },
        {
          "codigo": "10",
          "nome": "Juliana Costa",
          "cpf": "000.000.000-00",
          "curso": "Biologia",
          "imagem": "/alunos/juliana_costa.jpg",
          "valor": 110,
          "categoria": "Estudante Universitário"
        }
    ]
);