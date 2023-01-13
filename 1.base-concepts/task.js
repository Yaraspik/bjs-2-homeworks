"use strict";

//task1
function solveEquation(a, b, c) {
    let roots = [];
    let discriminant = b**2 - 4 * a * c;

    if(discriminant === 0) {
        roots = [-b / (2 * a)];
    } else if (discriminant > 0) {
        roots = [(-b + Math.sqrt(discriminant) )/(2 * a), (-b - Math.sqrt(discriminant) )/(2*a)];
    }

    return roots;
}

//task2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if(isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
        return false;
    }

    let monthlyPercent = percent / 100 / 12;
    let bodyOfMortgage = amount - contribution;
    let monthlyPayment = bodyOfMortgage * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1)));
    let fullPriceMortgage = monthlyPayment * countMonths;

    
    return Number(fullPriceMortgage.toFixed(2));
}