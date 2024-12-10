#include<stdio.h>
int main(){
    unsigned int num=1;
    char * byteptr=(char *) &num;
    if(*byteptr == 1){
        printf("little endian");
    }else{
        printf("big endian");
    }
 
 
 
    return 0;
}