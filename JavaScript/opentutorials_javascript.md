# 생활코딩 Javascript (언어)

## 오리엔테이션

### Javascript

- JavaScript는 웹 페이지를 동적으로, 프로그래밍적으로 제어하기 위해서 고안된 언어이다.
- ECMA Script
  - 표준화 기구인 Ecma International에 의해서 관리되는 '자바스크립트 표준안'이다.



## 숫자와 문자

- **<u>데이터</u>**: 정보이고, 프로그래밍에서 그 정보가 무엇이냐에 따라 type이 있다.

- html을 누르고  tab키를 누르면 html의 샘플이 만들어짐

- 정수

  - ```javascript
    alert(1); //alert사이에 어떤 값을 주면, 괄호 안에 들어가있는 값이 표시된다.
    ```

  - 1은 숫자라는 데이터 형식이며, 정수이다.

  - 정수는 0 을 기준으로 해서 1, 2, 3, 4, 그리고 0을 포함해서, -1, -2, -3과 같은 숫자이다. 

- 실수

  - ```javascript
    alert(1.1);
    alert(1.111);
    alert(1.1+1.1); //2.2
    alert(2*8) //16
    alert(6/2); 
    1 + 1 //2
    10 * 2 //20
    1 // 1
    
    ```

  - 1.1은 실수이다. 
  - 0과 1.0 그리고 2.0 등 그 사이에 수 많은 숫자가 존재한며, 실수는 '소숫점'으로 존재한다.

- 정수와 실수를 포괄적으로 **Number**라고 부른다.

- /: slash라 부른다



### 수의 연산

- Math
  - Math.pow(a, b) :a^b를 말한다.
    - Math.pow(3,2): 3의 2승을 말하며, 9가 출력된다.
  - Math.round(a, b): 반올림
    - Math.round(10.6): 11
  - Math.floor(a): 내림
    - Math.floor(10.2): 10
  - Math.sqrt(a): 제곱근
    - Math.sqrt(9): 3
  - Math.random(): 0과 1.0사이의 random한 숫자 출력
    - 0~100 의 숫자를 얻고 싶다면, 100*Math.random()
    - 0~100 의 정수를 얻고 싶다면, Math.round(100*Math.random());



### 문자의 표현

- 숫자와 문자: 가장 많이 사용하는 데이터 형식

- **JavaScript에서 문자를 표현하기 위해서는 ' '(작은따옴표) 혹은 " "(큰따옴표)를 사용한다.**

- 예시

  - ```javascript
    alert('coding everybody');
    alert("coding everybody");
    alert("coding everybody'); → 에러! 
    ```

    - 마지막 줄에서 에러가 나는 이유는 작은 따옴표는 작은 따옴표끼리, 큰 따옴표는 큰 따옴표끼리 사용해야하기 때문이다.

  - 문자열에 작은 따옴표를 쓰고 싶다면?

    - ```javascript
      alert("egoing's coding everybody");
      
      //하단은 문제될 경우
      alert('egoing's coding everybody'); 
      //egoing만 문자이고 그 뒤는 문자로 인식하지 않기 때문에 에러 발생
      //해결 방법
      alert('egoing\'s coding everybody');
      ```

    - \ (역슬래시)
      - 이스케이프라고 한다.
      - 역슬래시 바로 뒤에 있는 문자 하나는 정보로 해석한다라는 약속이 되어있다.

- 숫자가 문자가 되는 경우?

  - 숫자에 따옴표가 붙어있는 경우로, **문자열**이라고 부른다! 

  - 예시) "1", '1' → **문자열**이다.

  - ```javascript
    typeof 1 //"number"
    typeof "1" //"string"
    ```

  - 문자열: 문자들의 모임, 문자들의 집합, 영어로는 string



### 문자에 대한 표현

- 여러줄로 표시하고 싶다면?

  - **줄바꿈**: \n (역슬래시 + n)

  - ```javascript
    alert("coding \n everybody")
    //위 결과 출력
    //coding
    //everybody
    
    alert("coding" "everybody") //codingeverybody
    alert("coding"+" "+"everybody") //coding everybody
    ```

- 숫자인 문자열을 더한다면?

  - ```javascript
    "1"+"1"
    //"11"
    ```

- 길이 출력

  - ```javascript
    "coding.everybody".length //16
    "code".length //4
    ```

- indexOf

  - 문자열 내에서 특정한 문자열의 index값을 리턴한다.

  - ```javascript
    strinValue.indexOf(searchValue[,fromIndex])
    //[ ] 대괄호로 되어있는 것은 사용하지 않아도 된다는 뜻이다.
    ```

  - ```javascript
    "code".indexOf("o") //1
    "code".indexOf("d") //2
    "code".indexOf("e") //3
    ```

<br>

## 변수

- 영어로는 variable이라고 하며 컨테이너로 문자나 숫자와 같은 값을 유지할 필요가 있을 때 사용한다.



### 변수의 선언

- 변수는 `var` 키워드를 사용한다. 즉, 변수를 선언하겠다는 것을 의미한다.

- ```javascript
  var a = 1;
  alert(a); //1
  a = 10
  alert(a); //10
  var a = 2;
  ```

  - a는 값을 담는 그릇이고, 어떠한 값도 담을 수 있기 때문에 그 그릇이 계속 바뀐다.

- ```javascript
  var a = 1;
  var b = 2;
  alert(a+b); //3
  a = 2;
  alert(a+b); //4
  ```

