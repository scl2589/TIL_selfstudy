# 프로그래머스 문제 풀기

### Intro

- 워낙 기초만 배우고 문제를 풀고 있기 때문에 한 번에 풀지 못했거나, 아직 헷갈리는 부분이 있는 문제만 정리해두었습니다.



### 문제 설명

`ANIMAL_OUTS` 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. `ANIMAL_OUTS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `NAME`, `SEX_UPON_OUTCOME`는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다.

| NAME             | TYPE       | NULLABLE |
| ---------------- | ---------- | -------- |
| ANIMAL_ID        | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE      | VARCHAR(N) | FALSE    |
| DATETIME         | DATETIME   | FALSE    |
| NAME             | VARCHAR(N) | TRUE     |
| SEX_UPON_OUTCOME | VARCHAR(N) | FALSE    |



### 입양 시각 구하기(1)

#### 문제

보호소에서는 몇 시에 입양이 가장 활발하게 일어나는지 알아보려 합니다. 09:00부터 19:59까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요. 이때 결과는 시간대 순으로 정렬해야 합니다.

#### 예시

SQL문을 실행하면 다음과 같이 나와야 합니다.

| HOUR | COUNT |
| ---- | ----- |
| 9    | 1     |
| 10   | 2     |
| 11   | 13    |
| 12   | 10    |
| 13   | 14    |
| 14   | 9     |
| 15   | 7     |
| 16   | 10    |
| 17   | 12    |
| 18   | 16    |
| 19   | 2     |



#### 코드

- ```SQL
  -- 코드를 입력하세요 
  SELECT HOUR(DATETIME) as HOUR, COUNT(DATETIME) AS COUNT
  FROM ANIMAL_OUTS
  WHERE HOUR(DATETIME) >= 9 AND HOUR(DATETIME) < 20
  GROUP BY HOUR(DATETIME)
  
  ```



### 입양 시각 구하기(2)

#### 문제

보호소에서는 몇 시에 입양이 가장 활발하게 일어나는지 알아보려 합니다. 0시부터 23시까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요. 이때 결과는 시간대 순으로 정렬해야 합니다.

#### 예시

SQL문을 실행하면 다음과 같이 나와야 합니다.

| HOUR | COUNT |
| ---- | ----- |
| 0    | 0     |
| 1    | 0     |
| 2    | 0     |
| 3    | 0     |
| 4    | 0     |
| 5    | 0     |
| 6    | 0     |
| 7    | 3     |
| 8    | 1     |
| 9    | 1     |
| 10   | 2     |
| 11   | 13    |
| 12   | 10    |
| 13   | 14    |
| 14   | 9     |
| 15   | 7     |
| 16   | 10    |
| 17   | 12    |
| 18   | 16    |
| 19   | 2     |
| 20   | 0     |
| 21   | 0     |
| 22   | 0     |
| 23   | 0     |

#### 코드

- ```sql
  -- 코드를 입력하세요
  SET @hour = -1;
  SELECT (@hour := @hour + 1 )AS HOUR,
  (SELECT COUNT(*) FROM ANIMAL_OUTS WHERE HOUR(`datetime`) = @hour) AS COUNT
  FROM ANIMAL_OUTS
  WHERE @hour < 23
  ```

#### 변수

- 변수에 값을 할당할 때는 다음과 같은 방법을 사용합니다.
  - `SET @변수이름 = 대입값`
  - `SET @변수이름 := 대입값`
  - `SELECT @변수이름 :=대입값`
    - SELECT로 변수를 선언하고, 값을 대입할 때는 `:=`를 사용합니다.



### 루시와 엘라 찾기

#### 문제

동물 보호소에 들어온 동물 중 이름이 Lucy, Ella, Pickle, Rogan, Sabrina, Mitty인 동물의 아이디와 이름, 성별 및 중성화 여부를 조회하는 SQL 문을 작성해주세요.



#### 예시

이때 결과는 아이디 순으로 조회해주세요. 예를 들어 `ANIMAL_INS` 테이블이 다음과 같다면

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | INTAKE_CONDITION | NAME  | SEX_UPON_INTAKE |
| --------- | ----------- | ------------------- | ---------------- | ----- | --------------- |
| A373219   | Cat         | 2014-07-29 11:43:00 | Normal           | Ella  | Spayed Female   |
| A377750   | Dog         | 2017-10-25 17:17:00 | Normal           | Lucy  | Spayed Female   |
| A353259   | Dog         | 2016-05-08 12:57:00 | Injured          | Bj    | Neutered Male   |
| A354540   | Cat         | 2014-12-11 11:48:00 | Normal           | Tux   | Neutered Male   |
| A354597   | Cat         | 2014-05-02 12:16:00 | Normal           | Ariel | Spayed Female   |

SQL문을 실행하면 다음과 같이 나와야 합니다.

| ANIMAL_ID | NAME | SEX_UPON_INTAKE |
| --------- | ---- | --------------- |
| A373219   | Ella | Spayed Female   |
| A377750   | Lucy | Spayed Female   |



#### 코드

> 내 코드

- ```SQL
  -- 코드를 입력하세요
  SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE FROM ANIMAL_INS
  WHERE NAME = 'Lucy' OR NAME = 'Ella' OR NAME = 'Pickle' OR NAME='Rogan' OR NAME = 'Sabrina' OR NAME = 'Mitty'
  ORDER BY ANIMAL_ID
  ```



> 다른 사람 코드

- ```SQL
  -- 코드를 입력하세요
  SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE FROM ANIMAL_INS
  WHERE NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
  ORDER BY ANIMAL_ID
  ```

  

### 이름에 el이 들어가는 동물 찾기

#### 문제 

보호소에 돌아가신 할머니가 기르던 개를 찾는 사람이 찾아왔습니다. 이 사람이 말하길 할머니가 기르던 개는 이름에 'el'이 들어간다고 합니다. 동물 보호소에 들어온 동물 이름 중, 이름에 EL이 들어가는 개의 아이디와 이름을 조회하는 SQL문을 작성해주세요. 이때 결과는 이름 순으로 조회해주세요. 단, 이름의 대소문자는 구분하지 않습니다.

#### 예시

예를 들어 `ANIMAL_INS` 테이블이 다음과 같다면

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | INTAKE_CONDITION | NAME         | SEX_UPON_INTAKE |
| --------- | ----------- | ------------------- | ---------------- | ------------ | --------------- |
| A355753   | Dog         | 2015-09-10 13:14:00 | Normal           | Elijah       | Neutered Male   |
| A352872   | Dog         | 2015-07-09 17:51:00 | Aged             | Peanutbutter | Neutered Male   |
| A353259   | Dog         | 2016-05-08 12:57:00 | Injured          | Bj           | Neutered Male   |
| A373219   | Cat         | 2014-07-29 11:43:00 | Normal           | Ella         | Spayed Female   |
| A382192   | Dog         | 2015-03-13 13:14:00 | Normal           | Maxwell 2    | Intact Male     |

- 이름에 'el'이 들어가는 동물은 Elijah, Ella, Maxwell 2입니다.
- 이 중, 개는 Elijah, Maxwell 2입니다.

따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.

| ANIMAL_ID | NAME      |
| --------- | --------- |
| A355753   | Elijah    |
| A382192   | Maxwell 2 |



#### 코드

- ```SQL
  -- 코드를 입력하세요
  SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
  WHERE LOWER(NAME) LIKE "%el%" AND ANIMAL_TYPE="Dog"
  ORDER BY NAME
  ```



### 중성화 여부 파악하기

#### 문제

보호소의 동물이 중성화되었는지 아닌지 파악하려 합니다. 중성화된 동물은 `SEX_UPON_INTAKE` 컬럼에 'Neutered' 또는 'Spayed'라는 단어가 들어있습니다. 동물의 아이디와 이름, 중성화 여부를 아이디 순으로 조회하는 SQL문을 작성해주세요. 이때 중성화가 되어있다면 'O', 아니라면 'X'라고 표시해주세요.



#### 예시

예를 들어 `ANIMAL_INS` 테이블이 다음과 같다면

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | INTAKE_CONDITION | NAME      | SEX_UPON_INTAKE |
| --------- | ----------- | ------------------- | ---------------- | --------- | --------------- |
| A355753   | Dog         | 2015-09-10 13:14:00 | Normal           | Elijah    | Neutered Male   |
| A373219   | Cat         | 2014-07-29 11:43:00 | Normal           | Ella      | Spayed Female   |
| A382192   | Dog         | 2015-03-13 13:14:00 | Normal           | Maxwell 2 | Intact Male     |

- 중성화한 동물: Elijah, Ella
- 중성화하지 않은 동물: Maxwell 2

따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.

| ANIMAL_ID | NAME      | 중성화 |
| --------- | --------- | ------ |
| A355753   | Elijah    | O      |
| A373219   | Ella      | O      |
| A382192   | Maxwell 2 | X      |

※ 컬럼 이름은 일치하지 않아도 됩니다.



#### 코드

- ```SQL
  -- 코드를 입력하세요
  SELECT ANIMAL_ID, NAME, CASE WHEN SEX_UPON_INTAKE LIKE '%Neutered%' OR SEX_UPON_INTAKE LIKE '%Spayed%' THEN 'O' 
  ELSE 'X'
  END AS '중성화'
  FROM ANIMAL_INS
  
  ```

  

#### CASE WHEN - ELSE - END



### DATETIME에서 DATE로 형 변환

#### 문제

`ANIMAL_INS` 테이블에 등록된 모든 레코드에 대해, 각 동물의 아이디와 이름, 들어온 날짜[1](https://programmers.co.kr/learn/courses/30/lessons/59414#fn1)를 조회하는 SQL문을 작성해주세요. 이때 결과는 아이디 순으로 조회해야 합니다.



#### 예시

예를 들어, `ANIMAL_INS` 테이블이 다음과 같다면

```
ANIMAL_INS
```

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | INTAKE_CONDITION | NAME   | SEX_UPON_INTAKE |
| --------- | ----------- | ------------------- | ---------------- | ------ | --------------- |
| A349996   | Cat         | 2018-01-22 14:32:00 | Normal           | Sugar  | Neutered Male   |
| A350276   | Cat         | 2017-08-13 13:50:00 | Normal           | Jewel  | Spayed Female   |
| A350375   | Cat         | 2017-03-06 15:01:00 | Normal           | Meo    | Neutered Male   |
| A352555   | Dog         | 2014-08-08 04:20:00 | Normal           | Harley | Spayed Female   |
| A352713   | Cat         | 2017-04-13 16:29:00 | Normal           | Gia    | Spayed Female   |

SQL문을 실행하면 다음과 같이 나와야 합니다.

| ANIMAL_ID | NAME   | 날짜       |
| --------- | ------ | ---------- |
| A349996   | Sugar  | 2018-01-22 |
| A350276   | Jewel  | 2017-08-13 |
| A350375   | Meo    | 2017-03-06 |
| A352555   | Harley | 2014-08-08 |
| A352713   | Gia    | 2017-04-13 |



#### 코드

- ```SQL
  -- 코드를 입력하세요
  SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, '%Y-%m-%d') AS 날짜
  FROM ANIMAL_INS
  ORDER BY ANIMAL_ID
  ```

  

####  설명

##### 날짜를 문자열로 변환할 때 (`DATE_FORMAT(날짜, 출력형식)`)

- ```SQL
  SELECT DATE_FORMAT('2019-09-16 20:23:12', '%Y/%M/%D') -- 2019/09/16 출력
  ```

##### 문자열을 날짜로 변환할 때 (`STR_TO_DATE(문자, 출력형식)`)

- ```SQL
  SELECT STR_TO_DATE('20180101', '%Y-%M-%D') -- 2018-01-01 출력
  ```

##### 날짜를 문자로 바꿀 때 (`CONVERT(포맷(길이), 날짜, 변환 형식)`)

- ```SQL
  SELECT CONVERT(VARCHAR, GETDATE(), 120) -- 2019-09-15 15:30:11
  --120은 YYYY-MM-DD HH24:MI:SS 형식이다.
  ```

##### 문자를 날짜로 바꿀 때 (`CONVERT(날짜 형식, 문자)`)

- ```SQL
  SELECT CONVERT(DATE, '2008-01-01') -- 2008-01-01 문자가 날짜로 변경된다
  SELECT CONVERT(DATETIME, '2018-01-01 15:14:13') -- 2018-01-01 15:14:13 문자가 날짜/시간으로 변경된다.
  ```





### 없어진 기록 찾기

#### 문제

`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

