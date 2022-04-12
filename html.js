var text = [
  "&lt;!DOCTYPE <span3>html</span3>&gt;",
  "&lt;<span>html</span>&gt;",
  "&nbsp;&lt;<span>head</span>&gt;",
  "&nbsp;&nbsp;&lt;title&gt;A turma do balaco baco&lt;/title&gt;",
  "&nbsp;&lt;/<span>head</span>&gt;",
  "",
  "&nbsp;&lt;<span>body</span>&gt;",
  
  "&nbsp;&nbsp;<span>Pelo</span> <span2>visto você</span2> <span3>escaneou nosso</span3> <span>QR Code.</span>",
  "&nbsp;&nbsp;<span>Bom...</span> <span2>já que</span2> <span3>você chegou</span3> <span4>até </span4><span>aqui,</span>",
  "&nbsp;&nbsp;<span>gostaria</span> <span2>de seguir</span2> <span3>para o</span3> <span>próximo passo?</span>",
  "",
  "&nbsp;&nbsp; <a href='fts.html'>Sim</a><span3> /</span3> <a onclick='close_tabSQN()'>Não</a>",
  "&nbsp;&lt;/<span>body</span>&gt;",
  
  "&lt;/<span>html</span>&gt;<i>",
  ""
];

var table = document.getElementsByTagName("table")[0];

for(let i = 0; i < text.length; i++) {
  var tr = document.createElement("tr");

  var tdN = document.createElement("td");
  tdN.innerText = i+1;

  var tdH = document.createElement("td");
  tdH.innerHTML = text[i];
  
  tr.appendChild(tdN);
  tr.appendChild(tdH);

  table.appendChild(tr);
}


function close_tabSQN() {
  alert("Ninguém mandou escanear o QR Code, agora vc vai ver.");
  location.href = 'fts.html';
}

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);