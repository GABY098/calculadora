var boton = document.getElementById("btnresultado");
boton.addEventListener("click", procesar)

function procesar(){
    var num1 = parseInt(document.getElementById("N1").value);
    var num2 = parseInt(document.getElementById("N2").value);

    var op = document.getElementById("op").value;
    var resultado;
    
    if(op == 1){
        resultado = sumar(num1,num2);
    }
    else if(op == 2){
        resultado = restar(num1,num2);
    }
    else if(op == 3){
        resultado = division(num1,num2);
    }
    else if(op == 4){
        resultado = multiplicar(num1,num2);
    }
    else{
        resultado = potencia(num1,num2);
    }
    document.getElementById("res").innerHTML = resultado;
}
function sumar(a,b){
    return(a+b);
}
function restar(x,y){
    return(x-y);
}
function division(z,n){
    return(z/n);
}
function multiplicar(h,w){
    return(h*w);
}
function potencia(g,l){
    var elevado = Math.pow(g,l)
    return(elevado);
}