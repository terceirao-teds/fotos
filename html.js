var text = [
  "&lt;!<span>DOCTYPE</span> <span3>html</span3>&gt;",
  "&lt;<span>html</span>&gt;",
  "&nbsp;&lt;<span>head</span>&gt;",
  "&nbsp;&lt;/<span>head</span>&gt;",
  
  "&nbsp;&lt;<span>body</span>&gt;",
  
  "&nbsp;&nbsp;<span>Pelo</span> <span2>visto você</span2> <span3>escaneou nosso</span3> <span>QR Code.</span>",
  "&nbsp;&nbsp;<span>Bom...</span> <span2>já que</span2> <span3>você chegou</span3> <span4>até </span4><span>aqui,</span>",
  "&nbsp;&nbsp;<span>gostaria</span> <span2>de seguir</span2> <span3>para o</span3> <span>próximo passo?</span>",
  "",
  "&nbsp;&nbsp;<span>Se sim,</span> <span2>cique</span2> <a href=''>aqui</a><span3>, se não,</span3> <span4>apenas</span4> <span>saia da página.</span>",
  
  "&nbsp;&lt;/<span>body</span>&gt;",
  
  "&lt;<span>html</span>&gt;",
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
