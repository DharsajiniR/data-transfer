import { Component, Input } from '@angular/core';
import { SecondChildDataModel } from '../model/second-child-data.model';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent {
  @Input() data: SecondChildDataModel = new SecondChildDataModel();
}
