/*  1. Syntax Checker (Required)
 *  괄호가 올바르게 쓰였는지 확인하는 로직을 만들려고 합니다. 
 *  괄호는 대괄호, 중괄호, 소괄호 세가지가 있으며 주어지는 스트링이 괄호가 올바르게 사용되었으며 
 *  true,아니면 false를 리턴하는 함수를 작성하세요.
 *  input	        output
 *  [[(){}]]	    true
 *  (()))	        false
 *  )(())[]{}	    false
 *  ({[}])	        false
 *  [{(([{[]}]))}]	true
*/

testData =['[[(){}]]','(()))',')(())[]{}','({[}])','[{(([{[]}]))}]']

function syntaxChecker(syntax){
    const bracketsPair ={'{':'}','[':']','(':')'}
    const openBracketArr =[]
    return syntax.split('').every((char) => {
        //여는 괄호 이면 openBracketArr push
        if(Object.keys(bracketsPair).find(x => x === char)){
            openBracketArr.push(char)
        }
        //닫는 괄호이면
        else{
            //닫는 괄호가 남으면 false 
            if(openBracketArr.length === 0){
                return false
            }
            //마지막 여는 괄호와 닫는괄호가 같으면 pop
            if(bracketsPair[openBracketArr[openBracketArr.length-1]] === char){
                openBracketArr.pop()
            //다르면 false
            }else{
                return false
            }
        }
        return true
    });
}
testData.forEach((data)=>{
    console.log(`testData: '${data}'`)
    console.log(`result:   ${syntaxChecker(data)} \n`)
})