const cipher = { //corchetes, indica que es un objeto

    encode: (codeC, numberC) => {  //objeto de cipher, pero encode es una funcion 
        let finalText1 = ""; //variable global
        for (let i = 0; i < codeC.length; i++) {
           
            let ASCII1 = codeC.charCodeAt(i); //buscar el caracter en su posicion ASCII       
            let formula = ((ASCII1 - 65 + numberC) % 26 + 65);//posicion en el alfabeto con el offset
            let newASCII1 = String.fromCharCode(formula); // nueva letra cifrada
            finalText1 += newASCII1; //nuevo valor de finalText1 que se vera reflejado fuera del for
        }       
        
        return finalText1; //corta la funcion
    
    },

    decode: (codeD, numberD) => { //ejemplo funcion flecha
        let finalText2 = "";

        for (let i = 0; i < codeD.length; i++) {
            let ASCII1 = codeD.charCodeAt(i);//posicion en ASCII
            let formula = ((ASCII1 + 65 - numberD) % 26 + 65);//posicion en el alfabeto con el offset
            let newASCII = String.fromCharCode(formula); // nueva letra descifrada

            finalText2 += newASCII; //nuevo valor de finalText2 que se vera reflejado fuera del for

        }
        return finalText2; //corta la funcion

    }

}

export default cipher;


