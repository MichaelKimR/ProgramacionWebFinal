document.addEventListener("DOMContentLoaded", () => {
    
//MENÚ HAMBURGUES
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
        
//INTERACTIVIDAD
        navMenu.addEventListener("mouseover", (evento) => {
            if (window.innerWidth > 480 && evento.target.tagName === "A") {
                evento.target.style.color = "#003366";
                evento.target.style.transition = "color 0.3s ease";
            }
        });
        navMenu.addEventListener("mouseout", (evento) => {
            if (window.innerWidth > 480 && evento.target.tagName === "A") {
                evento.target.style.color = "black";
            }
        });
    }

//TRADUCTOR
    const langBtn = document.getElementById("lang-btn");
    let currentLang = localStorage.getItem("selectedLanguage") || "es";

    const translations = {
        es: {
            home: "Menu", plates: "Platos", recipes: "Recetas", contact: "Contacto",
            
//index.html
            heroSubtitle: "Un camino que despierta nuevos sabores...", 
            heroBtn: "Explorar Platos", 
            introTitle: "Introduccion",
            introText: "Sumérgete en la cultura a través de su cocina, donde el lema \"la comida es medicina\" define una dieta rica en nutrientes y baja en grasas. Donde encontraras la vibrante experiencia del BBQ coreano en la mesa hasta la variedad de platos (banchan) que acompañan al arroz, cada comida es un banquete de sabores agridulces, picantes y umami que no te puedes perder.",
            sliderTitle: "Galería de Especialidades",
            caption1: "Sam Gyeob Sal (삼겹살) - Parrilla Tradicional",
            caption2: "Bibimbap (비빔밥) - Arroz Mezclado Saludable",
            caption3: "Tteokbokki (떡볶i) - Pasteles de Arroz Picantes",
            platesTitle: "Platos Destacados",

//plates.html
            platesMainTitle: "Platos Tradicionales",
            samDesc: "Este plato tipico es el alma de la barbacoa coreana: un festín de panceta de cerdo de \"tres capas\" que se cocina directamente en tu mesa hasta alcanzar una perfección dorada y crujiente.<br><br>Este plato sensacional proviene de las decadas de 1960-1970.<br><br>",
            bibimDesc: "Esta maravilla es el arcoíris de la cocina coreana, que es como un festín visual que significa literalmente \"arroz mezclado\". Es un plato que celebra la armonía y el equilibrio en cada bocado.<br><br>Esta joya proviene de las decadas de 1392-1897.<br><br>",
            tteokDesc: "Es la essence misma del \"comfort food\" coreano: un festín de cilindros de pastel de arroz masticables y suaves bañados en una salsa roja intensa, espesa y picante.<br><br>Este manjar proviene del año 1953 pero se popularizó entre 1970 y 1980.<br><br>",
            kimbapDesc: "Este famoso plato es el compañero inseparable de la cultura de Corea, un rollo vibrante y lleno de color que encapsula la tradición del hogar.<br><br>Este clásico proviene de las décadas de 1910-1945.<br><br>",
            doenDesc: "Este plato es el alma reconfortante de Corea en un caldo, con un sabor profundo que invita a pausar.<br><br>Este plato histórico proviene de los años 57 a.C.-668 d.C.<br><br>",
            ingCommon: "Los ingredientes principales:",
            samIng: "<li>Carne de cerdo</li><li>Lechuga</li><li>Arroz Blanco</li><li>Kimchi</li>",
            bibimIng: "<li>Carne (cualquier tipo)</li><li>Vegetales (zanahoria, setas, raíces y rábano coreano)</li><li>Arroz Blanco</li><li>Gochujang (pasta típica de Corea)</li><li>Huevo (crudo en el centro)</li>",
            tteokIng: "<li>Garaetteok (Pasteles de arroz)</li><li>Eomuk (Pasteles de pescado)</li><li>Caldo de anchoas y algas (Dashi)</li><li>Salsas típicas (Gochujang, Gochugaru)</li><li>Salsa de soja y ajo</li><li>Endulzantes (azúcar, miel o jarabe de arroz)</li>",
            kimbapIng: "<li>Gim (Alga)</li><li>Danmuji (Nabo encurtido)</li><li>Arroz Blanco</li><li>Vegetales</li><li>Eomuk</li><li>Salsa de soja</li>",
            doenIng: "<li>Doenjang</li><li>Caldo de anchoas</li><li>Gochugaru</li><li>Tofu</li><li>Carne o mariscos</li><li>Vegetales</li>",

//recipe.html
            recipeMainTitle: "RECETA DEL KIMBAP (김밥)",
            chefAdvice: "<b>Consejo:</b> Respeta la jerarquía de los mayores y espera a que ellos empiecen con su plato de comida.",
            recipeIngHTML: `<h2>Ingredientes Principales:</h2><h3>Base y Envoltura:</h3><ul><li><b>Algas (Gim):</b> Láminas de alga nori tostada (específicas para kimbap o sushi).</li><li><b>Arroz:</b> Arroz de grano corto (tipo sushi). Se debe lavar varias veces y cocer al vapor.</li><li><b>Sazón del arroz:</b> Aceite de sésamo (ajonjolí) y una pizca de sal.</li></ul><h3>Rellenos Tradicionales:</h3><ul><li><b>Huevo:</b> Tortillas delgadas cortadas en tiras largas.</li><li><b>Zanahoria:</b> Cortada en bastoncillos finos y salteada ligeramente con sal.</li><li><b>Espinacas:</b> Blanqueadas (hervidas brevemente), escurridas y aliñadas con aceite de sésamo y semillas de sésamo.</li><li><b>Danmuji (Nabo encurtido amarillo):</b> Un ingrediente clave que aporta un toque crujiente y dulce/ácido.</li><li><b>Proteína:</b> Puedes elegir entre tiras de carne, jamón cocido, salchicha, atún de lata (mezclado con mayonesa) o palitos de cangrejo.</li><li><b>Pepino:</b> Cortado en tiras largas (opcional).</li></ul>`,
            recipePrepHTML: `<h2>Paso a Paso:</h2><h3>Preparacion del Arroz:</h3><ol><li><b>Lavar y Cocer:</b> Lava el arroz de grano corto unas 3 veces hasta que el agua salga clara. Cocínalo con un poco menos de agua de lo habitual para que quede firme, no pastoso.</li><li><b>Sazonar:</b> Mientras el arroz esté caliente, pásalo a un bol y mézclalo con aceite de sésamo y una pizca de sal. Mezcla con movimientos suaves para no romper el grano y deja que se enfríe a temperatura ambiente.</li></ol><h3>Preparacion de los Rellenos:</h3><ol><li><b>Huevo:</b> Bate los huevos con sal, haz una tortilla delgada en la sartén, enróllala y córtala en tiras largas.</li><li><b>Zanahoria:</b> Córtala en tiras finas (estilo cerilla) y saltéala brevemente con una pizca de sal hasta que esté tierna pero aún crocante.</li><li><b>Espinacas:</b> Blanquéalas en agua hirviendo por 30 segundos, escúrrelas muy bien eliminando todo el exceso de agua y alíñalas con aceite de sésamo y sal.</li><li><b>Proteína:</b> Si usas carne, saltéala hasta que esté cocida. Si usas jamón o salchichas, dóralos ligeramente en la sartén en tiras largas.</li><li><b>Vegetales Encurtidos:</b> Escurre el nabo amarillo (danmuji) y córtalo en tiras si no viene ya troceado.</li></ol><h3>Ensamblado/Enrrollado:</h3><ol><li><b>Colocar el Alga:</b> Pon una lámina de alga sobre una esterilla de bambú con la parte rugosa hacia arriba.</li><li><b>Extender el Arroz:</b> Con las manos ligeramente húmedas, extiende una capa fina y uniforme de arroz sobre el alga, dejando unos 2-5 cm libres en el borde superior.</li><li><b>Acomodar el Relleno:</b> Coloca los ingredientes en filas horizontales sobre el arroz, empezando desde el tercio inferior más cercano a ti.</li><li><b>Enrollar:</b> Levanta la esterilla y empieza a enrollar con firmeza, presionando hacia adentro para que el rollo quede compacto.</li><li><b>Sellar:</b> Humedece el borde superior del alga con un poco de agua o granos de arroz aplastados para que pegue bien al cerrar.</li></ol><h3>Toque Final y Corte:</h3><ol><li><b>Brillo:</b> Pincela el exterior del rollo con un poco de aceite de sésamo para darle brillo y aroma.</li><li><b>Corte:</b> Usa un cuchillo muy afilado y humedécelo con agua o aceite entre cortes para que el arroz no se pegue. Corta en rodajas de aproximadamente 1.5 cm de grosor.</li></ol>`,

//contact.html
            contactTitle: "CONTACTANOS!!", lblNombre: "Nombre:", lblCorreo: "Correo:", lblMensaje: "Mensaje:", btnSubmit: "Enviar", socialTitle: "Nuestras Redes!!!"
        },
        en: {
            home: "Home", plates: "Dishes", recipes: "Recipes", contact: "Contact",
            
//index.html
            heroSubtitle: "A path that awakens new flavors...", heroBtn: "Explore Dishes", introTitle: "Introduction",
            introText: "Immerse yourself in the culture through its cuisine, where the motto \"food is medicine\" defines a diet rich in nutrients and low in fat. From the vibrant experience of Korean BBQ at the table to the variety of side dishes (banchan) that accompany rice, every meal is a feast of sweet and sour, spicy, and umami flavors you cannot miss.",
            sliderTitle: "Specialties Gallery", caption1: "Sam Gyeob Sal (삼겹살) - Traditional Grill", caption2: "Bibimbap (비빔밥) - Healthy Mixed Rice", caption3: "Tteokbokki (떡볶i) - Spicy Rice Cakes", platesTitle: "Featured Dishes",

//plates.html
            platesMainTitle: "Traditional Dishes",
            samDesc: "This traditional dish is the soul of Korean barbecue: a feast of \"three-layered\" pork belly cooked right at your table until it reaches crisp, golden perfection.<br><br>This sensational dish originates from the 1960s-1970s.<br><br>",
            bibimDesc: "This marvel is the rainbow of Korean cuisine, a visual feast that literally means \"mixed rice\". It is a dish that celebrates harmony and balance in every bite.<br><br>This jewel originates from the decades of 1392-1897.<br><br>",
            tteokDesc: "It is the very essence of Korean comfort food: a feast of chewy, soft rice cake cylinders smothered in an intense, thick, and spicy red sauce.<br><br>This delicacy dates back to 1953 but became highly popular between 1970 and 1980.<br><br>",
            kimbapDesc: "This famous dish is the inseparable companion of Korean culture, a vibrant and colorful roll that encapsulates home tradition.<br><br>This classic comes from the decades of 1910-1945.<br><br>",
            doenDesc: "This dish is the comforting soul of Korea in a broth, featuring a deep flavor that invites you to take a pause.<br><br>This historic dish dates back to the years 57 B.C. - 668 A.D.<br><br>",
            ingCommon: "Main Ingredients:",
            samIng: "<li>Pork meat</li><li>Lettuce</li><li>White Rice</li><li>Kimchi</li>",
            bibimIng: "<li>Meat (any kind)</li><li>Vegetables (carrot, mushrooms, roots, and Korean radish)</li><li>White Rice</li><li>Gochujang (typical Korean chili paste)</li><li>Egg (raw in the center)</li>",
            tteokIng: "<li>Garaetteok (Rice cakes)</li><li>Eomuk (Fish cakes)</li><li>Anchovy and kelp broth (Dashi)</li><li>Typical sauces (Gochujang, Gochugaru)</li><li>Soy sauce and garlic</li><li>Sweeteners (sugar, honey, or rice syrup)</li>",
            kimbapIng: "<li>Gim (Seaweed)</li><li>Danmuji (Yellow pickled radish)</li><li>White Rice</li><li>Vegetables</li><li>Eomuk</li><li>Soy sauce</li>",
            doenIng: "<li>Doenjang (Soybean paste)</li><li>Anchovy broth</li><li>Gochugaru</li><li>Tofu</li><li>Meat or seafood</li><li>Vegetables</li>",

//recipe.html
            recipeMainTitle: "KIMBAP RECIPE (김밥)",
            chefAdvice: "<b>Advice:</b> Respect the hierarchy of elders and wait for them to start eating their food plate first.",
            recipeIngHTML: `<h2>Main Ingredients:</h2><h3>Base and Wrap:</h3><ul><li><b>Seaweed (Gim):</b> Toasted nori seaweed sheets (specific for kimbap or sushi).</li><li><b>Rice:</b> Short-grain rice (sushi type). Wash several times and steam.</li><li><b>Rice Seasoning:</b> Sesame oil and a pinch of salt.</li></ul><h3>Traditional Fillings:</h3><ul><li><b>Egg:</b> Thin omelets cut into long strips.</li><li><b>Carrot:</b> Cut into fine matchsticks and lightly sautéed with salt.</li><li><b>Spinach:</b> Blanched (briefly boiled), drained, and seasoned with sesame oil and sesame seeds.</li><li><b>Danmuji (Yellow pickled radish):</b> A key ingredient that adds a crunchy, sweet, and sour touch.</li><li><b>Protein:</b> Choose between beef strips, cooked ham, sausage, canned tuna (mixed with mayo), or crab sticks.</li><li><b>Cucumber:</b> Cut into long strips (optional).</li></ul>`,
            recipePrepHTML: `<h2>Step by Step:</h2><h3>Rice Preparation:</h3><ol><li><b>Wash and Cook:</b> Wash short-grain rice about 3 times until the water runs clear. Cook it with slightly less water than usual so it stays firm, not mushy.</li><li><b>Season:</b> While the rice is hot, transfer it to a bowl and mix with sesame oil and a pinch of salt. Mix gently to avoid breaking grains and let cool to room temperature.</li></ol><h3>Filling Preparation:</h3><ol><li><b>Egg:</b> Whisk eggs with salt, make a thin omelet, roll it up, and cut into long strips.</li><li><b>Carrot:</b> Cut into thin strips and sauté briefly with a pinch of salt until tender yet crunchy.</li><li><b>Spinach:</b> Blanch in boiling water for 30 seconds, drain thoroughly to remove excess water, and season with sesame oil and salt.</li><li><b>Protein:</b> If using meat, sauté until cooked. If using ham or sausages, lightly brown them in long strips.</li><li><b>Pickled Vegetables:</b> Drain the yellow radish (danmuji) and cut into strips if not pre-cut.</li></ol><h3>Assembling and Rolling:</h3><ol><li><b>Place Seaweed:</b> Place a seaweed sheet on a bamboo mat with the rough side facing up.</li><li><b>Spread Rice:</b> With slightly damp hands, spread a thin, even layer of rice over the seaweed, leaving 2-5 cm free at the top edge.</li><li><b>Arrange Fillings:</b> Place ingredients in horizontal rows on the rice, starting from the lower third closest to you.</li><li><b>Roll Up:</b> Lift the mat and roll firmly, pressing inward to keep it compact.</li><li><b>Seal:</b> Dampen the top edge of the seaweed with water or crushed rice grains to seal well.</li></ol><h3>Final Touch and Slicing:</h3><ol><li><b>Shine:</b> Brush the outside of the roll with a bit of sesame oil for shine and aroma.</li><li><b>Slice:</b> Use a very sharp knife, dampening it with water or oil between cuts. Slice into rounds about 1.5 cm thick.</li></ol>`,

//contact.html
            contactTitle: "CONTACT US!!", lblNombre: "Name:", lblCorreo: "Email:", lblMensaje: "Message:", btnSubmit: "Send", socialTitle: "Our Social Networks!!!"
        }
    };

    function getWelcomeMessage(lang) {
        const hour = new Date().getHours();
        if (lang === "en") {
            if (hour >= 6 && hour < 12) return "Good morning! Korean Gastronomy";
            if (hour >= 12 && hour < 18) return "Good afternoon! Korean Gastronomy";
            return "Good evening! Korean Food Gastronomy";
        }
        if (hour >= 6 && hour < 12) return "¡Buenos días! Gastronomia Coreana";
        if (hour >= 12 && hour < 18) return "¡Buenas tardes! Gastronomia Coreana";
        return "¡Buenas noches! Gastronomia Coreana";
    }

    function updateLanguage(lang) {
        // Navbar
        if(document.getElementById("nav-home")) document.getElementById("nav-home").innerText = translations[lang].home;
        if(document.getElementById("nav-plates")) document.getElementById("nav-plates").innerText = translations[lang].plates;
        if(document.getElementById("nav-recipes")) document.getElementById("nav-recipes").innerText = translations[lang].recipes;
        if(document.getElementById("nav-contact")) document.getElementById("nav-contact").innerText = translations[lang].contact;

        // INDEX.HTML
        const welcomeText = document.getElementById("welcome-text");
        if (welcomeText) welcomeText.innerText = getWelcomeMessage(lang);
        const heroSub = document.querySelector(".hero-content p");
        const heroBtnElem = document.querySelector(".hero-content a");
        if (heroSub) heroSub.innerText = translations[lang].heroSubtitle;
        if (heroBtnElem) heroBtnElem.innerText = translations[lang].heroBtn;
        if(document.getElementById("intro-title")) document.getElementById("intro-title").innerText = translations[lang].introTitle;
        if(document.getElementById("intro-text")) document.getElementById("intro-text").innerText = translations[lang].introText;
        if(document.getElementById("slider-title")) document.getElementById("slider-title").innerText = translations[lang].sliderTitle;
        if(document.getElementById("slide-caption-1")) document.getElementById("slide-caption-1").innerText = translations[lang].caption1;
        if(document.getElementById("slide-caption-2")) document.getElementById("slide-caption-2").innerText = translations[lang].caption2;
        if(document.getElementById("slide-caption-3")) document.getElementById("slide-caption-3").innerText = translations[lang].caption3;
        if(document.getElementById("plates-title")) document.getElementById("plates-title").innerText = translations[lang].platesTitle;

        // PLATES.HTML
        if(document.getElementById("plates-main-title")) document.getElementById("plates-main-title").innerText = translations[lang].platesMainTitle;
        if(document.getElementById("sam-title")) document.getElementById("sam-title").innerText = lang === "es" ? "Sam Gyeob Sal (삼겹살)" : "Sam Gyeob Sal (삼겹살)";
        if(document.getElementById("sam-desc")) document.getElementById("sam-desc").innerHTML = translations[lang].samDesc + `<strong id="sam-ing-title">${translations[lang].ingCommon}</strong>`;
        if(document.getElementById("sam-ingredients")) document.getElementById("sam-ingredients").innerHTML = translations[lang].samIng;
        
        if(document.getElementById("bibim-title")) document.getElementById("bibim-title").innerText = lang === "es" ? "Bibimbap (비빔밥)" : "Bibimbap (비빔밥)";
        if(document.getElementById("bibim-desc")) document.getElementById("bibim-desc").innerHTML = translations[lang].bibimDesc + `<strong id="bibim-ing-title">${translations[lang].ingCommon}</strong>`;
        if(document.getElementById("bibim-ingredients")) document.getElementById("bibim-ingredients").innerHTML = translations[lang].bibimIng;

        if(document.getElementById("tteok-title")) document.getElementById("tteok-title").innerText = lang === "es" ? "Tteokbokki (떡볶i)" : "Tteokbokki (떡볶i)";
        if(document.getElementById("tteok-desc")) document.getElementById("tteok-desc").innerHTML = translations[lang].tteokDesc + `<strong id="tteok-ing-title">${translations[lang].ingCommon}</strong>`;
        if(document.getElementById("tteok-ingredients")) document.getElementById("tteok-ingredients").innerHTML = translations[lang].tteokIng;

        if(document.getElementById("kimbap-title")) document.getElementById("kimbap-title").innerText = lang === "es" ? "Kimbap (김밥)" : "Kimbap (김밥)";
        if(document.getElementById("kimbap-desc")) document.getElementById("kimbap-desc").innerHTML = translations[lang].kimbapDesc + `<strong id="kimbap-ing-title">${translations[lang].ingCommon}</strong>`;
        if(document.getElementById("kimbap-ingredients")) document.getElementById("kimbap-ingredients").innerHTML = translations[lang].kimbapIng;

        if(document.getElementById("doen-title")) document.getElementById("doen-title").innerText = lang === "es" ? "Doenjang-jjigae (된장찌개)" : "Doenjang-jjigae (된장찌개)";
        if(document.getElementById("doen-desc")) document.getElementById("doen-desc").innerHTML = translations[lang].doenDesc + `<strong id="doen-ing-title">${translations[lang].ingCommon}</strong>`;
        if(document.getElementById("doen-ingredients")) document.getElementById("doen-ingredients").innerHTML = translations[lang].doenIng;

        // RECIPE.HTML
        if(document.getElementById("recipe-main-title")) document.getElementById("recipe-main-title").innerText = translations[lang].recipeMainTitle;
        if(document.getElementById("full-ingredients-list")) document.getElementById("full-ingredients-list").innerHTML = translations[lang].recipeIngHTML;
        if(document.getElementById("full-prep-list")) document.getElementById("full-prep-list").innerHTML = translations[lang].recipePrepHTML;
        if(document.getElementById("chef-advice")) document.getElementById("chef-advice").innerHTML = translations[lang].chefAdvice;

        // CONTACT.HTML (¡Sincronizado con tus IDs reales!)
        if(document.getElementById("contact-main-title")) document.getElementById("contact-main-title").innerText = translations[lang].contactTitle;
        if(document.getElementById("label-nombre")) document.getElementById("label-nombre").innerText = translations[lang].lblNombre;
        if(document.getElementById("label-correo")) document.getElementById("label-correo").innerText = translations[lang].lblCorreo;
        if(document.getElementById("label-mensaje")) document.getElementById("label-mensaje").innerText = translations[lang].lblMensaje;
        if(document.getElementById("btn-submit")) document.getElementById("btn-submit").innerText = translations[lang].btnSubmit;
        if(document.getElementById("footer-social-title")) document.getElementById("footer-social-title").innerText = translations[lang].socialTitle;
        
        const inputNombre = document.getElementById("nombre");
        const inputCorreo = document.getElementById("correo");
        const txtMensaje = document.getElementById("mensaje");
        if(inputNombre && inputCorreo && txtMensaje) {
            inputNombre.placeholder = lang === "es" ? "Escribe tu nombre aqui!" : "Write your name here!";
            inputCorreo.placeholder = lang === "es" ? "Escribe tu correo aqui!" : "Write your email here!";
            txtMensaje.placeholder = lang === "es" ? "Escribe tu mensaje aqui..." : "Write your message here...";
        }
    }

    updateLanguage(currentLang);

    if (langBtn) {
        langBtn.addEventListener("click", (e) => {
            e.preventDefault();
            currentLang = currentLang === "es" ? "en" : "es";
            localStorage.setItem("selectedLanguage", currentLang);
            updateLanguage(currentLang);
        });
    }

    // SLIDER
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prev-slide");
    const nextBtn = document.getElementById("next-slide");
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        if(slides.length === 0) return;
        slides[currentSlide].classList.remove("active");
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }
    function nextSlide() { showSlide(currentSlide + 1); }
    function prevSlide() { showSlide(currentSlide - 1); }
    function startAutoSlide() { slideInterval = setInterval(nextSlide, 4000); }
    function resetInterval() { clearInterval(slideInterval); startAutoSlide(); }

    if (nextBtn && prevBtn && slides.length > 0) {
        nextBtn.addEventListener("click", () => { nextSlide(); resetInterval(); });
        prevBtn.addEventListener("click", () => { prevSlide(); resetInterval(); });
        startAutoSlide();
    }
});