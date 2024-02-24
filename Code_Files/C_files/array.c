#include <stdio.h>
int main(){
    int n;
    printf("enter the length of array: ");
    scanf("%d",&n);
    int arr[n],i,j;
    for ( i = 1; i <=n; i++)
    {
        printf("\nenter element %d of array: ",i);
        scanf("%d",&arr[i]);
    }
    printf("reversed array is:");
    for ( j = n; j >=1; j--)
    {
        printf("%d",arr[j]);
    }
    

return 0;
}