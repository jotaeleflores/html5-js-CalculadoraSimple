function myFunction() {
    var numerouno,numerodos,resultado,operacion;
    numerouno=prompt("Primer numero");
    numerodos=prompt("Segundo numero");
    operacion=prompt("Agregar el simbolo de la operacion");
    
    if(operacion=="+"){
        resultado=Number(numerouno)+Number(numerodos);
    }


    else if(operacion=="/"){
        resultado=Number(numerouno)/Number(numerodos);
    }
    else if(operacion=="*"){
        resultado=Number(numerouno)*Number(numerodos);
    }
    else if(operacion=="-"){
        resultado=Number(numerouno)-Number(numerodos);
    }
    
    return resultado;
      }
  document.getElementById("resultado").innerHTML =myFunction();