# Python

## 람다 표현식

### lambda()

- `lambda()`란 런타임에 생성해서 사용할 수 있는 익명 함수입니다.

- 함수가 생성된 곳에서 필요하며, 간단한 기능을 일반적인 함수와 같이 정의해두고 쓰는 것이 아니고, 필요한 곳에서 즉시 사용하고 버릴 수 있습니다.

- `lambda` 에 매개변수를 지정하고, `:` (콜론) 뒤에 반환값으로 사용할 식을 지정합니다.

  - ```python
    add_five = lambda x: x + 5
    add_five(1) # 6
    ```

- `lambda` 표현식은 변수에 할당하지 않고, 그 자체를 호출할 수 있습니다.

  - ```python
    (lambda x: x + 5)(1) # 11
    ```

- `lambda` 표현식 안에는 변수를 따로 만들 수 없습니다. 다만, 람다 표현식 바깥에 정의되어 있는 변수는 사용이 가능합니다.

  - ```python
    y = 7
    (lambda x: x + y)(1) # 8
    ```

#### lambda() 표현식을 사용하는 이유

- 함수의 인수 부분에서 간단하게 함수를 만들기 위해서 입니다.

### 람다를 이용하는 함수들 

#### map()

- `lambda` 와 `map` 을 같이 사용한다면, 다른 함수의 인수로 넣을 때 편리하며, 코드를 더 간결하게 짤 수 있습니다.

- 기본적으로 `map()` 함수는 두 개의 인수를 가지는 함수입니다.

  - ```python
    map(function, iterable, ...)
    ```

  - 첫 번째 인자 function는 함수의 이름이며, 두 번째 인자인 iterable은 한 번에 하나의 멤버를 반환할 수 있는 객체입니다. (list, str, tuple)

- 예시

  - ```python
    list(map(lambda x: x+10, [1, 2, 3])) # [11, 12, 13]
    ```

  - ```python
    a = [1, 2, 3, 4]
    b = [17, 12, 11, 10]
    list(map(lambda x, y: x + y, a, b)) # [18, 14, 14, 14]
    ```

    

#### reduce()

- `reduce()`: 두 개의 필수 인자와 하나의 옵션 인자를 가지는 데, function을 사용해서 iterable을 하나의 값으로 줄입니다.

  - ```python
    from functools import reduce
    reduce(function, iterable[, initializer])
    ```

  - iterable은 순서형 자료로 문자열, 리스트, 튜플의 원소들을 누적으로 함수에 적용시킵니다.

- 예시

  - ```python
    from functools import reduce
    reduce(lambda x, y: x + y, [1, 2, 3, 4, 5]) #15
    ```

  - ```ㅔㅛ쇄ㅜ
    reduce(lambda x, y, y + x, 'abcde') # 'ebcda'
    ```

    

#### filter()

- `filter()` 함수 역시 두 개의 인자를 가집니다.

  - ```python
    filter(function, iterable, ...)
    ```

  - filter에 인자로 사용되는 function은 처리되는 각각의 요소에 대해 Boolean 갑을 반환합니다. 

  - True를 반환하면 그 요소는 남게 되고, False를 반환하면 그 요소는 제거됩니다.

- 예시

  - ```python
    arr = [2, 18, 9, 22, 17, 24, 8, 12, 27]
    list(filter(lambda x: x % 3 == 0, arr)) # [18, 9, 24, 12, 27]
    ```

  - ```python
    list(filter(lambda x: x<5, range(10))) # [0, 1, 2, 3, 4]
    ```



### Lambda를 이용한 정렬 (key 사용하기)

- 파이썬 문제를 풀다보면, 하나의 조건이나 여러 조건으로 sorting이 필요한 경우가 있습니다.
- 일반적으로 오름차순 정렬, 내림차순 정렬은 `sorted()`나 `.sort()`를 사용합니다.
- `lambda()`를 이용한다면 하나의 조건 뿐만 아니라, 다중 조건, 그리고 2차원 배열에서도 사용이 가능합니다.



#### 2차원 배열/ List 안의 tuple 정렬 

- ```python
  a = [(1, 2), (0, 1), (5, 1), (5, 2), (3, 0)]
  
  b = sorted(a) # [(0, 1), (1, 2), (3, 0), (5, 1), (5, 2)]
  
  # key 인자에 함수를 넘겨주면 해당 함수의 반환값을 비교하여 순서대로 정렬한다.
  c = sorted(a, key = lambda x: x[0]) #[(0, 1), (1, 2), (3, 0), (5, 1), (5, 2)]
  
  c = sorted(a, key = lambda x: x[1]) #[(3, 0), (0, 1), (5, 1), (1, 2), (5, 2)]
  ```



#### 다중조건

- ```python
  e = [(1, 3), (0, 3), (1, 4), (1, 5), (0, 1), (2, 4)]
  
  # 아이템 첫 번째 인자를 기준으로 오름차순으로 먼저 정렬하고, 
  # 그리고 그 안에서 다음 두 번째 인자를 기준으로 내림차순으로 정렬하게 하려면, 다음과 같이 할 수 있다.
  f = sorted(e, key = lambda x: (x[0], -x[1])) # [(0, 3), (0, 1), (1, 5), (1, 4), (1, 3), (2, 4)]
  ```

- 내림차순으로 정렬은 앞에 `-`를 붙인다. 





## Counter

### dictionary를 이용한 카운팅

- 아래 코드는 어떤 숫자가 주어졌을 때, 그 숫자가 몇 개 있는지 세어주는 코드입니다. 
- dictionary에 해당 숫자가 키로 존재한다면 1을 추가해주고, 그렇지 않으면 그 키를 추가하면서, value로 1로 세팅합니다.

- ```python
  diction = {}
  for i in nums2:
      if i not in diction:
          diction[i] = 1
      else:
          diction[i] += 1
  ```

  

### collections.Counter를 이용한 카운팅

- `from collections import Counter`를 통해 import 합니다.

- ```python
  from collections import Counter
  Counter('hello world') # Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})
  ```



### Counter 메서드

> Counter의 method에는 3가지의 method가 존재합니다.

#### elements()

- 요소를 반복하는 수 만큼, 카운팅 수 만큼 반복해서 출력합니다.

- ```python
  c = Counter(a=4, b=2, c=0, d=-2)
  list(c.elements()) # ['a', 'a', 'a', 'a', 'b', 'b']
  ```

  

#### most_common()

- 요소와 카운팅 수를 key-value pair로 만들어 빈도 수가 높은 pair부터 낮은 pair까지 정렬시켜 리스트를 return 합니다.

- ```python
  Counter('abracadabra').most_common(3) #[('a', 5), ('r', 2), ('b', 2)]
  ```

  

#### subtract()

- 요소들을 iterable로 부터 뺍니다.

- ```python
  c = Counter(a=4, b=2, c=0, d=-2)
  d = Counter(a=1, b=2, c=3, d=4)
  c.subtract(d)
  c #Counter({'a': 3, 'b': 0, 'c': -3, 'd': -6})
  ```

  

