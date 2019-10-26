import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { ListBodyComponent } from './components/list-body/list-body.component';
import {MatCardModule} from '@angular/material/card';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';

import {SimpleChange} from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        NgxJsonViewerModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        FilterComponent,
        ListBodyComponent
      ],
      providers: [HttpService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create ListBodyComponent', () => {
    const fixture = TestBed.createComponent(ListBodyComponent);
    const list = fixture.debugElement.componentInstance;
    expect(list).toBeTruthy();
  });

  it('should create FilterComponent', () => {
    const fixture = TestBed.createComponent(FilterComponent);
    const filter = fixture.debugElement.componentInstance;
    expect(filter).toBeTruthy();
  });

  it(`should have as title 'Inventory Browser'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Inventory Browser');
  });

  it('Service HttpService should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));

  it('ngOnChange schould have search creteria: check for not null or undefined', () =>{
    const fixture = TestBed.createComponent(ListBodyComponent);
    const list = fixture.debugElement.componentInstance;
    console.log(list)
    list.ngOnChanges({
      searchData: new SimpleChange(null, list.searchData, true)
    })
    fixture.detectChanges();
    expect(list.searchData).not.toBeNull();
    expect(list.searchData).not.toBeUndefined();
  })
});
