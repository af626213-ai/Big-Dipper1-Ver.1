import { Episode } from '../types';

export const lesson1_1: Episode = {
  id: 1,
  title: "Ms. Smith's Discovery",
  script: "Ms. Smith, Kenta’s ALT, talks to the class. I first tried wagashi, traditional Japanese sweets, when I was in the United States. I loved the sweet adzuki bean jelly. Americans often have beans in salads or in a tomato sauce. However, we do not usually eat sweet beans. Wagashi artists express the season of the year or something beautiful in nature. They can create a goldfish and a ripple in the water. They can even display the stars of the galaxy. Japanese food culture is amazing. Now, Kenta, a tea ceremony club member, will tell us about the history of wagashi.",
  
  slash_script: "Ms. Smith, / Kenta’s ALT, / talks to the class. / I first tried wagashi, / traditional Japanese sweets, / when I was in the United States. / I loved the sweet adzuki bean jelly. / Americans often have beans / in salads / or in a tomato sauce. / However, / we do not usually eat sweet beans. / Wagashi artists express / the season of the year / or something beautiful in nature. / They can create / a goldfish and a ripple / in the water. / They can even display / the stars of the galaxy. / Japanese food culture is amazing. / Now, Kenta, / a tea ceremony club member, / will tell us / about the history of wagashi.",
  
  japanese_translation: "ミス・スミスが / ケンタのALTの / クラスに話をします。 / 私は初めて和菓子を食べました / 日本の伝統的なお菓子である / 私がアメリカにいた時に。 / 私は甘い小豆ゼリー（羊羹）が大好きでした。 / アメリカ人はよく豆を食べます / サラダの中で / あるいはトマトソースの中で。 / しかしながら / 私たちはふつう甘い豆は食べません。 / 和菓子の職人は表現します / その年の季節を / あるいは自然の中の美しい何かを。 / 彼らは作ることができます / 金魚や水の波紋を / 水の中に。 / 彼らは～を展示することさえできます / 銀河の星々を。 / 日本の食文化は素晴らしいです。 / さて、ケンタが / 茶道部の部員である / 私たちに話してくれます / 和菓子の歴史について。",

  quizzes: [
    {
      q: "Where did Ms. Smith first try wagashi?",
      options: ["In Japan", "In the United States", "In China", "In a tea ceremony club"],
      ans: "In the United States",
      explanation: "本文に 'when I was in the United States' とあります。"
    },
    {
      q: "What do Americans usually do with beans?",
      options: ["Eat them as sweet jelly", "Put them in salads or tomato sauce", "Display them as stars", "Give them to goldfish"],
      ans: "Put them in salads or tomato sauce",
      explanation: "アメリカでは豆をサラダやトマトソースに入れて食べるのが一般的だと述べられています。"
    }
  ],

  vocab_quizzes: [
    { word: "traditional", meaning: "伝統的な", options: ["伝統的な", "現代的な", "複雑な", "高価な"] },
    { word: "adzuki bean", meaning: "小豆", options: ["大豆", "小豆", "コーヒー豆", "枝豆"] },
    { word: "express", meaning: "表現する", options: ["隠す", "表現する", "食べる", "運ぶ"] },
    { word: "ripple", meaning: "波紋", options: ["波紋", "氷", "泡", "流れ"] },
    { word: "amazing", meaning: "素晴らしい", options: ["退屈な", "難しい", "素晴らしい", "悲しい"] }
  ],

  key_phrases: [
    {
      phrase: "when I was in ~",
      explanation: "「～にいた時」。過去の特定の時期や場所での経験を話すときに使います。"
    },
    {
      phrase: "tell A about B",
      explanation: "「AにBについて話す」。情報や歴史などを誰かに伝える際の定番表現です。"
    }
  ],

  dictation_items: [
    "tried wagashi traditional Japanese sweets",
    "loved the sweet adzuki bean",
    "often have beans in salads",
    "express the season of the",
    "Japanese food culture is amazing"
  ]
};
