import { Injectable } from '@angular/core';
import { News } from "../models/news.model";

@Injectable({
    providedIn: 'root'
})

export class NewsService {

    newsList: News[] = [];

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