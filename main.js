!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function a(e,t,n,a){let i=document.createElement("h4");i.textContent=t,e.appendChild(i);let o=document.createElement("p");o.textContent=n,e.appendChild(o);let d=document.createElement("p");d.textContent=a,e.appendChild(d)}n.r(t),function(){let e=document.getElementById("content"),t=document.createElement("header");e.appendChild(t);let n=document.createElement("h1");n.innerHTML="Midtown Kitchen",t.appendChild(n);let a=document.createElement("nav");e.appendChild(a);let i=document.createElement("ul");a.appendChild(i);let o=document.createElement("li");o.setAttribute("id","tab-about"),o.innerHTML="About",i.appendChild(o),o=document.createElement("li"),o.setAttribute("id","tab-menu"),o.innerHTML="Menu",i.appendChild(o),o=document.createElement("li"),o.setAttribute("id","tab-contact"),o.innerHTML="Contact",i.appendChild(o);let d=document.createElement("div");d.setAttribute("id","container"),d.classList.add("about"),e.appendChild(d);let l=document.createElement("figure");l.setAttribute("id","image1"),d.appendChild(l);let c=document.createElement("img");c.setAttribute("src","images/food1.jpg"),c.classList.add("front-img"),l.appendChild(c);let r=document.createElement("figure");r.setAttribute("id","image2"),d.appendChild(r);let s=document.createElement("img");s.setAttribute("src","images/food2.jpg"),s.classList.add("front-img"),r.appendChild(s);let m=document.createElement("figure");m.setAttribute("id","image3"),d.appendChild(m);let u=document.createElement("img");u.setAttribute("src","images/food3.jpg"),u.classList.add("front-img"),m.appendChild(u);let p=document.createElement("div");p.setAttribute("id","about-text"),d.appendChild(p);let h=document.createElement("h2");h.innerHTML="Welcome",p.appendChild(h);let f=document.createElement("h3");f.innerHTML="To Your Taste Buds",p.appendChild(f);let C=document.createElement("p");C.textContent="Nestled in the heart of the city, Midtown Kitchen has been a staple of the community for over 40 years, serving scrumptious meals made with locally sourced goodness and a whole lot of flavor. Our little diner is packed from brunch to late-night, offering a fine selection of meals all crafted painstakingly from scratch.",p.appendChild(C);let g=document.createElement("br");p.appendChild(g);let b=document.createElement("p");b.textContent="Opened by Mama Anna in 1974, Midtown Kitchen was different than the other restaurants and diners that residents were used to. Mama Anna cooked all of the meals by hand, and used only the best ingredients and organic food to create her home-cooked-style meals.",p.appendChild(b);let E=document.createElement("br");p.appendChild(E);let y=document.createElement("p");y.textContent="That spirit lives on today at Midtown Kitchen. This is more than a restaurant -- this is a place for everyone in the community to come, eat, laugh, and enjoy good food. Join us for brunch, lunch, and dinner. We can't wait for you to try out what we've been cooking. We know you'll love it!",p.appendChild(y)}();let i=document.getElementById("tab-about"),o=document.getElementById("tab-menu"),d=document.getElementById("tab-contact");i.addEventListener("click",(function(){let e=document.getElementById("container");if(e.classList.contains("about"))return;for(e.classList.contains("menu")&&e.classList.remove("menu"),e.classList.contains("contact")&&e.classList.remove("contact");e.firstChild;)e.removeChild(e.lastChild);e.classList.add("about");let t=document.createElement("figure");t.setAttribute("id","image1"),e.appendChild(t);let n=document.createElement("img");n.setAttribute("src","images/food1.jpg"),n.classList.add("front-img"),t.appendChild(n);let a=document.createElement("figure");a.setAttribute("id","image2"),e.appendChild(a);let i=document.createElement("img");i.setAttribute("src","images/food2.jpg"),i.classList.add("front-img"),a.appendChild(i);let o=document.createElement("figure");o.setAttribute("id","image3"),e.appendChild(o);let d=document.createElement("img");d.setAttribute("src","images/food3.jpg"),d.classList.add("front-img"),o.appendChild(d);let l=document.createElement("div");l.setAttribute("id","about-text"),e.appendChild(l);let c=document.createElement("h2");c.innerHTML="Welcome",l.appendChild(c);let r=document.createElement("h3");r.innerHTML="To Your Taste Buds",l.appendChild(r);let s=document.createElement("p");s.textContent="Nestled in the heart of the city, Midtown Kitchen has been a staple of the community for over 40 years, serving scrumptious meals made with locally sourced goodness and a whole lot of flavor. Our little diner is packed from brunch to late-night, offering a fine selection of meals all crafted painstakingly from scratch.",l.appendChild(s);let m=document.createElement("br");l.appendChild(m);let u=document.createElement("p");u.textContent="Opened by Mama Anna in 1974, Midtown Kitchen was different than the other restaurants and diners that residents were used to. Mama Anna cooked all of the meals by hand, and used only the best ingredients and organic food to create her home-cooked-style meals.",l.appendChild(u);let p=document.createElement("br");l.appendChild(p);let h=document.createElement("p");h.textContent="That spirit lives on today at Midtown Kitchen. This is more than a restaurant -- this is a place for everyone in the community to come, eat, laugh, and enjoy good food. Join us for brunch, lunch, and dinner. We can't wait for you to try out what we've been cooking. We know you'll love it!",l.appendChild(h)})),o.addEventListener("click",(function(){let e=document.getElementById("container");if(e.classList.contains("menu"))return;for(e.classList.contains("about")&&e.classList.remove("about"),e.classList.contains("contact")&&e.classList.remove("contact");e.firstChild;)e.removeChild(e.lastChild);e.classList.add("menu");let t=document.createElement("div");t.classList.add("menu-heading"),e.appendChild(t);let n=document.createElement("h2");n.textContent="Menu",t.appendChild(n);let i=document.createElement("div");i.classList.add("menu-side-1"),e.appendChild(i);let o=document.createElement("h3");o.textContent="Appetizers",i.appendChild(o),a(i,"Fried Calimari","With jalapeno and tzatizki","10"),a(i,"Shrimp Cocktail","With cocktail sauce","9"),a(i,"Cajun Ribs","With homemade cajun sauce","14"),a(i,"Stuffed Mushrooms","With gouda cheese and lobtser","14"),o=document.createElement("h3"),o.textContent="Brunch",i.appendChild(o),a(i,"Coconut Pancakes","With banana, peanut butter and maple syrup","8"),a(i,"Bacon and Eggs","Choice of scrambled, sunny side up or poached","10"),a(i,"Breakfast Special","With sausage, scrambled eggs and waffles","14");let d=document.createElement("div");d.classList.add("menu-side-2"),e.appendChild(d),o=document.createElement("h3"),o.textContent="Dinner",d.appendChild(o),a(d,"Sirloin Oscar","Topped with bernaise sauce, scallops and shrimp","34"),a(d,"Carne Asada","With chimicurri and pico de gallo","24"),a(d,"Mediterranian Burger","One-pound patty, tzatizki, and feta cheese","16"),a(d,"Linguini Alfredo","Choice of seafood, chicken, or veggie","16"),o=document.createElement("h3"),o.textContent="Dessert",d.appendChild(o),a(d,"Banana Chocolate Cake","Served with vanilla ice cream","8"),a(d,"Sherbert","Choice of strawberry, pineapple or mango","4")})),d.addEventListener("click",(function(){let e=document.getElementById("container");if(e.classList.contains("contact"))return;for(e.classList.contains("menu")&&e.classList.remove("menu"),e.classList.contains("about")&&e.classList.remove("about");e.firstChild;)e.removeChild(e.lastChild);e.classList.add("contact");let t=document.createElement("h2");t.textContent="Contact Us",e.appendChild(t);let n=document.createElement("img");n.setAttribute("src","/images/contact.jpg"),e.appendChild(n);let a=document.createElement("p");a.textContent="Phone: (555)-723-3293",e.appendChild(a),a=document.createElement("p"),a.textContent="Email: midtownkitchen@gmail.com",e.appendChild(a),a=document.createElement("p"),a.textContent="In Person: 234 Lafayette St.",e.appendChild(a)})),console.log("It works, baby!!!!!")}]);