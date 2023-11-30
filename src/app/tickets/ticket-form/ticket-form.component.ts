import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { MAJOR } from '../../../models/ticket';
import { Eleve } from 'src/models/eleve.model';
import { EleveService } from 'src/services/ticket/eleve.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;
  public majorOptions = Object.values(MAJOR);
  public eleves: Eleve[] = [];

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public eleveService: EleveService) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: '',
      eleve: '',
      //studentID: null,
      filiere: [''],
      eleveID: null,
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
    this.eleves = this.eleveService.eleves_list;

  }

  ngOnInit() {
    // this.eleves = this.eleveService.getEleves();
    console.log("eleves", this.eleves);
    
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    ticketToCreate.student = 'Me';
    this.ticketService.addTicket(ticketToCreate);


    // const selectedEleve = this.eleves.find(eleve => eleve.id === 1);

    // if (selectedEleve) {
    //   ticketToCreate.eleve = selectedEleve;
    //   this.ticketService.addTicket(ticketToCreate);
    // } else {
    //   console.error('Selected eleve not found');
    // }


  }

}
