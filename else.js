const price = 500;
const age = 62;
if(age <=12){
    console.log('your paymet is free');
}
else if(age >= 60 ){
    const discunt = price * 10 / 100;
    const ammount =price -discunt ;
    console.log(ammount);
}
else('pay your full bill');