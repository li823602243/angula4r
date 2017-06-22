import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    private products: Array<Product>;
    public imgURL = 'http://placehold.it/320x150';
  constructor() { }

  ngOnInit() {
      this.products = [
          new Product(1,'第一个商品',1.99,3.5,'商品描述第一个商品的描述哈哈哈哈',['电子设备','哇哈哈']),
          new Product(2,'第二个商品',2.99,4.5,'商品描述第一个商品的描述哈哈哈哈',['电子设备','新品种']),
          new Product(3,'第三个商品',3.99,3.5,'商品描述第一个商品的描述哈哈哈哈',['哇哈哈']),
          new Product(4,'第四个商品',4.99,2.5,'商品描述第一个商品的描述哈哈哈哈',['图书','哇哈哈']),
          new Product(5,'第五个商品',5.99,4.5,'商品描述第一个商品的描述哈哈哈哈',['电子设备','日用品']),
          new Product(6,'第六个商品',6.99,1.5,'商品描述第一个商品的描述哈哈哈哈',['消耗品','哇哈哈'])
      ]
  }

}
export class Product{
    constructor(
        public id: number,
        public title:string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ){}
}

