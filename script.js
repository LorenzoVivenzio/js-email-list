const apriUrlapi = "https://flynn.boolean.careers/exercises/api/random/mail"
// console.log("ciao")
const titleElem = document.querySelector("h1")
const btn = document.querySelector(".reset")
const form = document.querySelector("form")
let isGeneerate = false;
axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function (resp) {

        btn.addEventListener("click", function () {

            if (isGeneerate === true) {
                

            } else {
                btn.innerHTML = "genera"
                for (let i = 0; i < 10; i++) {
                    const email = resp.data.response;
                    let newEmail = [];
                    newEmail.push(email);
                    console.log(newEmail)
                    const emailStamp = document.createElement("ul")
                    emailStamp.innerHTML = `<li>${email}</li>`;
                    document.body.appendChild(emailStamp);

                }
            }
isGeneerate = !isGeneerate

        })


    })


