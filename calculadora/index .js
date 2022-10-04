var operandoa;
var operandob;
var operacion;


function init(){

    var uno=document.getElementById('uno');
    var dos=document.getElementById('dos');
    var tres=document.getElementById('tres');
    var cuatro=document.getElementById('cuatro');
    var cinco=document.getElementById('cinco');
    var seis=document.getElementById('seis');
    var siete=document.getElementById('siete');
    var ocho=document.getElementById('ocho');
    var nueve=document.getElementById('nueve');
    var cero=document.getElementById('cero');
    var tres=document.getElementById('tres');
    var tres=document.getElementById('tres');
    var tres=document.getElementById('tres');
    var cancelar=document.getElementById('cancelar');
    var cuadrado=document.getElementById('cuadrado');
    var porciento=document.getElementById('porciento');
    var division=document.getElementById('division');
    var menos=document.getElementById('menos');
    var mas=document.getElementById('mas');
    var por=document.getElementById('por');
    var igual=document.getElementById('igual');
    var punto=document.getElementById('punto');
    var resultado=document.getElementById('resultado');

    uno.onclick=function(e){

        resultado.textContent=resultado.textContent +"1";
    }

    dos.onclick=function(e){

        resultado.textContent=resultado.textContent +"2";

    }

    tres.onclick=function(e){

        resultado.textContent=resultado.textContent +"3";
    }
    cuatro.onclick=function(e){

        resultado.textContent=resultado.textContent +"4";
    }
    cinco.onclick=function(e){

        resultado.textContent=resultado.textContent +"5";
    }
    seis.onclick=function(e){

        resultado.textContent=resultado.textContent +"6";
    }
    siete.onclick=function(e){

        resultado.textContent=resultado.textContent +"7";
    }
    ocho.onclick=function(e){

        resultado.textContent=resultado.textContent +"8";
    }
    nueve.onclick=function(e){

        resultado.textContent=resultado.textContent +"9";
    }
    cero.onclick=function(e){

        resultado.textContent=resultado.textContent +"0";
    }

    punto.onclick=function(e){

        resultado.textContent=resultado.textContent +".";
    }

    cancelar.onclick=function(e){

        reset();
    }
    
    mas.onclick=function(e){
        
        operandoa=resultado.textContent;
        operacion="+";
        limpiar();
        

    }

    menos.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="-";
        limpiar();

    }

    por.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="*";
        limpiar();

    }

    division.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="/";
        limpiar();

    }

    porciento.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="%";
        limpiar();

    }

    cuadrado.onclick=function(e){
    
        operacion="x";

        operandoa=resultado.textContent;
        limpiar();
        resolver();
       

    }

    igual.onclick=function(e){

        operandob=resultado.textContent;
        limpiar();
        resolver();
    }



}
function resolver(){

    re=0;
    switch(operacion){


        case '+':{
            re=parseFloat(operandoa)+parseFloat(operandob);
            resultado.textContent=re;
            break;

        }

        case "-":{
            re=parseFloat(operandoa)-parseFloat(operandob);
            resultado.textContent=re;
            break;
        }
        
        case "*":{
            re=parseFloat(operandoa)*parseFloat(operandob);
            resultado.textContent=re;
            break;
        }

        
        case "/":{
            re=parseFloat(operandoa)/parseFloat(operandob);
            resultado.textContent=re;
            break;
        }

        
        case "%":{
            re=parseFloat(operandob)*parseFloat(operandoa)/100;
            resultado.textContent=re;
            break;
        }

        
        case "x":{
            
            re=parseFloat(operandoa)*parseFloat(operandoa);
            resultado.textContent=re;
            break;
        }
    }

}

function limpiar(){

    resultado.textContent=" ";
}
function reset(){


    resultado.textContent=" ";
    operandoa=0;
    operandob=0;
    operacion="";
}