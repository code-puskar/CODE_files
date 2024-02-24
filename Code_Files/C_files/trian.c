#include <stdio.h>
int main(){
    int a,b,c;
    printf("enter three inputs for a triangle: ");
    scanf("%d %d %d",&a,&b,&c);
   
   if(a==b && b==c){
    printf("equi");
   }
  else if(a==b||b==c||c==a){
    printf("iso");
  }
  else
  {
    printf("scalene");
  }
  
return 0;
}