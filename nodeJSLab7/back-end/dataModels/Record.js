module.exports = class Record {

    constructor(id, nameOfObject, ammount, date, isIncome){
        this.id = id;
        this.nameOfObject = nameOfObject;
        this.ammount = ammount;
        this.date = date;
        this.isIncome = isIncome;
    }
}