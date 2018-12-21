const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors")

const app = express();
app.use(cors());
app.options('*', cors());

const jsonParser = bodyParser();

const Record = require('../dataModels/Record.js');

app.get("/", function(request, response){
    response.send("<h2>Сервер работает</h2>");
});
 
app.get("/api/records", function(request, response){

    let content = fs.readFileSync("../database/records.json","utf8");
    let records = JSON.parse(content);
    response.send(records);
});

app.post("/api/records/period", jsonParser, function(request, response){

    if(!request.body) return response.status(400);

    let periodStart = new Date(request.body.startDate);
    let periodEnd = new Date(request.body.endDate);

    let content = fs.readFileSync("../database/records.json","utf8");
    let records = JSON.parse(content);
    let recordsInPeriod = [];

    for(let i = 0; i < records.length; i++) {
        if((new Date(records[i].date) > periodStart && new Date(records[i].date) < periodEnd ) || (new Date(records[i].date) < periodStart && new Date(records[i].date) > periodEnd ))
        {
            recordsInPeriod.push(records[i]);
        }        
    }
    response.send(recordsInPeriod);
});

app.get("/api/records/:id", function(request, response){

    let id = request.params.id;
    let content = fs.readFileSync("../database/records.json","utf8");
    let records = JSON.parse(content);
    let record = null;

    for(let i = 0; i < records.length; i++) {
        if(records[i].id == id)
        {
            record = records[i];
            break;
        }        
    }
    if(record) {
        response.send(record);
    }
    else {
        response.status(404).send();
    }
});

app.post("/api/records", jsonParser, function(request, response){

    if(!request.body) return response.status(400);

    let newRecord = new Record(request.body.id, request.body.nameOfObject, request.body.ammount,
        request.body.date, request.body.isIncome);

    let content = fs.readFileSync("../database/records.json","utf8");
    let records = JSON.parse(content);

    let maxId = Math.max.apply(Math, records.map(function(o){return o.id;}))
    newRecord.id = maxId + 1;
    records.push(newRecord);
    let data = JSON.stringify(records);
    fs.writeFileSync("../database/records.json", data);
    response.send(newRecord);
});

app.put("/api/records", jsonParser, function(request, response){

    if(!request.body) return response.status(400);

    let updatedRecord = new Record(request.body.id, request.body.nameOfObject, request.body.ammount,
        request.body.date, request.body.isIncome);
    let content = fs.readFileSync("../database/records.json","utf8");
    let records = JSON.parse(content);
    let record = null;

    for(let i = 0; i < records.length; i++) {
        if(records[i].id == updatedRecord.id)
        {
            record = records[i];
            break;
        }        
    }

    if(record){
        record.nameOfObject = updatedRecord.nameOfObject;
        record.ammount = updatedRecord.ammount;
        record.date = updatedRecord.date;
        record.isIncome = updatedRecord.isIncome;
        let data = JSON.stringify(records);
        fs.writeFileSync("../database/records.json", data);
        response.send(record);
    }
    else{
        response.status(404).send(record);
    }
});

app.delete("/api/records/:id", function(request, response){

    let id = request.params.id;
    let content = fs.readFileSync("../database/records.json","utf8");
    let records = JSON.parse(content);
    let index = -1;

    for(let i = 0; i < records.length; i++) {
        if(records[i].id == id)
        {
            index = i;
            break;
        }        
    }

    if(index > -1){
        let recordDeleted = records.splice(index,1)[0];
        let data = JSON.stringify(records);
        fs.writeFileSync("../database/records.json", data);
        response.send(recordDeleted);
    }
    else {
        response.status(404).send();
    }
});

app.listen(3000);