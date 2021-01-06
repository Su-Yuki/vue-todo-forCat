// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

// コンストラクタ関数 Vue
const app = new Vue({
    // アプリケーションで使用したいデータは data
    el: '#app',
    data: {
      // 使用するデータ
    },
    methods: {
      // 使用するメソッド
    }
  })