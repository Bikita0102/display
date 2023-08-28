//wap to check wheather a number enter by the user is prime or composite
#include<stdio.h>
int checkprime(n,i)
{
	
	if(i==1)
	return 1;
	if(n%i==0)
	return 0;
	checkprime(n,i-1);
}

int main()
{
	int n;
	int i;
	printf("enter a number:\n");
	scanf("%d",&n);
	if(checkprime(n,n-1))
	printf("prime");
	else
	printf("composite");
}
