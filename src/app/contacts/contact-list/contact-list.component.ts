import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public contact: Contact;
  public contacts: Contact[]= [];
  constructor() { }

  ngOnInit() {
    this.contacts = [
      {contactId : '1', name : 'Bro.Jackson', email : 'jacksonk@byui.edu', phone : '208-496-3771',
        imageUrl : 'https://web.byui.edu/Directory/Employee/jacksonk.jpg', group : null},
      {contactId : '2', name : 'Bro.Barzee', email : 'barzeer@byui.edu', phone : '208-496-3768',
        imageUrl : 'https://web.byui.edu/Directory/Employee/barzeer.jpg', group : null}
    ];
  }

}
