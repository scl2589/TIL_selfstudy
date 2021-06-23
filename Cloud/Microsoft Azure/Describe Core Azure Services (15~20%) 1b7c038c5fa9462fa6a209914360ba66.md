# Describe Core Azure Services (15~20%)

# Describe the core Azure architectural components

![Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/Untitled.png](Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/Untitled.png)

- 리소스는 항상 리소스 그룹에 종속되어야 하며,
- 리소스 그룹은 리소스에 종속되어야 한다.
- **리소스**: 리소스는 가상 머신, 스토리지 또는 SQL 데이터베이스와 같이 사용자가 만드는 서비스의 인스턴스입니다.
- **리소스 그룹**: 리소스는 리소스 그룹으로 결합합니다. 리소스 그룹은 웹앱, 데이터베이스, 스토리지 계정과 같은 Azure 리소스가 배포되고 관리되는 **논리적 컨테이너 역할**을 합니다.
- **구독**: 구독은 사용자 계정과 해당 사용자 계정에서 만든 리소스를 그룹화합니다. 각 구독에 대해 만들고 사용할 수 있는 리소스의 양에 대한 제한 또는 할당량이 있습니다. 조직에서는 구독을 사용하여 사용자, 팀 또는 프로젝트에서 만든 리소스 및 그로 인한 비용을 관리할 수 있습니다.
    - 구독마다 특정 리소스만 생성할 수 있다고 제한을 걸 수 있다.
- **관리 그룹**: 이 그룹은 **여러 구독에 대한 액세스, 정책 및 규정 준수를 관리**하는 데 도움이 됩니다. **관리 그룹에 속하는 모든 구독은 관리 그룹에 적용되는 조건을 자동으로 상속**합니다.

## Benefits and usage of Regions and Region Pairs

- 지리적인, 물리적인, physical한 영역을 말한다.

[https://docs.microsoft.com/ko-kr/azure/availability-zones/az-overview](https://docs.microsoft.com/ko-kr/azure/availability-zones/az-overview)

### **Azure 지역**

- 지역이란 가까운 곳에 있고 대기 시간이 짧은 네트워크를 통해 연결된 **데이터 센터를 하나 이상 포함하고 있는(여러 개 포함 가능) 지리적 영역**을 의미합니다. Azure는 **각 Azure 지역의 리소스를 지능적으로 할당하고 제어하여 워크로드의 적절한 균형을 유지**합니다.
- Azure에서 리소스를 배포할 때 리소스를 배포할 Azure 지역을 선택해야 하는 경우가 자주 있습니다.

**중요**

- **일부 서비스 또는 VM 기능**(예: 특정 VM 크기 또는 스토리지 형식)은 **특정 지역에서만 사용**할 수 있습니다. Azure Active Directory, Azure Traffic Manager, Azure DNS 같이 특정 Azure 지역을 선택할 필요가 없는 글로벌 Azure 서비스도 있습니다.
- Azure 지역의 예로는 미국 서부, 캐나다 중부, 서유럽, 오스트레일리아 동부 및 일본 서부 등이 있습니다. 2020년 6월 기준으로 사용 가능한 모든 Azure 지역은 다음과 같습니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/regions-small-be724495.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/regions-small-be724495.png)

- 각각의 포인트들은 물리적인 데이터 센터를 말한다.

### **지역이 중요한 이유는 무엇입니까?**

- Azure는 다른 클라우드 공급 기업보다 더 많은 글로벌 지역에서 서비스를 운영한다.
- 따라서 사용자가 어디에 있든 사용자와 더욱 가까운 위치에서 애플리케이션을 제공할 수 있다.
- 글로벌 지역은 향상된 **확장성 및 중복성을 제공**한다.
- 또한 서비스의 데이터 보존을 유지한다.

### **특수 Azure 지역**

- Azure에는 규정 준수 또는 법적 목적에 맞게 애플리케이션을 빌드할 때 사용할 수 있는 특수 Azure 지역이 있습니다. 다음과 같은 몇 가지 예가 있습니다.
    - **US DoD 중부, US Gov 버지니아, US Gov 아이오와 등:** 이러한 지역은 미국 정부 기관 및 파트너를 위한 물리적 및 논리적 네트워크로 격리된 Azure 인스턴스입니다. 이러한 데이터 센터는 선별된 미국인이 운영하며 추가 규정 준수 인증서를 포함하고 있습니다.
    - **중국 동부, 중국 북부 등:** 이러한 지역은 Microsoft 및 21Vianet 간의 고유한 파트너십을 통해 사용할 수 있으며, Microsoft에서 데이터 센터를 직접 관리하지 않습니다.
        - 중국 내부에서만 쓸 수 있고, 외부 클라우드와 연동할 수 없다.
- **지역**은 리**소스의 위치를 식별하는 데 사용**됩니다. 지역 및 가용성 영역에 대해 알아야 할 두 가지 다른 용어가 있습니다.

### **Azure 지역 쌍**

- **가용성 영역 (Availability zone)은 하나 이상의 데이터 센터를 사용하여 만들어진다.**
- **단일 지역에는 최소 세 개의 영역**이 있다.
- 두 데이터 센터 모두 중단될 수 있는 대규모 재해가 발생할 수도 있다.
- 이러한 이유로 Azure는 항상 *Azure 지역 쌍* 을 만든다.

### **Azure 지역 쌍이란?**

- 각 Azure 지역은 **300마일 이상 떨어져 있는 동일한 지리적 위치(예: 미국, 유럽 또는 아시아) 내의 다른 Azure 지역과 항상 쌍을 이룹니다.** 이 방법을 통해 한 지리적 위치에서 VM 스토리지 같은 리소스를 복제할 수 있으며, 이렇게 하면 **두 Azure 지역에 동시에 영향을 주는 자연재해, 내전, 정전 또는 물리적 네트워크 중단 등의 이벤트 때문에 서비스가 중단될 가능성을 줄일 수 있습니다**. 예를 들어, 한 쌍의 **지역이 자연재해의 영향을 받은 경우 서비스는 해당 지역 쌍의 다른 지역으로 자동으로 장애 조치(failover)됩니다**.
    - 지리적으로 불능이 됐을 때 빨리 복제를 해서 돌아갈 수 있게끔 하기 위해 지역 쌍을 만들어 놓는다.
- 예시
    - 아시아 South East (Singapore), 아시아 South West (Hong Kong) 두개가 연결
    - 호주 동부, 남부
    - 미국 동부와 미국 서부 쌍
    - 동남 아시아와 동아시아 쌍

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/region-pairs-d9eb9728.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/region-pairs-d9eb9728.png)

- Azure 지역 쌍은 직접 연결되고 Azure 지역 규모의 재해를 피할 수 있도록 충분히 멀리 떨어져 있기 때문에 안정적인 서비스 및 데이터 중복성을 제공하는 데 사용할 수 있습니다. 일부 서비스는 Azure 지역 쌍을 사용하여 자동 지역 중복 스토리지를 제공합니다.
- Azure 지역 쌍의 **추가적인 이점**은 다음과 같습니다.
    - **광범위한 Azure 중단이 발생하는 경우** 해당 지역 쌍에서 호스트되는 애플리케이션에 대해 하나 이상의 지역이 가능한 한 빨리 복원되도록 하기 위해 모든 쌍 중에서 하나의 지역이 우선하도록 지정됩니다.
    - 계획된 Azure 업데이트는 가동 중지 및 애플리케이션 중단 위험을 최소화하기 위해 한 번에 한 Azure 지역 쌍으로 롤아웃됩니다.
    - 데이터는 세금 및 법률 집행 관할 구역에 사용될 수 있게 동일한 지리적 위치 내에 쌍으로(브라질 남부 제외) 상주합니다.

광범위하게 분산된 데이터 센터 세트를 사용하면 Azure가 **높은 가용성을 보장**합니다.

## Benefits and usage of Availability Zones

[https://docs.microsoft.com/ko-kr/azure/availability-zones/az-overview](https://docs.microsoft.com/ko-kr/azure/availability-zones/az-overview)

### **Azure 가용성 영역**

**장애 발생 시 정보를 보호할 수 있도록 서비스와 데이터를 중복**시키려 한다. 인프라를 호스트할 때 자체적으로 **중복성을 설정하려면 중복된 하드웨어 환경을 구축**해야 한다. Azure는 가용성 영역을 통해 앱의 가용성을 높일 수 있따.

### **가용성 영역이란?**

- 지역 안에서, 물리적으로 분리된 데이터 센터이다.
- 가용성 영역은 **Azure 지역 내에서 물리적으로 분리된 데이터 센터이다**.
- 각 가용성 영역은 독립된 전원, 냉각 및 네트워킹을 갖춘 하나 이상의 데이터 센터로 구성된다. 가용성 영역은 격리 경계로 설정된다. 가용성 영역은 고속 프라이빗 광 네트워크를 통해 연결된다.
    - 데이터 센터가 장애가 났을 때나 불이 났을 때, 거기에 있는 내용들이 다른 영역에서 복제가 되서 사용할 수 있게끔 하기 위해 구분을 해놓는 것이다.
    - 한 영역이 다운되어도 다른 영역에서 계속 작동한다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/availability-zones-5c3c490c.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/availability-zones-5c3c490c.png)

### **지원되는 지역**

