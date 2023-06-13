export class MenuItem {
    id: number;
    title: string;
    product!:[ImageItem];
    selected: boolean;


  
    constructor(id: number, title: string,selected:boolean) {
      this.id = id;
      this.title = title;
      this.selected = selected;

    }
  }
  export class ImageItem {
    url!: string;
    price!:Float32Array;
    
  }
  
  export class Menu {
    id!: number;
    title!: string;
    image!: ImageItem[];
    
  }
  
  
  