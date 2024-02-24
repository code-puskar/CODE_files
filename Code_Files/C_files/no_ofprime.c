#include <stdio.h>
int main(){
int count=0,prime=0,n,i,j;
    printf("enter the range:");
    scanf("%d",&n);
    for ( j = 2; j <=n; j++)
    {
         if (j>2)
    {
        for ( i = 2; i <=j/2; i++)
        {
            if (j%i==0)
            {
            count++;
            }    
         
        if (count==0)
    {
        prime++;
    }
    else
    {
        continue;
    }
    
    }
    }

    printf("no. of prime no: %d",prime);
    

return 0;
}