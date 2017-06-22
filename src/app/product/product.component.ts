import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products : Array<Product>;
  constructor() { }

  ngOnInit() {
  this.products=[
   new Product(1,"这是第一个商品",18,2,"这是一个在线竞拍",["商品","华大"]),
   new Product(2,"这是第二个商品",18,3,"佳世达",["hasdiah","jiasdasd"]),
   new Product(3,"hasdhasdhk",5555,5,"hoiasdi",["asdasas","asdasdas"]),
   new Product(4,"ashdiasdhasid",312,4,"asdasdas",["asdasdas","adqwd"])
  ]
  }
}
export class Product {
  constructor(
  public id:number,
  public title:string,
  public price:number,
  public rating:number,
  public desc:string,
  public categories:Array<string>
  ){}
}
