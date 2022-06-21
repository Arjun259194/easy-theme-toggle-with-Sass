let themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click',(e)=>{
  document.body.classList.toggle('dark');

  themeToggle.classList.toggle('dark');
  themeToggle.classList.toggle('light');
})