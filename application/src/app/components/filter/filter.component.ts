import {Component, Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../../services/http.service';

import {MatButtonModule} from '@angular/material/button';
@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
 })

 export class FilterComponent {
    public managedObjectsForType;
    @Output() type = new EventEmitter();
    @Output() fragmentType = new EventEmitter();

    constructor (
        public http: HttpService
      ) { }

      public searchCriteria(type, fragmentType){
        let serchCriteria = {
          type: type.value,
          fragmentType: fragmentType.value
        }
        this.type.emit(serchCriteria);
    }
}
 