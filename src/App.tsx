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
    // --- Lesson 1 (ID: 1-4) ---
    {
      id: 1,
      title: "Ms. Smith's Discovery",
      script: "Ms. Smith, Kenta’s ALT, talks to the class. I first tried wagashi, traditional Japanese sweets, when I was in the United States. I loved the sweet adzuki bean jelly. Americans often have beans in salads or in a tomato sauce. However, we do not usually eat sweet beans. Wagashi artists express the season of the year or something beautiful in nature. They can create a goldfish and a ripple in the water. They can even display the stars of the galaxy. Japanese food culture is amazing.",
      slash_script: "Ms. Smith, / Kenta’s ALT, / talks to the class. / I first tried wagashi, / traditional Japanese sweets, / when I was in the United States. / I loved the sweet adzuki bean jelly. / Americans often have beans / in salads / or in a tomato sauce. / However, / we do not usually eat sweet beans. / Wagashi artists express / the season of the year / or something beautiful in nature. / They can create / a goldfish and a ripple / in the water. / They can even display / the stars of the galaxy. / Japanese food culture is amazing.",
      japanese_translation: "ミス・スミス（ケンタのALT）がクラスに話をします。私は初めて和菓子を食べました、日本の伝統的なお菓子（である）、私がアメリカにいた時に。私は甘い小豆ゼリー（羊羹）が大好きでした。アメリカ人はよく豆をサラダやトマトソースの中で食べます。しかし、私たちはふつう甘い豆は食べません。和菓子の職人は季節や自然の中の美しい何かを表現します。彼らは金魚や水の波紋を作ったり、銀河の星々を展示することさえできます。日本の食文化は素晴らしいです。",
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
      dictation_items: ["tried wagashi traditional Japanese sweets", "loved the sweet adzuki bean", "often have beans in salads", "the season of the year", "Japanese food culture is amazing"]
    },
    {
      id: 2,
      title: "The Origin of Wagashi",
      script: "Now, Kenta, a tea ceremony club member, will tell us about the history of wagashi. Kenta talks about the history of wagashi. In the Jomon period, people ate fruits and nuts. They are the origin of wagashi. Later, people made mochi and dumplings from rice. In the Nara period, various cooking techniques came to Japan from China. In the Muromachi period, kasutera sponge cake and kompeito came to Japan from Europe. However, sugar was expensive.",
      slash_script: "Now, Kenta, / a tea ceremony club member, / will tell us / about the history of wagashi. / Kenta talks / about the history of wagashi. / In the Jomon period, / people ate fruits and nuts. / They are the origin of wagashi. / Later, / people made mochi and dumplings / from rice. / In the Nara period, / various cooking techniques / came to Japan from China. / In the Muromachi period, / kasutera sponge cake and kompeito / came to Japan from Europe. / However, / sugar was expensive.",
      japanese_translation: "茶道部員のケンタが和菓子の歴史を話します。縄文時代、人々は果物やナッツを食べており、それが和菓子の起源です。その後、米から餅や団子が作られました。奈良時代には中国から調理技術が伝わり、室町時代にはヨーロッパからカステラや金平糖が伝わりました。しかし当時は砂糖は高価でした。",
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
      dictation_items: ["member will tell us about", "the origin of wagashi", "made mochi and dumplings from", "various cooking techniques came to", "however sugar was expensive"]
    },
    {
      id: 3,
      title: "Modern Wagashi and SNS",
      script: "In the Edo period, sugar spread widely in Japan. People enjoyed sweets like today’s beautiful wagashi during tea ceremonies. As you know, most young people prefer Western sweets to wagashi. These days, however, many young people post pictures of their favorite wagashi on social media. I have posted lots of pictures, too. We are rediscovering Japanese culture. Ms. Smith introduces an easy recipe for strawberry mochi.",
      slash_script: "In the Edo period, / sugar spread widely in Japan. / People enjoyed sweets / like today’s beautiful wagashi / during tea ceremonies. / As you know, / most young people / prefer Western sweets to wagashi. / These days, however, / many young people / post pictures / of their favorite wagashi / on social media. / I have posted lots of pictures, too. / We are rediscovering Japanese culture. / Ms. Smith introduces / an easy recipe / for strawberry mochi.",
      japanese_translation: "江戸時代、砂糖が日本中に広まり、人々は茶会で和菓子を楽しみました。多くの若者は和菓子より洋菓子を好みますが、最近ではSNSにお気に入りの和菓子の写真を投稿する若者が増えています。私も投稿しました。私たちは日本文化を再発見しているのです。次に、スミス先生がいちご大福のレシピを紹介します。",
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
      dictation_items: ["sugar spread widely in Japan", "enjoyed sweets like today beautiful", "prefer Western sweets to wagashi", "post pictures of their favorite", "rediscovering Japanese culture"]
    },
    {
      id: 4,
      title: "Easy Strawberry Mochi Recipe",
      script: "Wash the strawberries and remove the hulls. Divide the bean paste into 8 pieces. Cover each strawberry with a piece of bean paste. Put the refined rice flour, sugar, and water in a heat-resistant bowl and mix them well. Heat the mixture in a microwave oven for 2 minutes. Then mix it well. Repeat this until the mixture turns to mochi. Put potato starch on your hands and tear the mochi into 8 pieces. Wrap each strawberry with a piece of mochi.",
      slash_script: "Wash the strawberries / and remove the hulls. / Divide the bean paste / into 8 pieces. / Cover each strawberry / with a piece of bean paste. / Put the refined rice flour, sugar, and water / in a heat-resistant bowl / and mix them well. / Heat the mixture / in a microwave oven / for 2 minutes. / Then mix it well. / Repeat this / until the mixture turns to mochi. / Put potato starch on your hands / and tear the mochi / into 8 pieces. / Wrap each strawberry / with a piece of mochi.",
      japanese_translation: "いちごを洗ってヘタを取ります。あんこを8等分し、いちごを包みます。耐熱ボウルに白玉粉、砂糖、水を入れ混ぜ、レンジで2分加熱して混ぜます。これを餅になるまで繰り返し、手に片栗粉をつけて8等分にします。最後にあんこで包んだいちごを餅で包めば完成です。",
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
      dictation_items: ["remove the hulls", "divide the bean paste into", "in a heat resistant bowl", "mixture in a microwave oven", "tear the mochi into eight"]
    },
    // --- Lesson 2 (ID: 5-8) ---
    {
      id: 5,
      title: "The Evolution of Phones",
      script: "The history of the telephone begins in the 1870s. Alexander Graham Bell invented the telephone to carry the human voice over long distances. It gradually spread around the world. By the 1970s, there was a telephone in most homes in Japan. However, it was a fixed-line phone, so you could not carry it around. It was not convenient if you wanted to talk in private. In 1979, car telephones appeared. People could use them inside their cars. Later models had batteries, and people could also use them outside their cars. However, they were heavy and expensive.",
      slash_script: "The history of the telephone / begins in the 1870s. / Alexander Graham Bell invented the telephone / to carry the human voice / over long distances. / It gradually spread / around the world. / By the 1970s, / there was a telephone / in most homes in Japan. / However, / it was a fixed-line phone, / so you could not carry it around. / It was not convenient / if you wanted to talk in private. / In 1979, / car telephones appeared. / People could use them / inside their cars. / Later models had batteries, / and people could also use them / outside their cars. / However, / they were heavy and expensive.",
      japanese_translation: "電話の歴史は1870年代に始まります。ベルは遠距離に声を届けるために電話を発明し、世界中に普及しました。1970年代の日本には多くの家庭に電話がありましたが、固定電話だったため持ち運びはできず、プライバシーを守るのも不便でした。1979年に登場した自動車電話は車内外で使えましたが、重くて高価でした。",
      quizzes: [
        { q: "Why did Bell invent the telephone?", options: ["To play music", "To carry human voice over long distances", "To take pictures", "To use the Internet"], ans: "To carry human voice over long distances", explanation: "Bell wanted to carry the human voice over long distances." },
        { q: "What was the problem with early mobile phones?", options: ["Too small", "Too quiet", "Heavy and expensive", "No colors"], ans: "Heavy and expensive", explanation: "The text says they were heavy and expensive." }
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
        { phrase: "in private", explanation: "「プライベートで／秘密で」。他人に聞かれずに話をしたい状況です。" }
      ],
      dictation_items: ["carry the human voice over", "gradually spread around the world", "fixed-line phone so you could", "not convenient if you wanted", "they were heavy and expensive"]
    },
    {
      id: 6,
      title: "The Rise of Smartphones",
      script: "In 1987, mobile phones appeared. People could easily carry them around. Then, in the 1990s, smartphones appeared. They spread quickly in the 2010s. Smartphones with an Internet connection are convenient. Through the Internet, you can join remote classes. You can play online games and watch videos. You can also pay for goods and services. However, a serious problem has arisen. While high school students spent an average of 192 minutes a day on their smartphones in 2015, this increased to 345 minutes in 2022. Many students feel that they can never turn their phones off.",
      slash_script: "In 1987, / mobile phones appeared. / People could easily / carry them around. / Then, / in the 1990s, / smartphones appeared. / They spread quickly / in the 2010s. / Smartphones / with an Internet connection / are convenient. / Through the Internet, / you can join remote classes. / You can play online games / and watch videos. / You can also pay / for goods and services. / However, / a serious problem has arisen. / While high school students / spent an average of 192 minutes / a day / on their smartphones in 2015, / this increased to 345 minutes / in 2022. / Many students feel / that they can never / turn their phones off.",
      japanese_translation: "1987年に携帯電話が登場し、簡単に持ち運べるようになりました。1990年代にはスマホが現れ、2010年代に急速に普及しました。スマホは便利でリモート授業や買い物も可能ですが、深刻な問題も起きています。高校生の1日の平均使用時間は2015年の192分から2022年には345分に増え、スマホを手放せないと感じる生徒が増えています。",
      quizzes: [
        { q: "How many minutes did students spend on smartphones in 2022?", options: ["192", "345", "100", "500"], ans: "345", explanation: "The average time increased to 345 minutes in 2022." },
        { q: "What is a merit of smartphones?", options: ["Being heavy", "Remote classes", "Turning off", "Losing time"], ans: "Remote classes", explanation: "You can join remote classes through the Internet." }
      ],
      vocab_quizzes: [
        { word: "appeared", meaning: "登場した", options: ["登場した", "消えた", "壊れた", "遅れた"] },
        { word: "connection", meaning: "接続", options: ["接続", "切断", "発見", "修理"] },
        { word: "service", meaning: "サービス", options: ["サービス", "料金", "商品", "工場"] },
        { word: "average", meaning: "平均", options: ["平均", "最大", "合計", "記録"] },
        { word: "increase", meaning: "増える", options: ["増える", "減る", "止まる", "変わる"] }
      ],
      key_phrases: [
        { phrase: "pay for ~", explanation: "「～の代金を支払う」。goods and servicesとセットでよく使われます。" },
        { phrase: "turn off", explanation: "「（電源を）切る」。使いすぎを防ぐために重要な動作です。" }
      ],
      dictation_items: ["easily carry them around", "spread quickly in the", "join remote classes", "spent an average of", "never turn their phones off"]
    },
    {
      id: 7,
      title: "Digital Detox Advice (1 & 2)",
      script: "Some experts say that young people should spend a few days without smartphones. This period of “digital detox” will refresh them mentally and physically. 1. Have some time away from your smartphone. Stop using your smartphone when you have a meal, when you go to bed, or simply between 8:00 p.m. and 10:00 p.m. 2. Go outside. Go to a movie theater instead of watching a video online. Play soccer outdoors with a real ball rather than indoors with an online game.",
      slash_script: "Some experts say / that young people should spend / a few days / without smartphones. / This period / of “digital detox” / will refresh them / mentally and physically. / 1. Have some time away / from your smartphone. / Stop using your smartphone / when you have a meal, / when you go to bed, / or simply / between 8:00 p.m. and 10:00 p.m. / 2. Go outside. / Go to a movie theater / instead of watching a video online. / Play soccer outdoors / with a real ball / rather than indoors / with an online game.",
      japanese_translation: "専門家は数日間スマホなしで過ごす「デジタルデトックス」を勧めています。1.スマホから離れる時間を作りましょう。食事中や就寝前、あるいは午後8時から10時の間などです。2.外に出ましょう。動画を観る代わりに映画館へ行ったり、オンラインゲームではなく外で本物のボールを使ってサッカーをしたりしましょう。",
      quizzes: [
        { q: "When should you stop using your smartphone?", options: ["While sleeping only", "During meals and bed time", "In the morning", "Never"], ans: "During meals and bed time", explanation: "Stop using it during meals or when you go to bed." },
        { q: "What is an outdoor alternative for online games?", options: ["Watching TV", "Sleeping", "Soccer with a real ball", "Online classes"], ans: "Soccer with a real ball", explanation: "Play soccer outdoors with a real ball instead of indoors." }
      ],
      vocab_quizzes: [
        { word: "expert", meaning: "専門家", options: ["専門家", "初心者", "学生", "犯人"] },
        { word: "period", meaning: "期間", options: ["期間", "場所", "道具", "理由"] },
        { word: "refresh", meaning: "リフレッシュさせる", options: ["疲れさせる", "リフレッシュさせる", "壊す", "汚す"] },
        { word: "simply", meaning: "単に", options: ["複雑に", "単に", "決して", "やっと"] },
        { word: "instead of", meaning: "〜の代わりに", options: ["〜の代わりに", "〜のせいで", "〜の結果", "〜に加えて"] }
      ],
      key_phrases: [
        { phrase: "stop ~ing", explanation: "「～するのをやめる」。習慣を断ち切る時の表現です。" },
        { phrase: "rather than ~", explanation: "「～よりはむしろ」。比較して選択する際に使います。" }
      ],
      dictation_items: ["without smartphones this period", "refresh them mentally and", "away from your smartphone", "between eight and ten", "rather than indoors with an"]
    },
    {
      id: 8,
      title: "Support and Goal Setting",
      script: "3. Find some support. Tell your family and friends about your digital detox. With their help, you can achieve your goal. You are not alone. 4. Take it easy. Even if you can’t reach your goal, don’t feel disappointed. Revise your plan and start again. You can do it! Yui thinks that starting a digital detox is a good idea. She wants to use her time more effectively for her studies and hobbies. She hopes to feel more refreshed and focused in her daily life.",
      slash_script: "3. Find some support. / Tell your family and friends / about your digital detox. / With their help, / you can achieve your goal. / You are not alone. / 4. Take it easy. / Even if / you can’t reach your goal, / don’t feel disappointed. / Revise your plan / and start again. / You can do it! / Yui thinks / that starting a digital detox / is a good idea. / She wants to use / her time more effectively / for her studies and hobbies. / She hopes to feel / more refreshed and focused / in her daily life.",
      japanese_translation: "3.サポーターを見つけましょう。家族や友人に計画を伝えれば、一人ではなく助け合って目標を達成できます。4.気楽にやりましょう。たとえ目標に届かなくても、がっかりせず計画を見直して再開すれば大丈夫です。ユイもデトックスは良い考えだと思い、勉強や趣味に時間をもっと有効に使いたいと考えています。",
      quizzes: [
        { q: "What should you do if you fail your goal?", options: ["Give up", "Cry", "Revise and start again", "Delete the phone"], ans: "Revise and start again", explanation: "Revise your plan and start again without feeling disappointed." },
        { q: "Why does Yui want to do a digital detox?", options: ["To buy a new phone", "To be effectively for studies", "To play games", "To go to sleep"], ans: "To be effectively for studies", explanation: "She wants to use time effectively for studies and hobbies." }
      ],
      vocab_quizzes: [
        { word: "achieve", meaning: "達成する", options: ["達成する", "諦める", "壊す", "忘れる"] },
        { word: "disappointed", meaning: "がっかりした", options: ["がっかりした", "興奮した", "怒った", "驚いた"] },
        { word: "revise", meaning: "修正する", options: ["修正する", "隠す", "始める", "続ける"] },
        { word: "effectively", meaning: "効果的に", options: ["効果的に", "適当に", "ゆっくり", "突然"] },
        { word: "focused", meaning: "集中した", options: ["集中した", "疲れた", "混乱した", "眠い"] }
      ],
      key_phrases: [
        { phrase: "with their help", explanation: "「彼らの助けがあれば」。周囲のサポートの重要性を表します。" },
        { phrase: "even if ~", explanation: "「たとえ～だとしても」。失敗した時の条件付きの励ましです。" }
      ],
      dictation_items: ["achieve your goal you are", "reach your goal don't feel", "revise your plan and start", "effectively for her studies", "refreshed and focused in her"]
    },
    // --- Lesson 3 (ID: 9-12) ---
    {
      id: 9,
      title: "Bosses vs. Leaders",
      script: "Both monkeys and gorillas live in groups. However, the groups’ organizations are quite different. A group of monkeys is ruled by a male monkey. As the boss of the group, he has absolute power. The boss decides everything and the others just follow his directions. A group of gorillas is also led by a male. However, he is the leader rather than the boss. The leader never threatens the other members. He considers their needs and feelings. He then makes the best decisions for the group. Monkeys depend on power, and gorillas depend on support and love.",
      slash_script: "Both monkeys and gorillas / live in groups. / However, / the groups’ organizations / are quite different. / A group of monkeys / is ruled by a male monkey. / As the boss of the group, / he has absolute power. / The boss decides everything / and the others / just follow his directions. / A group of gorillas / is also led by a male. / However, / he is the leader / rather than the boss. / The leader never threatens / the other members. / He considers / their needs and feelings. / He then makes / the best decisions for the group. / Monkeys depend on power, / and gorillas depend on / support and love.",
      japanese_translation: "サルとゴリラは両方グループで生活しますが、その組織は全く異なります。サルのグループはボスのオスが支配し、絶対的な力を持ちます。他のみんなはボスの指示に従うだけです。ゴリラもオスに率いられますが、彼は「リーダー」です。リーダーは他者を脅さず、メンバーのニーズや感情を考慮して最善の決定を下します。サルは力に、ゴリラは支え合いと愛に依存しています。",
      quizzes: [
        { q: "How is a group of monkeys different from gorillas?", options: ["Monkeys live alone", "Monkeys have a boss with power", "Gorillas have a boss", "Gorillas live in water"], ans: "Monkeys have a boss with power", explanation: "Monkeys have a boss with absolute power." },
        { q: "What does a gorilla leader consider?", options: ["Money", "His own food", "Members' needs and feelings", "The boss's orders"], ans: "Members' needs and feelings", explanation: "A leader considers the needs and feelings of others." }
      ],
      vocab_quizzes: [
        { word: "organization", meaning: "組織", options: ["組織", "場所", "道具", "理由"] },
        { word: "absolute", meaning: "絶対的な", options: ["絶対的な", "弱い", "一時的な", "偽の"] },
        { word: "direction", meaning: "指示", options: ["指示", "質問", "練習", "会話"] },
        { word: "threaten", meaning: "脅す", options: ["脅す", "褒める", "助ける", "笑う"] },
        { word: "consider", meaning: "考慮する", options: ["考慮する", "無視する", "忘れる", "捨てる"] }
      ],
      key_phrases: [
        { phrase: "rather than ~", explanation: "「～よりはむしろ」。A rather than Bで「BではなくA」のニュアンス。" },
        { phrase: "depend on ~", explanation: "「～に依存する／～次第である」。グループの維持に必要なものを表します。" }
      ],
      dictation_items: ["organizations are quite different", "decides everything and the", "follow his directions", "leader rather than the boss", "consider their needs and"]
    },
    {
      id: 10,
      title: "Short-term Goals",
      script: "The two kinds of leadership are seen in human society as well. Imagine you are a member of the school brass band. If you need to sell all your concert tickets in three days, you may need a boss. The boss will analyze the situation and give tasks that each member should carry out. When a group has a short-term goal, the boss will do a good job. In this case, fast decisions are more important than long discussions. Everyone needs to know exactly what to do to reach the goal quickly.",
      slash_script: "The two kinds of leadership / are seen in human society / as well. / Imagine / you are a member / of the school brass band. / If you need to sell / all your concert tickets / in three days, / you may need a boss. / The boss will analyze / the situation / and give tasks / that each member should carry out. / When a group / has a short-term goal, / the boss will do a good job. / In this case, / fast decisions are / more important than / long discussions. / Everyone needs to know / exactly what to do / to reach the goal quickly.",
      japanese_translation: "2種類のリーダーシップは人間社会でも見られます。あなたが吹奏楽部員だとしましょう。3日以内にチケットを完売させる必要があるなら「ボス」が必要です。ボスは状況を分析し、各員が実行すべき課題を与えます。短期目標がある場合、ボスは良い仕事をします。この場合、長い議論より素早い決断が重要です。全員が何をすべきか正確に知る必要があります。",
      quizzes: [
        { q: "When is a 'boss' effective?", options: ["When members are happy", "When there's a short-term goal", "For long practice", "When there is no goal"], ans: "When there's a short-term goal", explanation: "The boss is good when a group has a short-term goal." },
        { q: "What is more important for short-term goals?", options: ["Long discussions", "Fast decisions", "Playing music", "Sleeping"], ans: "Fast decisions", explanation: "Fast decisions are more important than long discussions." }
      ],
      vocab_quizzes: [
        { word: "society", meaning: "社会", options: ["社会", "学校", "家族", "工場"] },
        { word: "analyze", meaning: "分析する", options: ["分析する", "壊す", "隠す", "運ぶ"] },
        { word: "carry out", meaning: "実行する", options: ["実行する", "外へ出す", "中止する", "練習する"] },
        { word: "short-term", meaning: "短期の", options: ["短期の", "長期の", "永遠の", "公式の"] },
        { word: "exactly", meaning: "正確に", options: ["正確に", "大体", "時々", "多分"] }
      ],
      key_phrases: [
        { phrase: "carry out ~", explanation: "「～を実行する」。指示されたタスクをこなす時に使います。" },
        { phrase: "as well", explanation: "「～もまた同様に」。文末においてtooと同じ意味になります。" }
      ],
      dictation_items: ["seen in human society as well", "sell all your concert tickets", "analyze the situation and give", "member should carry out", "exactly what to do to reach"]
    },
    {
      id: 11,
      title: "Long-term Goals",
      script: "Now imagine you want to perform well in the next year’s concert. You may need a leader who creates an atmosphere of cooperation. With such a leader, you can keep your motivation to practice hard. When a group has a long-term goal, the leader will do a good job. A leader focuses on building trust among members. This helps people feel happy and comfortable in the group. In the long run, this type of leadership builds a stronger team that can overcome difficult challenges together.",
      slash_script: "Now imagine / you want to perform well / in the next year’s concert. / You may need a leader / who creates / an atmosphere of cooperation. / With such a leader, / you can keep / your motivation / to practice hard. / When a group / has a long-term goal, / the leader will do a good job. / A leader focuses / on building trust / among members. / This helps people / feel happy and comfortable / in the group. / In the long run, / this type of leadership / builds a stronger team / that can overcome / difficult challenges together.",
      japanese_translation: "来年の演奏会で良い演奏をしたいなら「リーダー」が必要かもしれません。リーダーは協力的な雰囲気を作り、練習へのモチベーションを維持させます。長期目標がある場合、リーダーは良い仕事をします。リーダーは信頼関係の構築に集中し、みんなが幸せに過ごせるようにします。長い目で見れば、このリーダーシップは困難を共に乗り越える強いチームを作ります。",
      quizzes: [
        { q: "What does a leader focus on building?", options: ["Tickets", "Absolute power", "Trust among members", "Money"], ans: "Trust among members", explanation: "A leader focuses on building trust among members." },
        { q: "When is a 'leader' effective?", options: ["For short goals", "For long-term goals", "For three days", "For selling goods"], ans: "For long-term goals", explanation: "The leader is good when a group has a long-term goal." }
      ],
      vocab_quizzes: [
        { word: "perform", meaning: "演奏する・行う", options: ["演奏する・行う", "休む", "準備する", "聴く"] },
        { word: "atmosphere", meaning: "雰囲気", options: ["雰囲気", "空気", "場所", "理由"] },
        { word: "cooperation", meaning: "協力", options: ["協力", "競争", "反対", "沈黙"] },
        { word: "comfortable", meaning: "快適な", options: ["快適な", "忙しい", "騒がしい", "悲しい"] },
        { word: "overcome", meaning: "乗り越える", options: ["乗り越える", "諦める", "避ける", "忘れる"] }
      ],
      key_phrases: [
        { phrase: "focus on ~", explanation: "「～に焦点を当てる／集中する」。重要な課題に取り組む際の表現です。" },
        { phrase: "in the long run", explanation: "「長い目で見れば」。将来を見越した視点を表します。" }
      ],
      dictation_items: ["atmosphere of cooperation", "keep your motivation to", "focuses on building trust", "happy and comfortable in", "overcome difficult challenges together"]
    },
    {
      id: 12,
      title: "Leadership Checklist",
      script: "Hina and John find a checklist for good leadership. If you lead a group, you set clear group goals and share them with members. You give each member a task. You consider members’ opinions when you set the group goals. You have good manners and try to be a role model. You have a strong will when members disagree with you. You talk directly with each member and listen to members’ criticisms. You make members happy and trust your group’s members. How good is your leadership? Try to find your own style!",
      slash_script: "Hina and John find / a checklist / for good leadership. / If you lead a group, / you set clear group goals / and share them with members. / You give each member / a task. / You consider / members’ opinions / when you set the group goals. / You have good manners / and try to be a role model. / You have a strong will / when members / disagree with you. / You talk directly / with each member / and listen to / members’ criticisms. / You make members happy / and trust / your group’s members. / How good is / your leadership? / Try to find / your own style!",
      japanese_translation: "ヒナとジョンは良いリーダーシップのチェックリストを見つけました。リーダーは明確な目標を立てて共有し、各員に課題を与えます。目標設定時には意見を聞き、マナーを守りお手本になります。反対意見があっても強い意志を持ち、直接対話し、批判にも耳を傾けます。メンバーを幸せにし、信頼します。あなたのリーダーシップはどうですか？自分のスタイルを見つけましょう！",
      quizzes: [
        { q: "What should you do with group goals?", options: ["Keep them secret", "Set and share them", "Change them every hour", "Ignore them"], ans: "Set and share them", explanation: "You should set clear goals and share them with members." },
        { q: "What should you listen to according to the checklist?", options: ["Only music", "Members' criticisms", "No one", "Loud noises"], ans: "Members' criticisms", explanation: "You should listen to members' criticisms." }
      ],
      vocab_quizzes: [
        { word: "clear", meaning: "明確な", options: ["明確な", "不確かな", "古い", "速い"] },
        { word: "role model", meaning: "手本となる人", options: ["手本となる人", "悪役", "通行人", "審判"] },
        { word: "will", meaning: "意志", options: ["意志", "未来", "過去", "記憶"] },
        { word: "criticism", meaning: "批判", options: ["批判", "賛辞", "応援", "無視"] },
        { word: "directly", meaning: "直接的に", options: ["直接的に", "間接的に", "密かに", "大声で"] }
      ],
      key_phrases: [
        { phrase: "disagree with ~", explanation: "「～に反対する」。対立意見が出た際の状況を表します。" },
        { phrase: "listen to ~", explanation: "「～に耳を傾ける」。相手を尊重して聞く姿勢を指します。" }
      ],
      dictation_items: ["set clear group goals and", "consider members opinions when", "try to be a role model", "strong will when members", "listen to members criticisms"]
    }
  ]
};
