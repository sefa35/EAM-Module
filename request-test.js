'use strict';

const axios = require('axios');

const user = {
    'username': 'sefa',
    'password': '1'
  };

const program = {
    'title': 'This is a title',
    'info': 'This is an info',
    'visible': true,
    'teacherId': 1
}

axios.get('http://localhost:4000/auth/sefa')
.then(response =>{
    console.log("Axios Response",response);
})
.catch(error => {
    console.log(error);
});

// axios.post('http://localhost:3000/books',book)
// .then(response =>{
//     console.log(response);
// })
// .catch(error => {
//     console.log(error);
// });