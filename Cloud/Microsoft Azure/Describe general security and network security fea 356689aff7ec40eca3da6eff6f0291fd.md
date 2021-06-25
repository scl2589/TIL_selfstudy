# Describe general security and network security features (10~15%)

# Describe Azure security features

이 모듈에서는 보안과 관련된 Azure 서비스에 관해 알아보았습니다. 간략히 요약하면 다음과 같습니다.

- Azure Security Center를 통해 Azure와 온-프레미스에서 전체 서비스의 보안 태세를 확인할 수 있습니다.
- Azure Sentinel은 다양한 원본의 보안 데이터를 집계하고 위협 탐지 및 대응을 위한 추가 기능을 제공합니다.
- Azure Key Vault는 암호, 암호화 키 및 인증서와 같은 애플리케이션의 비밀을 하나의 중앙 위치에 저장합니다.
- Azure Dedicated Host는 Windows 및 Linux용 Azure VM을 호스트하는 전용 물리적 서버를 제공합니다.

## Describe basic features of Azure Security Center, including policy compliance, security alerts, secure score, and resource hygiene

### Azure Security Center

- 온-프레미스, 보안 태세, 모니터링, 보안 점수, 기계타임, just-in-time 시험문제!!!
- [Azure Security Center](https://azure.microsoft.com/services/security-center)는 Azure와 **온-프레미스에서 전체 서비스의 보안 태세를 확인할 수 있는 모니터링 서비스**입니다. ‘보안 태세’는 사이버 보안 정책 및 제어뿐 아니라 보안 위협을 제대로 예측 및 방지하고 이에 대응할 수 있는 정도를 나타냅니다.
- Security Center는 다음 작업을 수행할 수 있습니다.
    - **온-프레미스 및 클라우드 워크로드**에서 **보안 설정**을 모니터링합니다.
    - **온라인 상태로 전환**되면 필요한 **보안 설정을 새 리소스에 자동으로 적용**합니다.
    - 구성, 리소스, 네트워크에 기반한 **보안 권장 사항을 제공**합니다.
    - 리소스를 지속적으로 모니터링하면서 자동 보안 평가를 수행하여 **잠재적 취약성이 악용되기 전에 미리 식별**합니다.
    - **기계 학습을 사용하여 맬웨어를 탐지**하고 맬웨어가 VM(가상 머신)과 기타 리소스에 설치되는 것을 차단합니다. ‘적응형 애플리케이션 제어’를 사용하여 허용하는 애플리케이션만 실행할 수 있도록 **허용되는 애플리케이션을 나열하는 규칙을 정의할** 수도 있습니다.
    - **잠재적 인바운드 공격을 탐지 및 분석**하고, 발생했을 수 있는 위협과 위반 후 활동을 조사합니다.
    - 네트워크 포트에 대한 **Just-In-Time 액세스 제어**를 제공합니다. 이렇게 하**면 필요할 때 필요한 트래픽만 네트워크에서 허용**하여 공격 노출 영역이 감소합니다.
- Security Center를 사용하여 네트워크를 강화하고, 클라우드 리소스를 보호 및 모니터링하고, 전반적인 보안 태세를 향상하는 방법을 설명합니다.

### 위협으로부터 보호

- **Just-in-time VM 액세스**

    Tailwind Traders는 VM에 대한 Just-In-Time 액세스를 구성합니다. 이 액세스는 기본적으로 VM의 특정 네트워크 포트에 대한 트래픽을 차단하지만, 관리자가 요청하고 승인하면 지정된 시간 동안 트래픽을 허용합니다.

- **적응 애플리케이션 컨트롤**

    Tailwind Traders는 VM에서 실행할 수 있는 애플리케이션을 제어할 수 있습니다. Security Center는 백그라운드에서 기계 학습을 사용하여 VM에서 실행되는 프로세스를 확인합니다. VM을 유지하는 각 리소스 그룹에 대한 예외 규칙을 만들고 권장 사항을 제공합니다. 이 프로세스는 VM에서 실행 중인 권한 없는 애플리케이션에 대해 회사에 알리는 경고를 제공합니다.

- **적응형 네트워크 강화**

    Security Center는 VM의 인터넷 트래픽 패턴을 모니터링하고 해당 패턴을 회사의 현재 NSG(네트워크 보안 그룹) 설정과 비교할 수 있습니다. 여기에서 Security Center는 NSG를 추가로 잠가야 할지에 관한 권장 사항을 만들고 수정 단계를 제공할 수 있습니다.

- **파일 무결성 모니터링**

    또한 Tailwind Traders는 Windows 및 Linux의 중요한 파일, 레지스트리 설정, 애플리케이션 및 보안 공격을 나타낼 수 있는 기타 측면에 관련된 변경 내용을 모니터링하도록 구성할 수 있습니다.

### Policy Compliance

- This metric conveys the organization’s adherence to the security policies assigned to its resources.

![https://azurecomcdn.azureedge.net/mediahandler/acomblog/media/Default/blog/0f24a62e-6817-4311-933b-03f9ffaa56df.png](https://azurecomcdn.azureedge.net/mediahandler/acomblog/media/Default/blog/0f24a62e-6817-4311-933b-03f9ffaa56df.png)

- Actionable insights reside on the right-hand side of each of their respective areas and include the following: security alerts, policy and compliance, resource hygiene

### Security Alerts

- Most prevalent alerts, subscriptions that have no security contact defined.
- Tailwind Traders는 Security Center를 사용하여 모든 보안 경고의 중앙 집중식 보기를 가져올 수 있습니다. 여기서 이 회사는 거짓 경고를 해제하거나, 추가로 조사하거나, 경고를 수동으로 수정하거나, *워크플로 자동화* 를 통해 자동화된 응답을 사용할 수 있습니다.
- 워크플로 자동화는 Azure Logic Apps 및 Security Center 커넥터를 사용합니다. 논리 앱은 위협 탐지 경고에 따라 트리거되거나 이름이나 심각도별로 필터링된 Security Center 권장 사항에 따라 트리거될 수 있습니다. 그런 다음 이메일을 보내거나 Microsoft Teams 채널에 메시지를 게시하는 등의 작업을 실행하도록 논리 앱을 구성할 수 있습니다.

### Secure Score

- [보안 점수](https://docs.microsoft.com/ko-kr/azure/security-center/secure-score-security-controls/)는 조직의 보안 태세를 측정한 것입니다.
- 보안 점수는 ‘보안 컨트롤’ 또는 관련된 보안 권장 사항 그룹을 기반으로 합니다. 점수는 충족하는 보안 컨트롤의 백분율을 기반으로 합니다. 충족하는 보안 컨트롤이 많을수록 받는 점수가 높아집니다. 컨트롤 내 단일 리소스의 모든 권장 사항을 수정하면 점수가 향상됩니다.
- 점수 57% 또는 60포인트 중 34포인트를 보여 주는 Azure Portal의 예는 다음과 같습니다.

    ![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/protect-against-security-threats-azure/media/2-single-secure-score-via-ui.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/protect-against-security-threats-azure/media/2-single-secure-score-via-ui.png)

- 보안 점수 권장 사항을 따르면 위협으로부터 조직을 보호하는 데 도움이 될 수 있습니다. Azure Security Center의 중앙 집중화된 대시보드에서 조직은 ID, 데이터, 앱, 디바이스 및 인프라와 같은 Azure 리소스의 보안을 모니터링하고 작업할 수 있습니다.
- 보안 점수를 통해 다음을 수행할 수 있습니다.
    - 조직 보안 태세의 현재 상태를 보고합니다.
    - 검색 기능, 가시성, 지침 및 제어를 제공하여 보안 태세를 개선합니다.
    - 벤치마크와 비교하고 KPI(핵심 성과 지표)를 설정합니다.

### Resource Hygiene

- Most prevalent recommendations and highest impact recommendations.

## Describe the functionality and usage of Key Vault

- 클라우드에서 워크로드를 빌드할 때 **암호, 암호화 키, 인증서와 같은 중요한 정보를 신중하게 처리**해야 합니다. **애플리케이션이 작동하려면 이 정보가 필요하지만, 이 정보 때문에 권한 없는 사용자가 애플리케이션 데이터에 액세스**하게 될 수도 있습니다.
- Azure Key Vault는 하나의 중앙 위치에 애플리케이션 비밀을 저장하는 **중앙 집중식 클라우드 서비스**입니다. 액세스 제어 및 로깅 기능을 제공하여 중요한 정보에 대한 보안 액세스를 제공합니다.

### **Azure Key Vault는 무엇을 할 수 있나요?**

Azure Key Vault를 통해 다음을 수행할 수 있습니다.

- **비밀 관리**

    Key Vault를 사용하여 토큰, 암호, 인증서, API 키, 기타 비밀을 안전하게 저장하고 액세스를 엄격히 제어할 수 있습니다.

- **암호화 키 관리**

    Key Vault를 키 관리 솔루션으로 사용할 수 있습니다. Key Vault를 사용하면 데이터를 암호화하는 데 사용되는 암호화 키를 더 쉽게 만들고 제어할 수 있습니다.

- **SSL/TLS 인증서 관리**

    Key Vault를 사용하면 Azure 리소스 및 내부 리소스에 둘 다 사용할 퍼블릭 및 프라이빗 SSL/TLS(Secure Sockets Layer/전송 계층 보안) 인증서를 프로비저닝, 관리 및 배포할 수 있습니다.

- **HSM(하드웨어 보안 모듈)에서 지원되는 비밀 저장**.

    해당 비밀과 키는 소프트웨어 또는 FIPS 140-2 Level 2 검증을 받은 HSM을 통해 보호할 수 있습니다.

Key Vault에서 테스트에 사용되는 인증서를 보여 주는 예는 다음과 같습니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/protect-against-security-threats-azure/media/4-key-vault-certificates.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/protect-against-security-threats-azure/media/4-key-vault-certificates.png)

이 모듈의 뒷부분에서 Key Vault에 비밀을 추가합니다.

### **Azure Key Vault의 이점은 무엇인가요?**

Key Vault 사용 시 다음과 같은 이점이 있습니다.

- **애플리케이션 비밀 중앙 집중화**

    애플리케이션 비밀 스토리지를 중앙 집중화하면 배포를 제어하고 비밀이 실수로 누출될 가능성을 줄일 수 있습니다.

- **안전하게 비밀 및 키 저장**

    Azure는 업계 표준 알고리즘, 키 길이 및 HSM을 사용합니다. Key Vault에 액세스하려면 적절한 인증 및 권한 부여가 필요합니다.

- **액세스 모니터링 및 액세스 제어**

    Key Vault를 사용하여 애플리케이션 비밀에 대한 액세스를 모니터링하고 제어할 수 있습니다.

- **애플리케이션 비밀의 관리 간소화**

    Key Vault를 사용하면 공용 CA(인증 기관)의 인증서를 간단하게 등록하고 갱신할 수 있습니다. 또한 Azure 지역 내에서 콘텐츠를 스케일 업 및 복제하고 표준 인증서 관리 도구를 사용할 수 있습니다.

- **다른 Azure 서비스와 통합**

    스토리지 계정, 컨테이너 레지스트리, 이벤트 허브, 기타 여러 Azure 서비스를 Key Vault와 통합할 수 있습니다. 해당 서비스는 Key Vault에 저장된 비밀을 안전하게 참조할 수 있습니다.

## Describe the functionality and usage of Azure Sentinel

- **클라우드 기반, 보안 정보 및 이벤트 관리, 인텔리전스 이용, 대규모로 수집 (온프레미스도 수집), 탐지, 위협 조사, 대응이 가능, 솔루션 원본들은 AWS도 가능, 위험이 감지되면 메시지 전송**
- **보안 위협 탐지 및 대응**
- 대규모로 보안을 관리하면 전용 SIEM(보안 정보 및 이벤트 관리) 시스템의 이점을 활용할 수 있습니다. SIEM 시스템은 오픈 표준 로깅 형식을 지원하는 여러 소스의 보안 데이터를 집계합니다. 또한 위협 탐지 및 대응 기능을 제공합니다.

### **Azure Sentinel 기능**

- Azure Sentinel을 사용하여 다음을 수행할 수 있습니다.
    - **대규모로 클라우드 데이터 수집**

        **온-프레미스 및 여러 클라우드**에서 둘 다 모든 사용자, 디바이스, 애플리케이션 및 인프라에 걸쳐 데이터를 수집합니다.

    - **이전에 탐지되지 않은 위협 탐지**

        Microsoft의 포괄적인 분석 및 위협 **인텔리전스(AI)를 사용**하여 가양성을 최소화합니다.

    - **인공 지능을 사용하여 위협 조사**

        수년 동안 쌓인 Microsoft의 사이버 보안 경험을 활용하여 **의심스러운 활동을 대규모로 검토**합니다.

    - **신속하게 인시던트에 대응**

        일반 작업의 기본 제공 오케스트레이션 및 자동화를 사용합니다.

### **데이터 원본 연결**

Tailwind Traders는 Azure Sentinel의 기능을 살펴보기로 합니다. 먼저 회사에서 데이터 원본을 식별하고 연결합니다.

Azure Sentinel은 **보안 이벤트를 분석할 수 있는 다양한 데이터 원본을 지원**합니다. 해당 연결은 기본 제공 커넥터 또는 업계 표준 로그 형식 및 API를 통해 처리됩니다.

- **Microsoft 솔루션 연결**

    커넥터는 Microsoft Threat Protection 솔루션, Microsoft 365 원본(Office 365 포함), Azure Active Directory, Windows Defender 방화벽 등의 **서비스를 위한 실시간 통합 기능을 제공**합니다.

- **다른 서비스 및 솔루션 연결**

    커넥터는 AWS CloudTrail, Citrix Analytics(Security), Sophos XG Firewall, VMware Carbon Black Cloud, OKTA SSO 등을 비롯한 일반 타사 서비스 및 솔루션에 사용할 수 있습니다.

- **업계 표준 데이터 원본 연결**

    Azure Sentinel은 CEF(Common Event Format) 메시징 표준, Syslog 또는 REST API를 사용하는 다른 원본의 데이터를 지원합니다.

### **위협 감지**

- Tailwind Traders는 **의심스러운 항목이 발생할 때 관련된 알림**을 받아야 합니다. 기본 제공 분석 및 사용자 지정 규칙을 모두 사용하여 위협을 탐지하기로 결정합니다.
- **기본 제공 분석** 은 알려진 위협, 일반적인 공격 벡터 및 의심스러운 활동에 대한 에스컬레이션 체인을 바탕으로 Microsoft의 보안 전문가 및 분석가 팀이 설계한 템플릿을 사용합니다. 해당 템플릿은 사용자 지정되며 환경에서 의심스러워 보이는 모든 활동을 검색할 수 있습니다. Microsoft 소유의 알고리즘을 기반으로 하는 기계 학습 동작 분석을 사용하는 템플릿도 있습니다.
- **사용자 지정 분석** 은 환경 내에서 특정 조건을 검색하기 위해 만드는 규칙입니다. 쿼리에서 과거의 로그 이벤트를 기반으로 생성하는 결과 수를 미리 보고 쿼리를 실행할 일정을 설정할 수 있습니다. 경고 임계값도 설정할 수 있습니다.

### **조사 및 대응**

Azure Sentinel에서 의**심스러운 이벤트를 탐지**할 때 Tailwind Traders는 **특정 경고 또는 *인시던트*(관련된 경고 그룹)를 조사**할 수 있습니다. 회사에서는 조사 그래프를 사용하여 경고에 직접 연결된 엔터티의 정보를 검토하고 조사를 안내하는 데 도움이 되는 일반적인 탐색 쿼리를 확인할 수 있습니다.

다음은 Azure Sentinel에서 조사 그래프가 어떻게 표시되는지 보여주는 예입니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/protect-against-security-threats-azure/media/3-investigate-incidents.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/protect-against-security-threats-azure/media/3-investigate-incidents.png)

또한 이 회사는 [Azure Monitor Workbooks](https://docs.microsoft.com/ko-kr/azure/azure-monitor/platform/workbooks-overview/)를 사용하여 위협에 대한 대응을 자동화합니다. 예를 들어 네트워크에 액세스하는 악의적인 IP 주소를 검색하는 경고를 설정하고 다음 단계를 수행하는 통합 문서를 만들 수 있습니다.

1. 경고가 트리거되면 IT 티켓팅 시스템에서 티켓을 엽니다.
2. Microsoft Teams 또는 Slack에서 보안 작업 채널로 메시지를 보내서 보안 분석가가 인시던트를 인식하도록 합니다.
3. 경고의 모든 정보를 수석 네트워크 관리자 및 보안 관리자에게 보냅니다. 이메일 메시지에는 두 가지 사용자 옵션 단추인 **차단** 또는 **무시** 도 포함됩니다.

관리자가 **차단** 을 선택하면 IP 주소가 방화벽에서 차단되며 Azure Active Directory에서 해당 사용자를 사용할 수 없습니다. 관리자가 **무시** 를 선택하면 Azure Sentinel에서 경고가 닫히고 IT 티켓팅 시스템에서 인시던트가 닫힙니다.

통합 문서는 관리자로부터 응답을 받은 후에도 계속 실행됩니다.

규칙이 경고를 트리거할 때 통합 문서를 수동 또는 자동으로 실행할 수 있습니다.

## Describe the functionality and usage of Azure Dedicated Hosts

**Azure에서 VM(가상 머신)은 Microsoft가 관리하는 공유 하드웨어에서 실행**됩니다. 기본 하드웨어는 공유되지만 VM 워크로드는 다른 Azure 고객이 실행하는 워크로드에서 격리됩니다.

일부 조직은 해당 가상 머신을 호스트하는 물리적 머신을 사용하는 유일한 고객이 되도록 요구하는 규정 준수를 수행해야 합니다. [Azure Dedicated Host](https://azure.microsoft.com/services/virtual-machines/dedicated-host/)는 Windows 및 Linux용 Azure VM을 호스트하는 **전용 물리적 서버를 제공**합니다.

다음은 VM이 전용 호스트 및 호스트 그룹과 어떻게 관련되는지 보여주는 다이어그램입니다. *전용 호스트* 는 Azure 데이터 센터의 물리적 서버에 매핑됩니다. *호스트 그룹* 은 전용 호스트 컬렉션입니다.

**Azure Dedicated Host의 이점은 무엇인가요?**
Azure Dedicated Host:
• Azure VM을 실행하는 **서버 인프라에 대한 가시성 및 제어**를 제공합니다. → **우리 서버가 어디있는지 알게된다**
• 격리된 서버에 워크로드를 배포하여 규정 준수 요구 사항을 해결하도록 지원합니다.
• 동일한 호스트 내에서 프로세서 수, 서버 기능, VM 시리즈 및 VM 크기를 선택할 수 있도록 합니다.
**Dedicated Host의 가용성 고려 사항**
전용 호스트가 프로비저닝된 후 Azure는 이를 Microsoft 클라우드 데이터 센터의 물리적 서버에 할당합니다.
고가용성을 위해 ‘호스트 그룹’에서 여러 호스트를 프로비저닝하고 해당 그룹에서 VM을 배포할 수 있습니다. 또한 전용 호스트의 VM은 *유지 관리 제어* 를 활용할 수 있습니다. 이 기능을 사용하면 35일 롤링 기간 내에서 정기적인 유지 관리 업데이트가 발생하는 시기를 제어할 수 있습니다.
**가격 책정 고려 사항**
**전용 호스트에 배포할 VM 수와 관계없이** **전용 호스트별로 요금이 청구**됩니다. 호스트 가격은 VM 제품군, 유형(하드웨어 크기) 및 지역을 기준으로 합니다.
소프트웨어 라이선스, 스토리지 및 네트워크 사용은 호스트 및 VM과 별도로 요금이 청구됩니다. 자세한 내용은 [Azure Dedicated Host 가격 책정](https://aka.ms/ADHPricing/)을 참조하세요.
**다음 단원: 지식 점검**
[계속](https://docs.microsoft.com/ko-kr/learn/modules/protect-against-security-threats-azure/7-knowledge-check/)

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/protect-against-security-threats-azure/media/6-dedicated-hosts.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/protect-against-security-threats-azure/media/6-dedicated-hosts.png)

## 퀴즈

![Describe%20general%20security%20and%20network%20security%20fea%20356689aff7ec40eca3da6eff6f0291fd/capture.png](Describe%20general%20security%20and%20network%20security%20fea%20356689aff7ec40eca3da6eff6f0291fd/capture.png)

![Describe%20general%20security%20and%20network%20security%20fea%20356689aff7ec40eca3da6eff6f0291fd/capture%201.png](Describe%20general%20security%20and%20network%20security%20fea%20356689aff7ec40eca3da6eff6f0291fd/capture%201.png)

# Describe Azure network security

- Azure Firewall은 Azure Virtual Network의 리소스를 보호하는 관리형 클라우드 기반 네트워크 보안 서비스입니다.
- Azure 가상 네트워크는 데이터 센터에서 작동하는 기존 네트워크와 비슷합니다. 가상 머신과 기타 컴퓨팅 리소스가 상호 간 통신, 인터넷 통신 및 온-프레미스 네트워크 통신을 안전하게 수행할 수 있게 합니다.
- NSG(네트워크 보안 그룹)를 사용하면 가상 네트워크 내에서 Azure 리소스와 주고받는 네트워크 트래픽을 필터링할 수 있습니다.
- Azure DDoS Protection은 DDoS 공격으로부터 Azure 리소스를 보호하는 데 도움이 됩니다.

## Describe the concept of defense in depth (심층방어)

Tailwind Traders는 현재 데이터 센터에서 온-프레미스 워크로드를 실행합니다. 온-프레미스로 실행한다는 것은 건물에 대한 **물리적 출입부터 데이터가 네트워크를 오가는 방식까지 보안의 모든 측면을 담당**한다는 것을 의미합니다. 이 회사는 클라우드에서 실행할 경우 기존 심층 방어 전략과 대비하여 어떤 이점이 있는지 알고 싶어합니다.

‘**심층 방어’의 목적은 정보를 보호**하고 **무단 접근을 통한 도난을 방지**하는 것입니다.

심층 방어는 **데이터에 무단으로 액세스하기 위한 공격 진행 속도를 늦추는 여러 메커니즘을 사용하는 전략**입니다.

## **심층 방어 계층**

심층 방어는 보호할 데이터를 중심으로 하는 일련의 계층으로 시각화할 수 있습니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-defense-depth.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-defense-depth.png)

각 레이어가 보호를 제공하므로 한 레이어에서 **침해 사고가 발생하더라도 후속 레이어가 이미 작동**하고 있기 때문에 **추가 노출을 방지**합니다. 해당 접근 방식으로 단일 보호 계층에만 의존하지 않을 수 있습니다. 공격 속도를 늦추고 보안 팀이 자동 또는 수동으로 조치할 수 있도록 경고 원격 분석을 제공합니다.

각 계층의 역할에 대한 간략한 개요는 다음과 같습니다.

- *물리적 보안* 계층은 데이터 센터의 컴퓨팅 하드웨어를 보호하기 위한 첫 번째 방어선입니다.
- *ID 및 액세스* 계층은 인프라와 변경 제어에 대한 액세스를 제어합니다.
- *경계* 계층은 **DDoS(분산 서비스 거부) 보호 기능**을 사용하여 최종 사용자에게 서비스 거부가 발생하기 전에 대규모 공격을 필터링합니다. + **방화벽**
- *네트워크* 계층은 구분 및 액세스 제어를 통해 리소스 간의 통신을 제한합니다.
- *컴퓨팅* 계층은 **가상 머신**에 대한 액세스를 보호합니다.
- *애플리케이션* 계층은 애플리케이션을 보호하고 **보안 취약점을 제거**합니다.
- *데이터* 계층은 보호해야 하는 **비즈니스 및 고객 데이터에 대한 액세스를 제어**합니다.

이러한 계층은 애플리케이션의 모든 계층에 대한 보안 구성을 결정하는 데 도움이 되는 지침을 제공합니다.

Azure는 심층 방어 개념의 모든 수준에서 보안 도구 및 기능을 제공합니다. 각 계층을 더 자세히 살펴보겠습니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-physical-security.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-physical-security.png)

**물리적 보안**

물리적으로 건물에 대한 액세스를 보호하고 데이터 센터 내의 컴퓨팅 하드웨어에 대한 액세스를 제어하는 것이 첫 번째 방어선입니다.

물리적 보안을 사용하는 목적은 자산 액세스에 대한 물리적 보호 수단을 제공하는 것입니다. 이 보호 수단은 다른 레이어가 무시되지 않고 손실 또는 도난이 적절하게 처리되도록 합니다. Microsoft는 클라우드 데이터 센터에서 다양한 물리적 보안 메커니즘을 사용합니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-policies-access.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-policies-access.png)

**ID 및 액세스**

해당 계층에서는 다음 작업을 수행하는 것이 중요합니다.

- 인프라에 대한 접근 및 제어 변경을 통제합니다.
- **SSO(Single Sign-On) 및 다단계 인증을 사용합니다. → 지문, 안면인식 등**
- 이벤트 및 변경 내용을 감사합니다.

ID 및 액세스 레이어는 ID를 안전하게 보호하고, 필요한 것에만 액세스 권한을 부여하고, 로그인 이벤트 및 변경 내용이 기록되도록 합니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-perimeter.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-perimeter.png)

