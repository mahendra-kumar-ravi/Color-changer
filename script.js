

const randomColor = function(){
   
    const hex = "123456789ABCDEF";
    let color = "#";
    
    for(let i=0; i<6; i++)
        {
            color += hex[Math.floor(Math.random()*hex.length)];
        }
        console.log(color);
    return color;
    
};
let intervalid;
const startColorChanger = function(){
   intervalid = setInterval(chagebg, 1000);
  
};

function chagebg(){
    document.body.style.backgroundColor = randomColor();
}
const stopbgchanger = function(){
    
    clearInterval(intervalid)
    intervalid = null;

}
const stopColorChanger = function(){}
 document.querySelector('.start').addEventListener('click', startColorChanger);
 document.querySelector('.stop').addEventListener('click', stopbgchanger);







