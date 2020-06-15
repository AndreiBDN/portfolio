function open(){
    let projects = document.querySelectorAll('.portfolio__item'),
        work = document.querySelectorAll('.project'),
        workWrapper = document.querySelector('.project__wrapper'),
        close = document.querySelector('.close');



    projects.forEach(function(item, i){
        item.addEventListener('click', function(){
            
           let a = this.getAttribute('data-name');
           work.forEach(function(w){
               w.getAttribute('name');
               if(w.dataset.project == a){
                   workWrapper.classList.add('active');
                   w.classList.add('active');
                   
                   workWrapper.addEventListener('click', function(){
                       w.classList.remove('active');
                       setTimeout(()=>{
                        workWrapper.classList.remove('active');
                       },500)
                       
                   });
                   w.addEventListener('click', function(e){
                       if(e.target.classList.contains('close')){
                        w.classList.remove('active');
                        setTimeout(()=>{
                         workWrapper.classList.remove('active');
                        },500)
                       } else {
                        e.stopPropagation();
                       }
                       
                   })
               }
           })
                     
        })
    });

}
module.exports = open;