- 변수에는 꼭 숫자만 올 수 있는 것이 아니다

  - ```javascript
    var first = 'coding';
    alert(first+' everybody')//first everybody
    first = '코딩' 
    alert(first + ' everybody') //코딩 everybody
    ```

  - ```javascript
    var a = 'coding', b = 'everybody'
    alert(a+b) //codingeverybody
    ```



### 변수가 없다면/ 변수의 효용

- 변수는 왜 쓰는가?

- 변수는 **코드의 재활용성을 높여준다.**

- 예를들어서 100에 10을 더하고, 10을 나눈 후에 다시 10을 빼고 거기에 10을 곱해야 한다고 치자. 그리고 각 단계마다 그 결과를 출력해야 한다면 코드는 아래와 같을 것이다. 예를 들어서 100에 10을 더하고, 10을 나눈 후에 다시 10을 빼고 거기에 10을 곱해야 한다고 치자. 그리고 각 단계마다 그 결과를 출력해야 한다면 코드는 아래와 같을 것이다.

  - ```javascript
    alert(100+10);
    alert((100+10)/10);
    alert(((100+10)/10)-10);
    alert((((100+10)/10)-10)*10);
    ```

    - 100을 100으로 수정한다고 하면, 위의 코드를 모두 수정해야 한다.

- 변수를 적용해본다면?

  - ```javascript
    a = 100; //변할 수 있는 영역
    //하단은 변하지 않는 영역
    a = a + 10;
    alert(a);
    a = a / 10;
    alert(a);
    a = a - 10;
    alert(a);
    a = a * 10;      
    alert(a);
    ```

- 변수의 효용은 중요하다!

<br>

## 주석

- 한국어로는 주석, comment
- 주석은 문법적으로 해석되지 않는다. 그렇기 때문에 **적합한 형태의 설명을 부가**할 수 있다.
  - 미래에 봤을 때 자신이 작성한 코드를 이해할 수 있고,
  - 타인이 봤을 때 자신이 작성한 코드의 취지를 설명해야 되는 경우에 주석 사용 
  - 어떤 코드를 일시적으로 동작하지 않게 할 때 사용한다.
- //
  - 줄바꿈 하기 전까지 주석 (한 줄)
- /* */ 
  - 여러줄을 주석처리할 수 있다.

<br>

## 줄바꿈과 여백

- ```javascript
  var a = 1;
  alert(a);
  ```

- ;  = 세미콜론

  - 명령이 끝났다는 것을 명시적으로 표시할 때 사용
  - 세미콜론을 삭제해도 명령은 잘 동작한다! (줄바꿈이 되어있기 때문에, 명령이 끝났다고 인식)

  - 반드시 필요한 경우: 2줄에 있는 것을 1줄로 바꾸고 싶다. 

    - ```javascript
      var a = 1; alert(a);
      ```

- 여백

  - 여백은 tab키를 누르거나 4번 스페이스를 누른다.

<br>

## 비교

### 연산자란

- 어떤 작업을 컴퓨터에게 지시하기 위한 기호
- 예시
  - a = 1
    - a 는 변수
    - 1은 값 혹은 상수 (바뀌지 않는 값)
    - =은 **<u>대입 연산자</u>** (좌항에 있는 값을 우항에 대입한다)
  - 컴퓨터에게 a라는 변수에 1이라고 하는 값을 대입해라 라고 **연산자를 통해 하는 것**

- 상수: 변수에 대항되는 개념

  

#### 비교 연산자

- 좌항이 있고, 우항이 있을 때, 주어진 값들이 같은지, 큰지, 작은지를 구분하는 것을 의미한다.
- 비교 연산자를 통해 만들어진 결과 (**boolean**)
  - true
  - false



### == 와  ===

- **== (equal operator)**

  - **동등연산자**로 좌항과 우항을 비교해서 서로 값이 같다면 true, 다르다면 false가 된다.
  - **'='가 두 개인 것**을 주의해야 한다.
  - **<u>'='가 하나인 것은 대입 연산자</u>**로, 좌항의 값을 우항의 변수에 대입할 때 우항의 변수에 대입할 때 사용하는 것으로 의미가 완전히 다르다.

  - 코드

    - ```javascript
      alert(1==2); //false
      alert(2==2); //true
      alert("one" == "one"); //true
      alert("one"=="two") //false
      ```

      

- **=== (strict equal operator)**

  - **일치 연산자**로 <u>좌항과 우항이 "정확"하게 같을 때</u> true, 다르면 false가 된다.

  - 코드

    - ```javascript
      alert(1==="1") //false
      alert(1=="1") //true
      ```

  - **데이터 형이 같은 경우에만 같다**고 판단

  

### ===를 사용하자!

- 코드

  - ```javascript
    alert(null == undefined);       //true
    alert(null === undefined);      //false
    alert(true == 1);               //true
    alert(true === 1);              //false
    alert(true == '1');             //true
    alert(true === '1');            //false
     
    alert(0 === -0);                //true
    alert(NaN === NaN);             //false
    ```

- 코드

  - ```javascript
    var a; 
    alert(a); //undefined
    
    var a = null;
    alert(a); //null
    ```

  - **<u>null과 undefined의 차이점을 구분하자</u>**. 
    - **null**은 <u>값이 없다</u>는 것이고 프로그래머가 <u>의도적으로 부여</u>한 값이며,
      **undefined**는 그냥 <u>값이 없고</u>, 프로그래머가 <u>의도하지 않은</u> 상황이다.
    - **null: 값이 없다**
    - **undefined:  값이 정의되지 않았다.**

