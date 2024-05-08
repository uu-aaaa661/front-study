let imgall=document.getElementsByClassName("imgall")[0];
let imgs=imgall.getElementsByTagName("img");
let circles = document.querySelectorAll(".yuan div"); 
let num=0;
//  console.log(circles);
// 向左
function left(obj){
    num--;
    if(num<0){
        num=3;
    }
    slide();
}
// 向右
function right(obj){
    num++;
    if(num>3){
        num=0;
    }
    slide();
}
// 加载自动轮播
let stop;
let box=document.getElementsByClassName("bigbox")[0];
console.log(box);
window.onload=function(){
    stop=setInterval(right,1100);
}
box.onmousemove=function(){
    console.log(111);
    clearInterval(stop);
}
box.onmouseout=function(){
    stop=setInterval(right,1100);
}
// 轮播
function slide(){
    let move=(-num)*1100;
    imgall.style.transform=`translateX(${move}px)`;
    circles.forEach(function(circle,index){
        if(num==index){
            circle.style.backgroundColor="blueviolet";
        }else{
            circle.style.backgroundColor="#999";
        }
    })
}
// 小圆点
circles.forEach(function(circle,index){
        console.log(circle);
        console.log(index);
        circle.addEventListener("click",function(){
        num=index;
        console.log(num);
        slide();
        return num;
    });
})
