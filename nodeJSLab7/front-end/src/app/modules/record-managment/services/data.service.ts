import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Record } from 'src/app/entities/record.type';
import { Dates } from 'src/app/entities/dates.type';

@Injectable()
export class DataService {

    private url = "http://localhost:3000/api/records"; //поменять

    constructor(private http: HttpClient) {

    }

    public async getFiltredRecords(dates: Dates) {    
        let result = await this.http.post<Record[]>(this.url + '/period', dates).toPromise();       
        return result;
    }

    public async getRecords() {        
        let result = await this.http.get<Record[]>(this.url).toPromise();   
        return result;
    }

    public async createRecord(newRecord: Record) {
        return await this.http.post(this.url, newRecord).toPromise();
    }

    public updateRecord(updatedRecord: Record) {
        return this.http.put(this.url, updatedRecord);
    }

    public deleteRecord(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}