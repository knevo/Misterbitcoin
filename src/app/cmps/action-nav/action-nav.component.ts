import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'action-nav',
  templateUrl: './action-nav.component.html',
  styleUrls: ['./action-nav.component.scss']
})
export class ActionNavComponent implements OnInit {
  @Input() contactId: string
  @Input() isEdit: boolean = null
  @Output() onDelete = new EventEmitter<string>()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goBack() {
    this.router.navigate(['/contacts'])
  }

}
