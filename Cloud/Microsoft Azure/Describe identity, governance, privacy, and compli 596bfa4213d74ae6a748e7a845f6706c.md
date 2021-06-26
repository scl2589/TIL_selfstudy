# Describe identity, governance, privacy, and compliance features (20~25%)

[https://www.youtube.com/watch?v=ewDuJSpEh5A](https://www.youtube.com/watch?v=ewDuJSpEh5A)

- 1시간 40분 36초

# Core Azure Identity Services

- 인증(AuthN)은 사용자의 ID를 확인합니다.
- 권한 부여(AuthZ)는 인증된 사용자의 액세스 수준을 설정합니다.
- SSO(Single Sign-On)를 사용하면 사용자가 한 번 로그인하고 해당 자격 증명을 사용하여 여러 리소스 및 애플리케이션에 액세스할 수 있습니다.
- Azure AD(Azure Active Directory)는 클라우드 기반 ID 및 액세스 관리 서비스입니다. Azure AD를 사용하면 조직에서 비즈니스 요구 사항에 따라 앱 및 리소스에 대한 액세스를 제어할 수 있습니다.
- Azure AD Multi-Factor Authentication은 인증 완료에 2개 이상의 요소를 요구하여 ID에 추가 보안을 제공합니다. 일반적으로 다단계 인증에는 사용자가 알고 있는 항목, 사용자가 갖고 있는 항목, 사용자의 신분이 포함될 수 있습니다.
- 조건부 액세스는 사용자 위치 등의 ID 신호에 따라 리소스에 대한 액세스를 허용(또는 거부)하기 위해 Azure AD에서 사용하는 도구입니다.

## Explain the difference between authentication and authorization

- 인증과 권한 부여

### **인증이란?**

- 인증은 **리소스에 액세스하려는 사람 또는 서비스의 ID를 설정하는 프로세스**입니다. 당사자에게 **합법적인 자격 증명을 요구하는 행동**이 포함되고, **ID 및 액세스 제어에 사용할 보안 주체를 만들기 위한 기반을 제공**하며, **사용자가 본인인지 확인**합니다.

### **권한 부여란?**

- 인증은 사용자의 ID를 확인하는 반면, 권한 부여는 **인증된 사용자 또는 서비스에 부여되는 액세스 수준을 설정하는 프로세스**입니다. 액세스할 수 있는 데이터와 해당 데이터로 할 수 있는 작업을 지정합니다.

### **인증과 권한 부여 사이에 어떤 관계가 있나요?**

- 다음은 인증과 권한 부여 사이의 관계를 보여주는 다이어그램입니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-access-azure-identity-services/media/2-id-card-access.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-access-azure-identity-services/media/2-id-card-access.png)

- ID 카드는 사용자가 자신의 신분을 증명해야 하는 자격 증명을 나타냅니다(자격 증명 종류는 이 모듈의 뒷부분에서 설명). 인증되면 권한 부여에서는 사용자가 액세스할 수 있는 애플리케이션, 리소스 및 데이터의 종류를 정의합니다.

## Define Azure Active Directory

Azure AD(Azure Active Directory)

- Microsoft 클라우드 애플리케이션 및 자체 개발한 클라우드 애플리케이션에 사용자가 로그인하고 액세스할 수 있도록 하는 ID 서비스를 제공
- 또한 Azure AD가 SSO(Single Sign-On)를 지원

Tailwind Traders는 이미 Active Directory를 사용하여 온-프레미스 환경을 보호하고 있습니다. 이 회사는 사용자가 클라우드의 애플리케이션과 데이터에 액세스하기 위해 여러 사용자 이름과 암호를 기억할 필요가 없게 만들려 합니다.

### 정의

- Active Directory는 Azure AD와 관련되어 있지만 몇 가지 중요한 차이점이 있습니다.
- Microsoft는 사용자당 단일 ID를 사용하여 여러 온-프레미스 인프라 구성 요소 및 시스템을 관리할 수 있는 기능을 조직에 제공하기 위해 Windows 2000에 Active Directory를 도입했습니다.
- **온-프레미스 환경의 경우 Windows Server에서 실행되는 Active Directory**는 **조직에서 관리하는 ID 및 액세스 관리 서비스를 제공**합니다. **Azure AD는 Microsoft의 클라우드 기반 ID 및 액세스 관리 서비스**입니다. Azure AD를 사용해 **ID 계정을 관리**하며 Microsoft에서 해당 **서비스를 전역적으로 사용할 수 있도록 지원**합니다. Active Directory를 사용해 보았다면 Azure AD가 친숙할 것입니다.
- Active Directory를 사용하여 온-프레미스에서 ID를 보호하는 경우 Microsoft는 로그인 시도를 모니터링하지 않습니다**. Azure AD와 Active Directory를 연결**하는 경우 Microsoft는 추가 비용 없이 **의심스러운 로그인 시도를 감지하여 사용자를 보호**할 수 있습니다. 예를 들어 Azure AD는 예기치 않은 위치 또는 알 수 없는 디바이스에서의 로그인 시도를 감지할 수 있습니다.

### Azure Active Directory 사용하는 사람

- **IT 관리자**
    - 관리자는 Azure AD를 사용하여 **비즈니스 요구 사항에 따라 애플리케이션 및 리소스에 대한 액세스를 제어**할 수 있습니다.
- **앱 개발자**
    - 개발자는 Azure AD를 사용하여 **앱에 SSO 기능을 추가하거나 사용자의 기존 자격 증명을 사용하여 앱을 사용할 수 있도록 설정**하는 등 자신이 빌드하는 애플리케이션에 기능을 추가하는 표준 기반 접근 방식을 제공할 수 있습니다.
- **사용자**
    - 사용자는 자신의 ID를 관리할 수 있습니다. 예를 들어 **셀프 서비스 암호 재설정**을 사용하면 IT 관리자 또는 지원 센터의 개입 없이 **자신의 암호를 변경하거나 다시 설정**할 수 있습니다.
- **온라인 서비스 구독자**
    - Microsoft 365, Microsoft Office 365, Azure 및 Microsoft Dynamics CRM Online 구독자는 이미 Azure AD를 사용하고 있습니다.
    - ***테넌트*** 는 조직을 의미합니다. 일반적으로 테넌트는 다른 테넌트와 구분되며 **자체 ID를 갖습니다**.
    - 각 Microsoft 365, Office 365, Azure 및 Dynamics CRM Online 테넌트는 자동으로 Azure AD 테넌트입니다.

다음은 IT 관리자가 Active Directory로 작업할 때 Azure Portal에서 볼 수 있는 내용의 스크린샷입니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-access-azure-identity-services/media/3-azure-active-directory.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-access-azure-identity-services/media/3-azure-active-directory.png)

## Describe the functionality and usage of Azure Active Directory

### Azure AD에서 제공하는 서비스

- **인증**
    - 여기에는 **애플리케이션 및 리소스에 액세스하기 위한 ID 확인**이 포함됩니다. 셀프 서비스 **암호 재설정**, **다단계 인증**, **금지된 암호의 사용자 지정 목록** 및 **스마트 잠금 서비스**와 같은 기능도 포함됩니다.
        - 금지된 암호 - 자주 쓰는 암호 (예시. password와 같은 자주 쓰는 암호는 금지시키기)
- **Single Sign-On**
    - **SSO**를 사용하면 **한 가지 사용자 이름과 한 가지 암호만 기억**하면 **여러 애플리케이션에 액세스할 수 있습니다**. 한 ID가 한 사용자에게 연결되므로 **보안 모델이 간소화**됩니다. 사**용자 역할이 변경되거나 사용자가 조직을 떠날 때 액세스 수정이 해당 ID에 연결되어 있으므로 계정을 변경하거나 비활성화하는 과정이 대폭 축소**됩니다.
- **애플리케이션 관리**
    - Azure AD를 사용하여 **클라우드 및 온-프레미스 앱을 관리**할 수 있습니다. 애플리케이션 **프록시, SaaS 앱, My Apps 포털(*액세스 패널* 이라고도 함), Single Sign-On** 등의 기능이 더 나은 사용자 환경을 제공합니다.
- **디바이스 관리**
    - Azure AD는 **개별 사용자의 계정뿐만 아니라 디바이스 등록도 지원**합니다. 디바이스를 등록하면 Microsoft Intune과 같은 도구를 통해 **디바이스를 관리**할 수 있습니다. 또한 디바이스 기반 조건부 액세스 정책을 통해 요청하는 사용자 계정에 관계없이 알려진 디바이스의 액세스 시도만 허용할 수 있습니다.

### Azure AD가 보호할 수 있는 리소스

- Azure AD를 통해 사용자는 **외부 및 내부 리소스에 모두 액세스**할 수 있습니다.
- 외부 리소스
    - Microsoft Office 365, Azure Portal, 기타 여러 SaaS(Software as a Service) 애플리케이션이 포함될 수 있습니다.
- 내부 리소스
    - **조직 내에서 개발한 클라우드 애플리케이션**과 함께 **회사 네트워크 및 인트라넷에 있는 앱**이 포함될 수 있습니다.

## Describe the functionality and usage of Conditional Access, Multi-Factor Authentication (MFA), and Single Sign-On(SSO)

### Single Sign-On

