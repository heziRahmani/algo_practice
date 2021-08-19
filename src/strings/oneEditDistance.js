

export const isOneEdit=(s,t)=>
{
if (typeof(s)==='string' && typeof(t)==='string')
{

    const s1=s.split('');
    const t1=t.split('')
  
    let s2
    let s3
    let t2
    //add a letter
   if (s1.length+1==t1.length) {
    for (let i = 0; i < s1.length; i++) {
        if (s1[i]!==t1[i] ) {
           s2= s1.slice(0,i) +t1[i]+s1.slice(i,s1.length)
           s3=s2.replace(/,/g,'')
           t2=t1.join().replace(/,/g,'')
           console.log(s3===t2);
            return (s3===t2)
        }
      
    }
}

    // reemuve letter
   else if (s1.length+1==t1.length) {
    for (let i = 0; i < s1.length; i++) {
        if (s1[i]!==t1[i] ) {
           s2= s1.slice(0,i)+s1.slice(i+1,s1.length).join().replace(/,/g,'')
           s3=s2.replace(/,/g,'')
           t2=t1.join().replace(/,/g,'')
           console.log(s3===t2);
            return (s3===t2)
         
        }
        
    }   
   
}

    // replace
  else  if (s1.length==t1.length) {
    for (let i = 0; i < s1.length; i++) {
        if (s1[i]!==t1[i] ) {
           s2= s1.slice(0,i)+t1[i]+s1.slice(i+1,s1.length)
        s3=s2.replace(/,/g,'')
       t2=t1.join().replace(/,/g,'')
       console.log(s3===t2);
        return (s3===t2)
     
     
        }
        
    }

    }



    
    
}
else
{
    return false
}
}