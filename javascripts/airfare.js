module.exports={

  airplane: function(x,y,decrease,amount,classes,wifi){
    var price=0;
    var discount=0;
    var bags=0;
    var seat=0;
    var hotspot=0;
    var blank=0;
    if (x === y){
  price= 0;

  }
  else if (x==="1" && y==="0" || x==="0" && y==="1") {
    price= 350;

}
 else if (x==="1" && y==="2" || x==="2" && y==="1"){
   price= 545;

 }

 else {
   price= 250;

 }


  if ( decrease === "10OFF"){
  discount= .9;
  }
  else if (decrease === "20OFF"){
  discount= .8;
  }
  else{
  discount= 1;
}


  if (amount > 0){
    bags= amount*25;
 }


   if(classes === '200'){
      seat= 200;
   }
   else if (classes === '500'){
     seat= 500;
   }
   else{
     seat= 0;
 }

if(wifi === "12"){
  hotspot= 12;
} else{
  hotspot= 0;
}


 if (x=== "no" || y=== "no"|| x===y){
   blank= 0;
 }
 else{
   blank= 1;
}return ((price*discount+bags+seat+hotspot)*blank);
}
};
