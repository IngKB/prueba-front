export class Post {
    public title:string;
    public text:string;
    public tags:string[];
    public images:{title:string,image:string}[];

    constructor(title:string,text:string,tags:string[],images:{title:string,image:string}[]){
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.images = images;
    }
  }
  