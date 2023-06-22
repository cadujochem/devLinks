function toggleMode() { 

    const html = document.documentElement  
    html.classList.toggle('light') 

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //Subistituir a Imagem
    if(html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./Assets/avatarlight.png")
    }  else {
        // se tiver sem light mode, manter a foto normal
            img.setAttribute("src", "./Assets/avatarbola.png")
        }
}