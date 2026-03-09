// ===== 言語ヘルパー =====
function getLang() {
  return localStorage.getItem('zukan-lang') || 'ja';
}

function t(ja, en) {
  return getLang() === 'en' ? en : ja;
}

function itemName(item) {
  return (getLang() === 'en' && item.nameEn) ? item.nameEn : item.name;
}

function itemDesc(item) {
  return (getLang() === 'en' && item.descEn) ? item.descEn : (item.desc || '');
}

function itemTrivia(item) {
  return (getLang() === 'en' && item.triviaEn) ? item.triviaEn : (item.trivia || '');
}

// 画像パス
const IMG_BASE = './';

// ===== データ =====
const CREATURES = {
  animals: [
    { img: 'images/dog.jpg', name: 'いぬ', nameEn: 'Dog', counter: 'ひき', desc: 'にんげんの いちばんの おともだち！ いろんな しゅるいが いて、おさんぽが だいすき。はなが とても いいよ。', descEn: 'Humans\' best friend! They love walks and have an amazing sense of smell.', trivia: 'はなの もようは にんげんの ゆびの しもんと おなじで、1ぴきずつ ぜんぶ ちがうんだよ！', triviaEn: 'Each dog\'s nose print is unique, just like human fingerprints!' },
    { img: 'images/cat.jpg', name: 'ねこ', nameEn: 'Cat', counter: 'ひき', desc: 'ふわふわの けなみで ごろごろ いうよ。たかい ところに のぼるのが とくい。よるも めが みえるんだ！', descEn: 'Fluffy and purring, cats love climbing high places. They can even see in the dark!', trivia: '1にちに 16じかんも ねむるよ。しかも ゆめも みるんだって！', triviaEn: 'Cats sleep up to 16 hours a day, and they even dream while sleeping!' },
    { img: 'images/rabbit.jpg', name: 'うさぎ', nameEn: 'Rabbit', counter: 'わ', desc: 'ながい みみと まるい しっぽが かわいい！ にんじんや くさが だいすき。ぴょんぴょん とぶよ。', descEn: 'Long ears and a fluffy round tail! Rabbits love carrots and hopping around.', trivia: 'じつは 360ど ほぼ ぜんぶ みえるんだ！うしろも みえちゃうよ。', triviaEn: 'Rabbits can see nearly 360 degrees around them - even behind their own head!' },
    { img: 'images/bear.jpg', name: 'くま', nameEn: 'Bear', counter: 'とう', desc: 'おおきくて ちからもち！ さかなや はちみつが だいすき。ふゆは あなの なかで ねむるよ。', descEn: 'Big and strong! Bears love fish and honey, and they sleep in caves during winter.', trivia: 'はしる はやさは じどうしゃと おなじくらい！じそく 50キロも でるよ。', triviaEn: 'Bears can run as fast as a car - up to 50 km/h!' },
    { img: 'images/elephant.jpg', name: 'ぞう', nameEn: 'Elephant', counter: 'とう', desc: 'りくで いちばん おおきい どうぶつ！ ながい はなで みずを すったり、ものを つかんだり するよ。', descEn: 'The biggest animal on land! They use their long trunk to drink water and grab things.', trivia: '1にちに 150リットルも みずを のむよ。おふろ いっぱいぶん！', triviaEn: 'Elephants drink up to 150 liters of water a day - that\'s a whole bathtub full!' },
    { img: 'images/lion.jpg', name: 'らいおん', nameEn: 'Lion', counter: 'とう', desc: 'どうぶつの おうさま！ おすには りっぱな たてがみが あるよ。アフリカの くさはらに すんでいるんだ。', descEn: 'The king of animals! Male lions have a big fluffy mane. They live in African grasslands.', trivia: '1にちに 20じかんも ねむっているよ。おうさま なのに ねぼすけ！', triviaEn: 'Lions sleep up to 20 hours a day. The king of animals is actually a big sleepyhead!' },
    { img: 'images/monkey.jpg', name: 'さる', nameEn: 'Monkey', counter: 'ひき', desc: 'きに のぼるのが とくい！ てを つかって ものを つかめるよ。バナナが だいすき。', descEn: 'Great at climbing trees! Monkeys can grab things with their hands and love bananas.', trivia: 'かがみに うつった じぶんが わかる、すごく あたまの いい どうぶつ なんだよ！', triviaEn: 'Some monkeys can recognize themselves in a mirror - they\'re super smart!' },
    { img: 'images/giraffe.jpg', name: 'きりん', nameEn: 'Giraffe', counter: 'とう', desc: 'せかいで いちばん せが たかい どうぶつ！ ながい くびで たかい きの はっぱを たべるよ。', descEn: 'The tallest animal in the world! They use their long neck to eat leaves from tall trees.', trivia: 'したの ながさは 45センチ！じぶんの みみの なかまで なめられるよ。', triviaEn: 'A giraffe\'s tongue is 45 cm long - they can lick the inside of their own ears!' },
    { img: 'images/pig.jpg', name: 'ぶた', nameEn: 'Pig', counter: 'ひき', desc: 'まるくて ピンクいろの からだ。じつは とっても あたまが いい どうぶつなんだよ！ ぶーぶー。', descEn: 'Round and pink! Pigs are actually very smart animals. Oink oink!', trivia: 'いぬより はなが いいんだよ！フランスでは トリュフという たかい キノコを さがすよ。', triviaEn: 'Pigs have a better sense of smell than dogs! In France, they sniff out expensive truffles.' },
    { img: 'images/cow.jpg', name: 'うし', nameEn: 'Cow', counter: 'とう', desc: 'ぎゅうにゅうを くれる どうぶつ。くさを たべて、もーもー と なくよ。しろくろの もようが ゆうめい！', descEn: 'Cows give us milk! They eat grass and go moo. Famous for their black and white spots!', trivia: 'いちばんの おともだちが いて、はなれると かなしく なるんだよ。', triviaEn: 'Cows have best friends, and they get sad when they are separated!' },
    { img: 'images/horse.jpg', name: 'うま', nameEn: 'Horse', counter: 'とう', desc: 'はしるのが とっても はやい！ むかしから にんげんの おてつだいを してきたよ。ヒヒーン！', descEn: 'Super fast runners! Horses have helped humans for thousands of years. Neigh!', trivia: 'たったまま ねることが できるよ！あしの ほねが ロックされるんだ。', triviaEn: 'Horses can sleep standing up! Their leg bones lock in place so they don\'t fall over.' },
    { img: 'images/sheep.jpg', name: 'ひつじ', nameEn: 'Sheep', counter: 'とう', desc: 'もこもこの けが あったかい！ けを かって セーターを つくるよ。めぇーめぇー と なくよ。', descEn: 'So fluffy and warm! Their wool is used to make sweaters. Baa baa!', trivia: 'かおを おぼえるのが とくい！50ぴき いじょうの なかまの かおを おぼえてるよ。', triviaEn: 'Sheep can remember the faces of over 50 other sheep for years!' },
    { img: 'images/chicken.jpg', name: 'にわとり', nameEn: 'Chicken', counter: 'わ', desc: 'まいあさ コケコッコー と なく とり。たまごを うんでくれるよ。とさかが かっこいい！', descEn: 'They crow every morning! Chickens lay eggs and have a cool red comb on their head.', trivia: 'きょうりゅうの しそん なんだよ！ティラノサウルスの とおい しんせき みたいだね。', triviaEn: 'Chickens are descendants of dinosaurs - they\'re distant relatives of T. Rex!' },
    { img: 'images/fox.jpg', name: 'きつね', nameEn: 'Fox', counter: 'ひき', desc: 'ふさふさの しっぽが じまん！ あたまが よくて、もりや のはらに すんでいるよ。コンコン！', descEn: 'Proud of their bushy tail! Foxes are clever and live in forests and fields.', trivia: 'ちきゅうの じばを つかって、ゆきの したの ネズミの ばしょが わかるんだよ！', triviaEn: 'Foxes use Earth\'s magnetic field to find mice hiding under the snow!' },
    { img: 'images/panda.jpg', name: 'ぱんだ', nameEn: 'Panda', counter: 'とう', desc: 'しろくろの もようが にんきもの！ ちゅうごくの やまに すんでいて、ささの はっぱが だいすき。', descEn: 'Everyone loves their black and white look! Pandas live in Chinese mountains and love bamboo.', trivia: '1にちに 12じかん いじょう ささを たべて、38キロも たべるんだよ！', triviaEn: 'Pandas spend over 12 hours a day eating and munch through 38 kg of bamboo!' },
    { img: 'images/penguin.jpg', name: 'ぺんぎん', nameEn: 'Penguin', counter: 'わ', desc: 'とべない とりだけど、およぐのが とくい！ こおりの うえを おなかで すべるよ。さむい ところが すき。', descEn: 'A bird that can\'t fly but is an amazing swimmer! They slide on their bellies on ice.', trivia: 'うみの なかでは じそく 36キロで およげるよ。オリンピックの せんしゅより ずっと はやい！', triviaEn: 'Penguins can swim at 36 km/h - way faster than any Olympic swimmer!' },
    { img: 'images/crab.jpg', name: 'かに', nameEn: 'Crab', counter: 'ひき', desc: 'おおきな ハサミが 2つ あるよ。よこむきに あるくのが とくちょう。こうらが かたいんだ！', descEn: 'Two big claws and a hard shell! Crabs are famous for walking sideways.', trivia: 'あしが とれても あたらしいのが はえてくるよ！すごい かいふくりょく！', triviaEn: 'If a crab loses a leg, it grows a brand new one back. Amazing healing power!' },
    { img: 'images/koala.jpg', name: 'こあら', nameEn: 'Koala', counter: 'とう', desc: 'オーストラリアに すんでいるよ。ユーカリの はっぱだけ たべるんだ。きの うえで ねむるよ。', descEn: 'Lives in Australia and only eats eucalyptus leaves. They sleep up in the trees!', trivia: '1にちに 20じかんも ねむるよ！らいおんより ねぼすけ なんだ。', triviaEn: 'Koalas sleep up to 20 hours a day - even more than lions!' },
    { img: 'images/gorilla.jpg', name: 'ごりら', nameEn: 'Gorilla', counter: 'とう', desc: 'おおきくて ちからもち！ むねを たたく ドラミングが ゆうめい。じつは やさしい せいかくだよ。', descEn: 'Big and powerful! Famous for chest-beating, but actually very gentle.', trivia: 'にんげんと DNA が 98パーセント おなじなんだよ！とおい しんせき だね。', triviaEn: 'Gorillas share 98% of their DNA with humans - we\'re distant relatives!' },
    { img: 'images/hippo.jpg', name: 'かば', nameEn: 'Hippopotamus', counter: 'とう', desc: 'おおきな くちを おおきく あけるよ。みずの なかが だいすき。アフリカに すんでいるんだ。', descEn: 'They open their huge mouth super wide! Hippos love the water and live in Africa.', trivia: 'あせが ピンクいろ なんだよ！ひやけどめの やくわりを しているんだ。', triviaEn: 'Hippos have pink sweat that works like sunscreen to protect their skin!' },
    { img: 'images/tiger.jpg', name: 'とら', nameEn: 'Tiger', counter: 'とう', desc: 'きいろに くろい しまもようが かっこいい！ネコかの さいきょう ハンター。ガオー！', descEn: 'Cool black stripes on orange fur! The strongest hunter in the cat family. Roar!', trivia: 'しまもようは けだけじゃ なくて、ひふにも あるんだよ！1とうずつ ちがう もよう。', triviaEn: 'Tiger stripes are not just on their fur - their skin underneath is striped too! Each tiger has a unique pattern.' },
    { img: 'images/deer.jpg', name: 'しか', nameEn: 'Deer', counter: 'とう', desc: 'りっぱな つのが じまん！もりに すんでいて、くさや きのみを たべるよ。にほんにも たくさん いるね。', descEn: 'Proud of their beautiful antlers! Deer live in forests and eat grass and berries.', trivia: 'つのは まいとし ぬけかわって、あたらしいのが はえてくるんだよ！', triviaEn: 'Deer shed their antlers every year and grow brand new ones!' },
    { img: 'images/raccoon.jpg', name: 'たぬき', nameEn: 'Raccoon Dog', counter: 'ひき', desc: 'まるい からだで よるに かつどう するよ。にほんの もりに すんでいるんだ。ポンポコ！', descEn: 'A round little animal active at night. They live in forests across Japan!', trivia: 'たぬきねいり は うそ。ほんとうに ねたふりが とくい なんだよ！', triviaEn: 'Raccoon dogs are really good at playing dead - they can fool predators!' },
    { img: 'images/wolf.jpg', name: 'おおかみ', nameEn: 'Wolf', counter: 'とう', desc: 'いぬの ごせんぞ。むれで きょうりょくして かりを するよ。とおぼえが ゆうめいだね。', descEn: 'The ancestor of dogs! Wolves hunt as a team and are famous for their howling.', trivia: 'とおぼえは 16キロさき まで とどくんだよ！なかまとの れんらくに つかうんだ。', triviaEn: 'A wolf\'s howl can be heard from 16 km away - that\'s how they talk to their pack!' },
    { img: 'images/camel.jpg', name: 'らくだ', nameEn: 'Camel', counter: 'とう', desc: 'せなかの こぶが とくちょう。さばくで くらせる すごい どうぶつ。「さばくの ふね」と よばれるよ。', descEn: 'Famous for the humps on their back! Camels can survive in the desert. Called "ships of the desert."', trivia: 'こぶの なかは しぼう なんだよ。みずを ためているんじゃ ないんだ！', triviaEn: 'Camel humps store fat, not water! The fat gives them energy when food is scarce.' },
    { img: 'images/kangaroo.jpg', name: 'かんがるー', nameEn: 'Kangaroo', counter: 'とう', desc: 'おなかの ふくろで あかちゃんを そだてるよ。おおきな あしで ぴょんぴょん とぶんだ！', descEn: 'Carries babies in a pouch on their belly. They hop around on big strong legs!', trivia: 'うしろに さがれないんだよ！だから オーストラリアの くにの マークに なったんだ。', triviaEn: 'Kangaroos can\'t walk backwards! That\'s why they\'re on Australia\'s coat of arms.' },
    { img: 'images/hamster.jpg', name: 'はむすたー', nameEn: 'Hamster', counter: 'ひき', desc: 'ちいさくて まるくて かわいい！ほっぺに たべものを つめこむのが とくい。くるくる まわるよ。', descEn: 'Small, round, and cute! Hamsters love stuffing food in their cheeks and running on wheels.', trivia: 'ほっぺぶくろに からだの はんぶんくらいの たべものを つめこめるんだよ！', triviaEn: 'They can stuff enough food in their cheek pouches to fill half their body size!' },
    { img: 'images/squirrel.jpg', name: 'りす', nameEn: 'Squirrel', counter: 'ひき', desc: 'ふさふさの しっぽで きを のぼるよ。どんぐりを あつめて かくすのが だいすき！', descEn: 'Climbs trees with a bushy tail. They love collecting and hiding acorns!', trivia: 'かくした どんぐりの ばしょを わすれちゃって、そこから きが はえるんだよ！もりを つくってるね。', triviaEn: 'They forget where they buried their acorns, and trees grow from them! They accidentally plant forests.' },
    { img: 'images/owl.jpg', name: 'ふくろう', nameEn: 'Owl', counter: 'わ', desc: 'よるに かつどう する とり。おおきな めで くらやみでも よく みえるよ。ホーホー！', descEn: 'A bird active at night with big eyes that see in the dark. Hoo hoo!', trivia: 'くびが 270ど もまわるんだよ！うしろを ふりかえらなくても みえちゃう。', triviaEn: 'They can turn their head 270 degrees! They can see behind themselves without turning around.' },
    { img: 'images/parrot.jpg', name: 'いんこ', nameEn: 'Parrot', counter: 'わ', desc: 'カラフルな はねが きれい！にんげんの ことばを まねするのが とくいだよ。', descEn: 'Beautiful colorful feathers! Parrots are great at copying human speech.', trivia: 'あじが わかるんだよ！すきな たべものと きらいな たべものが あるんだ。', triviaEn: 'They can taste food! They have favorite foods and foods they don\'t like.' },
    { img: 'images/flamingo.jpg', name: 'ふらみんご', nameEn: 'Flamingo', counter: 'わ', desc: 'ピンクいろの からだと ながい あしが きれい。いっぽんあしで たつのが とくいだよ。', descEn: 'Beautiful pink body and long legs. They\'re great at standing on one leg!', trivia: 'うまれたときは しろいんだよ！たべものの えびの いろで ピンクに なるんだ。', triviaEn: 'They\'re born white! They turn pink from eating shrimp.' },
    { img: 'images/swan.jpg', name: 'はくちょう', nameEn: 'Swan', counter: 'わ', desc: 'しろくて うつくしい おおきな とり。みずうみで ゆうがに およぐ すがたが すてきだね。', descEn: 'A beautiful big white bird that swims gracefully on lakes.', trivia: 'じつは とぶと じそく 100キロ いじょう でるんだよ！みかけに よらず すごい。', triviaEn: 'They can fly over 100 km/h! Way faster than they look.' },
    { img: 'images/rhino.jpg', name: 'さい', nameEn: 'Rhino', counter: 'とう', desc: 'おおきな つのと あつい ひふが とくちょう。アフリカや アジアに すんでいるよ。', descEn: 'Known for their big horn and thick skin. They live in Africa and Asia.', trivia: 'つのは かみのけと おなじ せいぶん でできているんだよ！かたいけど ほねじゃ ないんだ。', triviaEn: 'Their horn is made of the same stuff as human hair! It\'s hard but not bone.' },
    { img: 'images/zebra.jpg', name: 'しまうま', nameEn: 'Zebra', counter: 'とう', desc: 'しろと くろの しまもようが おしゃれ！アフリカの くさはらを むれで はしるよ。', descEn: 'Stylish black and white stripes! Zebras run in herds across African grasslands.', trivia: 'しまもようは 1とうずつ ちがうんだよ。にんげんの しもんと おなじだね！', triviaEn: 'Each zebra\'s stripe pattern is unique - just like human fingerprints!' },
    { img: 'images/snake.jpg', name: 'へび', nameEn: 'Snake', counter: 'ひき', desc: 'ながい からだで するする すすむよ。あしが ないのに とっても はやい！したを ぺろぺろ だして まわりを しらべるんだ。', descEn: 'Slithers along with a long body. Super fast without any legs! Flicks its tongue to sense its surroundings.', trivia: 'したを ぺろぺろ するのは においを かいでいるんだよ！したで くうきの においが わかるんだ。', triviaEn: 'When they flick their tongue, they\'re actually smelling the air! Their tongue picks up scent particles.' },
  ],
  bugs: [
    { img: 'images/butterfly.jpg', name: 'ちょうちょ', nameEn: 'Butterfly', counter: 'ひき', desc: 'きれいな はねで ひらひら とぶよ。おはなの みつを すうんだ。あおむしから へんしん するよ！', descEn: 'Flutters around with beautiful wings. They drink flower nectar and transform from caterpillars!', trivia: 'あじは あしで わかるんだよ！おはなに とまるだけで あまいか わかっちゃう。', triviaEn: 'They taste with their feet! Just by landing on a flower they can tell if it\'s sweet.' },
    { img: 'images/caterpillar.jpg', name: 'あおむし', nameEn: 'Caterpillar', counter: 'ひき', desc: 'はっぱを もりもり たべて おおきく なるよ。やがて さなぎに なって、ちょうちょに へんしん！', descEn: 'Munches on lots of leaves to grow big, then becomes a chrysalis and transforms into a butterfly!', trivia: 'さなぎの なかで からだが ぜんぶ ドロドロに とけて、つくりなおされるんだよ！', triviaEn: 'Inside the chrysalis, its whole body melts into goo and is rebuilt from scratch!' },
    { img: 'images/ladybug.jpg', name: 'てんとうむし', nameEn: 'Ladybug', counter: 'ひき', desc: 'あかい からだに くろい てんてんが ある ちいさな むし。アブラムシを たべて くれる いい むし！', descEn: 'A small bug with a red body and black dots. They eat aphids and help protect plants!', trivia: '1にちに アブラムシを 100ぴきも たべるよ！おはなを まもる ヒーロー！', triviaEn: 'They eat up to 100 aphids a day! A real hero for protecting flowers.' },
    { img: 'images/ant.jpg', name: 'あり', nameEn: 'Ant', counter: 'ひき', desc: 'ちいさいけど ちからもち！ じぶんの からだの なんばいも おもい ものを はこべるよ。なかま と きょうりょく するんだ。', descEn: 'Tiny but strong! They can carry many times their body weight and work as a team.', trivia: 'じぶんの たいじゅうの 50ばいの おもさを はこべるよ！にんげんなら くるまを もちあげる ちから！', triviaEn: 'They can carry 50 times their own weight! That\'s like a human lifting a car!' },
    { img: 'images/grasshopper.jpg', name: 'ばった', nameEn: 'Grasshopper', counter: 'ひき', desc: 'ながい あしで ぴょーん と とぶよ！ くさはらに すんでいて、くさを たべるんだ。', descEn: 'Jumps with long legs! Lives in grasslands and eats grass.', trivia: 'じぶんの からだの 20ばいの きょりを とべるよ！にんげんなら 30メートル ジャンプ！', triviaEn: 'They can jump 20 times their body length! That\'s like a human jumping 30 meters.' },
    { img: 'images/beetle.jpg', name: 'かぶとむし', nameEn: 'Beetle', counter: 'ひき', desc: 'おおきな つのが かっこいい！ なつの よる、きの みつに あつまるよ。こどもに だいにんき！', descEn: 'Cool big horn! Beetles gather at tree sap on summer nights. Super popular with kids!', trivia: 'じぶんの たいじゅうの 1000ばい いじょうの ものを うごかせるよ！せかいで いちばんの ちからもち。', triviaEn: 'They can move over 1000 times their own weight! The strongest creature on Earth.' },
    { img: 'images/bee.jpg', name: 'はち', nameEn: 'Bee', counter: 'ひき', desc: 'おはなの みつを あつめて はちみつを つくるよ。ぶんぶん とんで、おはなの おてつだいも するんだ。', descEn: 'Collects flower nectar to make honey. They buzz around helping flowers grow!', trivia: '1キロの はちみつを つくるのに、ちきゅうを 4しゅうも とぶ きょりを とぶんだよ！', triviaEn: 'To make 1 kg of honey, bees fly a distance equal to going around the Earth 4 times!' },
    { img: 'images/snail.jpg', name: 'かたつむり', nameEn: 'Snail', counter: 'ひき', desc: 'せなかに おうちを しょっているよ。あめの ひが だいすき。ゆっくり ゆっくり あるくんだ。', descEn: 'Carries a house on its back! Loves rainy days and moves very slowly.', trivia: 'はが 2まんぼん いじょう あるんだよ！ちいさすぎて めには みえないけどね。', triviaEn: 'They have over 20,000 teeth! They\'re too tiny to see with your eyes though.' },
    { img: 'images/dragonfly.jpg', name: 'とんぼ', nameEn: 'Dragonfly', counter: 'ひき', desc: 'おおきな めと 4まいの はねで すいすい とぶよ。くうちゅうで とまることも できるんだ！', descEn: 'Flies smoothly with big eyes and 4 wings. Can even hover in mid-air!', trivia: '3おくねん まえから いるんだよ！きょうりゅうより むかしから いる いきもの。', triviaEn: 'They\'ve been around for 300 million years! Even older than dinosaurs.' },
    { img: 'images/cicada.jpg', name: 'せみ', nameEn: 'Cicada', counter: 'ひき', desc: 'なつに ミーンミーンと おおきな こえで なくよ。つちの なかで なんねんも くらすんだ。', descEn: 'Buzzes loudly in summer! They live underground for many years before coming out.', trivia: 'つちの なかに 7ねんも いて、おとなに なってからは 2しゅうかん しか いきられないんだよ。', triviaEn: 'They live underground for 7 years but only live 2 weeks as adults!' },
    { img: 'images/firefly.jpg', name: 'ほたる', nameEn: 'Firefly', counter: 'ひき', desc: 'おしりが ひかる ふしぎな むし。なつの よるに きれいに ひかるよ。きれいな かわに すむんだ。', descEn: 'A magical bug whose tail glows! They light up beautifully on summer nights near clean rivers.', trivia: 'ひかりは ぜんぜん あつく ないんだよ！でんきゅうと ちがって ねつを ださない ひかりなんだ。', triviaEn: 'Their light produces zero heat! Unlike a light bulb, it\'s a cool light.' },
    { img: 'images/stagbeetle.jpg', name: 'くわがたむし', nameEn: 'Stag Beetle', counter: 'ひき', desc: 'おおきな アゴが かっこいい！かぶとむしと ならんで こどもに だいにんき。きの みつが だいすき。', descEn: 'Cool big jaws! Super popular with kids alongside beetles. They love tree sap.', trivia: 'アゴの ちからは じぶんの たいじゅうの 100ばい いじょう！ものすごい ちからもち。', triviaEn: 'Their jaw strength is over 100 times their body weight! Incredibly powerful.' },
    { img: 'images/mantis.jpg', name: 'かまきり', nameEn: 'Mantis', counter: 'ひき', desc: 'するどい かまで えものを つかまえるよ。くさや はなに かくれて まちぶせ するのが とくい！', descEn: 'Catches prey with sharp arms. Great at hiding in grass and flowers to ambush!', trivia: 'くびが 180ど まわるんだよ！むしの なかでは めずらしい のうりょく。', triviaEn: 'Their head can rotate 180 degrees! A rare ability among insects.' },
    { img: 'images/spider.jpg', name: 'くも', nameEn: 'Spider', counter: 'ひき', desc: 'すを はって えものを つかまえるよ。あしが 8ぽん あるんだ。じつは むしじゃ ないんだよ！', descEn: 'Catches prey in webs with 8 legs. They\'re actually not insects!', trivia: 'くもの いとは おなじ ふとさの はがねより つよいんだよ！すごい ざいりょう。', triviaEn: 'Spider silk is stronger than steel of the same thickness! An amazing material.' },
    { img: 'images/cricket.jpg', name: 'こおろぎ', nameEn: 'Cricket', counter: 'ひき', desc: 'あきの よるに リーンリーン ときれいな こえで なくよ。はねを こすりあわせて おとを だすんだ。', descEn: 'Sings beautifully on autumn nights. They make sounds by rubbing their wings together!', trivia: 'みみが あしに あるんだよ！まえあしで おとを きいているんだ。', triviaEn: 'Their ears are on their legs! They listen with their front legs.' },
    { img: 'images/pillbug.jpg', name: 'だんごむし', nameEn: 'Pill Bug', counter: 'ひき', desc: 'さわると まるく なる かわいい むし。おちばの したが だいすき。にわで よく みかけるね。', descEn: 'Rolls into a ball when touched! They love living under fallen leaves in gardens.', trivia: 'じつは むしじゃ なくて エビや カニの なかま なんだよ！こうかくるい だよ。', triviaEn: 'They\'re not actually bugs - they\'re related to shrimp and crabs! They\'re crustaceans.' },
  ],
  fish: [
    { img: 'images/fish.jpg', name: 'さかな', nameEn: 'Fish', counter: 'ひき', desc: 'うみや かわに すんでいるよ。エラで いきを して、ひれで およぐんだ。いろんな しゅるいが いるよ！', descEn: 'Lives in the sea and rivers. They breathe with gills and swim with fins. So many kinds!', trivia: 'みぎきき と ひだりきき が あるんだよ！にんげんと おなじだね。', triviaEn: 'Fish can be right-handed or left-handed, just like humans!' },
    { img: 'images/tropicalfish.jpg', name: 'ねったいぎょ', nameEn: 'Tropical Fish', counter: 'ひき', desc: 'カラフルで きれいな さかな！ あたたかい うみの サンゴしょうに すんでいるよ。', descEn: 'Colorful and beautiful fish! They live in coral reefs in warm seas.', trivia: 'くまのみは おすから めすへ せいべつが かわることが あるよ！ふしぎだね。', triviaEn: 'Clownfish can change from male to female! How amazing.' },
    { img: 'images/pufferfish.jpg', name: 'ふぐ', nameEn: 'Pufferfish', counter: 'ひき', desc: 'おこると からだを まんまるに ふくらませるよ！ どくを もっているから きをつけてね。', descEn: 'Puffs up into a round ball when angry! They have poison so be careful.', trivia: 'うみの そこに すなで おおきな アートを つくるんだよ。とっても きれいな もよう！', triviaEn: 'They create beautiful sand art on the ocean floor! Amazing patterns.' },
    { img: 'images/shark.jpg', name: 'さめ', nameEn: 'Shark', counter: 'ひき', desc: 'うみの ハンター！ するどい はが なんども はえかわるよ。じつは おとなしい しゅるいも おおいんだ。', descEn: 'The ocean\'s hunter! Their sharp teeth regrow many times. Most species are actually gentle.', trivia: 'いっしょうで 3まんぼん いじょうの はが はえかわるんだよ！はいしゃ いらず！', triviaEn: 'They grow over 30,000 teeth in a lifetime! No need for a dentist.' },
    { img: 'images/octopus.jpg', name: 'たこ', nameEn: 'Octopus', counter: 'ひき', desc: '8ぽんの あしが あるよ。すみを はいて にげることも できるんだ。あたまが とても いい！', descEn: 'Has 8 arms and can squirt ink to escape. Very smart!', trivia: 'うでの なかにも のうが あるんだよ！8ぽんの あしが じぶんで かんがえて うごくよ。', triviaEn: 'They have brains in their arms! Each of the 8 arms can think on its own.' },
    { img: 'images/squid.jpg', name: 'いか', nameEn: 'Squid', counter: 'ひき', desc: '10ぽんの あしが あるよ。すみを はく ことも できるし、いろを かえることも できるんだ！', descEn: 'Has 10 tentacles, can squirt ink, and even change colors!', trivia: 'ちが あおいろ なんだよ！にんげんの ちは あかいけど、いかは あお！', triviaEn: 'Their blood is blue! Human blood is red, but squid blood is blue.' },
    { img: 'images/shrimp.jpg', name: 'えび', nameEn: 'Shrimp', counter: 'ひき', desc: 'ながい ひげと まがった からだが とくちょう。エビフライや おすしで おなじみだね！', descEn: 'Long whiskers and a curved body. Famous in tempura and sushi!', trivia: 'しんぞうが あたまの なかに あるんだよ！にんげんとは ぜんぜん ちがうね。', triviaEn: 'Their heart is in their head! Very different from humans.' },
    { img: 'images/whale.jpg', name: 'くじら', nameEn: 'Whale', counter: 'とう', desc: 'うみで いちばん おおきい どうぶつ！ しおを ふく すがたが ゆうめい。じつは さかなじゃ ないんだよ。', descEn: 'The biggest animal in the ocean! Famous for spouting water. They\'re actually not fish.', trivia: 'こえが 1000キロさき まで とどくよ！でんわが なくても とおくの なかまと おはなし できるんだ。', triviaEn: 'Their voice can travel 1000 km! They can talk to faraway friends without a phone.' },
    { img: 'images/dolphin.jpg', name: 'いるか', nameEn: 'Dolphin', counter: 'とう', desc: 'あたまが よくて、にんげんと なかよし！ ジャンプが とくい。なかま と おしゃべり するよ。', descEn: 'Super smart and friendly with humans! Great at jumping and chatting with friends.', trivia: 'ねるとき のうを はんぶんずつ やすめるよ。かたほうの めは あけたまま ねるんだ！', triviaEn: 'When sleeping, they rest half their brain at a time, keeping one eye open!' },
    { img: 'images/turtle.jpg', name: 'かめ', nameEn: 'Turtle', counter: 'ひき', desc: 'かたい こうらで からだを まもるよ。ゆっくり あるくけど、およぐのは はやいんだ！', descEn: 'Protects itself with a hard shell. Walks slowly but swims fast!', trivia: '200さい いじょう いきる かめも いるんだよ！ちきゅうで いちばん ながいき。', triviaEn: 'Some turtles live over 200 years! The longest-living creatures on Earth.' },
    { img: 'images/frog.jpg', name: 'かえる', nameEn: 'Frog', counter: 'ひき', desc: 'ケロケロ なく かわいい いきもの。おたまじゃくしから へんしんするよ。ジャンプが とくい！', descEn: 'A cute creature that goes ribbit! Transforms from a tadpole. Great at jumping!', trivia: 'ひふで みずを のむんだよ！くちから のまなくても だいじょうぶ。', triviaEn: 'They drink water through their skin! They don\'t need to drink from their mouth.' },
    { img: 'images/jellyfish.jpg', name: 'くらげ', nameEn: 'Jellyfish', counter: 'ひき', desc: 'ふわふわ ただよう ふしぎな いきもの。からだの 95パーセントが みずなんだよ。', descEn: 'A mysterious creature that floats along. 95% of its body is water!', trivia: 'のうも しんぞうも ちも ないんだよ！それでも 5おくねん いじょう いきてきた すごい いきもの。', triviaEn: 'They have no brain, heart, or blood! Yet they\'ve survived for over 500 million years.' },
    { img: 'images/seahorse.jpg', name: 'たつのおとしご', nameEn: 'Seahorse', counter: 'ひき', desc: 'うまの かおに にた ふしぎな さかな。しっぽで かいそうに つかまるよ。', descEn: 'A mysterious fish that looks like a horse. They hold onto seaweed with their tail.', trivia: 'おとうさんが おなかで あかちゃんを そだてるんだよ！おかあさんじゃ ないんだ。', triviaEn: 'The dad carries the babies in his belly pouch, not the mom!' },
    { img: 'images/starfish.jpg', name: 'ひとで', nameEn: 'Starfish', counter: 'ひき', desc: 'ほしの かたちを した うみの いきもの。5ほんの うでが あるよ。いわに くっつくのが とくい。', descEn: 'A star-shaped sea creature with 5 arms. Great at sticking to rocks!', trivia: 'うでが きれても あたらしいのが はえてくるよ！うでから からだが まるごと はえることも。', triviaEn: 'If they lose an arm, a new one grows back! Sometimes a whole new body grows from one arm.' },
    { img: 'images/seal.jpg', name: 'あざらし', nameEn: 'Seal', counter: 'とう', desc: 'まるい からだで およぐのが だいすき。つめたい うみに すんでいて、さかなを たべるよ。', descEn: 'Round and loves swimming. Lives in cold seas and eats fish.', trivia: 'いきを 2じかん いじょう とめられるんだよ！ふかい うみにも もぐれるんだ。', triviaEn: 'They can hold their breath for over 2 hours! They dive deep into the ocean.' },
    { img: 'images/otter.jpg', name: 'らっこ', nameEn: 'Sea Otter', counter: 'とう', desc: 'うみに うかんで せなかの うえで かいを わるよ。てを つないで ねむるのが かわいい！', descEn: 'Floats on the sea and cracks shells on its belly. So cute when they hold hands while sleeping!', trivia: 'ねるとき なかまと てを つなぐのは ながされない ようにする ためなんだよ！', triviaEn: 'They hold hands while sleeping so they don\'t drift apart!' },
    { img: 'images/ray.jpg', name: 'えい', nameEn: 'Ray', counter: 'ひき', desc: 'ひらたい からだで うみの そこを すべるように およぐよ。マンタは とても おおきいんだ！', descEn: 'Glides along the ocean floor with a flat body. Manta rays are huge!', trivia: 'でんきを だす しゅるいも いるんだよ！でんきエイは 200ボルト いじょう だすよ。', triviaEn: 'Some rays can produce electricity! Electric rays can generate over 200 volts.' },
    { img: 'images/seaurchin.jpg', name: 'うに', nameEn: 'Sea Urchin', counter: 'ひき', desc: 'まるい からだに たくさんの トゲが あるよ。うみの そこで かいそうを たべているんだ。', descEn: 'A round body covered in spines. Lives on the ocean floor eating seaweed.', trivia: 'めが ないのに ひかりを かんじることが できるんだよ！からだ ぜんたいが めの やくわり。', triviaEn: 'They have no eyes but can sense light! Their whole body works like an eye.' },
  ],
};

