#include<iostream>
#include<cmath>
using namespace std;
int main(){
   int  x,x1,x2,y,y1,y2,X,Y,Z;
    cout<<"enter the values of 3 coordinates in terms of (x,y):";
    cin>>x>>y>>x1>>y1>>x2>>y2;
    X=sqrtf(((x1-x)*(x1-x))+(y1-y)*(y1-y));
    Y=sqrtf(((x2-x1)*(x2-x1))+(y2-y1)*(y2-y1));
    Z=sqrtf(((x2-x)*(x2-x))+(y2-y)*(y2-y));
    if (X==Y&&Y==Z&&Z==X)
    {
        cout<<"equilateral";
    }
    else if (X==Y||Y==Z||X==Z)
    {
        cout<<"isoceles";
    }
    else
    {
        cout<<"scalene";
    }
    
    
  return 0;  
}
