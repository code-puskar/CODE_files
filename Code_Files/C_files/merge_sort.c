#include <stdio.h>

void merge(int A[], int mid, int low, int high) {
    int i, j, k;
    i = low;
    j = mid + 1;
    k = low;

    // Allocate temporary array based on subarray size
    int temp[high - low + 1];

    // Compare and merge elements
    while (i <= mid && j <= high) {
        if (A[i] <= A[j]) {
            temp[k] = A[i];
            i++;
        } else {
            temp[k] = A[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements from left subarray (if any)
    while (i <= mid) {
        temp[k] = A[i];
        i++;
        k++;
    }

    // Copy remaining elements from right subarray (if any)
    while (j <= high) {
        temp[k] = A[j];
        j++;
        k++;
    }

    // Copy sorted elements back to original array
    for (i = low; i <= high; i++) {
        A[i] = temp[i];
    }
}

void sort(int A[], int low, int high) {
    if (low < high) {
        int mid = (low + high) / 2;
        sort(A, low, mid);
        sort(A, mid + 1, high);
        merge(A, mid, low, high);
    }
}

int main() {
    int arr[] = {4, 5, 2, 6, 8, 2, 19};
    int size = sizeof(arr) / sizeof(arr[0]);  // More robust size calculation

    sort(arr, 0, size - 1);

    printf("Sorted array: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}
  