- ```javascript
  alert(undefined == null) //true
  alert(undefined === null) //false
  ```

- 데이터 형식

  - Boolean
    - true/ false 
  - Number
    - -1 0 1 2 3
  - String
    - "a", "b", "c"
  - undefined
  - null

- 코드

  - ```javascript
    alert(null == undefined);       //true
    alert(null === undefined);      //false
    
    alert(true)   					//true
    
    alert(true == 1) 				//true
    alert(true == 2) 				//false
    alert(true == 3) 				//false
    
    alert(true === 1);              //false
    alert(true == '1');             //true
    alert(true === '1');            //false
     
    alert(0 === -0);                //true
    alert(NaN === NaN);             //false
    ```

    - Javascript에서 **동등연산자(==)는 숫자 1을 true라고 생각**하고, **2부터는 false**라고 생각한다.
    - NaN === NaN: NaN이라는 것은 수학에서 0/0일 때, 성립하지 않는 경우를 말하기 때문에 NaN은 계산할수 없음이라는 결과에 불과하기 때문에, 둘다 NaN일지라도 false가 된다.  

<br>

### 부정과 부등호

- ! 느낌표는 부정을 의미한다. 

#### != 

- 코드

  - ```javascript
    alert(1!=2);            //true
    alert(1!=1);            //false
    alert("one"!="two");    //true
    alert("one"!="one");    //false
    ```

<br>

#### !==

- 정확하게 같지 않다는 의미이다.

<br>

#### >

- 좌항이 우항보다 크다면 참, 그렇지 않다면 거짓임을 알려주는 연산자다.

- 코드

  - ```javascript
    alert(10>20);   //false
    alert(10>1);    //true
    alert(10>10);   //false
    ```

<br>

#### >=

- 좌항이 우항보다 크거나 같다.

- 코드

  - ```javascript
    alert(10>=20);      //false
    alert(10>=1);       //true
    alert(10>=10);      //true
    ```

<br>

## 조건문

### 조건문이란

- 조건문  (Conditional statement)

  - 조건문이란 주어진 조건에 따라서 애플리케이션을 다르게 동작하는 것이다.

- if로 시작

- 코드

  - ```javascript
    if(true){
        alert('result : true');
    }
    ```
    - if 뒤에 따라오는 괄호 안에  true가 오게 되면, 중괄호 안쪽에 있는 부분이 실행된다.

  - ```javascript
    if(false){
        alert('result : true');
    }
    ```

    - if 뒤에 false가 오게 되면, 중괄호 안쪽 부분은 실행되지 않는다.

- 예시

  - ```javascript
    if(true){
        alert(1);
        alert(2);
        alert(3);
        alert(4);
    }
    alert(5);
    /*
    출력
    1
    2
    3
    4
    5
    */
    ```

  - ```javascript
    if(false){
        alert(1);
        alert(2);
        alert(3);
        alert(4);
    }
    alert(5);
    //5
    ```

    

### else, else if

#### else

- if문의 조건이 true라면 if의 중괄호 구간이 실행되고, false라면 else이후의 중괄호 구간이 실행된다

- 예시

  - ```javascript
    if(false){
        alert(1);
    } else {
        alert(2);
    }
    ```

    

#### else if

- 조금 더 다양한 케이스의 조건을 검사할 수 있는 기회를 제공한다.

- else if의 특징은 if나 else와는 다르게 여러개가 올 수 있으며, else if의 모든 조건이 false라며 else가 실행된다.

- else는 생략 가능하다

- 예시

  - ```javascript
    if(false){
        alert(1);
    } else if(true){
        alert(2);
    } else if(true){
        alert(3);
    } else {
        alert(4);
    }
    //2
    ```

  - ```javascript
    if(false){
        alert(1);
    } else if(false){
        alert(2);
    } else if(true){
        alert(3);
    } else {
        alert(4);
    }
    //3
    ```

  - ```javascript
    if(false){
        alert(1);
    } else if(false){
        alert(2);
    } else if(false){
        alert(3);
    } else {
        alert(4);
    }
    //4
    ```

<br>

### 조건문의 응용

#### 변수와 비교 연산자

- 변수와 비교연산자 그리고 조건문을 결합해본다.

- 예시

  - ```javascript
    a = 1;
    if (a === 1){
        alert(1);
    }
    //1
    ```

- **<u>prompt</u>**

  - 사용자로부터 정보를 받을 수 있게끔 한다.

  - 예시

    - ```javascript
      prompt('당신의 나이는?');
      ```

