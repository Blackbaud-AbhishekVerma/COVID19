import { Injectable } from '@angular/core';
import { News } from "../models/news.model";
import { InMemoryDbService } from "angular-in-memory-web-api";
@Injectable({
    providedIn: 'root'
})
export class NewsInMemoryService implements InMemoryDbService {

    constructor(){}

    createDb(){
        const newsList: News[] =[
            {"id":1,
             "title": "News1",
             "description" :"NewsDescription1",
             "content" :"NewsContent11",
             "dateAdded": new Date().toString()},
        
            {"id": 2,
             "title": "News2",
             "description" :"NewsDescription2",
             "content" :"NewsContent22",
             "dateAdded": new Date().toString()}
        ];

        return {newsList};
    }

    genId(newsList: News[]): number{
        return newsList.length > 0 ? Math.max(...newsList.map(news => news.id)) + 1 : 1
    }
}