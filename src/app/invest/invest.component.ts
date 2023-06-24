import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {
  @HostListener('scroll') onScrollHost(e: Event): void {
    console.log(this.getYPosition(e));
  }
  
  constructor() { }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
  ngOnInit(): void {
  }

}
