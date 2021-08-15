import {Component, Input, OnInit} from '@angular/core';
import {SongModel} from "../models";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() song!: SongModel;
  // @Input() heartSrc!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