**일부 Azure 지역에서는 가용성 영역이 지원되지 않습니다.** 업데이트된 목록은 [Azure에서 가용성 영역을 지원하는 지역](https://docs.microsoft.com/ko-kr/azure/availability-zones/az-region)을 참조하세요.

### **앱에서 가용성 영역 사용**

가용성 영역을 사용하여 중요 업무용 애플리케이션을 실행할 수 있으며**, 한 영역 내에 컴퓨팅, 스토리지, 네트워킹 및 데이터 리소스를 공동 배치하고 다른 영역에 복제**하여 애플리케이션 아키텍처에 고가용성을 구현할 수 있습니다. 서비스를 중복시키고 영역 간에 데이터를 전송하는 비용이 발생할 수 있다는 점을 기억하세요.

가용성 영역은 주로 VM, 관리 디스크, 부하 분산 장치 및 SQL 데이터베이스에 주로 사용됩니다. 가용성 영역을 지원하는 Azure 서비스는 다음 두 가지 범주로 나뉩니다.

- **영역 서비스**: 특정 영역(예: VM, 관리 디스크, IP 주소)에 리소스를 고정합니다.
- **영역 중복 서비스**: 플랫폼이 영역에서 자동으로 복제됩니다(예: 영역 중복 스토리지, SQL 데이터베이스).

설명서를 통해 가용성 영역에 연결할 수 있는 아키텍처 요소를 확인하세요.

## Benefits and usage of Resource Groups

[https://docs.microsoft.com/ko-kr/azure/governance/management-groups/overview](https://docs.microsoft.com/ko-kr/azure/governance/management-groups/overview)

- **리소스**: **Azure를 통해 사용할 수 있는 관리 가능한 항목**입니다. VM(가상 머신), 스토리지 계정, 웹앱, 데이터베이스 및 가상 네트워크는 리소스의 예입니다.
- **리소스 그룹**: Azure 솔루션과 관련된 리소스를 보관하는 컨테이너입니다. 리소스 그룹은 그룹으로 관리하려는 리소스만 포함합니다. 조직에 가장 적합한 요소에 따라 리소스 그룹에 속하는 리소스를 결정합니다.
    - 리소스를 묶어서 관리하는 것
    - 리소스 그룹은 논리적인 그룹이기 때문에 지역이랑 크게 상관이 없다..

### **Azure 리소스 그룹**

- 리소스 그룹은 **Azure 플랫폼의 기본 요소**입니다.
- 리소스 그룹은 Azure에 배포된 **리소스**의 **논리 컨테이너**입니다.
- 이러한 리소스는 VM, Azure Application Gateway 인스턴스, Azure Cosmos DB 인스턴스와 같은 Azure 구독에서 만드는 모든 항목입니다.
- 모든 리소스는 리소스 그룹에 있어야 하고 한 리소스는 단일 리소스 그룹의 멤버여야 합니다. 이동에 대한 특정 제한 사항이나 요구 사항이 있는 일부 서비스를 사용하여 리소스 그룹 간에 많은 리소스를 이동할 수 있습니다. 리소스 그룹은 중첩할 수 없습니다. 리소스를 프로비전하려면 리소스를 배치할 리소스 그룹이 필요합니다.
- 생애주기, lifecycle을 관리할 때도 편한다.

### **논리적 그룹화**

리소스 그룹의 용도는 Azure 리소스를 간편하게 관리하고 구성하는 것입니다. 사용량, 형식 또는 위치가 비슷한 리소스를 한 리소스 그룹에 배치하면 Azure에서 만드는 리소스에 질서를 부여하고 체계적으로 구성할 수 있습니다. 이 단원에서는 논리적 그룹화에 가장 큰 관심을 가져야 합니다. 리소스가 너무 무질서하기 때문입니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/resource-group-461ef7f2.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/resource-group-461ef7f2.png)

### **수명 주기**

- 리소스 그룹을 삭제하면 그 안에 있는 리소스도 모두 삭제됩니다. 리소스를 수명 주기로 구성하는 방법은 실험 후 리소스를 폐기하는 개발 및 테스팅 환경에서 유용하게 사용할 수 있습니다. 리소스 그룹을 사용하면 리소스 세트를 한꺼번에 간편하게 제거할 수 있습니다.

### **권한 부여**

- 리소스 그룹은 RBAC(역할 기반 액세스 제어) 권한을 적용하는 범위이기도 합니다. 리소스 그룹에 RBAC 권한을 적용하면 관리가 간편해지고 **필요한 리소스만 사용하도록 액세스를 제한**할 수 있습니다.
- 리소스 그룹마다 권한 분여가 가능하다.
    - 예를들어 특정 그룹은 읽기만 가능하고 쓰기는 불가능하도록 제한할 수 있다.

## Benefits and usage of Subscriptions

![Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/Untitled%201.png](Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/Untitled%201.png)

- 구독이란?
    - Azure **제품 및 서비스에 대한 인증되고 권한이 부여된 액세스를 제공**한다.
    - 리소스를 프로비전할 수도 있다. Azure 구독은 Azure AD(Azure Active Directory) 또는 Azure AD 트러스트의 디렉터리에 있는 ID인 **Azure 계정과 연결된 Azure 서비스의 논리적 단위**이다.
- 구독은 계정 하나에 여러개를 모아놓을 수 있다.
    - 보통은 회사에서 구독을 여러개를 두는데, (여러개의 장점 - 각각의 구독마다 서로 다른 권한을 줄 수 있고, limit을 걸기 쉽다)
- 2가지 구독 유형
    - **청구 경계**: 이 구독 유형은 Azure 사용에 따른 Azure 계정 청구 방식을 결정합니다. 다양한 유형의 청구 요구 사항에 따라 여러 개의 구독을 만들 수 있습니다. Azure는 비용을 구성하고 관리할 수 있도록 각 구독에 대해 별도의 청구 보고서 및 송장을 생성합니다.
        - 구독끼리 경계를 세워놔서, 아무리 dev 구독에서 비용을 많이 발생해도, test 구독은 영향을 받지 않는 형식이다.
    - **액세스 제어 경계**: Azure는 구독 수준에서 액세스 관리 정책을 적용하며, 다른 조직 구조를 반영하기 위해 별도의 구독을 만들 수 있습니다. 예를 들어 비즈니스 내에서 고유한 Azure 구독 정책을 적용할 수 있는 서로 다른 부서가 있습니다. 이 청구 모델을 통해 특정 구독으로 사용자가 프로비저닝하는 리소스에 대한 액세스를 제어할 수 있습니다.

### 추가 Azure 구독 만들기

리소스 또는 청구 관리를 위해 추가 구독을 만들 수 있습니다. 예를 들어 다음과 같이 구별되는 추가 구독을 만들 수 있습니다.

- **환경:** 리소스를 관리할 때 개발 및 테스트, 보안을 위한 별도의 환경을 설정하거나 규정 준수 상의 이유로 데이터를 격리할 수 있습니다. 이 디자인은 리소스 액세스 제어가 구독 수준에서 발생하기 때문에 특히 유용합니다.
- **조직 구조:** 여러 조직 구조를 반영하는 구독을 만들 수 있습니다. 예를 들어 팀은 저렴한 리소스로 제한하고, IT 부서에는 전체 범위를 허용할 수 있습니다. 이와 같은 설계 방식을 통해 각 구독 내에서 사용자가 프로비저닝하는 리소스에 대한 액세스를 제어할 수 있습니다.
- **청구**: 청구를 위해 추가 구독을 만들 수도 있습니다. 비용은 구독 수준에서 먼저 집계되므로 사용자의 요구에 따라 비용을 관리하고 추적하는 구독을 만들 수 있습니다. 예를 들어 프로덕션 워크로드용 구독과 개발 및 테스트 워크로드용 구독을 따로 만들 수 있습니다.

다음과 같은 이유로 추가 구독이 필요할 수도 있습니다.

- **구독 제한**: 구독은 일부 하드 제한에 바인딩됩니다. 예를 들어 구독당 최대 Azure ExpressRoute 회로 수는 10개입니다. 계정에서 구독을 만들 때 이러한 제한을 고려해야 합니다. 특정 시나리오에서 이러한 제한을 초과해야 하는 경우 추가 구독이 필요할 수 있습니다.

### **요구 사항에 맞게 청구 사용자 지정**

구독이 여러 개인 경우 청구서 섹션으로 구성할 수 있습니다. 각 청구서 섹션은 해당 월에 발생한 요금을 보여 주는 청구서의 품목입니다. 예를 들어 조직에 대한 단일 청구서가 필요하지만 부서, 팀 또는 프로젝트별로 비용을 정리하려는 경우가 있습니다.

요구 사항에 따라 동일한 청구 계정 내에 여러 개의 청구서를 설정할 수 있습니다. 이렇게 하려면 추가 청구 프로필을 만들어야 합니다. 청구 프로필마다 고유의 월간 청구서 및 결제 방법이 있습니다.

다음 다이어그램에서는 청구를 구성하는 방법에 대 한 개요를 보여 줍니다. 이전에 Azure에 가입했거나 조직에 기업계약이 있는 경우에는 청구를 다르게 설정할 수 있습니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/billing-structure-overview-2c81a8ad.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/billing-structure-overview-2c81a8ad.png)

## Benefits and usage of Management Groups (관리 그룹)

[https://docs.microsoft.com/ko-kr/azure/governance/management-groups/overview](https://docs.microsoft.com/ko-kr/azure/governance/management-groups/overview)

- 애저는 tenant라는 개념이 있다. 모든 계정은 특정 tenant에 속해있다.
- 조직에 구독이 많은 경우 **해당 구독에 대한 액세스, 정책 및 규정 준수를 효율적으로 관리하는 방법**이 필요할 수 있다. Azure 관리 그룹은 구독 이상의 범위 수준을 제공한다.
- 구독을 관리 그룹이라고 하는 **컨테이너에 구성하고 거버넌스 조건을 관리 그룹에 적용**한다.  관리 그룹에 속하는 **모든 구독은 관리 그룹에 적용되는 조건을 자동으로 상속**한다.
- 관리 그룹은 어떤 형식의 구독을 사용하든 관계 없이 대규모의 엔터프라이즈급 관리를 제공한다. 단일 관리 그룹 내의 모든 구독은 동일한 Azure AD 테넌트를 신뢰해야 한다.
- 예를 들어 VM 생성에 사용할 수 있는 지역을 제한하는 정책을 관리 그룹에 적용할 수 있다. 이 정책은 해당 지역에만 VM을 만들 수 있도록 허용하는 방식으로 그 지역에 속한 모든 관리 그룹, 구독 및 리소스에 적용된다.

### **관리 그룹 및 구독의 계층 구조**

- 리소스를 통합 정책 및 액세스 관리를 위**한 계층 구조로 구성하는 유연한 관리 그룹 및 구독 구조를 만들 수 있다**. 다음 다이어그램에서는 관리 그룹을 사용하여 거버넌스 계층 구조를 만드는 예를 보여 줍니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/management-groups-and-subscriptions-bba71896.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/management-groups-and-subscriptions-bba71896.png)

- 정책을 적용하는 계층 구조를 만들 수 있다.
    - 예를 들어 프로덕션이라는 그룹에서 VM 위치를 미국 서부 지역으로 제한할 수 있다. 이 정책은 해당 관리 그룹의 하위 항목인 모든 기업계약 구독에 상속되고 해당 구독에 속한 모든 VM에 적용된다. 리소스 또는 구독 소유자는 이 보안 정책을 변경하여 거버넌스를 향상시킬 수 없다.
    - 어떤 그룹에는 접근하고, 접근할 수 없는지 정할 수 있다.
- 관리 그룹을 사용하는 또 다른 시나리오는 여러 구독에 대한 사용자 액세스를 제공하는 것입니다. 해당 관리 그룹에서 여러 구독을 이동하면 관리 그룹에 하나의 RBAC(역할 기반 액세스 제어) 할당을 만들 수 있습니다. 그러면 모든 구독에 대한 액세스를 상속하게 됩니다. 관리 그룹에 하나만 할당하면 여러 구독에 RBAC를 스크립팅하지 않고 사용자가 필요한 모든 항목에 액세스할 수 있습니다.

### **관리 그룹에 대한 중요한 사실**

