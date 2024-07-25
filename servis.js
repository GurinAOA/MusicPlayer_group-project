export default class ServicesRequest {
    static async getUsers() {
      try {
        const responce = await fetch("http://localhost:3001/users");
        const data = await responce.json();
        return data;
      } catch (err) {
        console.error(err);
      }
    }
    static async postUser(body) {
      try {
        await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } catch (err) {
        console.error(err);
      }
    }
  }

// //get-запрос в базу данных
// fetch('http://localhost:3001/posts')
//     .then(responce => responce.json())
//     .then(data => console.log(data))

// // post - создаем запрос
// function addUser() {
//     fetch('http://localhost:3001/posts', {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             usersName: 'Kirill',
//             city: 'Moskow'
//         })
//     })
// };
// document.querySelector('button').addEventListener('click', addUser())

// // put - изменяем данные
// fetch('http://localhost:3001/posts/5', {
//     method: 'PUT',
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//         usersName: 'Katerina',
//         city: 'Gomel'
//     })
// })

// // delete - удаляем данные
// fetch('http://localhost:3001/posts/5', {
//     method: 'DELETE',
//     headers: { "Content-Type": "application/json" },
// })