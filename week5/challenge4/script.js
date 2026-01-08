
document
  .querySelectorAll('ul a')
  .forEach(el => el.addEventListener('click', function(e) {
    e.preventDefault();
    alert(this.innerHTML);
  }));
