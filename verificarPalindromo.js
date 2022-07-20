
//solução 1: reverter a string e validar se são iguais
function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

let MyVar = "ama";

console.log(verificaPalindromo(MyVar));

//solução 2: percorrer cada caracter em um for para validar se são iguais
function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 -i]) return false;
    }
    return true;
}

console.log(verificaPalindromo2("abba"))