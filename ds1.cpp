//display union and inntersection of two fuzzy sets
#include<stdio.h>
float max(int a,int b)
{
	if(a>b)
	{
		return a;
	}
	else
	{
		return b;
	}
}
float min(int a,int b)
{
	if(a>b)
	{
		return a;
	}
	else
	{
		return b;
	}
}
int main()
{
	float a[]={1.0,1.5,2.0,2.5,3.0};
	float ua[]={1,0.7,0.3,0.75,0};
	float b[]={1.0,1.5,2.0,2.5,3.0};
	float ub[]={1,0.6,0.2,0.85,1};
	printf("set A is:\n{");
	for(int i=0;i<5;i++)
	{
		printf("(%.2f,%.2f),",a[i],ua[i]);
	}
	printf("}\n");
	printf("set B is:\n{");
	for(int i=0;i<5;i++)
	{
		printf("(%.2f,%.2f),",b[i],ub[i]);
	}
	printf("}\n");
	printf("the union is:\n");
	for(int i=0;i<5;i++)
	{
		printf("(%.2f,%.2f)",a[i],max(ua[i],ub[i]));
	}
	printf("\nthe intersection is:\n");
	for(int i=0;i<5;i++)
	{
		printf("(%.2f,%.2f)",a[i],min(ua[i],ub[i]));
	}
}
