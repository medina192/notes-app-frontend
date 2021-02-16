import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit, OnChanges {

  reloadNavbar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    console.log('some changes !');
  }

  someChanges(event: string){
    console.log('the output functions');
    this.reloadNavbar = !this.reloadNavbar;
  }

}
