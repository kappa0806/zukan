#!/bin/bash
# 動物図鑑 画像ダウンロードスクリプト
# Usage: bash download_images.sh

cd "$(dirname "$0")"
mkdir -p images/varieties

echo "=== メイン画像 (15枚) ==="

curl -L -o "images/crocodile.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nile_crocodile_head.jpg/960px-Nile_crocodile_head.jpg"
curl -L -o "images/red_panda.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Red_Panda%2C_Gentle_Tree-Dweller_of_the_Himalayas.jpg/960px-Red_Panda%2C_Gentle_Tree-Dweller_of_the_Himalayas.jpg"
curl -L -o "images/river_otter.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Northern_River_Otter_on_Seedskadee_NWR_%2822802102984%29.jpg/960px-Northern_River_Otter_on_Seedskadee_NWR_%2822802102984%29.jpg"
curl -L -o "images/hedgehog.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Igel.JPG/960px-Igel.JPG"
curl -L -o "images/bat.jpg" "https://upload.wikimedia.org/wikipedia/commons/7/77/Big-eared-townsend-fledermaus.jpg"
curl -L -o "images/skunk.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Striped_Skunk.jpg/960px-Striped_Skunk.jpg"
curl -L -o "images/alpaca.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Alpaca_in_Higashiyama_Zoo_-_1.jpg/960px-Alpaca_in_Higashiyama_Zoo_-_1.jpg"
curl -L -o "images/chameleon.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Chamaeleonidae-01.jpg/960px-Chamaeleonidae-01.jpg"
curl -L -o "images/araiguma.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg/960px-Raccoon_in_Central_Park_%2835264%29.jpg"
curl -L -o "images/mole.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Talpa_europaea_MHNT.jpg/960px-Talpa_europaea_MHNT.jpg"
curl -L -o "images/weasel.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mustela_nivalis_-British_Wildlife_Centre-4.jpg/960px-Mustela_nivalis_-British_Wildlife_Centre-4.jpg"
curl -L -o "images/crane_bird.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Antigone_canadensis_353731480_%28cropped%29.jpg/960px-Antigone_canadensis_353731480_%28cropped%29.jpg"
curl -L -o "images/eagle.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Eagles_together.jpg/960px-Eagles_together.jpg"
curl -L -o "images/kingfisher.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Alcedo_atthis_-England-8_%28cropped%29.jpg/960px-Alcedo_atthis_-England-8_%28cropped%29.jpg"
curl -L -o "images/cockatoo.jpg" "https://upload.wikimedia.org/wikipedia/commons/a/a9/Cacatua_galerita_Tas_2.jpg"

echo ""
echo "=== 品種画像 (44枚) ==="

# わに
curl -L -o "images/varieties/nile_crocodile.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/NileCrocodile.jpg/960px-NileCrocodile.jpg"
curl -L -o "images/varieties/alligator.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/American_Alligator.jpg/960px-American_Alligator.jpg"
curl -L -o "images/varieties/gharial.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Gharial_%28Gavialis_gangeticus%29_male.jpg/960px-Gharial_%28Gavialis_gangeticus%29_male.jpg"

# れっさーぱんだ
curl -L -o "images/varieties/styan_red_panda.jpg" "https://upload.wikimedia.org/wikipedia/commons/b/b5/Ailurus_fulgens_styani.jpg"
curl -L -o "images/varieties/nepal_red_panda.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ailurus_fulgens_-_Karlsruhe_Zoo_01.jpg/960px-Ailurus_fulgens_-_Karlsruhe_Zoo_01.jpg"

# かわうそ
curl -L -o "images/varieties/asian_small_clawed_otter.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Otter_-_melbourne_zoo.jpg/960px-Otter_-_melbourne_zoo.jpg"
curl -L -o "images/varieties/eurasian_otter.jpg" "https://upload.wikimedia.org/wikipedia/commons/d/d3/Fischotter%2C_Lutra_Lutra.JPG"
curl -L -o "images/varieties/north_american_otter.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Northern_River_Otter_on_Seedskadee_NWR_%2822802102984%29.jpg/960px-Northern_River_Otter_on_Seedskadee_NWR_%2822802102984%29.jpg"

