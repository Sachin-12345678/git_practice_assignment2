
let number=13;
let factor=0;
for(let i=1; i<number; i++){
if(number%i==0)
{
 factor++;
}
}
if(factor==2)
{
console.log("prime no");
}else{
console.log("NA");
}