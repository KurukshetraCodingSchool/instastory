let storydiv =  document.querySelector(".story")
let storyViewer =  document.querySelector('.story-viewer');
let storyImage = document.querySelector('.story-image');
let storyProfile = document.querySelector('.story-user-profile');
let storyUsername = document.querySelector('.story-username');
let storyTime = document.querySelector('.story-time');
let storyProgressFill = document.querySelector('.story-progress-fill');
let storyClose = document.querySelector('.close-story');
let storyPrev = document.querySelector('.story-prev');
let storyNext = document.querySelector('.story-next');

let currentStroyIndex = 0
let progressInterval = null
let storyTimer = null


let arr = [
    {
        id:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stroy:"https://images.unsplash.com/photo-1740418762511-b3927603599a?q=80&w=680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username : "Ravi",
        time : '2h',
    },

     {
        id:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stroy:"https://images.unsplash.com/photo-1741732311791-b76d0655eff5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username : "Jaggu Data",
        time : '6h',
    },
     {
        id:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stroy:"https://images.unsplash.com/photo-1758302981159-b73b2964b3be?q=80&w=695&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username : "Swati Devi",
        time : '4h',
    },
     {
        id:"https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stroy:"https://images.unsplash.com/photo-1758506245060-69750cbb6322?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username : "ALok",
        time : '6h',
    },
     {
        id:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stroy:"https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username : "Vikash",
        time : '2h',
    },
     {
        id:"https://images.unsplash.com/photo-1519764622345-23439dd774f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stroy:"https://images.unsplash.com/photo-1757997906879-eff8a3bfbf70?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username : "Pta Nahi",
        time : '2h',
    },
     {
        id:"https://images.unsplash.com/photo-1536243298747-ea8874136d64?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   ",
        stroy:"https://images.unsplash.com/photo-1758426637810-0c191dd0ec31?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username : "Kuchh Bhi",
        time : '2h',
    },
]

let clustter = ''

arr.forEach(function(value, index){
   clustter += `<div id = "${index}" class="storiyan"> 
                   <img src = "${value.id}" alt = ""> 
                   </div>` 
})

storydiv.innerHTML = clustter

storydiv.addEventListener('click', function(elam){
    //  console.log(elam.target.closest('.storiyan'))
     if(elam.target.closest('.storiyan')){
     const storyIndex = parseInt(elam.target.closest('.storiyan').id)
      openStory(storyIndex)
      storyViewer.style.display = 'block'
      storyViewer.style.top = '48px' 
      storyViewer.style.left = '568px' 
     }
})

function openStory (index){
    currentStroyIndex = index
    storyViewer.classList.add('show')
    updateStoryContent()
    startStoryTimer()

}

function closeStoryViewer(){
    storyViewer.classList.remove('show')
    clearInterval(progressInterval)
    clearTimeout(storyTime)
    storyProgressFill.style.width = '0%'
    storyViewer.style.display = 'none' 

}

function updateStoryContent (){
    const currentStory = arr[currentStroyIndex]
    storyImage.src  = currentStory.stroy
    storyProfile.src = currentStory.id
    storyUsername.textContent  = currentStory.username
    storyTime.textContent = currentStory.time
}

function startStoryTimer (){
    storyProgressFill.style.width = "0%";
    progressInterval =  setInterval(()=>{
        const currentWidth = parseFloat(storyProgressFill.style.width) || 0
        const newWidth = currentWidth + 1
        storyProgressFill.style.width =  newWidth + '%';
        if (newWidth >= 100){
            clearInterval(progressInterval)
            nextStroy()
        }
    },50)
}

function nextStroy (){
    if (currentStroyIndex < arr.length - 1){
        currentStroyIndex++
        updateStoryContent()
        startStoryTimer()
    }
    else{
        closeStoryViewer()
    }
}


function prevStroy(){
  if(currentStroyIndex > 0){
    currentStroyIndex--
    updateStoryContent()
    startStoryTimer()
  }
}

storyClose.addEventListener('click',closeStoryViewer)
storyNext.addEventListener('click',nextStroy)
storyPrev.addEventListener('click',prevStroy)


storyViewer.addEventListener('click', function(e){
    if(e.target == storyViewer){
        closeStoryViewer();
    }
})

document.addEventListener('keydown',function(e){
    if(storyViewer.classList.contains('show')){
        if(e.key === 'Escape'){
            closeStoryViewer()
        }
        else if(e.key === 'ArrowRight'){
            nextStroy();
        }
         else if(e.key === 'ArrowLeft'){
            prevStroy();
        }

    }
})