#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:xiaoxue423/gugu-demo0.git master:gugu
# git push -f  git@gitee.com:xiaoxue0423/gugu-demo0.git master
# git@gitee.com:xiaoxue0423/gugu-demo0.git


cd -
