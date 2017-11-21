import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricebox',
  templateUrl: './pricebox.component.html',
  styleUrls: ['./pricebox.component.css']
})
export class PriceboxComponent implements OnInit {
  total = 0;

  constructor() { }

  ngOnInit() {
  }

}
