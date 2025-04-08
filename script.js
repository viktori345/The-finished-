document.querySelector('.cta-button').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
});

document.querySelector('.cta-button').addEventListener('mouseout', function() {
     this.style.transform = 'scale(1)';
 });

 $('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0}, 800); 
});

 temp1.addEventListener('click',() => {
    window.scrollTo(0, 0)
 })