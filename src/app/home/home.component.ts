import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  preDesigned(): void {
    this.router.navigate(['pre-designed']);
  }

  cusom(): void {
    this.router.navigate(['custom']);
  }

}
