import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import {FetchSongDataService} from "../services/fetch-song-data.service";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {SimpleChanges} from "@angular/core";

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports:[RouterTestingModule],
      providers: [FetchSongDataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should update heartSrc', function () {
    // @ts-ignore
    const temp:SimpleChanges = {playlistIds: {currentValue:[1,2,3]}};
    component.song = {
      id: 1,
      name: 'c',
      artist: 'd',
      lyrics: 'f',
      cover: 'k',
      file: 'd',
    };
    component.ngOnChanges(temp);
    expect(component.heartSrc).toEqual('../assets/images/filled-heart.png');
  });

});
