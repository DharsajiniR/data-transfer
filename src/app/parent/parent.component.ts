import { Component, ViewChild } from '@angular/core';
import { FirstChildDataModel } from '../model/first-child-data.model';
import { SecondChildDataModel } from '../model/second-child-data.model';
import { ThirdChildComponent } from '../third-child/third-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @ViewChild('thirdChild') thirdChild: ThirdChildComponent;
  
  firstChildData: FirstChildDataModel = new FirstChildDataModel();
  secondChildData: SecondChildDataModel = new SecondChildDataModel();

  //constructor(private renderer: Renderer2) {}

  triggerButtonClick() {
    // Option 1: Using Renderer2 (Recommended)
    //this.renderer.click(this.thirdChild.buttonElementRef.nativeElement);

    // Option 2: Using ElementRef (Less recommended)
    this.thirdChild.buttonElementRef.nativeElement.click();
  }
}
