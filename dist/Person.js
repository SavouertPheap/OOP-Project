"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staute = exports.Gender = exports.Person = void 0;
class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}
exports.Person = Person;
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
var Staute;
(function (Staute) {
    Staute["Already"] = "Already";
    Staute["Inprogress"] = "InProgress";
})(Staute = exports.Staute || (exports.Staute = {}));
