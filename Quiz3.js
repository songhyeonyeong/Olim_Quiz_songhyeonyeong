/* 3. 집뷰가 필요한 이유 (Optional)
*   오프라인 매장이 문을 닫아서 상담원들은 직접 고객을 만나러 각지를 방문해야 하는 상황이 되었습니다. 
*   이들이 최소한의 이동시간으로 고객을 만날 수 있도록 최소 이동시간을 구하는 함수를 작성하세요.
*   입력은 고객 수만큼의 방문지 리스트가 주어지며, 각 방문지에서는 다른 방문지로 이동할 시에 소요되는 이동시간이 다시 리스트로 주어집니다. (단, 방문지의 수는 10명 미만으로 주어집니다)
*/

testData1 = [ [0, 611, 648], [611, 0, 743], [648, 743, 0] ]
testData2 =[ [0, 326, 503, 290], [326, 0, 225, 395], [503, 225, 0, 620], [290, 395, 620, 0] ]

function getMinTime(customerList){
  //방문 이력 인덱스 배열
  let visitCustomer = []
  //최소값
  let minTime = Number.MAX_SAFE_INTEGER;
    // 모든 고객을 한번씩 돌면서 최소값 찾기
    customerList.forEach((customNode,index) => {
        //방문한 고객 index 저장
        visitCustomer.push(index)
        search(index,1,0)
        visitCustomer = visitCustomer.filter((val)=> val != index)
    });

  return minTime;

  /**
   * @param index 방문할 고객 index
   * @param cnt   방문 횟수
   * @param totalTime 걸린 시간
   */
  function search(index,cnt,totalTime){
    //모든 고객을 다 돌았을 때
    if(cnt == customerList.length){
        minTime = minTime >= totalTime ? totalTime : minTime
    }else{
      customerList[index].forEach((time,index)=>{
        //방문한적이 있으면
        if(visitCustomer.includes(index)) return
        //자기자신한테 돌아가는경우면
        if(time == 0) return
        //재귀 순환 호출
        visitCustomer.push(index)
        search(index,cnt+1,time+totalTime)
        visitCustomer = visitCustomer.filter((val)=> val != index)

      })
    }
  }
}

console.log(`result1 : ${getMinTime(testData1)}`);
console.log(`result2 : ${getMinTime(testData2)}`);