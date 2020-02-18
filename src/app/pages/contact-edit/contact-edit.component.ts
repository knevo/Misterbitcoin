import { Component, OnInit } from '@angular/core';
import Contact from 'src/app/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact = new Contact()
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
    this.contact = this.route.snapshot.data['contact'] || new Contact;
  }
  onSave() {
    this.contact = this.contactService.saveContact(this.contact)
    this.router.navigate(['/contacts/' + this.contact._id])
  }
  onDelete(id: string) {
    this.contactService.deleteContact(id)
    this.router.navigate(['/contacts'])
  }
}
