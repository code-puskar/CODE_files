#include <stdio.h>
int main()
{
  int i = 0;
  int j = 4;
  int arr[5] = {1, 2, 3, 4, 5};
  while (i < j)
  {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

  return 0;
}