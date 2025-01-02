import { Component } from '@angular/core';
import { Candidate } from '../../models/candidate.interface';
import { SelectionService } from '../../services/selection.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

// import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-selection',
  imports: [
    MatTableModule, 
    MatPaginatorModule
  ],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css'
})
export class SelectionComponent {
  dataSource:MatTableDataSource<Candidate>;
  displayedColumns = ["Foto", "Candidato", "Correo", "Telefono", "Celular"]
  constructor(private select:SelectionService){
    this.dataSource = new MatTableDataSource<Candidate>(this.select.getCandidates())
  }
  getKeys(object:object){
    return Object.keys(object)
  }
  getValues(object:object){
    return Object.values(object)
  }
  getEntries(object:object){
    return Object.entries(object)
  }
}
