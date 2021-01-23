const swap = (x: number, y: number,  A: number[]) => {
    let temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

const partition = (A: number[], start: number, end: number): number => {
    const pivot = A[end];
    let pIndex = start;
    for (let i = start; i < end; i++) {
        if(A[i] <= pivot) {
            swap(i, pIndex, A);
            pIndex++;
        }
    }
    swap(pIndex, end, A);
    return pIndex;
}

const QuickSort = (A: number[], start: number, end: number) => {
    if (start >= end) return;
    const pIndex = partition(A, start, end);
    QuickSort(A, start, pIndex-1);
    QuickSort(A, pIndex+1, end);
}