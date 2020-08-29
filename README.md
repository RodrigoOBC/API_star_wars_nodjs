<div align="center">
  <img src="static/imagens/foto_capa.png"/> 
</div>

# DESAFIO API STAR WARS B2W - Rodrigo Cabral

## Índice

 <ol>
  <li><a href="#Sobre">O projeto</a></li>
  <li><a href="#Tecnologias">Tecnologias utilizadas</a></li>
  <li><a href="#Config">Instalando a API</a></li>
  <li><a href="#Funcionalidades">Funcionalidades</a>
    <ol>
      <li><a href="#Insere">Inserir um planeta</a></li>
      <li><a href="#Lista">Listar todos os planetas</a></li>
      <li><a href="#buscaid">Listar por ID</a></li>
      <li><a href="#buscanome">Listar por NOME</a></li>
      <li><a href="#deleta">Excluir um planeta</a></li>
    </ol>
  </li>
  <li><a href="#final">Considerações finais</a>
 
</ol> 

<dl>
  
### <a name="Sobre">1. O projeto</a> 

&nbsp;&nbsp;&nbsp;&nbsp;O objetivo deste projeto é criar uma API rest que armazenará dados como nome de um planeta, clima e terreno. Retornando também a quantidade de aparições de cada planeta nos filmes de Star Wars registrada na API SWAPI.

### <a name="Tecnologias">2.Tecnologias utilizadas</a> 
&nbsp;&nbsp;&nbsp;&nbsp;Para o projeto foi utilizado a linguagem NodeJS.

### <a name="Config">3.Instalando a API</a>  

&nbsp;&nbsp;&nbsp;&nbsp;Para utilizar o projeto deverá ser instalado o <a href="https://nodejs.org/en/download/">NodeJS</a>, a IDE de sua preferência,
<a href="https://www.mongodb.com/download-center?jmp=nav#community">MongoDB Community Server</a> baseado em seu sistema operacional.
&nbsp;&nbsp;&nbsp;&nbsp;

#### &nbsp;&nbsp;&nbsp;&nbsp;Banco de Dados
&nbsp;&nbsp;&nbsp;&nbsp; Para a realização desse desafio, usei um banco local.

&nbsp;&nbsp;&nbsp;&nbsp; src > Data_base > index.py:

```js

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/planetas',{ useNewUrlParser:true})
mongoose.Promise = global.Promise

module.exports = mongoose

```



#### &nbsp;&nbsp;&nbsp;&nbsp;Git
&nbsp;&nbsp;&nbsp;&nbsp;Clone o projeto no repositorio de preferencia, utilizando o seguinte codigo : 
```JSON
git clone git@github.com:RodrigoOBC/Desafio_star_wars_nodjs.git

```
#### &nbsp;&nbsp;&nbsp;&nbsp;Nodejs
&nbsp;&nbsp;&nbsp;&nbsp;Para instalar a API, você deverá realizar o seguinte comando:

```JSON
npm install

```

&nbsp;&nbsp;&nbsp;&nbsp;<b>Obs1:</b> Todas as bibliotecas necessarias, serão instaladas ao realizar esse procedimento  </br>

&nbsp;&nbsp;&nbsp;&nbsp;<b>Obs2:</b> O usuário deverá está na pasta raiz do projeto  </br>

#### &nbsp;&nbsp;&nbsp;&nbsp;Inciar o servdor

```JSON
node app.js

```

&nbsp;&nbsp;&nbsp;&nbsp;<b>Obs3:</b> Antes de testar qualquer endpoint, o comando acima deve ser executado  </br>

### <a name="Funcionalidades">4.Funcionalidades</a>

&nbsp;&nbsp;&nbsp;&nbsp;Aqui veremos as funcionalidades pedidas, no desafio :

#### <a name="Insere">I. Inserir um planeta:</a>  

&nbsp;&nbsp;&nbsp;&nbsp;Para inserir um planeta deve ser feita uma requisição post em json para o endpoint "/planeta/inserir_planeta".

&nbsp;&nbsp;&nbsp;&nbsp;Ex:
http://localhost:3000/planeta/inserir_planeta
```JSON
{
   planeta_id: int,
   Nome: "string",
   Clima: "string",
   Terreno: "string",
   Filmes: int
}
```
&nbsp;&nbsp;&nbsp;&nbsp;Será criado um novo Planeta.

&nbsp;&nbsp;&nbsp;&nbsp;Um planeta que não apareceu nos filmes também pode ser criado, porém seu numero de aparições será automaticamente 0.

&nbsp;&nbsp;&nbsp;&nbsp;Caso esse planeta exista ele retornará o erro 400 "Planeta já cadastrado".
&nbsp;&nbsp;&nbsp;&nbsp;Caso aconteça algum problema, ele retornará o erro 400 "Erro ao cadastrar Planeta".

#### <a name="Lista">II. Listar todos os planetas:</a>

&nbsp;&nbsp;&nbsp;&nbsp;Para listar todos os planetas basta fazer uma solicitação get para o endpoint "/planeta/buscar_planeta".

&nbsp;&nbsp;&nbsp;&nbsp;Ex:
http://127.0.0.1:3000/planeta/buscar_planeta

&nbsp;&nbsp;&nbsp;&nbsp;Serão retornados todos os planetas , juntamente com as seus respectivos: ids, nomes, climas, terrenos e aparições em filmes no formato json. As aparições dos planetas são atualizadas em toda solicitação.

#### <a name="buscaid">III. Listar por ID:</a>

&nbsp;&nbsp;&nbsp;&nbsp;Para fazer uma busca por id o usuário deverá fazer uma solicitação get para o seguinte endpoint: "/planeta/IDPlaneta". 

&nbsp;&nbsp;&nbsp;&nbsp;Ex:
http://127.0.0.1:3000/planeta/1

&nbsp;&nbsp;&nbsp;&nbsp;Caso seja inserida uma id inexistente, será retornado um json com erro "Planeta não encontrado". 

#### <a name="buscanome">IV. Listar por NOME:</a>

&nbsp;&nbsp;&nbsp;&nbsp;Para fazer uma busca por id o usuário deverá fazer uma solicitação get para o seguinte endpoint: "/planeta/buscar_planeta/NomePlaneta".

http://127.0.0.1:3000/planeta/buscar_planeta/Sullust

&nbsp;&nbsp;&nbsp;&nbsp;<b>Obs1:</b> Lembrando que o valor inserido deverá ser codificado na url  </br>

&nbsp;&nbsp;&nbsp;&nbsp;Ex:
```
http://127.0.0.1:3000/buscar_planeta/nome=Yavin%20IV
```

#### <a name="deleta">V. Excluir um planeta:</a>

&nbsp;&nbsp;&nbsp;&nbsp;Para excluir um planeta basta fazer um rqueste tipo "DELETE" para o endpoint "/deletar_planeta/IDPlaneta" indicando o nome.

http://127.0.0.1:3000/planeta/deletar_planeta/1


&nbsp;&nbsp;&nbsp;&nbsp;Caso esse planeta não exista ele retornará o erro 400 "Planeta não encontrado".

### <a name="final">6. Considerações finais</a>

&nbsp;&nbsp;&nbsp;&nbsp;API criada e documentada por Rodrigo de Brito de Oliveira Cabral,agradeço a oportunidade de poder demonstrar minhas habilidades  e <b>que a força esteja com voces!!!</b>

<div align="center">
  <img src="static/imagens/Mestre_yoda.gif"/> 
</div>