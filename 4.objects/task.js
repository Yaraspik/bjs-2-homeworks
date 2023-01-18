function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = [],
    Student.prototype.setSubject
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.hasOwnProperty('marks')) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if(!this.hasOwnProperty('marks') || this.marks.length === 0) {
        return 0;
    }
    let result = this.marks.reduce((accumulator, mark, index, array) => {
        accumulator += mark;
        if(index === array.length - 1) {
            return accumulator / array.length;
        }
        return accumulator;
    }, 0);
    return result;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}