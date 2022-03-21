
const button = document.querySelector('#multiply');
button.addEventListener('click', () => {
    let A = document.getElementById("formLb1").value;
    let B = document.getElementById("formLb2").value;
    document.getElementById('result').innerHTML = A * B;
})

const button1 = document.querySelector("#divide");
button1.addEventListener("click", () => {
  let A = document.getElementById("formLb1").value;
  let B = document.getElementById("formLb2").value;
  document.getElementById("result").innerHTML = A / B;
});


// a.innerText = 'money man';
// console.log(a);


// class User {
//     constructor(username, email, height) {
        
//         this.username = username;
//         this.email = email;
//         this.height = height;
//     }
//     login() {
//         console.log(`${this.username} just logged in`)
//     }
// }

// const userOne = new User('mario', 'marioatgmail.com','8ft');
// const userTwo = new User("Toni", "toniatgmail.com", "8ft");
// const userThree = new User("mario", "marioatgmail.com", "8ft");




// console.log(userOne, userTwo, userThree);
// userOne.login()
