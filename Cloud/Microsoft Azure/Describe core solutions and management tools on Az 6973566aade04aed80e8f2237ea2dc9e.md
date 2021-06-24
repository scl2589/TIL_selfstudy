# Describe core solutions and management tools on Azure (10~15%)

# Describe core solution available in Azure

## Benefits and usage of IoT Hub, IoT Central, Azure Sphere

### Intro

IoT를 사용하면 디바이스가 데이터 분석을 위해 정보를 수집한 후 릴레이할 수 있습니다. 스마트 디바이스에는 데이터를 수집하는 센서가 장착되어 있습니다. 실제 세계의 특성을 측정하는 몇 가지 일반적인 센서는 다음과 같습니다.

- 온도 및 습도 수준을 캡처하는 환경 센서
- 바코드, QR 코드 또는 OCR(광학 인식) 스캐너
- 지리적 위치 및 근접 센서
- 광원, 색, 적외선 센서
- 소리 및 초음파 센서
- 동작 및 터치 센서
- 가속도계 및 기울기 센서
- 연기, 가스, 알코올 센서
- 디바이스에 문제가 있는 경우 감지하는 오류 센서
- 변칙 또는 변형을 감지하는 기계적 센서
- 기체와 액체를 측정하는 유동, 레벨, 압력 센서

Azure IoT 서비스를 사용하면 **이런 종류의 센서가 장착**되어 있고 **인터넷에 연결할 수 있는 디바이스가 메시지를 통해 센서 판독값을 Azure의 특정 엔드포인트에 전송할** 수 있습니다. 그러면 **메시지 데이터가 수집 및 집계**되며, **보고서 및 경고로 변환**할 수 있습니다. 또는 Azure의 IoT 서비스에서 각 디바이스로 소프트웨어 업데이트를 전송하여 모든 디바이스를 **새 펌웨어로 업데이트함으로써 문제를 해결하거나 새 기능을 추가할 수 있습니다**.

스마트 냉장 자동판매기를 제조 및 운영하는 회사에서 일한다고 가정하겠습니다. 모니터링할 정보의 종류는 어떤 것일까요? 다음을 확인하는 것이 좋습니다.

- 각 머신이 오류 없이 작동합니다.
- 머신이 손상되지 않았습니다.
- 머신의 냉각 시스템이 콘텐츠를 특정 온도 범위 내로 유지합니다.
- 제품이 특정 재고 수준에 도달하면 머신을 재입고할 수 있도록 알림이 표시됩니다.

자동판매기 하드웨어가 표준 메시지를 통해 관련 정보를 수집 및 전송할 수 있는 경우 Azure IoT 서비스를 사용하여 각 판매기에서 전송된 메시지를 수신, 저장, 구성, 표시할 수 있습니다.

디바이스에서 수집된 데이터를 Azure AI 서비스와 결합하여 다음과 같은 경우를 예측할 수 있습니다.

- 머신에 사전 대응형 유지 관리가 필요한 경우
- 재고를 보충하고 공급업체에 새 제품을 주문해야 하는 경우

여러 서비스에서 Azure IoT를 위한 엔드투엔드 솔루션을 지원하고 구동할 수 있습니다.

### IoT Hub

