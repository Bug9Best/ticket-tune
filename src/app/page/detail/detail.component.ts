import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  concertId: string = "";

  constructor(
    private activateRoute: ActivatedRoute,
  ) {
    this.activateRoute.params.subscribe(params => {
      if (params['id']) {
        this.concertId = params['id'];
      }
    });
  }

  getConCert() {
    if (!this.concertId) return;
  }
}
