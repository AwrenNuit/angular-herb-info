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
      name: 'Clove',
      description: 'Clove has been used to relieve toothaches.'
    },
    {
      id: 2,
      name: 'Echinacea',
      description: 'Echinacea is an incredible immune-booster, and even said to fight cancer.'
    },
    {
      id: 3,
      name: 'Elderberry',
      description: 'Elderberry is great for a cold or the flu.'
    },
    {
      id: 4,
      name: 'Goldenrod',
      description: 'Goldenrod is an immune-booster that works wonders for people with allergies.'
    },
    {
      id: 5,
      name: 'Horehound',
      description: 'Hoarhound is often used in cough drops.'
    },
    {
      id: 6,
      name: 'Peppermint',
      description: 'Peppermint soothes the stomach and aids in digestion.'
    },
    {
      id: 7,
      name: 'Yarrow',
      description: 'Yarrow helps cuts stop bleeding.'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}
