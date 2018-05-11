import { SessionService } from './../services/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-page',
  templateUrl: './another-page.component.html',
  styleUrls: ['./another-page.component.css']
})
export class AnotherPageComponent implements OnInit {

  constructor(private ss:SessionService) { 

  }

  ngOnInit() {
  }

}
