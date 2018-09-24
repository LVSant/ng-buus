import { format } from 'date-fns';
import { Component, Output, EventEmitter } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDropdownConfig, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-atendimento-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output() filterChanged: EventEmitter<any> = new EventEmitter();

  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;

  constructor(calendar: NgbCalendar, config: NgbDropdownConfig) {
    config.autoClose = false;
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
  }

  onDateSelection(date: NgbDate, myDrop: NgbDropdown) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.handleFilterChanged(myDrop);
    } else {
      if (this.fromDate === date) {
        this.handleFilterChanged(myDrop);
      }
      this.toDate = null;
      this.fromDate = date;
    }
  }

  handleFilterChanged(myDrop: NgbDropdown) {
    myDrop.close();
    this.filterChanged.emit({ toDate: this.toDate, fromDate: this.fromDate });
  }

  todayString() {
    const from = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day, 0, 0, 0, 0);
    let to;
    if (this.toDate) {
      to = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day, 0, 0, 0, 0);
    }
    return format(from, 'DD/MMM/YYYY') + ' - ' + format(to || from, 'DD/MMM/YYYY');
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

}
