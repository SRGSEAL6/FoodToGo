import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:FoodToGo-Front-End/Customer-P2/src/app/component/products/products.component.spec.ts
import { ProductsComponent } from './products.component';
|||||||| c18fa51:FoodToGo-Front-End/Courier-P2/src/app/courier-navbar/courier-navbar.component.spec.ts
import { CourierNavbarComponent } from './courier-navbar.component';
========
import { RequestOrderComponent } from './request-order.component';
>>>>>>>> pr/8:FoodToGo-Front-End/Courier-P2/src/app/Courier-Main-Page/request-order/request-order.component.spec.ts

<<<<<<<< HEAD:FoodToGo-Front-End/Customer-P2/src/app/component/products/products.component.spec.ts
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
|||||||| c18fa51:FoodToGo-Front-End/Courier-P2/src/app/courier-navbar/courier-navbar.component.spec.ts
describe('CourierNavbarComponent', () => {
  let component: CourierNavbarComponent;
  let fixture: ComponentFixture<CourierNavbarComponent>;
========
describe('RequestOrderComponent', () => {
  let component: RequestOrderComponent;
  let fixture: ComponentFixture<RequestOrderComponent>;
>>>>>>>> pr/8:FoodToGo-Front-End/Courier-P2/src/app/Courier-Main-Page/request-order/request-order.component.spec.ts

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<<< HEAD:FoodToGo-Front-End/Customer-P2/src/app/component/products/products.component.spec.ts
      declarations: [ ProductsComponent ]
|||||||| c18fa51:FoodToGo-Front-End/Courier-P2/src/app/courier-navbar/courier-navbar.component.spec.ts
      declarations: [ CourierNavbarComponent ]
========
      declarations: [ RequestOrderComponent ]
>>>>>>>> pr/8:FoodToGo-Front-End/Courier-P2/src/app/Courier-Main-Page/request-order/request-order.component.spec.ts
    })
    .compileComponents();
  });

<<<<<<<< HEAD:FoodToGo-Front-End/Customer-P2/src/app/component/products/products.component.spec.ts
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
|||||||| c18fa51:FoodToGo-Front-End/Courier-P2/src/app/courier-navbar/courier-navbar.component.spec.ts
    fixture = TestBed.createComponent(CourierNavbarComponent);
========
    fixture = TestBed.createComponent(RequestOrderComponent);
>>>>>>>> pr/8:FoodToGo-Front-End/Courier-P2/src/app/Courier-Main-Page/request-order/request-order.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