| NAME             | TYPE       | NULLABLE |
| ---------------- | ---------- | -------- |
| ANIMAL_ID        | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE      | VARCHAR(N) | FALSE    |
| DATETIME         | DATETIME   | FALSE    |
| INTAKE_CONDITION | VARCHAR(N) | FALSE    |
| NAME             | VARCHAR(N) | TRUE     |
| SEX_UPON_INTAKE  | VARCHAR(N) | FALSE    |

`ANIMAL_OUTS` 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. `ANIMAL_OUTS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `NAME`, `SEX_UPON_OUTCOME`는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. `ANIMAL_OUTS` 테이블의 `ANIMAL_ID`는 `ANIMAL_INS`의 `ANIMAL_ID`의 외래 키입니다.

| NAME             | TYPE       | NULLABLE |
| ---------------- | ---------- | -------- |
| ANIMAL_ID        | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE      | VARCHAR(N) | FALSE    |
| DATETIME         | DATETIME   | FALSE    |
| NAME             | VARCHAR(N) | TRUE     |
| SEX_UPON_OUTCOME | VARCHAR(N) | FALSE    |

천재지변으로 인해 일부 데이터가 유실되었습니다. 입양을 간 기록은 있는데, 보호소에 들어온 기록이 없는 동물의 ID와 이름을 ID 순으로 조회하는 SQL문을 작성해주세요.

#### 예시

예를 들어, `ANIMAL_INS` 테이블과 `ANIMAL_OUTS` 테이블이 다음과 같다면

```
ANIMAL_INS
```

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | INTAKE_CONDITION | NAME | SEX_UPON_INTAKE |
| --------- | ----------- | ------------------- | ---------------- | ---- | --------------- |
| A352713   | Cat         | 2017-04-13 16:29:00 | Normal           | Gia  | Spayed Female   |
| A350375   | Cat         | 2017-03-06 15:01:00 | Normal           | Meo  | Neutered Male   |

```
ANIMAL_OUTS
```

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | NAME  | SEX_UPON_OUTCOME |
| --------- | ----------- | ------------------- | ----- | ---------------- |
| A349733   | Dog         | 2017-09-27 19:09:00 | Allie | Spayed Female    |
| A352713   | Cat         | 2017-04-25 12:25:00 | Gia   | Spayed Female    |
| A349990   | Cat         | 2018-02-02 14:18:00 | Spice | Spayed Female    |

`ANIMAL_OUTS` 테이블에서

- Allie의 ID는 `ANIMAL_INS`에 없으므로, Allie의 데이터는 유실되었습니다.
- Gia의 ID는 `ANIMAL_INS`에 있으므로, Gia의 데이터는 유실되지 않았습니다.
- Spice의 ID는 `ANIMAL_INS`에 없으므로, Spice의 데이터는 유실되었습니다.

따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.

| ANIMAL_ID | NAME  |
| --------- | ----- |
| A349733   | Allie |
| A349990   | Spice |



#### 코드

- ```SQL
  -- 코드를 입력하세요
  SELECT b.animal_id, b.name
  FROM ANIMAL_INS a RIGHT JOIN ANIMAL_OUTS b ON a.animal_id = b.animal_id
  WHERE a.animal_id IS NULL
  ORDER BY b.animal_id
  ```





### 있었는데오 없었습니다

#### 문제

`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

