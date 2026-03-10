#!/bin/bash
# 動物図鑑 画像ダウンロードスクリプト
# Usage: bash download_images.sh
# 壊れた画像だけ再ダウンロード: bash download_images.sh --fix

cd "$(dirname "$0")"
mkdir -p images/varieties

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
DELAY=5
FAIL=0
OK=0

dl() {
  local dest="$1" url="$2"
  # 既に正常な画像ならスキップ
  if [ -f "$dest" ]; then
    local mime=$(file -b --mime-type "$dest" 2>/dev/null)
    if [ "$mime" = "image/jpeg" ] || [ "$mime" = "image/png" ]; then
      echo "SKIP: $dest"
      return
    fi
  fi
  sleep "$DELAY"
  curl -sS -L -A "$UA" -o "$dest" "$url"
  local mime=$(file -b --mime-type "$dest" 2>/dev/null)
  if [ "$mime" = "image/jpeg" ] || [ "$mime" = "image/png" ]; then
    OK=$((OK+1))
    echo "OK: $dest"
  else
    FAIL=$((FAIL+1))
    echo "FAIL: $dest ($mime)"
  fi
}

FIX_MODE=0
if [ "$1" = "--fix" ]; then
  FIX_MODE=1
  echo "=== 壊れた画像のみ再ダウンロード ==="
fi

echo "=== メイン画像 (15枚) ==="
dl "images/crocodile.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nile_crocodile_head.jpg/960px-Nile_crocodile_head.jpg"
dl "images/red_panda.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Red_Panda%2C_Gentle_Tree-Dweller_of_the_Himalayas.jpg/960px-Red_Panda%2C_Gentle_Tree-Dweller_of_the_Himalayas.jpg"
dl "images/river_otter.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Northern_River_Otter_on_Seedskadee_NWR_%2822802102984%29.jpg/960px-Northern_River_Otter_on_Seedskadee_NWR_%2822802102984%29.jpg"
dl "images/hedgehog.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Igel.JPG/960px-Igel.JPG"
dl "images/bat.jpg" "https://upload.wikimedia.org/wikipedia/commons/7/77/Big-eared-townsend-fledermaus.jpg"
dl "images/skunk.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Striped_Skunk.jpg/960px-Striped_Skunk.jpg"
dl "images/alpaca.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Alpaca_in_Higashiyama_Zoo_-_1.jpg/960px-Alpaca_in_Higashiyama_Zoo_-_1.jpg"
dl "images/chameleon.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Chamaeleonidae-01.jpg/960px-Chamaeleonidae-01.jpg"
dl "images/araiguma.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_(35264).jpg/960px-Raccoon_in_Central_Park_(35264).jpg"
dl "images/mole.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Talpa_europaea_MHNT.jpg/960px-Talpa_europaea_MHNT.jpg"
dl "images/weasel.jpg" "https://upload.wikimedia.org/wikipedia/commons/e/e3/Mustela_nivalis_-British_Wildlife_Centre-4.jpg"
dl "images/crane_bird.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Antigone_canadensis_353731480_(cropped).jpg/960px-Antigone_canadensis_353731480_(cropped).jpg"
dl "images/eagle.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Eagles_together.jpg/960px-Eagles_together.jpg"
dl "images/kingfisher.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Alcedo_atthis_-England-8_(cropped).jpg/960px-Alcedo_atthis_-England-8_(cropped).jpg"
dl "images/cockatoo.jpg" "https://upload.wikimedia.org/wikipedia/commons/a/a9/Cacatua_galerita_Tas_2.jpg"

echo ""
echo "=== 品種画像 (44枚) ==="

# わに
dl "images/varieties/nile_crocodile.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/NileCrocodile.jpg/960px-NileCrocodile.jpg"
dl "images/varieties/alligator.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/American_Alligator.jpg/960px-American_Alligator.jpg"
dl "images/varieties/gharial.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Gharial_(Gavialis_gangeticus)_male.jpg/960px-Gharial_(Gavialis_gangeticus)_male.jpg"

# れっさーぱんだ
dl "images/varieties/styan_red_panda.jpg" "https://upload.wikimedia.org/wikipedia/commons/b/b5/Ailurus_fulgens_styani.jpg"
dl "images/varieties/nepal_red_panda.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ailurus_fulgens_-_Karlsruhe_Zoo_01.jpg/960px-Ailurus_fulgens_-_Karlsruhe_Zoo_01.jpg"

