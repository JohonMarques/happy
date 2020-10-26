const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const mymap = L.map('mapid', options).setView([-27.2058128,-49.6932569], 15);

//create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(mymap);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]


})

//create and add marker
L.marker([-27.2058128,-49.6932569], {icon})
    .addTo(mymap)


/* image galery */
function selectImage(event){
    const button = event.currentTarget

    //remover as classes active

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para o botao clicado
    button.classList.add('active')
}