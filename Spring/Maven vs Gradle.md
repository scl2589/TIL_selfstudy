# Maven vs Gradle

## 빌드 관리 도구

- 빌드 자동화 도구
  - 우리가 프로젝트에서 작성한 **java 코드**와 프로젝트 내에 필요한 **각종 xml, properties, jar파일**들을 **JVM이나 WAS가 인식할 수 있도록 패키징 해주는 빌드 과정/ 빌드 자동화 도구**이다.
- 프로젝트 생성, 테스트 빌드, 배포 등의 작업을 위한 전용 프로그램이다.
- 라이브러리
  - 각 라이버리들을 번거롭게 다운받을 필요 없이, 빌드도구 설정파일에 필요한 라이브러리 종류와 버전들, 종속성 정보를 명시하여 필요한 라이브러리들을 설정파일을 통해 자동으로 다운받고, 이를 간편하게 관리해주는 도구이다.



## Maven

- Java용 프로젝트 관리도구로 Apache의 Ant 대안으로 만들어졌다.
- 빌드 중인 프로젝트, 빌드 순서, 다양한 외부 라이브러리의 종속성 관계를 `pom.xml` 파일에 명시한다.
- Maven은 외부저장소에 필요한 라이브러리와 플러그인들을 다운로드 후, 로컬 시스템의 캐시에 모두 저장한다.
  - 내가 사용하는 라이브러리 뿐만 아니라, 해당 라이브러리가 작동하는데 필요한 다른 라이브러리들까지 관리하여 네트워크를 통해 자동으로 다운받아준다.
- 프로젝트의 전체적인 라이프사이클을 관리하는 도구이다.
- XML로 라이브러리를 정의하고 활용

```java
<!-- <https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-jpa> -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
    <version>2.2.4.RELEASE</version>
</dependency>
```



### Maven 라이프사이클

- maven에서는 미리 정의하고 있는 빌드 순서가 있고, 이를 라이프사이클이라고 한다.

- 각 라이프 사이클의 빌드 단계를 Phase라고 하며, 이런 Phase들은 의존 관계를 갖고 있다.

- 라이프사이클

  - **Clean** : 이전 빌드에서 생성된 파일들을 삭제하는 단계
  - **Validate** : 프로젝트가 올바른지 확인하고 필요한 모든 정보를 사용할 수 있는 지 확인하는 단계
  - **Compile** : 프로젝트의 소스코드를 컴파일하는 단계
  - **Test** : 유닛(단위) 테스트를 수행하는 단계(테스트 실패시 빌드 실패로 처리, 스킵 가능)
  - **Package** : 실제 컴파일된 소스 코드와 리소스들을 jar등의 배포를 위한 패키지로 만드는 단계
  - **Verify** : 통합테스트 결과에 대한 검사를 실행하여 품질 기준을 충족하는지 확인하는 단계
  - **Install** : 패키지를 로컬 저장소에 설치하는 단계
  - **Site** : 프로젝트 문서를 생성하는 단계
  - **Deploy** : 만들어진 Package를 원격 저장소에 release하는 단계

  → 이외에도 더 많은 종류의 라이프사이클이 존재한다.

  → 크게는 Clean, Build, Site 3가지 라이프사이클로 나눈다.

- 참고

  - https://hyojun123.github.io/2019/04/18/gradleAndMaven/



### POM (Project Object Model)

- POM은 Project Object Model의 정보를 담고 있는 파일이다.
- 주요하게 다루는 기능들
  - 프로젝트 정보 - 프로젝트 이름, 개발자 목록, 라이센스
  - 빌드 설정 - 소스, 리소스, 라이프 사이클별 실행한 플러그인(goal) 등 빌드와 관련된 설정
  - 빌드 환경 - 사용자 환경별로 달라질 수 있는 profile 정보
  - POM 연관 정보 - 의존 프로젝트 (모듈), 상위 프로젝트, 포함하고 있는 하위 모듈 등
- `pom.xml` 파일을 말하며, Maven의 기능을 이용하기 위해 POM이 사용된다.



## Gradle

