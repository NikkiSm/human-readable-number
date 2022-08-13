module.exports = function toReadable (number) {
   let singleNum = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',];
   let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
  let twentyToNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty' ,'ninety']
   let numberString = number.toString();
   let H = 'hundred';
   if (number === 0)
   {return 'zero';}
  if (number< 10)
    {return singleNum[number];}
   if (number >= 10 && number <= 19) {
    return tenToNineteen[numberString[1]];
  }
  if (number >= 20 && number < 100 && number % 10 == 0) {
    return twentyToNinety[numberString[0]];
    
  }
  if (number >= 20 && number < 100 && number % 10 != 0) {
    return twentyToNinety[numberString[0]] + ' ' + singleNum[numberString[1]];}
    
    if (number >= 100 && number % 100 == 0) {
      return  singleNum[numberString[0]] + ' hundred';}
      if ( number > 100 && number % 100 <= 19 && number % 100 >= 10)
      {return singleNum[numberString[0]] + ' hundred ' + tenToNineteen[numberString[2]];}
      if ( number > 100 &&  number % 100 <= 9)
      {return singleNum[numberString[0]] + ' hundred ' + singleNum[numberString[2]];}
      if (number >= 100 && number % 10 == 0) {
        return  singleNum[numberString[0]] + ' hundred ' + twentyToNinety[numberString[1]];}
        if (number >= 100 && number % 10 != 0) {
          return  singleNum[numberString[0]] + ' hundred ' + twentyToNinety[numberString[1]]  + ' ' + singleNum[numberString[2]];}
};