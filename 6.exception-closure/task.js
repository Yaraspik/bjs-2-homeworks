//task1
function parseCount(valueForParse){
    let result = Number.parseFloat(valueForParse);
    if(isNaN(result)){
        throw new Error('Невалидное значение');
    }
    return result;
}

function validateCount(valueForParse){
    try{
        return parseCount(valueForParse);
    } catch(error){
        return error;
    }
}

//task2
class Triangle{
    constructor(firstSide, secondSide, thirdSide){
        if(firstSide + secondSide < thirdSide || secondSide + thirdSide < firstSide || thirdSide + firstSide < secondSide){
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.firstSide = firstSide,
        this.secondSide = secondSide,
        this.thirdSide = thirdSide
    }

    get perimeter(){
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    get area(){
        let p = 0.5 * this.perimeter;
        return  parseCount(Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide)).toFixed(3));
    }
}

function getTriangle(firstSide, secondSide, thirdSide){
    try{
        return new Triangle(firstSide, secondSide, thirdSide);
    } catch(error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}