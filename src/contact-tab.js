function loadContact() {
    let container = document.getElementById('container');
    if (container.classList.contains('contact')) return; 
    if (container.classList.contains('menu')) container.classList.remove('menu');
    if (container.classList.contains('about')) container.classList.remove('about'); 
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    container.classList.add('contact');
    let header = document.createElement('h2'); 
    header.textContent = 'Contact Us';
    container.appendChild(header);
    let img = document.createElement('img');
    img.setAttribute('src', '/images/contact.jpg'); 
    container.appendChild(img); 
    let para = document.createElement('p');
    para.textContent = 'Phone: (555)-723-3293'; 
    container.appendChild(para);
    para = document.createElement('p');
    para.textContent = 'Email: midtownkitchen@gmail.com'; 
    container.appendChild(para); 
    para = document.createElement('p');
    para.textContent = 'In Person: 234 Lafayette St.'; 
    container.appendChild(para);
}

export { loadContact }