function Calculadora (a, b, op) {

    switch (op){

        case '+':
            return a+b;
        
        case '-':
            return a-b;
            break;

        case '/':
            return a/b;
            break;

        case '*':
            return a*b;
            break;
    }
}

let a = Number(prompt ("Ingrese un numero"));
op = prompt ("Ingrese un operador valido: + - / *");
let b = Number(prompt ("Ingrese otro numero"));
alert ("Resultado: " + Calculadora(a, b, op))