**경계**

해당 계층에서는 다음 작업을 수행하는 것이 중요합니다.

- DDoS 방지 기능을 사용하여 사용자의 시스템 가용성에 영향을 주기 전에 대규모 공격을 필터링합니다.
- 경계 방화벽을 사용하여 네트워크에 대한 악의적인 공격을 식별하고 경고합니다.

네트워크 경계에서, 리소스에 대한 네트워크 기반 공격을 방어합니다. 이러한 공격을 파악하여 영향을 제거하고 발생한 공격을 경고하는 것이 네트워크를 안전하게 유지하는 중요한 방법입니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-networking.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-networking.png)

**Network**

해당 계층에서는 다음 작업을 수행하는 것이 중요합니다.

- **리소스 간의 통신을 제한**합니다.
- 기본적으로 거부합니다.
- 인바운드 인터넷 액세스를 금지하고 필요한 경우 아웃바운드 액세스를 제한합니다.
- 온-프레미스 네트워크에 대한 보안 연결을 구현합니다.

해당 레이어의 핵심은 모든 리소스에 대한 네트워크 연결을 제한하여 필요한 것만 허용하는 것입니다. 관련 통신을 제한하여 네트워크의 다른 시스템으로 공격이 퍼질 위험을 줄일 수 있습니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-compute.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-compute.png)

