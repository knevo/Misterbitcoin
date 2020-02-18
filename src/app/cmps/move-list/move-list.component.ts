import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Move from 'src/app/models/move.model';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  @Input() contactName: string
  moves: Move[]
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
