document.querySelector('.close').style.display = ('none');
document.querySelector('.options').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(ducument.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.open').style.display = 'inline'
    document.querySelector('.close').style.display = 'none'
    }
    else{
        setTimeout(() => {
    document.querySelector('.close').style.display = 'inline'}, 400);
    document.querySelector('.open').style.display = 'none'
    }
})