// img パスに IMG_BASE を付与
Object.values(CREATURES).forEach(arr => {
  arr.forEach(item => { item.img = IMG_BASE + item.img; });
});

const ALL_ITEMS = [
  ...CREATURES.animals,
  ...CREATURES.bugs,
  ...CREATURES.fish,
];

const CATEGORIES = Object.keys(CREATURES);

// ===== VARIETIES データ（品種）=====
const VARIETIES_RAW = {
  'いぬ': [
    { img: 'images/varieties/shiba_inu.jpg', name: 'しばいぬ', nameEn: 'Shiba Inu', desc: 'にほん うまれの ちいさな いぬ。くるんと まいた しっぽが かわいい！', descEn: 'A small dog from Japan with a cute curled tail!' },
    { img: 'images/varieties/golden_retriever.jpg', name: 'ゴールデンレトリバー', nameEn: 'Golden Retriever', desc: 'きんいろの ながい け。やさしくて あたまが いいよ。もうどうけんにも なるんだ。', descEn: 'Golden long fur, gentle and smart. Often works as a guide dog!' },
    { img: 'images/varieties/poodle.jpg', name: 'プードル', nameEn: 'Poodle', desc: 'くるくるの けが おしゃれ！とっても あたまが いい いぬだよ。', descEn: 'Curly stylish fur! One of the smartest dog breeds.' },
    { img: 'images/varieties/chihuahua.jpg', name: 'チワワ', nameEn: 'Chihuahua', desc: 'せかいで いちばん ちいさい いぬ。おおきな めが とくちょう。', descEn: 'The world\'s smallest dog breed with big eyes!' },
    { img: 'images/varieties/dachshund.jpg', name: 'ダックスフント', nameEn: 'Dachshund', desc: 'からだが ながくて あしが みじかい！もとは あなぐら の かりを したよ。', descEn: 'Long body and short legs! Originally bred for hunting in burrows.' },
  ],
  'ねこ': [
    { img: 'images/varieties/american_shorthair.jpg', name: 'アメリカンショートヘア', nameEn: 'American Shorthair', desc: 'しましまの もようが きれい！げんき で じょうぶな ねこだよ。', descEn: 'Beautiful striped pattern! A healthy and active cat.' },
    { img: 'images/varieties/persian_cat.jpg', name: 'ペルシャ', nameEn: 'Persian', desc: 'ふわふわの ながい け。おとなしくて おっとりした せいかく。', descEn: 'Long fluffy fur with a calm, gentle personality.' },
    { img: 'images/varieties/scottish_fold.jpg', name: 'スコティッシュフォールド', nameEn: 'Scottish Fold', desc: 'おれまがった みみが かわいい！まるい かおが にんき。', descEn: 'Cute folded ears and a round face! Very popular.' },
    { img: 'images/varieties/siamese_cat.jpg', name: 'シャム', nameEn: 'Siamese', desc: 'クリームいろの からだに くろい かお。おしゃべりな ねこだよ。', descEn: 'Cream body with dark face. Very talkative cats!' },
    { img: 'images/varieties/munchkin_cat.jpg', name: 'マンチカン', nameEn: 'Munchkin', desc: 'あしが みじかくて ちょこちょこ あるく！とっても ひとなつっこい。', descEn: 'Short legs and a cute waddle! Very friendly.' },
  ],
  'くま': [
    { img: 'images/varieties/brown_bear.jpg', name: 'ヒグマ', nameEn: 'Brown Bear', desc: 'おおきな からだ！さかなを とるのが とくい。にほんの ほっかいどうにも いるよ。', descEn: 'Big body! Great at catching fish. Lives in Hokkaido, Japan too.' },
    { img: 'images/varieties/polar_bear.jpg', name: 'ホッキョクグマ', nameEn: 'Polar Bear', desc: 'しろい けで きたの こおりの うえに すむよ。およぎが とくい！', descEn: 'White fur, lives on northern ice. Great swimmers!' },
    { img: 'images/varieties/asian_black_bear.jpg', name: 'ツキノワグマ', nameEn: 'Asian Black Bear', desc: 'むねに しろい つきがたの もようが あるよ。にほんの もりに すんでいるんだ。', descEn: 'Has a white moon-shaped mark on the chest. Lives in Japanese forests.' },
    { img: 'images/varieties/sun_bear.jpg', name: 'マレーグマ', nameEn: 'Sun Bear', desc: 'せかいで いちばん ちいさい くま。したが とっても ながいよ。', descEn: 'The world\'s smallest bear. Has a very long tongue!' },
  ],
  'らいおん': [
    { img: 'images/varieties/african_lion.jpg', name: 'アフリカライオン', nameEn: 'African Lion', desc: 'りっぱな たてがみの おうさま。アフリカの サバンナに すむよ。', descEn: 'The king with a majestic mane. Lives in African savannas.' },
    { img: 'images/varieties/white_lion.jpg', name: 'ホワイトライオン', nameEn: 'White Lion', desc: 'しろい けの めずらしい らいおん。とくべつな いでんしを もっているんだ。', descEn: 'A rare lion with white fur due to special genes.' },
    { img: 'images/varieties/asiatic_lion.jpg', name: 'インドライオン', nameEn: 'Asiatic Lion', desc: 'インドに すむ らいおん。アフリカの より すこし ちいさいよ。', descEn: 'Lives in India. Slightly smaller than African lions.' },
  ],
  'ぞう': [
    { img: 'images/varieties/african_elephant.jpg', name: 'アフリカゾウ', nameEn: 'African Elephant', desc: 'りくで いちばん おおきい どうぶつ！みみが とても おおきいよ。', descEn: 'The largest land animal! Has very big ears.' },
    { img: 'images/varieties/asian_elephant.jpg', name: 'アジアゾウ', nameEn: 'Asian Elephant', desc: 'アフリカゾウより すこし ちいさい。にんげんと なかよしで おてつだいも するよ。', descEn: 'Slightly smaller than African elephants. Works closely with humans.' },
    { img: 'images/varieties/forest_elephant.jpg', name: 'マルミミゾウ', nameEn: 'Forest Elephant', desc: 'もりに すむ ちいさめの ぞう。まるい みみが とくちょう。', descEn: 'A smaller elephant that lives in forests with round ears.' },
  ],
  'きりん': [
    { img: 'images/varieties/masai_giraffe.jpg', name: 'マサイキリン', nameEn: 'Masai Giraffe', desc: 'ギザギザの もようが とくちょう。アフリカで いちばん おおい キリン。', descEn: 'Jagged pattern marks. The most common giraffe in Africa.' },
    { img: 'images/varieties/reticulated_giraffe.jpg', name: 'アミメキリン', nameEn: 'Reticulated Giraffe', desc: 'あみめ もようが とても きれい！どうぶつえんで よく みるよ。', descEn: 'Beautiful net-like pattern! Often seen in zoos.' },
    { img: 'images/varieties/northern_giraffe.jpg', name: 'キタキリン', nameEn: 'Northern Giraffe', desc: 'かずが とても すくない きちょうな キリン。まもらなきゃ！', descEn: 'A very rare giraffe. We need to protect them!' },
  ],
  'さる': [
    { img: 'images/varieties/japanese_macaque.jpg', name: 'ニホンザル', nameEn: 'Japanese Macaque', desc: 'あかい かおが とくちょう。おんせんに はいる さるが ゆうめい！', descEn: 'Red face is their trademark. Famous for bathing in hot springs!' },
    { img: 'images/varieties/chimpanzee.jpg', name: 'チンパンジー', nameEn: 'Chimpanzee', desc: 'にんげんに いちばん ちかい どうぶつ。どうぐも つかえるよ！', descEn: 'Our closest animal relative. They can even use tools!' },
    { img: 'images/varieties/orangutan.jpg', name: 'オランウータン', nameEn: 'Orangutan', desc: 'もりの ひと と いう いみの なまえ。あかちゃけの ながい け。', descEn: 'Their name means "person of the forest." Long reddish-brown hair.' },
    { img: 'images/varieties/gibbon.jpg', name: 'テナガザル', nameEn: 'Gibbon', desc: 'ながい うでで きの あいだを とびまわるよ。うたを うたうんだ！', descEn: 'Swings between trees with long arms. They sing songs!' },
  ],
  'きつね': [
    { img: 'images/varieties/red_fox.jpg', name: 'アカギツネ', nameEn: 'Red Fox', desc: 'いちばん よく みる きつね。あかちゃいろの きれいな け。', descEn: 'The most common fox with beautiful reddish-brown fur.' },
    { img: 'images/varieties/arctic_fox.jpg', name: 'ホッキョクギツネ', nameEn: 'Arctic Fox', desc: 'しろい けで ゆきに まぎれるよ。ふゆと なつで いろが かわる！', descEn: 'White fur blends into snow. Changes color between summer and winter!' },
    { img: 'images/varieties/fennec_fox.jpg', name: 'フェネック', nameEn: 'Fennec Fox', desc: 'おおきな みみの ちいさな きつね。さばくに すんでいるよ。', descEn: 'A tiny fox with huge ears. Lives in the desert!' },
  ],
  'うさぎ': [
    { img: 'images/varieties/holland_lop.jpg', name: 'ホーランドロップ', nameEn: 'Holland Lop', desc: 'たれた みみが かわいい！せかいで いちばん にんきの うさぎ。', descEn: 'Cute floppy ears! The world\'s most popular rabbit breed.' },
    { img: 'images/varieties/netherland_dwarf.jpg', name: 'ネザーランドドワーフ', nameEn: 'Netherland Dwarf', desc: 'ちいさくて まるい かお。ピーターラビットの モデルだよ！', descEn: 'Small with a round face. The model for Peter Rabbit!' },
    { img: 'images/varieties/lionhead_rabbit.jpg', name: 'ライオンヘッド', nameEn: 'Lionhead', desc: 'かおの まわりに たてがみ みたいな け。らいおんみたい！', descEn: 'Mane-like fur around their face. Like a tiny lion!' },
  ],
  'とら': [
    { img: 'images/varieties/bengal_tiger.jpg', name: 'ベンガルトラ', nameEn: 'Bengal Tiger', desc: 'インドに すむ おれんじいろの きれいな とら。いちばん おおい しゅるい。', descEn: 'Beautiful orange tiger living in India. The most common type.' },
    { img: 'images/varieties/siberian_tiger.jpg', name: 'シベリアトラ', nameEn: 'Siberian Tiger', desc: 'せかいで いちばん おおきい ネコか。さむい ロシアに すむよ。', descEn: 'The world\'s biggest cat. Lives in cold Russia.' },
    { img: 'images/varieties/white_tiger.jpg', name: 'ホワイトタイガー', nameEn: 'White Tiger', desc: 'しろい けに くろい しま。とても めずらしくて きれい！', descEn: 'White fur with black stripes. Very rare and beautiful!' },
  ],
  'さめ': [
    { img: 'images/varieties/great_white_shark.jpg', name: 'ホホジロザメ', nameEn: 'Great White Shark', desc: 'うみの さいきょう ハンター！おおきな からだで すごい はやさ。', descEn: 'The ocean\'s top predator! Big body and incredible speed.' },
    { img: 'images/varieties/whale_shark.jpg', name: 'ジンベエザメ', nameEn: 'Whale Shark', desc: 'せかいで いちばん おおきい さかな。でも とっても おとなしいよ。', descEn: 'The world\'s biggest fish, but very gentle!' },
    { img: 'images/varieties/hammerhead_shark.jpg', name: 'シュモクザメ', nameEn: 'Hammerhead Shark', desc: 'あたまが トンカチの かたち！よこに ついた めで ひろく みえるよ。', descEn: 'Hammer-shaped head! Eyes on the sides give them wide vision.' },
  ],
  'くじら': [
    { img: 'images/varieties/blue_whale.jpg', name: 'シロナガスクジラ', nameEn: 'Blue Whale', desc: 'ちきゅうで いちばん おおきい どうぶつ！しんぞうは くるまくらい。', descEn: 'The largest animal on Earth! Its heart is as big as a car.' },
    { img: 'images/varieties/humpback_whale.jpg', name: 'ザトウクジラ', nameEn: 'Humpback Whale', desc: 'すてきな うたを うたう くじら。おおきな ジャンプも するよ！', descEn: 'A whale that sings beautiful songs and makes amazing jumps!' },
    { img: 'images/varieties/sperm_whale.jpg', name: 'マッコウクジラ', nameEn: 'Sperm Whale', desc: 'ふかい うみに もぐるのが とくい。1000メートル いじょう もぐれるよ。', descEn: 'Great at deep diving - can go over 1000 meters deep!' },
  ],
  'いるか': [
    { img: 'images/varieties/bottlenose_dolphin.jpg', name: 'バンドウイルカ', nameEn: 'Bottlenose Dolphin', desc: 'いちばん ゆうめいな いるか。あたまが よくて にんげんと なかよし！', descEn: 'The most famous dolphin. Smart and friendly with humans!' },
    { img: 'images/varieties/orca.jpg', name: 'シャチ', nameEn: 'Orca', desc: 'うみの ギャング と よばれるけど、じつは いるかの なかま なんだよ！', descEn: 'Called "killer whales" but they\'re actually dolphins!' },
    { img: 'images/varieties/pacific_dolphin.jpg', name: 'カマイルカ', nameEn: 'Pacific White-sided Dolphin', desc: 'しろと くろの もようが かっこいい！ジャンプが とくい。', descEn: 'Cool black and white pattern! Amazing at jumping.' },
  ],
  'ぺんぎん': [
    { img: 'images/varieties/emperor_penguin.jpg', name: 'コウテイペンギン', nameEn: 'Emperor Penguin', desc: 'いちばん おおきい ぺんぎん。さむい なんきょくで たまごを そだてるよ。', descEn: 'The biggest penguin. Raises eggs in the freezing Antarctic!' },
    { img: 'images/varieties/adelie_penguin.jpg', name: 'アデリーペンギン', nameEn: 'Adélie Penguin', desc: 'まるい しろい めのまわりが かわいい！いしを プレゼントするよ。', descEn: 'Cute white eye rings! They give pebbles as gifts.' },
    { img: 'images/varieties/rockhopper_penguin.jpg', name: 'イワトビペンギン', nameEn: 'Rockhopper Penguin', desc: 'きいろの まゆげ みたいな かざりが かっこいい！いわを ぴょんぴょん とぶよ。', descEn: 'Cool yellow eyebrow plumes! Hops around on rocks.' },
  ],
  'かぶとむし': [
    { img: 'images/varieties/hercules_beetle.jpg', name: 'ヘラクレスオオカブト', nameEn: 'Hercules Beetle', desc: 'せかいで いちばん おおきい かぶとむし！つのが すごく ながいよ。', descEn: 'The world\'s largest beetle! Has an incredibly long horn.' },
    { img: 'images/varieties/caucasus_beetle.jpg', name: 'コーカサスオオカブト', nameEn: 'Caucasus Beetle', desc: '3ぼんの つのが ある アジアの おうさま！つよそう！', descEn: 'The king of Asia with 3 horns! Looks super strong!' },
    { img: 'images/varieties/japanese_beetle.jpg', name: 'ニホンカブトムシ', nameEn: 'Japanese Rhinoceros Beetle', desc: 'にほんの なつの スター！きの みつに あつまるよ。', descEn: 'Japan\'s summer star! Gathers at tree sap.' },
  ],
  'くわがたむし': [
    { img: 'images/varieties/giant_stag_beetle.jpg', name: 'オオクワガタ', nameEn: 'Giant Stag Beetle', desc: 'にほんで いちばん にんきの くわがた！おおきな アゴが かっこいい。', descEn: 'Japan\'s most popular stag beetle! Cool big jaws.' },
    { img: 'images/varieties/giraffe_stag_beetle.jpg', name: 'ギラファノコギリクワガタ', nameEn: 'Giraffe Stag Beetle', desc: 'せかいで いちばん おおきい くわがた。アゴが キリンの くびみたい！', descEn: 'The world\'s biggest stag beetle. Jaws like a giraffe\'s neck!' },
    { img: 'images/varieties/rainbow_stag_beetle.jpg', name: 'ニジイロクワガタ', nameEn: 'Rainbow Stag Beetle', desc: 'にじいろに ひかる きれいな くわがた！オーストラリアに いるよ。', descEn: 'A beautiful rainbow-colored beetle from Australia!' },
  ],
  'ちょうちょ': [
    { img: 'images/varieties/cabbage_white.jpg', name: 'モンシロチョウ', nameEn: 'Cabbage White', desc: 'しろい はねの おなじみの ちょうちょ。キャベツばたけに いるよ。', descEn: 'The familiar white butterfly often seen near cabbage patches.' },
    { img: 'images/varieties/swallowtail.jpg', name: 'アゲハチョウ', nameEn: 'Swallowtail', desc: 'おおきくて きれいな はね。しっぽが ながいのが とくちょう。', descEn: 'Big beautiful wings with long tail-like extensions.' },
    { img: 'images/varieties/monarch.jpg', name: 'オオカバマダラ', nameEn: 'Monarch Butterfly', desc: 'オレンジと くろの はね。4000キロも たびを するよ！', descEn: 'Orange and black wings. Migrates over 4000 km!' },
  ],
  'たこ': [
    { img: 'images/varieties/common_octopus.jpg', name: 'マダコ', nameEn: 'Common Octopus', desc: 'いちばん よく みる たこ。いろを かえるのが とくい！', descEn: 'The most common octopus. Expert at changing colors!' },
    { img: 'images/varieties/flapjack_octopus.jpg', name: 'メンダコ', nameEn: 'Flapjack Octopus', desc: 'まるくて ひらたい かわいい たこ。ふかい うみに すむよ。', descEn: 'A round, flat, adorable octopus from the deep sea.' },
    { img: 'images/varieties/blue_ringed_octopus.jpg', name: 'ヒョウモンダコ', nameEn: 'Blue-ringed Octopus', desc: 'あおい わが ひかる ちいさな たこ。どくが あるから きをつけて！', descEn: 'Small with glowing blue rings. Venomous - be careful!' },
  ],
  'ぶた': [
    { img: 'images/varieties/miniature_pig.jpg', name: 'ミニブタ', nameEn: 'Miniature Pig', desc: 'ちいさくて かわいい ぶた。ペットとして にんき なんだよ！', descEn: 'A small cute pig popular as a pet!' },
    { img: 'images/varieties/berkshire_pig.jpg', name: 'バークシャー', nameEn: 'Berkshire Pig', desc: 'くろい からだに しろい もようの おいしい ぶた。', descEn: 'A black pig with white markings, known for delicious meat.' },
    { img: 'images/varieties/wild_boar.jpg', name: 'イノシシ', nameEn: 'Wild Boar', desc: 'ぶたの ごせんぞ！やまの なかを はしりまわるよ。', descEn: 'The ancestor of pigs! Runs around in the mountains.' },
  ],
  'うし': [
    { img: 'images/varieties/holstein_cow.jpg', name: 'ホルスタイン', nameEn: 'Holstein', desc: 'しろと くろの もようが おなじみ。ぎゅうにゅうを たくさん だすよ。', descEn: 'The familiar black and white cow that produces lots of milk.' },
    { img: 'images/varieties/jersey_cow.jpg', name: 'ジャージー', nameEn: 'Jersey Cow', desc: 'ちゃいろの やさしい かお。こくのある おいしい ぎゅうにゅう！', descEn: 'Brown and gentle-faced. Makes rich, delicious milk!' },
    { img: 'images/varieties/wagyu_cow.jpg', name: 'わぎゅう', nameEn: 'Wagyu', desc: 'にほんの とくべつな うし。せかいで いちばん おいしい おにく！', descEn: 'Japan\'s special cattle. The most delicious beef in the world!' },
  ],
  'うま': [
    { img: 'images/varieties/thoroughbred.jpg', name: 'サラブレッド', nameEn: 'Thoroughbred', desc: 'けいばで はしる はやい うま。じそく 70キロも でるよ！', descEn: 'A fast racehorse that can reach 70 km/h!' },
    { img: 'images/varieties/pony.jpg', name: 'ポニー', nameEn: 'Pony', desc: 'ちいさくて かわいい うま。こどもが のるのに ぴったり！', descEn: 'A small cute horse perfect for children to ride!' },
    { img: 'images/varieties/clydesdale.jpg', name: 'クライズデール', nameEn: 'Clydesdale', desc: 'おおきくて ちからもちの うま。あしに ふさふさの けが あるよ。', descEn: 'A big strong horse with fluffy hair on its legs.' },
  ],
  'ひつじ': [
    { img: 'images/varieties/merino_sheep.jpg', name: 'メリノ', nameEn: 'Merino', desc: 'もこもこの けが いちばん ふわふわ！セーターに なるよ。', descEn: 'The fluffiest wool of all! Used to make sweaters.' },
    { img: 'images/varieties/suffolk_sheep.jpg', name: 'サフォーク', nameEn: 'Suffolk', desc: 'くろい かおと くろい あしが とくちょう。げんきな ひつじ！', descEn: 'Black face and black legs. A lively sheep!' },
    { img: 'images/varieties/bighorn_sheep.jpg', name: 'ビッグホーン', nameEn: 'Bighorn Sheep', desc: 'おおきな つのが くるんと まいている やまの ひつじ。', descEn: 'A mountain sheep with big curled horns.' },
  ],
  'にわとり': [
    { img: 'images/varieties/nagoya_cochin.jpg', name: 'コーチン', nameEn: 'Cochin', desc: 'ふわふわの おおきな にわとり。あしにも けが はえているよ。', descEn: 'A big fluffy chicken with feathered legs.' },
    { img: 'images/varieties/silkie_chicken.jpg', name: 'うこっけい', nameEn: 'Silkie', desc: 'ふわふわの しろい けが まるで わたあめ みたい！', descEn: 'Fluffy white feathers that look like cotton candy!' },
    { img: 'images/varieties/rooster.jpg', name: 'チャボ', nameEn: 'Bantam', desc: 'ちいさくて カラフルな にわとり。おおきな こえで なくよ。', descEn: 'A small colorful chicken with a loud crow.' },
  ],
  'ぱんだ': [
    { img: 'images/varieties/giant_panda.jpg', name: 'ジャイアントパンダ', nameEn: 'Giant Panda', desc: 'しろと くろの おおきな パンダ。ささを たべるのが だいすき！', descEn: 'The big black and white panda that loves eating bamboo!' },
    { img: 'images/varieties/qinling_panda.jpg', name: 'チンリンパンダ', nameEn: 'Qinling Panda', desc: 'ちゃいろと しろの めずらしい パンダ！ちゅうごくの しんれいさんみゃくに すんでいるよ。', descEn: 'A rare brown and white panda living in China\'s Qinling Mountains!' },
  ],
  'かに': [
    { img: 'images/varieties/king_crab.jpg', name: 'タラバガニ', nameEn: 'King Crab', desc: 'おおきな あしが おいしい！つめたい うみに すむよ。', descEn: 'Big delicious legs! Lives in cold seas.' },
    { img: 'images/varieties/snow_crab.jpg', name: 'ズワイガニ', nameEn: 'Snow Crab', desc: 'つめたい うみに すむ おいしい かに。あしが ながくて ほそいよ。', descEn: 'A delicious crab from cold seas with long, thin legs!' },
    { img: 'images/varieties/fiddler_crab.jpg', name: 'シオマネキ', nameEn: 'Fiddler Crab', desc: 'かたほうの はさみが とても おおきい！てを ふって ダンスするよ。', descEn: 'One claw is much bigger than the other! Waves it like a dance.' },
  ],
  'こあら': [
    { img: 'images/varieties/queensland_koala.jpg', name: 'キタコアラ', nameEn: 'Northern Koala', desc: 'ちいさめの コアラ。あたたかい ところに すんでいるよ。', descEn: 'A smaller koala living in warmer areas.' },
    { img: 'images/varieties/victoria_koala.jpg', name: 'ミナミコアラ', nameEn: 'Southern Koala', desc: 'おおきくて もこもこ。さむい ところの コアラは けが ふさふさ！', descEn: 'Bigger and fluffier. Koalas in cold areas have thicker fur!' },
    { img: 'images/varieties/nsw_koala.jpg', name: 'ニューサウスウェールズコアラ', nameEn: 'NSW Koala', desc: 'キタコアラと ミナミコアラの あいだの おおきさ。シドニーの ちかくにも いるよ。', descEn: 'Medium-sized koala found near Sydney and other parts of New South Wales!' },
  ],
  'ごりら': [
    { img: 'images/varieties/western_gorilla.jpg', name: 'ニシゴリラ', nameEn: 'Western Gorilla', desc: 'もりに すむ ゴリラ。くだものが だいすき！', descEn: 'Forest gorilla that loves fruit!' },
    { img: 'images/varieties/mountain_gorilla.jpg', name: 'マウンテンゴリラ', nameEn: 'Mountain Gorilla', desc: 'やまの たかい ところに すむ。ながい けで さむさに つよいよ。', descEn: 'Lives high in the mountains with long fur for the cold.' },
    { img: 'images/varieties/silverback.jpg', name: 'シルバーバック', nameEn: 'Silverback', desc: 'おとなの おすゴリラ。せなかが ぎんいろで むれの リーダーだよ！', descEn: 'Adult male gorilla with a silver back. Leader of the group!' },
  ],
  'かば': [
    { img: 'images/varieties/hippo.jpg', name: 'カバ', nameEn: 'Hippopotamus', desc: 'アフリカの かわに すむ おおきな カバ。くちが すごく おおきい！', descEn: 'Big hippo living in African rivers. Huge mouth!' },
    { img: 'images/varieties/pygmy_hippo.jpg', name: 'コビトカバ', nameEn: 'Pygmy Hippo', desc: 'ちいさくて かわいい カバ。もりの なかに すんでいるよ。', descEn: 'A small cute hippo living in forests.' },
  ],
  'しか': [
    { img: 'images/varieties/japanese_deer.jpg', name: 'ニホンジカ', nameEn: 'Sika Deer', desc: 'ならこうえんの おなじみ。おじぎを する かわいい しか！', descEn: 'The familiar deer of Nara Park that bows cutely!' },
    { img: 'images/varieties/reindeer.jpg', name: 'トナカイ', nameEn: 'Reindeer', desc: 'サンタさんの そりを ひく しか。さむい ところに すむよ。', descEn: 'The deer that pulls Santa\'s sleigh! Lives in cold places.' },
    { img: 'images/varieties/moose.jpg', name: 'ヘラジカ', nameEn: 'Moose', desc: 'せかいで いちばん おおきい しか。つのが てのひらみたい！', descEn: 'The world\'s largest deer with palm-shaped antlers!' },
  ],
  'たぬき': [
    { img: 'images/varieties/japanese_tanuki.jpg', name: 'ホンドタヌキ', nameEn: 'Japanese Tanuki', desc: 'にほんの もりに すむ タヌキ。むかしばなしに よく でるよ。', descEn: 'Lives in Japanese forests. Often appears in old folk tales!' },
    { img: 'images/varieties/ezo_tanuki.jpg', name: 'エゾタヌキ', nameEn: 'Ezo Raccoon Dog', desc: 'ほっかいどうに すむ タヌキ。ふゆは もこもこの けで さむさに つよいよ。', descEn: 'Lives in Hokkaido. Its thick winter fur keeps it warm in the cold!' },
    { img: 'images/varieties/continental_tanuki.jpg', name: 'タイリクタヌキ', nameEn: 'Continental Raccoon Dog', desc: 'アジアや ヨーロッパに すむ タヌキ。にほんの タヌキの とおい しんせき！', descEn: 'Lives in Asia and Europe. A distant relative of the Japanese tanuki!' },
  ],
  'おおかみ': [
    { img: 'images/varieties/gray_wolf.jpg', name: 'ハイイロオオカミ', nameEn: 'Gray Wolf', desc: 'いちばん おおきい オオカミ。むれで ちからを あわせて かりをするよ。', descEn: 'The biggest wolf. Hunts together in packs.' },
    { img: 'images/varieties/arctic_wolf.jpg', name: 'ホッキョクオオカミ', nameEn: 'Arctic Wolf', desc: 'しろい けの オオカミ。ゆきの なかでも へいき！', descEn: 'White-furred wolf. Not bothered by snow at all!' },
    { img: 'images/varieties/red_wolf.jpg', name: 'アカオオカミ', nameEn: 'Red Wolf', desc: 'あかちゃいろの けの めずらしい オオカミ。かずが とても すくないよ。', descEn: 'A rare wolf with reddish-brown fur. Very few left.' },
  ],
  'らくだ': [
    { img: 'images/varieties/dromedary.jpg', name: 'ヒトコブラクダ', nameEn: 'Dromedary', desc: 'コブが ひとつ。さばくで にもつを はこぶよ。', descEn: 'One hump. Carries loads in the desert.' },
    { img: 'images/varieties/bactrian_camel.jpg', name: 'フタコブラクダ', nameEn: 'Bactrian Camel', desc: 'コブが ふたつ。さむい さばくにも つよいよ。', descEn: 'Two humps. Tough even in cold deserts.' },
  ],
  'かんがるー': [
    { img: 'images/varieties/red_kangaroo.jpg', name: 'アカカンガルー', nameEn: 'Red Kangaroo', desc: 'いちばん おおきい カンガルー。2メートルも ジャンプ するよ！', descEn: 'The biggest kangaroo. Can jump over 2 meters!' },
    { img: 'images/varieties/wallaby.jpg', name: 'ワラビー', nameEn: 'Wallaby', desc: 'ちいさい カンガルーの なかま。すばしっこくて かわいい！', descEn: 'A small kangaroo relative. Quick and cute!' },
    { img: 'images/varieties/tree_kangaroo.jpg', name: 'キノボリカンガルー', nameEn: 'Tree Kangaroo', desc: 'きに のぼる カンガルー！もりの なかに すんでいるよ。', descEn: 'A tree-climbing kangaroo! Lives in the forest.' },
  ],
  'はむすたー': [
    { img: 'images/varieties/golden_hamster.jpg', name: 'ゴールデンハムスター', nameEn: 'Golden Hamster', desc: 'いちばん おおきい ハムスター。きんいろの けが きれい！', descEn: 'The biggest hamster with beautiful golden fur!' },
    { img: 'images/varieties/dwarf_hamster.jpg', name: 'ジャンガリアン', nameEn: 'Djungarian Hamster', desc: 'ちいさくて まんまるの ハムスター。てのひらに のるよ！', descEn: 'Small and round. Fits in the palm of your hand!' },
    { img: 'images/varieties/roborovski.jpg', name: 'ロボロフスキー', nameEn: 'Roborovski', desc: 'せかいで いちばん ちいさい ハムスター。はしるのが とくい！', descEn: 'The world\'s smallest hamster. Great at running!' },
  ],
  'りす': [
    { img: 'images/varieties/japanese_squirrel.jpg', name: 'ニホンリス', nameEn: 'Japanese Squirrel', desc: 'にほんの もりに すむ かわいい リス。どんぐりを かくすよ。', descEn: 'A cute squirrel in Japanese forests. Hides acorns!' },
    { img: 'images/varieties/chipmunk.jpg', name: 'シマリス', nameEn: 'Chipmunk', desc: 'せなかの しまもようが かわいい！ほっぺに たべものを ためるよ。', descEn: 'Cute stripes on its back! Stores food in its cheeks.' },
    { img: 'images/varieties/flying_squirrel.jpg', name: 'ムササビ', nameEn: 'Flying Squirrel', desc: 'そらを とぶ リス！まくを ひろげて きの あいだを とぶよ。', descEn: 'A flying squirrel! Glides between trees with its membrane.' },
  ],
  'ふくろう': [
    { img: 'images/varieties/barn_owl.jpg', name: 'メンフクロウ', nameEn: 'Barn Owl', desc: 'まっしろな かおが おめんみたい！よるに ネズミを つかまえるよ。', descEn: 'White face like a mask! Catches mice at night.' },
    { img: 'images/varieties/snowy_owl.jpg', name: 'シロフクロウ', nameEn: 'Snowy Owl', desc: 'まっしろで きれいな フクロウ。さむい ところに すむよ。', descEn: 'A beautiful white owl living in cold places.' },
    { img: 'images/varieties/eagle_owl.jpg', name: 'ワシミミズク', nameEn: 'Eagle Owl', desc: 'せかいで いちばん おおきい フクロウ。みみみたいな かざりが かっこいい！', descEn: 'The world\'s largest owl with cool ear-like tufts!' },
  ],
  'いんこ': [
    { img: 'images/varieties/budgerigar.jpg', name: 'セキセイインコ', nameEn: 'Budgerigar', desc: 'いちばん にんきの インコ。ことばを おぼえるのが とくい！', descEn: 'The most popular parrot. Great at learning words!' },
    { img: 'images/varieties/cockatiel.jpg', name: 'オカメインコ', nameEn: 'Cockatiel', desc: 'ほっぺが あかくて かわいい！くちぶえの まねも するよ。', descEn: 'Red cheeks are so cute! Can mimic whistles too.' },
    { img: 'images/varieties/macaw.jpg', name: 'コンゴウインコ', nameEn: 'Macaw', desc: 'おおきくて カラフル！100ねん いじょう いきる こともあるよ。', descEn: 'Big and colorful! Can live over 100 years.' },
  ],
  'さい': [
    { img: 'images/varieties/white_rhino.jpg', name: 'シロサイ', nameEn: 'White Rhino', desc: 'いちばん おおきい サイ。くちびるが ひろくて くさを たべるよ。', descEn: 'The biggest rhino with a wide lip for eating grass.' },
    { img: 'images/varieties/black_rhino.jpg', name: 'クロサイ', nameEn: 'Black Rhino', desc: 'とがった くちびるで きの はを たべるよ。かずが すくないんだ。', descEn: 'Pointed lip for eating tree leaves. Very few left.' },
    { img: 'images/varieties/indian_rhino.jpg', name: 'インドサイ', nameEn: 'Indian Rhino', desc: 'よろいみたいな かわが かっこいい！つのが 1ぽん。', descEn: 'Cool armor-like skin! Has just one horn.' },
  ],
  'しまうま': [
    { img: 'images/varieties/plains_zebra.jpg', name: 'サバンナシマウマ', nameEn: 'Plains Zebra', desc: 'いちばん よくみる しまうま。おなかにも しまが あるよ。', descEn: 'The most common zebra. Has stripes on its belly too.' },
    { img: 'images/varieties/grevys_zebra.jpg', name: 'グレビーシマウマ', nameEn: 'Grevy\'s Zebra', desc: 'いちばん おおきい しまうま。しまが ほそくて おしゃれ！', descEn: 'The biggest zebra with thin, stylish stripes!' },
    { img: 'images/varieties/mountain_zebra.jpg', name: 'ヤマシマウマ', nameEn: 'Mountain Zebra', desc: 'やまに すむ シマウマ。おしりに かくしもようが あるよ。', descEn: 'Mountain zebra with a grid pattern on its rump.' },
  ],
  'さかな': [
    { img: 'images/varieties/tuna.jpg', name: 'マグロ', nameEn: 'Tuna', desc: 'うみを すごい はやさで およぐ おおきな さかな。おすしで にんき！', descEn: 'A big fish that swims incredibly fast. Popular in sushi!' },
    { img: 'images/varieties/sea_bream.jpg', name: 'タイ', nameEn: 'Sea Bream', desc: 'あかくて きれいな おめでたい さかな。おいわいに だすよ！', descEn: 'A beautiful red fish served for celebrations!' },
    { img: 'images/varieties/salmon.jpg', name: 'サケ', nameEn: 'Salmon', desc: 'かわを さかのぼって たまごを うむよ。おにぎりの ぐにも なるね。', descEn: 'Swims upstream to lay eggs. Also a popular rice ball filling!' },
  ],
  'ねったいぎょ': [
    { img: 'images/varieties/clownfish.jpg', name: 'クマノミ', nameEn: 'Clownfish', desc: 'オレンジと しろの しましま。イソギンチャクに すんでいるよ。', descEn: 'Orange and white stripes. Lives in sea anemones!' },
    { img: 'images/varieties/angelfish.jpg', name: 'エンゼルフィッシュ', nameEn: 'Angelfish', desc: 'ひらべったくて きれいな さかな。すいそうの にんきもの！', descEn: 'Flat and beautiful fish. A favorite in aquariums!' },
    { img: 'images/varieties/tang_fish.jpg', name: 'ナンヨウハギ', nameEn: 'Blue Tang', desc: 'あおくて きれいな さかな。ドリーの モデルだよ！', descEn: 'A beautiful blue fish. The model for Dory!' },
  ],
  'ふぐ': [
    { img: 'images/varieties/tiger_puffer.jpg', name: 'トラフグ', nameEn: 'Tiger Puffer', desc: 'こうきゅうな たべもの！でも どくが あるから しょくにんさんが さばくよ。', descEn: 'A luxury food! But has poison so chefs must prepare it carefully.' },
    { img: 'images/varieties/porcupinefish.jpg', name: 'ハリセンボン', nameEn: 'Porcupinefish', desc: 'からだ じゅうに とげが ある！ふくらむと まるい ボールみたい。', descEn: 'Covered in spines! Puffs up into a spiky ball.' },
    { img: 'images/varieties/boxfish.jpg', name: 'ハコフグ', nameEn: 'Boxfish', desc: 'しかくい からだが おもしろい！ゆっくり およぐ かわいい さかな。', descEn: 'Square body is funny! A cute slow-swimming fish.' },
  ],
  'いか': [
    { img: 'images/varieties/firefly_squid.jpg', name: 'ホタルイカ', nameEn: 'Firefly Squid', desc: 'からだが ひかる ちいさな イカ。うみが あおく ひかるよ！', descEn: 'A small squid that glows! Makes the sea shine blue.' },
    { img: 'images/varieties/giant_squid.jpg', name: 'ダイオウイカ', nameEn: 'Giant Squid', desc: 'せかいで いちばん おおきい イカ。18メートルにも なるよ！', descEn: 'The world\'s biggest squid. Can reach 18 meters!' },
    { img: 'images/varieties/cuttlefish.jpg', name: 'コウイカ', nameEn: 'Cuttlefish', desc: 'いろを じゆうに かえられるよ。あたまが とても いいんだ！', descEn: 'Can freely change colors. Very intelligent!' },
  ],
  'えび': [
    { img: 'images/varieties/spiny_lobster.jpg', name: 'イセエビ', nameEn: 'Spiny Lobster', desc: 'おおきくて りっぱな えび。おしょうがつの おいわいに だすよ！', descEn: 'A big magnificent shrimp. Served for New Year celebrations!' },
    { img: 'images/varieties/mantis_shrimp.jpg', name: 'シャコ', nameEn: 'Mantis Shrimp', desc: 'パンチが すごく つよい！ガラスも われちゃう ちから！', descEn: 'Super powerful punch! Strong enough to break glass!' },
    { img: 'images/varieties/cherry_shrimp.jpg', name: 'サクラエビ', nameEn: 'Cherry Shrimp', desc: 'ピンクいろの ちいさな えび。かきあげに すると おいしいよ。', descEn: 'Tiny pink shrimp. Delicious when fried in tempura!' },
  ],
  'かめ': [
    { img: 'images/varieties/green_sea_turtle.jpg', name: 'アオウミガメ', nameEn: 'Green Sea Turtle', desc: 'おおきな ウミガメ。すなはまに たまごを うみに くるよ。', descEn: 'A big sea turtle that comes ashore to lay eggs on the beach.' },
    { img: 'images/varieties/galapagos_tortoise.jpg', name: 'ガラパゴスゾウガメ', nameEn: 'Galápagos Tortoise', desc: 'せかいで いちばん おおきい リクガメ。200さい いじょう いきるよ！', descEn: 'The world\'s largest tortoise. Lives over 200 years!' },
    { img: 'images/varieties/box_turtle.jpg', name: 'ハコガメ', nameEn: 'Box Turtle', desc: 'こうらを かんぜんに とじられるよ。はこみたいに ぱたん！', descEn: 'Can completely close its shell like a box. Snap!' },
  ],
  'かえる': [
    { img: 'images/varieties/tree_frog.jpg', name: 'アマガエル', nameEn: 'Tree Frog', desc: 'みどりいろの ちいさな カエル。きゅうばんで きに のぼれるよ。', descEn: 'A small green frog that can climb trees with suction cups!' },
    { img: 'images/varieties/poison_dart_frog.jpg', name: 'ヤドクガエル', nameEn: 'Poison Dart Frog', desc: 'カラフルで きれいだけど どくが あるよ！さわっちゃ ダメ。', descEn: 'Colorful but poisonous! Don\'t touch!' },
    { img: 'images/varieties/bullfrog.jpg', name: 'ウシガエル', nameEn: 'Bullfrog', desc: 'おおきな こえで なく カエル。「ブォー」って うしみたい！', descEn: 'A loud frog that sounds like a bull. "Broo!"' },
  ],
  'くらげ': [
    { img: 'images/varieties/moon_jellyfish.jpg', name: 'ミズクラゲ', nameEn: 'Moon Jellyfish', desc: 'とうめいで きれいな クラゲ。すいぞくかんの にんきもの！', descEn: 'Transparent and beautiful. An aquarium favorite!' },
    { img: 'images/varieties/lions_mane_jelly.jpg', name: 'ライオンタテガミクラゲ', nameEn: 'Lion\'s Mane Jellyfish', desc: 'せかいで いちばん おおきい クラゲ。しょくしゅが 30メートル！', descEn: 'The world\'s largest jellyfish. Tentacles up to 30 meters!' },
    { img: 'images/varieties/box_jellyfish.jpg', name: 'ハコクラゲ', nameEn: 'Box Jellyfish', desc: 'しかくい かたちの クラゲ。めが あって まわりが みえるんだよ！', descEn: 'Square-shaped jellyfish with eyes that can actually see!' },
  ],
  'たつのおとしご': [
    { img: 'images/varieties/common_seahorse.jpg', name: 'タツノオトシゴ', nameEn: 'Common Seahorse', desc: 'うまの かおに にた ふしぎな さかな。おとうさんが あかちゃんを うむよ！', descEn: 'A strange fish that looks like a horse. Dads give birth!' },
    { img: 'images/varieties/leafy_seadragon.jpg', name: 'リーフィーシードラゴン', nameEn: 'Leafy Seadragon', desc: 'かいそうに そっくり！じょうずに かくれるよ。', descEn: 'Looks just like seaweed! Great at hiding.' },
    { img: 'images/varieties/pygmy_seahorse.jpg', name: 'ピグミーシーホース', nameEn: 'Pygmy Seahorse', desc: '2センチしか ない！せかいで いちばん ちいさい タツノオトシゴ。', descEn: 'Only 2cm! The world\'s tiniest seahorse.' },
  ],
  'ひとで': [
    { img: 'images/varieties/blue_starfish.jpg', name: 'アオヒトデ', nameEn: 'Blue Starfish', desc: 'あおくて きれいな ヒトデ。サンゴしょうに すんでいるよ。', descEn: 'A beautiful blue starfish living in coral reefs.' },
    { img: 'images/varieties/crown_of_thorns.jpg', name: 'オニヒトデ', nameEn: 'Crown of Thorns', desc: 'とげだらけの おおきな ヒトデ。サンゴを たべちゃうんだ。', descEn: 'A big spiny starfish that eats coral.' },
    { img: 'images/varieties/sunflower_star.jpg', name: 'ヒマワリヒトデ', nameEn: 'Sunflower Star', desc: 'うでが 20ぽん いじょう！ひまわりみたいな おおきな ヒトデ。', descEn: 'Over 20 arms! A big starfish like a sunflower.' },
  ],
  'あざらし': [
    { img: 'images/varieties/harp_seal.jpg', name: 'タテゴトアザラシ', nameEn: 'Harp Seal', desc: 'あかちゃんは まっしろで ふわふわ！めが おおきくて かわいい。', descEn: 'Babies are pure white and fluffy! Big eyes are so cute.' },
    { img: 'images/varieties/elephant_seal.jpg', name: 'ゾウアザラシ', nameEn: 'Elephant Seal', desc: 'ぞうみたいな おおきな はな！いちばん おおきい アザラシ。', descEn: 'Big elephant-like nose! The largest seal.' },
    { img: 'images/varieties/spotted_seal.jpg', name: 'ゴマフアザラシ', nameEn: 'Spotted Seal', desc: 'からだに ごまみたいな もようが あるよ。にほんにも くるんだ！', descEn: 'Sesame-seed-like spots on its body. Visits Japan too!' },
  ],
  'らっこ': [
    { img: 'images/varieties/sea_otter.jpg', name: 'ラッコ', nameEn: 'Sea Otter', desc: 'おなかの うえで かいを わって たべるよ。てを つないで ねるんだ！', descEn: 'Cracks shells on its belly. Holds hands while sleeping!' },
    { img: 'images/varieties/river_otter.jpg', name: 'カワウソ', nameEn: 'River Otter', desc: 'かわで あそぶのが だいすき！すべりだいで あそぶ すがたが かわいい。', descEn: 'Loves playing in rivers! Cute when sliding down riverbanks.' },
    { img: 'images/varieties/giant_otter.jpg', name: 'オオカワウソ', nameEn: 'Giant Otter', desc: 'いちばん おおきい カワウソ。2メートルにも なるよ！', descEn: 'The biggest otter. Can reach 2 meters long!' },
  ],
  'えい': [
    { img: 'images/varieties/manta_ray.jpg', name: 'マンタ', nameEn: 'Manta Ray', desc: 'おおきな つばさで うみを とぶように およぐよ。やさしい きょじん！', descEn: 'Flies through the sea with big wings. A gentle giant!' },
    { img: 'images/varieties/stingray.jpg', name: 'アカエイ', nameEn: 'Stingray', desc: 'しっぽに どくの とげが ある！すなに かくれるのが とくい。', descEn: 'Venomous spine on its tail! Great at hiding in sand.' },
    { img: 'images/varieties/electric_ray.jpg', name: 'シビレエイ', nameEn: 'Electric Ray', desc: 'でんきを だして えものを つかまえるよ！ビリビリ！', descEn: 'Catches prey with electricity! Zap!' },
  ],
  'うに': [
    { img: 'images/varieties/purple_urchin.jpg', name: 'ムラサキウニ', nameEn: 'Purple Sea Urchin', desc: 'むらさきいろの きれいな ウニ。いわに くっついているよ。', descEn: 'Beautiful purple urchin. Clings to rocks.' },
    { img: 'images/varieties/long_spine_urchin.jpg', name: 'ガンガゼ', nameEn: 'Long-spined Urchin', desc: 'とげが とても ながい！ふむと いたいから きをつけてね。', descEn: 'Very long spines! Be careful not to step on them.' },
    { img: 'images/varieties/pencil_urchin.jpg', name: 'パイプウニ', nameEn: 'Pencil Urchin', desc: 'ふとくて まるい とげが えんぴつみたい！おもしろい かたち。', descEn: 'Thick round spines that look like pencils! Funny shape.' },
  ],
  'あおむし': [
    { img: 'images/varieties/swallowtail_caterpillar.jpg', name: 'アゲハのようちゅう', nameEn: 'Swallowtail Caterpillar', desc: 'みどりいろの おおきな ようちゅう。つのを だして おどかすよ！', descEn: 'A big green caterpillar that sticks out horns to scare enemies!' },
    { img: 'images/varieties/monarch_caterpillar.jpg', name: 'オオカバマダラのようちゅう', nameEn: 'Monarch Caterpillar', desc: 'きいろと くろの しましまが かっこいい！', descEn: 'Cool yellow and black stripes!' },
    { img: 'images/varieties/hornworm.jpg', name: 'スズメガのようちゅう', nameEn: 'Hornworm', desc: 'おしりに つのが ある おおきな ようちゅう。はっぱを もりもり たべるよ。', descEn: 'A big caterpillar with a horn on its tail. Eats lots of leaves!' },
  ],
  'てんとうむし': [
    { img: 'images/varieties/seven_spot_ladybug.jpg', name: 'ナナホシテントウ', nameEn: 'Seven-spot Ladybug', desc: 'あかい はねに くろい てんが 7つ。いちばん おなじみ！', descEn: 'Red wings with 7 black spots. The most familiar one!' },
    { img: 'images/varieties/asian_ladybug.jpg', name: 'ナミテントウ', nameEn: 'Asian Ladybug', desc: 'もようが いろいろ ちがう おもしろい テントウムシ。', descEn: 'Interesting ladybug with many different patterns.' },
    { img: 'images/varieties/yellow_ladybug.jpg', name: 'キイロテントウ', nameEn: 'Yellow Ladybug', desc: 'きいろい からだが めずらしい！カビを たべてくれるよ。', descEn: 'Rare yellow body! Eats mold to help plants.' },
  ],
  'あり': [
    { img: 'images/varieties/carpenter_ant.jpg', name: 'クロオオアリ', nameEn: 'Carpenter Ant', desc: 'にほんで いちばん おおきい アリ。きの なかに すを つくるよ。', descEn: 'Japan\'s biggest ant. Builds nests in wood.' },
    { img: 'images/varieties/fire_ant.jpg', name: 'ヒアリ', nameEn: 'Fire Ant', desc: 'さすと とても いたい！あかい いろの きけんな アリ。', descEn: 'Very painful sting! A dangerous red ant.' },
    { img: 'images/varieties/leaf_cutter_ant.jpg', name: 'ハキリアリ', nameEn: 'Leaf-cutter Ant', desc: 'はっぱを きって はこぶ すごい アリ！のうぎょうを するんだよ。', descEn: 'Amazing ants that cut and carry leaves! They farm mushrooms.' },
  ],
  'ばった': [
    { img: 'images/varieties/grasshopper.jpg', name: 'トノサマバッタ', nameEn: 'Grasshopper', desc: 'おおきくて みどりいろの バッタ。すごく とおくまで とべるよ！', descEn: 'A big green grasshopper that can jump really far!' },
    { img: 'images/varieties/locust.jpg', name: 'イナゴ', nameEn: 'Rice Locust', desc: 'たんぼに いる バッタ。おおむかしから にほんで たべられているよ。', descEn: 'Found in rice fields. Eaten in Japan since ancient times.' },
    { img: 'images/varieties/katydid.jpg', name: 'キリギリス', nameEn: 'Long-horned Grasshopper', desc: 'きれいな こえで なく バッタの なかま。ぎーぎー って なくよ。', descEn: 'A cricket relative with a beautiful chirp.' },
  ],
  'はち': [
    { img: 'images/varieties/honeybee.jpg', name: 'ミツバチ', nameEn: 'Honeybee', desc: 'はちみつを つくる はたらきもの！はなの みつを あつめるよ。', descEn: 'Hard workers that make honey! Collect nectar from flowers.' },
    { img: 'images/varieties/bumblebee.jpg', name: 'マルハナバチ', nameEn: 'Bumblebee', desc: 'まるくて ふわふわの かわいい ハチ。おとなしいよ。', descEn: 'Round and fluffy cute bee. Very gentle.' },
    { img: 'images/varieties/carpenter_bee.jpg', name: 'クマバチ', nameEn: 'Carpenter Bee', desc: 'おおきくて くろい ハチ。こわそうだけど やさしいんだよ。', descEn: 'Big and black bee. Looks scary but is actually gentle.' },
  ],
  'かたつむり': [
    { img: 'images/varieties/garden_snail.jpg', name: 'ニワカタツムリ', nameEn: 'Garden Snail', desc: 'まるい からに はいっている おなじみの カタツムリ。', descEn: 'The familiar snail with a round shell.' },
    { img: 'images/varieties/giant_african_snail.jpg', name: 'アフリカマイマイ', nameEn: 'Giant African Snail', desc: 'せかいで いちばん おおきい カタツムリ。30センチにも なるよ！', descEn: 'The world\'s biggest snail. Can reach 30cm!' },
    { img: 'images/varieties/sea_slug.jpg', name: 'ウミウシ', nameEn: 'Sea Slug', desc: 'カラフルで きれいな うみの カタツムリの なかま。からが ないよ。', descEn: 'Colorful beautiful sea slug. No shell!' },
  ],
  'とんぼ': [
    { img: 'images/varieties/red_dragonfly.jpg', name: 'アカトンボ', nameEn: 'Red Dragonfly', desc: 'あきに よく みる あかい トンボ。ゆうやけの そらを とぶよ。', descEn: 'A red dragonfly seen in autumn. Flies in the sunset sky.' },
    { img: 'images/varieties/blue_dragonfly.jpg', name: 'シオカラトンボ', nameEn: 'Blue Dragonfly', desc: 'あおい からだの トンボ。たんぼや いけの ちかくに いるよ。', descEn: 'Blue-bodied dragonfly found near rice fields and ponds.' },
    { img: 'images/varieties/damselfly.jpg', name: 'イトトンボ', nameEn: 'Damselfly', desc: 'ほそくて きれいな トンボ。はねを とじて とまるよ。', descEn: 'A thin beautiful dragonfly that rests with folded wings.' },
  ],
  'せみ': [
    { img: 'images/varieties/cicada_brown.jpg', name: 'アブラゼミ', nameEn: 'Large Brown Cicada', desc: 'にほんの なつの だいひょう！ジージー って おおきな こえ。', descEn: 'Japan\'s summer icon! Makes a loud buzzing sound.' },
    { img: 'images/varieties/periodical_cicada.jpg', name: 'ツクツクボウシ', nameEn: 'Japanese Evening Cicada', desc: 'なつの おわりに なく セミ。「ツクツクボーシ」って きこえるよ。', descEn: 'Chirps at summer\'s end. Sounds like "tsukutsuku-boshi"!' },
    { img: 'images/varieties/green_cicada.jpg', name: 'ミンミンゼミ', nameEn: 'Robust Cicada', desc: 'みどりいろの きれいな セミ。「ミーンミン」って なくよ。', descEn: 'A beautiful green cicada. Calls "meen-min"!' },
  ],
  'ほたる': [
    { img: 'images/varieties/japanese_firefly.jpg', name: 'ゲンジボタル', nameEn: 'Genji Firefly', desc: 'いちばん おおきい にほんの ホタル。きれいな みずの かわに いるよ。', descEn: 'Japan\'s biggest firefly. Found in clean rivers.' },
    { img: 'images/varieties/firefly_swarm.jpg', name: 'ヘイケボタル', nameEn: 'Heike Firefly', desc: 'たんぼに すむ ちいさな ホタル。ゲンジより すこし ちいさいよ。', descEn: 'A small firefly in rice paddies. Smaller than Genji.' },
    { img: 'images/varieties/glowworm.jpg', name: 'ツチボタル', nameEn: 'Glowing Firefly', desc: 'つちの うえで ひかる ホタル。ようちゅうも ひかるんだよ！', descEn: 'Glows on the ground. Even the larvae glow!' },
  ],
  'かまきり': [
    { img: 'images/varieties/green_mantis.jpg', name: 'オオカマキリ', nameEn: 'Giant Mantis', desc: 'にほんで いちばん おおきい カマキリ。おおきな かまで かりをするよ。', descEn: 'Japan\'s biggest mantis. Hunts with big scythes.' },
    { img: 'images/varieties/orchid_mantis.jpg', name: 'ハナカマキリ', nameEn: 'Orchid Mantis', desc: 'おはなに そっくり！ピンクいろで きれいだよ。', descEn: 'Looks just like a flower! Beautiful pink color.' },
    { img: 'images/varieties/dead_leaf_mantis.jpg', name: 'コノハカマキリ', nameEn: 'Dead Leaf Mantis', desc: 'かれはに そっくり！かくれるのが とくい。', descEn: 'Looks exactly like a dead leaf! Great at hiding.' },
  ],
  'くも': [
    { img: 'images/varieties/garden_spider.jpg', name: 'ジョロウグモ', nameEn: 'Garden Spider', desc: 'おおきな すを はる きれいな クモ。きんいろの すが きれいだよ。', descEn: 'A beautiful spider that makes big golden webs.' },
    { img: 'images/varieties/jumping_spider.jpg', name: 'ハエトリグモ', nameEn: 'Jumping Spider', desc: 'ぴょんぴょん とぶ ちいさな クモ。おおきな めが かわいい！', descEn: 'A tiny jumping spider with big cute eyes!' },
    { img: 'images/varieties/tarantula.jpg', name: 'タランチュラ', nameEn: 'Tarantula', desc: 'おおきくて けむくじゃらの クモ。みためは こわいけど おとなしいよ。', descEn: 'Big and hairy spider. Looks scary but is actually calm.' },
  ],
  'こおろぎ': [
    { img: 'images/varieties/field_cricket.jpg', name: 'エンマコオロギ', nameEn: 'Field Cricket', desc: 'にほんで いちばん おおきい コオロギ。「コロコロ」って なくよ。', descEn: 'Japan\'s biggest cricket. Chirps "koro-koro"!' },
    { img: 'images/varieties/bell_cricket.jpg', name: 'スズムシ', nameEn: 'Bell Cricket', desc: 'すずの ような きれいな こえで なくよ。「リーンリーン」！', descEn: 'Chirps with a beautiful bell-like sound. "Reen-reen"!' },
    { img: 'images/varieties/mole_cricket.jpg', name: 'ケラ', nameEn: 'Mole Cricket', desc: 'つちの なかに すむ コオロギ。およげるし とべるし もぐれるよ！', descEn: 'Lives underground. Can swim, fly, AND dig!' },
  ],
  'だんごむし': [
    { img: 'images/varieties/pillbug.jpg', name: 'オカダンゴムシ', nameEn: 'Pill Bug', desc: 'まるまる まるくなるのが とくい！おちばの したに いるよ。', descEn: 'Great at rolling into a ball! Found under fallen leaves.' },
    { img: 'images/varieties/woodlouse.jpg', name: 'ワラジムシ', nameEn: 'Woodlouse', desc: 'ダンゴムシに にてるけど まるまれない。ひらたい からだだよ。', descEn: 'Looks like a pill bug but can\'t roll up. Flat body.' },
    { img: 'images/varieties/giant_isopod.jpg', name: 'ダイオウグソクムシ', nameEn: 'Giant Isopod', desc: 'ふかい うみの おおきな ダンゴムシ！45センチにも なるよ。', descEn: 'A giant deep-sea pill bug! Can reach 45cm!' },
  ],
  'へび': [
    { img: 'images/varieties/king_cobra.jpg', name: 'キングコブラ', nameEn: 'King Cobra', desc: 'せかいで いちばん ながい どくへび。くびを ひろげて いかく するよ。', descEn: 'The world\'s longest venomous snake. Spreads its hood to intimidate!' },
    { img: 'images/varieties/ball_python.jpg', name: 'ボールニシキヘビ', nameEn: 'Ball Python', desc: 'まるくなるのが とくい！おとなしくて ペットとしても にんき。', descEn: 'Curls into a ball when scared! Gentle and popular as pets.' },
    { img: 'images/varieties/green_tree_snake.jpg', name: 'ミドリニシキヘビ', nameEn: 'Green Tree Python', desc: 'みどりいろで きの えだに まきつくよ。とても きれいな へび。', descEn: 'Bright green and wraps around tree branches. A very beautiful snake.' },
  ],
};

