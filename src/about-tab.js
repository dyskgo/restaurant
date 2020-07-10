function loadAbout() {
    let container = document.getElementById('container');
    
    if (container.classList.contains('about')) return; 
    if (container.classList.contains('menu')) container.classList.remove('menu');
    if (container.classList.contains('contact')) container.classList.remove('contact'); 
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    
    container.classList.add('about');
    
    let figure1 = document.createElement('figure');
    figure1.setAttribute('id', 'image1');
    container.appendChild(figure1);
    
    let img1 = document.createElement('img');
    img1.setAttribute('src', 'images/food1.jpg');
    img1.classList.add('front-img');
    figure1.appendChild(img1); 
    
    let figure2 = document.createElement('figure');
    figure2.setAttribute('id', 'image2'); 
    container.appendChild(figure2); 
    
    let img2 = document.createElement('img');
    img2.setAttribute('src', 'images/food2.jpg'); 
    img2.classList.add('front-img'); 
    figure2.appendChild(img2); 
    
    let figure3 = document.createElement('figure'); 
    figure3.setAttribute('id', 'image3'); 
    container.appendChild(figure3); 
    
    let img3 = document.createElement('img'); 
    img3.setAttribute('src', 'images/food3.jpg'); 
    img3.classList.add('front-img'); 
    figure3.appendChild(img3); 
    
    let sidePanel = document.createElement('div');
    sidePanel.setAttribute('id', 'about-text'); 
    container.appendChild(sidePanel); 
    
    let header2 = document.createElement('h2'); 
    header2.innerHTML = 'Welcome'; 
    sidePanel.appendChild(header2); 
    
    let header3 = document.createElement('h3'); 
    header3.innerHTML = 'To Your Taste Buds'; 
    sidePanel.appendChild(header3); 
    
    let p1 = document.createElement('p'); 
    p1.textContent = 'Nestled in the heart of the city, Midtown Kitchen has been a staple of the community for over 40 years, serving scrumptious meals made with locally sourced goodness and a whole lot of flavor. Our little diner is packed from brunch to late-night, offering a fine selection of meals all crafted painstakingly from scratch.'; 
    sidePanel.appendChild(p1);
    
    let br = document.createElement('br'); 
    sidePanel.appendChild(br); 
    
    let p2 = document.createElement('p'); 
    p2.textContent = 'Opened by Mama Anna in 1974, Midtown Kitchen was different than the other restaurants and diners that residents were used to. Mama Anna cooked all of the meals by hand, and used only the best ingredients and organic food to create her home-cooked-style meals.'; 
    sidePanel.appendChild(p2);
    
    let br2 = document.createElement('br'); 
    sidePanel.appendChild(br2); 
    
    let p3 = document.createElement('p'); 
    p3.textContent = 'That spirit lives on today at Midtown Kitchen. This is more than a restaurant -- this is a place for everyone in the community to come, eat, laugh, and enjoy good food. Join us for brunch, lunch, and dinner. We can\'t wait for you to try out what we\'ve been cooking. We know you\'ll love it!'; 
    sidePanel.appendChild(p3); 
}

export { loadAbout };