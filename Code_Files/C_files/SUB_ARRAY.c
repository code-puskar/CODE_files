#include <stdio.h>
void main(){
    int arr[]={1,-2,-3,10,-5};
    int max=0;
    
    for ( int k = 0; k <5; k++)    //INITIALISING TWO SUBLOOPS IN MAJOR LOOP
    {                                 //# CONCEPT
     for ( int i=k; i <5; i++)
     { 
      int sum=arr[i];
      for ( int j=k; j <=i; j++)
        {  sum+=arr[j]; }
        if (max<sum)
     {
      max=sum;
     }
     
     }  
     
    }
    printf("max subarr= %d",max);
   
   
    

}