const VARIETIES = {};
Object.keys(VARIETIES_RAW).forEach(key => {
  VARIETIES[key] = VARIETIES_RAW[key].map(v => ({
    ...v,
    img: v.img ? IMG_BASE + v.img : undefined
  }));
});

// ===== 生息地データ =====
const HABITATS = {
  'いぬ': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'ねこ': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'うさぎ': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'くま': { regions: ['north_america', 'europe', 'asia'], ja: 'きたアメリカ・ヨーロッパ・アジア', en: 'North America, Europe & Asia' },
  'ぞう': { regions: ['africa', 'asia'], ja: 'アフリカ・アジア', en: 'Africa & Asia' },
  'らいおん': { regions: ['africa', 'asia'], ja: 'アフリカ・インド', en: 'Africa & India' },
  'さる': { regions: ['asia', 'africa', 'south_america'], ja: 'アジア・アフリカ・みなみアメリカ', en: 'Asia, Africa & South America' },
  'きりん': { regions: ['africa'], ja: 'アフリカ', en: 'Africa' },
  'ぶた': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'うし': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'うま': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'ひつじ': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'にわとり': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'きつね': { regions: ['north_america', 'europe', 'asia', 'africa'], ja: 'きたアメリカ・ヨーロッパ・アジア・アフリカ', en: 'N. America, Europe, Asia & Africa' },
  'ぱんだ': { regions: ['asia'], ja: 'ちゅうごくの やま', en: 'Mountains of China' },
  'ぺんぎん': { regions: ['antarctic', 'south_america', 'oceania'], ja: 'なんきょく・みなみアメリカ・オセアニア', en: 'Antarctic, S. America & Oceania' },
  'かに': { regions: ['worldwide', 'ocean'], ja: 'せかいの うみや かわ', en: 'Oceans & rivers worldwide' },
  'こあら': { regions: ['oceania'], ja: 'オーストラリア', en: 'Australia' },
  'ごりら': { regions: ['africa'], ja: 'アフリカの もり', en: 'Forests of Africa' },
  'かば': { regions: ['africa'], ja: 'アフリカの かわや みずうみ', en: 'Rivers & lakes of Africa' },
  'とら': { regions: ['asia'], ja: 'アジア', en: 'Asia' },
  'しか': { regions: ['north_america', 'europe', 'asia', 'japan'], ja: 'きたアメリカ・ヨーロッパ・アジア・にほん', en: 'N. America, Europe, Asia & Japan' },
  'たぬき': { regions: ['asia', 'japan'], ja: 'にほん・ひがしアジア', en: 'Japan & East Asia' },
  'おおかみ': { regions: ['north_america', 'europe', 'asia'], ja: 'きたアメリカ・ヨーロッパ・アジア', en: 'North America, Europe & Asia' },
  'らくだ': { regions: ['africa', 'asia'], ja: 'アフリカ・アジアの さばく', en: 'Deserts of Africa & Asia' },
  'かんがるー': { regions: ['oceania'], ja: 'オーストラリア', en: 'Australia' },
  'はむすたー': { regions: ['europe', 'asia'], ja: 'ヨーロッパ・アジア', en: 'Europe & Asia' },
  'りす': { regions: ['north_america', 'europe', 'asia'], ja: 'きたアメリカ・ヨーロッパ・アジア', en: 'North America, Europe & Asia' },
  'ふくろう': { regions: ['worldwide'], ja: 'なんきょく いがいの せかいじゅう', en: 'Worldwide except Antarctica' },
  'いんこ': { regions: ['south_america', 'oceania', 'africa', 'asia'], ja: 'みなみアメリカ・オセアニア・アフリカ・アジア', en: 'S. America, Oceania, Africa & Asia' },
  'ふらみんご': { regions: ['africa', 'south_america', 'europe', 'asia'], ja: 'アフリカ・みなみアメリカ・みなみヨーロッパ', en: 'Africa, S. America & S. Europe' },
  'はくちょう': { regions: ['north_america', 'europe', 'asia'], ja: 'きたアメリカ・ヨーロッパ・アジア', en: 'North America, Europe & Asia' },
  'さい': { regions: ['africa', 'asia'], ja: 'アフリカ・みなみアジア', en: 'Africa & South Asia' },
  'しまうま': { regions: ['africa'], ja: 'アフリカの くさはら', en: 'African grasslands' },
  'へび': { regions: ['worldwide'], ja: 'なんきょく いがいの せかいじゅう', en: 'Worldwide except Antarctica' },
  'ちょうちょ': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'あおむし': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'てんとうむし': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'あり': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'ばった': { regions: ['worldwide'], ja: 'せかいじゅうの くさはら', en: 'Grasslands worldwide' },
  'かぶとむし': { regions: ['asia', 'japan'], ja: 'にほん・アジア', en: 'Japan & Asia' },
  'はち': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'かたつむり': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'とんぼ': { regions: ['worldwide'], ja: 'せかいじゅうの みずべ', en: 'Near water worldwide' },
  'せみ': { regions: ['worldwide'], ja: 'あたたかい ちいき', en: 'Warm regions worldwide' },
  'ほたる': { regions: ['worldwide'], ja: 'きれいな みずが ある あたたかい ちいき', en: 'Warm areas with clean water' },
  'くわがたむし': { regions: ['worldwide'], ja: 'せかいじゅうの もり', en: 'Forests worldwide' },
  'かまきり': { regions: ['worldwide'], ja: 'あたたかい ちいき', en: 'Warm regions worldwide' },
  'くも': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'こおろぎ': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'だんごむし': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'さかな': { regions: ['worldwide', 'ocean'], ja: 'せかいじゅうの うみや かわ', en: 'Oceans & rivers worldwide' },
  'ねったいぎょ': { regions: ['ocean'], ja: 'あたたかい うみの サンゴしょう', en: 'Coral reefs in warm seas' },
  'ふぐ': { regions: ['ocean', 'asia'], ja: 'あたたかい うみ', en: 'Warm seas' },
  'さめ': { regions: ['ocean'], ja: 'せかいじゅうの うみ', en: 'Oceans worldwide' },
  'たこ': { regions: ['ocean'], ja: 'せかいじゅうの うみ', en: 'Oceans worldwide' },
  'いか': { regions: ['ocean'], ja: 'せかいじゅうの うみ', en: 'Oceans worldwide' },
  'えび': { regions: ['ocean'], ja: 'せかいじゅうの うみや かわ', en: 'Oceans & rivers worldwide' },
  'くじら': { regions: ['ocean'], ja: 'せかいじゅうの うみ', en: 'Oceans worldwide' },
  'いるか': { regions: ['ocean'], ja: 'せかいじゅうの うみ', en: 'Oceans worldwide' },
  'かめ': { regions: ['worldwide', 'ocean'], ja: 'せかいじゅうの りく・うみ・かわ', en: 'Land, sea & rivers worldwide' },
  'かえる': { regions: ['worldwide'], ja: 'せかいじゅう', en: 'Worldwide' },
  'くらげ': { regions: ['ocean'], ja: 'せかいじゅうの うみ', en: 'Oceans worldwide' },
  'たつのおとしご': { regions: ['ocean'], ja: 'あたたかい うみの あさい ところ', en: 'Shallow warm seas' },
  'ひとで': { regions: ['ocean'], ja: 'せかいじゅうの うみ', en: 'Oceans worldwide' },
  'あざらし': { regions: ['arctic', 'antarctic', 'ocean'], ja: 'きたと みなみの つめたい うみ', en: 'Cold seas of Arctic & Antarctic' },
  'らっこ': { regions: ['north_america', 'ocean'], ja: 'きたたいへいようの うみ', en: 'North Pacific Ocean' },
  'えい': { regions: ['ocean'], ja: 'せかいじゅうの うみ', en: 'Oceans worldwide' },
  'うに': { regions: ['ocean'], ja: 'せかいじゅうの うみの そこ', en: 'Ocean floors worldwide' },
};

