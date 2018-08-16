import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES =[
    {"id":1, "caption": "Photo 1", "url":"assets/img/1.jpg"},
    {"id":2,  "caption": "Photo 2", "url":"assets/img/2.jpg"},
    {"id":3,  "caption": "Photo 3", "url":"assets/img/3.jpg"},
    {"id":4,  "caption": "Photo 4", "url":"assets/img/4.jpg"},
    {"id":5, "caption": "Photo 5", "url":"assets/img/5.jpg"},
    {"id":6,  "caption": "Photo 6", "url":"assets/img/6.jpg"},
    {"id":7,  "caption": "Photo 7", "url":"assets/img/7.jpg"},
    {"id":8, "caption": "Photo 8", "url":"assets/img/8.jpg"},
    {"id":9,  "caption": "Photo 9", "url":"assets/img/9.jpg"},
    {"id":10,  "caption": "Photo 10", "url":"assets/img/10.jpg"},
    {"id":11,  "caption": "Photo 11", "url":"assets/img/11.jpg"},
    {"id":12,  "caption": "Photo 12", "url":"assets/img/12.jpg"},
    {"id":13,  "caption": "Photo 13", "url":"assets/img/13.jpg"}
]
