# ベースイメージとして Node.js 18 を使用
FROM node:18-alpine

# 作業ディレクトリを指定
WORKDIR /app

# パッケージ関連のファイルをコピー
COPY package*.json ./

# 必要なパッケージをインストール
RUN npm install

# ポート 3000 を開放
EXPOSE 3000
