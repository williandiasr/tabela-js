<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/estilo.css">
  </head>
  <body>

    <header>
      <h1 id="titulo">ALOCSE School</h1>
      <h4>Conhecimento para o futuro</h4>
    </header>

    <main>

      <section>
        <h2>Adicionar aluno</h2><hr>

        <ul id="mensagens-erro"></ul>
        <div class="formulario">

          <form id="form-aluno">

            <label for="txt-nome">Nome:</label>

            <input type="text" id="nome" name="nome" size="30">

            <label for="txt-n1">Nota 1:</label>

            <input type="text" id="n1" name="n1" size="2">

            <label for="txt-n2">Nota 2:</label>

            <input type="text" id="n2" name="n2" size="2">

            <label for="txt-n3">Nota 3:</label>

            <input type="text" id="n3" name="n3" size="2">
            
            <button id="adicionar-aluno">Lançar >></button>
          </form>
      </div>
      </section>

      <section>

        <h2 id="titulo">Lista de alunos</h2><hr>

        <table id="tabela-aluno">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Nota 1</th>
              <th>Nota 2</th>
              <th>Nota 3</th>
              <th>Média Final</th>
              <th>Situação</th>
            </tr>
          </thead>

          <tbody id="alunos">
            <tr class="aluno">
              <td class="td-nome">Pedro da Silva</td>
              <td class="td-n1">0.0</td>
              <td class="td-n2">0.0</td>
              <td class="td-n3">8.0</td>
              <td class="td-media">8</td>
              <td class="td-situacao">Aprovado</td>
            </tr>

            <tr class="aluno">
              <td class="td-nome">Maria Julia</td>
              <td class="td-n1">8.0</td>
              <td class="td-n2">7.0</td>
              <td class="td-n3">7.0</td>
              <td class="td-media">8.0</td>
              <td class="td-situacao">Aprovado</td>
            </tr>

            <tr class="aluno">
              <td class="td-nome">Marcelo Dutra</td>
              <td class="td-n1">4.0</td>
              <td class="td-n2">5.0</td>
              <td class="td-n3">6.0</td>
              <td class="td-media">8.0</td>
              <td class="td-situacao">Aprovado</td>
            </tr>

            <tr class="aluno">
              <td class="td-nome">Fabiana Golveia</td>
              <td class="td-n1">10.0</td>
              <td class="td-n2">8.0</td>
              <td class="td-n3">6.0</td>
              <td class="td-media">8.0</td>
              <td class="td-situacao">Aprovado</td>
            </tr>

            <tr class="aluno">
              <td class="td-nome">Pedro de Oliveira</td>
              <td class="td-n1">5.0</td>
              <td class="td-n2">5.0</td>
              <td class="td-n3">4.9</td>
              <td class="td-media">8.0</td>
              <td class="td-situacao">Aprovado</td>
            </tr>

          </tbody>
          
        </table>

      </section>

    </main>

  </body>
  <script src="script.js" type="text/javascript"></script>
  <script src="scriptForm.js" type="text/javascript"></script>
</html>

const botao = document.querySelector("#adicionar-aluno");

botao.addEventListener("click", function(){
    event.preventDefault();

    let $dadosForm = document.querySelector("#form-aluno");
    let $dadosAluno = novoAluno($dadosForm);

    console.log($dadosAluno.vNome);
    console.log($dadosAluno.vN1);
    console.log($dadosAluno.vN2);
    console.log($dadosAluno.vN3);
    console.log($dadosAluno.media);
    console.log($dadosAluno.calculo);

    let $alunotr = document.createElement("tr");
    let $nometd = document.createElement("td");
    let $n1td = document.createElement("td");
    let $n2td = document.createElement("td");
    let $n3td = document.createElement("td");
    let $mediatd = document.createElement("td");
    let $situacaotd = document.createElement("td");

    $nometd.textContent = $dadosAluno.vNome;
    $n1td.textContent = $dadosAluno.vN1;
    $n2td.textContent = $dadosAluno.vN2;
    $n3td.textContent = $dadosAluno.vN3;
    $mediatd.textContent = $dadosAluno.media.toFixed(2);
    $situacaotd.textContent = $dadosAluno.calculo;
    $situacaotd.classList.add(mostrarSituacao($dadosAluno.media)[1]);
    
    $alunotr.appendChild($nometd);
    $alunotr.appendChild($n1td);
    $alunotr.appendChild($n2td);
    $alunotr.appendChild($n3td);
    $alunotr.appendChild($mediatd);
    $alunotr.appendChild($situacaotd);

    let $tabela = document.querySelector("#tabela-aluno");
    $tabela.appendChild($alunotr);

    $dadosForm.reset();
})