- 조합하기

  - ```javascript
    alert(prompt('당신의 나이는?'));
    //20이라고 하면 숫자 20에 대한 alert의 결과가 나타난다.
    
    alert(prompt('당신의 나이는?')*2);
    //40
    ```

  - ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8"/>
    </head>
    <body>
        <script>
            var id = prompt('아이디를 입력해주세요.')
            if(id=='egoing'){
                alert('아이디가 일치 합니다.')
            } else {
                alert('아이디가 일치하지 않습니다.')
            }
        </script>
    </body>
    </html>
    ```

<br>

#### 조건문의 중첩

- ```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8"/>
  </head>
  <body>
      <script>
          var id = prompt('아이디를 입력해주세요.');
          if(id=='egoing'){
              var password = prompt('비밀번호를 입력해주세요.');
              if(password==='111111'){
                  alert('로그인 하셨습니다.' + id +' 님 반갑습니다.');
              } else {
                  alert('비밀번호가 일치하지 않습니다.');
              }
          } else {
              alert('아이디가 일치하지 않습니다.');
          }
      </script>
  </body>
  </html>
  ```

<br>

### 논리연산자

#### && (and, 그리고)

- 좌항과 우항이 **모두 참**일때, 참이된다. 

- AND라는 뜻을 가진 논란 연산자

- 코드

  - ```javascript
    if(true && true){
        alert(1); //1
    }
    if(true && false){
        alert(2);
    }
    if(false && true){
        alert(3);
    }
    if(false && false){
        alert(4);
    }
    ```



- 활용 사례

  - ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8"/>
    </head>
    <body>
        <script>
            id = prompt('아이디를 입력해주세요.');
            password = prompt('비밀번호를 입력해주세요.');
            if(id=='egoing' && password=='111111'){
                alert('인증 했습니다.');
            } else {
                alert('인증에 실패 했습니다.');
            }
        </script>
    </body>
    </html>
    ```

    - 중첩된 if문을 하나 줄였다.

<br>

#### || (Or, 또는)

- or연산자

- 좌우항 중에 하나라도 true라면 true가 되는 논리 연산자이다.

- 코드

  - ```javascript
    if(true || true){
        alert(1); //1
    }
    if(true || false){
        alert(2); //2
    }
    if(false || true){
        alert(3); //3
    }
    if(false || false){
        alert(4);
    }
    ```

- 활용 예제

  - ```javascript
    id = prompt('아이디를 입력해주세요.');
    if(id==='egoing' || id==='k8805' || id==='sorialgi'){
        alert('인증 했습니다.');
    } else {
        alert('인증에 실패 했습니다.');
    }
    ```

    - id 값이 세 값 중 하나라면, 인증이 된다.

- || , && 조합 예제

  - ```javascript
    id = prompt('아이디를 입력해주세요.');
    password = prompt('비밀번호를 입력해주세요.');
    if((id==='egoing' || id==='k8805' || id==='sorialgi') && password==='111111'){
        alert('인증 했습니다.');
    } else {
        alert('인증에 실패 했습니다.');
    }
    ```

<br>

#### ! (not)

- 부정의 의미로, Boolean의 값을 역전시킨다.

- true → false, false → true

- not 연산자라 부른다

- 코드

  - ```javascript
    if(!true && !true){
        alert(1);
    }
    if(!false && !true){
        alert(2);
    }
    if(!true && !false){
        alert(3);
    }
    if(!false && !false){
        alert(4); //4
    }
    ```

<br>

### Boolean의 대체제

- 조건문에 사용될 수 있는 데이터 형이 꼭 boolean만 되는 것이 아니다.

- 관습적인 이유로 0은 false, false 0이 아닌 값은 true로 간주된다.

  - ```javascript
    if(0){
        alert(1)
    }
    if(1){
        alert(2)
    }
    ```

<br>

#### 기타 false로 간주되는 데이터 형

- ```javascript
  if(''){
      alert('\'\'빈 문자열') //실행되지 않음
  }
  if(!''){
      alert('!\'\' 빈 문자열') // !\\빈 문자열 
  }
  if(!undefined){
      alert('!undefined');//!undefined
  }
  var a;
  if(!a){
      alert('!a 값이 할당되지 않은 변수'); //!a 값이 할당되지 않은 변수 
  }
  if(!null){
      alert('!null'); //!null
  }
  if(!NaN){
      alert('!NaN'); //!NaN
  }
  ```

  - javascript에서는 null, NaN, undefined 모두 false로 간주

<br>

## 반복문

### 반복문

- 반복문 (loop iterate)
  - 컴퓨터는 반복적인 작업을 대행하기 위해서 만들어진 기계다.
  - 반복문은 컴퓨터에게 반복적인 작업을 지시하는 방법이다.

<br>

### 반복문의 문법

#### while

- 형식

  - ```javascript
    while (조건){
        반복해서 실행할 코드
    }
    ```

- 무한 반복/무한 루프을 발생시키는 예시

  - 저장되지 않은 작업이 있다면 모두 정리한 후에 이 명령을 실행하기! 웹브라우저는 무한반복을 허용하지 않기 때문에 어느 정도 시간이 흐르면 스크립트를 종료할 것인지 물어볼 것이다.

  - 반복이 끝나지 않고 컴퓨터에게 무리를 주는 상황

  - ```javascript
    while(true){
        document.write('coding everybody <br />');
    }
    ```

- 아무런 결과도 출력하지 않는 예시

  - 무한 루프를 막기 위해서는 어느 순간 while 문에서 false가 되어야 한다.

  - ```javascript
    while(false){
        document.write('coding everybody <br />');
    }
    ```

- 반복 조건 주기

  - ```javascript
    var i = 0;
    while(i<10){
        document.write("Coding everybody <br /")
        i++;
    }
    //i가 9일때 마지막으로 실행되고, i가 10이 되면서 실행이 멈추게 된다.
    ```

<br>

#### for

- 반복 조건이 있

- 형식

  - ```javascript
    for(초기화; 반복조건; 반복이 될 때마다 실행되는 코드){
        반복해서 실행될 코드
    }
    ```

  - 반복이 될 때마다 실행되는 코드 뒤에는 ';' (세미콜론)이 있으면 안된다.

- 예시

  - ```javascript
    for(var i = 0; i < 10; i++){
        document.write('coding everybody'+i+'<br />');
    }
    ```

    - var i = 0 : 초기화
    - i < 10:  조건

