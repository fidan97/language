
import norsk from './no.json' assert {type: 'json'};
import engelsk from './eng.json' assert {type: 'json'};

function translate(language, key){
    if(language === "no"){
        return norsk[key];
    }else if(language === "eng"){
        return  engelsk [key];

    }
}

translate();

function translateAll(language, elements){
    for (const element of elements) {
       element.innerHtml = translate(language,element.getAttribute("data-attribute-language"))
    }
}
translateAll();

// let listOfElementsToTransalte = document.body.querySelectorAll("data-attribure-language");

// <button data-attribute-language="start" />