- [Azure IoT Hub](https://azure.microsoft.com/services/iot-hub/)는 클라우드에 호스트되고, IoT 애플리케이션과 **애플리케이션이 관리하는 디바이스 간의 양방향 통신을 위한 중앙 메시지 허브 역할을 하는 관리형 서비스**입니다. Azure IoT Hub를 사용하여 수백만 개의 IoT 디바이스와 클라우드에 호스트된 솔루션 백 엔드 간에 안정적이고 안전한 통신을 제공하는 IoT 솔루션을 빌드할 수 있습니다. 거의 모든 디바이스를 IoT 허브에 연결할 수 있습니다.
- **IoT Hub 서비스는 디바이스-클라우드 통신과 클라우드-디바이스 통신을 모두 지원**합니다. 디바이스-클라우드 원격 분석, 디바이스에서 파일 업로드, 클라우드에서 디바이스를 제어하는 요청-응답 방법과 같은 여러 메시징 패턴도 지원합니다. IoT 허브는 디바이스로부터 받은 메시지를 다른 Azure 서비스로 라우팅할 수 있습니다.
- 클라우드-디바이스 관점에서 I**oT Hub는 ‘명령 및 제어’를 허용**합니다. 즉, 연결된 디바이스를 수동 또는 자동으로 원격 제어할 수 있으므로 디바이스에 밸브 열기, 목표 온도 설정, 중단된 디바이스 다시 시작 등을 지시할 수 있습니다.
- IoT Hub 모니터링을 사용하면 디바이스 만들기, 디바이스 오류 및 디바이스 연결과 같은 이벤트를 추적하여 **솔루션의 상태를 유지 관리**할 수 있습니다.

### IoT Central

- [Azure IoT Central](https://azure.microsoft.com/services/iot-central/)은 **IoT 디바이스를 연결 및 모니터링하고 관리할 수 있는 대시보드를 추가하여 IoT Hub 위에 구축**됩니다. **시각적 UI(사용자 인터페이스)를 사용**하면 **새 디바이스를 신속하게 연결하고 원격 분석 또는 오류 메시지의 전송이 시작되면 이를 시각적으로 확인하기가 용이**합니다. 모든 디바이스의 전반적인 성능을 집계로 확인하고, 특정 디바이스에 유지 관리가 필요할 경우 **알림을 보내는 경고를 설정할 수 있습니다**. 마지막으로, **디바이스에 펌웨어 업데이트를 푸시**할 수 있습니다.
- 신속하게 시작하고 실행하는 데 도움이 되도록 IoT Central은 소매, 에너지, 의료, 정부와 같은 다양한 업종의 일반적인 시나리오를 위한 시작 템플릿을 제공합니다. 이러한 설계 시작 템플릿을 사용해 기존 테마 중에서 선택하거나 고유한 사용자 지정 테마를 만들거나 로고를 설정하는 등 UI에서 곧바로 사용자 지정할 수 있습니다. IoT Central을 사용하면 디바이스에서 전송된 특정 데이터, 확인하려는 보고서, 전송할 경고 등에 맞게 시작 템플릿을 조정할 수 있습니다.

    ![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/iot-fundamentals/media/2-identify-product-options-01-9e2f3db7.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/iot-fundamentals/media/2-identify-product-options-01-9e2f3db7.png)

- **UI를 사용하여 디바이스를 원격으로 제어할** 수 있습니다. 이 기능을 사용하여 소프트웨어 업데이트를 푸시하거나 디바이스의 속성을 수정할 수 있습니다. 냉장 자동판매기 전체 또는 1개의 온도를 IoT Central 내에서 직접, 원하는 대로 조정할 수 있습니다.
- IoT Central의 **핵심 부분은 디바이스 템플릿 사용**입니다. 디바이스 템플릿을 사용하면 서**비스 쪽 코딩 없이 디바이스를 연결할 수 있습니다**. IoT Central은 템플릿을 사용하여 **대시보드, 경고 등을 생성**합니다. 디바이스 개발자는 디바이스에서 실행할 코드를 만들어야 하며, 코드가 디바이스 템플릿 사양과 일치해야 합니다.

### Azure Sphere

- [Azure Sphere](https://azure.microsoft.com/services/azure-sphere/)는 고객을 위해 디바이스의 **하드웨어 및 운영 체제, 디바이스에서 메시지 허브로 메시지를 전송하는 안전한 방법 등의 모든 것을 포함하는, 보안이 뛰어난 엔드투엔드 IoT 솔루션**을 만듭니다. Azure Sphere에는 **인터넷에 연결된 디바이스를 위한 기본 제공 통신 및 보안 기능**이 있습니다.
- Azure Sphere는 다음 세 부분으로 제공됩니다.
    - 첫 번째 부분은 **연결된 센서의 신호 및 운영 체제를 처리하는 Azure Sphere MCU**(마이크로 컨트롤러 유닛)입니다. 다음 이미지는 Azure Sphere 애플리케이션의 프로토타입 생성 및 개발에 사용할 수 있는 여러 시작 키트 중 하나인 Seeed Azure Sphere MT3620 개발 키트 MCU를 보여 줍니다.

        ![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/iot-fundamentals/media/2-identify-product-options-02-d830e12a.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/iot-fundamentals/media/2-identify-product-options-02-d830e12a.png)

        - 두 번째 부분은 **보안 서비스와의 통신을 처리하고 공급업체 소프트웨어를 실행할 수 있는 사용자 지정된 Linux OS(운영 체제)**입니다.
        - 세 번째 부분은 **AS3라고도 하는 Azure Sphere Security Service**입니다. 이 서비스는 **디바이스가 악의적으로 손상되지 않았는지 확인하는 역할**을 합니다. 디바이스는 Azure에 연결을 시도할 때 먼저 인증서 기반 인증을 사용하여 디바이스별 자체 인증을 수행해야 합니다. 인증에 성공할 경우 AS3는 디바이스가 변조되지 않았는지 확인합니다. 보안 통신 채널을 설정한 후 AS3는 OS 또는 승인된 고객 개발 소프트웨어 업데이트를 디바이스에 푸시합니다.
- Azure Sphere 시스템이 디바이스의 신뢰성을 검사하고 인증한 후 디바이스는 원격 분석 및 오류 정보를 전송하여 다른 Azure IoT 서비스와 상호 작용할 수 있습니다.

### Quiz

![Describe%20core%20solutions%20and%20management%20tools%20on%20Az%206973566aade04aed80e8f2237ea2dc9e/capture.png](Describe%20core%20solutions%20and%20management%20tools%20on%20Az%206973566aade04aed80e8f2237ea2dc9e/capture.png)

## Benefits and usage of Azure Synapse Analystics, HDInsight, and Azure Databricks

## Benefits and usage of Azure Machine Learning, Cognitive Services and Azure Bot Service

### Azure Machine Learning

[Azure Machine Learning](https://azure.microsoft.com/services/machine-learning/)은 **예측용 플랫폼**입니다. 향후 결과를 가장 정확하게 예측하는 모델을 찾기 위해 **데이터에 연결하여 모델을 학습 및 테스트할 수 있는 도구와 서비스로 구성**되어 있습니다. 실험을 실행하여 모델을 테스트한 후에는 웹 API 엔드포인트를 통해 모델을 배포하고 실시간으로 사용할 수 있습니다.

Azure Machine Learning을 사용하여 다음을 수행할 수 있습니다.

- 데이터를 가져오는 방법, 누락되었거나 잘못된 데이터를 처리하는 방법, 데이터를 학습 세트나 테스트 세트로 분할하고 데이터를 학습 프로세스로 전달하는 방법을 정의하는 프로세스를 만듭니다.
- 데이터 과학자에게 친숙한 도구와 프로그래밍 언어를 사용하여 예측 모델을 학습시키고 평가합니다.
- 학습 데이터와 테스트 데이터를 기반으로 알고리즘의 점수를 매기는 데 필요한 컴퓨팅 집약적 실험을 실행할 위치와 시기를 정의하는 파이프라인을 만듭니다.
- 다른 애플리케이션에서 실시간으로 사용할 수 있도록 최적의 알고리즘을 API로 엔드포인트에 배포합니다.

고유 데이터를 사용하는 알고리즘의 설계와 학습에 대해 **데이터 과학자가 완벽하게 제어해야 하는 경우 Azure Machine Learning을 선택**합니다. 다음 비디오에서는 기계 학습 시스템을 설정하는 데 필요한 기본 단계를 설명합니다.

### Cognitive Services

- [Azure Cognitive Services](https://azure.microsoft.com/services/cognitive-services/)는 애플리케이션이 **보고 듣고 말하고 이해하고 추론**을 시작할 수 있는 미**리 빌드된 기계 학습 모델을 제공**합니다.
    - 데이터를 학습시키지 않아도 된다!!!
- Azure Cognitive Services를 사용하여 **텍스트 분석을 통한 정서적 감정 분석**이나 **이미지 분석을 통한 개체 또는 얼굴 인식과 같은 일반적인 문제를 해결**합니다. 이 서비스를 사용하기 위해 특별한 기계 학습 또는 데이터 과학 지식이 필요하지 않습니다. 개발자는 API를 통해 Azure Cognitive Services에 액세스하며 해당 기능을 코드 몇 줄만으로 쉽게 포함할 수 있습니다.
- Azure Machine Learning에서는 고유 데이터를 가져와 해당 데이터에 대해 모델을 학습시켜야 하지만, **Azure Cognitive Services는 대부분의 경우 예측을 얻는 기반이 되는 라이브 데이터를 가져올 수 있도록 미리 학습된 모델을 제공**합니다.
- Azure Cognitive Services는 다음과 같은 범주로 나눌 수 있습니다.
    - **언어** 서비스: 앱에서 미리 빌드된 스크립트를 사용하여 자연어를 처리하고, 감정을 평가하고, 사용자가 원하는 것을 인식하는 방법을 학습하도록 할 수 있습니다.
    - **음성** 서비스: 음성을 텍스트로 그리고 텍스트를 자연스러운 음성으로 변환합니다. 한 언어를 다른 언어로 번역하고 화자 검증 및 인식 기능을 사용하도록 설정할 수 있습니다.
    - **비전** 서비스: 사진, 비디오 및 다른 시각적 콘텐츠를 분석할 때 인식 및 식별 기능을 추가합니다.
    - **의사 결정** 서비스: 각 사용자에게 맞춤형 추천을 추가합니다. 이 추천은 사용될 때마다 자동으로 개선되고, 콘텐츠를 모니터링해 불쾌감을 주거나 위험한 콘텐츠를 제거하여 콘텐츠를 조정하고, 시계열 데이터에서 비정상 상태를 탐지합니다.

### Azure Bot Service

- 사람의 interaction 없이 실제로 사람과 대화하는 것과 같은 agent service
- [Azure Bot Service](https://azure.microsoft.com/services/bot-service/)와 Bot Framework는 **마치 사람처럼 질문을 이해하고 질문에 응답하는 가상 에이전트를 만들기 위한 플랫폼**입니다. Azure Bot Service는 특정 사용 사례가 있다는 점에서 Azure Machine Learning 및 Azure Cognitive Services와는 약간 다릅니다. 즉, 사**람과 지능적으로 통신할 수 있는 가상 에이전트**를 만듭니다. 빌드한 봇은 백그라운드에서 Azure Cognitive Services와 같은 다른 Azure 서비스를 사용하여 사람이 요구하는 작업을 이해합니다.
- **봇을 사용하여 반복적인 단순 작업(**예: 저녁 예약받기 또는 프로필 정보 수집)을 직접적인 사람 개입이 더 이상 필요 없는 자동화된 시스템으로 전환할 수 있습니다. 사용자는 텍스트, 대화형 카드 및 음성을 사용하여 봇과 대화합니다. 빠른 질문 및 대답이거나 지능적으로 서비스에 대한 액세스를 제공하는 복잡한 대화를 통해 봇과 상호 작용할 수 있습니다.
- **자연어를 통해 사용자와 상호작용**한다.

### 퀴즈

![Describe%20core%20solutions%20and%20management%20tools%20on%20Az%206973566aade04aed80e8f2237ea2dc9e/capture%201.png](Describe%20core%20solutions%20and%20management%20tools%20on%20Az%206973566aade04aed80e8f2237ea2dc9e/capture%201.png)

## Benefits and usage of serverless computing solutions that include Azure Functions and Logic Apps

- 서버리스 컴퓨팅은 **코드를 실행하는 클라우드에 호스팅된 실행 환경이지만 기본 호스팅 환경을 추상화**합니다. *서버리스 컴퓨팅* 이라는 용어는 잘못된 호칭입니다. 결국 코드 또는 원하는 기능을 실행하는 서버(또는 서버의 그룹)가 *있습니다*.
- 핵심 개념은 **사용자가 서버를 설정하거나 유지 관리할 책임이 없다는 점**입니다. 수요가 증가할 때 서버 크기 조정에 대해 걱정할 필요가 없고 중단에 대해서도 걱정할 필요가 없습니다. 모든 유지 관리 및 크기 조정 문제는 클라우드 공급업체가 처리합니다.
- **사용자는 서비스의 인스턴스를 만들고 코드를 추가**하면 됩니다. 인프라 구성이나 유지 관리가 필요하지도 않고 허용되지도 않습니다. 이벤트에 응답하도록 서버리스 앱을 구성합니다. 이벤트는 REST 엔드포인트, 일정 간격 타이머 또는 다른 Azure 서비스로부터 받은 메시지일 수 있습니다. 서버리스 앱은 이벤트에 의해 트리거된 경우에만 실행됩니다. 크기 조정 및 성능이 자동으로 처리되며, 사용한 리소스에 대해서만 요금이 청구됩니다. 리소스를 예약하지 않아도 됩니다.
- **서버리스 컴퓨팅은 일반적으로 *백 엔드* 시나리오를 처리하는 데 사용**됩니다. 즉, 서버리스 컴퓨팅은 한 시스템에서 다른 시스템으로 메시지를 보내거나 다른 시스템에서 보낸 메시지를 처리하는 작업을 담당합니다. 사용자에게 표시되는 시스템에는 사용되지 않고 백그라운드에서 작동합니다.
- 이 모듈에서는 두 가지 Azure 서버리스 컴퓨팅 서비스를 알아봅니다. Azure Functions와 Azure Logic Apps, 이 두 가지입니다.

### Azure Functions

- [Azure Functions](https://azure.microsoft.com/services/functions/) 서비스를 사용하면 **이벤트에 대한 응답으로 실행되는 클라우드에서 널리 사용되는 프로그래밍 언어를 사용하여 단일 메서드 또는 함수를 호스트**할 수 있습니다. 이벤트의 예로는 HTTP 요청, 큐의 새 메시지 또는 타이머의 메시지 등이 있습니다.
- 원자적 특성 때문에 **Azure Functions는 애플리케이션의 설계에서 다양한 용도로 사용**할 수 있습니다. 함수는 C#, Python, JavaScript, Typescript, Java 및 PowerShell과 같은 여러 가지 일반적인 프로그래밍 언어로 작성할 수 있습니다.
- **Azure Functions는 자동으로 크기가 조정되며 함수가 트리거될 때만 요금이 누적**됩니다. 이러한 특징 때문에 **수요가 가변적인 경우에는 Azure Functions가 탁월한 선택**입니다. 예를 들어 배달 차량 전체를 모니터링하는 IoT 솔루션으로부터 메시지를 수신할 수 있습니다. 이 경우에 업무 시간 중에 더 많은 데이터가 도착할 가능성이 큽니다. **더 바쁜 시간에 맞게 Azure Functions를 스케일 아웃**할 수 있습니다.
    - 스케일 아웃 - 똑같은 스펙을 가진 것들이 늘어나는 것
    - 스펙 업 - 스펙을 한단계 높이는 것.
- Azure 함수는 **상태 비저장 환경**입니다. **함수는 이벤트에 응답할 때마다 다시 시작되는 것처럼 작동**합니다. 이 기능은 들어오는 데이터를 처리하는 데도 이상적입니다. 그리고 상태가 필요한 경우 함수를 Azure 스토리지 계정에 연결할 수 있습니다.
- Azure Functions는 **Durable Functions라는 확장을 사용하여 오케스트레이션 작업을 수행**할 수 있으므로, 개발자는 **상태를 유지하면서 Functions를 함께 연결**할 수 있습니다.
- Azure Functions 솔루션은 서비스를 실행하는 **코드에만 관심이 있고 기본 플랫폼이나 인프라에는 관심이 없는 경우에 적합**합니다. Azure Functions는 이벤트에 대한 응답으로 작업을 수행해야 하는 경우에 가장 일반적으로 사용됩니다. 이러한 작업은 작업을 몇 **초 이내에 신속하게 완료할 수 있을 때 REST 요청, 타이머 또는 다른 Azure 서비스의 메시지를 통해 수행**하는 경우가 많습니다.
- **사용자 지정 알고리즘을 수행하거나, 특수한 데이터 구문 분석 및 데이터 조회를 수행**한다.
- 기존에 자동화된 작업이 명령형 프로그래밍 언어(파이썬, C#, Java) 로 작성되어있다.

**Azure Functions 사용**

- 메시지를 검색합니다.
- JSON을 구문 분석합니다.
- 여러 데이터베이스에서 조회를 수행하여 추가 제품 정보를 찾습니다.
- 잠재적으로 수량이 특정 수준 이하로 떨어지면 재주문할 수 있도록 구매 부서에 알림을 보냅니다.

### Logic Apps

- [Logic Apps](https://azure.microsoft.com/services/logic-apps/)는 **클라우드 서비스로 호스트되는 로우 코드/코드 없는 개발 플랫폼**입니다. 이 서비스는 회사 또는 조직 전반에서 앱, 데이터, 시스템 및 서비스를 통합해야 하는 경우 작업, 비즈니스 프로세스 및 워크플로를 자동화하고 오케스트레이션하는 데 유용합니다. Logic Apps는 클라우드, 온-프레미스 또는 둘 다에서 확장성 있는 솔루션을 설계하고 빌드하는 방법을 간소화합니다. 이 솔루션은 앱 통합, 데이터 통합, 시스템 통합, EAI(엔터프라이즈 애플리케이션 통합) 및 B2B(Business-to-Business) 통합을 다룹니다.
- Azure Logic Apps는 **웹 기반 디자이너에서 설계되며 코드를 작성하지 않고도 Azure 서비스에서 트리거된 논리를 실행**할 수 있습니다. **커넥터를 사용하여 트리거를 작업에 연결하여 앱을 빌드**합니다. **트리거는 앱을 실행한 다음 새 메시지를 큐로 보내거나 HTTP 요청을 발생시키는 이벤트**(예: 타이머)입니다. 작업이란 실행할 수 있는 단계 또는 태스크입니다. 작업에는 대부분의 프로그래밍 언어에서 볼 수 있는 논리 작업이 있습니다. 이러한 작업의 예로는 변수, 의사 결정문 및 루프 작업, 데이터를 구문 분석하고 수정하는 작업이 있습니다.
- Azure Logic Apps를 사용하여 엔터프라이즈 통합 솔루션을 빌드하려면 커넥터가 이미 200개가 넘고 점점 성장하고 있는 **갤러리에서 선택**할 수 있습니다. **갤러리에는 Salesforce, SAP, Oracle DB 및 파일 공유와 같은 서비스가 포함**됩니다.
- 필요한 작업이나 커넥터를 찾을 수 없으면 **사용자 지정 코드를 사용하여 직접 빌드**할 수 있습니다.
- **코드 작성 (명령형)보다 시각적 개체(선언적) workflow를 선호**한다.

### 차이점

- Azure Logic Apps에서 Azure Functions를 호출할 수 있고 그 반대의 경우도 마찬가지입니다. 두 서비스의 주요 차이점은 **서비스의 의도**입니다. **Azure Functions는 서버리스 컴퓨팅 서비스**이며, **Azure Logic Apps는 서버리스 오케스트레이션 서비스**입니다. Azure Functions를 사용하여 다양한 연결이 포함된 장기 실행 비즈니스 프로세스를 오케스트레이션할 수는 있지만 오케스트레이션이 설계 당시의 기본 사용 사례는 아닙니다.
- 또한 두 서비스는 서로 다르게 가격이 책정됩니다. Azure Functions는 실행 횟수 및 각 실행의 실행 시간을 기반으로 가격이 책정됩니다. Logic Apps는 실행 횟수 및 사용되는 커넥터 유형을 기반으로 가격이 책정됩니다.

### 퀴즈

![Describe%20core%20solutions%20and%20management%20tools%20on%20Az%206973566aade04aed80e8f2237ea2dc9e/capture%202.png](Describe%20core%20solutions%20and%20management%20tools%20on%20Az%206973566aade04aed80e8f2237ea2dc9e/capture%202.png)

## Benefits and usage of Azure DevOps, Github, Github Actions, and Azure DevTest Labs

### **Azure DevOps Services**

Azure DevOps Services는 소프트웨어 개발 수명 주기의 모든 단계에서 문제를 해결하는 서비스 모음입니다.

- **Azure Repos** 는 소프트웨어 개발, DevOps 엔지니어링, 문서화 전문가가 검토 및 협업을 위해 코**드를 게시할 수 있는 중앙형 소스 코드 리포지토리**입니다.
- **Azure Boards** 는 Kanban 보드, 아이디어 보고 및 추적, 작업(높은 수준의 대규모 사용자 스토리에서 작업 항목과 이슈에 이르기까지)을 포함하는 민첩한 프로젝트 관리 제품군입니다.
    - 한 눈에 볼 수 있는 bird-eye view를 말한다.
- **Azure Pipelines** 는 CI/CD 파이프라인 자동화 도구입니다.
    - 빌드를 했을 때 바로바로 배포할 수 있는 기능
- **Azure Artifacts** 는 테스트 또는 배포 파이프라인 단계로 공급할 수 있는 컴파일된 소스 코드와 같은 아티팩트를 호스트하기 위한 리포지토리입니다.
- **Azure Test Plans** 는 소프트웨어 릴리스 전에 품질을 보장하기 위해 CI/CD 파이프라인에서 사용할 수 있는 자동화된 테스트 도구입니다.

Azure DevOps는 온-프레미스 서버 소프트웨어로 시작하고 Microsoft의 SaaS(Software as a Service) 제품으로 발전한, 대규모 기능이 포함된 완성도 높은 도구입니다.

### **GitHub 및 GitHub Actions**

- GitHub는 **오픈 소스 소프트웨어를 위한 세계에서 가장 인기 있는 코드 리포지토리**입니다. Git은 분산형 소스 코드 관리 도구인 반면, GitHub는 기본적으로 원격으로 사용되는 호스티드 버전의 Git입니다. GitHub는 Git을 기반으로 빌드되어 작업 조정, 문제 보고 및 논의, 문서 제공 등을 위한 관련 서비스를 제공합니다. 다음과 같은 기능을 제공합니다.
    - 기본 코드 베이스로 병합하기 전에 소스 코드의 웹 보기에서 개발자가 주석과 질문을 추가하여 코드 검토를 수행할 수 있는 도구를 포함하는 공유 소스 코드 리포지토리입니다.
    - Kanban 보드를 비롯한 프로젝트 관리를 용이하게 합니다.
    - **문제 보고, 토론 및 추적을 지원**합니다.
    - **CI/CD 파이프라인 자동화 도구를 제공**합니다.
    - 협업 설명서를 위한 **Wiki를 포함**합니다. → 문서화
    - 클라우드 또는 온-프레미스에서 실행할 수 있습니다.
- 이 모듈과 관련성이 가장 높은 GitHub Actions에서는 많은 수명 주기 **이벤트의 트리거를 사용하여 워크플로를 자동화**할 수 있습니다. 한 가지 예로는 CI/CD ‘도구 체인’ 자동화가 있습니다.
- 도구 체인은 시스템 개발 수명 주기 전반에 걸쳐 소프트웨어 애플리케이션의 제공, 개발 및 관리를 지원하는 소프트웨어 도구의 조합입니다. 도구 체인의 한 도구가 출력되면 도구 체인의 다음 도구가 입력됩니다. 일반적인 도구 기능은 자동화된 종속성 업데이트 수행부터 소프트웨어 빌드 및 구성, 다양한 위치로 빌드 아티팩트 전달, 테스트 등에 이르기까지 다양합니다.
- 많은 GitHub 및 Azure DevOps 기능 간 유사성과 관련해서 조직을 위해 어떤 제품을 선택할지 궁금할 수 있습니다. 아쉽게도 답은 간단하지 않을 수 있습니다.
- Azure DevOps와 GitHub는 둘 다 퍼블릭 및 프라이빗 코드 리포지토리를 허용하지만, GitHub는 퍼블릭 리포지토리와 관련된 긴 역사가 있으며 수만 명의 오픈 소스 프로젝트 소유자로부터 신뢰를 받고 있습니다. GitHub는 Azure DevOps보다 간단한 도구이며 오픈 소스에 기여하는 개별 개발자에게 집중합니다. 반면에 Azure DevOps는 좀 더 무게감 있는 프로젝트 관리 및 계획 도구, 그리고 **세분화된 액세스 제어**를 통해 엔터프라이즈 개발에 더욱 집중합니다.
    - Azure DevOps는 엔터프라이즈 성격이 강하다. RBAC에 조금 더 적합한 tool이다.

**참고**

선택 항목은 Azure DevOps Services 또는 GitHub와 GitHub Actions로 제한되지 않습니다. 실제로 필요에 따라 서비스를 조합하여 함께 사용할 수 있습니다. 예를 들어 작업 항목 추적에는 Azure Boards와 GitHub 리포지토리를 사용할 수 있습니다.

### **Azure DevTest Labs**

- Azure DevTest Labs는 소프트웨어 프로젝트의 빌드가 포함된 **VM(가상 머신)을 빌드, 설정 및 삭제하는 프로세스를 관리하기 위한 자동화된 방법을 제공**합니다.
- 이 방식으로, **개발자와 테스터는 다양한 환경 및 빌드에서 테스트를 수행할** 수 있습니다.
    - 이 환경, 운영체제, 버전이 잘 되는지 테스트를 수행해본다.
- 또한 이 **기능은 VM으로 제한되지 않습니다**. **ARM 템플릿을 통해 Azure에 배포할 수 있는 것은 무엇이든 DevTest Labs를 통해 프로비저닝할 수 있습니**다. 필수 구성 및 도구를 사용하여 미리 만들어진 랩 환경을 프로비저닝할 경우 품질 보증 전문가 및 개발자는 시간을 크게 절약할 수 있습니다.
- 이전 버전의 운영 체제에서 새로운 기능을 테스트해야 한다고 가정해보겠습니다. Azure DevTest Labs는 요청 시 모든 것을 자동으로 설정할 수 있습니다. 테스트가 완료된 후 DevTest Labs는 VM을 종료하고 프로비전 해제할 수 있으므로, 사용하지 않는 동안 비용이 절약됩니다. 비용을 제어하기 위해 관리 팀은 만들 수 있는 랩의 수, 실행 가능 시간 등을 제한할 수 있습니다.

### 퀴즈

![Describe%20core%20solutions%20and%20management%20tools%20on%20Az%206973566aade04aed80e8f2237ea2dc9e/capture%203.png](Describe%20core%20solutions%20and%20management%20tools%20on%20Az%206973566aade04aed80e8f2237ea2dc9e/capture%203.png)

# Describe Azure management tools

## Functionality and Usage of the Azure Portal, Azure Powershell, Azure CLI, Cloud Shell, and Azure Mobile App

### Azure Portal

- **웹 기반 사용자 인터페이스인 Azure Portal을 사용하여 Azure의 거의 모든 기능에 액세스**할 수 있습니다.
    - 시각적으로 확인하기 쉬움
- Azure Portal은 사용 중인 모든 서비스를 확인하고, 새 서비스를 만들고, 서비스를 구성하고, 보고서를 볼 수 있는 **친숙한 그래픽 UI를 제공**합니다. Azure Portal은 대부분의 사용자가 Azure를 처음 경험하는 방법입니다. 하지만 Azure 사용량이 증가하면 Azure 리소스를 관리하기 위해 보다 반복 가능한 코드 중심의 방식을 선택할 가능성이 높습니다.

### Azure Powershell

- Azure PowerShell은 **개발자 및 DevOps 및 IT 전문가가 cmdlet**(*command-let* 이라고 발음)이라는 **명령을 실행할 수 있는 셸**입니다. 해당 명령은 Azure Rest API를 호출하여 Azure에서 가능한 모든 관리 작업을 수행합니다. cmdlet은 독립적으로 실행하거나 하나의 스크립트 파일로 결합하여 함께 실행하여 다음을 오케스트레이션할 수 있습니다.
    - **단일 리소스 또는 연결된 여러 리소스의 루틴 설정, 해체 및 유지 관리**
    - **명령적 코드에서 수십 개 또는 수백 개의 리소스를 포함할 수 있는 전체 인프라의 배포**
- 스크립트로 명령을 캡처하면 프로세스의 반복 및 자동화가 가능합니다.
- Azure PowerShell은 Windows, Linux 및 Mac에서 사용할 수 있으며 **Azure Cloud Shell을 통해 웹 브라우저에서 액세**스할 수 있습니다.
- Windows PowerShell은 Windows 중심의 IT 조직이 수년간 많은 온-프레미스 작업을 자동화하고, 이들 조직이 방대한 분량의 사용자 지정 스크립트 및 cmdlet 카탈로그를 축적하고, 전문 지식을 쌓는 데 도움을 주고 있습니다.
- **일회성 관리 작업**을 위한다.

### Azure CLI

- Azure CLI 명령줄 인터페이스는 개발자, DevOps 전문가 또는 IT 전문가가 **Bash에서 명령을 실행할 수 있는 실행 프로그램**입니다. 해당 명령은 Azure Rest API를 호출하여 Azure에서 가능한 모든 관리 작업을 수행합니다. 명령을 개별적으로 실행하거나 스크립트 파일로 결합하여 단일 리소스 또는 전체 환경에 대한 루틴 설정, 해체 및 유지 관리를 위해 함께 실행할 수 있습니다.
- 여러 면에서 Azure CLI는 작업 수행 시 Azure PowerShell과 거의 동일합니다. 둘 다 Windows, Linux 및 Mac에서 실행되고 **Cloud Shell을 통해 웹 브라우저에서 액세스**할 수 있습니다. 주요 차이점은 사용하는 구문입니다. 이미 PowerShell 또는 Bash에 능숙하다면 원하는 도구를 사용할 수 있습니다.

### Cloud Shell

### Azure Mobile App

- Azure 모바일 앱은 **사용자가 컴퓨터를 사용하지 않을 때 iOS 및 Android에서 Azure 리소스에 액세스**할 수 있도록 지원합니다. 이를 통해 다음을 수행할 수 있습니다.
    - Azure **리소스 상태 모니터링**
    - **경고 확인, 문제의 빠른 진단 및 해결, 웹앱 또는 VM(가상 머신) 재시작**
    - **Azure CLI 또는 Azure PowerShell 명령을 실행**하여 Azure 리소스 관리

### 퀴즈

![Describe%20core%20solutions%20and%20management%20tools%20on%20Az%206973566aade04aed80e8f2237ea2dc9e/capture%204.png](Describe%20core%20solutions%20and%20management%20tools%20on%20Az%206973566aade04aed80e8f2237ea2dc9e/capture%204.png)

## Functionality and Usage of Azure Advisor

- [Azure Advisor](https://azure.microsoft.com/services/advisor/)는 **Azure 리소스를 평가하고, 안정성, 보안 및 성능 개선, 운영 우수성 달성 및 비용 절감에 도움이 되는 권장 사항을 제공**합니다. Advisor는 **클라우드 최적화에 필요한 시간을 절약할 수 있도록 설계**되었습니다. 권장 사항 서비스에는 작업 제안이 포함되며, 이를 즉시 수행하거나 연기 또는 무시할 수 있습니다.
- 권장 사항은 Azure Portal 및 API를 통해 제공되며, 알림을 설정하여 새 권장 사항 관련 알림을 받을 수 있습니다.
- Azure Portal에서 Advisor 대시보드는 모든 구독에 대해 맞춤형 추천을 표시하며, 필터를 사용하여 특정 구독, 리소스 그룹 또는 서비스에 대한 추천 사항을 선택할 수 있습니다. 권장 사항은 다섯 가지 범주로 구분됩니다.
    - **안정성**: 중요 비즈니스용 애플리케이션의 연속성을 보장 및 개선하는 데 사용됩니다.
    - **보안**: 보안 위반으로 이어질 수 있는 위협 및 취약점을 감지하는 데 사용됩니다.
    - **성능**: 애플리케이션의 속도를 향상시키는 데 사용됩니다.
    - **비용**: 전체 Azure 지출을 최적화 및 절감하는 데 사용됩니다.
    - **뛰어난 운영**: 프로세스 및 워크플로 효율성, 리소스 관리 효율성 및 배포 모범 사례를 달성할 수 있도록 하는 데 사용됩니다.

## Functionality and Usage of the Azure Resource Manager (ARM) templates

- Azure PowerShell 또는 Azure CLI에서 명령적 코드를 작성하여 **하나의 Azure 리소스를 설정 및 해체**하거나 **수백 개의 리소스를 구성하는 인프라를 오케스트레이션**할 수 있지만, 이 기능을 구현하는 더 효과적인 방법이 있습니다.
- ARM 템플릿(Azure Resource Manager 템플릿)을 사용하면 사용하려는 **리소스를 선언적 JSON 형식으로 설명할 수 있습니다**. 이것의 장점은 코드를 실행하기 전에 전체 **ARM 템플릿을 확인하여 리소스를 올바르게 생성하고 연결**할 수 있다는 것입니다. 그런 다음, 템플릿이 이러한 리소스의 생성을 병렬로 오케스트레이션합니다. 즉, 동일한 리소스의 50개의 인스턴스가 필요한 경우 50개 인스턴스가 모두 동시에 생성됩니다.
- 따라서 개발자, DevOps 전문가 또는 IT 전문가는 ARM 템플릿에서 각 리소스의 원하는 상태와 구성을 정의하기만 하면 되며 나머지는 템플릿에서 처리합니다. 템플릿은 리소스가 설정되기 전 또는 후에 PowerShell 및 Bash 스크립트를 실행할 수도 있습니다.
- 전형적인 선언적 방식이다. JSON 형태이기 때문에 선언해서 deploy하는 구조로 되어있다.
- **반복적인 배포를 위한 애플리케이션의 인프라 요구 사항이 명시**됩니다.

## Functionality and Usage of the Azure Monitor

- [Azure Monitor](https://azure.microsoft.com/services/monitor/)는 전체 Azure 및 온-프레미스 환경의 **메트릭과 로깅 데이터를 기반으로 수집, 분석, 시각화 및 잠재적 작업을 수행**할 수 있는 플랫폼입니다.
- 다음 다이어그램은 Azure Monitor가 얼마나 포괄적인지 보여줍니다.

    ![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/monitoring-fundamentals/media/2-identify-product-options-01.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/monitoring-fundamentals/media/2-identify-product-options-01.png)

    - 왼쪽에는 애플리케이션에서 운영 체제 및 네트워크에 이르는 애플리케이션 **아키텍처의 모든 계층에서 수집 가능한 로깅 및 메트릭 데이터 원본 목록**이 있습니다.
    - 가운데에서는 **로깅 및 메트릭 데이터가 중앙 리포지토리에 저장되는 방식**을 볼 수 있습니다.
    - 오른쪽을 보면, **데이터가 다양한 방식으로 사용**됩니다. 아키텍처의 각 계층에서 **실시간 및 과거 성능**을 보거나 **집계된 정보와 세부 정보를** 볼 수 있습니다. **데이터는 여러 대상 그룹에 대해 여러 수준으로 표시**됩니다. Azure Monitor 대시보드에서 개략적인 보고서를 보거나 Power BI 및 Kusto 쿼리를 사용하여 사용자 지정 보기를 만들 수 있습니다.
- 또한 **SMS, 이메일 등을 통해 팀에 전달되는 경고를 통해 데이터를 사용하여 중요한 이벤트에 실시간으로 대응**할 수 있습니다. 또는 임계값을 사용하여 수요에 맞춰 크기를 조정할 수 있는 자동 크기 조정 기능을 트리거할 수 있습니다.
- 애플리케이션 소스 코드에서 **Azure로 원격 분석 정보를 전송하는 서비스인 Azure Application Insights**와 같이 많이 사용되는 일부 제품은 내부적으로 Azure Monitor를 사용합니다. Application Insights를 사용하면 사용자가 오류를 보고할 때까지 기다릴 필요 없이 애플리케이션 개발자가 Azure Monitor의 강력한 데이터 분석 플랫폼을 활용하여 애플리케이션의 작업에 대한 심층적인 인사이트를 확보하고 오류를 진단할 수 있습니다.

## Functionality and Usage of the Azure Service Health

- [Azure Service Health](https://azure.microsoft.com/features/service-health/)는 사용하는 **Azure 서비스, 지역 및 리소스의 상태에 대해 개인 설정된 보기를 제공**합니다. Azure 고객에게 광범위한 영향을 미치는 주요 문제만 표시되는 status.azure.com 웹 사이트에는 전체적인 그림이 제공되지 않습니다.
- 하지만 Azure Service Health에는 **사용자에게 영향을 미치는 크고 작은 현지화된 문제가 모두 표시**됩니다. 서비스 문제는 드물게 발생하지만 예기치 않은 문제에 대비하는 것이 중요합니다. 중단 및 계획된 유지 관리를 심사하는 데 도움이 되는 경고를 설정할 수 있습니다. **중단이 발생하면 Service Health는 RCA(근본 원인 분석)라는 공식 인시던트 보고서를 제공**하며, 관련자와 공유할 수 있습니다.
- Service Health는 **몇 가지 이벤트 유형을 주시하는 데 유용**합니다.
    - **서비스 문제** 는 현재 영향을 미치는 Azure의 문제(예: 중단)입니다. **영향을 받는 서비스, 지역, 엔지니어링 팀의 업데이트**를 드릴다운할 수 있고 최신 정보를 공유하고 추적하는 방법을 찾을 수 있습니다.
    - **계획된 유지 관리** 이벤트는 사용 가능성에 영향을 미칠 수 있습니다. **영향을 받는 서비스, 지역 및 세부 정보로 드릴다운하여 이벤트가 미치는 영향과 수행해야 하는 작업을 표시**할 수 있습니다. 이러한 이벤트의 대부분은 영향을 주지 않고 발생하며 여기에 표시되지 않습니다. 드물지만 재부팅이 필요한 경우 Service Health를 사용하면 유지 관리를 수행할 시기를 선택하여 가동 중지 시간을 최소화할 수 있습니다.
    - **상태 공지** 는 **서비스 폐기 및 호환성이 손상되는 변경을 포함한 서비스 중단을 방지하기 위해 조처를 해야 하는 문제**입니다. 상태 공지는 계획이 가능하도록 사전에 공지됩니다.

    ## 퀴즈

![Describe%20core%20solutions%20and%20management%20tools%20on%20Az%206973566aade04aed80e8f2237ea2dc9e/capture%205.png](Describe%20core%20solutions%20and%20management%20tools%20on%20Az%206973566aade04aed80e8f2237ea2dc9e/capture%205.png)