# かわうそ
dl "images/varieties/asian_small_clawed_otter.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Otter_-_melbourne_zoo.jpg/960px-Otter_-_melbourne_zoo.jpg"
dl "images/varieties/eurasian_otter.jpg" "https://upload.wikimedia.org/wikipedia/commons/d/d3/Fischotter%2C_Lutra_Lutra.JPG"
dl "images/varieties/north_american_otter.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Northern_River_Otter_on_Seedskadee_NWR_(22802102984).jpg/960px-Northern_River_Otter_on_Seedskadee_NWR_(22802102984).jpg"

# はりねずみ
dl "images/varieties/four_toed_hedgehog.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Atelerix_albiventris%2C_Coacalco%2C_Mexico_250917P2.jpg/960px-Atelerix_albiventris%2C_Coacalco%2C_Mexico_250917P2.jpg"
dl "images/varieties/european_hedgehog.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Erinaceus_europaeus_LC0119.jpg/960px-Erinaceus_europaeus_LC0119.jpg"
dl "images/varieties/long_eared_hedgehog.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hedgehog_cyprus_hg.jpg/960px-Hedgehog_cyprus_hg.jpg"

# こうもり
dl "images/varieties/fruit_bat.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/047_Indian_flying_fox_in_Keoladeo_National_Park_Photo_by_Giles_Laurent.jpg/960px-047_Indian_flying_fox_in_Keoladeo_National_Park_Photo_by_Giles_Laurent.jpg"
dl "images/varieties/pipistrelle.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Pipistrellus_female-1.jpg/960px-Pipistrellus_female-1.jpg"
dl "images/varieties/horseshoe_bat.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Greater_horseshoe_bat_(Rhinolophus_ferrumequinum)_Hrdovicka.jpg/960px-Greater_horseshoe_bat_(Rhinolophus_ferrumequinum)_Hrdovicka.jpg"

# すかんく
dl "images/varieties/striped_skunk.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Skunk_about_to_spray.jpg/960px-Skunk_about_to_spray.jpg"
dl "images/varieties/spotted_skunk.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Eastern_Spotted_Skunk_(48934800418).jpg/960px-Eastern_Spotted_Skunk_(48934800418).jpg"
dl "images/varieties/hog_nosed_skunk.jpg" "https://upload.wikimedia.org/wikipedia/commons/d/db/Hog-nosed-skunk.png"

# あるぱか
dl "images/varieties/huacaya.jpg" "https://upload.wikimedia.org/wikipedia/commons/c/c7/Huacaya_alpacas_at_Cornwall_Alpaca_Show_-_geograph.org.uk_-_7480163.jpg"
dl "images/varieties/suri_alpaca.jpg" "https://upload.wikimedia.org/wikipedia/commons/7/7d/Suri-Alpacas.jpg"
dl "images/varieties/llama.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Llamas%2C_Vernagt-Stausee%2C_Italy.jpg/960px-Llamas%2C_Vernagt-Stausee%2C_Italy.jpg"

# かめれおん
dl "images/varieties/panther_chameleon.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Panther_chameleon_(Furcifer_pardalis)_male_Nosy_Be.jpg/960px-Panther_chameleon_(Furcifer_pardalis)_male_Nosy_Be.jpg"
dl "images/varieties/veiled_chameleon.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Yemen_Chameleon.jpg/960px-Yemen_Chameleon.jpg"
dl "images/varieties/jackson_chameleon.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jackson%27s_Chameleon_2_edit1.jpg/960px-Jackson%27s_Chameleon_2_edit1.jpg"

# あらいぐま
dl "images/varieties/common_raccoon.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_(35264).jpg/960px-Raccoon_in_Central_Park_(35264).jpg"
dl "images/varieties/crab_eating_raccoon.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Mano_pelada_(Procyon_cancrivorus_nigripes).JPG/960px-Mano_pelada_(Procyon_cancrivorus_nigripes).JPG"
dl "images/varieties/coati.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/WNCoati_Alajuela_CR.png/960px-WNCoati_Alajuela_CR.png"

