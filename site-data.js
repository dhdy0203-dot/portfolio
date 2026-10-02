window.PORTFOLIO_DATA = {
  name: "PORTFOLIO",
  roles: ["데이터 분석 및 AI 모델 개선"],
  about: "데이터 분석, 머신러닝, 딥러닝, LLM, Knowledge Graph, 금융 시계열 분석 프로젝트와 연구를 수행했습니다.",
  skills: [
    { name: "Python", detail: "데이터 분석, 머신러닝, 자동화" },
    { name: "PyTorch", detail: "딥러닝, Transformer, LLM 분석" },
    { name: "LLM / VLM", detail: "Qwen3-VL, LLaMA, EXAONE" },
    { name: "Knowledge Graph", detail: "Ontology, Triplet, Relation 설계" },
    { name: "Time Series", detail: "GARCH, GJR-GARCH, E-GARCH" },
    { name: "AWS", detail: "Lightsail VPS, 서비스 배포" }
  ],
  education: [
    {
      date: "2024년 2학기",
      title: "서울대학교 빅데이터 학점교류",
      subtitle: "음성 데이터 분석, 게임 디지털 스토리텔링",
      description: "Praat 기반 음성 신호 분석, 데이터 전처리, 분류 및 통계 분석 수행"
    },
    {
      date: "2024년 겨울",
      title: "Gen.G Esports 데이터 분석 강의",
      subtitle: "데이터 분석 과정 수료",
      description: "e스포츠 경기 로그 분석, 경기 흐름 및 승패 요인 분석, 데이터 시각화"
    },
    {
      date: "2024년 겨울, 2025년 여름",
      title: "LG Dacon 데이터 분석 과정",
      subtitle: "데이터 분석 및 대회 참가",
      description: "Boosting 계열 모델, Feature Engineering, 딥러닝 모델 실험. 2024년 겨울 대회 상위 10%"
    },
    {
      date: "2026년 이후",
      title: "경제학 부전공",
      subtitle: "금융 및 정책 데이터",
      description: "경제 및 금융 데이터 분석 역량 확장"
    }
  ],
  experience: [
    {
      date: "2026년",
      title: "행가레 ESG 인증 AI 심사 자동화",
      subtitle: "건강보험심사평가원 × SK AX",
      description: "15,834건 누적 인증 데이터 분석. Qwen3-VL-8B, OpenCV, YOLO-World 기반 자동 심사 파이프라인 구축. 세 항목 전체 수동 검수 85.6% 감소"
    },
    {
      date: "2026년 1학기",
      title: "서울대학교 Ontology & Knowledge Graph 해커톤",
      subtitle: "팀 프로젝트 1등",
      description: "농업 교육 Knowledge Graph 기반 질의응답 시스템. 전체 KG 구조, Triplet, Relation, Ontology 방향성 설계 및 기술 리딩"
    },
    {
      date: "2025년 2학기",
      title: "사회보장연구원 과제",
      subtitle: "정책 데이터 분석",
      description: "데이터 전처리 파이프라인 구축, PSI 기반 모델 학습 시점 전략 제안, Imbalanced Data 및 Covariate Shift 분석"
    },
    {
      date: "2025년 여름",
      title: "Optim Lab 자체 LLM 구축",
      subtitle: "LLaMA 기반 연구실 LLM",
      description: "데이터 수집 파이프라인 담당. EXAONE 학습 데이터셋, 전처리 전략, 토크나이저 구조 분석 발표"
    }
  ],
  projects: [
    {
      title: "trade.qqick.com",
      category: "Data",
      image: "assets/project-1.svg",
      description: "235개 종목, 26개 섹터를 매일 갱신하는 밸류에이션 스크리너. 섹터별 밸류에이션 기준과 GARCH 계열 모형으로 진입가 계산",
      url: "https://trade.qqick.com"
    },
    {
      title: "행가레 ESG 인증 AI 심사 자동화",
      category: "AI",
      image: "assets/project-2.svg",
      description: "Qwen3-VL-8B, OpenCV, YOLO-World 기반 사진 인증 자동 심사. 자동승인, 자동반려, 검토필요 3분류 체계 구축",
      url: "#"
    },
    {
      title: "LLM Refusal Direction 분석",
      category: "Research",
      image: "assets/project-3.svg",
      description: "Hidden State에서 거부 방향 벡터를 추출하고 Activation Steering과 Ablation으로 모델 행동 변화 분석",
      url: "#"
    },
    {
      title: "아삭이",
      category: "Knowledge Graph",
      image: "assets/project-4.svg",
      description: "농업 교육 Knowledge Graph 기반 질의응답 및 정보 검색 시스템. KG 구조, Triplet, Relation, Ontology 설계",
      url: "https://github.com/dhdy0203-dot/asak-agriculture-education"
    },
    {
      title: "금융 시계열 변동성 분석",
      category: "Finance",
      image: "assets/project-5.svg",
      description: "KOSPI, NASDAQ, Nikkei, Gold에 GARCH, GJR-GARCH, E-GARCH와 마르코프 GARCH 적용",
      url: "#"
    },
    {
      title: "qqick.com",
      category: "Service",
      image: "assets/project-6.svg",
      description: "OpenClaw 기반 AI 유틸리티 서비스. AWS Lightsail VPS 구축, 도메인 연동, 서비스 운영",
      url: "https://qqick.com"
    }
  ],
  contact: {
    github: "https://github.com/dhdy0203-dot"
  },
  social: [
    { label: "GH", url: "https://github.com/dhdy0203-dot" }
  ]
};
