
// counting js
let count = document.querySelectorAll(".count");
let countItem = Array.from(count);
countItem.map((item)=>{
    let counting = 0;
    
function hello(){
    counting++;
  if(counting <= item.dataset.number){
  clearInterval(stop);
  item.innerHTML= counting + "%";
  item.style.color="white";
  }
  
  
  }
  
 setInterval(()=>{
      hello();
  }, item.dataset.speed/item.dataset.number);
});

