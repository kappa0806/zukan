# セッション: 生息地データ生成
日付: 2026-03-09

## ユーザーリクエスト
app.jsのCREATURES全68種に対して生息地の地域情報（HABITATS定数）を生成してほしい。コードの修正は不要、データのみ出力。

## 実施内容
1. app.jsからCREATURESの全種名を抽出（68種の基本種 + 多数の亜種を確認）
2. 基本68種（ひらがな表記）に対してHABITATSデータをJSON形式で生成
3. region値はworldwide, asia, japan, africa, europe, north_america, south_america, oceania, arctic, antarctic, oceanから選択
4. ja/enは子ども向けのやさしい表現で出力

## 結果
全68種の生息地データを出力完了。
