import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { apiResponse } from '../../models/data.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users$: Observable<apiResponse> = new Observable();

  constructor(private data: DataService) {}

  ngOnInit() {
    this.users$ = this.data.getUsers();
  }
}
