#include <stdio.h>

void quickSort(int A[], int low, int high) {
    if (low < high) {
        int partitionIndex = partition(A, low, high);
        quickSort(A, low, partitionIndex - 1);
        quickSort(A, partitionIndex + 1, high);
    }
}

void printArray(int *A, int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", A[i]);
    }
    printf("\n");
}

int partition(int A[], int low, int high) {
    int pivot = A[low];
    int i = low + 1;
    int j = high;

    do {
        while (A[i] <= pivot && i <= high) {
            i++;
        }
        while (A[j] > pivot) {
            j--;
        }
        if (i < j) {
            int temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    } while (i < j);

    A[low] = A[j];
    A[j] = pivot;
    return j;
}

int main() {
    int A[] = {9, 4, 4, 8, 7, 5, 6};
    int n = sizeof(A) / sizeof(A[0]);
    printArray(A, n);
    quickSort(A, 0, n - 1);
    printArray(A, n);
    return 0;
}