| NAME             | TYPE       | NULLABLE |
| ---------------- | ---------- | -------- |
| ANIMAL_ID        | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE      | VARCHAR(N) | FALSE    |
| DATETIME         | DATETIME   | FALSE    |
| INTAKE_CONDITION | VARCHAR(N) | FALSE    |
| NAME             | VARCHAR(N) | TRUE     |
| SEX_UPON_INTAKE  | VARCHAR(N) | FALSE    |

`ANIMAL_OUTS` 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. `ANIMAL_OUTS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `NAME`, `SEX_UPON_OUTCOME`는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. `ANIMAL_OUTS` 테이블의 `ANIMAL_ID`는 `ANIMAL_INS`의 `ANIMAL_ID`의 외래 키입니다.

| NAME             | TYPE       | NULLABLE |
| ---------------- | ---------- | -------- |
| ANIMAL_ID        | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE      | VARCHAR(N) | FALSE    |
| DATETIME         | DATETIME   | FALSE    |
| NAME             | VARCHAR(N) | TRUE     |
| SEX_UPON_OUTCOME | VARCHAR(N) | FALSE    |

관리자의 실수로 일부 동물의 입양일이 잘못 입력되었습니다. 보호 시작일보다 입양일이 더 빠른 동물의 아이디와 이름을 조회하는 SQL문을 작성해주세요. 이때 결과는 보호 시작일이 빠른 순으로 조회해야합니다.

#### 예시

예를 들어, `ANIMAL_INS` 테이블과 `ANIMAL_OUTS` 테이블이 다음과 같다면

```
ANIMAL_INS
```

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | INTAKE_CONDITION | NAME     | SEX_UPON_INTAKE |
| --------- | ----------- | ------------------- | ---------------- | -------- | --------------- |
| A350276   | Cat         | 2017-08-13 13:50:00 | Normal           | Jewel    | Spayed Female   |
| A381217   | Dog         | 2017-07-08 09:41:00 | Sick             | Cherokee | Neutered Male   |

```
ANIMAL_OUTS
```

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | NAME     | SEX_UPON_OUTCOME |
| --------- | ----------- | ------------------- | -------- | ---------------- |
| A350276   | Cat         | 2018-01-28 17:51:00 | Jewel    | Spayed Female    |
| A381217   | Dog         | 2017-06-09 18:51:00 | Cherokee | Neutered Male    |

SQL문을 실행하면 다음과 같이 나와야 합니다.

| ANIMAL_ID | NAME     |
| --------- | -------- |
| A381217   | Cherokee |



#### 코드

- ```SQL
  -- 코드를 입력하세요
  SELECT a.animal_id, a.name
  FROM ANIMAL_INS a LEFT JOIN ANIMAL_OUTS b ON a.animal_id=b.animal_id
  WHERE a.DATETIME > b.DATETIME
  ORDER BY a.DATETIME
  ```



### 오랜 기간 보호한 동물(1)

#### 문제 설명

`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