function catName(key) {
  const map = {
    animals: { ja: 'どうぶつ', en: 'Animals' },
    bugs: { ja: 'むし', en: 'Bugs' },
    fish: { ja: 'さかな・うみ', en: 'Sea Life' },
  };
  return map[key] ? (getLang() === 'en' ? map[key].en : map[key].ja) : key;
}

// ===== 図鑑ロジック =====
let zukanCurrentFilter = null;

function showZukanList(filterCat, noAnim) {
  zukanCurrentFilter = filterCat;
  const container = document.getElementById('zukan-content');
  container.innerHTML = '';
  container.className = 'zukan-list-view';
  if (!noAnim) container.classList.add('zukan-anim-fadein');

  const tabs = document.createElement('div');
  tabs.className = 'zukan-tabs';
  const allCats = [{ key: null, label: t('ぜんぶ', 'All') }, ...CATEGORIES.map(c => ({ key: c, label: catName(c) }))];
  allCats.forEach(cat => {
    const tab = document.createElement('button');
    tab.className = 'zukan-tab' + (filterCat === cat.key ? ' active' : (!filterCat && !cat.key ? ' active' : ''));
    tab.textContent = cat.label;
    tab.addEventListener('click', () => showZukanList(cat.key, true));
    tabs.appendChild(tab);
  });
  container.appendChild(tabs);

  const grid = document.createElement('div');
  grid.className = 'zukan-grid';
  const cats = filterCat ? [filterCat] : CATEGORIES;
  let delay = 0;
  cats.forEach(cat => {
    CREATURES[cat].forEach(item => {
      const card = document.createElement('button');
      card.className = 'zukan-item zukan-anim-pop';
      card.style.animationDelay = `${delay}ms`;
      delay += 20;
      card.innerHTML = `<img src="${item.img}" alt="${itemName(item)}" draggable="false"><span>${itemName(item)}</span>`;
      card.addEventListener('click', () => showZukanDetail(item));
      grid.appendChild(card);
    });
  });
  container.appendChild(grid);
}

