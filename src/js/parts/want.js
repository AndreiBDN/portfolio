function want (){
    let wantButton = document.querySelectorAll('.want'),
        cont = document.querySelector('.contacts');

    wantButton.forEach((i)=>{
        i.addEventListener('click', (e)=>{
            e.preventDefault();
            let a = document.querySelectorAll('section');
            a.forEach(i=>i.classList.remove('active'));
            cont.classList.add('active');
        })
    })

}
module.exports = want;