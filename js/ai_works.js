/*
  AI 모델 이미지 & 상세페이지 작업물 목록

  [작업물 추가/수정 방법]
  1. 이미지 파일을 img/ai/ 폴더 안에 작업물별 폴더를 만들어 넣습니다. (예: img/ai/tommyping/)
     - PNG 원본은 용량이 커서(1~2MB) WebP 로 변환해서 올리는 걸 권해요. (변환은 저한테 맡겨 주셔도 돼요)
  2. 아래 배열에 { ... } 한 덩어리를 복사해서 붙이고 경로와 글만 바꿉니다. (맨 앞 항목이 맨 처음에 보여요)

  [항목 설명]
  category : 카테고리 이름 (예: '후드티', '청바지'). 왼쪽 필터 목록이 이 값으로 자동으로 만들어져요.
             같은 이름을 쓴 작업물끼리 묶이고, 목록 순서는 처음 등장한 순서예요.
  product  : 상품 이름 (같은 상품의 색상끼리 이 값으로 묶여서 연달아 보여요. 색상만 다른 작업물은 같은 값을 쓰세요)
  title    : 작업물 이름 (보통 '상품 이름 + 색상')
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
    product: '무지 오버핏 후드티',
    title: '무지 오버핏 후드티 Oatmeal',
    thumb: 'img/ai/uretin/oatmeal-thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/uretin/oatmeal-1.webp',
      'img/ai/uretin/oatmeal-2.webp',
      'img/ai/uretin/oatmeal-3.webp',
      'img/ai/uretin/oatmeal-4.webp',
      'img/ai/uretin/oatmeal-5.webp',
      'img/ai/uretin/oatmeal-6.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/uretin/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://www.musinsa.com/products/7125254',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 3종 공통) / 이전 스마트스토어: https://smartstore.naver.com/blueforce/products/13771553303
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '후드티',
    product: '무지 오버핏 후드티',
    title: '무지 오버핏 후드티 Black',
    thumb: 'img/ai/uretin/black-thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/uretin/black-1.webp',
      'img/ai/uretin/black-2.webp',
      'img/ai/uretin/black-3.webp',
      'img/ai/uretin/black-4.webp',
      'img/ai/uretin/black-5.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/uretin/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://www.musinsa.com/products/7125254',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 3종 공통) / 이전 스마트스토어: https://smartstore.naver.com/blueforce/products/13771553303
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '후드티',
    product: '무지 오버핏 후드티',
    title: '무지 오버핏 후드티 Purple',
    thumb: 'img/ai/uretin/purple-thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/uretin/purple-1.webp',
      'img/ai/uretin/purple-2.webp',
      'img/ai/uretin/purple-3.webp',
      'img/ai/uretin/purple-4.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/uretin/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://www.musinsa.com/products/7125254',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 3종 공통) / 이전 스마트스토어: https://smartstore.naver.com/blueforce/products/13771553303
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '후드티',
    product: '레터링 오버핏 후드티',
    title: '레터링 오버핏 후드티 Black',
    thumb: 'img/ai/lettering/black-thumb.webp',
    thumbPos: '50% 0%',
    models: [
      'img/ai/lettering/black-1.webp',
      'img/ai/lettering/black-2.webp',
      'img/ai/lettering/black-3.webp',
      'img/ai/lettering/black-4.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/lettering/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://www.musinsa.com/products/7202138',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 3종 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '후드티',
    product: '레터링 오버핏 후드티',
    title: '레터링 오버핏 후드티 Green',
    thumb: 'img/ai/lettering/green-thumb.webp',
    thumbPos: '50% 0%',
    models: [
      'img/ai/lettering/green-1.webp',
      'img/ai/lettering/green-2.webp',
      'img/ai/lettering/green-3.webp',
      'img/ai/lettering/green-4.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/lettering/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://www.musinsa.com/products/7202138',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 3종 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '후드티',
    product: '레터링 오버핏 후드티',
    title: '레터링 오버핏 후드티 Navy',
    thumb: 'img/ai/lettering/navy-thumb.webp',
    thumbPos: '50% 0%',
    models: [
      'img/ai/lettering/navy-1.webp',
      'img/ai/lettering/navy-2.webp',
      'img/ai/lettering/navy-3.webp',
      'img/ai/lettering/navy-4.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/lettering/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://www.musinsa.com/products/7202138',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 3종 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '후드티',
    product: '컬러배색 후드티',
    title: '컬러배색 후드티 Beige',
    thumb: 'img/ai/colorblock/beige-thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/colorblock/beige-1.webp',
      'img/ai/colorblock/beige-2.webp',
      'img/ai/colorblock/beige-3.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/colorblock/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://www.musinsa.com/products/7601253',
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '후드티',
    product: '컬러배색 후드티',
    title: '컬러배색 후드티 Black',
    thumb: 'img/ai/colorblock/black-thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/colorblock/black-1.webp',
      'img/ai/colorblock/black-2.webp',
      'img/ai/colorblock/black-3.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/colorblock/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://www.musinsa.com/products/7601253',
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '후드티',
    product: '컬러배색 후드티',
    title: '컬러배색 후드티 Gray',
    thumb: 'img/ai/colorblock/gray-thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/colorblock/gray-1.webp',
      'img/ai/colorblock/gray-2.webp',
      'img/ai/colorblock/gray-3.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/colorblock/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://www.musinsa.com/products/7601253',
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '후드티',
    product: '무지 베이직핏 후드티',
    title: '무지 베이직핏 후드티 Black',
    thumb: 'img/ai/basic/black-thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/basic/black-1.webp',
      'img/ai/basic/black-2.webp',
      'img/ai/basic/black-3.webp',
      'img/ai/basic/black-4.webp'
    ],
    detail: [],
    detailUrl: 'https://www.musinsa.com/products/7414862',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '후드티',
    product: '무지 베이직핏 후드티',
    title: '무지 베이직핏 후드티 Sky Blue',
    thumb: 'img/ai/basic/skyblue-thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/basic/skyblue-1.webp',
      'img/ai/basic/skyblue-2.webp',
      'img/ai/basic/skyblue-3.webp'
    ],
    detail: [],
    detailUrl: 'https://www.musinsa.com/products/7414862',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '후드티',
    product: '무지 베이직핏 후드티',
    title: '무지 베이직핏 후드티 Charcoal',
    thumb: 'img/ai/basic/charcoal-thumb.webp',
    thumbPos: '50% 50%',
    models: [ 'img/ai/basic/charcoal-1.webp', 'img/ai/basic/charcoal-2.webp', 'img/ai/basic/charcoal-3.webp' ],
    detail: [],
    detailUrl: 'https://www.musinsa.com/products/7414862',
    desc: '', tools: '', role: ''
  },
  {
    category: '후드티',
    product: '무지 베이직핏 후드티',
    title: '무지 베이직핏 후드티 Gray',
    thumb: 'img/ai/basic/gray-thumb.webp',
    thumbPos: '50% 50%',
    models: [ 'img/ai/basic/gray-1.webp', 'img/ai/basic/gray-2.webp', 'img/ai/basic/gray-3.webp' ],
    detail: [],
    detailUrl: 'https://www.musinsa.com/products/7414862',
    desc: '', tools: '', role: ''
  },
  {
    category: '셔츠',
    product: '옥스포드 셔츠',
    title: '옥스포드 셔츠 Khaki',
    thumb: 'img/ai/oxford/khaki-thumb.webp',
    thumbPos: '50% 50%',
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
    detailUrl: 'https://www.musinsa.com/products/5445894',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '셔츠',
    product: '옥스포드 셔츠',
    title: '옥스포드 셔츠 Navy',
    thumb: 'img/ai/oxford/navy-thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/oxford/navy-1.webp',
      'img/ai/oxford/navy-2.webp',
      'img/ai/oxford/navy-3.webp',
      'img/ai/oxford/navy-4.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/oxford/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://www.musinsa.com/products/5445894',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '셔츠',
    product: '옥스포드 셔츠',
    title: '옥스포드 셔츠 Sky',
    thumb: 'img/ai/oxford/sky-thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/oxford/sky-1.webp',
      'img/ai/oxford/sky-2.webp',
      'img/ai/oxford/sky-3.webp',
      'img/ai/oxford/sky-4.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/oxford/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://www.musinsa.com/products/5445894',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '셔츠',
    product: '반팔 데님 셔츠',
    title: '반팔 데님 셔츠',
    thumb: 'img/ai/denimshirt/thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/denimshirt/1.webp',   // Light Blue
      'img/ai/denimshirt/2.webp',   // Light Blue
      'img/ai/denimshirt/3.webp',   // Blue
      'img/ai/denimshirt/4.webp',   // Black
      'img/ai/denimshirt/5.webp',   // White
      'img/ai/denimshirt/6.webp'    // 컬러 전체 플랫레이
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/denimshirt/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13467369698',   // 실제 상세페이지 주소 (새 창으로 열림)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '청바지',
    product: '세미와이드 데님 팬츠',
    title: '세미와이드 데님 팬츠 Black',
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
  },
  {
    category: '청바지',
    product: '세미와이드 데님 팬츠',
    title: '세미와이드 데님 팬츠 Gray',
    thumb: 'img/ai/tommyping/gray-thumb.webp',
    thumbPos: '50% 85%',
    models: [
      'img/ai/tommyping/gray-1.webp',
      'img/ai/tommyping/gray-2.webp',
      'img/ai/tommyping/gray-3.webp'
    ],
    detail: [],
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13649092237',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '청바지',
    product: '세미와이드 데님 팬츠',
    title: '세미와이드 데님 팬츠 Light Blue',
    thumb: 'img/ai/tommyping/lightblue-thumb.webp',
    thumbPos: '50% 85%',
    models: [
      'img/ai/tommyping/lightblue-1.webp',
      'img/ai/tommyping/lightblue-2.webp',
      'img/ai/tommyping/lightblue-3.webp'
    ],
    detail: [],
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13649092237',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '청바지',
    product: '세미와이드 데님 팬츠',
    title: '세미와이드 데님 팬츠 Blue',
    thumb: 'img/ai/tommyping/blue-thumb.webp',
    thumbPos: '50% 85%',
    models: [
      'img/ai/tommyping/blue-1.webp',
      'img/ai/tommyping/blue-2.webp',
      'img/ai/tommyping/blue-3.webp',
      'img/ai/tommyping/blue-4.webp'
    ],
    detail: [],
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13649092237',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '청바지',
    product: '스트레이트핏 데님 팬츠',
    title: '스트레이트핏 데님 팬츠 Light Blue',
    thumb: 'img/ai/straight/lightblue-thumb.webp',
    thumbPos: '50% 85%',
    models: [
      'img/ai/straight/lightblue-1.webp',
      'img/ai/straight/lightblue-2.webp',
      'img/ai/straight/lightblue-3.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/straight/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13647080307',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '청바지',
    product: '스트레이트핏 데님 팬츠',
    title: '스트레이트핏 데님 팬츠 Ice Blue',
    thumb: 'img/ai/straight/iceblue-thumb.webp',
    thumbPos: '50% 85%',
    models: [
      'img/ai/straight/iceblue-1.webp',
      'img/ai/straight/iceblue-2.webp',
      'img/ai/straight/iceblue-3.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/straight/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13647080307',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '청바지',
    product: '스트레이트핏 데님 팬츠',
    title: '스트레이트핏 데님 팬츠 Dark Blue',
    thumb: 'img/ai/straight/darkblue-thumb.webp',
    thumbPos: '50% 85%',
    models: [
      'img/ai/straight/darkblue-1.webp',
      'img/ai/straight/darkblue-2.webp',
      'img/ai/straight/darkblue-3.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/straight/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13647080307',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '청바지',
    product: '스트레이트핏 데님 팬츠',
    title: '스트레이트핏 데님 팬츠 Black',
    thumb: 'img/ai/straight/black-thumb.webp',
    thumbPos: '50% 85%',
    models: [
      'img/ai/straight/black-1.webp',
      'img/ai/straight/black-2.webp',
      'img/ai/straight/black-3.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/straight/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13647080307',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '청바지',
    product: '데님 쇼츠',
    title: '데님 쇼츠',
    thumb: 'img/ai/denimshorts/thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/denimshorts/1.webp',   // Light Blue
      'img/ai/denimshorts/2.webp',   // Blue
      'img/ai/denimshorts/3.webp',   // Blue (back)
      'img/ai/denimshorts/4.webp',   // Black (back)
      'img/ai/denimshorts/5.webp',   // Black
      'img/ai/denimshorts/6.webp'    // Black
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/denimshorts/ 에 올리면 여기에 경로를 추가
    // detailUrl: '',   // 상세페이지 주소가 생기면 여기에 입력
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '청바지',
    product: '논페이드 와이드 데님',
    title: '논페이드 와이드 데님 Deep Blue',
    thumb: 'img/ai/glimy/deepblue-thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/glimy/1.webp',
      'img/ai/glimy/2.webp',
      'img/ai/glimy/4.webp',
      'img/ai/glimy/7.webp',
      'img/ai/glimy/6.webp'
    ],
    detail: [],
    detailUrl: 'detail-glimy.html',   // 상세페이지 이미지는 img/ai/glimy/detail-glimy1, detail-glimy2 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '청바지',
    product: '논페이드 와이드 데님',
    title: '논페이드 와이드 데님 Black',
    thumb: 'img/ai/glimy/black-thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/glimy/3.webp',
      'img/ai/glimy/5.webp',
      'img/ai/glimy/8.webp',
      'img/ai/glimy/9.webp',
      'img/ai/glimy/6.webp'
    ],
    detail: [],
    detailUrl: 'detail-glimy.html',   // 상세페이지 이미지는 img/ai/glimy/detail-glimy1, detail-glimy2 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '아우터',
    product: '웰론 패딩 점퍼',
    title: '웰론 패딩 점퍼',
    thumb: 'img/ai/padding/thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/padding/1.webp',   // Black
      'img/ai/padding/2.webp',   // Black
      'img/ai/padding/3.webp',   // Gray
      'img/ai/padding/4.webp',   // Khaki
      'img/ai/padding/5.webp'    // Khaki
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/padding/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13812310314',   // 실제 상세페이지 주소 (새 창으로 열림)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '아우터',
    product: '경량 패딩',
    title: '경량 패딩',
    thumb: 'img/ai/lightpadding/thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/lightpadding/1.webp',   // Black
      'img/ai/lightpadding/2.webp',   // Gray
      'img/ai/lightpadding/3.webp'    // Sky Blue
    ],
    detail: [],
    detailUrl: 'detail-lightpadding.html',   // 상세페이지 이미지: img/ai/lightpadding/detail-1, detail-2 ... (원본을 같은 이름으로 덮어쓰면 교체됨)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '아우터',
    product: '경량 패딩2',
    title: '경량 패딩2',
    thumb: 'img/ai/lightpadding2/thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/lightpadding2/1.webp',   // Charcoal Olive
      'img/ai/lightpadding2/2.webp',   // Khaki Brown
      'img/ai/lightpadding2/3.webp',   // Navy
      'img/ai/lightpadding2/4.webp'    // White
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/lightpadding2/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13778355161',   // 실제 상세페이지 주소 (새 창으로 열림)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '아우터',
    product: '패딩 조끼',
    title: '패딩 조끼',
    thumb: 'img/ai/vest/thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/vest/1.webp',   // Light Gray
      'img/ai/vest/2.webp',   // Light Gray
      'img/ai/vest/3.webp',   // Light Gray
      'img/ai/vest/4.webp',   // Charcoal
      'img/ai/vest/5.webp',   // Charcoal
      'img/ai/vest/6.webp',   // White
      'img/ai/vest/7.webp'    // White
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/vest/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13771307007',   // 실제 상세페이지 주소 (새 창으로 열림)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '니트',
    product: '헨리넥 니트',
    title: '헨리넥 니트 Black',
    thumb: 'img/ai/henley/black-thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/henley/black-1.webp',
      'img/ai/henley/black-2.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/henley/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13824829588',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '니트',
    product: '헨리넥 니트',
    title: '헨리넥 니트 Brown',
    thumb: 'img/ai/henley/brown-thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/henley/brown-1.webp',
      'img/ai/henley/brown-2.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/henley/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13824829588',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '니트',
    product: '헨리넥 니트',
    title: '헨리넥 니트 Gray',
    thumb: 'img/ai/henley/gray-thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/henley/gray-1.webp',
      'img/ai/henley/gray-2.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/henley/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13824829588',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '니트',
    product: '헨리넥 니트',
    title: '헨리넥 니트 Green',
    thumb: 'img/ai/henley/green-thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/henley/green-1.webp',
      'img/ai/henley/green-2.webp',
      'img/ai/henley/green-3.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/henley/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13824829588',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '니트',
    product: '헨리넥 니트',
    title: '헨리넥 니트 Khaki',
    thumb: 'img/ai/henley/khaki-thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/henley/khaki-1.webp',
      'img/ai/henley/khaki-2.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/henley/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13824829588',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '니트',
    product: '헨리넥 니트',
    title: '헨리넥 니트 Navy',
    thumb: 'img/ai/henley/navy-thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/henley/navy-1.webp',
      'img/ai/henley/navy-2.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/henley/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13824829588',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '니트',
    product: '헨리넥 니트',
    title: '헨리넥 니트 Oatmeal',
    thumb: 'img/ai/henley/oatmeal-thumb.webp',
    thumbPos: '50% 20%',
    models: [
      'img/ai/henley/oatmeal-1.webp',
      'img/ai/henley/oatmeal-2.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/henley/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13824829588',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '트레이닝',
    product: '파라슈트 팬츠',
    title: '파라슈트 팬츠 Light Gray',
    thumb: 'img/ai/parachute/lightgray-thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/parachute/lightgray-1.webp',
      'img/ai/parachute/lightgray-2.webp',
      'img/ai/parachute/lightgray-3.webp',
      'img/ai/parachute/lightgray-4.webp',
      'img/ai/parachute/lightgray-5.webp',
      'img/ai/parachute/lightgray-6.webp',
      'img/ai/parachute/lightgray-7.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/parachute/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13467286870',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '트레이닝',
    product: '파라슈트 팬츠',
    title: '파라슈트 팬츠 Brown',
    thumb: 'img/ai/parachute/brown-thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/parachute/brown-1.webp',
      'img/ai/parachute/brown-2.webp',
      'img/ai/parachute/brown-3.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/parachute/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13467286870',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  },
  {
    category: '트레이닝',
    product: '파라슈트 팬츠',
    title: '파라슈트 팬츠 Charcoal',
    thumb: 'img/ai/parachute/charcoal-thumb.webp',
    thumbPos: '50% 50%',
    models: [
      'img/ai/parachute/charcoal-1.webp',
      'img/ai/parachute/charcoal-2.webp',
      'img/ai/parachute/charcoal-3.webp'
    ],
    detail: [],   // 나중에 상세페이지 이미지를 img/ai/parachute/ 에 올리면 여기에 경로를 추가
    detailUrl: 'https://smartstore.naver.com/blueforce/products/13467286870',   // 실제 상세페이지 주소 (새 창으로 열림, 색상 공통)
    desc: '',
    tools: '',
    role: ''
  }
];