// ===== 世界地図SVG =====
// 世界地図SVGパス（日本中心）
const WORLD_MAP_PATHS = 'M118,390.5L111.5,389L111.5,384L106.5,377L105.5,367L100.5,359L104.5,346L96.5,331L97.5,322L91,321.5L87,317.5L80,320.5L74,319.5L67,321.5L59.5,316L52.5,304L52.5,290L58.5,280L64.5,276L65.5,270L70.5,266L70.5,262L67,261.5L65.5,258L65.5,248L67,246.5L77,247.5L79.5,241L73.5,235L76,233.5L78,234.5L79,231.5L81,232.5L83.5,230L71.5,231L74.5,224L73.5,222L75.5,221L74,218.5L70,226.5L63.5,227L66.5,217L71.5,216L69.5,207L76.5,206L75.5,208L78.5,209L77.5,214L85.5,225L84,227.5L86,227.5L89,222.5L96.5,220L94.5,212L98,208.5L99.5,209L99.5,214L102.5,214L99,204.5L96,208.5L90.5,207L89.5,195L100.5,184L103.5,175L106.5,173L107.5,170L104.5,170L107,165.5L109,166.5L110,163.5L117,161.5L123,156.5L129,155.5L133.5,159L134,162.5L136,161.5L138,164.5L142,164.5L150.5,172L151.5,176L148,179.5L137.5,177L144,187.5L143,182.5L148,184.5L147.5,181L151,177.5L155.5,177L155,167.5L159,168.5L160.5,171L157.5,173L159,175.5L161,175.5L161.5,173L170,166.5L172.5,167L173,169.5L178,166.5L182,167.5L182,162.5L187,162.5L196,168.5L192.5,156L195.5,153L198,145.5L204.5,148L204,152.5L206.5,150L206,144.5L209,150.5L212,147.5L219,152.5L219.5,151L216.5,149L216.5,143L225,140.5L226.5,139L225.5,135L238,125.5L243,126.5L250,122.5L251.5,117L257,113.5L259.5,115L262,122.5L263,120.5L267,120.5L270.5,122L272.5,126L272.5,132L266.5,139L272,141.5L280,141.5L281,144.5L287,146.5L290,140.5L293,141.5L293.5,148L298.5,152L300,156.5L302.5,155L303,151.5L306,153.5L310,152.5L312,154.5L313,152.5L315.5,153L313.5,150L318,146.5L326,147.5L331,149.5L338,157.5L342,155.5L348,156.5L352,163.5L361,163.5L365,161.5L364.5,165L367,166.5L367,161.5L377,161.5L400.5,179L395,186.5L391,185.5L384,179.5L383.5,184L379.5,185L383.5,191L383,193.5L375,195.5L367,202.5L364,200.5L357,202.5L354.5,206L355.5,214L353.5,215L353.5,219L350.5,220L346,228.5L344,228.5L342.5,225L342.5,212L355.5,198L355,196.5L350,200.5L349.5,196L347,195.5L341.5,202L342.5,204L336,206.5L334,203.5L327,205.5L322,204.5L309.5,218L312,220.5L317,219.5L319,221.5L320.5,221L319.5,219L321.5,219L323.5,230L323.5,233L321.5,234L322.5,241L318.5,241L319,227.5L317.5,234L311.5,244L306,249.5L303,248.5L299.5,251L296.5,256L299.5,264L295,267.5L292.5,267L293.5,261L290.5,260L290,255.5L285,257.5L285,253.5L280,257.5L282,260.5L285,259.5L287.5,261L282.5,265L286.5,271L286.5,277L282.5,284L277,289.5L268,291.5L268.5,295L266,297.5L263.5,297L265,291.5L259.5,295L265.5,304L264,310.5L257,313.5L249.5,306L248.5,312L250.5,316L255.5,319L255.5,324L257.5,326L255.5,328L260.5,331L259.5,338L272,339.5L274.5,341L274,343.5L260,341.5L250.5,333L247.5,327L240.5,320L241,318.5L245,318.5L249.5,322L249.5,319L245.5,314L246.5,307L244.5,301L242,302.5L239.5,301L235,290.5L228,291.5L226,295.5L216.5,302L215.5,311L218.5,313L219.5,317L216,318.5L214,313.5L212,315.5L209.5,314L202.5,296L203,292.5L198,292.5L192,284.5L184,285.5L177,283.5L176.5,285L182.5,289L178.5,296L169,302.5L154.5,308L157,310.5L167,307.5L167.5,313L163.5,320L149.5,333L147.5,340L150.5,348L150.5,354L140.5,363L141.5,371L136.5,373L135.5,380L126,389.5Z M573,440.5L568,440.5L561.5,436L557.5,423L559.5,419L559.5,411L561.5,410L559.5,406L561.5,394L564.5,388L566.5,360L556.5,353L552.5,343L548.5,339L548.5,330L554.5,322L553.5,315L552,314.5L551,316.5L546,315.5L541,312.5L537,306.5L532,305.5L527,301.5L522,302.5L512,298.5L507.5,294L507.5,290L497,278.5L502.5,289L500,289.5L496.5,286L488.5,271L481.5,266L475.5,255L475.5,236L470.5,231L465.5,218L459,213.5L451,203.5L439,201.5L438,199.5L437,202.5L430,204.5L430,201.5L426.5,208L430.5,207L430.5,210L428,212.5L426,212.5L425,209.5L419,215.5L408.5,219L420.5,209L420,206.5L414,207.5L412.5,203L407.5,201L406.5,194L409,189.5L415,188.5L414.5,186L407,186.5L403.5,182L403.5,180L409,176.5L411,178.5L414.5,178L405.5,170L405.5,167L410,165.5L416,157.5L424,154.5L430,156.5L431,158.5L446,160.5L456,166.5L457,163.5L461,164.5L471,158.5L474,163.5L481,161.5L487,165.5L491,165.5L487.5,163L487.5,161L494.5,159L486.5,158L486,149.5L481,156.5L473.5,151L473.5,147L476.5,143L475.5,137L482,135.5L484,137.5L489,137.5L492,144.5L494,143.5L500,147.5L507,140.5L509,140.5L510.5,143L509.5,151L516.5,162L516.5,166L515,167.5L505.5,166L514,171.5L518,171.5L520,169.5L525,171.5L527.5,169L526,164.5L524,168.5L518.5,168L518.5,163L522.5,161L524.5,148L522.5,154L519,155.5L513.5,149L512.5,145L516.5,146L515.5,141L517,139.5L522,139.5L523,145.5L525,138.5L532,138.5L533.5,144L528.5,148L527.5,152L531.5,162L538.5,167L539,173.5L541.5,163L534.5,158L534.5,145L538,140.5L549,140.5L556,143.5L558.5,150L571.5,159L571.5,168L580.5,175L579,183.5L576,183.5L572.5,180L577.5,187L577.5,192L573,190.5L574,195.5L568,194.5L563.5,191L561,185.5L552.5,185L554,182.5L559.5,181L563.5,173L554,160.5L548,161.5L549.5,167L548.5,176L541.5,180L550.5,188L548,189.5L546,187.5L541,191.5L538.5,189L539,185.5L529.5,194L526.5,204L529.5,206L531,210.5L534,210.5L542,215.5L546,215.5L547.5,223L551,226.5L552.5,225L551.5,218L556.5,213L552.5,207L554.5,202L553.5,193L562,192.5L566,197.5L568.5,198L568.5,204L572,206.5L577,199.5L581.5,212L591.5,222L591.5,230L595.5,233L597.5,239L587,238.5L585.5,237L589,227.5L585,231.5L581,231.5L581,234.5L578,233.5L577,230.5L574,231.5L577.5,234L577,238.5L581,241.5L583,238.5L585.5,241L576,247.5L573.5,247L575.5,243L573,243.5L567.5,248L567,251.5L561.5,254L558.5,264L549.5,273L551.5,281L550.5,285L549,285.5L545.5,282L544,276.5L536,275.5L533,277.5L528,276.5L524,278.5L521.5,286L522.5,293L525,296.5L530,296.5L535,290.5L539,290.5L539.5,296L537.5,300L545.5,302L545.5,310L548,312.5L557,312.5L558,309.5L564,306.5L566,309.5L570,308.5L573,310.5L581,310.5L590,317.5L595,317.5L598,319.5L602,327.5L626.5,337L626.5,343L619.5,353L619.5,361L617.5,365L607,370.5L596.5,389L594,391.5L589.5,391L590.5,396L586,399.5L582,399.5L581.5,403L576.5,405L576.5,411L572.5,415L575.5,420L569.5,427L571.5,435L576.5,438Z M613,202.5L609,201.5L600.5,193L595.5,183L594.5,175L598.5,166L596.5,161L598.5,158L596,153.5L591.5,154L587.5,131L581,125.5L571,126.5L566.5,122L566.5,118L571.5,117L564,112.5L562.5,108L567,102.5L575.5,101L576.5,98L571.5,90L577,82.5L583.5,84L581.5,82L582,73.5L598,66.5L607,73.5L604.5,67L604.5,58L606,56.5L623,49.5L631,49.5L638,51.5L642.5,59L649.5,65L649.5,67L645,69.5L635,70.5L632,73.5L648,70.5L650.5,72L650,78.5L651,76.5L656,78.5L656.5,76L661,73.5L666.5,79L659.5,92L653.5,99L649.5,110L649.5,112L655.5,118L649.5,123L653.5,128L651.5,141L646.5,147L649.5,159L642,158.5L642,160.5L647.5,161L646.5,164L632,171.5L626,179.5L620,181.5L616.5,185L615.5,198Z M548,137.5L532,136.5L530,133.5L526,136.5L521,132.5L517,133.5L515.5,132L516.5,130L510.5,127L512,122.5L518,121.5L520.5,123L523,129.5L527,129.5L529,131.5L529.5,127L523.5,124L522.5,119L535,121.5L538.5,116L535,109.5L531,110.5L527.5,107L524.5,100L523.5,88L525.5,83L531,75.5L543,70.5L555,59.5L565,58.5L579,62.5L583.5,67L583.5,70L572.5,78L576,78.5L576.5,81L566.5,95L561.5,99L559.5,107L553.5,117L555.5,123L551,126.5L548,126.5L546,123.5L535.5,124L535.5,127L538,129.5L547,127.5L552.5,131L551.5,135Z M328,399.5L317,398.5L313.5,393L310.5,392L311,389.5L309,391.5L305,385.5L301,384.5L294,385.5L289,389.5L285,388.5L280,391.5L276,391.5L273.5,389L274.5,383L271.5,376L271.5,367L276,363.5L284,361.5L285.5,357L291,352.5L295,351.5L298,353.5L299.5,349L303,346.5L311,348.5L309.5,353L313,356.5L317,357.5L318.5,348L321,346.5L322.5,351L325.5,353L327.5,360L338.5,372L338.5,385L333.5,392L333.5,397Z M130.5,273L133,271.5L139.5,272L141.5,266L140,262.5L128,262.5L125.5,259L125,253.5L119.5,255L122.5,258L120,262.5L117.5,262L114,255.5L111,255.5L107.5,262L105,262.5L102.5,259L107,258.5L107.5,256L97,246.5L93,248.5L88,247.5L87.5,251L81.5,256L82.5,258L78,262.5L73.5,264L79,264.5L84,261.5L99,260.5L100.5,263L99.5,267L102,269.5L107,269.5L108,272.5L114,273.5L116,269.5L120,269.5L122,271.5Z M110,123.5L104.5,117L106.5,114L101.5,108L99.5,97L111,94.5L114,89.5L118,91.5L120,89.5L121,92.5L124,90.5L127.5,93L125,100.5L119,101.5L113.5,98L113.5,101L118.5,104L116.5,106L121.5,111L122.5,116L121,118.5L115.5,116L116.5,111L115,107.5Z M250,112.5L247.5,112L249.5,105L246,106.5L240,103.5L237.5,98L233.5,96L233.5,94L236.5,93L236.5,85L241,80.5L246.5,86L245.5,92L249.5,94L248.5,100L250,101.5L254,99.5L258.5,106L257,109.5Z M334,346.5L328,345.5L324,341.5L321,344.5L316,342.5L313,343.5L313.5,340L309,336.5L306,340.5L306.5,336L304,335.5L300.5,330L305,328.5L308,332.5L310,330.5L319,331.5L324,333.5L327,337.5L333,337.5L336,334.5L337,338.5L329.5,339L329.5,341L334.5,345Z M106.5,220L110,217.5L114,218.5L116.5,216L116.5,210L119,208.5L121.5,210L121,203.5L129.5,202L126,200.5L119,202.5L116.5,200L116.5,191L123.5,183L121,180.5L117.5,184L117.5,188L110.5,195L113.5,204L109.5,210L109.5,214L102.5,217Z M302,273.5L299.5,273L298.5,269L303,264.5L309,263.5L314.5,259L316.5,253L315.5,249L318.5,247L318.5,243L325,245.5L330,242.5L330.5,244L322,251.5L318.5,251L318.5,264L309,269.5L303,270.5Z M498,138.5L493.5,137L493.5,135L497,132.5L490,133.5L488.5,132L488.5,127L490,124.5L496,124.5L501,129.5L499.5,121L502,120.5L503.5,124L509.5,128L509.5,132L508,133.5L504,132.5Z M276,335.5L266,333.5L263.5,326L265,324.5L267,325.5L269,322.5L279,316.5L281.5,319L279.5,322L281.5,327L278.5,328Z M159,373.5L157,373.5L153.5,369L155.5,362L154.5,357L164,348.5L166.5,351L166.5,355L162.5,369Z M51,190.5L43.5,188L44.5,186L41.5,184L43.5,183L40.5,181L42,177.5L55,177.5L59.5,181L59.5,184Z M366,417.5L361,416.5L360.5,413L369.5,405L370,402.5L374.5,403L372.5,401L374.5,397L370.5,391L372,389.5L378,396.5L380,395.5L381.5,398L376,405.5L373.5,406L371.5,409L372.5,410Z M150.5,251L150.5,249L143,243.5L138,245.5L134,240.5L128.5,249L130,251.5Z M315,136.5L310.5,133L310.5,128L314,124.5L316,126.5L320,125.5L324.5,129L323,134.5L318,134.5Z M292,319.5L288,315.5L285.5,316L285.5,308L288.5,307L282.5,304L284,296.5L287.5,298L286.5,303L292.5,307L291,311.5L290.5,309L288.5,309L289,313.5L293.5,312L294.5,317Z M170.5,261L171.5,259L169.5,254L172.5,252L171,250.5L170,252.5L165.5,246L167,242.5L170.5,242L167,239.5L161.5,243L161.5,247L166.5,254L164.5,259Z M518,114.5L516,114.5L513,109.5L508.5,109L510.5,105L506.5,103L508,100.5L515,102.5L518.5,106L519.5,113Z M484,127.5L479,127.5L478.5,124L488,115.5L491,115.5L491.5,121Z M283,338.5L280.5,334L281.5,328L284,325.5L289,326.5L291,324.5L292.5,326L288,328.5L286.5,332L287.5,337L286,337.5L284,334.5Z M152.5,303L152.5,300L140,279.5L138.5,281L144.5,291L144.5,295L147.5,297L149,301.5Z M499,116.5L494.5,115L497.5,111L494.5,109L497,105.5L502.5,107L502.5,112Z M558,295.5L543.5,289L549,287.5L559,291.5L560.5,294Z M525,113.5L523,113.5L520.5,110L519.5,106L521,104.5L524,104.5L527.5,108Z M328,410.5L324.5,408L324,402.5L330.5,403L330.5,407Z M170.5,286L174.5,283L168,280.5L165,275.5L163,276.5L165.5,282L168.5,283L168.5,286Z M503.5,172L504,166.5L496,168.5L492.5,166L494.5,168L494,171.5L502,170.5Z M113.5,254L113.5,251L103,242.5L104.5,247Z M566,298.5L560.5,297L562,293.5L570.5,296Z M284,345.5L281,345.5L276.5,342L286,341.5Z M98,257.5L96,257.5L94.5,254L96.5,252L96,248.5L98.5,250Z M540.5,239L542.5,238L538,234.5L533.5,238Z';

