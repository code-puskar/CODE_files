#include <stdio.h>

int binarysearch(int arr[],int size,int element){
int start=0;
int end=size-1; 
while (start<=end)
 
{int mid = start + (end - start) / 2;
  if (arr[mid]==element)
  {
    return mid;

  }
  else if (element<=arr[mid])
  {
    start=0;
    end=mid-1;
  }
  else
  {
    start=mid+1;
  }
  
  
  
}
return -1;
}

int main(){
    int size= 10;
    int arr[]={2,3,4,5,8,10,20,24,29,35};
    int a=binarysearch(arr,size,20);
    printf("%d,:position of your element",a);    
    
    

return 0;
}

    


