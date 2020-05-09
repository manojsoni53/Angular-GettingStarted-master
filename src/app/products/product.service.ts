import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
    providedIn:'root'
})
export class ProductService{
//we have no properties define in this class, so we are not using this particular service to share data
//we are using it to encapsulate the data access feature, by using this service provide the list of product
//we take the responsibility for managin the data away from the individual component, that makes it
//easier to modify or reuse the logic
    getProduct(): IProduct[]{
        return[
            {
                "productId": 8,
                "productName": "Saw",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2019",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "assets/images/saw.png"
              },
              {
                "productId": 10,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2018",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "assets/images/xbox-controller.png"
              }
        ]
    }
}