import { Injectable } from '@angular/core';

import * as bignumber from 'bignumber.js';
import { BigNumber } from 'bignumber.js';

@Injectable()
export class SortingService {

  constructor() { }

  // Write a function that sorts 10000 powers (a^b) where a and b are random numbers between 100 and 10000?
  // Estimate how long it would take on your machine?
  sortArrayOfPowers(arrayToSort) {
    // quicksort
    let stack = [{ lo: 0, hi: arrayToSort.length - 1 }];

    while (stack.length > 0) {

      let { lo, hi } = stack.pop();
      if (lo >= hi) {
        continue;
      }

      let pivot = arrayToSort[lo];
      let i = lo;
      let j = hi;
      let p: number;

      while (true) {

        while (arrayToSort[i] <= pivot && i <= j) { i++; }
        while (arrayToSort[j] >= pivot && j >= i) { j--; }

        if (j <= i) {
          let tmp = arrayToSort[lo];
          arrayToSort[lo] = arrayToSort[j];
          arrayToSort[j] = arrayToSort[lo];
          p = j;
          break;
        }

        let tmp = arrayToSort[i];
        arrayToSort[i] = arrayToSort[j];
        arrayToSort[j] = arrayToSort[i];

        i++;
        j--;
      }
      stack.push({ lo: lo, hi: p - 1 });
      stack.push({ lo: p + 1, hi: hi });
    }

    return arrayToSort;
  }

  generateArrayOfPowers() {
    // Return a random number between 100 and 10000
    const min = 100;
    const max = 10000;
    const sizeOfArray = 5;
    const i = 0;
    return Array.apply(null, Array(sizeOfArray)).map(function () {
      const a: BigNumber = new BigNumber(Math.floor((Math.random() * (max - min)) + min));
      const b: any = new BigNumber(Math.floor((Math.random() * (max - min)) + min));
      const powerNumber: BigNumber = a.toPower(b);
      return powerNumber;
    });
  }

  generateRandomArray() {
    const length = 11;
    const max = 100;
    return Array.apply(null, Array(length)).map(function () {
      return Math.round(Math.random() * max);
    });
  }

  sortRandomArray(array) {
    // bubbleSort
    array = array.slice();
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {

        if (array[j] > array[j + 1]) {
          let swap = array[j];
          array[j] = array[j + 1];
          array[j + 1] = swap;
        }
      }
    }
    return array;
  }

  quickSort = (arr, l = null, r = null) => {
    const _l = l === null ? 0 : l
    const _r = r === null ? arr.length - 1 : r
    const p = this.pivot(arr, _l, _r)
    if (p > -1) {
      const k = this.partition(arr, _l, _r, arr[p])
      this.quickSort(arr, _l, k - 1)
      this.quickSort(arr, k, _r)
    }
    return arr
  }

  pivot(arr, i, j) {
    let k = i + 1
    while (k <= j && arr[i] === arr[k]) {
      k++
    }
    if (k > j) {
      return -1
    }
    if (arr[i] >= arr[k]) {
      return i
    }
    return k
  }

  partition(arr, i, j, p) {
    var l = i, r = j;
    while (l <= r) {
      while (l <= j && arr[l] < p) {
        l++
      }
      while (r >= i && arr[r] >= p) {
        r--
      }
      if (l > r) {
        break
      }
      const tmp = arr[l]
      arr[l] = arr[r]
      arr[r] = tmp
      l++
      r--
    }
    return l;
  }

}
