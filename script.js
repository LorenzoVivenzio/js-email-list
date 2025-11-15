const apriUrlapi = "https://flynn.boolean.careers/exercises/api/random/mail"
// console.log("ciao")
const titleElem = document.querySelector("h1")
axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function (resp) {
        let email = resp.data.response;
        titleElem.innerHTML = `${email}`
        let newEmail = [];
        
        for(let i = 0; i < 10; i++){
            
            newEmail.push(email);
            console.log(newEmail)
            const emailStamp = document.createElement("ul")
            emailStamp.innerHTML = `<li>${email}</li>`;
            document.body.appendChild(emailStamp);

        }

        


    })
