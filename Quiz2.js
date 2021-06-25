 /* 2. Raccoon (Required)
 *  너구리 한 쌍은 한 달 후에 다른 새끼 너구리 한 쌍을 낳습니다. 이 새끼 너구리 한 쌍은 한 달 동안 성체가 되며 성체가 된 너구리 한 쌍은 다시 한 달 후에 다른 새끼 너구리 한 쌍을 낳습니다. 
 *  이미 성체가 된 너구리 부부는 달마다 새끼 너구리를 한 쌍씩 낳는다고 가정할 때, n달 후의 너구리 수를 구하는 함수를 작성하세요. (단, 이 너구리들은 죽지 않습니다.)
 *  예시:
 *  input(n달후)	output(마리 수)
 *  0	            2
 *  1	            4
 *  4	            16
*/


testData =[0,1,2,3,4,5,6]

let fiboArr = [0];
function Raccoon(n){
  //초기값
  if (n === 0) {
    fiboArr[n] = 2;
  }else if(n === 1){
    fiboArr[n] = 4;
  }
  if (!fiboArr[n]) { 
    // 재귀를 이용해 구하고 저장
    fiboArr[n] = Raccoon(n - 1) + Raccoon(n - 2);
  }

  return fiboArr[n];
};


testData.forEach((data)=>{
    console.log(`month: ${data} 달 후`)
    console.log(`result: ${Raccoon(data)} 마리 \n`)
})