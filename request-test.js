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
const programAssign = {
    'userid': 1,
    'programid':1
}

axios.delete('http://localhost:4000/program/1/1')
.then(response =>{
    console.log("Axios Response",response);
})
.catch(error => {
    console.log(error);
});

// axios.post('http://localhost:4000/program',programAssign)
// .then(response =>{
//     console.log(response);
// })
// .catch(error => {
//     console.log(error);
// });