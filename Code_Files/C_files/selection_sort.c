#include <stdio.h>
#include <limits.h>
int main(){
    int arr[7]={7,4,5,3,8,3,1};
    int n =7;
     for(int i=0;i<n;i++){   //------>har baar subse small elemnt k 1st index pe aane k baadh dusre min element ko
                            //pehele wale k baadh set karne ka kaam karta(alignment)hai,with this 2 loops array gets sorted.
        int min =INT_MAX;
        int minindx=-1;
        for (int j = i; j <n; j++) //-------> har baar pure array ko check kar k sub se chhote element ko 1st index
                                    // pe lekar aata hai.
        {                           //dusre loop ka kaam buss minimum element ko samne le aana hai(in minindx).
            if (min>=arr[j])
            {
              min=arr[j];
              minindx=j;
            }
            
        }
        int temp = arr[minindx];//-------->swap kar ta hai minimum element pehele element k sath with the help of 1st loop.
        arr[minindx]=arr[i];
        arr[i]=temp;

     }
     printf("\n");
     for (int i = 0; i <n; i++)
     {
        printf("%d",arr[i]);
     }
     
return 0;
}