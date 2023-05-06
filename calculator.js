class Calculator{
   constructor(){
      this.value1 = "";
      this.value2 = "";
      this.operator = "";
      this.count = 0;
      this.count1 = 0;
      this.ccount = 0;
   }
   operatorFunction(x){
   if(this.count == 0){
           this.value2 = this.value1;
      this.value1="";
      this.count++
   }else if(this.count1 >= 1){
      this.operator = x;
      this.count++
   }
   else{
   this.compute();
   this.value1="";
   this.count++;
   document.getElementById("display").innerHTML = this.value2;
   }
   this.count1++;
 return this.operator = x
   } 
   appendNumber(y){
   let doc = document.getElementById("display").innerHTML;
   if(doc == "0"){
     if(y == "0"){
        this.value1 = y;
     }
     else{
        this.value1 += y;
     }
   }else{
      this.value1 += y;      
   }
 this.count1 = 0;
 document.getElementById("display").innerHTML = Number(this.value1);
  return this.value1;
   }
   compute(){

      switch(this.operator){
         case"+":
         let n1=Number(this.value1);
         let n2=Number(this.value2);
         n2+=n1;
         this.value2 = n2;
         this.value1="";
         return this.value2;
         break;
         case"-":
         this.value2 -= this.value1;
         this.value1="";
         return this.value2;
         break;
         case"*":
         this.value2 *= this.value1;
         this.value1="1";
         return this.value2;
         break;
         case"/":
         this.value2 /= this.value1;
         this.value1="1";
         return this.value2;
         break;
         default:
         return Number(this.value1)
         ;
       }
   }
   clear(){
      this.value1 = "";
      this.value2 = "";
      this.operator = "";
      this.count = 0;
      this.ccount = 0;
      this.count1 = 0;
      document.getElementById("display").innerHTML = "0";
   }
   display(){
      this.compute();
       document.getElementById("display").innerHTML = this.value2;
      }
}
const myCalculator = new Calculator();


