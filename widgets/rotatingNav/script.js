const open = document.getElementById('open')
const close = document.getElementById('close')



open.addEventListener('click', ()=> {
    document.getElementById('main-content').classList.add('show-nav');
    document.getElementById('circle').classList.add('show-nav');
    document.getElementById('nav').classList.add('show-nav');

})

close.addEventListener('click', ()=> {
    document.getElementById('main-content').classList.remove('show-nav');
    document.getElementById('circle').classList.remove('show-nav');
    document.getElementById('nav').classList.remove('show-nav');
})
