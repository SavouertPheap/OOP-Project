"use strict";
exports.__esModule = true;
exports.Resturant = void 0;
var HurmanManager_1 = require("../staff/HurmanManager");
var Resturant = /** @class */ (function () {
    function Resturant(name, location) {
        this.name = name;
        this.location = location;
        // public services
        this.people = new HurmanManager_1.HumanManager();
        this.menuItems = [];
    }
    Resturant.prototype.addMeunItem = function (Menu) {
        this.menuItems.push(Menu);
    };
    return Resturant;
}());
exports.Resturant = Resturant;
