// 選択必修科目データ
// 学年・学期に応じた選択必修科目を管理

const ELECTIVE_REQUIRED_GROUPS = {
  // 1年1学期：共通基盤ワークショップ1A（1つ選択必須）
  workshop_1a: {
    name: "共通基盤ワークショップ１Ａ",
    description: "1つ選択してください",
    grade: [1],
    semester: ["1"],
    maxSelect: 1,
    courses: [
      { code: "B30A01A1", name: "共通基盤ワークショップ１Ａ　～「豊かさ」とは何だろう？～", type: "required" },
      { code: "B30A01B1", name: "共通基盤ワークショップ１Ａ　～ＳＤＧｓから世界の問題を見つめてみよう～", type: "required" },
      { code: "B30A01C1", name: "共通基盤ワークショップ１Ａ　～スポーツを創造しよう～", type: "required" },
      { code: "B30A01D1", name: "共通基盤ワークショップ１Ａ　～マインドスポーツ（テーブルゲーム）の考案～", type: "required" },
      { code: "B30A01E1", name: "共通基盤ワークショップ１Ａ　～中小企業について考えてみよう～", type: "required" },
      { code: "B30A01F1", name: "共通基盤ワークショップ１Ａ　～対人関係とコミュニケーション～", type: "required" },
      { code: "B30A01G1", name: "共通基盤ワークショップ１Ａ　～音楽文化の歴史と未来～", type: "required" },
      { code: "B30A01H1", name: "共通基盤ワークショップ１Ａ　～自分らしくを楽しめるセルフプロデュース～", type: "required" },
      { code: "B30A01J1", name: "共通基盤ワークショップ１Ａ　～考える力（思考力・決断力）を科学する～", type: "required" },
      { code: "B30A01K1", name: "共通基盤ワークショップ１Ａ　～社会問題を解決に導く工学とは～", type: "required" },
      { code: "B30A01L1", name: "共通基盤ワークショップ１Ａ　～科学技術について考えてみよう～", type: "required" },
      { code: "B30A01M1", name: "共通基盤ワークショップ１Ａ　～ＡＩを使い倒してみる～", type: "required" },
      { code: "B30A01N1", name: "共通基盤ワークショップ１Ａ　～未来の湘南工科大学をみんなで創ろう～", type: "required" },
      { code: "B30A01P1", name: "共通基盤ワークショップ１Ａ　～シミュレーションで身近な社会課題を解決～", type: "required" },
      { code: "B30A01Q1", name: "共通基盤ワークショップ１Ａ　～湘南地域とデザイン～", type: "required" },
      { code: "B30A01R1", name: "共通基盤ワークショップ１Ａ　～プラスチックについて学ぶ～", type: "required" }
    ]
  },

  // 1年2学期：共通基盤ワークショップ1B（1つ選択必須）
  workshop_1b: {
    name: "共通基盤ワークショップ１Ｂ",
    description: "1つ選択してください",
    grade: [1],
    semester: ["2"],
    maxSelect: 1,
    courses: [
      { code: "B30A02A1", name: "共通基盤ワークショップ１Ｂ　～「豊かさ」とは何だろう？～", type: "required" },
      { code: "B30A02B1", name: "共通基盤ワークショップ１Ｂ　～ＳＤＧｓから世界の問題を見つめてみよう～", type: "required" },
      { code: "B30A02C1", name: "共通基盤ワークショップ１Ｂ　～スポーツを創造しよう～", type: "required" },
      { code: "B30A02D1", name: "共通基盤ワークショップ１Ｂ　～マインドスポーツ（テーブルゲーム）の考案～", type: "required" },
      { code: "B30A02E1", name: "共通基盤ワークショップ１Ｂ　～中小企業について考えてみよう～", type: "required" },
      { code: "B30A02F1", name: "共通基盤ワークショップ１Ｂ　～対人関係とコミュニケーション～", type: "required" },
      { code: "B30A02G1", name: "共通基盤ワークショップ１Ｂ　～音楽文化の歴史と未来～", type: "required" },
      { code: "B30A02H1", name: "共通基盤ワークショップ１Ｂ　～自分らしくを楽しめるセルフプロデュース～", type: "required" },
      { code: "B30A02J1", name: "共通基盤ワークショップ１Ｂ　～考える力（思考力・決断力）を科学する～", type: "required" },
      { code: "B30A02K1", name: "共通基盤ワークショップ１Ｂ　～社会問題を解決に導く工学とは～", type: "required" },
      { code: "B30A02L1", name: "共通基盤ワークショップ１Ｂ　～科学技術について考えてみよう～", type: "required" },
      { code: "B30A02M1", name: "共通基盤ワークショップ１Ｂ　～ＡＩを使い倒してみる～", type: "required" },
      { code: "B30A02N1", name: "共通基盤ワークショップ１Ｂ　～未来の湘南工科大学をみんなで創ろう～", type: "required" },
      { code: "B30A02P1", name: "共通基盤ワークショップ１Ｂ　～シミュレーションで身近な社会課題を解決～", type: "required" },
      { code: "B30A02Q1", name: "共通基盤ワークショップ１Ｂ　～湘南地域とデザイン～", type: "required" },
      { code: "B30A02R1", name: "共通基盤ワークショップ１Ｂ　～プラスチックについて学ぶ～", type: "required" }
    ]
  },

  // 1年2学期：学科選択必修
  elective_1b: {
    name: "学科選択必修",
    description: "1つ選択してください",
    grade: [1],
    semester: ["2"],
    maxSelect: 1,
    courses: [
      { code: "B31N03K1", name: "線形代数(メ)", type: "elective-required" },
      { code: "B31Q04K1", name: "ゲーム制作実習", type: "elective-required" },
      { code: "B31N04K1", name: "微分積分学(メ)", type: "elective-required" },
      { code: "B31Q03K1", name: "コンピュータグラフィックス活用実習", type: "elective-required" },
      { code: "B31N02K1", name: "確率統計リテラシー2(メ)", type: "elective-required" }
    ]
  },
  // 2年1学期：共通基盤ワークショップ2A（1つ選択必須）
  workshop_2a: {
    name: "共通基盤ワークショップ２Ａ",
    description: "1つ選択してください",
    grade: [2],
    semester: ["1"],
    maxSelect: 1,
    courses: [
      { code: "B30B01A2", name: "共通基盤ワークショップ２Ａ　～アイデア活用演習プロジェクト～", type: "required" },
      { code: "B30B01B2", name: "共通基盤ワークショップ２Ａ　～デザイン思考＠基礎プロジェクト～", type: "required" },
      { code: "B30B01C2", name: "共通基盤ワークショップ２Ａ　～アイデアの作り方プロジェクト～", type: "required" },
      { code: "B30B01D2", name: "共通基盤ワークショップ２Ａ　～機械創造設計製作プロジェクト～", type: "required" },
      { code: "B30B01E2", name: "共通基盤ワークショップ２Ａ　～キャリアデザインプロジェクト～", type: "required" },
      { code: "B30B01F2", name: "共通基盤ワークショップ２Ａ　～アイデア発想プロジェクト～", type: "required" },
      { code: "B30B01G2", name: "共通基盤ワークショップ２Ａ　～IoTファブレスへの挑戦プロジェクト(a)～", type: "required" },
      { code: "B30B01H2", name: "共通基盤ワークショップ２Ａ　～社会人基礎力プロジェクト(a)～", type: "required" },
      { code: "B30B01J2", name: "共通基盤ワークショップ２Ａ　～プリント回路基盤開発プロジェクト～", type: "required" },
      { code: "B30B01K2", name: "共通基盤ワークショップ２Ａ　～生成AIを活用した課題解決プロジェクト～", type: "required" },
      { code: "B30B01L2", name: "共通基盤ワークショップ２Ａ　～新しい数学授業を提案するプロジェクト～", type: "required" },
      { code: "B30B01M2", name: "共通基盤ワークショップ２Ａ　～Webサイト制作プロジェクト～", type: "required" },
      { code: "B30B01N2", name: "共通基盤ワークショップ２Ａ　～IoTファブレスへの挑戦プロジェクト(b)～", type: "required" },
      { code: "B30B01P2", name: "共通基盤ワークショップ２Ａ　～サイエンス教室資料作成プロジェクト～", type: "required" },
      { code: "B30B01Q2", name: "共通基盤ワークショップ２Ａ　～３Ｄゲーム制作プロジェクト～", type: "required" },
      { code: "B30B01R2", name: "共通基盤ワークショップ２Ａ　～プレゼンデザインプロジェクト～", type: "required" },
      { code: "B30B01S2", name: "共通基盤ワークショップ２Ａ　～地域デザインプロジェクト～", type: "required" },
      { code: "B30B01T2", name: "共通基盤ワークショップ２Ａ　～人生目標設定プロジェクト～", type: "required" },
      { code: "B30B01U2", name: "共通基盤ワークショップ２Ａ　～スポーツデータサイエンスプロジェクト～", type: "required" },
      { code: "B30B01V2", name: "共通基盤ワークショップ２Ａ　～ことばの分析プロジェクト～", type: "required" }
    ]
  }
};

