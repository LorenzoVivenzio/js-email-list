const apriUrlapi = "https://flynn.boolean.careers/exercises/api/random/mail"
// console.log("ciao")
const titleElem = document.querySelector("h1")
const btnGenera = document.querySelector(".reset")
const form = document.querySelector("form")
const submitBtn = document.getElementById("submit")
const listEmail = document.querySelector(".list-style")
let isGeneerate = false;
axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function (resp) {


        btnGenera.addEventListener("click", function () {

            if (isGeneerate === true) {
            } else {
                submitBtn.classList.remove("d-none")
                btnGenera.classList.add("d-none")
                for (let i = 0; i < 10; i++) {
                    const email = resp.data.response;
                    let newEmail = [];
                    newEmail.push(email);
                    const emailStamp = document.createElement("ul")
                    emailStamp.innerHTML =
                        `<ul class="m-3 p-3 text-white bg-info bg-opacity-10 border border-white border-start-0 rounded-end">
                           <li>${email} </li>
                         </ul>`;
                    document.body.appendChild(emailStamp);

                }
            }
            isGeneerate = !isGeneerate

        })


    })