**컴퓨팅**

해당 계층에서는 다음 작업을 수행하는 것이 중요합니다.

- **가상 머신에 대한 액세스를 보호**합니다.
- 디바이스에 엔드포인트 보호를 구현하고 **시스템을 패치하고 최신 상태로 유지**합니다.

맬웨어, 패치가 적용되지 않은 시스템, 적절하게 보호되지 않는 시스템 때문에 환경이 공격에 노출됩니다. 해당 레이어의 핵심은 컴퓨팅 리소스를 안전하게 보호하고 보안 문제를 최소화하는 적절한 제어를 마련하는 것입니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-application.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-application.png)

**애플리케이션**

해당 계층에서는 다음 작업을 수행하는 것이 중요합니다.

- 애플리케이션이 안전하고 **취약성이 없는지 확인**합니다.
- 중요한 **애플리케이션 비밀을 안전한 저장 매체에 저장**하세요.
- 보안 항목을 모든 애플리케이션 개발의 디자인 요구사항에 포함합니다.

애플리케이션 개발 수명 주기에 보안을 통합하면 코드의 취약점을 줄일 수 있습니다. 모든 개발 팀은 기본적으로 애플리케이션이 안전하도록 조치해야 합니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-data.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/2-data.png)

**데이터**

**대부분의 경우 공격자는 다음과 같은 데이터를 목표로** 합니다.

