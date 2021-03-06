import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Contact from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Output() onSelectContact = new EventEmitter<Contact>()
  @Input() contacts: Contact[]
  constructor() { }

  ngOnInit(): void {
  }

}