function createWorldMap(regions) {
  // SVGパス上の地域ハイライト位置（700x490座標系）
  const highlights = [
    { keys: ['europe'],        cx: 130, cy: 185, rx: 60, ry: 50 },
    { keys: ['africa'],        cx: 105, cy: 310, rx: 50, ry: 85 },
    { keys: ['asia'],          cx: 285, cy: 195, rx: 120, ry: 80 },
    { keys: ['japan', 'asia'], cx: 390, cy: 180, rx: 18, ry: 30 },
    { keys: ['oceania'],       cx: 310, cy: 375, rx: 45, ry: 35 },
    { keys: ['north_america'], cx: 560, cy: 185, rx: 85, ry: 85 },
    { keys: ['south_america'], cx: 565, cy: 385, rx: 40, ry: 60 },
    { keys: ['arctic'],        cx: 400, cy: 60,  rx: 250, ry: 50 },
    { keys: ['antarctic'],     cx: 350, cy: 475, rx: 250, ry: 20 },
  ];

  const isAll = regions.includes('worldwide');
  const isOcean = regions.includes('ocean');
  const bg = (isOcean || isAll) ? '#C5E1F7' : '#E8F4FD';

  let overlays = '';
  for (const h of highlights) {
    const active = isAll || h.keys.some(k => regions.includes(k));
    if (!active) continue;
    overlays += `<ellipse cx="${h.cx}" cy="${h.cy}" rx="${h.rx}" ry="${h.ry}" fill="#FF7043" opacity="0.35"/>`;
  }

  return `<svg viewBox="0 0 700 490" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;border-radius:10px;background:${bg};"><path d="${WORLD_MAP_PATHS}" fill="#8BC34A" opacity="0.5"/>${overlays}</svg>`;
}

