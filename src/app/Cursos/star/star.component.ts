import { Component, Input, OnChanges } from "@angular/core";


@Component({
  selector: 'app-star',
  templateUrl: './star.html',
  styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges{

    public starWidh!: number

    @Input()
    rating: number = 0

    ngOnChanges(): void {
      this.starWidh = this.rating * 74 / 5
    }
}
