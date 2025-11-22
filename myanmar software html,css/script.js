function snow(){
    const snow =document.createElement("div");
    snow.classList.add("snow");
    snow.style.left=Math.random()*100+"vw";
    snow.style.animationDuration=Math.random()*2+3;
    snow.innerText="🍔  🍗  ✈️"
    document.body.appendChild(snow);
    setTimeout(()=>{
        snow.remove();
    },3000)

}
setInterval(snow,200);