function submitForm() {
    let form = document.forms['contact-form'];
    let userName = form['user-name'].value;
    console.log(form);
    console.log(userName);
   
}

document.getElementById('send-button').addEventListener("click", () => submitForm());