| NAME             | TYPE       | NULLABLE |
| ---------------- | ---------- | -------- |
| ANIMAL_ID        | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE      | VARCHAR(N) | FALSE    |
| DATETIME         | DATETIME   | FALSE    |
| INTAKE_CONDITION | VARCHAR(N) | FALSE    |
| NAME             | VARCHAR(N) | TRUE     |
| SEX_UPON_INTAKE  | VARCHAR(N) | FALSE    |

`ANIMAL_OUTS` 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. `ANIMAL_OUTS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `NAME`, `SEX_UPON_OUTCOME`는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. `ANIMAL_OUTS` 테이블의 `ANIMAL_ID`는 `ANIMAL_INS`의 `ANIMAL_ID`의 외래 키입니다.

| NAME             | TYPE       | NULLABLE |
| ---------------- | ---------- | -------- |
| ANIMAL_ID        | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE      | VARCHAR(N) | FALSE    |
| DATETIME         | DATETIME   | FALSE    |
| NAME             | VARCHAR(N) | TRUE     |
| SEX_UPON_OUTCOME | VARCHAR(N) | FALSE    |

아직 입양을 못 간 동물 중, 가장 오래 보호소에 있었던 동물 3마리의 이름과 보호 시작일을 조회하는 SQL문을 작성해주세요. 이때 결과는 보호 시작일 순으로 조회해야 합니다.

#### 예시

예를 들어, `ANIMAL_INS` 테이블과 `ANIMAL_OUTS` 테이블이 다음과 같다면

```
ANIMAL_INS
```

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | INTAKE_CONDITION | NAME   | SEX_UPON_INTAKE |
| --------- | ----------- | ------------------- | ---------------- | ------ | --------------- |
| A354597   | Cat         | 2014-05-02 12:16:00 | Normal           | Ariel  | Spayed Female   |
| A373687   | Dog         | 2014-03-20 12:31:00 | Normal           | Rosie  | Spayed Female   |
| A412697   | Dog         | 2016-01-03 16:25:00 | Normal           | Jackie | Neutered Male   |
| A413789   | Dog         | 2016-04-19 13:28:00 | Normal           | Benji  | Spayed Female   |
| A414198   | Dog         | 2015-01-29 15:01:00 | Normal           | Shelly | Spayed Female   |

```
ANIMAL_OUTS
```

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | NAME  | SEX_UPON_OUTCOME |
| --------- | ----------- | ------------------- | ----- | ---------------- |
| A354597   | Cat         | 2014-05-02 12:16:00 | Ariel | Spayed Female    |
| A373687   | Dog         | 2014-03-20 12:31:00 | Rosie | Spayed Female    |

SQL문을 실행하면 다음과 같이 나와야 합니다.

| NAME   | DATETIME            |
| ------ | ------------------- |
| Shelly | 2015-01-29 15:01:00 |
| Jackie | 2016-01-03 16:25:00 |
| Benji  | 2016-04-19 13:28:00 |

※ 입양을 가지 못한 동물이 3마리 이상인 경우만 입력으로 주어집니다.



#### 코드

- ```SQL
  -- 코드를 입력하세요
  SELECT a.NAME, a.DATETIME
  FROM ANIMAL_INS a LEFT JOIN ANIMAL_OUTS b ON a.animal_id = b.animal_id
  WHERE b.DATETIME IS NULL 
  ORDER BY DATETIME
  LIMIT 3
  ```





### 오랜 기간 보호한 동물 (2)

#### 문제 설명

`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