- 단일 디렉터리에서 **지원할 수 있는 관리 그룹 수는 10,000개**입니다.
- 관리 그룹 트리에서 지원할 수 있는 **최대 깊이 수준은 6**입니다. 이 제한은 루트 수준 또는 구독 수준을 포함하지 않습니다.
- 각 관리 그룹 및 구독은 **하나의 부모만 지원**할 수 있습니다.
- 각 관리 그룹에는 **여러 자식 요소**가 있을 수 있습니다.
- 모든 구독 및 관리 그룹은 **각 디렉터리의 단일 계층 내에 위치**합니다.

 

## Benefits and usage of Azure Resource Manager

[https://docs.microsoft.com/ko-kr/learn/modules/control-and-organize-with-azure-resource-manager/](https://docs.microsoft.com/ko-kr/learn/modules/control-and-organize-with-azure-resource-manager/)

### **Azure 리소스 관리자**

- 리소스 관리자를 통해 모든 관리를 한다.
- Azure Resource Manager는 **Azure용 배포 및 관리 서비스**입니다**. Azure 계정에서 리소스를 만들고, 업데이트하고, 삭제할 수 있는 관리 계층을 제공**합니다. 액세스 제어, 잠금, 태그와 같은 관리 기능을 사용하여 배포 후에 리소스를 보호하고 구성합니다.
- 사용자가 Azure 도구, API 또는 SDK에서 요청을 보내면 Resource Manager에서 요청을 받습니다. 요청을 인증하고 권한을 부여합니다. Resource Manager에서 요청된 작업을 수행하는 Azure 서비스에 요청을 보냅니다. 모든 요청이 동일한 API를 통해 처리되므로 모든 여러 도구에서 일관적인 결과 및 기능을 볼 수 있습니다.
- 다음 이미지에서는 Azure 요청을 처리할 때 Resource Manager가 수행하는 역할을 보여 줍니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/consistent-management-layer-feef9259.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-architecture-fundamentals/media/consistent-management-layer-feef9259.png)

Azure Portal에서 사용할 수 있는 모든 기능은 PowerShell, Azure CLI, REST API 및 클라이언트 SDK를 통해서도 사용할 수 있습니다. API를 통해 처음 릴리스된 기능은 처음 릴리스된 지 180일 이내에 포털에 표시됩니다.

### **리소스 관리자를 사용할 경우의 이점**

Resource Manager를 사용하면 다음을 수행할 수 있습니다.

- 스크립트가 아니라 **선언적 템플릿을 통해 인프라를 관**리합니다. Resource Manager 템플릿은 Azure에 무엇을 배포하는지 정의하는 **JSON 파일**입니다.
- 이 리소스를 개별적으로 처리하는 대신, 솔루션의 **모든 리소스를 그룹으로 배포, 관리 및 모니터링**합니다.
- 개발 수명 주기 내내 솔루션을 다시 배포합니다(리소스가 일관된 상태로 배포됨을 확신할 수 있음).
- 리소스가 올바른 순서로 배포되도록 리소스 간의 종속성을 정의합니다.
- 모든 서비스에 액세스 제어를 적용합니다. **RBAC**가 기본적으로 관리 플랫폼에 통합되기 때문입니다.
- 리소스에 태그를 적용하여 **구독의 모든 리소스를 논리적으로 구성**합니다.
- 동일한 태그를 공유하는 리소스 그룹에 대한 비용을 확인하여 조직의 청구를 명확히 합니다.

## Explain Azure Resources

- Azure를 통해 사용할 수 있는 관리 가능한 항목입니다. 리소스의 예로는 가상 머신, 스토리지 계정, 웹앱, 데이터베이스 및 가상 네트워크가 있습니다. 리소스 그룹, 구독, 관리 그룹 및 태그도 리소스의 예입니다.

## 문제

![Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture.png](Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture.png)

![Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture%201.png](Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture%201.png)

# Describe core resources available in Azure

## Benefits and usage of Virtual Machines, Azure App Services, Azure Container Instances(ACI), Azure Kubernetes Service(AKS), and Windows Virtual Desktop

### Virtual Machines

