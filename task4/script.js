const ChangeTheLinkText = document.querySelector('#ChangeTheLinkText');

ChangeTheLinkText.addEventListener('click', function(event){
    this.textContent = prompt ('');
    event.preventDefault();
})