# はりねずみ
curl -L -o "images/varieties/four_toed_hedgehog.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Atelerix_albiventris%2C_Coacalco%2C_Mexico_250917P2.jpg/960px-Atelerix_albiventris%2C_Coacalco%2C_Mexico_250917P2.jpg"
curl -L -o "images/varieties/european_hedgehog.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Erinaceus_europaeus_LC0119.jpg/960px-Erinaceus_europaeus_LC0119.jpg"
curl -L -o "images/varieties/long_eared_hedgehog.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hedgehog_cyprus_hg.jpg/960px-Hedgehog_cyprus_hg.jpg"

# こうもり
curl -L -o "images/varieties/fruit_bat.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/047_Indian_flying_fox_in_Keoladeo_National_Park_Photo_by_Giles_Laurent.jpg/960px-047_Indian_flying_fox_in_Keoladeo_National_Park_Photo_by_Giles_Laurent.jpg"
curl -L -o "images/varieties/pipistrelle.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Pipistrellus_female-1.jpg/960px-Pipistrellus_female-1.jpg"
curl -L -o "images/varieties/horseshoe_bat.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Greater_horseshoe_bat_%28Rhinolophus_ferrumequinum%29_Hrdovicka.jpg/960px-Greater_horseshoe_bat_%28Rhinolophus_ferrumequinum%29_Hrdovicka.jpg"

# すかんく
curl -L -o "images/varieties/striped_skunk.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Skunk_about_to_spray.jpg/960px-Skunk_about_to_spray.jpg"
curl -L -o "images/varieties/spotted_skunk.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Eastern_Spotted_Skunk_%2848934800418%29.jpg/960px-Eastern_Spotted_Skunk_%2848934800418%29.jpg"
curl -L -o "images/varieties/hog_nosed_skunk.jpg" "https://upload.wikimedia.org/wikipedia/commons/d/db/Hog-nosed-skunk.png"

# あるぱか
curl -L -o "images/varieties/huacaya.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Huacaya_alpacas_at_Cornwall_Alpaca_Show_-_geograph.org.uk_-_7480163.jpg/960px-Huacaya_alpacas_at_Cornwall_Alpaca_Show_-_geograph.org.uk_-_7480163.jpg"
curl -L -o "images/varieties/suri_alpaca.jpg" "https://upload.wikimedia.org/wikipedia/commons/7/7d/Suri-Alpacas.jpg"
curl -L -o "images/varieties/llama.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Llamas%2C_Vernagt-Stausee%2C_Italy.jpg/960px-Llamas%2C_Vernagt-Stausee%2C_Italy.jpg"

# かめれおん
curl -L -o "images/varieties/panther_chameleon.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Panther_chameleon_%28Furcifer_pardalis%29_male_Nosy_Be.jpg/960px-Panther_chameleon_%28Furcifer_pardalis%29_male_Nosy_Be.jpg"
curl -L -o "images/varieties/veiled_chameleon.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Yemen_Chameleon.jpg/960px-Yemen_Chameleon.jpg"
curl -L -o "images/varieties/jackson_chameleon.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jackson%27s_Chameleon_2_edit1.jpg/960px-Jackson%27s_Chameleon_2_edit1.jpg"

# あらいぐま
curl -L -o "images/varieties/common_raccoon.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg/960px-Raccoon_in_Central_Park_%2835264%29.jpg"
curl -L -o "images/varieties/crab_eating_raccoon.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Mano_pelada_%28Procyon_cancrivorus_nigripes%29.JPG/960px-Mano_pelada_%28Procyon_cancrivorus_nigripes%29.JPG"
curl -L -o "images/varieties/coati.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/WNCoati_Alajuela_CR.png/960px-WNCoati_Alajuela_CR.png"

