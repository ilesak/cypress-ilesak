import Chance from 'chance'
import {isSuperset, union, intersection, difference} from "../utils/helper"

it('should ', function () {
    //объявление набора значений при создании
    let currencySet =  new Set(["RUB", "BYN", "EUR", "CNY"]);
    let randomValue;
    let randomMaxValue;

    //declaration of empty set
   // let currencySet = new Set();

    currencySet.forEach((cyrrency) => {
        cy.log(cyrrency);
    });

    //adding items
    //currencySet.add("USD");//add existing item
    currencySet.add("CHF").add("CAD");//new items

    randomMaxValue = currencySet.size;

    currencySet.forEach((cyrrency) => {
        cy.log(cyrrency);
    });

    cy.log ("Set has USD value: " + currencySet.has("USD"));

    let currencyArr = Array.from(currencySet);//converting Set to Array

    //Given an array, pick a random element and return it
    cy.log("One random value: " + chance.pickone(currencyArr)); //=> 'delta'

    randomValue = chance.integer({min: 1, max: randomMaxValue});
    cy.log("Several random values: " + chance.pickset(currencyArr, randomValue));

});

it('should ', function () {
    let setDollar = new Set(["USD", "AUD", "CAD", "SGD"]),
        setFranc = new Set(["CDF", "CHF", "GNF", "RWF"]),
        setPeso = new Set(["COP", "CUC", "CUP"]),
        setPound = new Set(["GBP", "GGP", "GIP", "FKP", "LBP"]),
        setMixed = new Set(["RUB", "BYN", "EUR", "CNY", "CHF", "CAD", "USD", "GBP", "CUP", "AUD", "SGD"]);


    console.log(isSuperset(setMixed, setDollar));
    console.log(union(setPeso, setFranc));
    console.log(intersection(setMixed, setPound));
    console.log(difference(setMixed, setDollar));
});
