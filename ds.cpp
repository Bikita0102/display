//wap to display complement of fuzzy set
#include<stdio.h>
int main(){
	float a[]={1.0,1.5,2.0,2.5,3,3.0};
	float u[]={1.0,0.7,0.3,0.75,0};
	printf("the fuzzy set is:\n");
	for(int i=0;i<=4;i++)
	{
		printf("(%.2f,%.2f)",a[i],u[i]);
	}
	printf("the complement is:\n");
	for(int i=0;i<=4;i++)
	{
		printf("(%.2f,%.2f)",a[i],1-u[i]);
	}
}

