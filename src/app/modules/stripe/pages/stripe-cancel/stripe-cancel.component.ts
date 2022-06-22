import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stripe-cancel',
  templateUrl: './stripe-cancel.component.html',
  styleUrls: ['./stripe-cancel.component.sass']
})
export class StripeCancelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("Ha ocurrido un error:(")
    location.href="stripe/lista"
  }

}
