// 必修科目カリキュラム定義
// 学年・学期ごとの必修科目データ

const CURRICULUM = {
  '1_1': [
    //{ name: '共通基盤ワークショップ1A', code: 'CS101', periods: [1, 2], day: 'mon', type: 'required' },
    { name: 'プログラミング基礎(メ)', code: 'B31L03A1', period: 3, day: 'mon', type: 'required' },
    { name: 'データサイエンス入門1(メ)', code: 'B31L02A1', period: 1, day: 'tue', type: 'required' },
    { name: 'コンピューターシステム入門1(メ)', code: 'B31L01A1', period: 2, day: 'tue', type: 'required' },
    { name: 'プログラミングのための基礎数学', code: 'B31L04A1', period: 3, day: 'tue', type: 'required' },
    { name: '確率統計リテラシー1(メ)', code: 'B31N01A1', period: 4, day: 'tue', type: 'required' },
    { name: '修学基礎', code: 'B30D01A1', period: 1, day: 'wed', type: 'required' },
    { name: '情報学実習A', code: 'B31M01A1', periods: [3, 4], day: 'fri', type: 'required' }
  ],
  '1_2': [
    { name: 'プログラミング実習', periods: [1, 2], day: 'fri', type: 'required' },
    { name: 'IT演習基礎1(メ)', periods: [4, 5], day: 'tue', type: 'required' },
    { name: 'データサイエンス入門2(メ)', period: 3, day: 'thu', type: 'required' },
    { name: 'データサイエンスのためのプログラミング基礎(メ)', period: 4, day: 'thu', type: 'required' },
    { name: '情報学実習B', periods: [3, 4], day: 'fri', type: 'required' }
    //英語総合発展を選択式に
      ],
  '2_1': [
    { name: 'データサイエンス基礎', code: 'DS201', period: 1, day: 'mon', type: 'required' },
    { name: '応用化学', code: 'CHEM201', period: 1, day: 'wed', type: 'elective' },
    { name: 'プログラミング演習', code: 'CS210', period: 2, day: 'tue', type: 'required' },
    { name: 'データベース', code: 'CS220', period: 2, day: 'thu', type: 'elective-required' },
    { name: '統計学I', code: 'STAT201', period: 3, day: 'mon', type: 'required' },
    { name: '機械工学基礎', code: 'ENG201', period: 3, day: 'fri', type: 'elective' },
    { name: '経営学入門', code: 'BUS101', period: 4, day: 'wed', type: 'other' }
  ],
  '2_2': [
    { name: '機械学習基礎', code: 'ML201', period: 1, day: 'mon', type: 'required' },
    { name: '材料科学', code: 'MAT201', period: 1, day: 'wed', type: 'elective' },
    { name: 'Webプログラミング', code: 'CS230', period: 2, day: 'tue', type: 'elective-required' },
    { name: 'ネットワーク概論', code: 'CS240', period: 2, day: 'thu', type: 'elective-required' },
    { name: '統計学II', code: 'STAT202', period: 3, day: 'mon', type: 'required' },
    { name: 'CAD実習', code: 'ENG210', period: 3, day: 'fri', type: 'other' },
    { name: '経営戦略論', code: 'BUS201', period: 4, day: 'wed', type: 'other' }
  ],
  '3_1': [
    { name: '深層学習', code: 'ML301', period: 1, day: 'mon', type: 'required' },
    { name: 'プロセス工学', code: 'CHE301', period: 1, day: 'wed', type: 'elective' },
    { name: 'クラウドコンピューティング', code: 'CS310', period: 2, day: 'tue', type: 'elective-required' },
    { name: 'セキュリティ概論', code: 'SEC301', period: 2, day: 'thu', type: 'elective' },
    { name: 'データ可視化', code: 'DS301', period: 3, day: 'mon', type: 'other' },
    { name: '設計製図演習', code: 'ENG301', period: 3, day: 'fri', type: 'other' },
    { name: 'マーケティング戦略', code: 'MKT301', period: 4, day: 'wed', type: 'other' }
  ],
  '3_2': [
    { name: '自然言語処理', code: 'ML302', period: 1, day: 'mon', type: 'required' },
    { name: 'バイオテクノロジー', code: 'BIO301', period: 1, day: 'wed', type: 'elective' },
    { name: 'IoT実践', code: 'IOT301', period: 2, day: 'tue', type: 'elective-required' },
    { name: 'システム設計', code: 'CS320', period: 2, day: 'thu', type: 'elective' },
    { name: 'ビッグデータ分析', code: 'DS302', period: 3, day: 'mon', type: 'other' },
    { name: 'プロジェクト管理', code: 'PM301', period: 3, day: 'fri', type: 'other' },
    { name: 'ゼミナール', code: 'SEM301', period: 4, day: 'thu', type: 'required' }
  ],
  '4_1': [
    { name: '卒業研究', code: 'THESIS401', period: 1, day: 'mon', type: 'required' },
    { name: 'AI倫理', code: 'AI401', period: 2, day: 'tue', type: 'elective' },
    { name: 'ソフトウェアエンジニアリング', code: 'SE401', period: 3, day: 'wed', type: 'other' }
  ],
  '4_2': [
    { name: '卒業研究（続）', code: 'THESIS402', period: 1, day: 'mon', type: 'required' },
    { name: '技術英語', code: 'ENG401', period: 2, day: 'tue', type: 'elective' },
    { name: 'キャリア形成論', code: 'CAR401', period: 3, day: 'wed', type: 'other' }
  ]
};
