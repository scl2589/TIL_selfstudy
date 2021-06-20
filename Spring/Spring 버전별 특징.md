# Spring 버전별 특징

## Spring 2.0

- XML 기반의 namespace
- AspectJ  지원



## Spring 2.5

- Annotation 기반의 설정



## Spring 3.2

- Java 5의 기능 (Generic, 가변 매개변수 varargs 등) 을 사용하여 개정
  - 이로인해 BeanFactory 등 핵심 API가 업데이트 됨
- **@Async주석**을 통해 비동기 메서드 호출을 지원
- 하나의 Spring.jar로 제공하던 부분을 여러 Spring 모듈의 jar 파일로 나누어 제공
  - `spring-core`, `spring-web` 등
- `SPEL(Spring Expression Language)` 도입
  - 이로 인해 `XML` 및 `Annotation` 기반 Bean 정의에서 사용할 수 있게 됨.
  - 환경설정 파일에서 값을 가져올 수 있음
- `@configuration` , `@Bean` 등을 이용해 **메타 데이터** 설정
- `OXM(Object Xml Mapping)`을 사용하여 Bean을 XML 형태로 관리.
- REST API에 대한 지원이 추가됨
  - 서버에서는 기존 MVCFramework 레벨에서 `Annotation` 기반 확장 기술
  - 클라이언트에서는 **RestTemplate** 지원
- H2 등의 Embedded Database를 지원
- 2016년 12월 31일 개발 및 지원 중단



## Spring 4.0

- Java 8 지원
  - lambda expression 사용 가능
  - Spring callback interface에 method 참조 사용 가능
  - annotation 개조 ex) `@Repeatable`
- Java EE 6 and 7 지원
  - JPA 2.0과 Servelet 3.0이 고려되어짐
- Groovy Bean Definition DSL
  - Groovy DSL 을 사용하여 외부 bean 설정이 가능
    - XML bean definition을 사용하는 것과 유사하지만 더 간결한 문장 사용 가능
    - `Groovy` 를 통해 개발 초기 단계에서 설정을 쉽게 embed하여 사용 가능
- `Core Container` 지원 확대
  - Spring은 Bean을 injecting할 때, generic type을 다룰 수 있다. 예를 들어, Spring Data “Repository”를 사용할 때, 정의된 구현제를 쉽게 사용할 수 있다.
  - Spring의 `meta-annotation`을 사용한다면, Source annotation에서 attribute를 재정의하는 것이 가능하다.
  - Bean들은 list나 array에 autowired 될 때, 정렬이 될 수 있다. `@Order` 혹은 `Ordered interface`를 사용해서 배열과 리스트 형태의 `Bean`을 정렬 할 수 있다.
  - `@Lazy` annotation도 `injection` 시점에서 사용될 수 있다.
  - Java-based configuration을 사용하는 개발자들을 위해 `@Description` annotation이 추가되었다.
- Web 관련 지원 확대
  - `@RestController` annotation을 사용할 수 있다. `@RequestMapping` method에 @ResponseBody를 붙이지 않아도 된다.
  - `AsyncRestTemplate` class가 추가되었다. 이는 REST client를 개발할 때, `Non-blocking asynchronous`를 지원한다.
  - Spring MVC application을 개발할 때, `comprehensive timezone` 지원.
- 양방향 통신 지원 확대
  - SockJS-based fallback option 제공
  - `Spring Web Socket`, `STOMP` 지원 추가
- 테스트 관련 기능 추가
  - `spring-test`에 있는 대부분의 annotation은 `meta-annotation`으로 사용 가능
  - `@ActiveProfiles`의 `resolver attribute`을 통해 Active bean definition profile은 programmatically하게 만들 수 있다.
  - `spring-core`에 `SocketUtils`가 추가되었다. 이는 localhost에서 TCP와 UDP 서버 port를 scan할 수 있도록 해준다.



## Spring 4.1

- JMS
  - JavaConfig로 설정할 수 있는 부분 증가
  - `@JMSListener` annotation으로 listener로 간편하게 추가 가능
  - Spring messaging abstraction이 JMS를 지원하기 시작
