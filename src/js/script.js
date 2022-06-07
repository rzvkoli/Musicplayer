var audios = document.getElementsByClassName('bi-play-fill')

var audios = Array.from(audios)

audios.forEach(index => {
  index.addEventListener('click' , () =>{
    let audiosName = index.dataset.name
    for(var i = 0 ; i < audios.length ; i++){
      if(audios[i].nextElementSibling.dataset.name == audiosName){
        audios[i].nextElementSibling.play()
      } else {
        audios[i].nextElementSibling.pause()
      }
    }
  })
})