function openZukanOverlay(titleText, contentBuilder) {
  const overlay = document.createElement('div');
  overlay.className = 'zukan-overlay';
  overlay.innerHTML = `
    <div class="zukan-overlay-panel">
      <div class="zukan-overlay-header">
        <span class="zukan-overlay-title">${titleText}</span>
        <button class="zukan-overlay-close">✕</button>
      </div>
      <div class="zukan-overlay-body"></div>
    </div>
  `;
  document.body.appendChild(overlay);
  const body = overlay.querySelector('.zukan-overlay-body');
  contentBuilder(body);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
  });
  overlay.querySelector('.zukan-overlay-close').addEventListener('click', closeOverlay);
  requestAnimationFrame(() => overlay.classList.add('open'));

  function closeOverlay() {
    overlay.classList.remove('open');
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
    setTimeout(() => overlay.remove(), 400);
  }
}

// 画像拡大オーバーレイ（スワイプで画像切り替え対応）
function openImageZoom(images, startIdx) {
  let currentIdx = startIdx;
  const overlay = document.createElement('div');
  overlay.className = 'image-zoom-overlay';

  const img = document.createElement('img');
  img.src = images[currentIdx];
  img.draggable = false;
  overlay.appendChild(img);

  // ドットインジケーター
  let dotsDiv = null;
  if (images.length > 1) {
    dotsDiv = document.createElement('div');
    dotsDiv.className = 'img-swipe-dots';
    images.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'img-dot' + (i === currentIdx ? ' active' : '');
      dotsDiv.appendChild(dot);
    });
    overlay.appendChild(dotsDiv);
  }

  function updateZoomImg() {
    img.src = images[currentIdx];
    if (dotsDiv) {
      dotsDiv.querySelectorAll('.img-dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentIdx);
      });
    }
  }

  // スワイプで切り替え
  let touchStartX = 0, touchStartY = 0;
  overlay.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  overlay.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (images.length > 1 && Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        currentIdx = (currentIdx + 1) % images.length;
      } else {
        currentIdx = (currentIdx - 1 + images.length) % images.length;
      }
      img.style.animation = 'none';
      img.offsetHeight;
      img.style.animation = dx < 0 ? 'imgSwipeLeft 0.25s ease' : 'imgSwipeRight 0.25s ease';
      updateZoomImg();
      return;
    }
    // スワイプでなければタップで閉じる
    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      overlay.remove();
    }
  });

  document.body.appendChild(overlay);
}

