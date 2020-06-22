function tabs (){
    let skills = document.querySelector('.skills__names'),
        skillsName = document.querySelectorAll('.skills__name'),
        description = document.querySelectorAll('.skills__dscr');

    skills.addEventListener('click', function(e){
        
        let target = e.target;
        if(target.classList.contains('skills__name')){
            skillsName.forEach(i=>i.classList.remove('active'));
            target.classList.add('active');

            let d = target.dataset.skill;
            description.forEach(i=>{

                let a = i.dataset.dscr;

                if(a == d && i.classList.contains('out')){
                    i.classList.remove('out');
                    i.classList.add('active');
                }   

                if(i.classList.contains('active') && a!=d){
                    i.classList.add('out');
                    setTimeout(function(){
                        i.classList.remove('out');
                        i.classList.remove('active');
                    },350)
                }

                if(a == d){
                    i.classList.add('active');
                }
                
            })
        } 
        
    })
    
}
module.exports = tabs;