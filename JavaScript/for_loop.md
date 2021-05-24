# 20200826 JS TIL

- ```javascript
  // function solution(array, commands) {
  //     var answer = [];
  //     for (let command of commands) {
  //         const [i, j, k] = command
  //         const myarray = array.slice(i-1, j)
  //         // 정렬하기
  //         myarray.sort( function(a, b) {
  //             return a-b
  //         } )
  //         answer.push(myarray[k-1])
  //     }
  //     return answer;
  // }
  
  
  var student = [
      { name : "재석", age : 21},
      { name : "광희", age : 25},
      { name : "형돈", age : 13},
      { name : "명수", age : 44}
  ]
  
  /* 이름순으로 정렬 */
  student.sort(function(a, b) { // 오름차순
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      // 광희, 명수, 재석, 형돈
  });
  console.log(student)
  
  student.sort(function(a, b) { // 내림차순
      return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
      // 형돈, 재석, 명수, 광희
  });
  console.log(student)
  ```

- 삼항연산자 

  - 양수일 경우에만 sorting이 진행된다.
  - 진행 방식
    - 만약 첫 삼항연산자 수식이 false 이면 다음 수식으로 넘어간다.
      - 만약 첫 수식이 true 이면 그 상태로 끝나는 것! 
      - -1로 끝나므로 sorting이 진행되지 않는다.
    - 그 수식이 true이면 1을 return 한다. 
    - 이 때, sorting이 진행된다.
  - 그 수식도 맞지 많으면 같은 것으로 간주하고 0을 return한다.



### forEach

- forEach 반복문은 오직 Array 객체에서만 사용가능한 메서드

- 중간에 return을 해서 멈추지 않고 끝까지 for문을 돈다. 
- callback 함수를 통해 배열 요소의 index와 value에 접근할 수 있습니다.
- 배열 첫번째부터 마지막까지 반복하면서 item을 돌 수 있다.

- ```javascript
  var arr = ['가','나','다','라'];
  
  arr.forEach(function(item,index,arr2){ 
      console.log(item,index,arr2[index+1]);                       })
  ```

  

### for ... in 

- 객체에 사용이 가능하며, 객체의 key 값과 value 값을 뽑아내는데 유용

- 객체의 키 값의 갯수만큼 반복하여 첫번째 key값부터 마지막 키값까지 반복합니다.

- Index(순서)를 출력하므로 그 객체 인덱스에 접근하려면 `obj[key]` 형태로 접근해야 합니다.

- ```javascript
  var obj = { a: '가', b: '나', c: '다' }; 
  
  for (var key in obj) { console.log(key, obj[key]); // a 가, b 나, c 다 }
  ```

  



### for...of

- ES6에 추가된 새로운 컬렉션 전용 반복 구문입니다.

- ```javascript
  var iterable = [10, 20, 30]; 
  for (var value of iterable) { 
      console.log(value); // 10, 20, 30 
  }
  ```

  