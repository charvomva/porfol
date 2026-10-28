/*
  AI 모델 이미지 & 상세페이지 작업물 목록

  [작업물 추가/수정 방법]
  1. 이미지 파일을 img/ai/ 폴더에 넣습니다. (예: img/ai/hoodie01/thumb.jpg)
  2. 아래 배열에 { ... } 한 덩어리를 복사해서 붙이고 경로와 글만 바꿉니다. (맨 앞 항목이 맨 처음에 보여요)
  3. 지금 들어 있는 12개는 자리표시용 샘플이에요. 실제 작업물로 교체하거나 지워 주세요.

  [항목 설명]
  category : 카테고리 이름 (예: '후드티', '청바지'). 왼쪽 필터 목록이 이 값으로 자동으로 만들어져요.
             같은 이름을 쓴 작업물끼리 묶이고, 목록 순서는 처음 등장한 순서예요.
  title    : 작업물 이름
  thumb    : 목록에 보이는 썸네일 이미지 (권장 600x800 이상, 3:4 세로 비율, WebP/JPG)
  hover    : (선택) 마우스를 올렸을 때 바뀌는 이미지. 안 적으면 models 의 첫 번째 이미지가 나와요.
  models   : 모델 이미지 목록. 상세 화면 왼쪽에 위에서 아래로 쭉 이어져요 (없으면 [])
  detail   : 상세페이지 이미지 목록. 세로로 긴 이미지 한 장도, 여러 장으로 잘라서 순서대로 넣어도 됩니다 (없으면 [])
  desc     : (선택) 작업 설명 한두 줄
  tools    : (선택) 사용한 툴 (예: 'Midjourney, Photoshop, Figma')
  role     : (선택) 내가 한 일 (예: '기획, 프롬프트, 보정, 상세페이지 디자인')

  models 와 detail 중 하나만 있어도 됩니다. 상세 화면의 버튼("Model Images" / "Detail Page")이 있는 것만 보여요.
*/
window.AI_WORKS = [
  { category: '후드티', title: 'Oversized Hoodie 01', thumb: 'img/ai/sample/thumb01.svg', models: ['img/ai/sample/model_a.svg', 'img/ai/sample/model_b.svg', 'img/ai/sample/model_c.svg'], detail: ['img/ai/sample/detail.svg'], desc: '샘플 설명입니다. 실제 작업 내용을 한두 줄로 적어 주세요.', tools: 'Midjourney, Photoshop, Figma', role: '기획, 프롬프트 작업, 이미지 보정, 상세페이지 디자인' },
  { category: '후드티', title: 'Oversized Hoodie 02', thumb: 'img/ai/sample/thumb02.svg', models: ['img/ai/sample/model_b.svg', 'img/ai/sample/model_c.svg'], detail: ['img/ai/sample/detail.svg'], desc: '', tools: 'Midjourney, Photoshop', role: '프롬프트 작업, 이미지 보정' },
  { category: '후드티', title: 'Zip-up Hoodie 03', thumb: 'img/ai/sample/thumb03.svg', models: ['img/ai/sample/model_c.svg', 'img/ai/sample/model_a.svg'], detail: ['img/ai/sample/detail.svg'], desc: '', tools: '', role: '' },
  { category: '청바지', title: 'Straight Denim 04', thumb: 'img/ai/sample/thumb04.svg', models: ['img/ai/sample/model_a.svg', 'img/ai/sample/model_b.svg'], detail: ['img/ai/sample/detail.svg'], desc: '', tools: '', role: '' },
  { category: '청바지', title: 'Wide Denim 05', thumb: 'img/ai/sample/thumb05.svg', models: ['img/ai/sample/model_b.svg'], detail: ['img/ai/sample/detail.svg'], desc: '', tools: '', role: '' },
  { category: '청바지', title: 'Slim Denim 06', thumb: 'img/ai/sample/thumb06.svg', models: ['img/ai/sample/model_c.svg', 'img/ai/sample/model_b.svg'], detail: ['img/ai/sample/detail.svg'], desc: '', tools: '', role: '' },
  { category: '원피스', title: 'Slip Dress 07', thumb: 'img/ai/sample/thumb07.svg', models: ['img/ai/sample/model_a.svg', 'img/ai/sample/model_c.svg'], detail: ['img/ai/sample/detail.svg'], desc: '', tools: '', role: '' },
  { category: '원피스', title: 'Shirt Dress 08', thumb: 'img/ai/sample/thumb08.svg', models: ['img/ai/sample/model_b.svg', 'img/ai/sample/model_a.svg'], detail: ['img/ai/sample/detail.svg'], desc: '', tools: '', role: '' },
  { category: '자켓', title: 'Leather Jacket 09 (모델 이미지만)', thumb: 'img/ai/sample/thumb09.svg', models: ['img/ai/sample/model_a.svg', 'img/ai/sample/model_b.svg', 'img/ai/sample/model_c.svg'], detail: [], desc: '', tools: '', role: '' },
  { category: '자켓', title: 'Blazer 10 (모델 이미지만)', thumb: 'img/ai/sample/thumb10.svg', models: ['img/ai/sample/model_c.svg', 'img/ai/sample/model_b.svg'], detail: [], desc: '', tools: '', role: '' },
  { category: '니트', title: 'Cable Knit 11 (상세페이지만)', thumb: 'img/ai/sample/thumb11.svg', models: [], detail: ['img/ai/sample/detail.svg'], desc: '', tools: '', role: '' },
  { category: '니트', title: 'Cardigan 12 (상세페이지만)', thumb: 'img/ai/sample/thumb12.svg', models: [], detail: ['img/ai/sample/detail.svg'], desc: '', tools: '', role: '' }
];
