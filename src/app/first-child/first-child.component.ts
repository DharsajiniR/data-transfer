import { Component, Input } from '@angular/core';
import { FirstChildDataModel } from '../model/first-child-data.model';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent {
  @Input() data: FirstChildDataModel = new FirstChildDataModel();
}
