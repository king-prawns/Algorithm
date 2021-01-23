import SwapElementsInArray from '../SwapElementsInArray'

const BubbleSort = (A: number[]) => {
    const N = A.length;
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < (N - 1); y++) {
            if (A[y] > A[y+1]) {
                SwapElementsInArray(A, y, y+1);
            }
        }
    }
}

export default BubbleSort;
