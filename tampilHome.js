let divData = document.getElementById("divData");

getUser();
//get
function getUser() {
  fetch("https://if3b-zarazzar.vercel.app/ternak") //https://if3b-zarazzar.vercel.app/ternak .. fetch("http://localhost:3003/ternak")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
