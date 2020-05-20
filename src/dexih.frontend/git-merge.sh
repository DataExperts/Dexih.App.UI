    git pull --all
    git checkout master
    git merge dev-gh
    git checkout release
    git merge master
    git checkout dev-gh
    git push --all