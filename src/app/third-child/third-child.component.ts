import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FirstChildDataModel } from '../model/first-child-data.model';
import { SecondChildDataModel } from '../model/second-child-data.model';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.css']
})
export class ThirdChildComponent {
  @ViewChild('button') buttonElementRef: ElementRef;
  
  @Input() firstChildData: FirstChildDataModel = new FirstChildDataModel();
  @Input() secondChildData: SecondChildDataModel = new SecondChildDataModel();

  logData() {
    console.log('First Child Data:', this.firstChildData);
    console.log('Second Child Data:', this.secondChildData);
  }
}
