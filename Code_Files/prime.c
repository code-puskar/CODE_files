#include <stdio.h>
int main(){
    int n,i;
    printf("enter the number: ");
    scanf("%d",&n);
    if (n>2)
    {
        for ( i = 2; i <=n/2; i++)
        {
            if (n%i==0)
            {
                printf("not prime");
            }
            else
            {
                printf("prime");
            } 
        }   
    }
    else
    {
        printf("prime no.");
    }
    
    
return 0;
}