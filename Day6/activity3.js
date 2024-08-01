const t1=[1,2,3,4,5,6];

const t2=t1.map((value,index)=>value*value)
console.log(t2)

const t3=t1.filter((value)=>value%2===0);
console.log(t3);

const t4=t1.reduce((prevval,currval)=>currval+prevval,0)
console.log(t4);