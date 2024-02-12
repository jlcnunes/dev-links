function toggleMode() {
  const html = document.documentElement
  /*
  Função toggle faz alg o semelhante a isso:

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // se tiver light mode, add a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo , usando óculos escuro e camisa preta, jaqueta de couro e fundo degradê roxo e azul"
    )
  }
  // se tiver sem light, manter a imagem normal
  else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo , usando óculos e camisa preta, jaqueta de couro e fundo degradê roxo e azul"
    )
  }
}
