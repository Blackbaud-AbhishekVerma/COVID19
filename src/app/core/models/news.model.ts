export class News{
    title: string;
    description: string;
    content: string;
    dateAdded: string;   
    
    constructor(title: string,description: string,content: string){
        this.title = title;
        this.content = content
        this.description = description;
        this.dateAdded = new Date().toString();
    }
}
