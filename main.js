let campo=document.getElementById('campo')
let boton=document.getElementById('boton')


const colores=[];
boton.addEventListener("click", ()=>{
  
    colores.push(campo.value);

    for (const listas of colores){
    ul.innerHTML+=`<li>${listas}</li>`

   
    }
    
});

