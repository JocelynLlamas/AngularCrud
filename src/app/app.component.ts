import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from './services/crudService/crud-service.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
  standalone: true,
})

export class AppComponent implements OnInit {
  datos: any[] = [];

  constructor(private crudService: CrudServiceService) {}

  ngOnInit(): void {
    this.crudService.getDatos().subscribe(data => {
      console.log(data);
      this.datos = data;
    });
  }
}
