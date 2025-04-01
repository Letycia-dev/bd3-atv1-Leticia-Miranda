const database = 'BD3-aula1'; 

use ('DB3-aula1');
db['Livraria'].find();

/* Seleciona livros em um intervalo de valores:
entre 100 e 150
uso dos operadores relacionais $gte e $lte */

//db['Livraria'].find({

//    valor : {$gte: 100, $lte: 150,}

//});

/* Seleciona apenas livros da categoria "fantasia Heroica" e ocm valores menor ou igual
a 100, opereador lógico: $and
operador relacional: $lte e $eq */

//db['Livraria'].find({

//      $and : [
//          {categoria: {$eq: 'Fantasia Heroica'}},
//          {valor :{$lte:100}},
//     ]

//});

/* Seleciona  livros da categoria "fantasia Heroica" ou ocm valores menor ou igual
a 100, opereador lógico: $aor
operador relacional: $lte e $eq */

//db['Livraria'].find({

//   $or : [
//        {categoria: {$eq: 'Fantasia Heroica'}},
//        {valor :{$lte:100}},
//    ]
//});

/* Seleciona livros com valor maior que 150 ou cujo
nome do autor possua a palavra tolkien sem diferenciar minuscula de maiuscula
operador lógico $or
operador relacional $gt
e uso do REGEX insentivo do MONGODB */

//db['Livraria'].find({

//    $or : [
//         {valor :{$gt:150}},
//         {autor : /tolkien/i},
//     ]
// });

/* Seleciona todos os livros do autor Tolkien e ordena
de forma ascendente e descendente
Uso da função sort:
1 - para ascendente
-1 - descendente */

//Listagem Ascendente
//db['Livraria'].find({
//    autor : 'J.R.R Tolkien'
//}).sort({valor:1});

//Listagem Descendente
//db['Livraria'].find({
//    autor : 'J.R.R Tolkien'
//}).sort({valor:-1});

/*
    Seleciona livros que contenha o nome de autor
    Isaac Asimov.
    Operador relacional $in
    sem vizualizar id e codigo
*/

db['Livraria'].find({
    autor: {
        $in:['Isaac Asimov']
    }
}, {
    _id:0,
    codigo:0
}).sort({valor:1});

