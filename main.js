import './main.css';

import MockApi from 'MockApi';

const api = new MockApi();


async function getData() {
    const response = await api.getTodos();
    const todos = await response.json();
    let html = '';
    todos.forEach(todo => {
        let htmlSegment = `<div class="item">
        <h2>${api.headers}</h2>
        <div class="todo"><p>${api.todos}"</p><i className={ToDoItem.icon} /></div>
    </div>`;

html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
  }
getData();