- 가상 머신은 물리적 컴퓨터의 소프트웨어 에뮬레이션입니다. VM에는 가상 프로세서, 메모리, 스토리지 및 네트워킹 리소스가 포함됩니다. VM은 운영 체제를 호스트하고, 물리적 컴퓨터처럼 소프트웨어를 설치하고 실행할 수 있습니다. 원격 데스크톱 클라이언트를 사용할 때 실제처럼 VM을 사용하고 제어할 수 있습니다.
- [Azure Virtual Machines](https://azure.microsoft.com/services/virtual-machines/)를 사용하여 클라우드에서 VM을 만들고 사용할 수 있습니다. Virtual Machines**는 IaaS(Infrastructure as a Service)**를 제공하며 다양한 방법으로 사용할 수 있습니다. 운영 체제 및 환경을 완전히 제어해야 하는 경우 VM을 선택하는 것이 좋습니다. 물리적 컴퓨터처럼 가상 머신에서 실행되는 모든 소프트웨어를 사용자 지정할 수 있습니다. 이 기능은 사용자 지정 소프트웨어 또는 사용자 지정 호스팅 구성을 실행하는 경우에 유용합니다.

**가상 머신을 사용하면 좋은 경우**

- OS(운영 체제)에 대한 완전한 제어.
- 사용자 지정 소프트웨어 실행하는 기능.
- 사용자 지정 호스팅 구성을 사용해야 하는 경우.

**가상 머신 확장 집합 (Virtual Machine Scale Sets)** 

- [가상 머신 확장 집합](https://azure.microsoft.com/services/virtual-machine-scale-sets)은 동일한 **VM 세트를 배포 및 관리하는 데 사용**할 수 있는 Azure 컴퓨팅 리소스입니다. 모든 VM은 동일하게 구성되었으며 가상 머신 확장 집합은 **실제 자동 크기 조정을 지원하도록 디자인**되었습니다.
    - 내가 필요한 리소스 만큼만 크기를 조정할 수 있도록 해준다.
- VM의 사전 프로비저닝이 필요하지 않습니다. 이런 이유로, 빅 컴퓨팅, 빅 데이터 및 컨테이너화된 워크로드를 대상으로 하는 대규모 서비스를 손쉽게 빌드할 수 있습니다.
- **수요가 증가함에 따라 더 많은 VM 인스턴스가 추가**될 수 있습니다. 수요가 감소함에 따라 VM 인스턴스가 제거될 수 있습니다. 이 프로세스는 수동, 자동 또는 둘의 조합이 될 수 있습니다.

**VM을 사용하는 경우** 

- **테스트 및 개발 도중.** VM은 다양한 **OS 및 애플리케이션 구성을 만드는 빠르고 쉬운 방법을 제공**합니다. 테스트 및 개발 담당자가 더 이상 필요하지 않을 때 **VM을 손쉽게 삭제**할 수 있습니다.
- **클라우드에서 애플리케이션을 실행하는 경우.** 기본 인프라를 만들어 실행하는 것과 달리 퍼블릭 클라우드에서 특정 애플리케이션을 실행하는 기능은 상당한 경제적 이익을 제공할 수 있습니다. 예를 들어 애플리케이션이 수요 변동을 처리해야 할 수 있습니다. VM이 필요하지 않을 때 VM을 종료하거나 예기치 않은 수요 증가를 충족하기 위해 신속하게 VM을 시작하면 사용하는 리소스에 대해서만 요금을 지급하게 됩니다.
- **데이터 센터를 클라우드로 확장하는 경우.** 조직은 Azure에 가상 네트워크를 만들고 VM을 해당 가상 네트워크에 추가함으로써 **온-프레미스 네트워크의 기능을 확장**할 수 있습니다. 그러면 SharePoint 같은 애플리케이션을 로컬로 실행하는 대신 Azure VM에서 실행할 수 있습니다. 이 배열을 통해 온-프레미스 환경에서 배포하는 것보다 더 쉽고 저렴하게 배포할 수 있습니다.
- **재해 복구 도중.** 클라우드에서 특정 유형의 애플리케이션을 실행하고 온-프레미스 네트워크를 클라우드를 확장하는 것과 같이 재해 복구에 대한 IaaS 기반 접근 방식을 사용하여 막대한 비용을 절감할 수 있습니다. 기본 데이터 센터에 오류가 발생한 경우 Azure에서 실행되는 VM을 만들어 중요한 애플리케이션을 실행한 다음 기본 데이터 센터가 다시 작동하면 이를 종료할 수 있습니다.
    - 다운 타임이 생겼을 때, 특정 애플리케이션을 실행하고 싶을 때 재해 복구에 대한 IaaS 방식을 사용하여 막대한 비용을 절감할 수 있다.

**VM 스케일링**

- VM을 그룹화하여 고가용성, 확장성, 및 중복성을 제공할 수 있다.

**Virtual Machine Scale Sets란?**

- 부하 부산된 동일한 VM 그룹을 만들고 관리할 수 있다. 1번, 2번, 3번한테 이렇게 나누어줘!! 라고 시킬 수 있다.
- 예시
    - 여러분이 과학자가 처리해야 하는 천문학 이미지를 업로드하는 웹 사이트를 운영한다고 가정해보세요. 가상 머신을 복제한 경우 일반적으로 웹 사이트 가상 머신의 여러 인스턴스 간에 요청을 라우팅하는 추가 서비스를 구성해야 합니다. 가상 머신 확장 집합은 해당 작업을 자동으로 수행합니다.

**Azure Batch란?**

- **수십, 수백 또는 수천 개의 가상 머신으로 스케일링함**으로써 **대규모 병렬 및 고성능 컴퓨팅(HPC) 일괄 작업을 수행할 수 있다**.
- 작업을 실행할 준비가 된 경우, Batch에서 다음 작업을 수행합니다.
    - 컴퓨팅 VM 풀을 시작합니다.
    - 애플리케이션 및 준비 데이터를 설치합니다.
    - 사용자의 여러 작업을 포함하는 작업을 실행합니다.
    - 오류를 식별합니다.
    - 작업을 큐에 다시 놓습니다.
    - 작업이 완료되면 풀을 스케일 다운합니다.

### Azure App Service

- Azure App Service를 사용하면 **모든 플랫폼에서 실행되는 엔터프라이즈급 웹, 모바일 및 API 앱을 신속하게 빌드, 배포 및 스케일링**할 수 있다.
- 앱과 코드만 신경을 쓰면 된다. **완전 관리형 플랫폼**이기 때문에 **인프라 유지 관리**를 수행하는 동안 엄격한 성능, 확장성, 보안 및 규정 준수 요구 사항을 충족할 수 있다.
- **App Service는 PaaS(Platform as a Service) 제공**

**Azure App Service 유형**

- App Service를 사용하면 다음과 같은 대부분 일반적인 앱 스타일을 호스트할 수 있습니다.
    - 웹앱
        - App Service는 [ASP.NET](http://asp.net/), [ASP.NET](http://asp.net/) Core, Java, Ruby, Node.js, PHP 또는 Python을 사용하여 웹앱 호스트가 전체 지원됩니다. Windows 또는 Linux를 호스트 운영 체제로 선택할 수 있습니다.
    - API 앱
        - 웹 사이트를 호스트하는 것처럼 원하는 언어 및 프레임워크를 사용하여 REST 기반 웹 API를 빌드할 수 있습니다. 전체 Swagger 지원과 함께 Azure Marketplace에서 API를 패키지 및 게시하는 기능을 사용할 수 있습니다. 생성된 앱은 HTTP 또는 HTTPS 기반 클라이언트에서 사용할 수 있습니다.
    - WebJobs
        - WebJobs 기능을 사용하여 웹앱, API 앱 또는 모바일 앱과 동일한 컨텍스트에서 프로그램(.exe, Java, PHP, Python 또는 Node.js) 또는 스크립트(.cmd, .bat, PowerShell 또는 Bash)를 실행할 수 있습니다. 프로그램과 스크립트는 트리거를 통해 예약하거나 실행할 수 있습니다. WebJobs는 종종 애플리케이션 로직의 일부로 백그라운드 작업을 실행하는 데 사용됩니다.
    - 모바일 앱
        - App Service의 Mobile Apps 기능을 사용하여 iOS 및 Android 앱의 백 엔드를 빠르게 빌드할 수 있습니다. Azure Portal에서 몇 번만 클릭하면 다음을 수행할 수 있습니다.
            - 클라우드 기반 SQL 데이터베이스에 모바일 앱 데이터를 저장합니다.
            - MSA, Google, Twitter 및 Facebook과 같은 일반적인 소셜 공급 기업에 대해 고객을 인증합니다.
            - 푸시 알림을 보냅니다.
            - C# 또는 Node.js에서 사용자 지정 백 엔드 논리를 실행합니다.
        - 모바일 앱의 경우 네이티브 iOS/Android, Xamarin 및 React 네이티브 앱을 위한 SDK 지원이 제공됩니다.
- Azure App Service는 웹에 액세스할 수 있는 앱 호스트 시 결정해야 하는 대부분 인프라 관련 사항을 처리합니다.
    - 배포와 관리 기능이 플랫폼에 통합됩니다.
    - 엔드포인트에 보안이 설정됩니다.
    - 높은 트래픽 부하를 처리하기 위해 사이트를 빠르게 스케일링할 수 있습니다.
    - 기본 제공 부하 분산 및 Traffic Manager가 고가용성을 제공합니다.
- 이러한 모든 앱 스타일은 동일한 인프라에 호스트되고 이러한 이점을 공유합니다. 이와 같은 유연성으로 App Service는 웹 기반 애플리케이션을 호스트하는 데 적합합니다.

### Azure Container Instances (ACI)

**컨테이너란?**

- **컨테이너는 가상화 환경**입니다. 단일 물리적 호스트에서 여러 가상 머신을 실행하는 것과 매우 유사하며, **단일 물리적 또는 가상 호스트에서 여러 컨테이너를 실행**할 수 있습니다. 가상 머신과 달리 컨테이너에 대한 운영 체제를 관리하지 않습니다. 가상 머신은 연결하고 관리할 수 있는 운영 체제의 인스턴스인 것 같지만, **컨테이너는 저용량이며 동적 생성, 스케일 아웃 및 중지를 할 수 있도록 설계**되었습니다. 애플리케이션 수요 증가에 따라 가상 머신을 만들고 배포할 수 있지만, **컨테이너는 수요 변화에 대응할 수 있도록 설계**되었습니다. 컨테이너를 사용하여 크래시 또는 하드웨어 중단이 발생한 경우 빠르게 다시 시작할 수 있습니다. 가장 많이 사용되는 컨테이너 엔진 중 하나는 Azure에서 지원하는 **Docker**입니다.

 VM vs container

- VM에는 OS가 들어가기 때문에 조금 더 무겁다. 그리고 완벽하게 격리되어있기 때문에 네트워킹해서 VM에 설치된 다른 것과 함꼐 실행할 수 있다. 하지만 단점은, **한 번에 하나의 OS만 들어가기 때문**에 많이 무겁다. 만약 테스트하고 배포해야 하면, 여러 VM을 써야 하고, 환경을 맞추고, 애플리케이션이 어떻게 동작하는지 확인해야 한다.
- Container
    - **OS를 가상화**시킨 것.
    - **OS를 놓고, 애플리케이션을 그 위에 놓아 작동시킬 수 있으므로 dependency, 컴퓨터에 대한 상황 설정 등 여러가지 control이 가능**하다.

**Azure Container Instances**

- Azure Container Instances는 **가상 머신을 관리하거나 추가 서비스를 채택하지 않고도 Azure에서 컨테이너를 실행하는 가장 빠르고 간단한 방법을 제공**합니다. 실행되는 컨테이너를 업로드할 수 있는 PaaS(Platform as a Service) 제공입니다.
- 단일 구성되기 때문 아니라, 한 꺼번에 orchestration 해야 한다.

### Azure Kubernetes Service(AKS)

- **많은 컨테이너를 자동화, 관리 및 상호 작용하는 작업을 오케스트레이션**이라고 합니다. Azure Kubernetes Service는 분산형 아키텍처와 **대량의 컨테이너가 있는 완벽한 컨테이너용 오케스트레이션 서비스**입니다. 오케스트레이션은 다수의 컨테이너와 상호 작용 방식을 자동화 및 관리하는 작업입니다.
- 오케스트레이션을 자동화할 수 있고, 한꺼번에 manage 할 수 있는 것이 Kubernetes이다.

### Windows Virutal Desktop

- 인터넷만 연결되어 있으면 여러 개의 소프트웨어 없이도 바로 연결해서 Virtual desktop을 사용할 수 있다.
- Azure의 Windows Virtual Desktop은 **클라우드에서 실행되는 데스크톱 및 애플리케이션 가상화 서비스**입니다. 이를 통해 사용자는 모든 위치에서 클라우드 호스트 버전의 Windows를 사용할 수 있습니다. Windows Virtual Desktop은 Windows, Mac, iOS, Android 및 Linux 같은 여러 디바이스에서 작동합니다. 원격 데스크톱 및 앱에 액세스하는 데 사용할 수 있는 앱에서 작동합니다. 또한 대부분의 최신 브라우저를 사용하여 **Windows Virtual Desktop 호스트 환경에 액세스**할 수 있습니다.
    - 굳이 다른 운영체제를 살 필요가 없다. 인터넷으로 들어가서 똑같은 OS 환경에서 애플리케이션 작업을 할 수 있다. 그렇기 때문에 배포 프로세스를 간략하고 신속하게 진행할 수 있따.

**Windows Virtual Desktop을 사용해야 하는 이유**

- 최적의 사용자 환경 제공
    - 사용자는 인터넷을 통해 모든 디바이스를 사용하여 Windows Virtual Desktop에 자유롭게 연결할 수 있습니다. Windows Virtual Desktop 클라이언트를 사용하여 게시된 Windows 데스크톱 및 애플리케이션에 연결합니다. 이 클라이언트는 디바이스 또는 Windows Virtual Desktop HTML5 웹 클라이언트의 네이티브 애플리케이션일 수 있습니다.
    - 사용자의 데이터 센터 또는 클라우드에 연결되는 앱 및 서비스 근처에서 세션 호스트 VM(가상 머신)이 실행되도록 할 수 있습니다. 이렇게 하면 사용자는 생산성을 유지하고 긴 로드 시간이 발생하지 않습니다.
    - FSLogix를 사용하여 사용자 프로필이 컨테이너화되므로 Windows Virtual Desktop 사용자 로그인이 빠릅니다. 로그인할 때 사용자 프로필 컨테이너는 컴퓨팅 환경에 동적으로 연결됩니다. 사용자 프로필은 즉시 제공되어 시스템에서 네이티브 사용자 프로필과 똑같이 표시됩니다.
    - 개인(영구) 데스크톱을 통해 개별 소유권을 제공할 수 있습니다. 예를 들어 엔지니어링 팀의 구성원에게 개인 원격 데스크톱을 제공하고자 할 수 있습니다. 그런 다음, 해당 원격 데스크톱의 **다른 사용자에게 영향을 미치지 않고 프로그램을 추가 또는 제거**할 수 있습니다.
- 보안 강화
    - Windows Virtual Desktop은 Azure Active Directory(Azure AD)를 사용하는 사용자의 데스크톱에 대한 중앙 집중식 보안 관리를 제공합니다. 다단계 인증을 사용하여 사용자 로그인을 보호할 수 있습니다. 세부적인 RBAC(역할 기반 액세스 제어)를 사용자에게 할당하여 데이터 액세스를 보호할 수도 있습니다.
    - Windows Virtual Desktop을 사용하면 데이터와 앱이 로컬 하드웨어에서 분리됩니다. 대신 Windows Virtual Desktop은 데이터와 앱을 원격 서버에서 실행합니다. 기밀 데이터가 개인 디바이스에 남겨지는 위험을 줄일 수 있습니다.
    - 사용자 세션은 단일 및 다중 세션 환경에서 격리됩니다.
    - 또한 Windows Virtual Desktop은 역방향 연결 기술을 사용하여 보안을 개선합니다. 이 연결 형식은 원격 데스크톱 프로토콜보다 더 안전합니다. 세션 호스트 VM에 대해 인바운드 포트를 열지 않습니다.
- 컴퓨팅 비용 절감

### 문제

![Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture%202.png](Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture%202.png)

![Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture%203.png](Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture%203.png)

## Benefits and usage of Virtual Networks, VPN Gateway, Virtual Network peering, and ExpressRoute

### Virtual Networks

- *Azure* 가상 네트워크를 사용하면 **VM, 웹앱 및 데이터베이스와 같은 Azure 리소스가 서로 통신**할 수 있고 **인터넷의 사용자 및 온-프레미스 클라이언트 컴퓨터와 통신**할 수 있습니다. Azure 네트워크를 다른 Azure 리소스와 연결되는 리소스 집합으로 생각할 수 있습니다.
- Azure Virtual Network는 다음과 같은 주요 네트워킹 기능을 제공합니다.
    - 격리 및 구분
    - 인터넷 통신
    - Azure 리소스 간 통신
    - 온-프레미스 리소스와 통신
    - 네트워크 트래픽 라우팅
    - 네트워크 트래픽 필터링
    - 가상 네트워크 연결

**격리 및 구분**

- **Virtual Network를 사용하면 격리된 여러 가상 네트워크를 만들 수 있습니다**. 가상 네트워크를 설정하는 경우 공용 또는 개인 IP 주소 범위를 사용하여 개인 IP 주소 공간을 정의합니다. 이러한 **IP 주소 공간을 서브넷으로 분할**하고, 정의된 주소 공간의 일부를 명명된 각 서브넷에 할당할 수 있습니다.
- 이름 확인의 경우 Azure에 기본 제공되는 이름 확인 서비스를 사용할 수 있습니다. 내부 또는 외부 DNS 서버를 사용하도록 가상 네트워크를 구성할 수도 있습니다.

**인터넷 통신**

- Azure의 VM은 기본적으로 인터넷을 연결할 수 있습니다. 공용 IP 주소 또는 공용 부하 분산 장치를 정의하여 인터넷에서 들어오는 연결이 가능하도록 설정할 수 있습니다. VM 관리의 경우 Azure CLI, 원격 데스크톱 프로토콜 또는 Secure Shell을 통해 연결할 수 있습니다.

**Azure 리소스 간 통신**

- **Azure 리소스를 사용하여 서로 안전하게 통신할 수 있도록 설정**하려 합니다. 다음 두 가지 방법 중 하나를 수행할 수 있습니다.
    - **가상 네트워크**
        - 가상 네트워크는 VM뿐만 아니라 Power Apps용 App Service Environment, Azure Kubernetes Service 및 Azure 가상 머신 확장 집합과 같은 다른 Azure 리소스도 연결할 수 있습니다.
    - **서비스 엔드포인트**
        - 서비스 엔드포인트를 사용하여 Azure SQL Databases 및 스토리지 계정과 같은 다른 Azure 리소스 형식에 연결할 수 있습니다. 이 방식을 사용하면 여러 Azure 리소스를 가상 네트워크에 연결하여 보안을 개선하고 리소스 간에 최적의 라우팅을 제공할 수 있습니다.

**온-프레미스 리소스와 통신**

- Azure 가상 네트워크를 사용하면 온-프레미스 환경 및 Azure 구독 내에서 리소스를 함께 연결할 수 있습니다. 실제로 **로컬 환경과 클라우드 환경 모두에 걸쳐 있는 네트워크를 만들 수 있습니다**. 이 연결을 수행하는 세 가지 메커니즘이 있습니다.
    - **지점 및 사이트 간 가상 사설망** VPN(가상 사설망) 연결에 대한 일반적인 접근법은 조직 외부의 컴퓨터에서 회사 네트워크로 다시 연결하는 것입니다. 이 경우에 클라이언트 컴퓨터는 암호화된 VPN 연결을 시작하여 해당 컴퓨터를 Azure 가상 네트워크에 연결합니다.
    - **사이트 간 VPN(가상 사설망)** 사이트 간 VPN은 온-프레미스 VPN 디바이스 또는 게이트웨이를 가상 네트워크의 Azure VPN 게이트웨이에 연결합니다. 실제로 Azure의 디바이스는 로컬 네트워크에 있는 것으로 표시될 수 있습니다. 연결은 암호화되고 인터넷에서 작동합니다.
    - **Azure ExpressRoute** 큰 대역폭과 더 높은 수준의 보안이 필요한 환경의 경우 Azure ExpressRoute를 사용하는 것이 좋습니다. ExpressRoute는 Azure에 대한 전용 프라이빗 연결을 제공합니다. 이 연결은 인터넷을 통해 이동하지 않습니다. ExpressRoute에 관해서는 이 모듈의 뒷부분에 있는 별도의 단원에서 자세히 알아봅니다.

**네트워크 트래픽 라우팅**

- 기본적으로 Azure에서는 **연결된 가상 네트워크의 서브넷, 온-프레미스 네트워크 및 인터넷 간에 트래픽을 라우팅**합니다. 다음과 같이 라우팅을 제어하고 해당 설정을 재정의할 수도 있습니다.
    - **경로 테이블** 경로 테이블을 사용하면 트래픽이 전달되어야 하는 방법에 대한 규칙을 정의할 수 있습니다. 서브넷 간에 패킷이 라우팅되는 방법을 제어하는 사용자 지정 경로 테이블을 만들 수 있습니다.
    - **Border Gateway Protocol** BGP(Border Gateway Protocol)는 Azure VPN 게이트웨이나 ExpressRoute로 작업하여 온-프레미스 BGP 경로를 Azure 가상 네트워크로 전파합니다.

**네트워크 트래픽 필터링**

- Azure 가상 네트워크를 사용하면 다음 방법을 사용하여 서브넷 간 트래픽을 필터링할 수 있습니다.
    - **네트워크 보안 그룹** 네트워크 보안 그룹은 여러 인바운드 및 아웃바운드 보안 규칙이 포함될 수 있는 Azure 리소스입니다. 원본 및 대상 IP 주소, 포트 및 프로토콜과 같은 요인에 따라 트래픽을 허용하거나 차단하도록 이러한 규칙을 정의할 수 있습니다.
    - **네트워크 가상 어플라이언스** 네트워크 가상 어플라이언스는 강화된 네트워크 어플라이언스와 비교할 수 있는 특수 VM입니다. 네트워크 가상 어플라이언스는 방화벽 실행 또는 WAN(광역 네트워크) 최적화 수행과 같은 특정 네트워크 기능을 수행합니다.

**가상 네트워크 연결 (PEERING)** 

**가상 네트워크 *피어링* 을 사용하여 가상 네트워크를 함께 연결**할 수 있습니다. **피어링을 사용하면 각 가상 네트워크의 리소스가 서로 통신**할 수 있습니다. 이러한 가상 네트워크는 **별도 지역에 위치할 수 있으며**, Azure를 통해 **상호 연결된 글로벌 네트워크를** 만들 수 있습니다.

UDR은 사용자 정의 라우팅입니다. UDR은 Azure 가상 네트워크의 중요한 업데이트입니다. UDR을 사용하는 네트워크 관리자는 VNet 간은 물론 VNet 내의 서브넷 간의 라우팅 테이블을 제어할 수 있으므로 네트워크 트래픽 흐름을 더 세밀하게 제어할 수 있습니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-networking-fundamentals/media/local-or-remote-gateway-in-peered-virual-network-21106a38.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-networking-fundamentals/media/local-or-remote-gateway-in-peered-virual-network-21106a38.png)

### VPN Gateway

- VPN Gateway는 가상 네트워크 게이트웨이의 유형입니다. **Azure VPN Gateway 인스턴스는 Azure Virtual Network 인스턴스에 배포**되며 다음과 같은 연결이 가능하도록 설정합니다.
    - *사이트 간* 연결을 통해 온-프레미스 데이터 센터를 가상 네트워크에 연결합니다.
    - *지점 및 사이트 간* 연결을 통해 개별 디바이스를 가상 네트워크에 연결합니다.
    - *네트워크 간* 연결을 통해 가상 네트워크를 다른 가상 네트워크에 연결합니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-networking-fundamentals/media/vpngateway-site-to-site-connection-diagram-0e1e7db2.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-networking-fundamentals/media/vpngateway-site-to-site-connection-diagram-0e1e7db2.png)

- **온프레미스를 연결할 때는 항상 VPN Gateway를 사용**해야 한다.
- **전송되는 모든 데이터는 인터넷을 통과할 때 프라이빗 터널에서 암호화**됩니다. 각 가상 네트워크에 VPN 게이트웨이를 하나만 배포할 수 있지만, 하나의 게이트웨이를 사용하여 다른 가상 네트워크 또는 온-프레미스 데이터 센터를 포함한 여러 위치에 연결할 수 있습니다.
- VPN Gateway를 배포할 때 VPN 유형을 정책 기반 또는 경로 기반으로 지정합니다. 이러한 두 가지 VPN 유형의 주된 차이점은 암호화할 트래픽을 지정하는 방식입니다. Azure에서는 두 VPN 게이트웨이 유형 모두 미리 공유한 키를 유일한 인증 방법으로 사용합니다. 또한 두 유형은 버전 1 또는 버전 2의 IKE(Internet Key Exchange)와 IPSec(Internet Protocol Security)을 사용합니다. IKE는 두 엔드포인트 간에 보안 연결(암호화 계약)을 설정하는 데 사용됩니다. 그런 다음, 이러한 연결이 IPSec 도구 모음으로 전달되면 VPN 터널에 캡슐화된 데이터 패킷이 암호화 및 암호 해독됩니다.

**정책 기반 VPN**

정책 기반 VPN Gateway는 각 터널을 통해 암호화되어야 하는 패킷의 IP 주소를 정적으로 지정합니다. 이러한 유형의 디바이스는 해당 IP 주소 세트에 대해 모든 데이터 패킷을 평가하여 해당 패킷이 전송될 터널을 선택합니다.

Azure에서 정책 기반 VPN Gateway의 주요 기능은 다음과 같습니다.

- IKEv1만 지원합니다.
- 두 네트워크의 주소 접두사 조합에 따라 VPN 터널을 통해 트래픽을 암호화 및 암호를 해독하는 방법이 결정되는 *정적 라우팅* 을 사용합니다. 터널링된 네트워크의 원본 및 대상이 정책에 선언되며, 라우팅 테이블에서 선언할 필요가 없습니다.
- 정책 기반 VPN은 이러한 VPN이 필요한 특정 시나리오에 사용해야 합니다(예: 레거시 온-프레미스 VPN 디바이스와의 호환되어야 하는 경우).

**경로 기반 VPN**

각 터널 뒤에 있는 IP 주소를 정의하는 것이 너무 번거로울 경우 경로 기반 게이트웨이를 사용할 수 있습니다. 경로 기반 게이트웨이를 사용하면 IPSec 터널이 네트워크 인터페이스 또는 가상 터널 인터페이스로 모델링됩니다. IP 라우팅(고정 경로 또는 동적 라우팅 프로토콜)에 따라 각 패킷을 전송할 때 사용할 터널 인터페이스 중 하나가 결정됩니다. 경로 기반 VPN은 온-프레미스 디바이스에서 애용되는 방법입니다. 토폴로지 변경(예: 새 서브넷 생성)에 대한 복원력이 더 좋습니다.

**다음과 같은 유형의 연결이 필요한 경우 경로 기반 VPN Gateway를 사용하세요.**

- **가상 네트워크 간 연결**
- **지점 및 사이트 간 연결**
- **다중 사이트 연결**
- Azure ExpressRoute 게이트웨이와 동시 사용

Azure에서 경로 기반 VPN 게이트웨이의 주요 기능은 다음과 같습니다.

- IKEv2를 지원합니다.
- 임의(와일드카드) 트래픽 선택기를 사용합니다.
- 라우팅/전달 테이블이 다른 IPSec 터널로 트래픽을 전달하는 ‘동적 라우팅 프로토콜’을 사용할 수 있습니다. 이 경우 원본 네트워크와 대상 네트워크는 정책 기반 VPN에 포함되거나 정적 라우팅이 포함된 라우팅 기반 VPN에 포함되므로 통계적으로 정의되지 않습니다. 대신, BGP(Border Gateway Protocol)와 같은 라우팅 프로토콜을 사용하여 동적으로 생성되는 네트워크 라우팅 테이블을 기반으로 데이터 패킷이 암호화됩니다.

### Virtual Network peering

### ExpressRoute

- ExpressRoute를 사용하면 연**결 공급자의 도움을 받아 프라이빗 연결을 통해 온-프레미스 네트워크를 Microsoft 클라우드로 확장**할 수 있습니다. ExpressRoute를 사용하면 Microsoft Azure 및 Microsoft 365와 같은 Microsoft 클라우드 서비스에 대한 연결을 설정할 수 있습니다.
- 연결은 공동 배치 시설의 연결 공급자를 통해 Any-to-Any(IP VPN) 네트워크, 지점 간 이더넷 네트워크 또는 가상 교차 연결에서 수행할 수 있습니다. ExpressRoute 연결은 퍼블릭 인터넷을 통해 이동하지 않습니다. 이 기능을 사용하면 ExpressRoute 연결은 인터넷을 통한 일반 연결보다 안정적이고 속도가 빠르며 대기 시간이 일관되고 보안성이 높습니다. ExpressRoute를 사용하여 네트워크를 Microsoft에 연결하는 방법에 대한 내용은 ExpressRoute 연결 모델을 참조하세요.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-networking-fundamentals/media/azure-expressroute-overview-5520731d.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-networking-fundamentals/media/azure-expressroute-overview-5520731d.png)

