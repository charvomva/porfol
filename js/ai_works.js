/*
  AI 모델 이미지 & 상세페이지 작업물 목록

  [작업물 추가/수정 방법]
  1. 이미지 파일을 img/ai/ 폴더에 넣습니다. (예: img/ai/brandA/thumb.jpg)
  2. 아래 배열에 { ... } 한 덩어리를 복사해서 붙이고 경로만 바꿉니다. (맨 앞 항목이 맨 처음에 보여요)
  3. 지금 들어 있는 12개는 자리표시용 샘플이에요. 실제 작업물로 교체하거나 지워 주세요.

  [항목 설명]
  title  : 작업물 이름
  tag    : 썸네일 아래 작은 글씨 (브랜드, 카테고리 등)
  thumb  : 썸네일 이미지 (권장 600x800 이상, 3:4 세로 비율, WebP/JPG)
  models : 모델 이미지 목록 (없으면 [])
  detail : 상세페이지 이미지 목록. 세로로 긴 이미지 한 장도, 여러 장으로 잘라서 순서대로 넣어도 됩니다 (없으면 [])
  desc   : 작업 설명 한두 줄 (선택). 사용한 툴, 본인이 한 작업(기획/프롬프트/보정/디자인) 등을 적어 주세요.

  models 와 detail 중 하나만 있어도 됩니다. 상단 탭("모델 이미지" / "상세페이지")이 이 값으로 자동 분류돼요.
*/
window.AI_WORKS = [
  { title: '샘플 작업물 01', tag: 'FASHION', thumb: 'img/ai/sample/thumb01.svg', models: ['img/ai/sample/model_a.svg', 'img/ai/sample/model_b.svg', 'img/ai/sample/model_c.svg'], detail: ['img/ai/sample/detail.svg'], desc: '샘플 설명입니다. AI 생성 + 보정, 상세페이지 디자인 작업.' },
  { title: '샘플 작업물 02', tag: 'FASHION', thumb: 'img/ai/sample/thumb02.svg', models: ['img/ai/sample/model_b.svg', 'img/ai/sample/model_c.svg'], detail: ['img/ai/sample/detail.svg'], desc: '' },
  { title: '샘플 작업물 03', tag: 'BEAUTY', thumb: 'img/ai/sample/thumb03.svg', models: ['img/ai/sample/model_c.svg', 'img/ai/sample/model_a.svg'], detail: ['img/ai/sample/detail.svg'], desc: '' },
  { title: '샘플 작업물 04', tag: 'BEAUTY', thumb: 'img/ai/sample/thumb04.svg', models: ['img/ai/sample/model_a.svg', 'img/ai/sample/model_b.svg'], detail: ['img/ai/sample/detail.svg'], desc: '' },
  { title: '샘플 작업물 05', tag: 'LIFESTYLE', thumb: 'img/ai/sample/thumb05.svg', models: ['img/ai/sample/model_b.svg'], detail: ['img/ai/sample/detail.svg'], desc: '' },
  { title: '샘플 작업물 06', tag: 'LIFESTYLE', thumb: 'img/ai/sample/thumb06.svg', models: ['img/ai/sample/model_c.svg', 'img/ai/sample/model_b.svg'], detail: ['img/ai/sample/detail.svg'], desc: '' },
  { title: '샘플 작업물 07', tag: 'FASHION', thumb: 'img/ai/sample/thumb07.svg', models: ['img/ai/sample/model_a.svg', 'img/ai/sample/model_c.svg'], detail: ['img/ai/sample/detail.svg'], desc: '' },
  { title: '샘플 작업물 08', tag: 'FASHION', thumb: 'img/ai/sample/thumb08.svg', models: ['img/ai/sample/model_b.svg', 'img/ai/sample/model_a.svg'], detail: ['img/ai/sample/detail.svg'], desc: '' },
  { title: '샘플 작업물 09 (모델 이미지만)', tag: 'MODEL', thumb: 'img/ai/sample/thumb09.svg', models: ['img/ai/sample/model_a.svg', 'img/ai/sample/model_b.svg', 'img/ai/sample/model_c.svg'], detail: [], desc: '' },
  { title: '샘플 작업물 10 (모델 이미지만)', tag: 'MODEL', thumb: 'img/ai/sample/thumb10.svg', models: ['img/ai/sample/model_c.svg', 'img/ai/sample/model_b.svg'], detail: [], desc: '' },
  { title: '샘플 작업물 11 (상세페이지만)', tag: 'DETAIL', thumb: 'img/ai/sample/thumb11.svg', models: [], detail: ['img/ai/sample/detail.svg'], desc: '' },
  { title: '샘플 작업물 12 (상세페이지만)', tag: 'DETAIL', thumb: 'img/ai/sample/thumb12.svg', models: [], detail: ['img/ai/sample/detail.svg'], desc: '' }
];
