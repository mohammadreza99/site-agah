import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DirectorService } from '@app/core/http/director/director.service';
import { Director } from '@app/shared/models/director.mode';

@Component({
  selector: 'ag-board',
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.scss'],
})
export class BoardPage implements OnInit {
  constructor(private directorService: DirectorService) {}

  directors$: Observable<Director[]>;

  ngOnInit(): void {
    this.directors$ = this.directorService.getDirectors();
  }
}