- 여러가지 계층 존재

**ExpressRoute의 기능 및 이점**

Azure와 **온-프레미스 네트워크 간의 연결 서비스로 ExpressRoute를 사용하면 여러 가지 이점이** 있습니다.

- 연결 공급자를 통한 온-프레미스 네트워크와 Microsoft Cloud 간의 **3계층 연결**입니다. 임의의(IPVPN) 네트워크, 지점간 이더넷 연결, 이더넷 Exchange로 가상 간 연결을 통해 연결할 수 있습니다.
- 모든 지정학적 지역에 걸쳐 Microsoft 클라우드 서비스에 연결합니다.
- ExpressRoute 프리미엄 추가 기능으로 모든 지역에 걸쳐 Microsoft 서비스에 글로벌 연결합니다.
- BGP를 통해 네트워크와 Microsoft 간 동적 라우팅
- 높은 안정성을 위한 모든 피어링 위치의 기본 중복성입니다.
- 연결 가동 시간 SLA입니다.
- 비즈니스용 Skype에 대한 QoS 지원.

**Microsoft 클라우드 서비스에 연결**

ExpressRoute를 사용하면 모든 지역에서 다음 서비스에 직접 액세스할 수 있습니다.

- Microsoft Office 365
- Microsoft Dynamics 365
- Azure 컴퓨팅 서비스(예: Azure Virtual Machines)
- Azure 클라우드 서비스(예: Azure Cosmos DB 및 Azure Storage)