- Single Sign-On을 사용하면 **사용자가 한 번 로그인하고 해당 자격 증명을 사용하여 여러 공급자의 여러 리소스 및 애플리케이션에 액세스**할 수 있습니다.
- **더 많은 ID는 더 많은 암호를 기억하고 변경해야 한다는 뜻**입니다. 암호 정책은 애플리케이션마다 다를 수 있습니다. 복잡한 암호를 요구하는 수준이 높아지면 사용자가 암호를 기억하기가 더 어려워집니다. 사용자가 관리할 암호가 많을수록 자격 증명 관련 보안 인시던트가 발생할 위험이 높습니다.
- 해당 ID를 모두 관리하는 프로세스를 생각해 봅시다. 계정 잠금 및 암호 재설정 요청을 처리하는 기술 지원팀의 부담이 가중됩니다. 사용자가 조직을 떠날 때 해당 사용자의 모든 ID를 추적하여 비활성화는 것이 어려울 수 있습니다. ID를 간과하면 제거했어야 하는 ID의 액세스를 허용할 수 있습니다.
- **SSO를 사용하는 경우 하나의 ID와 하나의 암호만 기억**하면 됩니다. 애플리케이션 전반에 걸친 액세스 권한이 사용자와 연결된 단일 ID에 부여되므로 보안 모델이 간소화됩니다. 사용자가 역할을 변경하거나 조직을 떠나면 액세스 권한이 단일 ID로 제한됩니다. 이렇게 변경하면 계정을 변경하거나 사용하지 않도록 설정하는 데 필요한 노력이 크게 줄어듭니다. **계정에 SSO를 사용하면 사용자는 자신의 ID를 쉽게 관리하고 조직은 보안 역량을 향상**할 수 있습니다.
- 이 모듈 마지막에서 Azure AD를 통해 SSO를 활성화하는 방법에 대한 리소스를 찾을 수 있습니다.

### 다단계 인증

- *다단계 인증* 은 **로그인 프로세스 중에 사용자에게 추가적인 형태의 ID를 묻는 프로세스**입니다. 휴대폰 또는 지문 스캔의 코드를 예로 들 수 있습니다.
- 웹 사이트, 전자 메일 또는 온라인 게임 서비스에 로그인하는 과정에 대해 생각해 보세요. 사용자 이름 및 암호 외에 휴대폰으로 전송된 추가 코드를 입력해야 했던 적이 있나요? 있다면 다단계 인증을 사용하여 로그인한 것입니다.
- 다단계 인증은 **인증 완료에 2개 이상의 요소를 요구하여 ID를 추가로 보호**합니다.
- 이러한 요소는 다음 **세 가지 범주로 분류**됩니다.
    - **사용자가 알고 있는 항목**

        이메일 주소 및 암호가 여기에 해당할 수 있습니다.

    - **사용자가 보유한 항목**

        사용자의 휴대폰으로 전송되는 코드가 여기에 해당할 수 있습니다.

    - **사용자의 신원**

        여러 모바일 디바이스에서 사용되는 지문 또는 얼굴 인식처럼 일반적으로 일종의 생체 인식 속성에 해당합니다.

    ![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-access-azure-identity-services/media/4-multi-factor-authentication.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-access-azure-identity-services/media/4-multi-factor-authentication.png)

- 다단계 인증은 자**격 증명 노출(예: 도난당한 사용자 이름 및 암호)의 영향을 제한**하여 **ID 보안을 강화**합니다. 다단계 인증이 사용될 경우 사용자의 암호를 알고 있는 공격자가 완벽하게 인증하려면 사용자의 전화기나 사용자의 지문도 있어야 합니다.
- **다단계 인증과 단일 단계 인증을 비교**해 봅시다.
    - 단일 단계 인증에서는 공격자가 사용자 이름과 암호만 있으면 인증할 수 있습니다.
    - 다단계 인증은 보안에 상당한 이점을 제공하므로 되도록이면 다단계 인증을 사용하도록 설정해야 합니다.

### Multi-Factor Authentication (MFA)

- Azure AD Multi-Factor Authentication은 **다단계 인증 기능을 제공하는 Microsoft 서비스**입니다. Azure AD Multi-Factor Authentication을 사용하면 **사용자가 로그인 중에 전화 통화 또는 모바일 앱 알림과 같은 추가 인증 형식을 선택**할 수 있습니다.
- 다음 서비스에서 Azure AD Multi-Factor Authentication 기능을 제공합니다.
    - **Azure Active Directory**
        - **Azure Active Directory Free 버전**을 사용하면 관리자가 Microsoft Authenticator 앱, 전화 통화 또는 SMS 코드를 통해 ‘전역 관리자’ 액세스 수준이 제공되는 Azure AD Multi-Factor Authentication을 사용할 수 있습니다. Azure AD 테넌트에서 ‘보안 기본값’을 사용하도록 설정하여 Microsoft Authenticator 앱을 통해서만 Azure AD Multi-Factor Authentication을 모든 사용자에게 적용할 수도 있습니다.
        - Azure Active Directory Premium(P1 또는 P2 라이선스)을 사용하면 조건부 액세스 정책을 통해 Azure AD Multi-Factor Authentication을 포괄적이고 세부적으로 구성할 수 있습니다(잠시 후 설명).
    - **Office 365용 다단계 인증**
        - Azure AD Multi-Factor Authentication 기능의 하위 집합은 Office 365 구독의 일부입니다.
- 라이선스 및 Azure AD Multi-Factor Authentication 기능에 대한 자세한 내용은 [사용 가능한 Azure AD Multi-Factor Authentication 버전](https://docs.microsoft.com/ko-kr/azure/active-directory/authentication/concept-mfa-licensing#available-versions-of-azure-multi-factor-authentication?azure-portal=true)을 참조하세요.

### Conditional Access (조건부 액세스)

- **조건부 액세스**는 **ID *신호* 에 따라 리소스에 대한 액세스를 허용(또는 거부)하기 위해 Azure Active Directory에서 사용하는 도구**입니다. 이러한 신호에는 사**용자의 신분, 사용자의 위치 및 사용자가 액세스를 요청하는 디바이스가 포함**됩니다.
- 조건부 액세스를 통해 IT 관리자는 다음을 수행할 수 있습니다.
    - 언제 어디서나 **사용자의 생산성**을 높입니다.
    - **조직의 자산을 보호**합니다.
- 또한 조건부 액세스를 사용하면 **사용자에게 보다 세분화된 다단계 인증 환경을 제공**할 수 있습니다. 예를 들어 **사용자가 알려진 위치에 있는 경우 두 번째 인증 단계를 거치지 않을 수 있습니다**. 그러나 **로그인 신호가 비정상이거나 사용자가 예기치 않은 위치에 있는 경우 두 번째 인증 단계를 거쳐야 할 수 있습니다.**
- 로그인하는 동안 조건부 액세스는 사용자의 신호를 수집하고 해당 신호를 기반으로 결정을 내린 다음, 액세스 요청을 허용하거나, 거부하거나, 다단계 인증에 응하도록 하는 식으로 해당 결정을 적용합니다.
- 관련 흐름을 보여 주는 다이어그램은 다음과 같습니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-access-azure-identity-services/media/4-conditional-access-signal-decision-enforcement.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/secure-access-azure-identity-services/media/4-conditional-access-signal-decision-enforcement.png)

- 여기서 **신호는 사용자의 위치, 사용자의 디바이스 또는 사용자가 액세스하려고 하는 애플리케이션**일 수 있습니다.
- 해당 **신호에 근거하여 사용자가 정상적인 위치에서 로그인하는 경우 모든 액세스를 허용하도록 결정**할 수 있습니다. 사용자가 비정상적인 위치나 고위험으로 표시된 위치에서 로그인하는 경우 사용자가 두 번째 인증 형식을 제공한 이후에 액세스가 완전히 차단되거나 허용될 수 있습니다.
- **적용은 의사 결정을 수행하는 작업**입니다. 예를 들어 **액세스를 허용하거나 사용자에게 두 번째 인증 형식을 입력하도록 요구하는 작업**입니다.

### **조건부 액세스를 언제 사용할 수 있나요?**

조건부 액세스는 다음 경우에 유용합니다.

- 애플리케이션에 액세스하려면 **다단계 인증이 필요**합니다.
    - **모든 사용자에게 다단계 인증을 요구**할지, **관리자와 같은 특정 사용자에게만 요구**할지 구성할 수 있습니다.
    - 다단계 인증을 모든 네트워크에서 이루어지는 액세스에 적용할 것인지 아니면 신뢰할 수 없는 네트워크에서 이루어지는 액세스에만 적용할 것인지 구성할 수도 있습니다.
- **승인된 클라이언트 애플리케이션을 통해서만 서비스에 액세스하도록 요구**합니다.
    - 예를 들어 사용자가 Outlook 모바일 앱처럼 승인된 클라이언트 앱을 사용하는 경우 사용자가 모바일 디바이스에서 Office 365 서비스에 액세스 가능하게 만들 수 있습니다.
- **사용자가 관리 디바이스에서만 애플리케이션에 액세스하도록 요구**합니다.
    - *관리형 디바이스* 는 보안 및 규정 준수 표준을 충족하는 디바이스입니다.
- 알 수 없거나 예기치 않은 위치에서의 액세스와 같이 신뢰할 수 없는 소스로부터의 액세스를 차단합니다.

조건부 액세스는 조건부 액세스 정책을 계획하고 문제를 해결하는 데 도움이 되는 *What If* 도구를 통해 제공됩니다. 해당 도구를 사용하여 사용자의 최근 로그인 시도를 바탕으로 제안된 조건부 액세스 정책을 모델링하여 해당 정책이 설정된 경우의 영향을 확인할 수 있습니다. What If 도구를 사용하여 구현 전에 제안된 조건부 액세스 정책을 테스트할 수 있습니다.

### **조건부 액세스는 어디서 제공하나요?**

조건부 액세스를 사용하려면 Azure AD Premium P1 또는 P2 라이선스가 필요합니다. Microsoft 365 Business Premium 라이선스가 있는 경우 조건부 액세스 기능도 사용할 수 있습니다.

