window.PORTFOLIO_DATA = {
  name: "유도현",
  roles: ["모든 일은 설득의 과정이며\n통계는 그 설득에 근거를 더한다고 믿습니다."],
  about: "분석하고 의미있는 것을 좋아해 통계학과로 진학했습니다. 과학, 수학, 문학 모두 다 좋아하며 취미는 자료 수집하기, 미래의 꿈은 제 이름으로 된 소설 책을 집필하는 것이며 이를 위해 공상의 나날을 보내고 있습니다.",
  resumeUrl: "#",

  skills: [
    { name: "Python", level: 80 },
    { name: "R", level: 75 },
    { name: "SQL", level: 70 },
    { name: "SAS", level: 65 }
  ],

  education: [
    {
      date: "2023 - 2027",
      title: "University of Seoul",
      subtitle: "Department of Statistics",
      description: "Minor in Economics, School of Economics",
      logos: [
        { src: "https://engraduate.uos.ac.kr/design/theme/eng/images/sub/about/si4_ui01.jpg", alt: "University of Seoul", className: "logo-crop-uos" }
      ]
    },
    {
      date: "2026.01.19 - 2026.01.23",
      title: "동계 D-Express 캠프",
      projectSlug: "d-express-ontology-education-hackathon",
      subtitle: "서울대학교 빅데이터 혁신융합대학사업단",
      description: "(공유) 온톨로지 및 지식그래프 과정 이수",
      logos: [
        { src: "https://coss.ac.kr/img/coss_logo.png", alt: "COSS", className: "logo-fit-contain logo-coss" }
      ]
    },
    {
      date: "2025.07.01 - 2025.08.25",
      title: "2025 LG Aimers [2회차]",
      subtitle: "(주)엘지경영개발원 AI연구원",
      description: "IT(IT) 과정 이수",
      logos: [
        { src: "https://www.lgresearch.ai/img/common/logo_en.png", alt: "LG AI Research", className: "logo-fit-contain logo-lg-ai" }
      ]
    }
  ],

  externalCollaboration: [
    {
      date: "2025",
      title: "운영 피드백 기반 위기아동 모델 재학습을 통한 예측 개선 연구 참여",
      projectSlug: "crisis-child-model-retraining",
      role: "학부연구원",
      organization: "사회보장정보원",
      description: "EDA, 데이터 구축, 모델 성능 개선 참여",
      logos: [
        { src: "https://ssis.or.kr/images/renew/sub/ci_s1.png", alt: "한국사회보장정보원", className: "logo-fit-contain" }
      ]
    },
    {
      date: "2026",
      title: "헹가래 어플 자동 모니터링 서비스",
      projectSlug: "esg-image-auto-review",
      role: "",
      organization: "건강보험심사평가원 × SK AX",
      description: "인증 데이터 EDA, AI 자동 심사 로직 설계, 검수 자동화 성능 개선",
      logos: [
        { src: "https://www.hira.or.kr/images/contents/renew_bg_ci1.png", alt: "건강보험심사평가원", className: "logo-fit-contain logo-hira" }
      ]
    }
  ],

  experience: [
    {
      date: "2025 - 2026",
      title: "학부연구생 활동",
      projectSlug: "optim-lab-research",
      role: "학부연구생",
      organization: "Optim Lab",
      description: "LLM 데이터 수집, 모델 분석, Knowledge Graph 연구 참여"
    },
    {
      date: "2026",
      title: "자산군별 변동성 구조 비교: GARCH, EGARCH, GJR-GARCH 모형의 분석",
      projectSlug: "asset-volatility-forecasting",
      role: "",
      organization: "금융시계열",
      description: "코스피, 닛케이, 나스닥, 금의 GARCH 계열 모형 적합"
    },
    {
      date: "2026",
      title: "EGARCH 기반 VaR 및 DCC-GARCH 리스크 분석",
      projectSlug: "dynamic-correlation-analysis",
      role: "",
      organization: "금융시계열",
      description: "BTC, S&P 500, Gold 자산을 중심으로"
    },
    {
      date: "2025",
      title: "WSDM 공간데이터 분석 프로젝트",
      projectSlug: "wsdm-spatial-data-analysis",
      role: "",
      organization: "통계자료캡스톤디자인",
      description: "공간데이터 전처리, 입지 요인 분석, 다기준 의사결정 방법론 적용"
    },
    {
      date: "2025.08.01 - 2025.08.25",
      title: "식음업장 메뉴 수요 예측 AI 온라인 해커톤",
      role: "",
      organization: "DACON",
      description: "XGBoost와 시계열 모델 등을 결합해 메뉴 수요를 예측하고 상위 14% 성적 달성"
    },
    {
      date: "2025.02.01 - 2025.02.27 09:59",
      title: "난임 환자 대상 임신 성공 여부 예측 AI 온라인 해커톤",
      role: "",
      organization: "DACON",
      description: "CatBoost·LightGBM 등 부스팅 모델을 활용해 임신 성공 여부를 예측하고 상위 10% 성적 달성"
    }
  ],

  sideProjects: [
    {
      date: "2026",
      title: "trade.qqick.com",
      projectSlug: "trade-qqick",
      organization: "Python, Streamlit, SQLite, AWS Lightsail",
      description: "자산 종목 모니터링 사이트",
      url: "https://trade.qqick.com"
    },
    {
      date: "2026",
      title: "Youtube 실시간 번역 자막",
      projectSlug: "youtube-live-translation-subtitles",
      organization: "Chrome Extension, Gemini API",
      description: "Gemini API와 연동하여 Chrome Extension 형태로 제작",
      url: ""
    }
  ],

  awards: [
    {
      date: "2026.09.18",
      title: "공공기관 AI 프로젝트 챌린지 Job아라! 우수상",
      projectSlug: "esg-image-auto-review",
      subtitle: "서울시립대학교 AI·SW융합교육원",
      description: "공공기관 현장문제 해결 AI 프로젝트"
    },
    {
      date: "2026.09.15",
      title: "건강보험심사평가원 AI 프로젝트",
      projectSlug: "esg-image-auto-review",
      subtitle: "건강보험심사평가원 · GreenScan 팀",
      description: "AI 프로젝트 우수 성과 상장"
    },
    {
      date: "2026.01.23",
      title: "D-EXPRESS CAMP 대상",
      projectSlug: "d-express-ontology-education-hackathon",
      subtitle: "서울대학교 빅데이터혁신융합대학사업단",
      description: "온톨로지 및 지식그래프 기반 교육서비스 기획·개발 해커톤"
    }
  ],

  scholarships: [
    {
      date: "2025년 2학기",
      title: "Edge-Star 장학",
      subtitle: "Scholarship",
      description: "대학혁신지원사업 장학"
    },
    {
      date: "2023년 2학기",
      title: "학업우수장학 (II종)",
      subtitle: "Scholarship",
      description: "성적우수 장학"
    }
  ],

  certifications: [
    {
      date: "",
      title: "OPIc",
      subtitle: "Intermediate High (IH)",
      description: "",
      logos: [
        { type: "mark", text: "OPIc", alt: "OPIc", className: "logo-mark-opic" }
      ]
    },
    {
      date: "2025.06.01",
      title: "제22회 새벽강변 국제마라톤대회",
      subtitle: "10km",
      description: "완주 기록 00:55:06.25",
      logos: [
        { src: "assets/logo-kma.svg", alt: "KMA", className: "logo-fit-contain logo-kma" }
      ]
    },
    {
      date: "2026.06.05",
      title: "데이터분석 준전문가 (ADsP)",
      subtitle: "한국데이터산업진흥원",
      description: "국가공인 자격",
      logos: [
        { src: "https://www.kdata.or.kr/_img/web/pc/cont/symbol.png", alt: "한국데이터산업진흥원", className: "logo-crop-kdata" }
      ]
    }
  ],

  projectCategories: [
    { key: "all", label: "ALL" },
    { key: "external-collaboration", label: "External Collaboration" },
    { key: "experience", label: "Experience" },
    { key: "hackathon", label: "Hackathon" },
    { key: "side-projects", label: "Side Projects" }
  ],

  projects: [
    {
      slug: "crisis-child-model-retraining",
      title: "운영 피드백 기반 위기아동 모델 재학습을 통한 예측 개선 연구 참여",
      category: "external-collaboration",
      date: "2025",
      organization: "사회보장정보원",
      role: "학부연구원",
      description: "운영 데이터 EDA, 재학습 데이터 구축 및 모델 개선 참여",
      overview: "정책 현장에서 축적된 운영 피드백을 반영해 위기아동 예측 모델을 재학습하고 성능을 개선하는 연구에 참여했습니다. 단순 모델링에 그치지 않고 학대 발생과 서비스 개입의 선후 관계, 개입 지연 요인, 과거·현재 데이터의 분포 변화까지 함께 살펴보며 재학습 전략을 검토했습니다.",
      highlights: [
        "운영 데이터 전처리 및 EDA, 모델 학습용 데이터 구축",
        "PSI(Population Stability Index)를 활용한 데이터 분포 변화 확인 및 재학습 시점 전략 제안",
        "Imbalanced Data와 Covariate Shift 관점에서 모델 성능 저하 원인 분석",
        "학대 발생·서비스 개입의 시점과 정책 맥락을 함께 고려한 결과 해석"
      ],
      keywords: ["EDA", "PSI", "Covariate Shift", "Imbalanced Data", "Model Retraining"]
    },
    {
      slug: "esg-image-auto-review",
      title: "헹가래 어플 자동 모니터링 서비스",
      category: "external-collaboration",
      date: "2026",
      organization: "건강보험심사평가원 × SK AX",
      role: "",
      description: "ESG 실천 인증 이미지의 AI 심사·모니터링 자동화",
      overview: "건강보험심사평가원과 SK AX의 사내 ESG 실천 인증 서비스에서 사진 검수 업무를 자동화하는 프로젝트를 수행했습니다. 19개월간 누적된 15,834건의 인증 데이터를 분석해 머그컵·텀블러, 잔반제로, 전원끄기 항목별 판단 기준을 정리하고, 명확한 사례는 자동승인·자동반려하고 애매한 사례만 관리자에게 전달하는 3분류 심사 구조를 설계했습니다.",
      highlights: [
        "19개월·15,834건의 인증 데이터와 반려 사유를 분석해 항목별 오류 패턴 및 실제 판단 기준 정리",
        "OpenCV·YOLO-World·Qwen3-VL-8B를 조합해 단순 판별은 가볍게 처리하고 애매한 이미지에만 VLM을 적용",
        "머그컵·텀블러 100%, 잔반제로 98%, 전원끄기 99.8% 정확도를 기록하고 전체 수동 검수 건수를 85.6% 감소",
        "기존 관리자 시스템을 수정하지 않고 사용할 수 있도록 Chrome Extension 형태의 모니터링 UI로 구현"
      ],
      keywords: ["Qwen3-VL", "VLM", "YOLO-World", "OpenCV", "Chrome Extension", "Workflow Automation"]
    },
    {
      slug: "optim-lab-research",
      title: "학부연구생 활동",
      category: "experience",
      date: "2025 - 2026",
      organization: "Optim Lab",
      role: "학부연구생",
      description: "LLM 데이터 파이프라인, 모델 분석 및 Knowledge Graph 연구",
      overview: "Optim Lab 학부연구생으로 LLM과 Knowledge Graph를 중심으로 여러 연구 과제에 참여했습니다. 연구실 자체 LLM 구축을 위한 데이터 수집 파이프라인을 담당하고 EXAONE의 학습 데이터·전처리·토크나이저 구조를 분석했으며, 이후 코인 백서를 활용한 Knowledge Graph 구축과 정보 추출 연구로 범위를 확장했습니다.",
      highlights: [
        "LLaMA 기반 연구실 자체 LLM 구축 과정에서 데이터 수집 파이프라인 담당",
        "EXAONE의 학습 데이터셋 구성, 전처리 전략, 토크나이저 구조 분석 및 발표",
        "코인 백서 기반 Knowledge Graph의 Triplet·Relation·클러스터링 구조 설계",
        "NER 및 Relation Extraction 논문·데이터셋을 학습하고 Entity Regularization 구현에 참여"
      ],
      keywords: ["LLM", "EXAONE", "Knowledge Graph", "NER", "Relation Extraction", "Research"]
    },
    {
      slug: "asset-volatility-forecasting",
      title: "자산군별 변동성 구조 비교: GARCH, EGARCH, GJR-GARCH 모형의 분석",
      category: "experience",
      date: "2026",
      organization: "금융시계열",
      role: "",
      description: "코스피, 닛케이, 나스닥, 금의 GARCH 계열 모형 적합",
      overview: "코스피, 닛케이, 나스닥, 금을 대상으로 자산군별 변동성 구조를 비교한 금융시계열 프로젝트입니다. 동일한 분석 틀에서 GARCH, EGARCH, GJR-GARCH 모형을 적합해 변동성의 지속성과 비대칭성을 비교하고, 자산별로 어떤 모형이 시장 움직임을 더 잘 설명하는지 해석했습니다.",
      highlights: [
        "KOSPI·Nikkei·NASDAQ·Gold 시계열 데이터 전처리 및 수익률 기반 변동성 분석",
        "GARCH, EGARCH, GJR-GARCH 모형을 동일 자산군에 적합해 변동성 구조 비교",
        "2010~2012년 구간을 중심으로 시장 충격의 지속성과 비대칭 반응 해석",
        "추가 분석으로 Markov-GARCH(국면전환) 모형을 적용해 시장 국면 변화 특성 탐색"
      ],
      keywords: ["GARCH", "EGARCH", "GJR-GARCH", "Volatility", "Financial Time Series", "Markov-GARCH"]
    },
    {
      slug: "dynamic-correlation-analysis",
      title: "EGARCH 기반 VaR 및 DCC-GARCH 리스크 분석",
      category: "experience",
      date: "2026",
      organization: "금융시계열",
      role: "",
      description: "BTC, S&P 500, Gold 자산을 중심으로",
      overview: "BTC, S&P 500, Gold를 중심으로 EGARCH 기반 VaR와 DCC-GARCH를 활용해 자산별 위험과 자산 간 동적 상관관계를 분석한 금융시계열 프로젝트입니다. 기존 분석의 데이터 전처리와 결과 해석 흐름을 유지하면서 변동성·VaR·동적 상관관계를 함께 정리했습니다.",
      highlights: [
        "BTC·S&P 500·Gold를 분석 대상으로 구성하고 시계열 데이터 전처리",
        "EGARCH 기반 변동성 분석과 VaR 리스크 지표 확인",
        "DCC-GARCH를 활용한 자산 간 동적 상관관계 분석",
        "모형 결과를 자산별로 비교하고 리스크 관점에서 결과 해석"
      ],
      keywords: ["EGARCH", "VaR", "DCC-GARCH", "Dynamic Correlation", "BTC", "Risk Analysis"]
    },
    {
      slug: "wsdm-spatial-data-analysis",
      title: "WSDM 공간데이터 분석 프로젝트",
      category: "experience",
      date: "2025",
      organization: "통계자료캡스톤디자인",
      role: "",
      description: "액티브 시니어 라이프스타일을 반영한 실버타운 최적 입지 분석",
      overview: "액티브 시니어의 생활 특성을 반영해 실버타운의 최적 입지를 탐색한 캡스톤 디자인 프로젝트입니다. 녹지·치안 등 주요 입지 요인에 대한 선행연구와 통계 자료를 정리하고, 공간데이터를 전처리한 뒤 WSDM 기반 다기준 의사결정 방법론을 적용하는 분석 과정을 구성했습니다.",
      highlights: [
        "WSDM 기반 다기준 의사결정 방법론 파트 정리 및 분석 구조 설계",
        "녹지·치안 등 실버타운 입지 요인의 선행연구와 통계적 근거 조사",
        "공간데이터 전처리 및 분석용 CSV 데이터 구축",
        "입지 요인을 통합해 후보 지역의 상대적 적합도를 비교하는 분석 수행"
      ],
      keywords: ["Spatial Data", "WSDM", "MCDM", "Location Analysis", "Data Preprocessing"]
    },
    {
      slug: "d-express-ontology-education-hackathon",
      title: "온톨로지 및 지식그래프 기반 교육서비스 기획·개발 해커톤",
      category: "hackathon",
      date: "2026.01.23",
      organization: "서울대학교 빅데이터혁신융합대학사업단",
      role: "D-EXPRESS CAMP 대상",
      description: "농업 교육 Knowledge Graph 기반 질의응답·정보 검색 서비스 ‘아삭이’",
      overview: "서울대학교 Ontology & Knowledge Graph 과정의 해커톤에서 농업 교육 콘텐츠를 연결하는 Knowledge Graph 기반 질의응답·정보 검색 서비스 ‘아삭이’를 개발했습니다. 팀 내 Knowledge Graph 경험을 바탕으로 전체 그래프 구조와 온톨로지 방향을 설계하고, 교육 콘텐츠 간 연결 방식을 구체화했습니다.",
      highlights: [
        "서비스 전체 Knowledge Graph 구조와 Ontology 방향성 설계",
        "교육 도메인의 Entity·Triplet·Relation 체계를 정의하고 데이터 연결 구조 구성",
        "강의 콘텐츠 유사도 계산에 Jaccard Similarity를 적용해 연관 콘텐츠 탐색 기능 설계",
        "팀 내 Knowledge Graph 기술 리딩을 맡아 프로젝트를 완성하고 D-EXPRESS CAMP 대상 수상"
      ],
      keywords: ["Ontology", "Knowledge Graph", "Triplet", "Jaccard Similarity", "Education Service", "Hackathon"]
    },
    {
      slug: "trade-qqick",
      title: "trade.qqick.com",
      category: "side-projects",
      date: "2026",
      organization: "Python, Streamlit, SQLite, AWS Lightsail",
      role: "",
      description: "섹터별 밸류에이션과 GARCH 기반 진입가를 제공하는 개인용 스크리너",
      overview: "국내외 종목을 섹터별 기준으로 저평가·고평가 판정하고 GARCH 계열 모형으로 진입가까지 계산하는 개인용 밸류에이션 스크리너입니다. 235개 종목과 26개 섹터 데이터를 매일 밤 배치로 갱신하며, 데이터 수집부터 모델 계산·저장·서비스 배포까지 혼자 운영하는 형태로 구축했습니다.",
      highlights: [
        "235개 종목·26개 섹터의 밸류에이션 데이터를 정기 수집하고 매일 밤 배치 갱신",
        "섹터별 기준을 적용해 저평가·고평가를 판정하고 GARCH 계열 모형으로 진입가 계산",
        "변동성 추정창은 2~3년, 극단 분위수 표본은 10년으로 분리해 추정 안정성 개선",
        "Python·Streamlit·SQLite로 구현하고 AWS Lightsail에 배포해 개인 서비스로 운영"
      ],
      keywords: ["Python", "Streamlit", "SQLite", "GARCH", "Valuation", "AWS Lightsail"],
      externalUrl: "https://trade.qqick.com"
    },
    {
      slug: "youtube-live-translation-subtitles",
      title: "Youtube 실시간 번역 자막",
      category: "side-projects",
      date: "2026",
      organization: "Chrome Extension, Gemini API",
      role: "",
      description: "Gemini API와 연동한 YouTube 번역 자막 Chrome Extension",
      overview: "YouTube 시청 중 번역 자막을 바로 활용할 수 있도록 만든 Chrome Extension 형태의 개인 프로젝트입니다. 브라우저 사용 흐름을 크게 바꾸지 않으면서 Gemini API를 연결해 번역 결과를 자막 형태로 제공하는 기능을 구현했습니다.",
      highlights: [
        "Chrome Extension 구조로 YouTube 시청 화면에 번역 기능 통합",
        "Gemini API를 연동해 자막 텍스트의 번역 처리 구성",
        "기존 시청 흐름을 방해하지 않도록 브라우저 내부에서 사용할 수 있는 UI 형태로 구현"
      ],
      keywords: ["Chrome Extension", "Gemini API", "YouTube", "Translation"]
    }
  ],

  contact: {
    email: "d55hyun@uos.ac.kr",
    location: "Korea"
  },

  social: [
    { label: "GH", url: "https://github.com/dhdy0203-dot" },
    { label: "IN", url: "#" },
    { label: "BL", url: "#" }
  ]
};
