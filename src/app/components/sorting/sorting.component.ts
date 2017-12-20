import { Component, OnInit } from '@angular/core';

import { SortingService } from '../../services/sorting.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})

export class SortingComponent implements OnInit {
  private arrayOfPowers: any[] = new Array();
  private randomArray: number[] = new Array();
  private randomArraySorted: number[] = new Array();
  private arrayOfPowersSorted: any[] = new Array();

  constructor(private sortingService: SortingService) { }

  ngOnInit() {
  }

  sortArrayOfPowers(arrayToSort) {
    this.sortingService.quickSort(arrayToSort);
  }

  generateArrayOfPowers() {
    this.arrayOfPowers = this.sortingService.generateArrayOfPowers();
  }

  generateRandomArray() {
    this.randomArray = this.sortingService.generateRandomArray();
  }

  sortRandomArray(array) {

    this.randomArraySorted = this.sortingService.sortRandomArray(array);
  }

}
