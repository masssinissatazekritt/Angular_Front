import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class StudentService {
  // Implement functions to get students and retrieve a student by ID
}

export class TicketService {
  private ticketList: Ticket[] = TICKETS_MOCKED;

  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

  constructor() {
  }

  addTicket(ticket: Ticket) {
    // Update the list of tickets
    this.ticketList.push(ticket);

    // Update the observable with the existing list reference
    this.tickets$.next(this.ticketList);
  }
  deleteTicket(ticket: Ticket) {
  // Assuming 'ticketList' is your list of tickets
  const index = this.ticketList.indexOf(ticket);
  if (index !== -1) {
    this.ticketList.splice(index, 1); // Remove the ticket from the list
    this.tickets$.next(this.ticketList); // Update the observable
  }
}
}