function novoAluno(formulario){
    if(formulario.querySelector("#nome").value.length < 8){
        alert("Obrigatorio informar o nome completo !!");
        formulario.querySelector("#nome").focus();
    }
    else if(formulario.querySelector("#n1").value == ""){
        alert("Obrigatorio informar a primeira nota !!");
        formulario.querySelector("#n1").focus();
    }
    else if(formulario.querySelector("#n2").value == ""){
        alert("Obrigatorio informar a segunda nota !!");
        formulario.querySelector("#n2").focus();
    }
    else if(formulario.querySelector("#n3").value == ""){
        alert("Obrigatorio informar a terceira nota !!");
        formulario.querySelector("#n3").focus();
    }
    else if(isNaN(parseFloat(formulario.querySelector("#n1").value))){
    alert("Inserir apenas valores numericos no campo nota 1");
    formulario.querySelector("#n1").value = "";
    formulario.querySelector("#n1").focus();
    }
    else if(isNaN(parseFloat(formulario.querySelector("#n2").value))){
    alert("Inserir apenas valores numericos no campo nota 2");
    formulario.querySelector("#n2").value = "";
    formulario.querySelector("#n2").focus();
    }
    else if(isNaN(parseFloat(formulario.querySelector("#n1").value))){
    alert("Inserir apenas valores numericos no campo nota 1");
    formulario.querySelector("#n1").value = "";
    formulario.querySelector("#n1").focus();
    }
    else{
        let $vetorAluno = {
            vNome:formulario.querySelector("#nome").value,
            vN1:formulario.querySelector("#n1").value.replace(",","."),
            vN2:formulario.querySelector("#n2").value.replace(",","."),
            vN3:formulario.querySelector("#n3").value.replace(",","."),

            media:calcularMedia(formulario.querySelector("#n1").value.replace(",","."),
            formulario.querySelector("#n2").value.replace(",","."),
            formulario.querySelector("#n3").value.replace(",",".")),

            calculo: mostrarSituacao(calcularMedia(formulario.querySelector("#n1").value.replace(",","."),
            formulario.querySelector("#n2").value.replace(",","."),
            formulario.querySelector("#n3").value.replace(",",".")))[0]
        }
        return $vetorAluno;
    }
}

let $tituloPagina = document.querySelector("#titulo");
// 1. Retorna apenas o primeiro elemento que corresponde aos seletores especificados.
$tituloPagina.textContent = "ETEC Professor Basilides de Godoy";
// 3. A propriedade textContent define ou retorna o conteúdo de texto.
let $tabela = document.querySelector("#tabela-aluno");
console.log($tabela);
let $registroAluno = document.querySelectorAll(".aluno");
console.log($registroAluno);

for(let n = 0; n < $registroAluno.length; n++){
    let $contagem = $registroAluno[n];
    let $nome = $contagem.querySelector(".td-nome").textContent;
    let $n1 = parseFloat($contagem.querySelector(".td-n1").textContent);
    let $n2 = parseFloat($contagem.querySelector(".td-n2").textContent);
    let $n3 = parseFloat($contagem.querySelector(".td-n3").textContent);
    let $mediaFinal = calcularMedia($n1, $n2, $n3);
    let $media = $contagem.querySelector(".td-media");
    $media.textContent = $mediaFinal.toFixed(2);
    $media.style.color = ($mediaFinal >= 6) ? "blue" : "red";
    $media.style.fontWeight = "bold";
    console.log($media)

    let $situacao = $contagem.querySelector(".td-situacao");
    $situacao.textContent = mostrarSituacao($mediaFinal)[0];
    $situacao.classList.add(mostrarSituacao($mediaFinal)[1]);
    
}
function calcularMedia(a,b,c){
    return(parseFloat(a)+parseFloat(b)+parseFloat(c))/3;
}

function mostrarSituacao(x){
    let $resultado = [];
    if (x < 6){
        $resultado.push("Reprovado");
        $resultado.push("reprovado");
    }
    else{
        $resultado.push("Aprovado");
        $resultado.push("aprovado");
    }
    return $resultado;

}

body {
  margin: 0px;
  font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
}

main {
  margin: auto;
  width: 70%;
}

header {
  background-color: #eacc5d;
  color: #003366;
  padding: 0px 0px 10px 0px;
}

h1 {
  font-size: 30px;
  font-weight: bold;
  margin: auto;
  width: 70%;
  padding: 10px;
}

h2 {
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
  color: #065535;
}

h4 {
  font-size: 13px;
  width: 70%;
  margin: auto;
}

.formulario{
  border: 1px solid #52b7bd;
  border-radius: 5px;
	padding: 10px;
  background-color: #d3ffce;
}

table{
	width: 100%;
	margin-bottom : .5em;
  table-layout: fixed;
}

td, th {
	padding: .7em;
	margin: 0;
	border: 1px solid #ccc;
	text-align: center;
    font-size: 14px;
}

th{
	font-weight: bold;
	background-color: #d3ffce;
}

input {
  border-radius: 5px;
  height: 25px;
}

button {
  background-color: #4CAF50; /* Green */
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    box-shadow: 2px 2px gray;
}

.reprovado{
	color:#DE0B0E;
	font-weight:bold;
	background-color: #EBF50E;
}

.aprovado{
	color: #fff;
	font-weight:bold;
	background-color: #0C5009;
}


/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
