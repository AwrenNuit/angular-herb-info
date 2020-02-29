import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herbs',
  templateUrl: './herbs.component.html',
  styleUrls: ['./herbs.component.css']
})
export class HerbsComponent implements OnInit {

  Herbs = [
    {
      id: 1,
      name: 'Elderberry',
      description: 'Elderberry is great for a cold or the flu.'
    },
    {
      id: 2,
      name: 'Goldenrod',
      description: 'Goldenrod is an immune-booster that works wonders for people with allergies.'
    },
    {
      id: 3,
      name: 'Yarrow',
      description: 'Yarrow helps cuts stop bleeding.'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}