**보안 고려 사항**

- ExpressRoute를 사용하면 데이터가 **퍼블릭 인터넷을 통해 이동하지 않으므로 인터넷 통신과 관련된 잠재적인 위험에 노출되지 않습니다**. ExpressRoute는 온-프레미스 인프라와 Azure 인프라 간의 프라이빗 연결입니다. ExpressRoute 연결이 있는 경우에도 DNS 쿼리, 인증서 해지 목록 확인 및 Azure Content Delivery Network 요청은 공용 인터넷을 통해 전송됩니다.

### 퀴즈

![Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture%204.png](Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture%204.png)

![Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture%205.png](Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture%205.png)

## Benefits and usage of Container(Blob) Storage, Disk Storage, File Storage and storage tiers

- Storage를 사용하려면 계정을 무조건 만들어야 한다 (Azure Portal, Azure CLI )
- Azure Storage는 IaaS(Infrastructure as a Service) 가상 머신 및 PaaS(Platform as a Service) 클라우드 서비스에도 사용됩니다.

![Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/Untitled%202.png](Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/Untitled%202.png)

- 계정을 만든 후, 컨테이너를 만든 후, 그 안에 blob storage를 만든다.
- 스토리지 계정은 HTTP 또는 HTTPS를 통해 전 세계 어디에서나 액세스할 수 있는 Azure Storage 데이터에 고유한 네임스페이스를 제공합니다.
    - 안전하고, 가용성이 있고, 내구성이 높고, 대규모 확장이 가능하다.

### Container(Blob) Storage

- Azure Blob Storage는 클라우드용 개체 스토리지 솔루션입니다. **방대한 양의 데이터**(예: 텍스트 또는 이진 데이터)를 저장할 수 있습니다. Azure Blob Storage는 **비정형**이므로 포함될 수 있는 데이터 종류에 대한 제한이 없습니다. Blob Storage는 수**천 개의 동시 업로드, 대용량 비디오 데이터, 끊임없이 증가하는 로그 파일을 관리**할 수 있으며, 어디서나 인터넷을 통해 연결할 수 있습니다.
- Blob은 일반적인 파일 형식으로 제한되지 않습니다. 즉, 하나의 Blob에 과학 기기에서 스트리밍된 몇 기가바이트의 이진 데이터, 다른 애플리케이션용 암호화된 메시지 또는 개발 중인 앱에 대한 사용자 지정 형식의 데이터가 포함될 수 있습니다. 디스크 스토리지와 비교해 **Blob Storage의 한 가지 이점은 개발자가 디스크를 살피거나 관리할 필요가 없다는 점**입니다. 데이터는 blob으로 업로드되고 **Azure에서 실제 스토리지 요구 사항을 관리**하기 때문입니다.
- Blob Storage가 적합한 경우는 다음과 같습니다.
    - 브라우저에 이미지 또는 문서 직접 제공
    - 분산 액세스용 파일 저장.
    - 비디오 및 오디오 스트리밍.
    - **백업/복원, 재해 복구 및 보관용 데이터 저장**
    - 온-프레미스 또는 Azure 호스팅 서비스에서 분석하기 위한 데이터 저장.
    - 가상 머신에 대해 최대 8TB의 데이터를 저장합니다.

### Disk Storage

- **Disk Storage**는 Azure 가상 머신에 디스크를 제공합니다. 애플리케이션 및 기타 서비스는 온-프레미스 시나리오에서와 같이 필요한 만큼 이러한 디스크를 액세스하고 사용할 수 있습니다. Disk Storage를 사용하면 **연결된 가상 하드 디스크에서 데이터를 영구적으로 저장 및 액세스**할 수 있습니다.
- 디스크는 SSD(반도체 드라이브)에서 종래의 회전식 HDD(하드 디스크 드라이브)에 이르기까지 다양한 크기 및 성능 계층으로 제공됩니다. 중요도가 낮은 워크로드에는 표준 SSD 및 HDD 디스크를, 중요 업무용 프로덕션 애플리케이션에는 프리미엄 SSD 디스크를, 데이터 집약적 워크로드(예: SAP HANA), 최상위 계층 데이터베이스, 트랜잭션 집약적 워크로드에는 Ultra Disks를 사용할 수 있습니다. Azure는 **IaaS(Infrastructure as a Service) 디스크**에 대해 **업계 최고의 0% 연간 실패율로** 엔터프라이즈급 내구성을 일관되게 제공합니다.
    - 디스크를 대신 하는 것이 **Azure Disk Storage**이다. 이를 추상화해서 디스크를 추가해서, 이 안에 blob storage를 만들어서 모든 종류의 file과 data를 만들 수 있다.
    - 중요도가 낮은 워크로드 (표준 SDD 및 HDD 디스크 사용).
    - 중요도가 높은 것은 SSD 디스크를 사용
    - 디스크를 손실없이 엔터프라이즈급 내구성을 일관되게 제공

### File Storage

- Azure Files는 클라우드에서 **산업 표준 SMB(서버 메시지 블록) 및 네트워크 파일 시스템(미리 보기) 프로토콜을 통해 액세스할 수 있는 완전 관리형 파일 공유를 제공**합니다. Azure File 공유는 Windows, Linux 및 macOS의 클라우드 또는 온-프레미스 배포를 통해 동시에 탑재될 수 있습니다. Azure 가상 머신이나 클라우드 서비스에서 실행되는 애플리케이션은 데스크톱 애플리케이션이 일반적인 SMB 공유를 탑재하는 것처럼 File Storage 공유를 탑재하여 파일 데이터에 액세스할 수 있습니다. 제한 없는 수의 Azure 가상 머신 또는 역할이 파일 스토리지 공유를 동시에 탑재하고 액세스할 수 있습니다. 일반적인 사용 시나리오로는 **전 세계 어디서나 파일을 공유하고, 진단 데이터 또는 애플리케이션 데이터를 공유**하는 경우가 있습니다.
- Azure Files는 다음과 같은 경우에 사용합니다.
    - **여러 온-프레미스 애플리케이션에서 파일 공유를 사용**합니다. Azure Files를 사용하면 데이터를 공유하는 애플리케이션을 Azure로 쉽게 마이그레이션할 수 있습니다. 온-프레미스 애플리케이션에서 사용하는 것과 동일한 드라이브 문자에 Azure 파일 공유를 탑재하는 경우에는 파일 공유에 액세스하는 애플리케이션 파트가 최소한의 변경으로 작동해야 합니다.
    - **구성 파일을 파일 공유에 저장하고 여러 VM에서 액세스**합니다. 그룹의 여러 개발자가 사용하는 도구 및 유틸리티를 파일 공유에 저장할 수 있으며, 이렇게 하면 모든 사람이 찾아서 동일한 버전을 사용할 수 있습니다.
    - **데이터를 파일 공유에 쓰고 이 데이터를 나중에 처리하거나 분석**합니다. 예를 들어 진단 로그, 메트릭 및 크래시 덤프에 이런 작업을 수행할 수 있습니다.
- 다음 일러스트레이션에서는 두 지역 간에 데이터를 공유하는데 사용되는 Azure Files를 보여줍니다. Azure Files는 미사용 데이터가 암호화되도록 하고 SMB 프로토콜은 데이터가 전송 중에 암호화되도록 합니다.
- Azure Files가 회사 파일 공유의 파일과 다른 한 가지 특징은 파일을 가리키는 URL을 사용하여 전 세계 어디에서나 파일에 액세스할 수 있다는 점입니다. 또한 SAS(공유 액세스 서명) 토큰을 사용하여 특정 기간에 프라이빗 자산에 액세스할 수 있습니다.
- 다음은 리소스 URI와 SAS 토큰을 보여 주는 서비스 SAS URI의 예입니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-storage-fundamentals/media/sas-storage-uri-037308fa.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-storage-fundamentals/media/sas-storage-uri-037308fa.png)