| NAME             | TYPE       | NULLABLE |
| ---------------- | ---------- | -------- |
| ANIMAL_ID        | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE      | VARCHAR(N) | FALSE    |
| DATETIME         | DATETIME   | FALSE    |
| INTAKE_CONDITION | VARCHAR(N) | FALSE    |
| NAME             | VARCHAR(N) | TRUE     |
| SEX_UPON_INTAKE  | VARCHAR(N) | FALSE    |

`ANIMAL_OUTS` 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. `ANIMAL_OUTS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `NAME`, `SEX_UPON_OUTCOME`는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. `ANIMAL_OUTS` 테이블의 `ANIMAL_ID`는 `ANIMAL_INS`의 `ANIMAL_ID`의 외래 키입니다.

| NAME             | TYPE       | NULLABLE |
| ---------------- | ---------- | -------- |
| ANIMAL_ID        | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE      | VARCHAR(N) | FALSE    |
| DATETIME         | DATETIME   | FALSE    |
| NAME             | VARCHAR(N) | TRUE     |
| SEX_UPON_OUTCOME | VARCHAR(N) | FALSE    |

입양을 간 동물 중, 보호 기간이 가장 길었던 동물 두 마리의 아이디와 이름을 조회하는 SQL문을 작성해주세요. 이때 결과는 보호 기간이 긴 순으로 조회해야 합니다.

#### 예시

예를 들어, `ANIMAL_INS` 테이블과 `ANIMAL_OUTS` 테이블이 다음과 같다면

```
ANIMAL_INS
```

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | INTAKE_CONDITION | NAME       | SEX_UPON_INTAKE |
| --------- | ----------- | ------------------- | ---------------- | ---------- | --------------- |
| A354597   | Cat         | 2014-05-02 12:16:00 | Normal           | Ariel      | Spayed Female   |
| A362707   | Dog         | 2016-01-27 12:27:00 | Sick             | Girly Girl | Spayed Female   |
| A370507   | Cat         | 2014-10-27 14:43:00 | Normal           | Emily      | Spayed Female   |
| A414513   | Dog         | 2016-06-07 09:17:00 | Normal           | Rocky      | Neutered Male   |

```
ANIMAL_OUTS
```

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | NAME       | SEX_UPON_OUTCOME |
| --------- | ----------- | ------------------- | ---------- | ---------------- |
| A354597   | Cat         | 2014-06-03 12:30:00 | Ariel      | Spayed Female    |
| A362707   | Dog         | 2017-01-10 10:44:00 | Girly Girl | Spayed Female    |
| A370507   | Cat         | 2015-08-15 09:24:00 | Emily      | Spayed Female    |

SQL문을 실행하면 다음과 같이 나와야 합니다.

| ANIMAL_ID | NAME       |
| --------- | ---------- |
| A362707   | Girly Girl |
| A370507   | Emily      |

※ 입양을 간 동물이 2마리 이상인 경우만 입력으로 주어집니다.

#### 코드

- ```SQL
  -- 코드를 입력하세요
  SELECT b.animal_id, b.name
  FROM ANIMAL_INS a, ANIMAL_OUTS b WHERE a.animal_id = b.animal_id
  ORDER BY DATEDIFF(a.datetime, b.datetime)
  LIMIT 2
  ```

- ```SQL
  -- 코드를 입력하세요
  SELECT b.animal_id, b.name
  FROM ANIMAL_INS a, ANIMAL_OUTS b WHERE a.animal_id = b.animal_id
  ORDER BY b.datetime-a.datetime DESC
  LIMIT 2
  ```

  



### 보호소에서 중성화한 동물

#### 문제

`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

