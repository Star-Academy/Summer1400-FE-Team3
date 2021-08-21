import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import {FetchSongDataService} from "../services/fetch-song-data.service";
import {Router} from "@angular/router";
import {OnChanges} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";

fdescribe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports:[RouterTestingModule],
      providers: [FetchSongDataService,Router]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // TestBed.configureTestingModule({declarations: [CardComponent]}); /* We declare both the components as part of the testing module */

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should call ngOnChanges', ()=> {
    // component.song = {name:"x",artist:"h",id:2,cover:"d",file:"j",lyrics:"k"};
    // spyOn(component, 'ngOnChanges').and.callThrough();
    // fixture.detectChanges();
    // expect(component.ngOnChanges).toHaveBeenCalled();
  })

  // it('should create', () => {
  //   const playlistIds=[1,2,3];
  //   component.song.id=2;
  //   component.ngOnChanges(playlistIds);
  //   spyOn(component,"ngOnChanges").and.callFake((playlistIds)=>{
  //
  //   })
  //   expect(component.heartSrc).toEqual('../assets/images/filled-heart.png');
  // });
});
