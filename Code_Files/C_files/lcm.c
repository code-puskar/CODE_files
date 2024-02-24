#include <stdio.h>
int main(){
    int smallest,x,y,i;
    printf("enter two numbers: ");
    scanf("%d %d",&x,&y);
    smallest = x;
    if(smallest>y){
        smallest=y;
    }
    for ( i = 2; i <smallest; i++)
    {
       if (x%i==0&&y%i==0)
       {
        printf("lcm = %d",i);
        break;
       }
       
    }
    
return 0;
}