 const person={
    firstname:"Mithun",
    lastname:"S",
    age:20
 }

 function ageIndays(personObject,callback){
    const fullname =`${personObject.firstname} ${personObject.lastname}`
    const ageIndays= personObject.age*365;
    callback(fullname,ageIndays)
 }
 function logresult(fullname,ageIndays){
    console.log(`The person's full name is ${fullname} and their age in day's ${ageIndays}`);
 }
 ageIndays(person,logresult)