


const contenedor = document.querySelector('#contenedor')
const entrada = document.querySelector('#entrada');
let lista = document.querySelector('#lista');


contenedor.addEventListener("submit", agregar);

function agregar(e){
    e.preventDefault();
    if(entrada.value!=''){
    let item = document.createElement('div')
    let compra = entrada.value;
    
    item.innerHTML = `<div class="alert alert-primary text-dark alert-dismissible fade show">
                    <strong>${compra}</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
                     </div>`
    
    lista.append(item)
    contenedor.reset();
    }
    else{
        alert('Debe ingresar al menos un elemento')
    }

}

    

    