- Caching 기능 향상
  - `CacheResolver` 를 사용해 캐시를 런타임에 결정하는 것이 가능
  - `@CacheConfig` 어노테이션을 이용해 어노테이션 레벨에서 공통 세팅 활성화
  - cache resolver, cache manager, key generator 등의 커스터마이징 가능
- Web 기능 지원 확대
- `@RequestParam`, `@RequestHeader`, `@MatrixVariable` 에 Optional 사용 가능
- `ResourceResolver`, `ResourceTransformer`, `ResourceUrlProvider`
  - `ResponseEntity`가 빌더 형식의 api 제공 예) ResponseEntity.ok()



## Spring 4.2

- `Core` 기능 지원 확대
  - `@Bean`이 default method 감지
  - `@Import` 로 `@Configuration` 클래스나 `@Component` 클래스 import 가능
  - `@Order`로 `@Configuration`클래스가 로딩되는 순서 설정 가능
  - annotation attribute를 위한 `@AliasFor` 제공



## Spring 4.3

- `Core Container` 들의 기능 지원 확대
  - 예를 들어, `Spring Data Repository` 를 사용하고 있다면 간단한 구현으로 주입할 수 있다. (`@Autowired Repository<Customer> customerRepository`)
  - Java8의 디폴트 메서드는 bean property의 getters와 setters로 인식
  - `@Scheduled`, `@Schedules`를 meta-annotation으로 사용 가능
  - `@Configuration`에서 생성자 주입 지원
- 캐싱 개선
  - `Cacheable 의 sync` 를 통해서 동시성을 지원하며 한 번만 계산될 수 있도록 한다.
- Web 관련 기능 개선
  - `@RequestMapping`의 다양한 형태 `GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`, `@PatchMapping` 추가
  - class level에서 `@ResponseStatus` 지원
  - `@PathVariable Optional` 사용 가능
  - `MVCExceptionalHandler` 에 지속적인 혹은 커스텀 에러 처리 가능
  - `@RestControllerAdvice` 추가
- `@RestController` 등 Web을 개발하기 위한 도구의 지원이 강화되었다.
- 2020년 12월 31일부로 개발 및 지원이 종료될 예정이다.



## Spring 5.0

- 전체 프레임워크가 `Java 8`을 기본적인 소스코드로 삼아 제네릭과 람다 등을 통해 가독성 향상
  - 코어 로직에 있어 JDK 8의 특징들이 강화.
- `JDK 9`와도 완벽 호환
- `Core Framework` 지원 확대
  - Java8이 기본이 되면서 코어 스프링 인터페스들이 디폴트 메서드 기반의 선택적 정의를 제공
  - `@Nullable`, `@NotNull` annotation을 사용해서 명시적으로 `nullable` 인자를 표시하고 값을 얻어올 수 있다.
- `Core Container` 후보 컴포넌트 인덱스 기능 추가 (classpath 기반의 component 스캔 대체 가능)
- HTTP 메시지 코덱의 XML과 JSON 지원에 대한 구현이 Encode와 Decoder의 사용을 통해 추상화되었다.
- `Jackson 2.9`, `Protobuf 3`, `Reactor 3.1`과의 호환 추가
  - 웹에 대한 지원이 향상되었다.
- `Spring WebFlux` 추가
  - 비동기와 넌-블로킹 이벤트 루프 모델 사용 가능
  - Reactive Programming 모델 제공
- `Kotlin`지원
  - 함수형 프로그래밍 가능
- `Junit 5` 지원
- 버전 지원
  - `5.0.x` 버전은 2020년 10월까지 지원
  - `5.1.x` 버전과 `5.2.x` 버전은 각각 2020년 10월, 2021년 말까지 활발히 개발될 것.
  - `5.3.x` 버전은 알파버전으로, 2024년까지 지원이 제공.



## 참고

https://jins-dev.tistory.com/entry/Spring-Framework-의-특징과-버전별-주요-Feature-들

https://m.blog.naver.com/whdgml1996/222001483936

https://stargatex.wordpress.com/2014/11/19/spring-framework-4-0-무엇이-달라졌나/

https://springframework.guru/what-is-new-with-spring-framework-5/