function createItem(side, value, value2, value3) {
    let entree = document.createElement('h4');
    entree.textContent = value; 
    side.appendChild(entree); 
    
    let entreeDescription = document.createElement('p');
    entreeDescription.textContent = value2; 
    side.appendChild(entreeDescription); 
    
    let price = document.createElement('p'); 
    price.textContent = value3; 
    side.appendChild(price);
}

function loadMenu() {
    let container = document.getElementById('container');
    
    if (container.classList.contains('menu')) return; 
    if (container.classList.contains('about')) container.classList.remove('about');
    if (container.classList.contains('contact')) container.classList.remove('contact'); 
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    
    container.classList.add('menu'); 
    
    let headingDiv = document.createElement('div');
    headingDiv.classList.add('menu-heading'); 
    container.appendChild(headingDiv);
    
    let heading = document.createElement('h2');
    heading.textContent = 'Menu';
    headingDiv.appendChild(heading);
    
    let menuSide1 = document.createElement('div');
    menuSide1.classList.add('menu-side-1'); 
    container.appendChild(menuSide1);
    
    let section = document.createElement('h3'); 
    section.textContent = 'Appetizers'; 
    menuSide1.appendChild(section);
    
    createItem(menuSide1, 'Fried Calimari', 'With jalapeno and tzatizki', '10');
    createItem(menuSide1, 'Shrimp Cocktail', 'With cocktail sauce', '9');
    createItem(menuSide1, 'Cajun Ribs', 'With homemade cajun sauce', '14');
    createItem(menuSide1, 'Stuffed Mushrooms', 'With gouda cheese and lobtser', '14');
    
    section = document.createElement('h3');
    section.textContent = 'Brunch'; 
    menuSide1.appendChild(section); 
    
    createItem(menuSide1, 'Coconut Pancakes', 'With banana, peanut butter and maple syrup', '8');
    createItem(menuSide1, 'Bacon and Eggs', 'Choice of scrambled, sunny side up or poached', '10');
    createItem(menuSide1, 'Breakfast Special', 'With sausage, scrambled eggs and waffles', '14');
    
    let menuSide2 = document.createElement('div');
    menuSide2.classList.add('menu-side-2');
    container.appendChild(menuSide2); 
    
    section = document.createElement('h3');
    section.textContent = 'Dinner';
    menuSide2.appendChild(section);
    
    createItem(menuSide2, 'Sirloin Oscar', 'Topped with bernaise sauce, scallops and shrimp', '34');
    createItem(menuSide2, 'Carne Asada', 'With chimicurri and pico de gallo', '24'); 
    createItem(menuSide2, 'Mediterranian Burger', 'One-pound patty, tzatizki, and feta cheese', '16');
    createItem(menuSide2, 'Linguini Alfredo', 'Choice of seafood, chicken, or veggie', '16');
    
    section = document.createElement('h3');
    section.textContent = 'Dessert';
    menuSide2.appendChild(section);
    
    createItem(menuSide2, 'Banana Chocolate Cake', 'Served with vanilla ice cream', '8');
    createItem(menuSide2, 'Sherbert', 'Choice of strawberry, pineapple or mango', '4');
}

export {

    loadMenu
}