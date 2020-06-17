function sendForm(){
    let form = document.querySelector('#main-form'),
    message = {
        ok: 'Message sent',
        wait: 'Message is sending',
        err: 'Something happened. Please try again'
    },
    request = new XMLHttpRequest;
  

    request.open();
    
}
module.exports = sendForm;