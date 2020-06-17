function showMore(){
    let moreButton = document.querySelectorAll('.project__dscr__more');

    moreButton.forEach(function(item){
        item.addEventListener('click',function(e){
            e.preventDefault();

            if(this.previousSibling.classList.contains('show')){
                
            }
            
            
        })
    })
}
module.exports = showMore;