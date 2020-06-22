function showMore(){
    let moreButton = document.querySelectorAll('.project__dscr__more');

    moreButton.forEach(function(item){
        item.addEventListener('click',function(e){
            e.preventDefault();

            

            if(this.previousElementSibling.classList.contains('show')){
                this.previousElementSibling.classList.remove('show');
                this.innerText = 'more info';
            }else{
                this.previousElementSibling.classList.add('show');
                this.innerText = 'less info';
            }

        })
    })
}
module.exports = showMore;