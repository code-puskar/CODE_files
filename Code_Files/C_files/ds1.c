#include <stdio.h>

int binarysearch(int arr[],int size,int element){
int start=0,end=arr[size-1],mid=(start+end)/2;
while (start<=end)
{
  if (arr[mid]==element)
  {
    return mid;

  }
  else if (element<=mid)
  {
    start=0;
    end=mid-1;
  }
  else
  {
    start=mid+1;
    end=arr[size-1];
  }
  
  
  
}

int main(){
    int size= 10;
    int arr[]={2,3,4,5,8,10,20,24,29,35};
    int a=binarysearch(arr,10,20);
    printf("%d,:position of your element");    
    
    

return 0;
}

    


}
