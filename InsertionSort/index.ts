import SwapElementsInArray from '../SwapElementsInArray'

const InsertionSort = (A: number[]) => {
    const N = A.length;
    for (let x = 1; x < N; x++) {
        let y = x;
        while (y > 0 && A[y-1] > A[y]) {
            SwapElementsInArray(A, y-1, y);
            y--;
        }
    }
}

export default InsertionSort;
