import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startarr',
  templateUrl: './startarr.component.html',
  styleUrls: ['./startarr.component.css']
})
export class StartarrComponent implements OnInit {

  Arr1=["If you think your teacher is tough, wait till you get a boss","Life is not fair — get used to it!","Success is a lousy teacher. It seduces smart people into thinking they can’t lose","Be nice to nerds. Chances are you’ll end up working for one"];
  constructor() { }

  ngOnInit(): void {
  }

}
