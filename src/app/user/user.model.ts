export class MenuItem {
  id: number;
  title: string;
  product!: ImageItem[];
  selected: boolean;

  constructor(id: number, title: string, selected: boolean) {
    this.id = id;
    this.title = title;
    this.selected = selected;
  }
}

export class ImageItem {
  product: string;
  url: string;
  price: number;
  desc: string;
  exp: string;
  remainingTime: RemainingTime;

  constructor(
    product: string,
    url: string,
    price: number,
    desc: string,
    exp: string,
    remainingTime: RemainingTime
  ) {
    this.product = product;
    this.url = url;
    this.price = price;
    this.desc = desc;
    this.exp = exp;
    this.remainingTime = remainingTime;
  }
}

export interface RemainingTime {
  days: number;
  hours: number;
  minutes: number;
}

  
  export class Menu {
    id!: number;
    title!: string;
    image!: ImageItem[];
    
  }

  export class AmazonApi{
    
    category!:string;
    next_page!:number;
    products!:[productsData];
    totalProducts!:string;
    
  }
  export class  productsData{
    amazonChoice!: Boolean;
      amazonPrime!: Boolean;
      asin!:string;
      bestSeller!: Boolean;
      price!:[priceData];
      reviews!:[reviewsData];
      score!:string;
      sponsored!: Boolean;
      thumbnail!:string;
      title!:string;
      url!:string;
  }
  export class  priceData{
    before_price!:number;
        currency!:string;
        current_price!:string;
        discounted!:boolean;
        savings_amount!:number;
        savings_percent!:number;
  }
  export class reviewsData{
    rating!:number;
    total_reviews!:number;
  }
  export class testmonies{
    status:number;
    message:string;
    data!:dataApi[];
    constructor(status:number,message:string){
      this.status = status;
      this.message = message

    }
  }  
export  class dataApi{
  name:string;
      productName:string;
        Won:boolean
        type:string;
        url:string;
        constructor(name:string,productName:string,Won:boolean,type:string,url:string){
this.Won = Won;
this.name = name;
this.type =type
this.url = url
this.productName = productName
            }
}



  
  