- i++

  - 1씩 증가

- **++i vs i ++** 
  - ++i: i의 값이 0일때, alert(++i);는 1이다. 그 이후 한 번 더 실행하면 2, 3, ...
    - **사용할 때, i의 값을 증가시키고 사용**
  - i++: i의 값이 0 일때, alert(i++);는 0이다. 그 이후 한 번 더 실행하면 1, 2,...
    - **기존의 값을 사용하고, i의 값을 증가시킨다 .**

<br>

### 반복문의 효용

- 반복문이 없다면?

  - coding everybody를 10번 반복해서 출력하고 싶다고 한다면..

    - ```javascript
      document.write('coding everybody');
      document.write('coding everybody');
      document.write('coding everybody');
      document.write('coding everybody');
      document.write('coding everybody');
      document.write('coding everybody');
      document.write('coding everybody');
      document.write('coding everybody');
      document.write('coding everybody');
      document.write('coding everybody');
      document.write('coding everybody');
      ```

    - 하나하나 코드를 다 써야 한다.

  - while문을 사용한다면?

    - ```javascript
      var i = 0;
      while(i < 10){
          document.write('coding everybody <br />');
          i++;
      }
      ```

  - 반복문 없이 1부터 10까지 출력하고 싶다면? 행마다 숫자를 바꿔야 한다.

    - ```javascript
      document.write('coding everybody 1<br />')
      document.write('coding everybody 2<br />')
      //중략
      document.write('coding everybody 9<br />')
      document.write('coding everybody 10<br />')
      ```

  - 반복문을 사용한다면?

    - ```javascript
      var i = 0;
      while(i < 10){
          document.write('coding everybody '+i+'<br />');
          i++;
      }
      ```

  - 2의 배수를 원한다면?

    - ```javascript
      var i = 0;
      while(i < 10){
          document.write('coding everybody '+(i*2)+'<br />');
          i++;
      }
      ```

<br>

### 반복문의 제어 (break, continue)

#### break

- 반복 작업을 중간에 중단시키고 싶다면 break를 사용한다.

- 예시

  - ```javascript
    for(var i = 0; i < 10; i++){
        if(i === 5) {
            break;
        }
        document.write('coding everybody'+i+'<br />');
    }
    
    /*
    결과
    coding everybody 0
    coding everybody 1
    coding everybody 2
    coding everybody 3
    coding everybody 4
    
    */
    ```

    - i == 5일 때 for문이 종료되면서 i가 4까지의 문구가 출력된다.

<br>

#### continue

- 실행을 즉시 중단하면서 반복은 지속되게 하려면 continue를 사용해야 한다.

- 예제

  - ```javascript
    for(var i = 0; i < 10; i++){
        if(i === 5) {
            continue;
        }
        document.write('coding everybody'+i+'<br />');
    }
    
    /*
    결과
    coding everybody 0
    coding everybody 1
    coding everybody 2
    coding everybody 3
    coding everybody 4
    coding everybody 6
    coding everybody 7
    coding everybody 8
    coding everybody 9
    
    */
    ```

    - 5가 되었을 때 실행이 중단되고 다시 반복문이 지속됐기 때문에  i가 5일때는 출력이 되지 않았다.

<br>

### 반복문의 중첩

- 반복문 안에 다시 반복문이 나타날 수 있다.

- 예시 (0부터 99까지 출력)

  - ```javascript
    // 0부터 9까지 변수 i에 순차적으로 값을 할당        
    for(var i = 0; i < 10; i++){
        // 0부터 9까지의 변수를 j의 값에 순차적으로 할당
        for(var j = 0; j < 10; j++){    
            // i와 j의 값을 더한 후에 출력
            // String은 숫자인 i와 j의 데이터 타입을 문자로 형태를 변환하는 명령이다. 
            // String()을 제거하고 실행해보면 의미가 좀 더 분명하게 드러날 것이다.
            document.write(String(i)+String(j)+'<br />');
        }
    }
    ```

    - String(i), String(j)는 숫자를 문자로 형변환 한 것이다.

<br>

## 함수

### 함수란

함수

> 하나의 로직을 재실행 할 수 있도록 하는 것으로 코드의 **재사용성**을 높인다.

<br>

#### 함수의 형식

- ```javascript
  function 함수명( [인자...[,인자]] ){
     코드
     return 반환값
  }
  ```

<br>

#### 함수의 정의와 호출

- 함수는 function 뒤에 함수의 이름이 오고, 소괄호가 따라온다.

- 소괄호에 인자라는 값이 차례대로 들어오는데, 이 값은 함수를 호출할 때 함수의 로직으로 전달될 변수이다.

- 인자는 생략할 수 있으며, 함수를 호출했을 때 실행하게 될 부분이 중괄호 안쪽에 온다.

- 코드 (0부터 9까지 출력)

  - ```javascript
    function numbering(){
        i = 0;
        while(i < 10){
            document.write(i);
            i += 1;
        }   
    }
    numbering(); //함수 호출
    
    //결과: 0123456789
    ```

<br>

### 함수의 효용

