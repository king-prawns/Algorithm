import SwapElementsInArray from '../SwapElementsInArray'

const SelectionSort = (A: number[]) => {
    const N = A.length;
    for (let x = 0; x < N-1; x++) {
        let min = x;
        for (let y = x+1; y < N; y++) {
            if (A[y] < A[min]) {
                min = y;
            }
        }
        SwapElementsInArray(A, x, min);
    }
}

export default SelectionSort;