### storage tiers

- Azure Storage는 Blob Storage에 대해 서로 다른 액세스 계층을 제공하기 때문에 비용 효율적인 방식으로 개체 데이터를 저장할 수 있습니다. 사용 가능한 액세스 계층은 다음과 같습니다.
    - **핫 액세스 계층**: **자주 액세스하는 데이터(**예: 웹 사이트의 이미지)를 저장하는 데 최적화되어 있습니다.
    - **쿨 액세스 계층**: 자주 액세스하지 않고 30일 이상 저장하는 데이터(예: 고객에 대한 송장/invoice)에 최적화되어 있습니다.
    - **보관 액세스 계층**: 거의 액세스하지 않고 180일 이상 보관하며 유연한 대기 시간 요구 사항(예: **장기 백업**)이 있는 데이터에 적합합니다.
- 여러 액세스 계층에는 다음과 같은 고려 사항이 적용됩니다.
    - **핫 및 쿨 액세스 계층**만 **계정 수준에서 설정할 수 있습니다**. **보관 액세스 계층은 계정 수준에서 사용할 수 없습니다**.
    - 핫, 쿨 및 보관 계층은 업로드 중 또는 업로드 후에 Blob 수준에서 설정할 수 있습니다.
    - **쿨 액세스 계층**의 데이터는 가용성은 약간 낮아도 되지만 핫 데이터와 유사하게 여전히 내구성, 검색 대기 시간 및 처리량 특성이 높아야 합니다. 쿨 데이터의 경우 핫 데이터와 비교할 때 가용성 SLA(서비스 수준 계약)가 약간 낮고 **액세스 비용이 더 많이 들지만 스토리지 비용이 적어** 그런대로 균형이 맞습니다.
    - **보관 스토리지**는 데이터를 오프라인으로 저장하며 **스토리지 비용이 가장 적지만**, **데이터 리하이드레이션 및 액세스에 비용이 가장 많이 듭니다**.

## 문제

![Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture%206.png](Describe%20Core%20Azure%20Services%20(15~20%25)%201b7c038c5fa9462fa6a209914360ba66/capture%206.png)

## Benefits and usage of Cosmos DB, Azure SQL Database, Azure Database for MySQL, Azure Database for PostgreSQL, and SQL Managed Instance

### Cosmos DB

- Cosmos DB의 특징은 전 세계 어디에서 배포를 할 수 있도록 만든 DB이다.
- 좀 더 유연하고 탄력적이기 때문에 배포하기에 좋은 서비스이다.
- **국제적인 글로벌 회사에 추천되는 DB**
- Azure Cosmos DB는 **전 세계에 배포된 다중 모델 데이터베이스 서비스**입니다.
    - 전 세계 region에서 탄력적이고 독립적으로 스토리지를 스케일링할 수 있다.
    - 많이 사용되는 여러 API 중 하나를 사용하여 한 자릿수 밀리초의 빠른 데이터 액세스를 활용할 수 있다.
        - 뉴욕이든 서울이든 한 자릿 수의 밀리초의 빠른 데이터 액세스를 활용할 수 있다.
    - Azure Cosmos DB는 처리량, 대기 시간, 가용성 및 일관성 보장을 위해 포괄적인 서비스 수준 약정을 제공한다.
- Azure Cosmos DB는 **지속적으로 변경되는 데이터를 지원하기 위해 응답성이 뛰어난 “Always On” 애플리케이션을 빌드할 수 있는 스키마 없는 데이터를 지원**한다. 이 기능을 사용하여 전 세계 사용자가 업데이트하고 유지 관리하는 데이터를 저장할 수 있습니다.
- 예를 들어 Tailwind Traders는 전 세계의 고객이 Tailwind Traders가 만드는 다양한 도구에 대해 배우는 데 사용하는 퍼블릭 교육 포털을 제공합니다. Tailwind Traders 개발자는 데이터를 유지 관리 및 업데이트합니다. 다음 일러스트레이션은 Tailwind Traders 교육 포털 웹 사이트용 데이터를 저장하는 데 사용되는 샘플 Azure Cosmos DB 데이터베이스를 보여 줍니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-database-fundamentals/media/azure-cosmos-db-1c115364.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-database-fundamentals/media/azure-cosmos-db-1c115364.png)

- Azure Cosmos DB는 유연하다 (유연성).
    - Azure Cosmos DB는 가장 낮은 수준에서 ARS(아톰-레코드-시퀀스) 형식으로 데이터를 저장한다. 그런 다음, 데이터를 추상화하고 API로 프로젝션하여 데이터베이스를 작성할 때 이를 지정한다.
    - **SQL, MongoDB, Cassandra, Tables, Gremlin을 선택할 수 있다**. 이 수준의 유연성은 회사의 데이터베이스를 Azure Cosmos DB로 마이그레이션할 때 개발자가 가장 편안한 API를 계속 사용할 수 있음을 의미한다.
- 예시
    - 회사가 서울에 있고, 뉴욕에 있어서 여러 작은 회사가 국제적으로 있을 때 쓰기 좋은 서비스이다.

### Azure SQL Database

- Azure SQL Database는 **Microsoft SQL Server 데이터베이스 엔진의 최신 안정화 버전을 기반으로 하는 관계형 데이터베이스**입니다. SQL Database는 안정적이고 안전하며 고성능을 제공하는 완전 관리형 데이터베이스입니다. **인프라를 관리할 필요 없이 선택한 프로그래밍 언어로 데이터 기반 애플리케이션 및 웹 사이트를 빌드하는 데 사용**할 수 있습니다.
- SQL은 정형화된 관계형 DB를 말한다. 그래서 항상 row와 column이 있고, 수많은 DB가 있다.
- 비정형 (정형과 반대되는 것)
    - 스키마와 관계없이 넣을 수 있는 데이터를 말한다.
    - AVI 동영상, 텍스트로 이루어진 것들, 파일로 이루어진 여러가지의 데이터를 말한다 (워드, PPT)
- 반정형
    - 스키마가 있긴 있지만, 그 안에서 데이터를 늘리고 바꿀 수 있다.
    - 예시)
        - JSON 데이터처럼 트리 구조로 여러가지의 id값과 value 값을 묶어서 넣을 수 있고, 그 밑단으로 늘릴 수 있는 것을 말한다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-database-fundamentals/media/icon-service-sql-database-7c2a6248.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-database-fundamentals/media/icon-service-sql-database-7c2a6248.png)

**기능**

- Azure SQL Database는 **PaaS(Platform as a Service) 데이터베이스 엔진**이다.
    - 사용자 개입 없이 업그레이드, 패치, 백업 및 모니터링과 같은 대부분의 데이터베이스 관리 기능을 처리한다.
    - SQL Database는 99.99% 가용성을 제공한다.
    - SQL Database에 기본 제공되는 PaaS 기능 덕분에 비즈니스에 중요한 **도메인 특정 데이터베이스 관리 및 최적화 활동에 집중할** 수 있디.
    - SQL Database는 기본 제공되는 **고가용성**, **백업** 및 다른 **일반적인 유지 관리 작업**이 포함된 **완전 관리형 서비스**이다. Microsoft는 SQL 및 운영 체제 코드에 대한 모든 업데이트를 처리한다. 기본 인프라를 관리할 필요가 없다.
- Azure의 애플리케이션 및 솔루션을 위한 **고가용성 고성능 데이터 스토리지 계층**을 만들 수 있다.
    - SQL Database는 그래프, JSON, 공간, XML과 같은 **관계형 데이터와 비관계형 구조를 모두 처리**할 수 있기 때문에 다양한 최신 클라우드 애플리케이션을 위한 적합한 선택일 수 있다.
- **고성능 메모리 내 기술 및 인텔리전트 쿼리 처리와 같은 고급 쿼리 처리 기능을 사용**할 수 있다.
    - 실제로 SQL Server의 최신 기능은 먼저 SQL Database에 릴리스된 후 SQL Server 자체에 릴리스된다.
    - 수백만 개의 데이터베이스에서 테스트된 최신 SQL Server 기능을 업데이트 또는 업그레이드를 위한 오버헤드 없이 활용할 수 있다.

**마이그레이션** 

- Tailwind Traders는 현재 퍼블릭 웹 사이트(예: 고객 데이터, 주문 기록 및 제품 카탈로그)용 데이터 스토리지를 제공하는 SQL Server를 실행하는 여러 온-프레미스 서버를 사용한다. 또한 SQL Server를 실행하는 온-프레미스 서버는 **내부 전용 교육 포털 웹 사이트용 데이터 스토리지도 제공**한다. Tailwind Traders는 새 직원 교육 자료(예: 연구 자료, 인증 세부 정보 및 교육 증명서)에 대한 웹 사이트를 사용한다. 다음 일러스트레이션은 회사가 Azure SQL Database 교육 포털 웹 사이트에 저장할 수 있는 데이터의 형식을 보여준다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-database-fundamentals/media/azure-sql-45a3584a.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-database-fundamentals/media/azure-sql-45a3584a.png)

- Azure Database Migration Service를 사용하여 **최소한의 가동 중지 시간**으로 기존의 SQL Server 데이터베이스를 마이그레이션할 수 있다. Microsoft Data Migration Assistant는 마이그레이션을 수행하기 전에 필요한 변경 사항을 설명하는 권장 사항을 제공하는 **평가 보고서를 생성**할 수 있다. 필요한 수정을 평가하고 해결한 후 마이그레이션 프로세스를 시작할 수 있다. Azure Database Migration Service가 필요한 모든 단계를 수행합니다. 앱에서 연결 문자열만 변경해주면 된다.
    - Migration을 하려면 다운타임이 없도록 해야하며, 평가가 필요하다. 얼만큼 비용이 들고, 시간 downtime이 어느정도 들고, 관련 효과가 어느정도 되는지 알아야 한다.
    - 얼마나 돈을 save할 수 있을지, 얼마나 효율적인지 확인이 가능하다.

### Azure Database for MySQL

- Azure Database for MySQL은 클라우드의 관계형 데이터베이스 서비스이며 MySQL Community Edition **데이터베이스 엔진 5.6, 5.7 및 8.0 버전을 기**반으로 한다.
- 이 서비스와 함께 Microsoft 관리형 데이터 센터의 글로벌 네트워크에서 제공 는 **Azure의 99.99% 가용성 서비스 수준 약정이 제공된**다.
    - 이 덕분에 앱을 연중무휴로 계속 실행할 수 있다.
- 다른 방법으로 구입 또는 설계, 구축 및 관리해야 할 수도 있는 기본 제공 보안, 내결함성 및 **데이터 보호를 모든 MySQL 서버용 Azure Database에서 활용한다**.
    - MySQL용 Azure Database에서 특정 시점 복원을 사용하여 **서버를 최대 35일 전의 상태로 복원할 수 있습니다**.