- 함수가 없다면? 

  - 0 부터 9까지 출력하는 코드를 5번 하라고 하면 이걸 반복으로 작성해야함.

    - ```javascript
      var i = 0;
      while(i < 10){
          document.write(i);
          i += 1;
      }
       
      var i = 0;
      while(i < 10){
          document.write(i);
          i += 1;
      }
       
      var i = 0;
      while(i < 10){
          document.write(i);
          i += 1;
      }
       
      var i = 0;
      while(i < 10){
          document.write(i);
          i += 1;
      }
       
      var i = 0;
      while(i < 10){
          document.write(i);
          i += 1;
      }
      ```

  - 이런 상황을 막기 위해 함수를 사용한다.

    - ```javascript
      function numbering(){
          var i = 0;
          while(i < 10){
              document.write(i);
              i += 1;
          }   
      }
       
      numbering();
      numbering();
      numbering();
      numbering();
      numbering();
      ```

- 함수의 장점
  - **재사용성**!: 이 함수를 여러곳에서 사용하고 있는데, 만약 함수를 수정해야 한다면, 그 함수의 내용을 수정, 변경, 개선만 하면 모든 곳에서 변경된 함수를 사용할 수 있다.
  - **유지보수**에 용이하다. (Easy maintenance)
  - **가독성**



<br>

### 함수의 입력과 출력

- 입력된 값을 출력하는 것이 함수의 기본적인 역할이다.
- 함수라는 상자 안에다가 값을 주고, 그 값에 따라 가공된 값이 나온다.



#### 함수의 출력

##### return

- return이 나오면 수행하는 기능

  - 함수를 종료시킨다
  - return 값을 함수 바깥쪽으로 뱉어낸다.

- 코드

  - ```javascript
    function get_member1(){
        return 'egoing';
    }
     
    function get_member2(){
        return 'k8805';
    }
     
    alert(get_member1()); //egoing
    alert(get_member2()); //k8805
    ```

  - ```javascript
    function get_member(){
        return 'egoing';
        return 'k8805';
        return 'sorialgi';
    }
    alert(get_member()); //egoing
    ```

    - egoing만 출력된다.
    - return이라고 쓰여있기 때문에 거기서 함수가 종료된다.

  

#### 함수의 입력

##### 인자란?

- 함수의 괄호 안에 인자가 들어간다. 즉, **함수로 유입되는 입력 값을 의미한다.**

- 어떤 값을 인자로 전달하느냐에 따라 함수가 반환하는 값이나 메소드의 동작방법을 다르게 할 수 있다.

- 코드

  - ```javascript
    function get_argument(arg){
        return arg * 1000;
    }
     
    alert(get_argument(1)); //1000
    alert(get_argument(2)); //2000
    ```

    - arg가 인자이다.

##### 매개변수

- 위의 예제에서 arg가 매개변수 (parameter)이다.



##### 복수의 인자

- 여러개의 입력 값을 받고 싶은 경우

- 예시

  - ```javascript
    function get_arguments(arg1, arg2){ //매개변수가 2개
        return arg1 + arg2
    }
     
    //인자도 2개 
    alert(get_arguments(10, 20)); //30
    alert(get_arguments(20, 30)); //50
    ```

<br>

### 다양한 정의 방법

- **생성자를 이용한 함수 정의** (함수 표현식)

  - ```javascript
    var numbering = function (){
        i = 0;
        while(i < 10){
            document.write(i);
            i += 1;
        }   
    }
    numbering();
    ```

    - 함수의 정의 부분이 좌항에 있는 numbering이라는 변수에 대입된 것이다.
    - numbering이라는 변수가 함수를 갖게된 것이다!

  - 함수 선언문

    - ```javascript
      function numbering(){
          var i = 0;
          while(i < 10){
              document.write(i);
              i += 1;
          }   
      }
      ```

  - **익명함수**

    - ```javascript
       (function (){
           i = 0;
           while (i<10){
               document.write(i);
               i += 1;
           }
       }) ;
      ```

<br>

## 배열

### 배열의 문법

#### 배열

- 배열(array)이란 연관된 데이터를 모아서 통으로 관리하기 위해서 사용하는 데이터 타입이다.
- 변수가 하나의 데이터를 저장하기 위한 것이라면, 배열은 여러 개의 데이터를 하나의 변수에 저장하기 위한 것이다.

#### 배열의 생성

- 대괄호([])는 배열을 만드는 기호다. 대괄호 안에 데이터를 콤마(,)로 구분해서 나열하면 배열이 된다.

- 변수에 회원정보를 담아보기!

  - ```javscript
    var member = ['egoing', 'k8805', 'sorialgi']
    ```

- 각각의 데이터를 원소(Element)이라고 부른다.

  - ```javascript
    var member = ['egoing', 'k8805', 'sorialgi']
    alert(member[0]); //egoing
    alert(member[1]); //k8805
    alert(member[2]); //sorialgi
    ```

  - 0, 1, 2는 색인 (index)라고 부른다.



### 배열의 효용

#### 배열이 없다면?

- 예시

  - ```javascript
    function get_member1(){
        return 'egoing';
    }
    document.write(get_member1());
     
    function get_member2(){
        return 'k8805';
    }
    document.write(get_member2());
     
     
    function get_member3(){
        return 'sorialgi'
    }
    document.write(get_member3());
    ```

- 하나의 함수는 하나의 값만을 반환할 수 있기 때문에 위와 같이 각각의 회원정보를 반환하는 함수를 만들어야 한다.

- 그러나 배열을 이용한다면?

  - ```javascript
    function get_members(){
        return ['egoing', 'k8805', 'sorialgi'];
    }
    var members = get_members();
    document.write(members[0]);
    document.write(members[1]);
    document.write(members[2]);
    ```

    

