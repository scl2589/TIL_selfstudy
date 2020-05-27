# SQL Tips

## Having

- Having은 간단하게 생각해서 GROUP BY를 한 결과에 조건을 붙이고 싶을 때, 즉 GROUP BY의 WHERE 절과 같다고 볼 수 있습니다.

- 예시

  - ```SQL
    SELECT name, COUNT(name) FROM test_table 
    GROUP BY name
    HAVING COUNT(name) = 1
    ```

    

