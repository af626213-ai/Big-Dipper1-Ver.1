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
    // --- Lesson 1 (Episode 1-4) ---
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
      shadowingTips: "【コツ】'microwave' [máikrəwèiv] の二重母音 and アクセントに注意して追いかけてください。"
    },
    // --- Lesson 2 (Episode 5-8) ---
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
      shadowingTips: "【コツ】'increase' のアクセント位置（後ろの ea の部分）に注意して追いください。"
    },
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
    },
    // --- Lesson 3 (Episode 9-12) ---
    {
      id: 9,
      title: "Bosses vs. Leaders",
      script: "Both monkeys and gorillas live in groups. However, the groups’ organizations are quite different. A group of monkeys is ruled by a male monkey. As the boss of the group, he has absolute power. The boss decides everything and the others just follow his directions. A group of gorillas is also led by a male. However, he is the leader rather than the boss. The leader never threatens the other members. He considers their needs and feelings. He then makes the best decisions for the group. Monkeys depend on power, and gorillas depend on support and love.",
      slash_script: "Both monkeys and gorillas / live in groups. / However, / the groups’ organizations / are quite different. / A group of monkeys / is ruled by a male monkey. / As the boss of the group, / he has absolute power. / The boss decides everything / and the others / just follow his directions. / A group of gorillas / is also led by a male. / However, / he is the leader / rather than the boss. / The leader never threatens / the other members. / He considers / their needs and feelings. / He then makes / the best decisions for the group. / Monkeys depend on power, / and gorillas depend on / support and love.",
      japanese_translation: "サルとゴリラの両方が / グループで生活しています。 / しかしながら、 / そのグループの組織は / 全く異なっています。 / サルのグループは / オスのサルによって支配されています。 / グループの「ボス」として、 / 彼は絶対的な力を持っています。 / ボスがすべてを決定し、 / 他の者たちは / ただ彼の指示に従います。 / ゴリラのグループもまた / オスによって率いられています。 / しかしながら、 / 彼は「リーダー」です / ボスというよりはむしろ。 / リーダーは決して脅しません / 他のメンバーを。 / 彼は考慮します / 彼らの必要としていることや感情を。 / 彼はそれから下します / グループにとって最善の決定を。 / サルは力に依存し、 / ゴリラは依存しているのです / 支え合いと愛情に。",
      quizzes: [
        { q: "How is a group of monkeys ruled?", options: ["By support and love", "By a male boss with absolute power", "By all members together", "By a female leader"], ans: "By a male boss with absolute power", explanation: "The text says a male monkey has absolute power as the boss." },
        { q: "What is the difference between a boss and a leader in this text?", options: ["The boss is stronger", "The leader considers members' feelings", "The boss lives alone", "There is no difference"], ans: "The leader considers members' feelings", explanation: "Unlike a boss, a leader considers the needs and feelings of other members." }
      ],
      vocab_quizzes: [
        { word: "organization", meaning: "組織", options: ["組織", "場所", "道具", "理由"] },
        { word: "absolute", meaning: "絶対的な", options: ["一時的な", "絶対的な", "弱い", "部分的な"] },
        { word: "direction", meaning: "指示", options: ["指示", "練習", "会話", "質問"] },
        { word: "threaten", meaning: "〜を脅す", options: ["〜を助ける", "〜を褒める", "〜を脅す", "〜を笑う"] },
        { word: "consider", meaning: "〜を考慮する", options: ["〜を考慮する", "〜を無視する", "〜を忘れる", "〜を壊す"] }
      ],
      key_phrases: [
        { phrase: "rather than ~", explanation: "「～というよりはむしろ」。2つのものを対比させる時に使います。" },
        { phrase: "depend on ~", explanation: "「～に依存する／～次第である」。何に基づいているかを表す重要な表現です。" }
      ],
      dictation_items: ["groups organizations are quite different", "decides everything and the others", "follow his directions", "leader rather than the boss", "consider their needs and feelings"],
      overlappingTips: "【コツ】'Boss'（支配）と 'Leader'（共感）の対比を意識して、声のトーンを変えてみましょう。",
      shadowingTips: "【コツ】'absolute' や 'threatens' など、強い意味を持つ単語のアクセントを強調してください。"
    },
    {
      id: 10,
      title: "Short-term Goals",
      script: "The two kinds of leadership are seen in human society as well. Imagine you are a member of the school brass band. If you need to sell all your concert tickets in three days, you may need a boss. The boss will analyze the situation and give tasks that each member should carry out. When a group has a short-term goal, the boss will do a good job. In this case, fast decisions are more important than long discussions. Everyone needs to know exactly what to do to reach the goal quickly.",
      slash_script: "The two kinds of leadership / are seen in human society / as well. / Imagine / you are a member / of the school brass band. / If you need to sell / all your concert tickets / in three days, / you may need a boss. / The boss will analyze / the situation / and give tasks / that each member should carry out. / When a group / has a short-term goal, / the boss will do a good job. / In this case, / fast decisions are / more important than / long discussions. / Everyone needs to know / exactly what to do / to reach the goal quickly.",
      japanese_translation: "これら2種類のリーダーシップは / 人間社会でも見られます / 同様に。 / 想像してみてください / あなたが吹奏楽部の部員だと。 / もし売る必要があるなら / すべての演奏会のチケットを / 3日以内に、 / あなたにはボスが必要かもしれません。 / ボスは分析するでしょう / 状況を / そして課題を与えます / 各メンバーが実行すべき。 / グループが持っている時、 / 短期的な目標を、 / ボスは良い仕事をするでしょう。 / この場合、 / 素早い決定は / ～より重要です / 長い議論（より）。 / 全員が知る必要があります / 正確に何をすべきかを / 目標に素早く到達するために。",
      quizzes: [
        { q: "When is a 'boss' type of leadership useful?", options: ["For long-term goals", "For short-term goals", "When everyone is lazy", "For making friends"], ans: "For short-term goals", explanation: "A boss is effective when a group needs to achieve a goal in a short period." },
        { q: "What does a boss do for the members?", options: ["Listens to their music", "Analyzes the situation and gives tasks", "Plays the trumpet", "Takes all the tickets"], ans: "Analyzes the situation and gives tasks", explanation: "The boss organizes the group by assigning specific tasks to reach a quick goal." }
      ],
      vocab_quizzes: [
        { word: "society", meaning: "社会", options: ["学校", "社会", "家族", "会社"] },
        { word: "analyze", meaning: "〜を分析する", options: ["〜を分析する", "〜を捨てる", "〜を運ぶ", "〜を隠す"] },
        { word: "carry out", meaning: "〜を実行する", options: ["〜を外に運ぶ", "〜を中止する", "〜を実行する", "〜を練習する"] },
        { word: "short-term", meaning: "短期的な", options: ["短期的な", "長期的な", "個人的な", "公式な"] },
        { word: "exactly", meaning: "正確に", options: ["正確に", "大体", "時々", "たぶん"] }
      ],
      key_phrases: [
        { phrase: "carry out ~", explanation: "「～を実行する／遂行する」。計画や任務をやり遂げる時に使います。" },
        { phrase: "as well", explanation: "「～もまた同様に」。文末に置いて too と同じように使われます。" }
      ],
      dictation_items: ["seen in human society as well", "sell all your concert tickets", "analyze the situation and give", "member should carry out", "exactly what to do to reach"],
      overlappingTips: "【コツ】'If you need to sell...' の部分は、切迫感を持たせて少し早口で読んでみましょう。",
      shadowingTips: "【コツ】'analyze' [ǽnəlàiz] の最初の母音をしっかり開いて発音しましょう。"
    },
    {
      id: 11,
      title: "Long-term Goals",
      script: "Now imagine you want to perform well in the next year’s concert. You may need a leader who creates an atmosphere of cooperation. With such a leader, you can keep your motivation to practice hard. When a group has a long-term goal, the leader will do a good job. A leader focuses on building trust among members. This helps people feel happy and comfortable in the group. In the long run, this type of leadership builds a stronger team that can overcome difficult challenges together.",
      slash_script: "Now imagine / you want to perform well / in the next year’s concert. / You may need a leader / who creates / an atmosphere of cooperation. / With such a leader, / you can keep / your motivation / to practice hard. / When a group / has a long-term goal, / the leader will do a good job. / A leader focuses / on building trust / among members. / This helps people / feel happy and comfortable / in the group. / In the long run, / this type of leadership / builds a stronger team / that can overcome / difficult challenges together.",
      japanese_translation: "さて、想像してください / あなたが上手く演奏したいと / 来年のコンサートで。 / あなたにはリーダーが必要かもしれません / 作り出す（リーダーが） / 協力の雰囲気を。 / そのようなリーダーがいれば、 / あなたは維持できます / モチベーションを / 一生懸命練習するための。 / グループが持っている時、 / 長期的な目標を、 / リーダーは良い仕事をするでしょう。 / リーダーは焦点を当てます / 信頼を築くことに / メンバーの間で。 / これは人々を助けます / 幸せで快適に感じる（のを） / グループの中で。 / 長い目で見れば、 / このタイプのリーダーシップは / より強いチームを作ります / 乗り越えることができる（チームを） / 困難な課題を一緒に。",
      quizzes: [
        { q: "What kind of atmosphere does a leader create?", options: ["An atmosphere of fear", "An atmosphere of cooperation", "A very quiet atmosphere", "A stressful atmosphere"], ans: "An atmosphere of cooperation", explanation: "A leader builds an environment where everyone works together." },
        { q: "What is the benefit of having a leader for long-term goals?", options: ["You can finish in three days", "You can keep your motivation", "You don't have to practice", "You can sell tickets"], ans: "You can keep your motivation", explanation: "A leader helps members stay motivated over a long period of time." }
      ],
      vocab_quizzes: [
        { word: "perform", meaning: "演奏する・行う", options: ["聴く", "演奏する・行う", "休む", "準備する"] },
        { word: "atmosphere", meaning: "雰囲気", options: ["空気", "雰囲気", "場所", "結果"] },
        { word: "cooperation", meaning: "協力", options: ["競争", "協力", "沈黙", "反対"] },
        { word: "trust", meaning: "信頼", options: ["疑い", "恐怖", "信頼", "命令"] },
        { word: "overcome", meaning: "〜を乗り越える", options: ["〜を乗り越える", "〜を諦める", "〜を避ける", "〜を忘れる"] }
      ],
      key_phrases: [
        { phrase: "focus on ~", explanation: "「～に集中する／焦点を当てる」。大切なことに力を注ぐ時の表現です。" },
        { phrase: "in the long run", explanation: "「長い目で見れば／結局は」。将来的な結果について話す時に使います。" }
      ],
      dictation_items: ["atmosphere of cooperation", "keep your motivation to practice", "focuses on building trust", "happy and comfortable in the", "overcome difficult challenges together"],
      overlappingTips: "【コツ】'motivation' や 'cooperation' など、長い単語のリズムを崩さないように注意しましょう。",
      shadowingTips: "【コツ】'atmosphere' [ǽtməsfìər] の発音は、カタカナの「アトモスフィア」にならないよう息を混ぜて。"
    },
    {
      id: 12,
      title: "Leadership Checklist",
      script: "Hina and John find a checklist for good leadership. If you lead a group, you set clear group goals and share them with members. You give each member a task. You consider members’ opinions when you set the group goals. You have good manners and try to be a role model. You have a strong will when members disagree with you. You talk directly with each member and listen to members’ criticisms. You make members happy and trust your group’s members. How good is your leadership? Try to find your own style!",
      slash_script: "Hina and John find / a checklist / for good leadership. / If you lead a group, / you set clear group goals / and share them with members. / You give each member / a task. / You consider / members’ opinions / when you set the group goals. / You have good manners / and try to be a role model. / You have a strong will / when members / disagree with you. / You talk directly / with each member / and listen to / members’ criticisms. / You make members happy / and trust / your group’s members. / How good is / your leadership? / Try to find / your own style!",
      japanese_translation: "ヒナとジョンは～を見つけます / チェックリストを / 良いリーダーシップのための。 / もしあなたがグループを率いるなら、 / あなたは明確な目標を立てます / そしてそれらをメンバーと共有します。 / あなたは各メンバーに / 課題を与えます。 / あなたは考慮します / メンバーの意見を / グループの目標を立てる時に。 / あなたは良いマナーを持ちます / そしてロールモデルになろうと努めます。 / あなたは強い意志を持ちます / メンバーが / あなたに反対する時に。 / あなたは直接話します / 各メンバーと / そして耳を傾けます / メンバーの批判に。 / あなたはメンバーを幸せにし / 信頼します / グループのメンバーを。 / あなたのリーダーシップは / どれくらい良いですか？ / 見つけてみてください / あなた自身のスタイルを！",
      quizzes: [
        { q: "What should you do with group goals according to the checklist?", options: ["Keep them secret", "Share them with members", "Change them every day", "Forget them"], ans: "Share them with members", explanation: "Clear goals should be set and shared with everyone in the group." },
        { q: "What should you do when members criticize you?", options: ["Get angry", "Listen to them", "Leave the group", "Point out their mistakes"], ans: "Listen to them", explanation: "The checklist suggests listening to members' criticisms to be a good leader." }
      ],
      vocab_quizzes: [
        { word: "clear", meaning: "明確な", options: ["明確な", "不確かな", "古い", "難しい"] },
        { word: "role model", meaning: "お手本となる人", options: ["お手本となる人", "悪役", "通行人", "審判"] },
        { word: "will", meaning: "意志", options: ["未来", "意志", "記憶", "技術"] },
        { word: "criticism", meaning: "批判", options: ["称賛", "批判", "応援", "沈黙"] },
        { word: "directly", meaning: "直接的に", options: ["間接的に", "直接的に", "密かに", "大声で"] }
      ],
      key_phrases: [
        { phrase: "disagree with ~", explanation: "「～に反対する」。agree with（～に賛成する）の反対語です。" },
        { phrase: "listen to ~", explanation: "「～に耳を傾ける」。ただ聞こえるのではなく、意識して聞く時に使います。" }
      ],
      dictation_items: ["set clear group goals and", "try to be a role model", "strong will when members", "listen to members criticisms", "trust your group members"],
      overlappingTips: "【コツ】チェックリストの各項目を、一つずつ指差し確認するようなリズムで読んでください。",
      shadowingTips: "【コツ】'criticism' [krítəsìzm] の最後の m の音でしっかり口を閉じるようにしましょう。"
    }
  ]
};
