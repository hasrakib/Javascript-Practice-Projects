const pass_gen = document.querySelector("#password-generator");
const pass_gen_btn = document.querySelector("#password-generator-button");
const pass_lenght = document.querySelector("#password-length");

pass_gen_btn.addEventListener("click", function () {
    let pass = "";
    let variables = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

    for (let i = 0; i < pass_lenght.value; i++) {
        pass += variables.charAt(Math.floor(Math.random() * variables.length));
    }

    pass_gen.value = pass;
})