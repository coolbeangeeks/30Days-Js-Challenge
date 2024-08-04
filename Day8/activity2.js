const x=[1,2,3,5,6];
const [x1,x2]=x
console.log(x1,x2)

const books={
    title:'How to fight for yourself',
    author:'Abhinav Gupta',
    year:2024,
}
const {title,author}=books;
console.log(title,author)
const b=[...x,7,8,9]
console.log(b)
function restvar(sum,...rest){
    
  rest.forEach((val)=>{
    sum=sum+val;
  })
  return sum;

}
console.log(restvar(0,...x));