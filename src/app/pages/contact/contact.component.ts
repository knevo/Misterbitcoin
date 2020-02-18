import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import Contact from '../../models/contact.model';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contacts: Contact[];
  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = contacts;
    })
  }
  async onFilterChange(event) {
    this.contactService.loadContacts(event.target.value)
  }
}
