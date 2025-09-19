let storydiv = document.querySelector('.story')
let storiyan =  document.querySelectorAll('.storiyan')

let arr =  [
    {
        id : "https://images.unsplash.com/photo-1758220829551-6d02d06798c7?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stroy: "https://images.unsplash.com/photo-1757778281745-85a04487b859?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
        id : "https://images.unsplash.com/photo-1756745679032-c05d31c4441e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stroy: "https://images.unsplash.com/photo-1757778281745-85a04487b859?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
        id : "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stroy: "https://images.unsplash.com/photo-1757778281745-85a04487b859?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
        id : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stroy: "https://images.unsplash.com/photo-1757778281745-85a04487b859?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
        id : "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stroy: "https://images.unsplash.com/photo-1757778281745-85a04487b859?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
        id : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stroy: "https://images.unsplash.com/photo-1757778281745-85a04487b859?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

]

let variable = ''

arr.forEach(function(value,index){
    variable += ` <div id="${index}" class="storiyan">
            <img src="${value.id}" alt="">
        </div>`

        
})
storydiv.innerHTML = variable

storiyan.addEventListener("click",(eme)=>{
console.log(eme.target.id)
})



// for(let i = 1; i<=20 ; i++){
//     storydiv.innerHTML += `<div id="story">${i}</div> `
// }
