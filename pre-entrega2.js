
class factura{
    constructor(arrayTratamiento = []){
        this.arrayTratamiento = arrayTratamiento;
    
    }
    mostrarCompra(){
       
       this.arrayTratamiento.forEach(tratamiento => {
        tratamiento.informarNombreYPrecio();
       });
    }
    calcularMontoFinal(){
       let total = 0;
        console.log(total);
        this.arrayTratamiento.forEach(tratamiento => {
          total +=  parseInt(tratamiento.precio);   
        });
        return total;
    }
    calcularMontoAPagar(formaPago, montoFinal){
       
        switch(formaPago){

            case 1:
             let cuotas = parseInt(prompt("ingrese la cantidad de cuotas : 3, 6, 9"));
             alert("usted debera pagar "+ cuotas + " cuotas de "+ (montoFinal/cuotas)+ "haciendo un total de :"+ montoFinal );
             break;
            case 2:
             alert("no hay descuento o recargo, usted debera pagar :"+ montoFinal);
             break;
            
            case 3:
                alert("hay un recargo de 10% por usar mercadopago, el total sera : "+((montoFinal * 0.1)+montoFinal));
                break;
            case 4:
                alert("hay un descuento de 30% por usar efectivo "+(montoFinal-(montoFinal * 0.3)));
                break;
               

        }
    }
}


class tratamiento{
    constructor(nombre, precio){
    this.nombre = nombre;
    this.precio =parseInt( precio);

}
informarNombreYPrecio(){
    console.log("tratamiento ="+ this.nombre + "  precio = " + this.precio+`\n`);
}
}


const ortodoncia = new tratamiento("ortodoncia",6500);
const limpieza = new tratamiento("limpieza",3500);
const extraccion = new tratamiento("extraccion", 9500);
let tratamientoEscogido = [];
let OpcionTratamiento ;
let formaPago ;
let nombre ;
 nombre =prompt("ingrese su nombre");
do{ 
 OpcionTratamiento = parseInt( prompt("hola"+nombre +" ingrese el tratamiento que desea realizar : 1.-(ortodoncia)/ 2.-(limpieza)/ 3.-(extraccion)/4.- seguir a metodo de pago"));
 switch(OpcionTratamiento){

    case 1:
        alert ("usted a agregado "+ ortodoncia.precio);
        tratamientoEscogido.push(ortodoncia);
        break;
    case 2:
        alert ("usted a agregado "+ limpieza.precio);
        tratamientoEscogido.push(limpieza);
        break;
    case 3:
        alert ("usted a agregado "+ extraccion.precio);
        tratamientoEscogido.push(extraccion);
        break;
    case 4:
        alert("gracias por la compra, eliga metodo de pago ");
        break;

        default: alert("opcion invalida");
 }
 
}while(OpcionTratamiento != 4);
 
formaPago = parseInt( prompt("ingrese la forma de pago :  1.-credito - 2.-debito - 3.-mercadopago - 4.-efectivo"));
const facturita = new factura (tratamientoEscogido);
let montoTotal =  facturita.calcularMontoFinal();
facturita.calcularMontoAPagar(formaPago, montoTotal);

