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
  course_title: "English Navigator",
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
    },

    // --- Lesson 2 - Episode 1: The Evolution of Phones ---
    {
      id: 5,
      title: "The Evolution of Phones",
      script: "The history of the telephone begins in the 1870s. Alexander Graham Bell invented the telephone to carry the human voice over long distances. It gradually spread around the world. By the 1970s, there was a telephone in most homes in Japan. However, it was a fixed-line phone, so you could not carry it around. It was not convenient if you wanted to talk in private. In 1979, car telephones appeared. People could use them inside their cars. Later models had batteries, and people could also use them outside their cars. However, they were heavy and expensive.",
      slash_script: "The history of the telephone / begins in the 1870s. / Alexander Graham Bell invented the telephone / to carry the human voice / over long distances. / It gradually spread / around the world. / By the 1970s, / there was a telephone / in most homes in Japan. / However, / it was a fixed-line phone, / so you could not carry it around. / It was not convenient / if you wanted to talk in private. / In 1979, / car telephones appeared. / People could use them / inside their cars. / Later models had batteries, / and people could also use them / outside their cars. / However, / they were heavy and expensive.",
      japanese_translation: "電話の歴史は始まります / 1870年代に。 / アレクサンダー・グラハム・ベルが電話を発明しました / 人の声を運ぶために / 長い距離を越えて。 / それは徐々に広がりました / 世界中に。 / 1970年代までには、 / 電話がありました / 日本のほとんどの家庭に。 / しかしながら、 / それは固定電話でした、 / だから持ち運ぶことはできませんでした。 / それは不便でした / もしプライベートで話したければ。 / 1979年に、 / 自動車電話が登場しました。 / 人々はそれらを使うことができました / 車の中で。 / 後のモデルは電池を備えていました、 / そして人々はそれらを使うこともできました / 車の外でも。 / しかしながら、 / それらは重くて高価でした。",
      quizzes: [
        { q: "Why did Bell invent the telephone?", options: ["To play music", "To carry human voice over long distances", "To take pictures", "To use the Internet"], ans: "To carry human voice over long distances", explanation: "The text says he invented it to carry the human voice over long distances." },
        { q: "What was the problem with phones in the 1970s?", options: ["They were too small", "They were fixed-line and not portable", "They had no sound", "They were free"], ans: "They were fixed-line and not portable", explanation: "They were fixed-line phones, so people could not carry them around." }
      ],
      vocab_quizzes: [
        { word: "invented", meaning: "〜を発明した", options: ["〜を壊した", "〜を発明した", "〜を運んだ", "〜を見つけた"] },
        { word: "distance", meaning: "距離", options: ["時間", "速度", "距離", "重さ"] },
        { word: "gradually", meaning: "徐々に", options: ["突然", "徐々に", "すぐに", "決して〜ない"] },
        { word: "fixed-line", meaning: "固定回線の", options: ["固定回線の", "無線の", "壊れた", "新しい"] },
        { word: "convenient", meaning: "便利な", options: ["便利な", "難しい", "退屈な", "高価な"] }
      ],
      key_phrases: [
        { phrase: "carry A around", explanation: "「Aを持ち歩く」。携帯電話などのポータブルな機器について話す際の必須表現です。" },
        { phrase: "in private", explanation: "「秘密で／非公開で」。誰にも聞かれずに話をしたい状況を表します。" }
      ],
      dictation_items: ["carry the human voice over", "gradually spread around the world", "most homes in Japan", "not convenient if you wanted", "they were heavy and expensive"],
      overlappingTips: "【コツ】'1870s' や '1970s' などの年代の読み（sの発音）を落とさないようにしましょう。",
      shadowingTips: "【コツ】'However' の後に置かれる「カンマ」の溜めを意識して、逆接の情報を強調してください。"
    },

    // --- Lesson 2 - Episode 2: The Rise of Smartphones ---
    {
      id: 6,
      title: "The Rise of Smartphones",
      script: "In 1987, mobile phones appeared. People could easily carry them around. Then, in the 1990s, smartphones appeared. They spread quickly in the 2010s. Smartphones with an Internet connection are convenient. Through the Internet, you can join remote classes. You can play online games and watch videos. You can also pay for goods and services. However, a serious problem has arisen. While high school students spent an average of 192 minutes a day on their smartphones in 2015, this increased to 345 minutes in 2022. Many students feel that they can never turn their phones off.",
      slash_script: "In 1987, / mobile phones appeared. / People could easily / carry them around. / Then, / in the 1990s, / smartphones appeared. / They spread quickly / in the 2010s. / Smartphones / with an Internet connection / are convenient. / Through the Internet, / you can join remote classes. / You can play online games / and watch videos. / You can also pay / for goods and services. / However, / a serious problem has arisen. / While high school students / spent an average of 192 minutes / a day / on their smartphones in 2015, / this increased to 345 minutes / in 2022. / Many students feel / that they can never / turn their phones off.",
      japanese_translation: "1987年に、 / 携帯電話が登場しました。 / 人々は簡単に / それらを持ち運ぶことができました。 / その後、 / 1990年代に、 / スマートフォンが登場しました。 / それらは急速に普及しました / 2010年代に。 / スマートフォンは / インターネット接続のある / 便利です。 / インターネットを通じて、 / リモート授業に参加できます。 / オンラインゲームをしたり / 動画を見たりできます。 / 支払いをすることもできます / 商品やサービスに対して。 / しかしながら、 / 深刻な問題が生じています。 / 高校生が費やす一方で / 1日平均192分を / 1日に / 2015年にスマートフォンに、 / これは345分に増加しました / 2022年には。 / 多くの生徒が感じています / ～ということを / 決してスマホの電源を切ることができない（と）。",
      quizzes: [
        { q: "What can you do through the Internet on a smartphone?", options: ["Only make calls", "Join remote classes and pay for goods", "Only play games", "Nothing special"], ans: "Join remote classes and pay for goods", explanation: "The text mentions joining remote classes, playing games, watching videos, and paying for services." },
        { q: "How many minutes did high school students spend on smartphones in 2022?", options: ["192 minutes", "100 minutes", "345 minutes", "500 minutes"], ans: "345 minutes", explanation: "The text states the average time increased to 345 minutes in 2022." }
      ],
      vocab_quizzes: [
        { word: "connection", meaning: "接続", options: ["切断", "接続", "発見", "修理"] },
        { word: "remote", meaning: "遠隔の", options: ["近くの", "遠隔の", "静かな", "騒がしい"] },
        { word: "average", meaning: "平均", options: ["最大", "最小", "平均", "合計"] },
        { word: "increase", meaning: "増加する", options: ["減少する", "増加する", "停止する", "変化する"] },
        { word: "arisen", meaning: "（問題などが）生じた", options: ["解決した", "生じた", "消えた", "忘れた"] }
      ],
      key_phrases: [
        { phrase: "pay for ~", explanation: "「～の代金を支払う」。goods and services（商品やサービス）とセットでよく使われます。" },
        { phrase: "turn off", explanation: "「（電源などを）切る」。反対語は turn on です。" }
      ],
      dictation_items: ["spread quickly in the", "through the Internet you can", "pay for goods and services", "spent an average of", "never turn their phones off"],
      overlappingTips: "【コツ】'192 minutes' や '345 minutes' などの数字を正確に、はっきりと発音しましょう。",
      shadowingTips: "【コツ】'increase' のアクセント位置（後ろの ea の部分）に注意して追いかけてください。"
    },

    // --- Lesson 2 - Episode 3: Digital Detox Advice (1 & 2) ---
    {
      id: 7,
      title: "Digital Detox Advice (1 & 2)",
      script: "Some experts say that young people should spend a few days without smartphones. This period of “digital detox” will refresh them mentally and physically. Yui found a guide to digital detox on the Internet. 1. Have some time away from your smartphone. Stop using your smartphone when you have a meal, when you go to bed, or simply between 8:00 p.m. and 10:00 p.m. 2. Go outside. Go to a movie theater instead of watching a video online. Play soccer outdoors with a real ball rather than indoors with an online game.",
      slash_script: "Some experts say / that young people should spend / a few days / without smartphones. / This period / of “digital detox” / will refresh them / mentally and physically. / Yui found a guide / to digital detox / on the Internet. / 1. Have some time away / from your smartphone. / Stop using your smartphone / when you have a meal, / when you go to bed, / or simply / between 8:00 p.m. and 10:00 p.m. / 2. Go outside. / Go to a movie theater / instead of watching a video online. / Play soccer outdoors / with a real ball / rather than indoors / with an online game.",
      japanese_translation: "一部の専門家は言っています / 若者は過ごすべきだと / 数日間を / スマートフォンなしで。 / この期間は / 「デジタルデトックス」の / 彼らをリフレッシュさせるでしょう / 精神的にも肉体的にも。 / ユイはガイドを見つけました / デジタルデトックスへの / インターネットで。 / 1. 少しの間離れなさい / スマートフォンから。 / スマートフォンを使うのをやめなさい / 食事をする時、 / 寝る時、 / あるいは単純に / 午後8時から10時の間。 / 2. 外に出なさい。 / 映画館に行きなさい / オンラインで動画を見る代わりに。 / 外でサッカーをしなさい / 本物のボールを使って / 屋内でオンラインゲームをするよりも。",
      quizzes: [
        { q: "What is 'digital detox'?", options: ["Buying a new phone", "Spending time without smartphones", "Playing more games", "Fixing a broken screen"], ans: "Spending time without smartphones", explanation: "It means spending a few days without smartphones to refresh mentally and physically." },
        { q: "What is one example of going outside instead of online activities?", options: ["Watching a movie online", "Playing soccer with a real ball", "Reading an e-book", "Sleeping all day"], ans: "Playing soccer with a real ball", explanation: "The guide suggests playing soccer outdoors with a real ball rather than an online game." }
      ],
      vocab_quizzes: [
        { word: "expert", meaning: "専門家", options: ["初心者", "専門家", "学生", "犯人"] },
        { word: "mentally", meaning: "精神的に", options: ["肉体的に", "精神的に", "経済的に", "社会的に"] },
        { word: "physically", meaning: "肉体的に", options: ["肉体的に", "精神的に", "一時的に", "論理的に"] },
        { word: "instead of", meaning: "〜の代わりに", options: ["〜に加えて", "〜の代わりに", "〜のせいで", "〜の結果"] },
        { word: "rather than", meaning: "〜よりはむしろ", options: ["〜と同じくらい", "〜よりはむしろ", "〜の前に", "〜の後に"] }
      ],
      key_phrases: [
        { phrase: "stop ~ing", explanation: "「～するのをやめる」。stop to ~（～するために立ち止まる）との違いに注意です。" },
        { phrase: "instead of ~", explanation: "「～の代わりに」。A instead of B で「BではなくA」という意味になります。" }
      ],
      dictation_items: ["without smartphones this period of", "refresh them mentally and physically", "have some time away from", "between eight and ten pm", "rather than indoors with an"],
      overlappingTips: "【コツ】'mentally and physically' はセットでリズムよく。'and' を弱く読むのがポイントです。",
      shadowingTips: "【コツ】'instead of' [instéd əv] は2語を繋げて一つの単語のように発音しましょう。"
    },

    // --- Lesson 2 - Episode 4: Support and Goal Setting ---
    {
      id: 8,
      title: "Support and Goal Setting",
      script: "3. Find some support. Tell your family and friends about your digital detox. With their help, you can achieve your goal. You are not alone. 4. Take it easy. Even if you can’t reach your goal, don’t feel disappointed. Revise your plan and start again. You can do it! Yui thinks that starting a digital detox is a good idea. She wants to use her time more effectively for her studies and hobbies. She hopes to feel more refreshed and focused in her daily life.",
      slash_script: "3. Find some support. / Tell your family and friends / about your digital detox. / With their help, / you can achieve your goal. / You are not alone. / 4. Take it easy. / Even if / you can’t reach your goal, / don’t feel disappointed. / Revise your plan / and start again. / You can do it! / Yui thinks / that starting a digital detox / is a good idea. / She wants to use / her time more effectively / for her studies and hobbies. / She hopes to feel / more refreshed and focused / in her daily life.",
      japanese_translation: "3. サポートを見つけなさい。 / 家族や友人に話しなさい / あなたのデジタルデトックスについて。 / 彼らの助けがあれば、 / あなたは目標を達成できます。 / あなたは一人ではありません。 / 4. 気楽にやりなさい。 / たとえ～だとしても / 目標に到達できなくても、 / がっかりしないでください。 / 計画を修正して / また始めなさい。 / あなたならできます！ / ユイは考えています / デジタルデトックスを始めることは / 良い考えだと。 / 彼女は時間を使いたいと思っています / より効果的に / 勉強や趣味のために。 / 彼女は感じることを望んでいます / よりリフレッシュして集中していると / 日常生活の中で。",
      quizzes: [
        { q: "Who should you tell about your digital detox?", options: ["Nobody", "Your family and friends", "Strangers", "Only your teacher"], ans: "Your family and friends", explanation: "The guide suggests telling your family and friends for support." },
        { q: "What should you do if you can't reach your goal?", options: ["Give up", "Cry", "Revise your plan and start again", "Buy a new smartphone"], ans: "Revise your plan and start again", explanation: "The text encourages revising the plan and starting again without feeling disappointed." }
      ],
      vocab_quizzes: [
        { word: "achieve", meaning: "達成する", options: ["諦める", "達成する", "忘れる", "失う"] },
        { word: "disappointed", meaning: "がっかりした", options: ["興奮した", "驚いた", "がっかりした", "満足した"] },
        { word: "revise", meaning: "修正する", options: ["修正する", "壊す", "続ける", "始める"] },
        { word: "effectively", meaning: "効果的に", options: ["適当に", "効果的に", "ゆっくりと", "突然"] },
        { word: "focused", meaning: "集中した", options: ["疲れた", "混乱した", "集中した", "退屈した"] }
      ],
      key_phrases: [
        { phrase: "even if ~", explanation: "「たとえ～だとしても」。仮定や譲歩を表す非常に重要な接続詞です。" },
        { phrase: "take it easy", explanation: "「気楽にやる／無理をしない」。励ましの言葉としてよく使われます。" }
      ],
      dictation_items: ["with their help you can", "even if you cannot reach", "revise your plan and start", "use her time more effectively", "refreshed and focused in her"],
      overlappingTips: "【コツ】'You can do it!' は自分や相手を勇気づけるように明るく力強く発音しましょう。",
      shadowingTips: "【コツ】'effectively' の語尾の '-ly' まで丁寧に発音を追いかけてみてください。"
    }
  ] // ← ここで episodes 配列を閉じる
}; // ← ここで courseData オブジェクト全体を閉じる
