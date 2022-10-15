function introduction (name){
    return "Hi, my name is "+name+".";
}
const result = introduction ("Aki");
console.log (result);

function introductionWithLanguage(name, language){
    return "Hi, my name is "+name+ " and I am learning to program in " +language+".";

}
const result1 = introductionWithLanguage("Aki", "Ember.js")
console.log (result1);

function   introductionWithLanguageOptional(name, language= "JavaScript"){
    return "Hi, my name is "+ name +" and I am learning to program in " + language +".";
}
const result2=   introductionWithLanguageOptional("Gracie", );
console.log (result2);
