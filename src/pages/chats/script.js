const dialogCounts = document.querySelectorAll('.dialog__count');

dialogCounts.forEach((item)=>{
  if(item.innerText == 0){
    item.style = "visibility:hidden"
  }
})

