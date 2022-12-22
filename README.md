# 초기 설정

```shell
npm init -y

npm install express nunjucks mysql2
```

# 디렉토리 구조

```
|-- controller
|    |-- board.controller.js
|-- public
|    |-- css
|    |    |-- board
|    |    |    |-- list.css
|    |    |    |-- modify.css
|    |    |    |-- view.css
|    |    |    |-- write.css
|-- repository
|    |-- board.repository.js
|    |-- db.js
|-- routes
|    |-- board.route.js
|    |-- index.js
|-- services
|    |-- board.service.js
|-- views
|    |-- board
|    |    |-- list.html
|    |    |-- modify.html
|    |    |-- view.html
|    |    |-- write.html
|-- server.js
```
