import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { EleveService } from 'src/services/ticket/eleve.service';
import { Eleve } from 'src/models/eleve.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  ticket: Ticket;
  public eleve_list: Eleve[]= [];

  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() delete: EventEmitter<Ticket> = new EventEmitter<Ticket>();
  @Output() toggleArchived: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor(public eleveService: EleveService) {
    this.eleve_list = this.eleveService.eleves_list;
  }

  ngOnInit() {
    // console.log("eleves list est arrive !", this.eleve_list);
    
  }

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }
  
  deleteTicket() {
    this.delete.emit(this.ticket);
  }

  toggleArchivedState() {
    this.ticket.archived = !this.ticket.archived;
    this.toggleArchived.emit(this.ticket);
  }
}
