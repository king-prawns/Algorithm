import MergeTwoSortedArray from '../MergeTwoSortedArray'

const MergeSort = (A: number[]) => {
    const N = A.length;
    if (N < 2) return;
    const mid = N/2;
    const L: number[] = [];
    const R: number[] = [];
    for (let i = 0; i < mid; i++) {
        L[i] = A[i]
    }
    for (let i = mid; i < N; i++) {
        R[i-mid] = A[i]
    }
    MergeSort(L);
    MergeSort(R);
    MergeTwoSortedArray(L,R,A);
}

export default MergeSort;