### 배열과 반복문의 조우

#### 배열의 사용

- 배열의 진가는 반복문과 결합했을 때, 나타난다. 반복문으로 리스트에 담긴 정보를 하나씩 꺼내서 처리할 수 있기 때문이다.

- 예제

  - ```javascript
    function get_members(){
        return ['egoing', 'k8805', 'sorialgi'];
    }
    members = get_members();
    // members.length는 배열에 담긴 값의 숫자를 알려준다. 
    for(i = 0; i < members.length; i++){
        // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
        document.write(members[i].toUpperCase());   
        document.write('<br />');
    }
    
    /* 결과
    egoing
    k8805
    sorialgi
    */
    ```

  - ```javascript
    var a = "egoing"
    a.toUpperCase(); //EGOING
    
    var a = ['egoing', 'k8805', 'sorialgi'];
    alert(a.length); //3 
    ```

    - a.length: a라고 하는 배열의 값이 몇개인가?



### 데이터의 추가

#### 배열의 제어

- 배열은 복수의 데이터를 효율적으로 관리, 전달하기 위한 목적으로 고안된 데이터 타입이다.
- 따라서, 데이터의 추가/수정/삭제와 같은 일을 편리하게 할 수 있도록 돕는 다양한 기능을 가지고 있다.

##### 배열의 크기

- 배열의 크기를 알아내는 것은 변수.length를 사용하면 된다.

- ```javscript
  var arr = [1,2,3,4,5];
  alert(arr.length); //5
  ```

  

##### 배열의 추가

- 배열에 어떤 데이터를 추가한다

- **push**는 인자로 전달된 값을 배열에 추가하는 명령이다.

  - 예시

    - ```javascript
      var li = ['a', 'b', 'c', 'd', 'e'];
      li.push('f');
      alert(li); //['a', 'b', 'c', 'd', 'e', 'f']
      ```

- Concat

  - 복수의 원소를 배열에 추가하는 방법이다.

  - **concat**은 인자로 전달된 값을 추가하는 명령어다.

  - 예시

    - ```javascript
      var li = ['a', 'b', 'c', 'd', 'e'];
      li = li.concat(['f', 'g']);
      alert(li); ////['a', 'b', 'c', 'd', 'e', 'f', 'g']
      ```

- unshift

  - 배열의 시작점에 원소를 추가하는 방법

  - **unshift**는 인자로 전달한 값을 배열의 첫 번째 원소로 추가하고 배열의 기존 값들의 색인을 1씩 증가시킨다

  - 예시

    - ```javascript
      var li = ['a', 'b', 'c', 'd', 'e'];
      li.unshift('z');
      alert(li); //['z', 'a', 'b', 'c', 'd', 'e']
      ```

- splice
  - 특정 인덱스에 원소를 추가하고 싶을 때나 배열의 특정 구간을 추출할 때 사용

  - **splice**는 첫 번째 인자에 해당하는 원소부터 두 번째 인자에 해당하는 원소의 숫자만큼의 값을 배열로부터 제거한 후에 리턴한다.

  - splice(index, howmany, element1, ... ,elementN);

    - index: 배열에 추가할 특정 배열의 위치를 가르키는 index
    - howmany: index에서부터 제거될 원소들의 수 혹은 index부터 index + howmany에 해당하는 원소들은 삭제된다.
      - 이 값이 0 이면 어떠한 원소도 삭제되지 않는다.
    - element1 ... elementN: index와 index+howmany 사이에 추가된 값

  - 예시

    - ```javascript
      var li = ['a', 'b', 'c', 'd', 'e'];
      li.splice(2, 0, 'B');
      alert(li); //['a', 'b', 'B', 'c', 'd', 'e']
      ```

    - ```javascript
      var a = ["a", "b", "c"]
      a.splice(1, 1, 'x', 'y');
      alert(a) //["a", "x", "y", "C"]
      ```

<br>

##### 제거

- **shift**

  - 배열의 첫번째 원소를 제거하는 방법이다.

  - 예시

    - ```javascript
      var li = ['a', 'b', 'c', 'd', 'e'];
      li.shift();
      alert(li); // ['b', 'c', 'd', 'e']
      ```

- **pop**

  - 배열 끝점의 원소를 배열에서 제거한다.

  - 예시

    - ```javascript
      var li = ['a', 'b', 'c', 'd', 'e'];
      li.pop();
      alert(li); //['a', 'b', 'c', 'd']
      ```

<br>

##### 정렬

- **sort**

  - array.sort(sortfunc)

  - 예시

    - ```javascript
      var li = ['c', 'e', 'a', 'b', 'd'];
      li.sort();
      alert(li); //['a', 'b', 'c', 'd', 'e'];
      ```

  - 역순 정렬 예시

    - ```javascript
      var li = ['c', 'e', 'a', 'b', 'd'];
      li.reverse();
      alert(li); //['e','d','c','b','a']
      ```

  - 다양한 방법으로 정렬하기 예시

    - ```javascript
      var numbers = [9,8,7,6,5,4,3,2,1];
      alert(numbers.sort()); // array, [1,2,3,4,5,6,7,8,9]
      alert(numbers); // array, [1,2,3,4,5,6,7,8,9], 원본을 변경한다. 
      alert(numbers.sort() === numbers); // boolean, true, 원본과 반환값이 같다.
       
      var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
      //array, [1,10,2,20,3,4,5,6,7,8,9], 암시적으로 원소를 문자로 형변환 하기 때문에 10이 1뒤에 온다.
      alert(numbers.sort()); 
      ```

    - ```javscript
      function sortNumber(a,b){
          // 비교 대상인 a와 b가 인자로 전달된다.
          //alert('a :'+a+', b:'+b);
          // a에서 b를 뺀 결과가 음수면 a가 b보다 작고, 0이면 같다.
          // sort메소드는 return 값이 음수,양수,0인지에 따라서 순서를 정한다.
          return a-b;
      }
      var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
      alert(numbers.sort(sortNumber)); // array, [1,2,3,4,5,6,7,8,9,10,20]
      ```

    - ```javascript
      function sortNumber(a,b){
          // 위의 예제와 비교해서 a와 b의 순서를 바꾸면 정렬순서가 반대가 된다.
          return b-a;
      }
      var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
      alert(numbers.sort(sortNumber)); // array, [20,10,9,8,7,6,5,4,3,2,1]
      ```

      

