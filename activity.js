let email = document.getElementById("email");
let name = document.getElementById("name");
let gender = document.getElementById("gender");
let status = document.getElementById("status");
let alert = document.getElementById("alert");

getUser();
//get
function getUser() {
  fetch("https://if3b-zarazzar.vercel.app/ternak/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.forEach(showUser);
    })
    .catch((error) => {
      console.log(error);
    });
}

function showUser(value, index) {
  listUser.innerHTML += `<tr>
    <td>${value.nama}</td>
    <td>${value.judul}</td>
    <td>${value.gender}</td>
    <td>${value.status}</td>
    <tr>`;
}

// function createUser() {
//   console.log("Button Simpan Ditekan !");
//   fetch("", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer 0517ffbd1a065d2c62b7ab999722bba2e4e17f80f10026134d1cfb04b04dfedf",
//     },
//     body: JSON.stringify({
//       email: email.value,
//       name: name.value,
//       gender: gender.value,
//       status: status.value,
//     }),
//   })
//     .then((response) => {
//       response.json();
//       console.log(response.status);
//       if (response.status == 201) {
//         alert.innerHTML = `<div class="alert alert-success">User Berhasil Disimpan</div>`;
//       } else {
//         alert.innerHTML = `<div class="alert alert-danger">User Gagal Disimpan</div>`;
//       }
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
