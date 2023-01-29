const ortodoncia = 6500;
const limpieza = 3500;
const extraccion = 12000;

let tratamientoEscogido;
let cuotaTratamiento;
let tratamientos = [["ortodoncia"],["limpieza"],["extraccion"]];
alert(`Hola, estos son nuestros tratamientos. 1-${tratamientos[0]}  2-${tratamientos[1]}  3-${tratamientos[2]}`);

costoTratamiento = ()=>{
    tratamiento = parseInt(prompt("que opcion desea = 1 , 2 , 3"));
    while(tratamiento<1 || tratamiento >3){
        alert("opcion no valida ");
        tratamiento = parseInt(prompt("que opcion desea = 1 , 2 , 3"));
    }
    cuotaTratamiento = parseInt(prompt ("cuotas disponibles ( 1 , 3 , 6 , 12) "));
    while(cuotaTratamiento!= 1 && cuotaTratamiento!= 3 && cuotaTratamiento!= 6 && cuotaTratamiento!= 12){
        alert("opcion no valida ");
        cuotaTratamiento = parseInt(prompt("que opcion desea = 1 , 3 , 6 , 12 "));
    }
    if(tratamiento == 1){
        
        switch(cuotaTratamiento){
            case 1 : 
            alert("el precio total de tu tratamiento es de " + ortodoncia);
            break;
            case 3 : 
            alert("el precio total de tu tratamiento es de "+ (ortodoncia + ((ortodoncia*20)/100)));
            alert("el precio por mes seria de "+ (ortodoncia + (((ortodoncia*20)/100)))/3);
            break;
            case 6 : 
            alert("el precio total de tu tratamiento es de "+ (ortodoncia + ((ortodoncia*40)/100)));
            alert("el precio por mes seria de "+ (ortodoncia + (((ortodoncia*20)/100)))/6);
            break;
            case 12 : 
            alert("el precio total de tu tratamiento es de "+ (ortodoncia + ((ortodoncia*60)/100)));
            alert("el precio por mes seria de "+ (ortodoncia + (((ortodoncia*20)/100)))/12);
            break;
        }
    }
        if(tratamiento == 2){
            
            switch(cuotaTratamiento){
                case 1 : 
                alert("el precio total de tu tratamiento es de " + limpieza);
                break;
                case 3 : 
                alert("el precio total de tu tratamiento es de "+ (limpieza + ((limpieza*20)/100)));
                alert("el precio por mes seria de " + (limpieza + ((limpieza*20)/100))/3);
                break;
                case 6 : 
                alert("el precio total de tu tratamiento es de "+ (limpieza + ((limpieza*40)/100)));
                alert("el precio por mes seria de " + (limpieza + ((limpieza*20)/100))/6);
                break;
                case 12 : 
                alert("el precio total de tu tratamiento es de "+ (limpieza + ((limpieza*60)/100)));
                alert("el precio por mes seria de " + (limpieza + ((limpieza*20)/100))/12);
                break;
            }
        }
        if(tratamiento == 3){
           
                switch(cuotaTratamiento){
                    case 1 : 
                    alert("el precio total de tu tratamiento es de " + extraccion);
                    break;
                    case 3 : 
                    alert("el precio total de tu tratamiento es de "+ (extraccion + ((extraccion*20)/100)));
                    alert("el precio por mes seria de " + (extraccion + ((extraccion*20)/100))/3);
                    break;
                    case 6 : 
                    alert("el precio total de tu tratamiento es de "+ (extraccion + ((extraccion*40)/100)));
                    alert("el precio por mes seria de " + (extraccion + ((extraccion*20)/100))/6);
                    break;
                    case 12 : 
                    alert("el precio total de tu tratamiento es de "+ (extraccion + ((extraccion*60)/100)));
                    alert("el precio por mes seria de " + (extraccion + ((extraccion*20)/100))/12);
                    break;
                }

    }
          
}        
    



costoTratamiento();