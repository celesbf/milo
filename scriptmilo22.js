

function agregarComentario(){
 
        
            let nuevo = document.createElement("p")
       
            nuevo.innerHTML = document.getElementById("comentario").value
        
       
            let seccionDeComentarios = document.getElementById("comentarios")
        
            seccionDeComentarios.appendChild(nuevo)
        }



        
           
        





    
