let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () =>{
    let scrollwidth = this.window.scrollY;

    if(scrollwidth > 20){
        navbar.classList.add("bg");
    }else{
        navbar.classList.remove("bg");
    }
})

