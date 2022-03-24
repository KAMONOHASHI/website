---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: single
classes: wide
title: アクアリウムAI開発者ガイド
permalink: /docs/how-to/aquarium_dev
sidebar:
  nav: "docs"
---

本書はAI開発者を対象としてアクアリウムの機能や手順を説明する事を目的としています。

## 前提
読者がLinux、Git、Dockerの基本的な知識を持つこと、KAMONOHASIで学習を行った経験があること、を前提としています。

* Dockerが初めての方はリンク先を選択してください。以下のリソースは、Dockerについて学ぶのに役立ちます。
    - [Dockerとはなにか](https://www.docker.com/why-docker)<i class="material-icons" class="material-icons blue">launch</i>
    - [コンテナとはなにか](https://www.docker.com/resources/what-container)<i class="material-icons" class="material-icons blue">launch</i>
    - [Docker公式チュートリアル](https://docs.docker.com/get-started/)<i class="material-icons" class="material-icons blue">launch</i>

## 概要

AI開発者は以下の操作を行えます。

* ログイン
* ユーザ情報設定
* [ダッシュボード](/docs/how-to/aquarium_dev#アクアリウムダッシュボード)
* [テンプレートを管理する](/docs/how-to/aquarium_dev#テンプレート管理)
* データセットを管理する
* 実験を実行する
* 実験を管理する

本ドキュメント内に説明のない項目は、データ保持者向けガイドを参照してください。

## アクアリウムダッシュボード

ダッシュボードからは、アクアリウムの各機能を実行することができます。

![ダッシュボード](/assets/images/aquarium/dashboard.png)

## テンプレート管理

テンプレート管理画面では、アクアリウムの実験で使用するテンプレートの作成、表示、更新を行います。

### テンプレート一覧

テンプレート一覧を表示するには、ダッシュボードまたはメニューから、テンプレートを選択します。
選択すると、作成済みテンプレートの一覧が表示されます。

![テンプレート一覧](/assets/images/aquarium/template-list.png)

### テンプレート登録

テンプレートを登録するには、テンプレート一覧画面からモデルテンプレート登録を選択します。

* Step 1

![テンプレート登録1](/assets/images/aquarium/template-create1.png)

テンプレートの基本設定を登録します。

|種類　|説明　|
|---|---|
|テンプレート名|テンプレートの名前。|
|説明文|テンプレートの説明など補足情報。|
|公開設定|テンプレートを公開するテナント。現在のテナント:テンプレート登録者のカレントテナント。全テナントに公開:全てのテナント|

* Step 2

![テンプレート登録2](/assets/images/aquarium/template-create2.png)

前処理を登録します。前処理のないテンプレートでは空にします。

|種類|説明|
|---|---|
|前処理コンテナイメージ|前処理で利用するDockerレジストリ、コンテナ、タグ、アクセストークンを指定する。|
|スクリプト|ソースコードを格納しているGitサーバ、リポジトリ、ブランチ、コミットID、アクセストークンを指定する。コミットIDを指定した場合はブランチの入力値は無視される。コミットIDが未指定の場合はブランチのHEADが選択される。|
|実行コマンド|前処理で実行するコマンドを指定する。コンテナイメージに設定されたcommand, entrypointは無効になり、このコマンドのみが実行される|
|CPU・メモリ・GPU|前処理で利用するコンテナに割り当てるリソース量を指定する。|

* Step 3

![テンプレート登録3](/assets/images/aquarium/template-create3.png)

学習を登録します。

|種類|説明|
|---|---|
|学習コンテナイメージ|学習で利用するDockerレジストリ、コンテナ、タグ、アクセストークンを指定する。|
|スクリプト|ソースコードを格納しているGitサーバ、リポジトリ、ブランチ、コミットID、アクセストークンを指定する。コミットIDを指定した場合はブランチの入力値は無視される。コミットIDが未指定の場合はブランチのHEADが選択される。|
|実行コマンド|学習で実行するコマンドを指定する。コンテナイメージに設定されたcommand, entrypointは無効になり、このコマンドのみが実行される|
|CPU・メモリ・GPU|学習で利用するコンテナに割り当てるリソース量を指定する。|

* Step 4

![テンプレート登録4](/assets/images/aquarium/template-create4.png)

推論を登録します。推論のないテンプレートでは空にします。

|種類|説明|
|---|---|
|推論コンテナイメージ|推論で利用するDockerレジストリ、コンテナ、タグ、アクセストークンを指定する。|
|スクリプト|ソースコードを格納しているGitサーバ、リポジトリ、ブランチ、コミットID、アクセストークンを指定する。コミットIDを指定した場合はブランチの入力値は無視される。コミットIDが未指定の場合はブランチのHEADが選択される。|
|実行コマンド|推論で実行するコマンドを指定する。コンテナイメージに設定されたcommand, entrypointは無効になり、このコマンドのみが実行される|
|CPU・メモリ・GPU|推論で利用するコンテナに割り当てるリソース量を指定する。|

### テンプレート更新

テンプレートを更新するには、テンプレート一覧画面から更新するテンプレート登録を選択します。

![テンプレート更新1](/assets/images/aquarium/template-edit1.png)
![テンプレート更新2](/assets/images/aquarium/template-edit2.png)
![テンプレート更新3](/assets/images/aquarium/template-edit3.png)
![テンプレート更新4](/assets/images/aquarium/template-edit4.png)

入力内容はテンプレート登録と同じです。

## テンプレートの補足情報

### アクセストークン

Dockerレジストリ、Gitリポジトリの公開設定によっては、アクセスにアクセストークンが必要な場合があります。

テンプレートにはアクセストークンの設定を含めることができます。
テンプレートにトークンがあれば、どのユーザが実験を行う場合でも、それが使われます。
テンプレートにトークンがなければ、ユーザ情報設定画面で入力したユーザごとのトークンが使われます。

### 前処理

テンプレートでは、学習処理の一部を「前処理」として分離することができます。
前処理は、(テンプレートとそのバージョン、データセットとそのバージョン)の組が同一であれば、その結果が再利用されます。

ある(テンプレートとそのバージョン、データセットとそのバージョン)組に対して初めて実験を行うと、前処理、学習ともに実行されます。
同じ組に対して実験を再実行すると、前処理は実行されず、前回の前処理の結果が再利用され、後続の学習の入力になります。

### フォルダ構造

アクアリウム学習・推論実行時のフォルダ構造は、KAMONOHAHIのそれを基にしています。

* 前処理なしテンプレートの学習・前処理ありテンプレートの前処理

```
/kqi/input
/kqi/output
/kqi/git
```

は、KAMONOHASHIのものと同じです。

アクアリウムのデータセットはKAMONOHASHIのFlatデータセットです。

* 前処理ありテンプレートの学習

```
/kqi/output
/kqi/git
```

は、KAMONOHASHIのものと同じです。

前処理の結果は/kqi/parentから参照できます。
前処理で/kqi/output/a/bとして出力したファイルは、学習からは/kqi/parent/a/bとして読むことができます。

/kqi/inputは空です。

* 推論

```
/kqi/input
/kqi/output
/kqi/git
```

は、KAMONOHASHIのものと同じです。

アクアリウムのデータセットはKAMONOHASHIのFlatデータセットです。

学習の結果は/kqi/parentから参照できます。
学習で/kqi/output/a/bとして出力したファイルは、推論からは/kqi/parent/a/bとして読むことができます。