let zukanNavigating = false;
let zukanCurrentItem = null;
let zukanFilteredItems = [];

// スワイプナビ（1回だけ登録）
(function initSwipe() {
  const container = document.getElementById('zukan-content');
  let touchStartX = 0, touchStartY = 0;
  container.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  container.addEventListener('touchend', (e) => {
    if (!zukanCurrentItem || zukanNavigating) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) < 60 || Math.abs(dy) > Math.abs(dx)) return;
    const idx = zukanFilteredItems.findIndex(c => c.name === zukanCurrentItem.name);
    if (dx < 0 && idx < zukanFilteredItems.length - 1) {
      showZukanDetail(zukanFilteredItems[idx + 1], 'right');
    } else if (dx > 0 && idx > 0) {
      showZukanDetail(zukanFilteredItems[idx - 1], 'left');
    }
  }, { passive: true });
})();

function showZukanDetail(item, animDir) {
  if (zukanNavigating) return;
  zukanNavigating = true;

  const container = document.getElementById('zukan-content');
  container.innerHTML = '';
  const animClass = animDir === 'left' ? 'zukan-anim-slidein-left' : 'zukan-anim-slidein';
  container.className = 'zukan-detail-view ' + animClass;

  // アニメーション完了後にロック解除
  const unlock = () => { zukanNavigating = false; };
  container.addEventListener('animationend', unlock, { once: true });
  // フォールバック（アニメーションが発火しない場合）
  setTimeout(unlock, 400);

  const filteredCats = zukanCurrentFilter ? [zukanCurrentFilter] : CATEGORIES;
  const allFiltered = [];
  filteredCats.forEach(cat => allFiltered.push(...CREATURES[cat]));
  const currentIdx = allFiltered.findIndex(c => c.name === item.name);

  // スワイプ用の状態更新
  zukanCurrentItem = item;
  zukanFilteredItems = allFiltered;

  let catNameStr = '', sameCatKey = '', sameCatItems = [];
  for (const cat of CATEGORIES) {
    if (CREATURES[cat].some(c => c.name === item.name)) {
      catNameStr = catName(cat);
      sameCatKey = cat;
      sameCatItems = CREATURES[cat].filter(c => c.name !== item.name);
      break;
    }
  }

  const triviaText = itemTrivia(item);
  const varieties = VARIETIES[item.name];
  const hasVarieties = varieties && varieties.length > 0;

  const main = document.createElement('div');
  main.className = 'zukan-detail-main';
  const habitat = HABITATS[item.name];
  main.innerHTML = `
    <img src="${item.img}" alt="${itemName(item)}" draggable="false" class="zukan-detail-img">
    <div class="zukan-detail-info">
      <div class="zukan-detail-name">${itemName(item)}<span class="zukan-detail-cat">${catNameStr}</span></div>
      <div class="zukan-detail-desc">${itemDesc(item)}</div>
      ${triviaText ? `<div class="zukan-trivia"><span class="zukan-trivia-label">${t('まめちしき', 'Fun Fact')}</span>${triviaText}</div>` : ''}
    </div>
  `;
  // 拡大表示（スワイプで品種画像切り替え対応）
  const detailImg = main.querySelector('.zukan-detail-img');
  const varietyImgs = hasVarieties
    ? [item.img, ...varieties.filter(v => v.img).map(v => v.img)]
    : [item.img];

  detailImg.addEventListener('click', function() {
    openImageZoom(varietyImgs, 0);
  });

  container.appendChild(main);

  // アクションボタン行
  const actions = document.createElement('div');
  actions.className = 'zukan-detail-actions';

  const backBtn = document.createElement('button');
  backBtn.className = 'zukan-action-btn back';
  backBtn.textContent = t('← もどる', '← Back');
  backBtn.addEventListener('click', () => {
    container.classList.add('zukan-anim-slideout');
    setTimeout(() => {
      container.className = '';
      showZukanList(zukanCurrentFilter);
    }, 200);
  });
  actions.appendChild(backBtn);

  // しゅるい＆すんでいるところボタン（1つのオーバーレイにまとめる）
  if (hasVarieties || habitat) {
    const infoBtn = document.createElement('button');
    infoBtn.className = 'zukan-varieties-preview';
    infoBtn.addEventListener('click', () => {
      const title = getLang() === 'en'
        ? `${itemName(item)}'s Friends`
        : `${item.name} の なかま`;
      openZukanOverlay(title, (body) => {
        // 品種セクション
        if (hasVarieties) {
          const varSection = document.createElement('div');
          varSection.innerHTML = `<div style="font-size:1em;font-weight:bold;color:#E65100;margin-bottom:8px;">📋 ${t('なかま', 'Types')} (${varieties.length})</div>`;
          const grid = document.createElement('div');
          grid.className = 'overlay-variety-grid';
          varieties.forEach((v, i) => {
            const card = document.createElement('div');
            card.className = 'overlay-variety-card zukan-anim-pop';
            card.style.animationDelay = `${i * 60}ms`;
            const vName = (getLang() === 'en' && v.nameEn) ? v.nameEn : v.name;
            const vDesc = (getLang() === 'en' && v.descEn) ? v.descEn : v.desc;
            card.innerHTML = `${v.img ? `<img src="${v.img}" alt="${vName}" draggable="false" class="variety-img">` : ''}<div class="overlay-variety-name">${vName}</div><div class="overlay-variety-desc">${vDesc}</div>`;
            // カード全体をタップで画像拡大（スワイプ切り替え付き）
            if (v.img) {
              const allVarImgs = varieties.filter(vv => vv.img).map(vv => vv.img);
              const imgIdx = allVarImgs.indexOf(v.img);
              card.style.cursor = 'pointer';
              card.addEventListener('click', (e) => {
                e.stopPropagation();
                openImageZoom(allVarImgs, imgIdx >= 0 ? imgIdx : 0);
              });
            }
            grid.appendChild(card);
          });
          varSection.appendChild(grid);
          body.appendChild(varSection);
        }
        // 生息地セクション（下部）
        if (habitat) {
          const habitatText = getLang() === 'en' ? habitat.en : habitat.ja;
          const habitatSection = document.createElement('div');
          habitatSection.style.cssText = 'text-align:center;' + (hasVarieties ? 'margin-top:16px;padding-top:16px;border-top:1px solid rgba(0,0,0,0.08);' : '');
          habitatSection.innerHTML = `
            <div style="font-size:1em;font-weight:bold;color:#43A047;margin-bottom:8px;">🌍 ${t('すんでいるところ', 'Habitat')}</div>
            ${createWorldMap(habitat.regions)}
            <div style="margin-top:8px;font-size:1em;font-weight:bold;color:#2E7D32;">${habitatText}</div>
          `;
          body.appendChild(habitatSection);
        }
      });
    });
    // ボタンのラベル
    const previewLabel = document.createElement('span');
    previewLabel.className = 'varieties-preview-label';
    const parts = [];
    if (hasVarieties) parts.push(getLang() === 'en' ? `Types (${varieties.length})` : `なかま (${varieties.length})`);
    if (habitat) parts.push(getLang() === 'en' ? 'Habitat' : 'すんでいるところ');
    previewLabel.textContent = parts.join(' / ');
    infoBtn.appendChild(previewLabel);
    // サムネイル（品種がある場合）
    if (hasVarieties) {
      const previewImgs = document.createElement('span');
      previewImgs.className = 'varieties-preview-imgs';
      varieties.slice(0, 4).forEach(v => {
        if (v.img) {
          const img = document.createElement('img');
          img.src = v.img;
          img.alt = (getLang() === 'en' && v.nameEn) ? v.nameEn : v.name;
          img.draggable = false;
          previewImgs.appendChild(img);
        }
      });
      infoBtn.appendChild(previewImgs);
    }
    actions.appendChild(infoBtn);
  }

  container.appendChild(actions);

  // 前後ナビ
  if (allFiltered.length > 1) {
    const nav = document.createElement('div');
    nav.className = 'zukan-detail-nav';
    if (currentIdx > 0) {
      const prevBtn = document.createElement('button');
      prevBtn.className = 'zukan-nav-btn prev';
      prevBtn.textContent = `◀ ${itemName(allFiltered[currentIdx - 1])}`;
      prevBtn.addEventListener('click', () => showZukanDetail(allFiltered[currentIdx - 1], 'left'));
      nav.appendChild(prevBtn);
    }
    const counter = document.createElement('span');
    counter.className = 'zukan-nav-counter';
    counter.textContent = `${currentIdx + 1} / ${allFiltered.length}`;
    nav.appendChild(counter);
    if (currentIdx < allFiltered.length - 1) {
      const nextBtn = document.createElement('button');
      nextBtn.className = 'zukan-nav-btn next';
      nextBtn.textContent = `${itemName(allFiltered[currentIdx + 1])} ▶`;
      nextBtn.addEventListener('click', () => showZukanDetail(allFiltered[currentIdx + 1], 'right'));
      nav.appendChild(nextBtn);
    }
    container.appendChild(nav);
  }
}

// ===== 言語切替 =====
function applyLanguage() {
  const lang = getLang();
  document.querySelectorAll('[data-ja]').forEach(el => {
    el.textContent = lang === 'en' ? el.dataset.en : el.dataset.ja;
  });
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.textContent = lang === 'ja' ? 'EN' : 'JA';
}

function toggleLang() {
  const newLang = getLang() === 'ja' ? 'en' : 'ja';
  localStorage.setItem('zukan-lang', newLang);
  applyLanguage();
  showZukanList(zukanCurrentFilter, true);
}

// ===== 初期化 =====
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage();
  document.getElementById('lang-toggle').addEventListener('click', toggleLang);
  showZukanList();
});

// ===== PWA インストール =====
let deferredPrompt = null;
const installBtn = document.getElementById('install-btn');
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;

if (isIOS && !isStandalone) {
  // iOS: ホーム画面に追加の案内を表示
  installBtn.style.display = '';
  installBtn.textContent = t('ホームに追加', 'Add to Home');
  installBtn.addEventListener('click', () => {
    const msg = t(
      'ブラウザの共有ボタン（□↑）をタップして\n「ホーム画面に追加」を選んでね！',
      'Tap the Share button (□↑) and\nselect "Add to Home Screen"!'
    );
    alert(msg);
  });
} else {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = '';
  });

  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.style.display = 'none';
  });
}

window.addEventListener('appinstalled', () => {
  installBtn.style.display = 'none';
  deferredPrompt = null;
});

// ===== Service Worker 登録 =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then((reg) => {
        console.log('SW registered');
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'activated') {
              window.location.reload();
            }
          });
        });
      })
      .catch((err) => console.log('SW registration failed:', err));
  });
}