| NAME             | TYPE       | NULLABLE |
| ---------------- | ---------- | -------- |
| ANIMAL_ID        | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE      | VARCHAR(N) | FALSE    |
| DATETIME         | DATETIME   | FALSE    |
| INTAKE_CONDITION | VARCHAR(N) | FALSE    |
| NAME             | VARCHAR(N) | TRUE     |
| SEX_UPON_INTAKE  | VARCHAR(N) | FALSE    |

`ANIMAL_OUTS` 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. `ANIMAL_OUTS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `NAME`, `SEX_UPON_OUTCOME`는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. `ANIMAL_OUTS` 테이블의 `ANIMAL_ID`는 `ANIMAL_INS`의 `ANIMAL_ID`의 외래 키입니다.

| NAME             | TYPE       | NULLABLE |
| ---------------- | ---------- | -------- |
| ANIMAL_ID        | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE      | VARCHAR(N) | FALSE    |
| DATETIME         | DATETIME   | FALSE    |
| NAME             | VARCHAR(N) | TRUE     |
| SEX_UPON_OUTCOME | VARCHAR(N) | FALSE    |

보호소에서 중성화 수술을 거친 동물 정보를 알아보려 합니다. 보호소에 들어올 당시에는 중성화되지 않았지만, 보호소를 나갈 당시에는 중성화된 동물의 아이디와 생물 종, 이름을 조회하는 아이디 순으로 조회하는 SQL 문을 작성해주세요.

##### 예시

예를 들어, `ANIMAL_INS` 테이블과 `ANIMAL_OUTS` 테이블이 다음과 같다면

```
ANIMAL_INS
```

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | INTAKE_CONDITION | NAME      | SEX_UPON_INTAKE |
| --------- | ----------- | ------------------- | ---------------- | --------- | --------------- |
| A367438   | Dog         | 2015-09-10 16:01:00 | Normal           | Cookie    | Spayed Female   |
| A382192   | Dog         | 2015-03-13 13:14:00 | Normal           | Maxwell 2 | Intact Male     |
| A405494   | Dog         | 2014-05-16 14:17:00 | Normal           | Kaila     | Spayed Female   |
| A410330   | Dog         | 2016-09-11 14:09:00 | Sick             | Chewy     | Intact Female   |

```
ANIMAL_OUTS
```

| ANIMAL_ID | ANIMAL_TYPE | DATETIME            | NAME      | SEX_UPON_OUTCOME |
| --------- | ----------- | ------------------- | --------- | ---------------- |
| A367438   | Dog         | 2015-09-12 13:30:00 | Cookie    | Spayed Female    |
| A382192   | Dog         | 2015-03-16 13:46:00 | Maxwell 2 | Neutered Male    |
| A405494   | Dog         | 2014-05-20 11:44:00 | Kaila     | Spayed Female    |
| A410330   | Dog         | 2016-09-13 13:46:00 | Chewy     | Spayed Female    |

- Cookie는 보호소에 들어올 당시에 이미 중성화되어있었습니다.
- Maxwell 2는 보호소에 들어온 후 중성화되었습니다.
- Kaila는 보호소에 들어올 당시에 이미 중성화되어있었습니다.
- Chewy는 보호소에 들어온 후 중성화되었습니다.

따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.

| ANIMAL_ID | ANIMAL_TYPE | NAME      |
| --------- | ----------- | --------- |
| A382192   | Dog         | Maxwell 2 |
| A410330   | Dog         | Chewy     |



#### 코드

- ```SQL
  -- 코드를 입력하세요
  SELECT b.animal_id, b.animal_type, b.name
  FROM ANIMAL_INS a RIGHT JOIN ANIMAL_OUTS b ON a.animal_id = b.animal_id
  WHERE a.SEX_UPON_INTAKE LIKE '%Intact %' AND (b.SEX_UPON_OUTCOME LIKE '%Spayed%' OR b.SEX_UPON_OUTCOME LIKE '%Neutered%')
  
  ```





### 우유와 요거트가 담긴 장바구니

#### 문제

`CART_PRODUCTS` 테이블은 장바구니에 담긴 상품 정보를 담은 테이블입니다. `CART_PRODUCTS` 테이블의 구조는 다음과 같으며, `ID`, `CART_ID`, `NAME`, `PRICE`는 각각 테이블의 아이디, 장바구니의 아이디, 상품 종류, 가격을 나타냅니다.

| NAME    | TYPE    |
| ------- | ------- |
| ID      | INT     |
| CART_ID | INT     |
| NAME    | VARCHAR |
| PRICE   | INT     |

데이터 분석 팀에서는 우유와 요거트를 동시에 구입한 장바구니가 있는지 알아보려 합니다. 우유와 요거트를 동시에 구입한 장바구니의 아이디를 조회하는 SQL 문을 작성해주세요. 이때 결과는 장바구니의 아이디 순으로 나와야 합니다.

#### 예시

예를 들어 `CART_PRODUCTS` 테이블이 다음과 같다면

`CART_PRODUCTS` 테이블

| ID   | CART_ID | NAME          | PRICE |
| ---- | ------- | ------------- | ----- |
| 5488 | 83      | 알루미늄 호일 | 2980  |
| 8435 | 83      | 우유          | 1880  |
| 5489 | 286     | 반찬류        | 3700  |
| 5491 | 286     | 요거트        | 2980  |
| 5504 | 286     | 우유          | 1880  |
| 8437 | 448     | 요거트        | 2980  |
| 8454 | 448     | 우유          | 1880  |
| 5490 | 1034    | 케첩          | 1380  |
| 5492 | 1034    | 일회용품      | 1080  |

- 83번 장바구니에는 우유만 있고 요거트가 없습니다.
- 286번 장바구니에는 우유와 요거트가 모두 있습니다.
- 448번 장바구니에는 우유와 요거트가 모두 있습니다.
- 1034번 장바구니에는 우유와 요거트가 모두 없습니다.

따라서 SQL 문을 실행하면 다음과 같이 나와야 합니다.

| CART_ID |
| ------- |
| 286     |
| 448     |

#### 코드

- ```sql
  -- 코드를 입력하세요
  SELECT A.CART_ID FROM
  (SELECT CART_ID FROM CART_PRODUCTS WHERE NAME = '요거트') as A,
  (SELECT CART_ID FROM CART_PRODUCTS WHERE NAME='우유') as B
  WHERE A.CART_ID = B.CART_ID
  ```

  

