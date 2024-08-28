// const propozitie = ["numara vocalele"]
// let nrVocals = 0
// const vocals = ["a, e, i, o, u"]
// //     if (vocals.includes(propozitie)) {
// //     nrVocals + 1
// //     console.log(nrVocals)
// // }

// for (let i = 0; i < propozitie.lengt;  i++) {
//     nrVocals += vocals.includes(propozitie) + 1
    
// }
// console.log(nrVocals(i))


function veziVocale(string) {
    let vocale = "AaEeIiOoUu";
    let nrVocale = 0;
    for (let i = 0; i < string.lenght; i++){
        if (vocale.indexOf(string[i]) !== -1) {
            nrVocale += 1;
        }
    }
    return nrVocale;

}

console.log(
    "Ana are multe mere" + veziVocale("Ana are mere"))