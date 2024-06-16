fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        console.log('data berhasil dimunculkan!!')
        const todoList = document.getElementById('data');
        data.forEach((todo, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${todo.title}</td>
                <td>${todo.completed}</td>
            `;
            todoList.appendChild(row);
        });
    });