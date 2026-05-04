import { Episode } from '../types';

export const lesson1_3: Episode = {
  id: 3,
  title: "Easy Strawberry Mochi Recipe",
  script: "Ms. Smith introduces an easy recipe for strawberry mochi. Wash the strawberries and remove the hulls. Divide the bean paste into 8 pieces. Cover each strawberry with a piece of bean paste. Put the refined rice flour, sugar, and water in a heat-resistant bowl and mix them well. Heat the mixture in a microwave oven for 2 minutes. Then mix it well. Repeat this until the mixture turns to mochi. Put potato starch on your hands and tear the mochi into 8 pieces. Wrap each strawberry with a piece of mochi.",
  
  slash_script: "Ms. Smith introduces / an easy recipe / for strawberry mochi. / Wash the strawberries / and remove the hulls. / Divide the bean paste / into 8 pieces. / Cover each strawberry / with a piece of bean paste. / Put the refined rice flour, sugar, and water / in a heat-resistant bowl / and mix them well. / Heat the mixture / in a microwave oven / for 2 minutes. / Then mix it well. / Repeat this / until the mixture turns to mochi. / Put potato starch on your hands / and tear the mochi / into 8 pieces. / Wrap each strawberry / with a piece of mochi.",
  
  japanese_translation: "ミス・スミスが紹介します / 簡単なレシピを / いちご大福の。 / いちごを洗って / ヘタを取りなさい。 / あんこを分けなさい / 8つの塊に。 / それぞれのいちごを包みなさい / あんこの塊で。 / 白玉粉、砂糖、そして水を入れなさい / 耐熱ボウルの中に / そしてそれらをよく混ぜなさい。 / その混合物を加熱しなさい / 電子レンジで / 2分間。 / それからよく混ぜなさい。 / これを繰り返しなさい / その混合物が餅になるまで。 / 手に片栗粉をつけなさい / そして餅をちぎりなさい / 8つの塊に。 / それぞれのいちごを包みなさい / 餅の塊で。",

  quizzes: [
    {
      q: "How long should you heat the mixture in the microwave first?",
      options: ["1 minute", "2 minutes", "5 minutes", "25 minutes"],
      ans: "2 minutes",
      explanation: "手順(5)に 'Heat the mixture in a microwave oven for 2 minutes.' とあります。"
    },
    {
      q: "What should you put on your hands before tearing the mochi?",
      options: ["Water", "Sugar", "Potato starch", "Bean paste"],
      ans: "Potato starch",
      explanation: "手順(7)に、餅がくっつかないよう片栗粉（potato starch）を手につけるよう指示があります。"
    }
  ],

  vocab_quizzes: [
    { word: "remove", meaning: "取り除く", options: ["加える", "取り除く", "洗う", "置く"] },
    { word: "divide", meaning: "分ける", options: ["分ける", "混ぜる", "加熱する", "食べる"] },
    { word: "heat-resistant", meaning: "耐熱の", options: ["透明な", "耐熱の", "重い", "冷たい"] },
    { word: "mixture", meaning: "混合物", options: ["材料", "混合物", "道具", "完成品"] },
    { word: "wrap", meaning: "包む", options: ["洗う", "包む", "切る", "投げる"] }
  ],

  key_phrases: [
    {
      phrase: "divide A into B",
      explanation: "「AをB（数やグループ）に分ける」。料理の工程や、クラス替えなどの場面でもよく使われます。"
    },
    {
      phrase: "turn to ~",
      explanation: "「～に変わる」。性質や状態が変化して別のものになることを表します。"
    }
  ],

  dictation_items: [
    "remove the hulls",
    "divide the bean paste into",
    "in a heat resistant bowl",
    "mixture in a microwave oven",
    "tear the mochi into eight"
  ]
};
