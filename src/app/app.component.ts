import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Trip {
  start: string;
  end: string;
  level: number;
  arrow: boolean;
}
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  trips: Trip[] = [];
  previousTrip: Trip | null = null;

  addTrip(start: string, end: string): void {debugger
    start = start.trim();
    end = end.trim();

    const trip: Trip = { start, end, level: 1, arrow: false };

    if (this.previousTrip) {
      if (this.previousTrip.end === start) {
        trip.level = 1;
        trip.arrow = false;
      } else if (
        this.previousTrip.start === start &&
        this.previousTrip.end === end
      ) {
        trip.level = 2;
        trip.arrow = false;
      } else {
        trip.level = 1;
        trip.arrow = true;
      }
    }

    this.trips.push(trip);
    this.previousTrip = trip;
  }

}