- **데이터베이스에 저장된 데이터**
- **가상 머신 내부의 디스크에 저장된 데이터**
- Office 365와 같은 **SaaS(Software as a Service) 애플리케이션에 저장된 데이터**
- 클라우드 스토리지를 통해 관리되는 데이터

데이터를 저장하고 액세스 권한을 제어하는 사람은 데이터를 안전하게 보호할 책임이 있습니다. 종종 데이터의 기밀성, 무결성 및 가용성을 보장하기 위한 제어 및 프로세스를 적용할 것을 지시하는 규제 요구 사항이 있습니다.

## **보안 상태**

‘보안 태세’는 보안 위협으로부터 보호하고 이에 대응하는 조직의 역량입니다. 보안 태세를 방어하는 데 사용되는 일반적인 원칙은 **‘기밀성(confidentiality)’, ‘무결성(integrity)’, ‘가용성(availability)**’이며 세 가지를 묶어서 CIA라고 부릅니다.

- **기밀성**

    ***최소 권한 원칙*** 은 **오직 작업을 수행하는 데 필요한 수준에서 액세스 권한이 있는 개인으로만 정보에 대한 액세스를 제한하는 것을 의미**합니다. 해당 정보에는 사용자 암호, 전자 메일 콘텐츠 및 애플리케이션 및 기본 인프라에 대한 액세스 수준의 보호가 포함됩니다.

