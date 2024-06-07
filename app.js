document.addEventListener("DOMContentLoaded",app())
const text = document.querySelector(".nav_text").addEventListener("click",()=>{
    let no = document.querySelectorAll(".app");
    for (let i = 0; i<no.length; i++){
        const num = document.querySelector(".num")
        num.innerText = i
    }
    const notificatiion = document.querySelectorAll(".app").forEach((e)=>{
        e.classList.toggle("UnRead_Notification")
    })
})
function app(){
    let number = 0
    const notificatiion = document.querySelectorAll(".app").forEach((e)=>{
        e.addEventListener("click",function book (){
            this.classList.toggle("UnRead_Notification")
            const num = document.querySelector(".num")
            number++
            num.innerText = number
        })
    })
}

