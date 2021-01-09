const MergeSort = (A: number[]) => {
    const N = A.length;
    if (N < 2) return;
    const mid = N/2;
    const R: number[] = [];
    const L: number[] = [];
    for (let i = 0; i < mid; i++) {
        R[i] = A[i]
    }
    for (let i = mid; i < N; i++) {
        L[i-mid] = A[i]
    }
    MergeSort(L);
    MergeSort(R);
    MergeTwoSortedArray(L,R,A);
}