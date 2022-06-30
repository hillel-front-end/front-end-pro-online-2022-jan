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