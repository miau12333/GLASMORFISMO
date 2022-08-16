const square= document.querySelector(".form-container");
const form= document.querySelector(".color");
const colorBtn= document.querySelector("input[type=color]");
const size= document.querySelector("#Size");
const radius= document.querySelector("#Radius");
const transparency= document.querySelector("#Transparency");
const blur= document.querySelector("#Blur");
const contrast= document.querySelector("#Contrast");
const saturate= document.querySelector("#Saturate");
const textArea= document.querySelector("textarea");
 
localStorage.removeItem("rgba");
localStorage.removeItem("blur");
localStorage.removeItem("contrast");
localStorage.removeItem("saturate");

colorBtn.addEventListener('input', (e) =>{
    square.style["background-color"] = hexToRgba(e.target.value); 
    console.log(hexToRgba(e.target.value))
    localStorage.setItem("rgba", hexToRgba(e.target.value));
    Copy();
});

function hexToRgba(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if(result){
            const r= parseInt(result[1], 16);
            const g= parseInt(result[2], 16);
            const b= parseInt(result[3], 16);
            return `rgba(${r}, ${g}, ${b}, 0.99)`;
        }
        return null;
}

size.addEventListener('input', (e) => {
    square.style["width"] = `${e.target.value}px`;
})

radius.addEventListener('input', (e) => {
    square.style["border-radius"] = `${e.target.value}%`;
    console.log(e.target.value)
})


transparency.addEventListener('input', (e) => {
   let rgba = localStorage.getItem("rgba");
   let splite= rgba.split(','); 
   splite.pop();
   splite.push(` ${e.target.value/100})`);
   rgba = splite.join(',');
   console.log(rgba)
   square.style["background-color"]= rgba
   localStorage.setItem("rgba", rgba);
   Copy();
})

blur.addEventListener('input', (e) => {
    square.style["backdrop-filter"] = `blur(${e.target.value}px)`;
    localStorage.setItem("blur", `blur(${e.target.value}px)`);
    console.log(e.target.value)
    Copy();
})

contrast.addEventListener('input', (e) => {
    square.style["backdrop-filter"] = `contrast(${e.target.value}%)`;
    localStorage.setItem("contrast", `contrast(${e.target.value}%)`);
    console.log(e.target.value)
    Copy();
})

saturate.addEventListener('input', (e) => {
    square.style["backdrop-filter"] = `saturate(${e.target.value}%)`;
    localStorage.setItem("saturate", `saturate(${e.target.value}%)`);
    console.log(e.target.value);
    Copy();
})

let Copy = () => {
    let Color= `background:${localStorage.getItem("rgba")};\n`;
    let Difuminado="";
    if (localStorage.getItem("blur")){ 
        Difuminado= `backdrop-filter:${localStorage.getItem("blur")};\n`;
    } 
    let Contraste="";
    if (localStorage.getItem("contrast")){ 
        Contraste= `backdrop-filter:${localStorage.getItem("contrast")};\n`;
    } 
    let Saturación ="";
    if (localStorage.getItem("saturate")){ 
        Saturación= `backdrop-filter:${localStorage.getItem("saturate")};\n`; //Salto de linea
    } 
    

    textArea.innerHTML = Color+Difuminado+Contraste+Saturación;
}