- **무결성**

    **정보의 무단 변경 방지:**

    - 미사용: 저장된 상태입니다.
    - 전송 중: 로컬 컴퓨터에서 클라우드로 전송되는 것을 포함하여 한 위치에서 다른 위치로 전송되고 있는 상태입니다.

    데이터 전송에 사용되는 일반적인 방법은 발신자가 단방향 해시 알고리즘을 사용하여 고유한 데이터 지문을 만드는 것입니다. 해시는 데이터와 함께 수신자에게 전송됩니다. 수신자는 데이터의 해시를 다시 계산하고 원본과 비교하여 **데이터가 전송 중에 손실 또는 수정되지 않았는지 확인합**니다.

- **가용성**

    서비스가 작동하고 있고 **권한 있는 사용자만 액세스할 수 있는지 확인**합니다. *서비스 거부 공격* 은 시스템의 가용성을 저해하여 사용자에게 영향을 미치도록 설계되었습니다.

## Describe the functionality and usage of Network Security Groups (NSG)

## **네트워크 보안 그룹이란?**

[네트워크 보안 그룹](https://docs.microsoft.com/ko-kr/azure/virtual-network/security-overview#network-security-groups?azure-portal=true)을 사용하면 Azure Virtual Network 내에서 Azure 리소스와 주고받는 네트워크 트래픽을 필터링할 수 있습니다. NSG를 내부 방화벽이라고 생각하면 됩니다. 각 NSG에는 원본 및 대상 IP 주소, 포트 및 프로토콜을 기준으로 리소스와 주고 받는 트래픽을 필터링할 수 있는 여러 개의 인바운드 및 아웃바운드 보안 규칙이 포함될 수 있습니다.

## **NSG 규칙은 어떻게 지정하나요?**

네트워크 보안 그룹은 Azure 구독 제한 내에서 필요한 만큼의 규칙을 포함할 수 있습니다. 각 규칙은 다음 속성을 지정합니다.

[제목 없음](https://www.notion.so/0a316918125f475d8cb31ac60ba47ae9)

**네트워크 보안 그룹을 만들 때 Azure는 기본 보안 수준을 제공하기 위한 일련의 기본 규칙을 만듭니다.** 기본 규칙은 제거할 수 없지만 **더 높은 우선 순위의 새 규칙을 만들어 재정의**할 수 있습니다.

## Describe the functionality and usage of Azure Firewall

‘방화벽’은 **들어오고 나가는 네트워크 트래픽을 모니터**링하고 정의된 보안 규칙에 따라 **특정 트래픽을 허용할지 아니면 차단할지를 결정하는 네트워크 보안 디바이스**입니다. IP 주소 범위를 지정하는 방화벽 규칙을 만들 수 있습니다. 해당 범위 내에서 IP 주소가 부여된 클라이언트만 대상 서버에 액세스할 수 있습니다. 방화벽 규칙에는 특정 네트워크 프로토콜 및 포트 정보도 포함될 수 있습니다.

Tailwind Traders는 현재 하드웨어와 소프트웨어를 결합하여 온-프레미스 네트워크를 보호하는 방화벽 어플라이언스를 실행하고 있습니다. 해당 방화벽 어플라이언스를 운영하려면 월간 라이선스 요금을 지불해야 하며, IT 담당자가 일상적인 유지 관리를 수행해야 합니다. Tailwind Traders가 클라우드로 전환함에 따라 IT 관리자는 클라우드 네트워크와 온-프레미스 네트워크를 모두 보호할 수 있는 Azure 서비스가 어떤 것인지 알고 싶어합니다.

이 단원에서는 Azure Firewall을 살펴봅니다.

## **Azure Firewall이란?**

[Azure Firewall](https://azure.microsoft.com/services/azure-firewall)은 Azure 가상 네트워크의 리소스 보호에 도움이 되는 **관리형 클라우드 기반 네트워크 보안 서비스**입니다. 가상 네트워크는 데이터 센터에서 운영하는 기존 네트워크와 비슷합니다. 이는 프라이빗 네트워크의 기본 구성 요소로서, 가상 머신 및 기타 컴퓨팅 리소스가 서로 간, 인터넷 및 온-프레미스 네트워크와 안전하게 통신하도록 지원합니다.

다음은 기본 Azure Firewall 구현을 보여주는 다이어그램입니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/3-firewall-overview.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/3-firewall-overview.png)

Azure Firewall은 ‘상태 저장’ 방화벽입니다. **상태 저장 방화벽**은 **네트워크 트래픽의 개별 패킷뿐**만 아니라 **네트워크 연결의 전체 컨텍스트를 분석**합니다. Azure Firewall은 **고가용성과 제약 없는 클라우드 스케일링 성능**을 특징으로 합니다.

Azure Firewall은 구독 및 가상 네트워크 전반에서 애플리케이션 및 네트워크 연결 정책을 만들고 적용하고 기록하는 중앙 위치를 제공합니다. Azure Firewall은 가상 네트워크 리소스에 대한 고**정적인(변경되지 않는) 공용 IP 주소를 사용**합니다. 이를 통해 외부 방화벽은 가상 네트워크에서 들어오는 트래픽을 식별할 수 있습니다. 이 서비스는 **Azure Monitor와 통합되어 로깅 및 분석을 지원**합니다.

Azure Firewall은 다음을 비롯한 다양한 기능을 제공합니다.

- 기본 제공되는 고가용성
- 제약 없는 클라우드 스케일링 성능
- 인바운드 및 아웃바운드 필터링 규칙
- 인바운드 DNAT(Destination Network Address Translation) 지원
- Azure Monitor 로깅이 가능합니다.

일반적으로 중앙 가상 네트워크에 Azure Firewall을 배포하여 일반 네트워크 액세스를 제어할 수 있습니다.

이 짧은 동영상에서는 Azure Firewall이 정의된 보안 규칙 집합을 기반으로 들어오고 나가는 네트워크 트래픽을 모니터링하는 방법을 설명합니다. 또한 이 동영상에서 Azure Firewall을 기존 방화벽 어플라이언스와 비교합니다.

## **Azure Firewall을 사용하여 무엇을 구성할 수 있나요?**

Azure Firewall을 사용하면 다음을 구성할 수 있습니다.

- 서브넷에서 액세스할 수 있는 FQDN(정규화된 도메인 이름)을 정의하는 애플리케이션 규칙.
- 원본 주소, 프로토콜, 대상 포트 및 대상 주소를 정의하는 네트워크 규칙.
- 인바운드 요청을 변환할 대상 IP 주소와 포트를 정의하는 NAT(Network Address Translation) 규칙.

[Azure Application Gateway](https://azure.microsoft.com/services/application-gateway)는 *WAF(웹 애플리케이션 방화벽)* 라는 방화벽도 제공합니다. WAF는 일반적인 악용 및 취약점에 대한 웹 애플리케이션용 중앙 집중식 인바운드 보호 기능을 제공합니다. [Azure Front Door](https://azure.microsoft.com/services/frontdoor/) 및 [Azure Content Delivery Network](https://azure.microsoft.com/services/cdn/)도 WAF 서비스를 제공합니다.

## Describe the functionality and usage of Azure DDos protection

대기업은 **대규모 네트워크 공격의 대상**이 될 수 있으며 Tailwind Traders도 예외가 아닙니다. 공격자는 메시지를 전달하거나 단지 도전할 목적으로 네트워크를 마비시키려 할 수 있습니다. Tailwind Traders는 클라우드로 전환함에 따라 Azure가 DDoS(분산 서비스 거부) 및 기타 공격을 방지하는 데 어떤 도움이 되는지 알고 싶어합니다.

이 단원에서는 Azure DDoS Protection(Standard 서비스 계층)을 사용하여 DDoS 공격으로부터 Azure 리소스를 보호하는 방법을 알아봅니다. 먼저 DDoS 공격에 대한 정의를 살펴보겠습니다.

## **DDoS 공격이란?**

[분산 서비스 거부](https://azure.microsoft.com/services/ddos-protection) 공격은 애플리케이션의 리소스에 **과도한 부하를 걸어 고갈시키고 합법적인 사용자에게 애플리케이션이 느리게 응답하거나 응답하지 않게 만드는 공격**입니다. DDoS 공격은 웹 사이트를 포함하여 인터넷을 통해 공개적으로 도달할 수 있는 모든 리소스를 대상으로 할 수 있습니다.

## **Azure DDoS Protection이란?**

[Azure DDoS Protection](https://azure.microsoft.com/services/ddos-protection/)(Standard)은 DDoS 공격으로부터 Azure 리소스를 보호하는 데 도움이 됩니다.

Azure DDoS Protection을 애플리케이션 설계 모범 사례와 결합하면 DDoS 공격을 방어하는 데 도움이 됩니다. DDoS Protection은 Microsoft의 유연한 대규모 글로벌 네트워크를 활용하여 모든 Azure 지역에 DDoS 완화 능력을 제공합니다. DDoS Protection 서비스는 Azure 네트워크 에지의 DDoS 트래픽이 서비스의 가용성에 영향을 주기 전에 해당 트래픽을 분석하고 삭제하여 Azure 애플리케이션을 보호합니다.

관련 다이어그램은 고객과 공격자 모두에서 Azure로 흘러가는 네트워크 트래픽을 보여줍니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/4-distributed-denial-service.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-network-connectivity-azure/media/4-distributed-denial-service.png)

DDoS Protection은 네트워크에 과도한 부하를 걸려고 하는 공격자의 시도를 식별하고 해당 트래픽이 Azure 리소스에 도달하는 것을 차단합니다. 고객의 합법적인 트래픽이 어떠한 서비스 중단도 없이 Azure로 계속 흐릅니다.

DDoS Protection은 클라우드 소비량을 관리하는 데에도 도움이 됩니다. 온-프레미스로 운영하는 경우 컴퓨팅 리소스의 수가 고정되어 있습니다. 그러나 클라우드에서는 탄력적 컴퓨팅을 통해 배포를 자동으로 스케일 아웃하여 수요를 충족할 수 있습니다. 정교하게 설계된 DDoS 공격으로 인해 리소스 할당이 증가하여 불필요한 비용이 발생할 수 있습니다. DDoS Protection Standard는 처리하는 네트워크 부하가 고객의 사용량을 반영하는 데 도움이 됩니다. DDoS 공격 중에 늘어난 리소스에 대해 발생하는 모든 비용에 대한 크레딧을 받을 수도 있습니다.

## **DDoS Protection이 제공되는 서비스 계층은 무엇인가요?**

DDoS Protection은 다음 서비스 계층을 제공합니다.

- **기본**

    Basic 서비스 계층은 **Azure 구독의 일부로 무료로 사용하도록 자동 설정**됩니다.

    일반적인 네트워크 수준 공격에 대한 항시 트래픽 모니터링과 실시간 완화는 Microsoft의 온라인 서비스에서 사용하는 것과 동일한 방어를 제공합니다. Basic 서비스 계층은 대규모 DDoS 공격 중에 Azure 인프라가 영향을 받지 않도록 합니다.

    Azure의 글로벌 네트워크는 Azure 지역 전반에서 공격 트래픽을 분산하고 완화하는 데 사용됩니다.

- **Standard**

    **Standard 서비스 계층은 Azure Virtual Network 리소스에 맞게 특별히 조정된 추가적인 완화 기능을 제공**합니다. DDoS Protection Standard는 비교적 쉽게 사용할 수 있으며 애플리케이션을 변경할 필요가 없습니다.

    Standard 계층은 일반적인 네트워크 수준 공격에 대한 **상시 트래픽 모니터링**과 **실시간 완화 기능을 제공**합니다. Microsoft의 온라인 서비스에서 사용하는 것과 동일한 방어 기능을 제공합니다.

    보호 정책은 **전용 트래픽 모니터링** 및 기계 학습 알고리즘을 통해 조정됩니다. 정책은 Azure Load Balancer, Application Gateway 등의 가상 네트워크에 배포된 리소스와 연결된 공용 IP 주소에 적용됩니다.

    Azure의 글로벌 네트워크는 Azure 지역 전반에서 공격 트래픽을 분산하고 완화하는 데 사용됩니다.

## **DDoS Protection은 어떤 종류의 공격을 방지하는 데 도움이 되나요?**

Standard 서비스 계층은 다음을 방지하는 데 도움이 될 수 있습니다.

- **대규모 공격**

    해당 공격의 목표는 정상적으로 보이는 대량의 트래픽으로 네트워크 계층을 마비시키는 것입니다.

- **프로토콜 공격**

    해당 공격은 계층 3 및 계층 4 프로토콜 스택의 취약점을 악용하여 대상을 액세스 불능 상태로 만듭니다.

- **리소스 계층(애플리케이션 계층) 공격(웹 애플리케이션 방화벽을 사용하는 경우에만)**

    이 공격은 대상 웹 애플리케이션 패킷을 공격하여 호스트 간 데이터 전송을 방해합니다. L7 공격으로부터 보호하려면 WAF(웹 애플리케이션 방화벽)가 필요합니다. DDoS Protection Standard는 대규모 공격 및 프로토콜 공격으로부터 WAF를 보호합니다.

## 퀴즈

![Describe%20general%20security%20and%20network%20security%20fea%20356689aff7ec40eca3da6eff6f0291fd/capture%202.png](Describe%20general%20security%20and%20network%20security%20fea%20356689aff7ec40eca3da6eff6f0291fd/capture%202.png)