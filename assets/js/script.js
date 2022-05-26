const url = "https://dog.ceo/api/breeds/image/random";
const btn = document.getElementById("btn");
const imagem = document.getElementById("imagem");

const getCachorro = async () => { 
  const dados = await fetch(url);
  const json = await dados.json();
  return json.message;
}

const carregarImagem = async() => { 
  imagem.src = await getCachorro();
}


btn.addEventListener("click", carregarImagem);
carregarImagem();