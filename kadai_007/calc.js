let num = Math.floor(Math.random() * 31);

switch(true) {
  // caseに条件式を入れる場合は、()内は「true」
  case num % 3 === 0:
    console.log('3の倍数です');
  break;
  case num % 5 === 0:
    console.log('5の倍数です');
  break;
  case num % 3 === 0 &&  num % 5 === 0:
    console.log('3と5の倍数です');
  break;
  default:
    console.log(num);
  break;
}

// 余って0になることを考える、また条件追加は「&&」
