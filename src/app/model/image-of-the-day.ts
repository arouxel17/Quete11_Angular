export class ImageOfTheDay {
    constructor(
      public url?: string,
      public title?: string,
      public explanation?: string
    ){}
    loadFromJson(json: any){
      Object.assign(this, json)
    }
  }