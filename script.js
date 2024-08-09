// const toggles = document.querySelectorAll('.faq-toggle');

// toggles.forEach(toggle =>{
//     toggle.addEventListener('click', () =>{
//         toggle.parentNode.classList.toggle('active');
//     })
// })

alert('eh gw minjem 10k dong')


const tombol = document.getElementById('tombol');
const tombol1 = document.getElementById('tombol1');


tombol.addEventListener('click', () => {
    const xPos = Math.random() * (window.innerWidth - tombol.clientWidth);
    const yPos = Math.random() * (window.innerHeight - tombol.clientHeight);

    tombol.style.position = 'absolute';
    tombol.style.left = `${xPos}px`;
    tombol.style.top = `${yPos}px`;
});
tombol1.addEventListener('click', () => {
    tombol.style.display= "none"
   tombol1.style.display="none"
   document.getElementById('enter').style.display= "flex";
});

