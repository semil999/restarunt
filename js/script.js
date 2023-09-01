let header = document.getElementById('head');
let lastbtn = document.getElementById('lastbtn');

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 150){
        header.style.background = "white";
    }
    else{
        header.style.background = "";
    }
});



window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 490){
        header.style.boxShadow = 'rgb(38, 57, 77) 0px 20px 30px -10px';
        lastbtn.style.right = '3%';
    }
    else{
        header.style.boxShadow = "";
        lastbtn.style.right = "";
    }
});



lastbtn.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


let btn = document.getElementById('btnicon');

btn.addEventListener('click',()=>{
    let btnclk = document.getElementById('hiddendiv');
    btnclk.classList.toggle('hide');
});



function color(color1,color2){
    document.documentElement.style.setProperty('--primery-color', color1);
    document.documentElement.style.setProperty('--background-color-hover', color2);
}