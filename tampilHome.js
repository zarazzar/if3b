let divData = document.getElementById("divData");

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

// function showUser(item, index) {
//   divData.innerHTML += `<div class="card">
//                             <div class="card-body">

//                             </div>
//                           </div>`;
// }

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