- 기본적으로 빌드 배포 도구 (Build Tool)이다.
- 안드로이드 앱을 만들 때 필요한 공식 빌드시스템이기도 하며 Java, C/C++, Python등을 지원한다.
- 빌드툴인 Ant Builder와 그루비 스크립트를 기반으로 구축되어 기존 Ant의 역할과 배포 스크립트의 기능을 모두 사용가능하다.
- 별도의 빌드스크립트를 통하여 사용할 애플리케이션 버전, 라이브러리 등의 항목을 설정할 수 있다.
- 장점
  - 스크립트 언어로 구성되어 있기 때문에 XML과 달리 변수 선언, if, else, for 등의 로직이 구현가능하여 간결하게 구성 가능하다.
  - 라이브러리 관리
    - maven repository를 동일하게 사용할 수 있어서 설정된 서버를 통하여 라이브러리를 다운로드 받아 모두 동일한 의존성을 가진 환경을 수정할 수 있다.
    - 자신이 추가한 라이브러리도 repository 서버에 올릴 수 있다.
  - 프로젝트 관리
    - 모든 프로젝트가 일관된 디렉토리 구조를 가지고 빌드 프로세스를 유지하도록 도와준다.
  - 단위 테스트 시 의존성 관리
    - junit 등을 사용하기 위해 명시한다.
  - 빌드시간이 짧다.
    - Gradle은 프로젝트의 어느부분이 업데이트 되었는지 알기 때문에, 빌드에 점진적으로 추가할 수 있다.
    - 업데이트가 이미 반영된 빌드의 부분은 더 이상 재실행되지 않는다.



### Gradle이 Maven 보다 좋은 점

- Build라는 동적인 요소를 XML로 정의하기에는 어려운 부분이 많다.
  - 설정 내용이 길어지고 가독성 떨어짐
  - 의존관계가 복잡한 프로젝트 설정하기에는 부적절
  - 상속구조를 이용한 멀티 모듈 구현
  - 특정 설정을 소수의 모듈에서 공유하기 위해서는 부모 프로젝트를 생성하여 상속하게 해야함 (상속의 단점 생김)
- Gradle은 그루비를 사용하기 때문에, 동적인 빌드는 Groovy 스크립트로 플러그인을 호출하거나 직접 코드를 짜면 된다.
  - Configuration Injection 방식을 사용해서 공통 모듈을 상속해서 사용하는 단점을 커버했다.
  - 설정 주입시 프로젝트의 조건을 체크할 수 있어서 프로젝트별로 주입되는 설정을 다르게 할 수 있다.
- Gradle이 Maven보다 최대 100배 빠르다.



## Maven vs Gradle

- 빌드에 접근하는 방식
  - Gradle - 작업 의존성 그래프 기반
  - Maven - 고정적이고 선형적인 단계의 모델을 기반으로 한다.
- 성능
  - 둘 다 다중 모듈 빌드를 병렬로 실행
  - Gradle은 어떤 task가 업데이트 되었고 안되었는지를 체크하기 때문에 incremental build를 허용한다. 이미 업데이트된 테스크에 대해서는 작업이 실행되지 않으므로 빌드 시간이 훨씬 단축된다.
- 캐시
  - Gradle - concurrent에 안전한 캐시를 허용한다.
    - 2개 이상의 프로젝트에서 동일한 캐시를 사용할 경우, 서로 overwrite되지 않도록 checksum 기반의 캐시를 사용하고, 캐시를 repostory와 동기화시킬 수 있따.
- 커스터마이징
  - Gradle - 고도로 사용자 정의된 빌드를 작성할 수 있다.



### Maven

```java
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-checkstyle-plugin</artifactId>
    <version>2.12.1</version>
    <executions>
        <execution>
            <configuration>
                <configLocation>config/checkstyle/checkstyle.xml</configLocation>
                <consoleOutput>true</consoleOutput>
                <failsOnError>true</failsOnError>
            </configuration>
            <goals>
                <goal>check</goal>
            </goals>
        </execution>
    </executions>
</plugin>
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>findbugs-maven-plugin</artifactId>
    <version>2.5.4</version>
    <executions>
        <execution>
            <goals>
                <goal>check</goal>
            </goals>
        </execution>
    </executions>
</plugin>
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-pmd-plugin</artifactId>
    <version>3.1</version>
    <executions>
        <execution>
            <goals>
                <goal>check</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

### Gradle

```java
apply plugin:'java'
apply plugin:'checkstyle'
apply plugin:'findbugs'
apply plugin:'pmd'
version ='1.0'
repositories {
    mavenCentral()
}
dependencies {
    testCompile group:'junit', name:'junit', version:'4.11'
}
```