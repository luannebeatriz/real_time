// shift alt R alinha a linha

function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  //var data = new Date(2022, 9, 10, 9, 20)
  var data = new Date();
  var hora = data.getHours();
  // var minutos = data.getMinutes()
  var horaFormatada = data.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  if (hora >= 5 && hora < 12) {
    img.src = "manha.png";
    document.body.style.background = "#878399";
    msg.innerHTML = `good morning! right now is ${horaFormatada}`;
  } else if (hora >= 12 && hora < 15) {
    document.body.style.background = "#ffb97f";
    img.src = "tarde.png";
    msg.innerHTML = `good afternoon! right now is ${horaFormatada}`;
  } else if (hora >= 15 && hora <= 18) {
    document.body.style.background = "#eeac36";
    img.src = "pordosol.png";
    msg.innerHTML = `good afternoon! right now is ${horaFormatada}`;
  } else {
    document.body.style.background = "#374e56";
    img.src = "noite.png";
    msg.innerHTML = `good night! right now is ${horaFormatada}`;
  }
}

/*
A estrutura de um site (tudo que envolve o site) é chamado de BODY.

O título está dentro da área de cabeçalho e é chamado de HEADER.

A final do site (rodapé) é chamado de FOOTER.

A parte do meio (onde conterá imagens) é chamada de SECTION; Dentro do SECTION existem partes separadas
chamadas de DIV.
*/
