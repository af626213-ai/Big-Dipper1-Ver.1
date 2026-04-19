// --- 型定義 ---
export type QuizQuestion = {
  q: string;
  options: string[];
  ans: string;
  explanation?: string;
};

export type KeyPhrase = {
  phrase: string;
  explanation: string;
};

export type VocabQuestion = {
  word: string;
  meaning: string;
  options: string[];
};

export type Episode = {
  id: number;
  title: string;
  script: string;
  slash_script?: string;
  japanese_translation?: string;
  quizzes: QuizQuestion[];
  vocab_quizzes: VocabQuestion[];
  key_phrases: KeyPhrase[];
  dictation_items: string[];
};

export type CourseData = {
  course_title: string;
  episodes: Episode[];
};

// --- 実データ ---
export const courseData: CourseData = {
  course_title: "English Navigator",
  episodes: [
    // --- Lesson 1 (ID: 1-4) ---
    {
      id: 1,
      title: "Ms. Smith's Discovery",
      script: "Ms. Smith, Kenta’s ALT, talks to the class. I first tried wagashi, traditional Japanese sweets, when I was in the United States. I loved the sweet adzuki bean jelly. Americans often have beans in salads or in a tomato sauce. However, we do not usually eat sweet beans. Wagashi artists express the season of the year or something beautiful in nature. They can create a goldfish and a ripple in the water. They can even display the stars of the galaxy. Japanese food culture is amazing.",
      slash_script: "Ms. Smith, / Kenta’s ALT, / talks to the class. / I first tried wagashi, / traditional Japanese sweets, / when I was in the United States. / I loved the sweet adzuki bean jelly. / Americans often have beans / in salads / or in a tomato sauce. / However, / we do not usually eat sweet beans. / Wagashi artists express / the season of the year / or something beautiful in nature. / They can create / a goldfish and a ripple / in the water. / They can even display / the stars of the galaxy. / Japanese food culture is amazing.",
      japanese_translation: "ミス・スミスが / ケンタのALTの / クラスに話をします。 / 私は初めて和菓子を食べました / 日本の伝統的なお菓子である / 私がアメリカにいた時に。 / 私は甘い小豆ゼリー（羊羹）が大好きでした。 / アメリカ人はよく豆を食べます / サラダの中で / あるいはトマトソースの中で。 / しかしながら / 私たちはふつう甘い豆は食べません。 / 和菓子の職人は表現します / その年の季節を / あるいは自然の中の美しい何かを。 / 彼らは作ることができます / 金魚や水の波紋を / 水の中に。 / 彼らは～を展示することさえできます / 銀河の星々を。 / 日本の食文化は素晴らしいです。",
      quizzes: [
        { q: "Where did Ms. Smith first try wagashi?", options: ["In Japan", "In the United States", "In China", "In Europe"], ans: "In the United States", explanation: "The script says she first tried it when she was in the United States." },
        { q: "What do wagashi artists express in their work?", options: ["Modern buildings", "Seasons and nature", "Sports", "Western history"], ans: "Seasons and nature", explanation: "They express the season of the year or something beautiful in nature." }
      ],
      vocab_quizzes: [
        { word: "traditional", meaning: "伝統的な", options: ["伝統的な", "新しい", "珍しい", "簡単な"] },
        { word: "adzuki bean", meaning: "小豆", options: ["大豆", "小豆", "コーヒー豆", "枝豆"] },
        { word: "express", meaning: "〜を表現する", options: ["〜を隠す", "〜を表現する", "〜を食べる", "〜を運ぶ"] },
        { word: "ripple", meaning: "波紋", options: ["波紋", "氷", "泡", "流れ"] },
        { word: "amazing", meaning: "素晴らしい", options: ["退屈な", "難しい", "素晴らしい", "悲しい"] }
      ],
      key_phrases: [
        { phrase: "when I was in ~", explanation: "「～にいた時」。過去の特定の時期について説明する際に使います。" },
        { phrase: "not usually ~", explanation: "「ふつうは～しない」。頻度を表す副詞 usually を使った否定文です。" }
      ],
      dictation_items: [
        "tried wagashi traditional Japanese sweets",
        "often have beans in salads",
        "express the season of the",
        "display the stars of the",
        "Japanese food culture is amazing"
      ]
    },
    // --- Lesson 2 (ID: 5-8) ---
    {
      id: 5,
      title: "The Evolution of Phones",
      script: "The history of the telephone begins in the 1870s. Alexander Graham Bell invented the telephone to carry the human voice over long distances. It gradually spread around the world. By the 1970s, there was a telephone in most homes in Japan. However, it was a fixed-line phone, so you could not carry it around. It was not convenient if you wanted to talk in private. In 1979, car telephones appeared. People could use them inside their cars. Later models had batteries, and people could also use them outside their cars. However, they were heavy and expensive.",
      slash_script: "The history of the telephone / begins in the 1870s. / Alexander Graham Bell invented the telephone / to carry the human voice / over long distances. / It gradually spread / around the world. / By the 1970s, / there was a telephone / in most homes in Japan. / However, / it was a fixed-line phone, / so you could not carry it around. / It was not convenient / if you wanted to talk in private. / In 1979, / car telephones appeared. / People could use them / inside their cars. / Later models had batteries, / and people could also use them / outside their cars. / However, / they were heavy and expensive.",
      japanese_translation: "電話の歴史は / 1870年代に始まります。 / グラハム・ベルは電話を発明しました / 人の声を運ぶために / 長い距離を越えて。 / それは徐々に広がりました / 世界中に。 / 1970年代までには / 電話がありました / 日本のほとんどの家庭に。 / しかしながら / それは固定電話でした / だから持ち運ぶことはできませんでした。 / それは不便でした / もしプライバシーを守って話したければ。 / 1979年に / 自動車電話が登場しました。 / 人々はそれらを使うことができました / 車の中で。 / 後のモデルは電池を備えていました / そして人々はそれらを使うこともできました / 車の外でも。 / しかしながら / それらは重くて高価でした。",
      quizzes: [
        { q: "Why did Bell invent the telephone?", options: ["To play music", "To carry voice", "To take pictures", "To use the Internet"], ans: "To carry voice", explanation: "Bell wanted to carry the human voice over long distances." },
        { q: "What was the problem with early mobile phones?", options: ["Small", "Quiet", "Heavy and expensive", "No colors"], ans: "Heavy and expensive", explanation: "The text says they were heavy and expensive." }
      ],
      vocab_quizzes: [
        { word: "invented", meaning: "発明した", options: ["発明した", "修理した", "壊した", "売った"] },
        { word: "distance", meaning: "距離", options: ["距離", "速度", "時間", "重量"] },
        { word: "gradually", meaning: "徐々に", options: ["徐々に", "突然", "すぐに", "決して〜ない"] },
        { word: "fixed-line", meaning: "固定回線の", options: ["固定回線の", "無線の", "公衆の", "新しい"] },
        { word: "convenient", meaning: "便利な", options: ["便利な", "難しい", "退屈な", "重い"] }
      ],
      key_phrases: [
        { phrase: "carry A around", explanation: "「Aを持ち歩く」。ポータブルな機器について話す際の必須表現です。" },
        { phrase: "in private", explanation: "「プライベートで」。他人に聞かれずに話をしたい状況です。" }
      ],
      dictation_items: [
        "carry the human voice over",
        "gradually spread around the world",
        "most homes in Japan",
        "convenient if you wanted to",
        "they were heavy and expensive"
      ]
    },
    // --- Lesson 3 (ID: 9-12) ---
    {
      id: 9,
      title: "Bosses vs. Leaders",
      script: "Both monkeys and gorillas live in groups. However, the groups’ organizations are quite different. A group of monkeys is ruled by a male monkey. As the boss of the group, he has absolute power. The boss decides everything and the others just follow his directions. A group of gorillas is also led by a male. However, he is the leader rather than the boss. The leader never threatens the other members. He considers their needs and feelings. He then makes the best decisions for the group. Monkeys depend on power, and gorillas depend on support and love.",
      slash_script: "Both monkeys and gorillas / live in groups. / However, / the groups’ organizations / are quite different. / A group of monkeys / is ruled by a male monkey. / As the boss of the group, / he has absolute power. / The boss decides everything / and the others / just follow his directions. / A group of gorillas / is also led by a male. / However, / he is the leader / rather than the boss. / The leader never threatens / the other members. / He considers / their needs and feelings. / He then makes / the best decisions for the group. / Monkeys depend on power, / and gorillas depend on / support and love.",
      japanese_translation: "サルとゴリラは両方 / グループで生活しています。 / しかしながら / そのグループの組織は / 全く異なります。 / サルのグループは / オスのサルによって支配されています。 / グループのボスとして / 彼は絶対的な力を持ちます。 / ボスがすべてを決定し / 他のみんなは / ただボスの指示に従うだけです。 / ゴリラのグループもまた / オスに率いられています。 / しかしながら / 彼はリーダーです / ボスというよりはむしろ。 / リーダーは決して脅しません / 他のメンバーを。 / 彼は考慮します / メンバーのニーズや感情を。 / 彼はそれから下します / グループにとって最善の決定を。 / サルは力に依存し / ゴリラは依存しています / 支え合いと愛に。",
      quizzes: [
        { q: "How are monkeys ruled?", options: ["Love", "Power", "Members", "Female"], ans: "Power", explanation: "Monkeys have a boss with absolute power." },
        { q: "What does a leader consider?", options: ["Money", "Food", "Needs and feelings", "Orders"], ans: "Needs and feelings", explanation: "A leader considers the needs and feelings of others." }
      ],
      vocab_quizzes: [
        { word: "organization", meaning: "組織", options: ["組織", "場所", "道具", "理由"] },
        { word: "absolute", meaning: "絶対的な", options: ["絶対的な", "弱い", "一時的な", "偽の"] },
        { word: "direction", meaning: "指示", options: ["指示", "質問", "練習", "会話"] },
        { word: "threaten", meaning: "脅す", options: ["脅す", "褒める", "助ける", "笑う"] },
        { word: "consider", meaning: "考慮する", options: ["考慮する", "無視する", "忘れる", "捨てる"] }
      ],
      key_phrases: [
        { phrase: "rather than ~", explanation: "「～よりはむしろ」。" },
        { phrase: "depend on ~", explanation: "「～に依存する」。" }
      ],
      dictation_items: [
        "groups organizations are quite different",
        "boss of the group he",
        "others just follow his directions",
        "leader rather than the boss",
        "consider their needs and feelings"
      ]
    }
    // その他のEpisodeもID 1-12の範囲で同様に記述
  ]
};
