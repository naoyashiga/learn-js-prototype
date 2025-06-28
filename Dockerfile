# Node.jsの公式イメージをベースイメージとして使用します
FROM node:20-slim

# コンテナ内の作業ディレクトリを設定します
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールします
# package.jsonとpackage-lock.jsonをコピーします
COPY package.json ./

# コンテナが起動したときに実行されるデフォルトのコマンドを設定します
# ここではbashシェルを起動して、コンテナ内で作業できるようにします
CMD [ "bash" ]
