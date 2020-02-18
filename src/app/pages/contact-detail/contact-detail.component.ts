import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import Contact from '../../models/contact.model';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;
  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    this.contact = this.route.snapshot.data['contact'];
  }

}
