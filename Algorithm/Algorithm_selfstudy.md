## 알고리즘을 배우기 전에 알아야 할 다섯 가지

### 메모리와 주소의 관계

- 메모리의 해당 데이터에 직접 접근하기보다는 '메모리 주소'를 통해 접근하는 것이 연산 속도가 빠르다.
- 컴퓨터에서는 바이트, 즉 8비트 단위로 데이터를 처리한다.



### 자료형과 배열

#### 프로그래밍 언어에서 별도의 자료형을 제공하는 이유 

- 메모리 공간을 효율적으로 이용할 수 있고,
- 메모리 읽기와 쓰기 처리 속도가 향상되며,
- 메모리를 효율적으로 사용하는 자료구조를 구축할 수 있기 때문이다.
  - 스택, 큐, 배열, 리스트 등



### 배열의 응용

다차원 배열

- 각 학생의 과목별 점수 Grade[3] [5] [2] : 3학년, 5번, 과목: 영어 & 수학



### 포인터

메모리의 주소가 포인터이다.

포인터는 메모리 주소를 저장하는 공간으로, 메모리 value 가 아닌 그 '주소 값'이 저장된다.



### 배열과 포인터 사용

배열에는 단점이 있다.

- 자료의 삽입과 삭제에 비효율적이며, Insert, Delete시 모든 요소를 이동시켜야 하며 연산 작업의 수가 많다.

- 또한 크기를 바꾸기 힘들며, 메모리의 재사용이 불가하다.

  

:heavy_exclamation_mark: 그러나 배열 이름을 포인터에 할당한다면 배열의 단점을 메꿀 수 있다. (python에서는 포인터를 다룰 일이 없다)



# 기본적인 자료구조

## 링크드 리스트

### Linked LIst

- 새로운 노드를 삽입하거나 삭제하기가 간편하다.
- 노드란?
  - 각 연결된 element를 의미한다.
  - 처음을 가르키는 head node가 존재하며, 마지막 노드 역시 end node/ tail node라고 부른다.
- 링크란?
  - 노드와 노드를 연결시켜주는 것

##### 노드 삽입 과정

1. 새로운 노드를 생성한다.
2. 새로운 노드가 삽입될 위치를 검색한다.
3. 새로운 노드의 Next를 새로운 노드가 삽입될 다음 노드로 연결한다.
4. 새로운 노드가 삽일될 위치의 이전 노드의 Next가 새로운 노드를 가리키도록 한다.

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self, head = None):
        self.head = head
    def insert(self,index, position):
        current = self.head
        #새로운 노드가 삽입될 위치를 검색한다.
        for i in range(position-1):
            current = current.next
        #새로운 노드의 Next를 새로운 노드가 삽입될 다음 노드로 연결한다.
        index.next = current.next
        #새로운 노드가 삽입될 위치의 이전 노드의 Next가 새로운 노드를 가리키도록 한다.
        current.next = item

n1 = Node(1)
n2 = Node(2)
n3 = Node(3)

l = LinkedList(n1)
l.insert(n4, 3)
```



##### 링크드리스트 삭제하기

1. 이전 노드를 가리킬 포인터와 삭제할 노드를 가리킬 포인터를 선언한다.
2. 삭제할 노드를 검색한다.
3. 이전 노드가 삭제할 노드를 건너뛰고 다음 노드를 가리키도록 링크를 새로 설정한다.

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self, head = None):
        self.head = head
    def insert(self, item, position):
        current = self.head
        #새로운 노드가 삽입될 위치를 검색한다.
        for i in range(position-1):
            current = current.next
        #새로운 노드의 Next를 새로운 노드가 삽입될 다음 노드로 연결한다.
        item.next = current.next
        #새로운 노드가 삽입될 위치의 이전 노드의 Next가 새로운 노드를 가리키도록 한다.
        current.next = item
    def delete(self, item):
        current = self.head
        #삭제할 노드를 검색한다.
        if current.value == item.value:
            self.head = current.next
        else:
            while current.next:
                if current.value == value:
                    current.next = current.next.next
                current = current.next
    #값 출력하기
    def printlist(self):
        current = self.head
        while current:
            print(current.value)
            current = current.next
    
```



#### 이중 링크드리스트

- 노드 각각이 양방향으로 연결되어 있다.
- 원형 링크드 리스트의 경우, 각 노드의 끝이 서로 연결된 형태로 되어 있다.





### 스택의 개념과 알고리즘

#### 스택의 개념

- 입력과 출력을 한 방향으로 제한한 구조
- 바닥부터 차곡 차곡 쌓는 개념이다. (책을 차곡차곡 쌓는 것과 같이)
  - 하나씩 쌓아올리는 과정이 'push'
  - 가장 위에 놓여있는 것을 빼는 과정이 'pop'
- LIFO (Last In First Out)



#### 스택의 구현

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
class LinkedList:
    def __init__(self, head = None):
        self.head = head
    
    #insert_front()
    def push(self, item):
      	new_node = Node(item)
        new_node.next = self.head
        self.head = new_node

    def pop(self):
        deleted = self.head.value
        if self.head:
            self.head = self.head.next
            return deleted
          
```



### 큐의 개념과 알고리즘

#### 큐의 개념

처음 데이터를 처음 사용하는 방식

- Put(): 일렬로 줄을 서는 방식으로, 도착하는 차례대로 데이터를 저장한다.
- Get(): 처음 저장된 데이터부터 차례로 사용한다.

FIFO (First In First Out)



#### 큐의 구현

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        
class linkedlist:
    def __init__(self):
        self.head = None
        self.tail = None
    def enqueue(self, data):
        if self.head == None:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = self.tail.next
    def dequeue(self):
        take_out = self.head.value
        self.head = self.head.next
        if self.head == None:
            self.tail = None
        return take_out
```

