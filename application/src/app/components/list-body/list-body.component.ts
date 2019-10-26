import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-list-body',
    templateUrl: './list-body.component.html',
    styleUrls: ['./list-body.component.css']
 })

 export class ListBodyComponent implements OnInit, OnChanges {
   public managedObjects;
   public objects;
   public disableEdit = true;
   @Input() searchData = { type: "", fragmentType: ""};

   constructor (
      private httpService: HttpService
    ) { }

      ngOnInit() {
         this.httpService.getAllObjects().then(data => {
            this.managedObjects = data;
            this.objects = this.managedObjects.managedObjects
            console.log("res", this.objects)
         }).catch(err =>{
            console.log(err)
         })
      }
      ngOnChanges(){
         console.log("onchange")
         if(this.searchData.type != null || this.searchData.type != undefined || this.searchData.type != ""){
            this.httpService.getObjectsForType(this.searchData.type).then(data => {
               this.managedObjects = data;
               this.objects = this.managedObjects.managedObjects;
           }).catch(err =>{
               console.log(err)
           })
         }

         if(this.searchData.fragmentType != null || this.searchData.fragmentType != undefined || this.searchData.fragmentType != ""){
            this.httpService.getObjectsForFragmentType(this.searchData.fragmentType).then(data => {
               this.managedObjects = data;
               this.objects = this.managedObjects.managedObjects;
           }).catch(err =>{
               console.log(err)
           })
         }
        
      }
      editObject = function() {
         console.log("EDIT")
         this.disableEdit = false;
      }

      get code(){
         return JSON.stringify(this.objects, null, 2)
      }

 }