 //ascending order


 let a=334;
  let b=967;
  let c=876;
 console.log('Given Order = ',a,b,c);
 console.log('Ascending Order');
 if(a>b && a>c && b>c)
 console.log(c,b,a);
 else if (a>b && a>c && b<c)
 console.log(b,c,a);
 else if(a>b && a>c)
 console.log(b,a,c);
else if(a<b && b>c && a>c)
 console.log(c,a,b);
else if(a<b && b>c && a<c)
 console.log(a,c,b);
 else{
 console.log(a,b,c);
 }


// descending order
 let a1=34;
  let b1=15;
  let c1=49;
 console.log('Given Order = ',a1,b1,c1);
 console.log('descending Order');
 if(a1<b1 && a1<c1 && b1<c1)
 console.log(c1,b1,a1);
 else if (a1<b1 && a1<c1 && b1>c1)
 console.log(b1,c1,a1);
 else if(a1<b1 && a1<c1)
 console.log(b1,a1,c1);
 else if(a1>b1 && b1<c1 && a1<c1)
 console.log(c1,a1,b1);
 else if(a1>b1 && b1<c1 && a1>c1)
 console.log(a1,c1,b1);
 else{
 console.log(a1,b1,c1);
 }