# もぐら
dl "images/varieties/azuma_mole.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mogera_wogura.jpg/960px-Mogera_wogura.jpg"
dl "images/varieties/european_mole.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Talpa_europaea_MHNT.jpg/960px-Talpa_europaea_MHNT.jpg"
dl "images/varieties/star_nosed_mole.jpg" "https://upload.wikimedia.org/wikipedia/commons/e/ef/Condylura.jpg"

# いたち
dl "images/varieties/ferret.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ferret_2008.png/960px-Ferret_2008.png"
dl "images/varieties/ermine.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/R%C3%B8yskatt_(Mustela_erminea_erminea)%2C_Lista%2C_Norway.jpg/960px-R%C3%B8yskatt_(Mustela_erminea_erminea)%2C_Lista%2C_Norway.jpg"
dl "images/varieties/japanese_weasel.jpg" "https://upload.wikimedia.org/wikipedia/commons/e/e7/Mustela_itatsi_on_tree.JPG"

# つる
dl "images/varieties/red_crowned_crane.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Grus_japonensis_-Hokkaido%2C_Japan_-several-8_(1).jpg/960px-Grus_japonensis_-Hokkaido%2C_Japan_-several-8_(1).jpg"
dl "images/varieties/hooded_crane.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Grus_monacha_-Kyushu%2C_Japan_-three-8.jpg/960px-Grus_monacha_-Kyushu%2C_Japan_-three-8.jpg"
dl "images/varieties/demoiselle_crane.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Demoiselle_Cranes_at_Tal_Chappar.jpg/960px-Demoiselle_Cranes_at_Tal_Chappar.jpg"

# わし
dl "images/varieties/golden_eagle.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_(Switzerland)_Photo_by_Giles_Laurent.jpg/960px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_(Switzerland)_Photo_by_Giles_Laurent.jpg"
dl "images/varieties/bald_eagle.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Bald_eagle_about_to_fly_in_Alaska_(2016).jpg/960px-Bald_eagle_about_to_fly_in_Alaska_(2016).jpg"
dl "images/varieties/stellers_sea_eagle.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Haliaeetus_pelagicus_(Rausu%2C_Japan).jpg/960px-Haliaeetus_pelagicus_(Rausu%2C_Japan).jpg"

# かわせみ
dl "images/varieties/common_kingfisher.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Alcedo_atthis_-England-8_(cropped).jpg/960px-Alcedo_atthis_-England-8_(cropped).jpg"
dl "images/varieties/crested_kingfisher.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Megaceryle_lugubris%2C_crop.jpg/960px-Megaceryle_lugubris%2C_crop.jpg"
dl "images/varieties/ruddy_kingfisher.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ruddy_Kingfisher_0A2A7077.jpg/960px-Ruddy_Kingfisher_0A2A7077.jpg"

# おうむ
dl "images/varieties/sulphur_crested_cockatoo.jpg" "https://upload.wikimedia.org/wikipedia/commons/a/a9/Cacatua_galerita_Tas_2.jpg"
dl "images/varieties/galah.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Galah_(Eolophus_roseicapilla_albiceps)_male_Adelaide.jpg/960px-Galah_(Eolophus_roseicapilla_albiceps)_male_Adelaide.jpg"
dl "images/varieties/major_mitchell_cockatoo.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Major_Mitchell%27s_Cockatoo_1_-_Mt_Grenfell.jpg/960px-Major_Mitchell%27s_Cockatoo_1_-_Mt_Grenfell.jpg"

# あざらし
dl "images/varieties/spotted_seal.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Spotted_seal_mother_and_pup_in_the_Bering_Sea.jpg/960px-Spotted_seal_mother_and_pup_in_the_Bering_Sea.jpg"

# かわうそ（おおかわうそ）
dl "images/varieties/giant_otter.jpg" "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Giant_otters_%28Pteronura_brasiliensis%29.jpg/960px-Giant_otters_%28Pteronura_brasiliensis%29.jpg"

echo ""
echo "=== 結果 ==="
echo "成功: ${OK}枚"
echo "失敗: ${FAIL}枚"
if [ "$FAIL" -gt 0 ]; then
  echo "失敗したファイルは bash download_images.sh --fix で再実行してください"
fi