# もぐら
curl -L -o "images/varieties/azuma_mole.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mogera_wogura.jpg/960px-Mogera_wogura.jpg"
curl -L -o "images/varieties/european_mole.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Talpa_europaea_MHNT.jpg/960px-Talpa_europaea_MHNT.jpg"
curl -L -o "images/varieties/star_nosed_mole.jpg" "https://upload.wikimedia.org/wikipedia/commons/e/ef/Condylura.jpg"

# いたち
curl -L -o "images/varieties/ferret.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ferret_2008.png/960px-Ferret_2008.png"
curl -L -o "images/varieties/ermine.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/R%C3%B8yskatt_%28Mustela_erminea_erminea%29%2C_Lista%2C_Norway.jpg/960px-R%C3%B8yskatt_%28Mustela_erminea_erminea%29%2C_Lista%2C_Norway.jpg"
curl -L -o "images/varieties/japanese_weasel.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Mustela_itatsi_on_tree.JPG/960px-Mustela_itatsi_on_tree.JPG"

# つる
curl -L -o "images/varieties/red_crowned_crane.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Grus_japonensis_-Hokkaido%2C_Japan_-several-8_%281%29.jpg/960px-Grus_japonensis_-Hokkaido%2C_Japan_-several-8_%281%29.jpg"
curl -L -o "images/varieties/hooded_crane.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Grus_monacha_-Kyushu%2C_Japan_-three-8.jpg/960px-Grus_monacha_-Kyushu%2C_Japan_-three-8.jpg"
curl -L -o "images/varieties/demoiselle_crane.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Demoiselle_Cranes_at_Tal_Chappar.jpg/960px-Demoiselle_Cranes_at_Tal_Chappar.jpg"

# わし
curl -L -o "images/varieties/golden_eagle.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/960px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg"
curl -L -o "images/varieties/bald_eagle.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg/960px-Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg"
curl -L -o "images/varieties/stellers_sea_eagle.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Haliaeetus_pelagicus_%28Rausu%2C_Japan%29.jpg/960px-Haliaeetus_pelagicus_%28Rausu%2C_Japan%29.jpg"

# かわせみ
curl -L -o "images/varieties/common_kingfisher.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Alcedo_atthis_-England-8_%28cropped%29.jpg/960px-Alcedo_atthis_-England-8_%28cropped%29.jpg"
curl -L -o "images/varieties/crested_kingfisher.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Megaceryle_lugubris%2C_crop.jpg/960px-Megaceryle_lugubris%2C_crop.jpg"
curl -L -o "images/varieties/ruddy_kingfisher.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ruddy_Kingfisher_0A2A7077.jpg/960px-Ruddy_Kingfisher_0A2A7077.jpg"

# おうむ
curl -L -o "images/varieties/sulphur_crested_cockatoo.jpg" "https://upload.wikimedia.org/wikipedia/commons/a/a9/Cacatua_galerita_Tas_2.jpg"
curl -L -o "images/varieties/galah.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Galah_%28Eolophus_roseicapilla_albiceps%29_male_Adelaide.jpg/960px-Galah_%28Eolophus_roseicapilla_albiceps%29_male_Adelaide.jpg"
curl -L -o "images/varieties/major_mitchell_cockatoo.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Major_Mitchell%27s_Cockatoo_1_-_Mt_Grenfell.jpg/960px-Major_Mitchell%27s_Cockatoo_1_-_Mt_Grenfell.jpg"

echo ""
echo "=== ダウンロード完了 ==="
echo "メイン: $(ls images/*.jpg 2>/dev/null | wc -l) 枚"
echo "品種: $(ls images/varieties/*.jpg images/varieties/*.png 2>/dev/null | wc -l) 枚"
