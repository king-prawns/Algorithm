import SwapElementsInArray from '../SwapElementsInArray'

const partition = (A: number[], start: number, end: number): number => {
    const pivot = A[end];
    let pIndex = start;
    for (let i = start; i < end; i++) {
        if(A[i] <= pivot) {
            SwapElementsInArray(A, i, pIndex);
            pIndex++;
        }
    }
    SwapElementsInArray(A, pIndex, end);
    return pIndex;
}

const QuickSort = (A: number[], start: number, end: number) => {
    if (start >= end) return;
    const pIndex = partition(A, start, end);
    QuickSort(A, start, pIndex-1);
    QuickSort(A, pIndex+1, end);
}

export default QuickSort;
