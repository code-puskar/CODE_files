
    #include <stdio.h>
int main(){
    int biggest,x,y,i;
    printf("enter two numbers: ");
    scanf("%d %d",&x,&y);
    biggest = x;
    if(biggest<y){
        biggest=y;
    }
    for ( i = biggest; i >2; i--)
    {
       if (x%i==0&&y%i==0)
       {
        printf("lcm = %d",i);
        break;
       }
       
    }
    
return 0;
}