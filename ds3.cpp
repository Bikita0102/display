//wap to display nth term of a fibonacci sequence by using recursive function
#include<stdio.h>
int fibo(int n)
{
	if(n==1||n==2)
	return 1;
	else
	return fibo(n-1)+fibo(n-2);
}
int main()
{
	int n,tn;
	printf("enter value of n:\n");
	scanf("%d",&n);
	tn=fibo(n);
	printf("the %dth term of fibonacci series is %d",n,tn);
}
