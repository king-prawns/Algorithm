import SwapElementsInArray from '../SwapElementsInArray'

const HeapSort = (arr: number[]) => {
    const size = arr.length;

    for(let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        this.heapify(arr, size, i);
    }

    let j = size - 1;
    while(j >= 1) {
        SwapElementsInArray(arr, 0, j);
        Heapify(arr, j, 0);
        j--;
    }
}

const Heapify = (arr: number[], size: number, i: number) => {
    let largest = i;

    let leftLeaf = 2 * i + 1;
    let rightLeaf = 2 * i + 2;

    // If the left child is larger than the current largest.
    if (leftLeaf < size && arr[leftLeaf] > arr[largest]) {
        largest = leftLeaf;
    }

    // If the right child is larger than the current largest.
    if (rightLeaf < size && arr[rightLeaf] > arr[largest]) {
        largest = rightLeaf;
    }
    
    // If the largest of the two is not the original largest
    if (largest != i) {
        // Swap i and the largest.
        this.swap(arr, i, largest);
        // Heapify the sub-tree. 
        this.heapify(arr, size, largest); 
    }
}

export default HeapSort;