- MySQL용 Azure Database는 다음과 같은 기능을 제공합니다.
    - 추가 비용 없이 기본 제공되는 고가용성
    - 예측 가능한 성능 및 포괄적인 종량제 가격 책정
    - 필요에 따라 몇 초 만에 스케일링
    - 중요한 미사용 데이터 및 사용 데이터 보호 기능
    - 자동 백업
    - 엔터프라이즈급 보안 및 규정 준수
- 이러한 기능에는 인증이 필요하지 않고 추가 비용 없이 제공됩니다. 해당 기능을 사용하면 가상 머신 및 인프라를 관리하는 대신 신속한 앱 개발 및 출시 기간 단축에 집중할 수 있습니다. 또한 Azure Database Migration Service를 사용하여 최소한의 가동 중지 시간으로 기존의 MySQL 데이터베이스를 마이그레이션할 수 있습니다. 마이그레이션을 완료한 후에는 선택한 오픈 소스 도구 및 플랫폼을 사용하여 애플리케이션을 계속 개발할 수 있습니다. 새 기술을 배울 필요가 없습니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-database-fundamentals/media/azure-db-for-mysql-conceptual-diagram-02e2a10a.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/azure-database-fundamentals/media/azure-db-for-mysql-conceptual-diagram-02e2a10a.png)

- Azure Database for MySQL은 여러 서비스 계층을 제공하며, 각 계층은 경량부터 중량까지 다양한 데이터베이스 워크로드를 지원하는 서로 다른 성능 및 기능을 제공합니다. 한 달에 몇 달러로 작은 데이터베이스에 첫 번째 앱을 빌드하고 솔루션의 요구에 맞게 규모를 조정할 수 있습니다. 동적 확장성을 사용하면 데이터베이스가 빠르게 변화하는 리소스 요구 사항에 투명하게 대응할 수 있습니다. 필요할 경우 필요한 리소스에 대해서만 요금을 지불합니다.
    - CLI에서 명령어를 내려서 관리할 수 있다.

### Azure Database for PostgreSQL

- Azure Database for **PostgreSQL은 클라우드의 관계형 데이터베이스 서비스**입니다. 서버 소프트웨어는 커뮤니티 버전의 **오픈 소스 PostgreSQL 데이터베이스 엔진을 기반**으로 합니다. Azure Database for PostgreSQL을 사용하는 동안에는 여러 도구를 사용한 경험과 PostgreSQL에 대한 전문 지식을 활용할 수 있습니다.
- 뿐만 아니라 Azure Database for PostgreSQL은 다음과 같은 이점을 제공합니다.
    - **온-프레미스 리소스에 비해 높은 기본 고가용성**. 애플리케이션 가용성을 유지하기 위한 추가 구성, 복제 또는 비용이 필요 없습니다.
    - **단순하고 유연한 가격 책정.** 소프트웨어 패치, 자동 백업, 모니터링 및 보안이 포함된 가격 책정 계층 중 선택하는 계층에 따라 예측 가능한 성능을 얻을 수 있습니다.
    - **필요에 따라 몇 초 만에 스케일 업 또는 스케일 다운**합니다. 필요한 대로 컴퓨팅 또는 스토리지 규모를 독립적으로 조정하여 사용량에 맞게 서비스를 조정할 수 있습니다.
    - **조정 가능한 자동 백업 및 특정 시점 복원(**최대 35일).
    - 엔터프라이즈급 보안 및 규정 준수를 통해 중요한 미사용 데이터 및 사용 중인 데이터를 안전하게 보호. 이 보안은 디스크의 데이터 암호화 및 클라이언트와 서버 통신 간 SSL 암호화에 적용됩니다.
- Azure Database for PostgreSQL은 두 배포 옵션, 즉 **단일 서버** 및 **하이퍼스케일(Citus)** 로 사용할 수 있습니다.

**단일 서버**

- 단일 서버 배포 옵션은 다음과 같은 **이점**을 누릴 수 있습니다.
    - 추가 비용 없이 기본 제공되는 **고가용성**(99.99% SLA)
    - 예측 가능한 성능 및 포괄적인 **종량제 가격 책정**
    - 필요에 따라 몇 초 만에 수직적 스케일링
    - 서버를 평가하기 위한 모니터링 및 경고
    - 엔터프라이즈급 보안 및 규정 준수
    - 중요한 **미사용 데이터 및 사용 데이터 보호 기능**
    - **최대 35일 동안 자동 백업 및 지정 시간 복원**
- 이러한 모든 기능에는 **인증이 필요하지 않고** **추가 비용 없이 제공**됩니다. (비즈니스적으로 탄력적으로 비용 관리 가능) 가상 머신 및 인프라를 관리하는 대신 **신속한 애플리케이션 개발 및 출시 기간 단축에 집중**할 수 있다. 새로운 기술을 습득하지 않고도 원하는 오픈 소스 도구와 플랫폼을 사용하여 애플리케이션을 계속 개발할 수 있다.
- 단일 서버 배포 옵션에서 제공하는 세 가지 가격 책정 계층은 기본, 범용 및 메모리 최적화의 세 가지 가격 책정 계층 중 하나에서 만들 수 있습니다. 각 계층에서는 데이터베이스 작업을 지원하는 다양한 리소스 기능을 제공합니다. 한 달에 몇 달러로 작은 데이터베이스에 첫 번째 앱을 빌드하고 솔루션의 요구에 맞게 규모를 조정할 수 있습니다. 동적 확장성을 사용하면 데이터베이스가 빠르게 변화하는 리소스 요구 사항에 투명하게 대응할 수 있습니다. 필요할 경우 필요한 리소스에 대해서만 요금을 지불합니다.

**하이퍼스케일(Citus)**

- 하이퍼스케일(Citus) 옵션은 분할을 사용하여 여러 머신에 걸쳐 쿼리를 수평으로 스케일링합니다. 쿼리 엔진은 들어오는 SQL 쿼리를 이러한 서버 간에 병렬 처리하여 큰 데이터 세트에서 더 빠르게 응답합니다. 이 옵션은 더 뛰어난 스케일링과 성능이 필요한 애플리케이션, 일반적으로 100GB의 데이터에 이르거나 이미 초과한 워크로드를 처리합니다.
- 하이퍼스케일(Citus) 배포 옵션은 다중 테넌트 애플리케이션, 실시간 운영 분석 및 높은 처리량 트랜잭션 워크로드를 지원합니다. PostgreSQL용으로 빌드된 애플리케이션은 표준 연결 라이브러리 및 최소한의 변경을 통해 하이퍼스케일(Citus)에서 분산 쿼리를 실행할 수 있습니다.

### SQL Managed Instance

- Managed Instance는 parse 데이터 형태이다.
- 데이터를 클라우드로 이동한다.
- 하드웨어를 따로 구매할 필요도 없고, 관련 소프트웨어도 관리할 필요 없다. 그래서 온-프레미스 인프라를 관리하는 추가적인 오버헤드를 유지/관리할 필요가 없다.
- Azure SQL Managed Instance는 **확장 가능한 지능형 클라우드 데이터베이스 서비스로, 완전히 관리되는 서비스형 에버그린 플랫폼의 모든 이점에 가장 광범위한 SQL Server 데이터베이스 엔진 호환성을 결합**했습니다. SQL Managed Instance는 최신 SQL Server(Enterprise Edition) 데이터베이스 엔진과 거의 100% 호환되며, 일반적인 보안 문제를 해결하는 원시 VNet(가상 네트워크) 구현과 기존 SQL Server 고객에게 친숙한 비즈니스 모델을 제공합니다. SQL Managed Instance를 통해 기존 SQL Server 고객은 애플리케이션 및 데이터베이스 변경을 최소화하고 온-프레미스 애플리케이션을 클라우드로 이동할 수 있습니다. 이와 동시에 SQL Managed Instance는 모든 PaaS 기능(자동 패치 및 버전 업데이트, 자동화된 백업, 고가용성)을 유지하므로 관리 오버헤드와 TCO를 크게 줄일 수 있습니다.
- 다음 다이어그램은 SQL Managed Instance의 주요 기능을 설명합니다.

![https://docs.microsoft.com/ko-kr/azure/azure-sql/managed-instance/media/sql-managed-instance-paas-overview/key-features.png](https://docs.microsoft.com/ko-kr/azure/azure-sql/managed-instance/media/sql-managed-instance-paas-overview/key-features.png)

- Azure SQL Managed Instance는 최대한 적은 마이그레이션 작업을 통해 많은 수의 앱을 온-프레미스 또는 IaaS, 자체 구축 또는 ISV 제공 환경에서 완전 관리형 PaaS 클라우드 환경으로 마이그레이션하려는 고객을 위해 설계되었습니다. 완전히 자동화된 [Azure Database Migration Service](https://docs.microsoft.com/ko-kr/azure/dms/tutorial-sql-server-to-managed-instance#create-an-azure-database-migration-service-instance)를 사용하면 기존 SQL Server 인스턴스를 **SQL Managed Instance로 옮길 수 있다**. 여기에서는 SQL Server와의 호환성이 제공되고 네이티브 VNet 지원을 통해 고객 인스턴스를 완벽하게 격리합니다. 마이그레이션 옵션 및 도구에 대한 자세한 내용은 [마이그레이션 개요: SQL Server에서 Azure SQL Managed Instance로 마이그레이션](https://docs.microsoft.com/ko-kr/azure/azure-sql/migration-guides/managed-instance/sql-server-to-managed-instance-overview)을 참조하세요.Software Assurance를 사용하면 [SQL Server에 대한 Azure 하이브리드 혜택](https://azure.microsoft.com/pricing/hybrid-benefit/)을 사용하여 SQL Managed Instance에서 기존 라이선스를 할인된 가격으로 교환할 수 있습니다. SQL Managed Instance는 클라우드에서 높은 보안과 풍부한 프로그래밍 기능 영역이 필요한 SQL Server 인스턴스를 위한 최상의 마이그레이션 대상입니다.

## Benefits and usage of Azure Marketplace

Azure Marketplace는 Azure에서 실행되도록 인증받고 최적화된 애플리케이션을 호스트하는 온라인 스토어입니다. 여기서는 **AI 및 기계 학습에서 웹 애플리케이션까지 다양한 유형의 애플리케이션을 찾아볼 수 있습니**다. 곧 알게 되겠지만, 스토어에서의 배포는 마법사 스타일의 사용자 인터페이스를 사용하여 Azure Portal을 통해 진행됩니다. 이 사용자 인터페이스를 사용하면 여러 솔루션을 손쉽게 평가할 수 있습니다.

여기서는 Azure Marketplace의 WordPress 애플리케이션 옵션 중 하나를 사용하여 웹 사이트를 만들겠습니다.