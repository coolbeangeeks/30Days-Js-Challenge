function T9(num,cb){
    for(let i=0;i<num;i++){
        cb();
    }
    return 'This is done'
}
console.log(T9(5,()=>console.log("hi i m callback")))

function T10(num,cb1,cb2){
    const fres=cb1(num);
    return cb2(fres);

}
const cb1=(x)=>x+1;
const cb2=(x)=>x*x;

console.log(T10(5,cb1,cb2));