/*
  AI 모델 이미지 & 상세페이지 작업물 목록

  [작업물 추가/수정 방법]
  1. 이미지 파일을 img/ai/ 폴더 안에 작업물별 폴더를 만들어 넣습니다. (예: img/ai/tommyping/)
     - PNG 원본은 용량이 커서(1~2MB) WebP 로 변환해서 올리는 걸 권해요. (변환은 저한테 맡겨 주셔도 돼요)
  2. 아래 배열에 { ... } 한 덩어리를 복사해서 붙이고 경로와 글만 바꿉니다. (맨 앞 항목이 맨 처음에 보여요)

  [항목 설명]
  category : 카테고리 이름 (예: '후드티', '청바지'). 왼쪽 필터 목록이 이 값으로 자동으로 만들어져요.
             같은 이름을 쓴 작업물끼리 묶이고, 목록 순서는 처음 등장한 순서예요.
  title    : 작업물 이름
  thumb    : 목록에 보이는 썸네일 이미지 (권장 3:4 세로 비율, 가로 600px 이상, WebP/JPG)
  hover    : (선택) 마우스를 올렸을 때 바뀌는 이미지. 안 적으면 models 의 첫 번째 이미지가 나와요.
  thumbPos : (선택) 썸네일이 칸에 맞춰 잘릴 때 보여줄 위치. 예: '50% 20%' (가로 50%, 세로 위에서 20%) 얼굴이 잘리면 값을 줄이고, 아래가 잘리면 늘려요.
  hoverPos : (선택) 마우스를 올렸을 때 이미지의 위치. 쓰는 방법은 thumbPos 와 같아요.
  models   : 모델 이미지 목록. 상세 화면 왼쪽에 위에서 아래로 쭉 이어져요 (없으면 [])
  detail   : 상세페이지 이미지 목록. 세로로 긴 이미지 한 장도, 여러 장으로 잘라서 순서대로 넣어도 됩니다 (없으면 [])
  detailUrl: (선택) 실제 상세페이지가 올라가 있는 주소 (스마트스토어 등). 적으면 상세 화면에 "View Detail Page ↗" 버튼이 생기고 새 창으로 열려요.
             주소 뒤의 ?nl-ts-pid=... 같은 추적용 파라미터는 빼고 상품 주소만 적는 걸 권해요.
  detailLabel / detailNote : (선택) 위 버튼의 글자, 버튼 아래 작은 안내 문구를 바꾸고 싶을 때
  desc     : (선택) 작업 설명 한두 줄
  tools    : (선택) 사용한 툴 (예: 'Midjourney, Photoshop, Figma')
  role     : (선택) 내가 한 일 (예: '기획, 프롬프트, 보정, 상세페이지 디자인')

  models 와 detail 을 둘 다 넣으면 상세 화면 오른쪽에 "Model Images" / "Detail Page" 이동 버튼이 생겨요.
  desc, tools, role 은 비워 두면 해당 칸이 보이지 않아요.
*/
window.AI_WORKS = [
  {
    category: '후드티',
    title: '유레틴 Oatmeal',
    thumb: 'img/ai/uretin/oatmeal-thumb.webp',
    thumbPos: '50% 0%',
    models: [
      'img/ai/uretin/oatmeal-1.webp',
      'img/ai/uretin/oatmeal-2.webp',
      'img/ai/uretin/oatmeal-3.webp',
      'img/ai/uretin/oatmeal-4.webp',
      'img/ai/uretin/oatmeal-5.webp',
      'img/ai/uretin/oatmeal-6.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/uretin/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13771553303',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 3종 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '후드티',
    title: '유레틴 Black',
    thumb: 'img/ai/uretin/black-thumb.webp',
    thumbPos: '50% 0%',
    models: [
      'img/ai/uretin/black-1.webp',
      'img/ai/uretin/black-2.webp',
      'img/ai/uretin/black-3.webp',
      'img/ai/uretin/black-4.webp',
      'img/ai/uretin/black-5.webp',
      'img/ai/uretin/black-6.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/uretin/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13771553303',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 3종 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '후드티',
    title: '유레틴 Purple',
    thumb: 'img/ai/uretin/purple-thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/uretin/purple-1.webp',
      'img/ai/uretin/purple-2.webp',
      'img/ai/uretin/purple-3.webp',
      'img/ai/uretin/purple-4.webp',
      'img/ai/uretin/purple-5.webp',
      'img/ai/uretin/purple-6.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/uretin/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13771553303',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 3종 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '셔츠',
    title: '옥스포드 셔츠 Khaki',
    thumb: 'img/ai/oxford/khaki-thumb.webp',
    thumbPos: '50% 0%',
    models: [
      'img/ai/oxford/khaki-1.webp',
      'img/ai/oxford/khaki-2.webp',
      'img/ai/oxford/khaki-3.webp',
      'img/ai/oxford/khaki-4.webp',
      'img/ai/oxford/khaki-5.webp',
      'img/ai/oxford/khaki-6.webp',
      'img/ai/oxford/khaki-7.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/oxford/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/10839046838',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 3종 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '셔츠',
    title: '옥스포드 셔츠 Navy',
    thumb: 'img/ai/oxford/navy-thumb.webp',
    thumbPos: '50% 0%',
    models: [
      'img/ai/oxford/navy-1.webp',
      'img/ai/oxford/navy-2.webp',
      'img/ai/oxford/navy-3.webp',
      'img/ai/oxford/navy-4.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/oxford/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/10839046838',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 3종 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '셔츠',
    title: '옥스포드 셔츠 Sky',
    thumb: 'img/ai/oxford/sky-thumb.webp',
    thumbPos: '50% 0%',
    models: [
      'img/ai/oxford/sky-1.webp',
      'img/ai/oxford/sky-2.webp',
      'img/ai/oxford/sky-3.webp',
      'img/ai/oxford/sky-4.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/oxford/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/10839046838',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 3종 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '청바지',
    title: '토미핑 Black',
    thumb: 'img/ai/tommyping/thumb.webp',
    thumbPos: '50% 85%',                   // 썸네일이 잘릴 때 보여줄 위치 (위 0% ~ 아래 100%)
    hoverPos: '50% 20%',                   // 마우스를 올렸을 때 이미지(전신 컷)의 위치. 얼굴이 보이게 위쪽 기준
    models: [
      'img/ai/tommyping/model-1.webp',   // 전신
      'img/ai/tommyping/model-2.webp',   // 앞모습
      'img/ai/tommyping/model-3.webp'    // 뒷모습
    ],
    detail: [],
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13649092237',   // 실제 상세페이지 주소 (새 창으로 열림)
    desc: '',
    tools: '',
    role: ''
  }
];
