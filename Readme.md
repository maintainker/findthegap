# Find The Gap - Assignment

## 📅 Project Timeline & Info

- **Start Date:** 2026. 06. 20
- **End Date:** 2026. 06. 23
- **GitHub Account:** @maintainker

## 🚀 1. 프로젝트 개요 및 설계 의도

본 프로젝트는 **서로 다른 3개의 도메인(Hacker, Company, Admin)에서 동일한 형태의 UI 컴포넌트를 어떻게 안정적이고 확장성 있게 재사용할 것인가**에 대한 해답으로 **Module Federation 아키텍처**를 채택하여 구현했습니다.

### 🏗️ 아키텍처 핵심 설계 (FDS: Federated Design System)

1. **Core Package (`core`)**: 전역 스타일, 타이포그래피 믹스인, 상태별 인터랙션이 포함된 공통 컴포넌트(`SharedButton`, `SharedTextField`) 및 로그인 템플릿(`LoginTemplate`)를 중앙에서 관리하고 배포합니다.
2. **Multi-Domain Host Apps**: `hacker`, `company`, `findthegap` 3개의 서비스는 호스트 앱으로서 `core`에서 노출(expose)한 자원을 실시간으로 주입받아 런타임에 결합합니다.

### 💡 기술적 선택과 인과관계 (중점 검토 항목 대응)

**Module Federation**

- 모노레포와 고민하였지만 제작자의 입장이 아닌 각 Host App에서 사용한다고 가정할때 모듈 연동측면에서각 서비스가 독립적으로 개발되더라도 공통 UI를 쉽게 연동할 수 있어 개발 생산성이 높아진다고 판단했습니다.
- core component를 수정할때 모노레포는 pull을 받아서 작업해야하지만 Module Federation은 공통부분에서 작업하고 배포 하면 바로 적용되는 점때문에 Module Federation을 선택했습니다.
- 단점은 Module Federation에서 공통으로 묶인 컴포넌트를 이용할때 공통측에서 잘못 변경시에 전부 오류화면이 나올수 있는 가능성이 존재하여 확실한 관리가 필요합니다.

## 🏃‍♂️ 개발 환경 구성 및 실행 방법

본 프로젝트는 **Module Federation** 기반으로 유기적으로 구성되어 있습니다. 순서대로 실행해주시면 됩니다.

모든 프로젝트(`core`, `hacker`, `company`, `findthegap`)에 필요한 패키지를 루트 디렉토리에서 일괄 설치합니다.
이후 core project를 실행 한뒤
각각의 프로젝트를 실행합니다. (package.json에 각각의 명령어를 선언해 두었으며 하기에 기재하였습니다.)

```bash
# 모든 프로젝트 의존성 설치
npm run install:all

# core 폴더 프로젝트 실행
npm run start:core

# 각각의 프로젝트 실행
npm run start:hacker
npm run start:company
npm run start:findthegap
```