<br>

## 객체

### 객체 (Object)

- 데이터가 추가되면 배열 전체에서 중복되지 않는 인덱스가 자동으로 만들어져서 추가된 데이터에 대한 식별자가 된다.
- 이 인덱스를 이용해서 데이터를 가져오게 되는 것이다. 
- 만약 인덱스로 문자를 사용하고 싶다면 객체 (dictionary)를 사용해야 한다.
- 다른 언어에서는 연관 배열(associative array) 또는 맵 (map), 딕셔너리(dictionary) 라는 데이터 타입이 객체에 해당한다.

#### 배열과 객체의 차이

- 객체: index의 값으로 숫자를 쓰는 것이 아니라, 문자열도 쓸 수 있다.

#### 객체의 생성

- 중괄호로 시작해 중괄호로 끝난다.

- **<u>객체 리터럴</u>**을 사용해 객체를 만드는 방법

  - ```javascript
    var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
    ```

- **배열 요소를 할당**해 객체를 만드는 다른 방법

  - ```javascript
    var grades = {}; //먼저 비어있는 객체를 만든다.
    //egoing은 key가 되고, 10은 value가 된다.
    grades['egoing'] = 10;
    grades['k8805'] = 6;
    grades['sorialgi'] = 80;
    ```

- 객체를 만드는 다른 방법: **<u>생성자 new 사용</u>** (**미리 정의되어 제공하는 객체 생성**)

  - ```javascript
    var grades = new Object();
    grades['egoing'] = 10;
    grades['k8805'] = 6;
    grades['sorialgi'] = 80;
    ```

#### 객체 속성 접근 방법

- key값을 사용한다.

- 예시

  - ```javascript
    var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
    alert(grades['sorialgi']);//80
    alert(grades['k88'+'05']); //6
    alert(grades.k8805) //6
    alert(grades.'k88'+'05') //syntax error
    ```



### 객체와 반복문의 조우

- 객체에 저장된 데이터를 기준으로 반복 작업을 하는 방법이다.

  - ```javascript
    var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
    for(key in grades) {
        document.write("key : "+key+" value : "+grades[key]+"<br />");
    }
    /* 결과
    key :   egoing value : 10
    key :   k8805 value : 6
    key :   sorialgi value : 80
    
    */
    ```

- 예시

  - ```javascript
    var arr=['a','b','c']
    for (var i = 0; i<arr.length; i++){
        console.log(arr[i])
    }
    ```

##### 배열 vs 객체

- **배열은 저장된 데이터들이 순서를 가지고 있다.**
  - 먼저 들어간 것과 나중에 들어간 것이 내부적으로 기록되고 있기 때문에, 추가된 순서에 따라 꺼낼때 그 요소가 나와진다.
- **객체는 순서들을 가지고 있지 않다.**
  - key와 value로 접근한다.
  - **객체에는 객체를 담을수도 있고, 함수도 담을 수 있다.**

<br>

### 객체지향 프로그래밍

- 코드

  - ```javascript
    var grades = {
        'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80}
    }
    alert(grades['list']['egoing']) //10
    ```

  - ```javascript
    var grades = {
        'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
        'show' : function(){
            alert('Hello World');
            }
        }
    };
    grades['show'](); //함수를 호출하는 것이기 때문에 grades['show']뒤에 ()가 붙는 것
    //Hello World
    ```

- 'show': function{}: **객체 메소드라고 한다**

- **this 키워드**

  - 약속되어 있는 변수로, **함수가 속해있는 객체를 가리키는 변수**를 말한다.

  - 예시

    - ```javascript
      var grades = {
          'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
          'show' : function(){
              console.log(this.list);
          }
      };
      grades['show'](); //Object (egoing:10, k8805: 6, sorialgi: 80)
      ```

    - ```javascript
      var grades = {
          'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
          'show' : function(){
              for(var name in this.list){
                  document.write(name+':'+this.list[name]+"<br />");
              }
          }
      };
      grades.show();
      ```

- 하나의 객체가 있고, 그 객체 안에 어떠한 데이터가 있고, 그리고 그 데이터를 사용하는 함수가 있다.

- 그리고 그 함수를 사용할 때는 그 객체의 이름과 함수를 사용하여 소속되어 있는 함수를 처리할 수 있다.

- **객체지향프로그래밍**

  - 서로 연관되어있는 데이터와 어떠한 처리 (함수)를 하나의 그릇 안에 모아서 그룹핑 해서 모아놓은 것이 객체지향프로그래밍이라고 한다.
    - grades안에 list와 show가 있다.

