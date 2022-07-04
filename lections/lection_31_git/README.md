### Git Commands


* https://git-scm.com/book/en/v2/images/lifecycle.png

* `git init`
* `git status`

<!-- Добавить в *stage* этап. *Stage* - быть готовым к фиксации  -->
* `git add <path>`
* `git add lections/lection_14_Destructuring_ES6_strings/example.xml`
* `git add .`

<!-- Убрать файл из Staged в Modified/Deleted/Created -->
* `git restore --staged <file>`

<!-- Зафикскировать все файлы в Staged этапе -->
* `git commit -m"some description"`


<!-- Отменить любые изменения в файле -->
* `git restore <file>`



* `git checkout <commit hash id>`



<!-- Удаление последнего коммита -->

* `git reset --<mode> HEAD~<amount>`

<!-- Удаление последнего коммита и все изменения -->
* `git reset --hard HEAD~1`

<!-- Удаление последнего коммита !но! не изменения -->
* `git reset --soft HEAD~1` 


<!-- Перезапись коммита -->
* `git commit --amend`



<!-- vim editor / commands -->

<!-- для входа в режим редактирования -->
* на клавиатуре кнопка - `i`

<!-- для выхода из режиа редактирования -->
* на клавиатуре кнопка - `ESC`

<!-- для сохранения сообщения и выхода из VIM -->
* `:wq`



<!-- ------------- -->
<!-- Branch -->

* `git branch`
* `git branch <branch-name>`
* `git checkout <branch-name>`

<!-- create branch and checkout -->
* `git checkout -b <branch-name>`


<!-- Merge with/without --no-ff -->

<!-- 
Возможны 2 режима:
1) Если существуют коммиты в обоих ветках - слияние через Merge коммит
2) Если в target ветке небыло изменений по сравнению с merge веткой,
то произойдет перемотка (fast-forward) на merge ветку
 -->
* `git merge <branch-name>`


<!-- Слияние через создание Merge коммита -->
* `git merge --no-ff <branch-name>`


<!-- Rebase, -i -->

* `git rebase <branch-name>`

* `git rebase -i <branch-name>`

Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous commit's log message


<!-- Push, Pull, Origin, PR, github... -->

* `git remote add origin <path>`

* `git push origin <branch-name>`

<!-- const origin = '<path>' -->





<!-- Resolve conflicts -->