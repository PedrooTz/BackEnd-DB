/********************************************************
 * Objetivo: Arquivo para realizar as requisições de filmes
 * Data: 30/01/2024
 * Autor: Pedro Pedraga
 * Versão: 1.0
 ********************************************************/

/**********************************************
 * Para realizar a conexão com o banco de dados 
 * precisamos utilizar uma dependencia:
 *    - SEQUELIZE ORM
 *    - PRISMA    ORM 
 *    - FASTFY    ORM
 * 
 * Prisma: 
 * npm install prisma --save
 *******************************************/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

//request - Receber dados
//response - Devolve dados

//Função para configurar as permissões do cors
app.use((request, response, next)=>{
    //Configura quem poderá fazer requisições na API (* - libera para todos | IP restringe o acesso)
    response.header('Access-Control-Allow-Origin', '*');
    //Configura os metodos que poderão ser utilizados na API (GET, POST, PUT e DELETE)
    response.header('Access-Control-Allow-Methods', 'GET');
    app.use(cors());

    next();
})

// app.get('/v1/filmesacme', cors(), async function(request, response,next){
//     let controleFilme = require('./controller/main');
//     let categorias = controleFilme.getDadosFilmes();

//     response.json(categorias);
//     response.status(200);
// });

app.get('/v2/filmesacme/:id', cors(), async function(request, response,next){

    let idFilme = request.params.id
    let controleFilme = require('./controller/main');
    let categorias = controleFilme.getIdFilmes(idFilme);

    response.json(categorias);
    response.status(200);
});

app.listen(8080, function(){
    console.log('Tá funcionando, testa aí');
})