## 퀴즈

![Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled.png](Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled.png)

# Azure Governance Features

- ‘**거버넌스**’라는 용어는 **규칙 및 정책을 설정하고 해당 규칙 및 정책이 적용되도록 하는 일반적인 프로세스**를 설명합니다.
- 클라우드에서 실행하는 경우 적절한 거버넌스 전략은 클라우드에서 관리하는 애플리케이션 및 리소스에 대한 제어를 유지 관리하는 데 도움이 됩니다. 환경에 대한 제어를 유지 관리하면 다음을 준수하게 됩니다.
    - 산업 표준(예: [PCI DSS](https://docs.microsoft.com/ko-kr/microsoft-365/compliance/offering-pci-dss?view=o365-worldwide%3fazure-portal%3dtrue)).
    - 회사 또는 조직 표준(예: 네트워크 데이터가 암호화되도록 함).

    거버넌스는 다음 항목이 있는 경우에 가장 유용합니다.

    - Azure에서 작업하는 여러 엔지니어링 팀.
    - 관리할 여러 개의 구독.
    - 적용해야 하는 규정 요구 사항.
    - 모든 클라우드 리소스에서 따라야 하는 표준.

## 구독 거버넌스 전략

### **결제**

구독당 하나의 청구 보고서를 만들 수 있습니다. 여러 부서가 있고 클라우드 비용의 “차지백”을 수행해야 하는 경우 하나의 가능한 솔루션은 부서 또는 프로젝트별로 구독을 구성하는 것입니다.

리소스 태그도 도움이 될 수 있습니다. 태그는 이 모듈의 뒷부분에서 살펴보겠습니다. 필요한 구독 수와 구독 이름을 정의할 때에는 내부의 요금 청구 요구 사항을 고려합니다.

### **Access Control**

구독은 Azure 리소스의 배포 경계입니다. 모든 구독은 Azure Active Directory 테넌트와 연결됩니다. 각 테넌트는 관리자에게 Azure 역할 기반 액세스 제어를 사용하여 정의된 역할을 통해 세분화된 액세스를 설정하는 기능을 제공합니다.

구독 아키텍처를 설계할 때에는 배포 경계 요소를 고려합니다. 예를 들어 개발 및 프로덕션 환경을 위한 별도 구독이 필요한가요? 별도 구독을 만들면 각 구독에 대한 액세스를 개별적으로 제어하고 해당 리소스를 서로 격리할 수 있습니다.

### **구독 제한**

구독에는 몇 가지 리소스 제한도 있습니다. 예를 들어 구독당 최대 네트워크 Azure ExpressRoute 회로 수는 10개입니다. 해당 제한은 디자인 단계에서 고려해야 합니다. 이러한 한도를 초과해야 할 때 구독을 더 추가해야 할 수도 있습니다. 하드 한도 최댓값에 도달하면 해당 한도를 유연하게 늘릴 수 없습니다.

관리 그룹은 구독 관리도 지원할 수 있습니다. 관리 그룹은 여러 Azure 구독에서 액세스, 정책, 규정 준수를 관리합니다. 이 모듈의 뒷부분에서 관리 그룹에 관해 자세히 알아봅니다.

## Describe the functionality and usage of Role-Based Access Control (RBAC)

### **리소스에 역할 기반 액세스 제어는 어떻게 적용되나요?**

역할 기반 액세스 제어는 이 액세스가 적용되는 **리소스 또는 리소스 세트인 ‘범위’에 적용**됩니다.

다음은 역할과 범위 간의 관계를 보여주는 다이어그램입니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/4-role-scope.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/4-role-scope.png)

- 범위는 다음과 같습니다.
    - 관리 그룹(여러 구독의 컬렉션) Management group
    - 단일 구독 Subscription
    - 리소스 그룹. Resource Group
    - 단일 리소스 Resource
- *관찰자*, *리소스를 관리하는 사용자*, *관리자* 및 *자동화된 프로세스* 는 일반적으로 다양한 역할이 각각 할당되는 사용자 또는 계정 종류를 설명합니다.
- **부모 범위에서 액세스 권한을 부여**하는 경우 **해당 권한은 모든 자식 범위에 상속**됩니다. 예를 들면 다음과 같습니다.
    - 관리 그룹 범위에서 사용자에게 **[소유자](https://docs.microsoft.com/ko-kr/azure/role-based-access-control/built-in-roles#owner) 역할을 할당하면 해당 사용자는 관리 그룹 내에서 모든 구독의 모든 항목을 관리**할 수 있습니다.
    - 구독 범위에서 **그룹에 [읽기 권한자](https://docs.microsoft.com/ko-kr/azure/role-based-access-control/built-in-roles#reader) 역할을 할당하면 해당 그룹의 멤버는 구독 내의 모든 리소스 그룹 및 리소스를 볼 수 있습니다**.
    - 리소스 그룹 범위에서 애플리케이션에 **[기여자](https://docs.microsoft.com/ko-kr/azure/role-based-access-control/built-in-roles#contributor) 역할을 할당하면 애플리케이션은 해당 리소스 그룹 내에서 모든 형식의 리소스를 관리할 수 있지만 구독 내의 다른 리소스 그룹은 관리할 수 없습니다**.

### **Azure RBAC는 언제 사용해야 하나요?**

다음 작업이 필요한 경우 Azure RBAC를 사용합니다.

- 한 사용자는 **구독의 VM을 관리**하고 다른 사용자는 **가상 네트워크를 관리하도록 허용**합니다.
    - VM을 관리하는 사람은 VM을 관리, 네트워크 관리하는 사람은, 가상 네트워크를 관리하도록 허용할 수 있다.
- **데이터베이스 관리자 그룹이 구독의 SQL 데이터베이스를 관리하도록 허용**합니다.
- 사용자가 가상 머신, 웹 사이트, 서브넷 등 리소스 그룹의 모든 리소스를 관리하도록 허용합니다.
- 애플리케이션이 **리소스 그룹의 모든 리소스에 액세스하도록 허용**합니다.

이는 몇 가지 예일 뿐입니다. 이 모듈의 끝부분에서 기본 제공 역할의 전체 목록을 찾을 수 있습니다.

### **Azure RBAC는 어떻게 적용되나요?**

- Azure RBAC는 Azure Resource Manager를 전달되는 Azure 리소스에 대해 시작되는 모든 작업에 적용됩니다. Resource Manager는 클라우드 리소스를 구성하고 보호하는 방법을 제공하는 관리 서비스입니다.
- 일반적으로 **Azure Portal, Azure Cloud Shell, Azure PowerShell 및 Azure CLI**에서 **Resource Manager에 액세스합니다**. Azure RBAC는 애플리케이션 또는 데이터 수준에서 액세스 권한을 적용하지 않습니다. 애플리케이션 보안은 애플리케이션에서 처리해야 합니다.
- **RBAC는 ‘허용 모델’을 사용**합니다. 역할이 할당되면 RBAC는 **읽기, 쓰기 또는 삭제와 같은 특정 작업을 수행하도록 *허용*** 합니다. 한 역할 할당은 리소스 그룹에 대한 읽기 권한을 부여하고 다른 역할 할당은 동일한 리소스 그룹에 대한 쓰기 권한을 부여하는 경우 사용자는 해당 리소스 그룹에 대한 읽기 권한과 쓰기 권한을 가집니다.

### **Azure RBAC는 누구에게 적용되나요?**

Azure RBAC는 **개별 사용자 또는 그룹에 적용**할 수 있습니다**. 서비스 주체 및 관리 ID와 같은 다른 특별한 ID 형식에도 Azure RBAC를 적용**할 수 있습니다. 해당 ID 형식은 애플리케이션 및 서비스에서 Azure 리소스에 대한 액세스를 자동화하는 데 사용됩니다.

Tailwind Traders에는 전체 IT 환경의 일부에 관심이 있는 다음 팀이 있습니다.

- IT 관리자

    이 팀은 온-프레미스와 클라우드 모두에서 기술 자산의 궁극적인 소유권을 갖고 있습니다. 이 팀은 모든 리소스에 대한 전체 제어 권한이 필요합니다.

- Backup 및 재해 복구

    이 팀은 **정기 백업 상태를 관리**하고 **데이터 또는 시스템 복구를 호출**하는 작업을 담당합니다.

- 비용 및 청구

    이 팀의 팀원은 기술과 관련된 비용을 추적하고 보고합니다. 또한 조직의 내부 예산을 관리합니다.

- 보안 운영

    이 팀은 모든 기술 관련 보안 인시던트를 모니터링하고 대응합니다. 이 팀은 로그 파일 및 보안 경고에 지속적으로 액세스할 수 있어야 합니다.

### **Azure RBAC 권한을 관리하려면 어떻게 할까요?**

액세스 권한은 Azure Portal의 **액세스 제어(IAM)** 창에서 관리합니다. 이 창은 누가 어떤 범위에 액세스할 수 있고 어떤 역할이 적용되는지 보여줍니다. 이 창에서 액세스 권한을 부여하거나 제거할 수도 있습니다.

다음 스크린샷은 리소스 그룹의 **액세스 제어(IAM)** 창 예를 보여줍니다. 이 예에서는 Alain Charon에게 해당 리소스 그룹의 **백업 운영자** 역할이 할당되었습니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/4-role-based-access-control-blade.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/4-role-based-access-control-blade.png)

## Describe the functionality and usage of resource

[리소스 잠금](https://docs.microsoft.com/ko-kr/azure/azure-resource-manager/management/lock-resources)을 통해 **리소스를 실수로 삭제하거나 변경하는 것을 방지**합니다.

Azure RBAC(역할 기반 액세스 제어) 정책을 적용한 경우에도 여전히 적절한 수준의 액세스 권한이 있는 사용자가 중요한 클라우드 리소스를 삭제할 수 있는 위험이 있습니다. 리소스 잠금은 리소스를 삭제하거나 변경하지 않아야 함을 미리 알리는 경고 시스템으로 간주합니다.

예를 들어 Tailwind Traders에서 IT 관리자는 Azure에서 사용되지 않는 리소스의 일상적인 정리를 수행하고 있었습니다. 관리자가 사용되지 않는 것으로 보이는 리소스를 실수로 삭제했습니다. 그러나 해당 리소스는 계절 프로모션에 사용되는 애플리케이션에 중요한 것이었습니다. 리소스 잠금을 통해 나중에 이 종류의 인시던트가 발생하는 것을 방지하려면 어떻게 해야 하나요?

### **리소스 잠금을 관리하려면 어떻게 할까요?**

**Azure Portal, PowerShell, Azure CLI 또는 Azure Resource Manager 템플릿에서 리소스 잠금을 관리**할 수 있습니다.

Azure Portal에서 잠금을 보거나 추가하거나 삭제하려면 Azure Portal에서 리소스 **설정** 창의 **설정** 섹션으로 이동합니다.

Azure Portal에서 리소스 잠금을 추가하는 방법을 보여 주는 예제는 다음과 같습니다. 다음 부분에서 비슷한 리소스 잠금을 적용합니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/7-portal-add-lock.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/7-portal-add-lock.png)

### **사용할 수 있는 잠금 수준은 무엇인가요?**

구독, 리소스 그룹 또는 개별 리소스에 잠금을 적용할 수 있습니다. 잠금 수준을 **CanNotDelete** 또는 **ReadOnly** 로 설정할 수 있습니다.

- **CanNotDelete** 는 권한 있는 사용자가 리**소스를 읽고 수정할 수 있지만, 먼저 잠금을 제거하지 않고는 리소스를 삭제할 수 없음을 의미**합니다.
- **ReadOnly** 는 **권한 있는 사용자가 리소스를 읽을 수 있지만, 리소스를 삭제하거나 변경할 수 없음을 의미**합니다. 해당 잠금을 적용하는 것은 권한 있는 모든 사용자를 Azure RBAC의 **읽기 권한자** 역할에서 부여한 권한으로 제한하는 것과 같습니다.

### **잠긴 리소스를 삭제하거나 변경하려면 어떻게 할까요?**

- 잠금을 통해 실수로 인한 변경을 방지할 수 있지만 2단계 프로세스를 수행하여 계속 변경할 수 있습니다.
- **잠긴 리소스를 수정하려면 먼저 잠금을 제거해야 합니**다. 잠금을 제거한 후에는 수행할 권한이 있는 모든 작업을 적용할 수 있습니다. 이 추가 단계에서는 작업을 수행할 수 있지만 관리자가 의도치 않은 작업을 수행하는 것을 방지할 수 있습니다.
- **리소스 잠금은 RBAC 권한에 관계 없이 적용**됩니다. **리소스 소유자라 할지라도 차단된 활동을 수행하려면 먼저 잠금을 제거**해야 합니다.

### **리소스 잠금을 Azure Blueprints와 결합**

- **클라우드 관리자가 실수로 리소스 잠금을 삭제하면 어떻게 되나요**? 리소스 잠금이 제거되면 연결된 리소스를 변경하거나 삭제할 수 있습니다.
- **보호 프로세스를 보다 강력하게 만들기 위해 Azure Blueprints와 리소스 잠금을 결합**할 수 있습니다. Azure Blueprints를 사용하면 조직에 필요한 표준 Azure 리소스 세트를 정의할 수 있습니다. 예를 들어 특정 리소스 잠금이 존재하도록 지정하는 청사진을 정의할 수 있습니다. 잠금이 제거되면 Azure Blueprints는 리소스 잠금을 자동으로 바꿀 수 있습니다.

이 모듈의 뒷부분에서 Azure Blueprints에 관해 자세히 알아봅니다.

## Describe the functionality and usage of tags

**클라우드 사용이 늘어남에 따라 구성된 상태를 유지하는 것이 더 중요**해지고 있습니다. 좋은 조직 전략은 클라우드 사용을 이해하고 비용을 관리하는 데 도움이 됩니다.

예를 들어 Tailwind Traders는 Azure에 애플리케이션을 배포하는 새로운 방법을 프로토타입화하므로 더 이상 필요하지 않을 때 **해당 환경에서 리소스를 쉽게 식별하고 삭제할 수 있도록 테스트 환경을 표시하는 방법이 필요**합니다.

관련 리소스를 구성하는 한 가지 방법은 **자체 구독에 포함**하는 것입니다. **리소스 그룹을 사용하여 관련 리소스를 관리**할 수도 있습니다. **리소스 ‘태그’는 리소스를 구성하는 또 다른 방법입니다**. **태그는 리소스에 관한 추가 정보 또는 메타데이터를 제공**합니다. 해당 메타데이터는 다음과 같은 경우에 유용합니다.

- **리소스 관리**

    태그를 사용하면 특정 워크로드, 환경, 사업부 및 소유자와 연결된 리소스를 찾고 작업할 수 있습니다.

- **비용 관리 및 최적화**

    태그를 사용하면 리소스를 그룹화하여 비용을 보고하고, 내부 비용 센터를 할당하고, 예산을 추적하고, 예상 비용을 예측할 수 있습니다.

- **운영 관리**

    태그를 사용하면 비즈니스에 대한 가용성의 중요도에 따라 리소스를 그룹화할 수 있습니다. 이렇게 그룹화하면 SLA(서비스 수준 계약)를 작성하는 데 도움이 됩니다. SLA는 여러분과 사용자 간의 작동 시간 또는 성능 보장입니다.

- **보안**

    태그를 사용하면 보안 수준(예: *퍼블릭* 또는 *기밀*)을 기준으로 데이터를 분류할 수 있습니다.

- **거버넌스 및 규정 준수**

    태그를 사용하면 거버넌스 또는 규정 준수 요구 사항(예: ISO 27001)에 부합하는 리소스를 식별할 수 있습니다.

    태그는 표준 적용 작업의 일부일 수도 있습니다. 예를 들어 모든 리소스에 소유자 또는 부서 이름으로 태그를 지정해야 할 수 있습니다.

- **워크로드 최적화 및 자동화**

    태그를 통해 복잡한 배포에 참여하는 모든 리소스를 시각화할 수 있습니다. 예를 들어 연결된 워크로드 또는 애플리케이션 이름으로 리소스에 태그를 지정하고 Azure DevOps와 같은 소프트웨어를 사용하여 해당 리소스에서 자동화된 작업을 수행할 수 있습니다.

### **리소스 태그는 어떻게 관리하나요?**

- PowerShell, Azure CLI, Azure Resource Manager 템플릿, REST API 또는 Azure Portal을 통해 리소스 태그를 추가, 수정 또는 삭제할 수 있습니다.
- **Azure Policy를 사용하여 태그를 관리**할 수도 있습니다. 예를 들어 리소스 그룹에 태그를 적용할 수 있지만 **해당 태그는 관련 리소스 그룹 내의 리소스에 자동으로 적용되지 않습니**다. Azure Policy를 사용하여 **리소스가 부모 리소스 그룹과 동일한 태그를 상속하는지 확인할 수 있습니다**. Azure Policy에 대한 자세한 내용은 이 모듈의 뒷부분에서 살펴보겠습니다.
- 또한 **Azure Policy를 사용하여 태그 지정 규칙을 적용할 수 있습니다**. 예를 들어 **새 리소스가 프로비저닝될 때 해당 리소스에 특정 태그를 추가하도록 요구**할 수 있습니다. 제거된 태그를 다시 적용하는 규칙을 정의할 수도 있습니다.

### **예제 태그 지정 구조**

리소스 태그는 이름 및 값으로 구성됩니다. 각 Azure 리소스에 하나 이상의 태그를 할당할 수 있습니다.

비즈니스 요구 사항을 검토한 후 Tailwind Traders는 다음 태그에 관해 결정합니다.

[제목 없음](https://www.notion.so/e3196e1be69d488199727eaba792de64)

다음은 프로비저닝하는 동안 가상 머신에 적용되는 해당 태그를 보여주는 예입니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/8-vm-tags.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/8-vm-tags.png)

Tailwind Traders 팀은 PowerShell 또는 Azure CLI 등에서 쿼리를 실행하여 해당 태그를 포함하는 모든 리소스를 나열할 수 있습니다.

**모든 리소스에 특정 태그가 있어야 할 필요는 없습니다**. 예를 들어 **중요 업무용 리소스에만 Impact 태그를 포함하도록 결정할 수 있습니다**. 태그가 지정되지 않은 모든 리소스는 중요 업무용으로 간주하지 않습니다.

## Describe the functionality and usage of Azure Policy

이제 거버넌스 및 비즈니스 요구 사항을 확인했으므로 리소스가 준수 상태를 ‘유지’하는 방법은 어떻게 확인하나요? 리소스 구성이 변경된 경우 알림을 표시하려면 어떻게 해야 하나요?

[Azure Policy](https://azure.microsoft.com/services/azure-policy)는 **리소스를 제어하거나 감사하는 정책을 만들고, 할당하고, 관리할 수 있는 Azure의 서비스**입니다. 해당 정책은 **관련 구성이 회사 표준을 준수하는 상태를 유지하도록 리소스 구성에 대해 다양한 규칙과 효과를 적용**합니다.

### **Azure Policy는 정책을 어떻게 정의하나요?**

- **Azure Policy를 사용하면 ‘이니셔티브’라는 개별 정책 및 관련 정책 그룹을 둘 다 정의할 수 있습니다.** Azure Policy는 **리소스를 평가하고 사용자가 만든 정책을 준수하지 않는 리소스를 강조 표시**합니다. 또한 Azure Policy는 **정책 미준수 리소스가 생성되지 않게 할 수도 있습니다.**
- Azure Policy에는 **스토리지, 네트워킹, 컴퓨팅, Security Center 및 모니터링**과 같은 범주에서 사용할 수 있는 다양한 기본 정책과 이니셔티브 정의가 제공됩니다.
- 예를 들어 해당 환경에서 **VM(가상 머신)의 특정 SKU(Stock Keeping Unit) 크기만 사용할 수 있도록 하는 정책을 정의**한다고 가정합니다. **해당 정책을 사용하도록 설정하면 새 VM을 만들거나 기존 VM의 크기를 조정할 때 해당 정책이 적용**됩니다. 또한 Azure Policy는 환경에 있는 모든 현재 VM을 평가합니다.
- 때에 따라 Azure Policy는 **정책 미준수 리소스 및 구성을 자동으로 수정하여 리소스 상태의 무결성을 보장할 수 있습니다**. 예를 들어 특정 리소스 그룹의 모든 리소스에 **AppName** 태그 및 "SpecialOrders" 값을 사용하여 태그를 지정해야 하는 경우 Azure Policy는 **해당 태그가 제거된 경우 태그를 자동으로 다시 적용**할 수 있습니다.
- 또한 애플리케이션의 배포 전 및 배포 후 단계에 적용되는 연속 통합 및 업데이트 파이프라인 정책을 적용하여 Azure Policy는 Azure DevOps와 통합됩니다.

### **Azure Policy 실제 작동 방식**

Azure Policy에서 정책을 구현하는 과정에는 다음 세 단계가 포함됩니다.

1. **정책 정의**를 만듭니다.
2. **리소스에 정의를 할당**합니다.
3. **평가 결과를 검토**합니다.

각 단계를 더 자세히 살펴보겠습니다.

### **1. 정책 정의 만들기**

**정책 정의**는 **평가할 내용과 수행할 작업을 나타냅니다**. 예를 들어 **VM이 특정 Azure 지역에 배포되지 않도록 할 수 있습니다**. 스토리지 계정을 감사하여 허용된 네트워크의 연결만 허용하는지 확인할 수도 있습니다.

모든 정책 정의에는 정책이 적용되는 조건이 있습니다. 정책 정의에는 조건이 충족될 때 발생하는 영향도 포함됩니다. 몇 가지 예제 정책 정의는 다음과 같습니다.

- **허용되는 가상 머신 SKU**

    이 정책을 사용하면 조직에서 배포할 수 있는 VM SKU 세트를 지정할 수 있습니다.

- **허용되는 위치**

    이 정책을 사용하면 조직에서 리소스를 배포할 때 지정할 수 있는 위치를 제한할 수 있습니다. 해당 효과는 지리적 규정 준수 요구 사항을 적용하는 데 사용됩니다.

- **구독에 대한 쓰기 권한이 있는 계정에서 MFA를 사용하도록 설정해야 함**

    이 정책의 경우 계정 또는 리소스 위반을 방지하려면 쓰기 권한이 있는 모든 구독 계정에 대해 MFA(Multi-Factor Authentication)를 사용하도록 설정해야 합니다.

- **CORS에서 모든 리소스가 웹 애플리케이션에 액세스하도록 허용하지 않아야 함**

    CORS(원본 간 리소스 공유)는 한 도메인에서 실행되는 웹 애플리케이션이 다른 도메인의 리소스에 액세스할 수 있게 해주는 HTTP 기능입니다. 보안상 이유로 최신 웹 브라우저는 기본적으로 사이트 간 스크립팅을 제한합니다. 이 정책은 필요한 도메인만 웹앱과 상호 작용하도록 허용합니다.

- **시스템 업데이트를 머신에 설치해야 합니다.**

    이 정책을 사용하면 Azure Security Center가 서버에서 누락된 보안 시스템 업데이트를 추천할 수 있습니다.

### **2. 리소스에 정의 할당**

정책 정의를 구현하려면 리소스에 정의를 할당합니다. ‘**정책 할당**’은 **특정 범위 내에서 발생하는 정책 정의**입니다. 이 범위는 **관리 그룹(여러 구독의 컬렉션), 단일 구독 또는 리소스 그룹**일 수 있습니다.

정책 할당은 **해당 범위 내 모든 자식 리소스에 상속**됩니다. 리소스 그룹에 적용된 정책은 해당 리소스 그룹 내 모든 리소스에 적용됩니다. 정책 할당에서 **제외해야 하는 특정 자식 리소스가 있는 경우 정책 할당에서 하위 범위를 제외할 수 있습니다.**

### **3. 평가 결과 검토**

기존 리소스에 대해 조건을 평가할 때 각 리소스는 준수 또는 미준수로 표시됩니다. 미준수 정책 결과를 검토하고 필요한 작업을 수행할 수 있습니다.

정책 평가는 시간당 한 번 정도 수행됩니다. 정책 정의를 변경하고 정책 할당을 만들면 해당 정책은 시간 내에 리소스에 대해 평가됩니다.

### **Azure Policy 이니셔티브란?**

- Azure Policy 이니셔티브는 **관련 정책을 하나의 세트로 그룹화하는 방법**입니다. 이니셔티브 정의는 더 큰 목표에 대한 규정 준수 상태를 추적하는 데 도움이 되는 모든 정책 정의를 포함합니다.
- 예를 들어 **Azure Policy에는 Azure Security Center에서 모니터링 사용 이라는 이니셔티브가 포함**됩니다. 목표는 Azure Security Center에서 모든 Azure 리소스 종류의 사용 가능한 모든 보안 권장 사항을 모니터링하는 것입니다.
- 해당 이니셔티브에는 다음 정책 정의가 포함됩니다.
    - **Security Center에서 암호화되지 않은 SQL Database 모니터링**

        이 정책은 암호화되지 않은 SQL 데이터베이스 및 서버를 모니터링합니다.

    - **Security Center에서 OS 취약성 모니터링**

        이 정책은 구성된 OS 취약성 기준을 충족하지 않는 서버를 모니터링합니다.

    - **Security Center에서 누락된 Endpoint Protection 모니터링**

        이 정책은 Endpoint Protection 에이전트가 설치되지 않은 서버를 모니터링합니다.

- 실제로 **Azure Security Center에서 모니터링 사용** **이니셔티브에는 100개가 넘는 별도 정책 정의가 포함**됩니다.
- 목표를 이루기 위해서 정책들이 모여있는 것이 정책이다.
- Azure Policy에는 HIPAA 및 ISO 27001 같은 규정 준수 표준을 지원하는 이니셔티브도 포함됩니다.

### **이니셔티브를 정의하려면 어떻게 할까요?**

- **Azure Portal을 사용**하거나 **명령줄 도구를 사용**하여 이니셔티브를 정의합니다. Azure Portal에서 이미 Azure에서 제공하는 기본 이니셔티브 목록을 검색할 수 있습니다. 자체적인 사용자 지정 정책 정의를 만들 수도 있습니다.
- 다음 이미지는 Azure Portal에서 몇 가지 예제 Azure Policy 이니셔티브를 보여 줍니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/3-define-initiatives.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/3-define-initiatives.png)

### **이니셔티브를 할당하려면 어떻게 할까요?**

정책 할당과 마찬가지로 이니셔티브 할당은 관리 그룹, 구독 또는 리소스 그룹의 특정 범위에 할당되는 이니셔티브 정의입니다.

단일 정책만 있는 경우에도 이니셔티브를 사용하면 시간이 지남에 따라 정책 수를 늘릴 수 있습니다. 연결된 이니셔티브는 할당된 상태로 유지되므로 리소스의 정책 할당을 변경하지 않고도 더 쉽게 정책을 추가하고 제거할 수 있습니다.

## Describe the functionality and usage of Azure Blueprints

**클라우드 환경이 하나의 구독을 초과**하기 시작하면 어떻게 되나요? 해당 **기능의 구성을 스케일링하여 새 구독에서 리소스에 적용해야 함을 알리려면** 어떻게 해야 하나요?

새 구독마다 Azure Policy 같은 기능을 구성하는 대신 **[Azure Blueprints](https://azure.microsoft.com/services/blueprints)를 사용하면 조직에 필요한 거버넌스 도구 및 표준 Azure 리소스의 반복 가능한 세트를 정의**할 수 있습니다. 이 방법으로 개발 팀에서는 개발 및 배포 단계를 가속화하는 기본 제공 구성 요소 세트를 사용하여 조직의 규정을 준수하면서 빌드하는 지식이 포함된 새 환경을 빠르게 빌드하고 배포할 수 있습니다.

Azure Blueprints는 다음과 같은 **다양한 리소스 템플릿 및 기타 아티팩트의 배포를 오케스트레이션**합니다.

- **역할 할당**
- **정책 할당**
- **Azure Resource Manager 템플릿**
- **리소스 그룹**

### **Azure Blueprints 실제 작동 방식**

우수 팀 또는 클라우드 보유자 팀의 클라우드 센터를 구성하는 경우 해당 팀은 Azure Blueprints를 사용하여 조직 전체에서 거버넌스 사례를 스케일링할 수 있습니다.

Azure Blueprints에서 청사진 구현에는 다음 세 단계가 포함됩니다.

1. Azure 청사진을 만듭니다.
2. 청사진을 할당합니다.
3. 청사진 할당을 추적합니다.

반면 Azure Blueprints를 사용하는 경우에는 청사진 정의(배포해야 하는 항목)와 청사진 할당(배포된 항목) 간의 관계가 유지됩니다. 즉, Azure는 리소스를 정의하는 청사진과 리소스를 연결하는 레코드를 만듭니다. 이 연결은 배포를 추적하고 감사하는 데 도움이 됩니다.

청사진의 버전도 관리됩니다. 버전 관리를 통해 청사진의 변경 내용을 추적하고 설명할 수 있습니다.

### **청사진 아티팩트란?**

청사진 정의의 각 구성 요소를 ‘**아티팩트**’라고 합니다.

아티팩트에 추가 매개 변수(구성)가 없을 수 있습니다. 추가 구성이 필요 없는 **SQL Server에 위협 탐지 배포** 를 예로 들 수 있습니다.

아티팩트에는 구성할 수 있는 매개 변수가 하나 이상 포함될 수도 있습니다. 다음 스크린샷은 **허용되는 위치** 정책을 보여 줍니다. 해당 정책에는 허용되는 위치를 지정하는 매개 변수가 포함됩니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/10-allowed-locations.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/10-allowed-locations.png)

청사진 정의를 만들거나 범위에 청사진 정의를 할당할 때 매개 변수 값을 지정할 수 있습니다. 이 방법으로 하나의 표준 청사진을 유지 관리할 수 있지만 정의가 할당된 각 범위에서 관련 구성 매개 변수를 유연하게 지정할 수 있습니다.

### **Tailwind Traders는 ISO 27001 준수를 위해 Azure Blueprints를 사용하나요?**

[ISO 27001](https://www.iso.org/isoiec-27001-information-security.html)은 국제 표준화 기구에서 게시한 IT 시스템의 보안에 적용되는 표준입니다. Tailwind Traders는 품질 프로세스의 일환으로 해당 표준을 준수함을 증명하려고 합니다. Azure Blueprints에는 ISO 27001과 관련된 몇 가지 기본 제공 청사진 정의가 있습니다.

IT 관리자는 **ISO 27001: 공유 서비스 청사진** 정의를 조사하기로 합니다. 계획의 개요는 다음과 같습니다.

1. **PROD-MG** 라는 관리 그룹을 정의합니다.

    관리 그룹은 여러 Azure 구독에서 액세스, 정책, 규정 준수를 관리합니다. 구독을 만들 때 모든 새 Azure 구독이 해당 관리 그룹에 추가됩니다.

2. **ISO 27001: 공유 서비스 청사진** 템플릿 기반의 청사진 정의를 만듭니다. 그리고 청사진을 게시합니다.
3. **PROD-MG** 관리 그룹에 청사진을 할당합니다.

다음 이미지는 템플릿에서 ISO 27001 청사진을 실행할 때 생성되는 아티팩트를 보여줍니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/10-iso-27001-shared-blueprint.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/10-iso-27001-shared-blueprint.png)

청사진 템플릿에 정책 할당, Resource Manager 템플릿 및 리소스 그룹이 포함된 것을 알 수 있습니다. 청사진은 **PROD-MG** 관리 그룹 내의 모든 기존 구독에 해당 아티팩트를 배포합니다. 또한 청사진은 해당 아티팩트가 생성되고 관리 그룹에 추가될 때 모든 새 구독에 해당 아티팩트를 배포합니다.

## Describe the Cloud Adoption Framework for Azure

[Azure에 대한 클라우드 채택 프레임워크](https://docs.microsoft.com/ko-kr/azure/cloud-adoption-framework/)는 클라우드 채택 경험에 도움이 되는 입증된 지침을 제공합니다. 클라우드 채택 프레임워크를 사용하면 클라우드에서 성공하는 데 필요한 비즈니스 및 기술 전략을 만들고 구현할 수 있습니다.

Tailwind Traders는 여러 가지 산업 표준을 준수하도록 클라우드 환경을 제어해야 하지만 어디에서 시작해야 하는지 확실하지 않습니다. 기존 비즈니스 요구 사항이 있으며 해당 요구 사항이 온-프레미스 워크로드와 어떻게 관련되는지 이해하고 있습니다. 이 회사가 클라우드에서 실행하는 워크로드 역시 이러한 요구 사항을 충족해야 합니다.

Azure에서 사용 가능한 기능을 조사하고 Tailwind Traders의 거버넌스 전략을 정의하고 구현하는 작업을 수행했습니다. 여러분은 클라우드 채택 프레임워크를 시작하기로 결정합니다.

### **클라우드 채택 프레임워크에는 무엇이 있나요?**

클라우드 채택 프레임워크는 도구, 설명서 및 입증된 사례로 구성됩니다. 클라우드 채택 프레임워크는 다음과 같은 스테이지로 구성됩니다.

1. **전략 정의**
2. **계획 수립**
3. **조직 준비**
4. **클라우드 채택**
5. **클라우드 환경 제어 및 관리**

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/2-framework-stages.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/build-cloud-governance-strategy-azure/media/2-framework-stages.png)

제어 스테이지는 클라우드 거버넌스에 초점을 맞춥니다. 클라우드 거버넌스 전략을 빌드할 때 권장 지침은 다시 클라우드 채택 프레임워크를 참조할 수 있습니다.

채택 전략을 빌드하는 데 도움이 되도록 클라우드 채택 프레임워크는 각 스테이지를 추가 연습 및 단계로 구분합니다. 각 스테이지를 간단히 살펴보겠습니다.

### **전략 정의**

여기서는 클라우드로 전환하는 이유 및 클라우드 마이그레이션에서 얻으려는 이점이 무엇인지 대답합니다. 수요를 맞추거나 새로운 시장에 진출하기 위해 스케일링해야 하나요? 비용을 줄이거나 비즈니스 민첩성을 높이나요?

이 스테이지의 단계는 다음과 같습니다.

![Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%201.png](Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%201.png)

### **계획 수립**

여기서는 원하는 목표를 특정 작업에 매핑하는 계획을 수립합니다. 좋은 계획은 작업이 원하는 비즈니스 결과에 매핑되도록 하는 데 도움이 됩니다.

이 스테이지의 단계는 다음과 같습니다.

![Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%202.png](Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%202.png)

### **조직 준비**

여기서는 워크로드 호스팅을 시작하는 ‘랜딩 존’ 또는 클라우드의 환경을 만듭니다.

이 스테이지의 단계는 다음과 같습니다.

![Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%203.png](Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%203.png)

### **클라우드 채택**

여기서는 애플리케이션을 클라우드로 마이그레이션하기 시작합니다. 이 과정에서 애플리케이션을 현대화하고 클라우드 서비스를 사용하는 혁신적인 솔루션을 빌드하는 방법을 찾을 수 있습니다.

클라우드 채택 프레임워크는 이 스테이지를 마이그레이션 및 혁신의 두 부분으로 구분합니다.

**마이그레이션**: 이 스테이지의 마이그레이션 부분을 구성하는 단계는 다음과 같습니다.

![Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%204.png](Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%204.png)

**혁신**: 이 스테이지의 혁신 부분을 구성하는 단계는 다음과 같습니다.

![Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%205.png](Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%205.png)

### **클라우드 환경 제어 및 관리**

여기서는 클라우드 거버넌스 및 클라우드 관리 전략을 구성하기 시작합니다. 시간이 지남에 따라 클라우드 자산이 변화하고 클라우드 거버넌스 프로세스와 정책도 함께 변화합니다. 지속적으로 최적화된 복원력 있는 솔루션을 만들어야 합니다.

**제어**: 이 스테이지의 제어 부분을 구성하는 단계는 다음과 같습니다.

![Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%206.png](Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%206.png)

**관리**: 이 스테이지의 관리 부분을 구성하는 단계는 다음과 같습니다.

![Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%207.png](Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%207.png)

## 퀴즈

![Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%208.png](Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%208.png)

# Privacy and Compliance Resources

## Describe the Microsoft core tenets of Security, Privacy, and Compliance

### **Azure에서 사용할 수 있는 규정 준수 범주는 무엇입니까?**

다음 이미지는 Azure에서 사용할 수 있는 유명한 규정 준수 제안 중 일부를 보여주지만 이 외에도 많은 규정 준수 제안이 있습니다. 이러한 제안은 글로벌, 미국 정부, 산업, 지역 등 4가지 범주로 그룹화됩니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/2-compliance-matrix.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/2-compliance-matrix.png)

Azure에서 사용할 수 있는 다양한 규정 준수 제안을 이해하기 위해 몇 가지를 자세히 살펴보겠습니다.

모든 규정 준수 제안이 관련이 있는 것은 아니지만 규정 준수에 대한 Microsoft의 약속이 포괄적이고, 지속적이며, 개별적으로 테스트 및 검증되었음을 보여줍니다.

### **Criminal Justice Information Services**

FBI의 CJIS(Criminal Justice Information Services) 데이터베이스에 액세스하려는 모든 미국 주 또는 지역 기관은 CJIS 보안 정책을 준수해야 합니다.

Azure는 CJIS 보안 정책 준수 의무를 약정한 유일한 주요 클라우드 공급자입니다. Microsoft는 법률 집행 기관 및 공공 안전 기관에서 충족해야 하는 것과 동일한 요구 사항을 준수합니다.

### **Cloud Security Alliance STAR 인증**

**Azure, Intune 및 Microsoft Power BI는 독립적인 타사가 클라우드 공급자의 보안 상태를 엄격하게 평가하는 CSA(Cloud Security Alliance) STAR 인증**을 획득했습니다.

STAR 인증은 ISO/IEC(International Organization of Standards/International Electrotechnical Commission) 27001 인증을 획득하고 CCM(Cloud Controls Matrix)에 지정된 조건을 충족해야 획득할 수 있습니다. 이 인증은 클라우드 서비스 공급자가 다음과 같음을 보증합니다.

- ISO/IEC 27001의 적용할 수 있는 요구 사항 준수
- CCM에 명시된 클라우드 보안에 관한 중요한 문제 해결
- CCM 제어 영역의 활동 관리를 위한 STAR 역량 완성 모델 평가 완료

### **유럽 연합 모델 조항**

Microsoft는 **EU(유럽 연합) 외부 지역으로의 개인 데이터 전송에 관한 계약상 보증을 제공하는 표준 계약 조항을 고객에게 제시**합니다.

Microsoft는 EU의 Article 29 Working Party로부터 Azure가 엔터프라이즈 클라우드 고객에게 제공하는 계약상의 프라이버시 보호 조항이 데이터 국제 전송에 관한 최신 EU 표준을 준수한다는 공동 승인을 받은 최초의 회사입니다. 이 표준을 충족하면 Azure 고객은 Microsoft 서비스를 사용하여 Microsoft 클라우드를 통해 유럽에서 전 세계로 데이터를 이동할 수 있습니다.

### **Health Insurance Portability and Accountability Act**

HIPAA(Health Insurance Portability and Accountability Act)는 환자의 PHI(Protected Health Information)를 규정하는 미국 연방법입니다.

Azure는 HIPAA 및 HITECH Act의 특정 보안 및 개인 정보 조항 준수를 규정하는 HIPAA BAA(Business Associate Agreement)를 고객에게 제공합니다. 고객의 개별적인 규정 준수 노력을 지원하기 위해 Microsoft는 Azure 고객에게 BAA를 추가 계약서로 제공합니다.

### **International Organization of Standards/International Electrotechnical Commission 27018**

Microsoft는 클라우드 서비스 공급 기업의 개인 정보 처리를 다루는 ISO/IEC 27018 행동 지침을 채택한 최초의 클라우드 공급 기업입니다.

### **Multi-Tier Cloud Security Singapore**

Microsoft 클라우드 서비스는 MTCS(Multi-Tier Cloud Security) 인증 기구에서 실시한 엄격한 평가를 거쳐 다음의 세 가지 서비스 인증 부문 모두에서 MTCS 584:2013 인증을 받았습니다.

- IaaS(Infrastructure as a Service)
- PaaS(Platform as a Service)
- SaaS(Software as a Service)

Microsoft는 세 가지 인증 부문 모두에서 이러한 인증을 받은 세계 최초의 클라우드 솔루션 공급자였습니다.

### **Service Organization Controls 1, 2, 3**

Microsoft에서 관리하는 클라우드 서비스는 최소 1년마다 독립적인 타사 감사자로부터 SOC(Service Organization Controls) 보고서 프레임워크를 기준으로 감사를 받습니다.

Microsoft 클라우드 서비스 감사는 각 서비스에 대한 범위 내 보안 원칙에 적용 가능한 데이터 보안, 가용성, 처리 무결성 및 기밀성의 제어를 대상으로 합니다.

### **미국 국립표준기술원 사이버보안 프레임워크**

NIST(미국 국립표준기술원) CSF(사이버보안 프레임워크)는 사이버 보안 관련 위험 관리에 대한 표준, 지침 및 모범 사례로 구성된 자발적인 프레임워크입니다.

Microsoft 클라우드 서비스는 독립적인 타사로부터 FedRAMP(Federal Risk and Authorization Management Program) Moderate and High Baseline 감사를 받았습니다. Microsoft 클라우드 서비스는 FedRAMP 표준에 따라 인증을 받았습니다.

또한 Office 365는 업계 선두의 보안 및 프라이버시 표준 개발 및 승인 기구인 HITRUST(Health Information Trust Alliance)에서 수행한 공인 평가를 통해 NIST CSF에 명시된 목표를 충족하는 것으로 인증을 받았습니다.

### **United Kingdom Government G-Cloud**

UK(United Kingdom) Government G-Cloud는 영국의 정부 기관에서 사용되는 서비스에 대한 클라우드 컴퓨팅 인증입니다. Azure는 영국 정부로부터 공식 승인을 받았습니다.

## Describe the purpose of the Microsoft Privacy Statement, Products Terms site, and Data Protection Addendum(DPA)

### **Microsoft 개인정보처리방침은 무엇입니까?**

[Microsoft 개인정보처리방침](https://privacy.microsoft.com/privacystatement)은 **Microsoft에서 수집하는 개인 데이터, Microsoft에서 사용하는 방법 및 용도에 관해 설명**합니다. → 수집하는 목적에 대해 알 수 있다. 

개인정보처리방침에는 **모든 Microsoft 서비스, 웹 사이트, 앱, 소프트웨어, 서버 및 디바이스가 포함**됩니다. 이 목록은 엔터프라이즈 및 서버 제품부터 가정에서 사용하는 디바이스와 학교에서 학생들이 사용하는 소프트웨어에 이르기까지 다양합니다.

Microsoft의 개인정보처리방침에서는 Windows 및 Xbox와 같은 특정 제품과 관련된 정보를 제공합니다.

### **온라인 서비스 사용 약관은 무엇입니까?**

[온라인 서비스 사용 약관](https://www.microsoft.com/licensing/terms/product/ForallOnlineServices)(OST)은 Microsoft와 고객 간의 법적 계약입니다. OST는 고객 데이터 및 개인 데이터의 처리 및 보안과 관련하여 두 당사자의 의무를 자세히 설명합니다. OST는 Azure, Dynamics 365, Office 365 및 Bing Maps를 포함하여 구독을 통해 라이선스를 획득한 Microsoft 온라인 서비스에만 적용됩니다.

### **데이터 보호 추록은 무엇입니까?**

**데이터 보호 추록(DPA)**은 **온라인 서비스에 대한 데이터 처리 및 보안 조건을 추가로 정의**합니다. 조건은 다음과 같습니다.

- 법률 준수
- 처리된 데이터의 공개
- 보안 사례 및 정책, 데이터 암호화, 데이터 액세스, 고객 책임 및 감사를 통한 준수를 포함하는 데이터 보안
- 데이터 전송, 보존 및 삭제

DPA 액세스:

1. [사용 조건 및 문서](https://www.microsoftvolumelicensing.com/DocumentSearch.aspx)로 이동합니다.
2. 검색 창에 **DPA** 를 입력합니다.
3. 검색 결과에서 원하는 언어의 DPA 링크를 찾습니다.

    또는 표시되는 검색 창에서 원하는 언어를 입력하여 결과를 필터링합니다. 다음은 DPA 영어 버전 검색의 예시입니다.

    ![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/3-dpa-english.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/3-dpa-english.png)

투명성은 클라우드 공급자가 개인 정보 정책을 알리고 데이터를 처리하는 방법에 있어 중요합니다. Microsoft 개인정보처리방침, OST 및 DPA는 클라우드에서 데이터 및 개인 정보 보호에 대한 Microsoft의 약속을 자세히 설명합니다.

## Describe the purpose of the Trust Center

[보안 센터](https://www.microsoft.com/trust-center?rtc=1%3Fazure-portal%3Dtrue)는 **클라우드의 데이터 무결성 유지를 위한 Microsoft의 원칙과 Microsoft에서 모든 Microsoft 클라우드 제품 및 서비스에서 보안, 개인 정보 보호, 규정 준수 및 투명성을 구현하고 지원하는 방법을 소개**합니다. 보안 센터는 Microsoft Trusted Cloud Initiative의 중요한 부분이며, 법률 및 규정 준수 커뮤니티를 위한 지원과 리소스를 제공합니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/4-trust-center.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/4-trust-center.png)

보안 센터에서는 다음을 제공합니다.

- **Microsoft 클라우드 제품 전반의 보안, 개인 정보 보호, 규정 준수 제품, 정책, 기능 및 사례에 대한 자세한 정보**
- **각 토픽에 대한 추가 리소스.**
- **보안, 개인 정보 보호, 규정 준수 블로그 및 예정된 이벤트 관련 링크.**

보안 센터는 **보안, 개인 정보 및 규정 준수 관련 역할을 수행할 수 있는 조직 내 다른 사용자에게 유용한 리소스**입니다. 비즈니스 관리자, 위험 평가 및 개인 정보 보호 담당자 및 법적 규정 준수 팀이 사용자에 포함됩니다.

### **보안 센터 살펴보기**

선택적 연습으로 보안 센터의 ISO 27001의 항목을 간략하게 살펴보겠습니다.

보안 센터에 액세스하는 데 Azure 구독 또는 Microsoft 계정이 필요하지 않습니다.

1. [보안 센터](https://www.microsoft.com/trust-center?rtc=1%3Fazure-portal%3Dtrue)로 이동합니다.
2. 페이지에서 **추가 리소스** 섹션을 찾습니다. **규정 준수 제안** 에서 **자세한 정보** 를 선택합니다.

    ![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/4-trust-center-compliance.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/4-trust-center-compliance.png)

    [Microsoft 규정 준수 제안](https://docs.microsoft.com/ko-kr/microsoft-365/compliance/offering-home)으로 이동합니다.

    제안은 다음 네 가지 범주로 그룹화됩니다. **글로벌**, **미국 정부**, **산업**, **지역**

3. **글로벌** 에서 **ISO 27001** 을 선택합니다.

    ![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/4-iso-27001.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/4-iso-27001.png)

    ISO 27001 정보 보안 관리 표준 페이지는 일반적인 형식의 규정 준수 정보가 제공됩니다.

4. ISO/IEC 27001 문서를 간략하게 검토합니다.

    다음이 표시됩니다.

    - 표준에 대한 개요
    - 범위에 속하는 클라우드 서비스
    - 감사 주기 개요 및 감사 보고서 링크
    - 자주 묻는 질문의 답변
    - 추가 리소스 및 백서

    다른 규정 준수 제안에 대한 문서 영역은 다양하지만 이 형식이 일반적인 형식입니다.

## Describe the purpose of the Azure compliance documentation

- 전자상거래는 Tailwind Traders의 판매 전략에서 중요한 부분입니다. [온라인 소매점](https://www.tailwindtraders.com/)을 통해 고객이 제품을 쉽게 찾고 주문할 수 있습니다. 고객은 일반적으로 신용 카드로 결제하므로 Tailwind Traders는 PCI(Payment Card Industry) DSS(Data Security Standard)에 의거한 책임을 갖습니다. PCI DSS라고 하는 **이 글로벌 표준은 신용 카드 데이터에 대한 제어를 강화하여 사기 행위를 방지**합니다. 해당 표준은 **결제 및 카드 소유자 데이터를 저장, 처리 또는 전송하는 모든 조직에 적용**됩니다.

Azure에서 회사의 전자상거래 애플리케이션을 호스트하는 것이 PCI DSS 규정을 준수하는지를 조사하라는 지시를 받았습니다. Azure 규정 준수 문서를 가지고 시작합니다.

### **Azure 규정 준수 문서란 무엇입니까?**

[Azure 규정 준수 문서](https://docs.microsoft.com/ko-kr/azure/compliance/)에서는 Azure의 법률 및 규제 표준과 규정 준수에 관한 구체적인 문서를 제공합니다.

여기에서 다음 범주에 대한 규정 준수 제안을 찾아볼 수 있습니다.

- 전역
- 미국 정부
- 금융 서비스
- 의료
- 미디어 및 제조
- 지역

또한 감사 보고서, 개인 정보, 규정 준수 구현 및 매핑, 백서 및 분석가 보고서와 같은 추가 규정 준수 리소스가 있습니다. 국가 및 지역 개인 정보 및 규정 준수 지침도 포함됩니다. 일부 리소스에 액세스하려면 클라우드 서비스에 로그인해야 할 수 있습니다.

### **PCI DSS 규정 준수 검사**

Tailwind Traders의 법무 팀은 PCI DSS와 Azure에 있는 회사의 전자상거래 애플리케이션이 어떻게 관련되어 있는지 자세히 알아보고자 합니다.

선택적 연습으로 다음을 따릅니다.

1. [Azure 규정 준수 문서](https://docs.microsoft.com/ko-kr/azure/compliance/)로 이동합니다.
2. **금융 서비스** 에서 **PCI DSS** 를 선택합니다.

    ![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/5-financial-services.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/5-financial-services.png)

    다음을 볼 수 있습니다.

    - PCI DSS 표준에 대한 개요
    - PCI DSS가 Microsoft에 적용되는 방식
    - 범위에 속하는 클라우드 서비스
    - 감사 주기 개요
    - 자주 묻는 질문의 답변
    - 추가 리소스 및 백서

### **추가 규정 준수 리소스 액세스**

[Azure 규정 준수 문서](https://docs.microsoft.com/ko-kr/azure/compliance/)에서 추가 규정 준수 리소스에 액세스할 수 있습니다.

예를 들어 **감사 보고서** 섹션에서 [PCI DSS](https://servicetrust.microsoft.com/ViewPage/MSComplianceGuideV3?docTab=7027ead0-3d6b-11e9-b9e1-290b1eb4cdeb_PCI_DSS%3Fazure-portal%3Dtrue) 관련 감사 보고서 링크를 찾을 수 있습니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/5-audit-reports.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/5-audit-reports.png)

여기에서 규정 준수 증명 보고서 및 PCI DSS 공유 책임 매트릭스를 포함한 여러 파일에 액세스할 수 있습니다.

**규정 준수 청사진** 에서 **Azure 구독에 적용할 수 있는 일반 표준에 대한 청사진, 즉 정책 정의를 찾습니다**. [PCI DSS](https://docs.microsoft.com/ko-kr/azure/governance/blueprints/samples/pci-dss-3.2.1/) 청사진은 PCI DSS 규정 준수로 매핑되어 이 표준에 대해 Azure 워크로드를 관리하는 핵심 정책 세트를 배포합니다.

- 어떤 정책을 꼭 만족시켜야 하는데, 그런 정책을 만족할 수 있도록 하는 청사진이 만들어져있어서 이에 맞게 배포가 가능하다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/5-compliance-blueprints.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/5-compliance-blueprints.png)

애플리케이션 아키텍처의 Azure 리소스가 PCI DSS 규정 준수에 맞게 구성되었는지 또는 수정해야 하는 리소스가 있는지 여부를 확인할 수 있습니다.

표준이 변화함에 따라 Tailwind Traders 팀은 감사 보고서를 주기적으로 확인하여 Azure가 최근 변경 내용을 반영하도록 할 수 있습니다.

## Describe the purpose of Azure Sovereign Regions (Azure government cloud services and Azure China cloud services)

[Azure Government](https://azure.microsoft.com/global-infrastructure/government)는 **별도의 Microsoft Azure 서비스 인스턴스**입니다. **미국 연방 기관, 주 및 지방 정부 및 정부 솔루션 공급자의 보안 및 규정 준수 요구 사항을 해결**합니다. Azure Government는 미국 외 정부로부터의 물리적 격리를 제공하고 선별된 미국 인력을 제공합니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/6-azure-government.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/6-azure-government.png)

Azure Government 서비스는 다음과 같은 특정 정부 규제 및 요구 사항의 적용 대상인 데이터를 처리합니다.

- FedRAMP(Federal Risk and Authorization Management Program)
- NIST(미국 국립표준기술원) 800.171 DIB(Defense Industrial Base)
- ITAR(International Traffic in Arms Regulations)
- IRS(국세청) 1075
- DoD(국방부) L4
- CJIS(Criminal Justice Information Services)

**가장 높은 수준의 보안 및 규정 준수를 제공하기 위해 Azure Government는 미국 내에만 있는 물리적으로 격리된 데이터 센터 및 네트워크를 사용**합니다. 미국 연방, 주, 지방 정부 또는 정부 파트너와 같은 **Azure Government 고객은 자격의 유효성 검사를 받습니다**.

Azure Government는 가장 광범위한 규정 준수 및 Level 5 DoD 승인을 제공합니다. Azure Government는 [8개 지역에서 사용 가능](https://azure.microsoft.com/global-infrastructure/geographies/#geographies?azure-portal=true)하며, 클라우드 공급자의 대부분의 규정 준수 인증을 제공합니다.

### **Azure China 21Vianet이란 무엇입니까?**

[Azure 중국 21Vianet](https://docs.microsoft.com/ko-kr/azure/china)**은 21Vianet에서 운영**합니다. 물리적으로는 중국에 위치한 별도의 클라우드 서비스 인스턴스입니다. Azure 중국 **21Vianet은 Beijing 21Vianet Broadband Data Center Co., Ltd.의 완전 자회사인 Shanghai Blue Cloud Technology Co., Ltd.(“21Vianet”)에서 독립적으로 운영 및 처리**됩니다.

**중국 통신 규제에 따라 클라우드 서비스 공급자인 IaaS(Infrastructure as a Service) 및 PaaS(Platform as a Service)는 부가 가치 통신 허가가 있어야 합니다**. **외국 투자액이 50% 미만이면서 중국 내에 등록된 회사만이 이 허가를 받을 수 있습니다**. 이 **규제를 준수하기 위해 중국의 Azure 서비스는 Microsoft 라이선스 기술을 기반으로 21Vianet에서 운영**합니다.

![https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/7-azure-china-21vianet.png](https://docs.microsoft.com/ko-kr/learn/azure-fundamentals/examine-privacy-compliance-data-protection-standards/media/7-azure-china-21vianet.png)

중국 정부 규제를 준수하면서 중국에 제공되는 최초의 외국 퍼블릭 클라우드 서비스 공급자인 Azure China 21Vianet은 아키텍처 기반 모든 시스템 및 애플리케이션에 대한 중국 규제에 따라 [보안 센터](https://www.trustcenter.cn/compliance/default.html)에서 설명하는 세계적 수준의 보안을 제공합니다.

### **중국에서 사용할 수 있는 Azure 제품 및 서비스**

Azure 서비스는 유사한 서비스 수준과 함께 Microsoft 글로벌 클라우드 서비스를 구성하는 것과 동일한 **Azure, Office 365 및 Power BI 기술을 기반으로** 합니다. 해당하는 경우 **중국의 Azure 규약 및 계약은 고객과 21Vianet 사이에서 서명**됩니다.

Azure에는 IaaS, PaaS 및 SaaS(Software as a Service)의 핵심 구성 요소가 포함되어 있습니다. 해당 구성 요소에는 네트워크, 스토리지, 데이터 관리, ID 관리 및 기타 서비스가 포함됩니다.

Azure China 21Vianet은 지구 동기 데이터 복제 및 자동 스케일링과 같이 글로벌 Azure에서 보유하는 대부분의 서비스를 지원합니다. 이미 글로벌 Azure 서비스를 사용해도 중국에서 운영하려면 일부 또는 모든 애플리케이션 또는 서비스를 다시 호스트하거나 리팩터링해야 할 수 있습니다.

## 퀴즈

![Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%209.png](Describe%20identity,%20governance,%20privacy,%20and%20compli%20596bfa4213d74ae6a748e7a845f6706c/Untitled%209.png)