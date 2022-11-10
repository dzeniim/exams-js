var text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
 var recenice=text.split(".");
 var recI=text.split(" ")
var noviniz= [];
 console.log( text.length +""+ " elemenata");
 console.log( recenice);
 console.log( recI);
 console.log( recenice.length +""+ " recenice");
 console.log( recI.length +""+ " reci");
 var s
 for(s=0;s<=text.length-1;s++){
  if(text[s]!==", " && text[s]!=="" && text[s]!=="!" && text[s]!=="." && text[s]!=="?" && text[s]!=="-" && text[s]!==" "){
      noviniz.push(text[s])
  }
  else{}
}
console.log( "Uneti niz ima "+ noviniz.length+" slova")