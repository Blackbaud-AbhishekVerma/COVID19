import { Injectable } from '@angular/core';
import { News } from "../models/news.model";

@Injectable({
    providedIn: 'root'
})

export class NewsService {

    newsList: News[] = [
        {"title": "News1",
         "description" :"NewsDescription1",
         "content" :"NewsContent11",
         "dateAdded": new Date().toString()},
        
         {"title": "News2",
         "description" :"NewsDescription2",
         "content" :"NewsContent22",
         "dateAdded": new Date().toString()}
        ];

    addNews(news: News) {
        try {
            this.newsList.push(news);
            this.newsList.sort((val1, val2)=> {return val1.dateAdded > val2.dateAdded ? -1 : 1 })          
        }
        catch (error) {
            console.log(error);
        }
    };
}