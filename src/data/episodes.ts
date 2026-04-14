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
  overlappingTips?: string;
  shadowingTips?: string;
};

export type CourseData = {
  course_title: string;
  episodes: Episode[];
};

// --- 実データ ---
export const courseData: CourseData = {
  course_title: "English Navigator - Lesson 1",
  episodes: [
    // --- Lesson 1 - Episode 1: Ms. Smith's Discovery ---
    {
      id: 1,
      title: "Ms. Smith's Discovery",
      script: "Ms. Smith, Kenta’s ALT, talks to the class. I first tried wagashi, traditional Japanese sweets, when I was in the United States. I loved the sweet adzuki bean jelly. Americans often have beans in salads or in a tomato sauce. However, we do not usually eat sweet beans. Wagashi artists express the season of the year or something beautiful in nature. They can create a goldfish and a ripple in the water. They can even display the stars of the galaxy. Japanese food culture is amazing.",
      slash_script: "Ms. Smith, / Kenta’s ALT, / talks to the class. / I first tried wagashi, / traditional Japanese sweets, / when I was in the United States. / I loved the sweet adzuki bean jelly. / Americans often have beans / in salads / or in a tomato sauce. / However, / we do not usually eat sweet beans. / Wagashi artists express / the season of the year / or something beautiful in nature. / They can create / a goldfish and a ripple / in the water. / They can even display / the stars of the galaxy. / Japanese food culture is amazing.",
      japanese_translation: "ミス・スミス（ケンタのALT）が、 / クラスに話をします。 / 私は初めて和菓子を食べました、 / 日本の伝統的なお菓子（である）、 / 私がアメリカにいた時に。 / 私は甘い小豆ゼリー（羊羹）が大好きでした。 / アメリカ人はよく豆を食べます / サラダの中で / あるいはトマトソースの中で。 / しかしながら、 / 私たちはふつう甘い豆は食べません。 / 和菓子の職人は表現します / その年の季節を / あるいは自然の中の美しい何かを。 / 彼らは作ることができます / 金魚や水の波紋を。 / 彼らは～を展示することさえできます / 銀河の星々を。 / 日本の食文化は素晴らしいです。",
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
      dictation_items: ["tried wagashi traditional Japanese sweets", "loved the sweet adzuki bean", "often have beans in salads", "the season of the year", "Japanese food culture is amazing"],
      overlappingTips: "【コツ】'Wagashi' や 'Adzuki' などの日本語由来の単語も、英語のリズムの中で滑らかに発音しましょう。",
      shadowingTips: "【コツ】'However' の後の「間」を意識すると、逆接のニュアンスが伝わりやすくなります。"
    },

    // --- Lesson 1 - Episode 2: The Origin of Wagashi ---
    {
      id: 2,
      title: "The Origin of Wagashi",
      script: "Now, Kenta, a tea ceremony club member, will tell us about the history of wagashi. Kenta talks about the history of wagashi. In the Jomon period, people ate fruits and nuts. They are the origin of wagashi. Later, people made mochi and dumplings from rice. In the Nara period, various cooking techniques came to Japan from China. In the Muromachi period, kasutera sponge cake and kompeito came to Japan from Europe. However, sugar was expensive.",
      slash_script: "Now, Kenta, / a tea ceremony club member, / will tell us / about the history of wagashi. / Kenta talks / about the history of wagashi. / In the Jomon period, / people ate fruits and nuts. / They are the origin of wagashi. / Later, / people made mochi and dumplings / from rice. / In the Nara period, / various cooking techniques / came to Japan from China. / In the Muromachi period, / kasutera sponge cake and kompeito / came to Japan from Europe. / However, / sugar was expensive.",
      japanese_translation: "さて、ケンタ（茶道部の部員）が、 / 私たちに話してくれます / 和菓子の歴史について。 / ケンタは話をします / 和菓子の歴史について。 / 縄文時代には、 / 人々は果物やナッツを食べていました。 / それらが和菓子の起源です。 / その後、 / 人々は餅や団子を作りました / 米から。 / 奈良時代には、 / 様々な調理技術が / 中国から日本に伝わりました。 / 室町時代には、 / カステラや金平糖が / ヨーロッパから日本に伝わりました。 / しかしながら、 / 砂糖は高価でした。",
      quizzes: [
        { q: "What was the origin of wagashi in the Jomon period?", options: ["Rice cakes", "Fruits and nuts", "Sugar", "Chocolate"], ans: "Fruits and nuts", explanation: "The text states fruits and nuts are the origin of wagashi." },
        { q: "Where did cooking techniques come from in the Nara period?", options: ["Europe", "The United States", "China", "India"], ans: "China", explanation: "Various cooking techniques came to Japan from China during the Nara period." }
      ],
      vocab_quizzes: [
        { word: "history", meaning: "歴史", options: ["歴史", "科学", "未来", "数学"] },
        { word: "origin", meaning: "起源・始まり", options: ["終わり", "起源・始まり", "理由", "結果"] },
        { word: "technique", meaning: "技術", options: ["考え", "技術", "道具", "場所"] },
        { word: "various", meaning: "様々な", options: ["同じ", "少ない", "様々な", "珍しい"] },
        { word: "expensive", meaning: "高価な", options: ["安い", "高価な", "甘い", "重い"] }
      ],
      key_phrases: [
        { phrase: "tell A about B", explanation: "「AにBについて話す」。歴史や情報を伝える際の定番表現です。" },
        { phrase: "make A from B", explanation: "「B（原料）からAを作る」。米から餅を作るように、原料の性質が変わる時に使います。" }
      ],
      dictation_items: ["member will tell us about", "the origin of wagashi", "made mochi and dumplings from", "various cooking techniques came to", "however sugar was expensive"],
      overlappingTips: "【コツ】時代の名前（Jomon, Nara, Muromachi）をはっきり言うと、歴史の流れが聞き手に伝わります。",
      shadowingTips: "【コツ】'various' [vέəriəs] の V の発音を意識して、前歯を軽く唇に当ててみましょう。"
    },

    // --- Lesson 1 - Episode 3: Modern Wagashi and SNS ---
    {
      id: 3,
      title: "Modern Wagashi and SNS",
      script: "In the Edo period, sugar spread widely in Japan. People enjoyed sweets like today’s beautiful wagashi during tea ceremonies. As you know, most young people prefer Western sweets to wagashi. These days, however, many young people post pictures of their favorite wagashi on social media. I have posted lots of pictures, too. We are rediscovering Japanese culture. Ms. Smith introduces an easy recipe for strawberry mochi.",
      slash_script: "In the Edo period, / sugar spread widely in Japan. / People enjoyed sweets / like today’s beautiful wagashi / during tea ceremonies. / As you know, / most young people / prefer Western sweets to wagashi. / These days, however, / many young people / post pictures / of their favorite wagashi / on social media. / I have posted lots of pictures, too. / We are rediscovering Japanese culture. / Ms. Smith introduces / an easy recipe / for strawberry mochi.",
      japanese_translation: "江戸時代に、 / 砂糖が日本中に広く普及しました。 / 人々はお菓子を楽しみました / 今日のような美しい和菓子のような（お菓子を） / 茶会の間に。 / ご存知の通り、 / ほとんどの若者は / 和菓子より洋菓子を好みます。 / 近頃は、しかしながら、 / 多くの若者が / 写真を投稿します / お気に入りの和菓子の（写真を） / SNSに。 / 私もたくさんの写真を投稿しました。 / 私たちは日本の文化を再発見しています。 / ミス・スミスが紹介します / 簡単なレシピを / いちご大福の。",
      quizzes: [
        { q: "When did sugar spread widely in Japan?", options: ["Jomon period", "Nara period", "Edo period", "Muromachi period"], ans: "Edo period", explanation: "The script says sugar spread widely in Japan during the Edo period." },
        { q: "What do many young people do on social media these days?", options: ["Write poems", "Post pictures of wagashi", "Make mochi", "Sell sugar"], ans: "Post pictures of wagashi", explanation: "The text mentions many young people post pictures of their favorite wagashi." }
      ],
      vocab_quizzes: [
        { word: "widely", meaning: "広く", options: ["広く", "狭く", "速く", "静かに"] },
        { word: "prefer", meaning: "〜の方を好む", options: ["〜を嫌う", "〜を好む", "〜を忘れる", "〜を助ける"] },
        { word: "favorite", meaning: "お気に入りの", options: ["古い", "お気に入りの", "難しい", "怖い"] },
        { word: "social media", meaning: "SNS", options: ["新聞", "テレビ", "SNS", "ラジオ"] },
        { word: "rediscover", meaning: "再発見する", options: ["隠す", "壊す", "再発見する", "失う"] }
      ],
      key_phrases: [
        { phrase: "prefer A to B", explanation: "「BよりもAを好む」。比較級を使わずに好みを表す重要な形です。" },
        { phrase: "as you know", explanation: "「ご存知の通り」。相手も知っていることを前提に話を始める時の表現です。" }
      ],
      dictation_items: ["sugar spread widely in Japan", "enjoyed sweets like today beautiful", "prefer Western sweets to wagashi", "post pictures of their favorite", "rediscovering Japanese culture"],
      overlappingTips: "【コツ】'prefer Western sweets to wagashi' の対比を意識して、強弱をつけてみましょう。",
      shadowingTips: "【コツ】'social media' の発音はカタカナの「ソ・シャル」にならないようスムーズに。"
    },

    // --- Lesson 1 - Episode 4: Easy Strawberry Mochi Recipe ---
    {
      id: 4,
      title: "Easy Strawberry Mochi Recipe",
      script: "Wash the strawberries and remove the hulls. Divide the bean paste into 8 pieces. Cover each strawberry with a piece of bean paste. Put the refined rice flour, sugar, and water in a heat-resistant bowl and mix them well. Heat the mixture in a microwave oven for 2 minutes. Then mix it well. Repeat this until the mixture turns to mochi. Put potato starch on your hands and tear the mochi into 8 pieces. Wrap each strawberry with a piece of mochi.",
      slash_script: "Wash the strawberries / and remove the hulls. / Divide the bean paste / into 8 pieces. / Cover each strawberry / with a piece of bean paste. / Put the refined rice flour, sugar, and water / in a heat-resistant bowl / and mix them well. / Heat the mixture / in a microwave oven / for 2 minutes. / Then mix it well. / Repeat this / until the mixture turns to mochi. / Put potato starch on your hands / and tear the mochi / into 8 pieces. / Wrap each strawberry / with a piece of mochi.",
      japanese_translation: "いちごを洗って / ヘタを取りなさい。 / あんこを分けなさい / 8つの塊に。 / それぞれのいちごを包みなさい / あんこの塊で。 / 白玉粉、砂糖、そして水を入れなさい / 耐熱ボウルに / そしてそれらをよく混ぜなさい。 / その混合物を加熱しなさい / 電子レンジで / 2分間。 / それからよく混ぜなさい。 / これを繰り返しなさい / その混合物が餅になるまで。 / 手に片栗粉をつけなさい / そして餅をちぎりなさい / 8つの塊に。 / それぞれのいちごを包みなさい / 餅の塊で。",
      quizzes: [
        { q: "How long should you heat the mixture in the microwave first?", options: ["1 minute", "2 minutes", "5 minutes", "10 minutes"], ans: "2 minutes", explanation: "The instructions say to heat it for 2 minutes." },
        { q: "What should you put on your hands before tearing the mochi?", options: ["Sugar", "Water", "Potato starch", "Bean paste"], ans: "Potato starch", explanation: "The recipe says to put potato starch on your hands to prevent sticking." }
      ],
      vocab_quizzes: [
        { word: "remove", meaning: "〜を取り除く", options: ["〜を加える", "〜を取り除く", "〜を洗う", "〜を置く"] },
        { word: "divide", meaning: "〜を分ける", options: ["〜を分ける", "〜を混ぜる", "〜を加熱する", "〜を食べる"] },
        { word: "heat-resistant", meaning: "耐熱の", options: ["耐熱の", "重い", "透明な", "冷たい"] },
        { word: "mixture", meaning: "混合物", options: ["混合物", "道具", "完成品", "材料"] },
        { word: "wrap", meaning: "〜を包む", options: ["〜を洗う", "〜を包む", "〜を切る", "〜を投げる"] }
      ],
      key_phrases: [
        { phrase: "divide A into B", explanation: "「AをB（数やグループ）に分ける」。料理やグループ分けでよく使います。" },
        { phrase: "turn to ~", explanation: "「～に変わる」。状態が変化して別のものになることを表します。" }
      ],
      dictation_items: ["remove the hulls", "divide the bean paste into", "in a heat resistant bowl", "mixture in a microwave oven", "tear the mochi into eight"],
      overlappingTips: "【コツ】命令文（Wash, Divide, Put...）で始まるので、手順を指示するリズムで読みましょう。",
      shadowingTips: "【コツ】'microwave' [máikrəwèiv] の二重母音とアクセントに注意して追いかけてください。"
    }
  ]
};
