//create map
const mymap = L.map('mapid').setView([-27.2058128,-49.6932569], 15);

//create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(mymap);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],


})

let marker;

//create and add marker
mymap.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove  icon
    marker && mymap.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat,lng], { icon })
    .addTo(mymap)
})

//adicionar o campo de fotos
function addPhotoField(){
    //pegar o container de fotos #images
   const container = document.querySelector('#images')
    //pegar o container para duplicar .new-upload

    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo esta vazio se sim, nao deixar adicionar ao container de imagem
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //limpar o campo antes de adicionar o campo de imagens
    input.value = ""
    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if( fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove()
}


//selecionar do sim e nao

function toggleSelect(event){

    //retirar a classe active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))
    //colocar a classe active no selecionado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    //verificar se sim ou nao
    
    input.value = button.dataset.value

}



