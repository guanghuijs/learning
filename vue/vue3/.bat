cd dist

git init

@REM 关联远程仓库
@REM git remote add origin git@github.com:guanghuijs/learning.git
git remote add origin https://gitee.com/guanghuijs/learning.git

git pull

@REM 删除远程pages分支
@REM git push git@github.com:guanghuijs/learning.git --delete pages
git push https://gitee.com/guanghuijs/learning.git --delete pages

@REM 创建新的pages分支并切换
git checkout -b pages

@REM 提交
git add .
git commit -m 'build'

@REM 推送到远程
git push origin pages