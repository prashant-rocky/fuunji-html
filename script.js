// script.js
document.addEventListener("DOMContentLoaded", function () {

    // --- Menu data ---
    const MenuData1 = [
        { id: 1, imgSrc: "assets/images/item1.jfif", name: "Tsukemen", price: "¥1,000", description: "Rich chicken-and-seafood broth with chewy dipping noodles, deeply satisfying." },
        { id: 2, imgSrc: "assets/images/item2.jfif", name: "Special Tsukemen", price: "¥1,200", description: "Tsukemen with chashu, seasoned egg, menma, scallions, and nori." },
        { id: 3, imgSrc: "assets/images/item3.jpg", name: "Ramen", price: "¥950", description: "Creamy chicken paitan broth blended with seafood, paired with fresh noodles." },
        { id: 4, imgSrc: "assets/images/item6.jpg", name: "Special Ramen", price: "¥1,150", description: "Ramen topped with chashu, seasoned egg, menma, scallions, and nori." }
    ];

    const MenuData2 = [
        { id: 1, imgSrc: "assets/images/item7.jfif", name: "Extra Noodles (Large)", price: "¥200", description: "A hearty serving of extra noodles for bigger appetites." },
        { id: 2, imgSrc: "assets/images/item8.jpg", name: "Chashu", price: "¥250", description: "Tender, flavorful slices of braised pork belly to enhance your bowl." },
        { id: 3, imgSrc: "assets/images/item1.jfif", name: "Flavored Egg", price: "¥150", description: "Perfectly seasoned soft-boiled egg, rich and full of flavor." },
        { id: 4, imgSrc: "assets/images/item2.jfif", name: "Menma", price: "¥150", description: "Marinated bamboo shoots adding texture and savory depth to ramen." }
    ];

    // --- Populate menus (ensure these IDs exist in your HTML) ---
    const menuBox1 = document.getElementById("menuBox1");
    const menuBox2 = document.getElementById("menuBox2");
    if (menuBox1) {
        menuBox1.innerHTML = ""; // clear first
        MenuData1.forEach(item => {
            menuBox1.innerHTML += `
        <div class="col-md-12 py-2" data-key="${item.id}">
          <div class="menuCardBox text-center d-flex flex-nowrap">
            <div class="menuCardImage">
              <img src="${item.imgSrc}" alt="${item.name}" height="100" width="100" class="img-fluid"/>
            </div>
            <div class="content text-start m-3">
              <span>${item.name}</span>
              <span>..............</span>
              <h5 class="d-inline-block float-end">${item.price}</h5>
              <p>${item.description}</p>
            </div>
          </div>
        </div>`;
        });
    }
    if (menuBox2) {
        menuBox2.innerHTML = ""; // clear first
        MenuData2.forEach(item => {
            menuBox2.innerHTML += `
        <div class="col-md-12 py-2" data-key="${item.id}">
          <div class="menuCardBox text-center d-flex flex-nowrap">
            <div class="menuCardImage">
              <img src="${item.imgSrc}" alt="${item.name}" height="100" width="100" class="img-fluid"/>
            </div>
            <div class="content text-start m-3">
              <span>${item.name}</span>
              <span>..............</span>
              <h5 class="d-inline-block float-end">${item.price}</h5>
              <p>${item.description}</p>
            </div>
          </div>
        </div>`;
        });
    }

    // --- Initialize Swiper (only once) ---
    // Make sure <script src=".../swiper-bundle.min.js"></script> is loaded BEFORE this file.
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");

    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,              // <- show only one review at a time
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                if (progressCircle) progressCircle.style.setProperty("--progress", 1 - progress);
                if (progressContent) progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    });

}); // DOMContentLoaded
const singleMenu1 = [
    { id: 1, imgSrc: "assets/images/item1.jfif", name: "Tsukemen", price: "¥1,000", description: "Rich chicken-and-seafood broth with chewy dipping noodles, deeply satisfying." },
    { id: 2, imgSrc: "assets/images/item2.jfif", name: "Special Tsukemen", price: "¥1,200", description: "Tsukemen with chashu, seasoned egg, menma, scallions, and nori." },
    { id: 3, imgSrc: "assets/images/item3.jpg", name: "Ramen", price: "¥950", description: "Creamy chicken paitan broth blended with seafood, paired with fresh noodles." },
    { id: 4, imgSrc: "assets/images/item6.jpg", name: "Special Ramen", price: "¥1,150", description: "Ramen topped with chashu, seasoned egg, menma, scallions, and nori." }
];
const singleMenu2 = [
    { id: 1, imgSrc: "assets/images/item7.jfif", name: "Extra Noodles (Large)", price: "¥200", description: "A hearty serving of extra noodles for bigger appetites." },
    { id: 2, imgSrc: "assets/images/item8.jpg", name: "Chashu", price: "¥250", description: "Tender, flavorful slices of braised pork belly to enhance your bowl." },
    { id: 3, imgSrc: "assets/images/item1.jfif", name: "Flavored Egg", price: "¥150", description: "Perfectly seasoned soft-boiled egg, rich and full of flavor." },
    { id: 4, imgSrc: "assets/images/item2.jfif", name: "Menma", price: "¥150", description: "Marinated bamboo shoots adding texture and savory depth to ramen." }
];
const Menu1 = document.getElementById("menu-1");

if (Menu1) {
    singleMenu1.forEach(item => {
        Menu1.innerHTML += `
      <div class="col-md-12 py-2" data-key="${item.id}">
        <div class="menuCardBox text-center d-flex flex-nowrap">
          <div class="menuCardImage">
            <img src="${item.imgSrc}" alt="${item.name}" height="100" width="100" class="img-fluid"/>
          </div>
          <div class="content text-start m-3">
            <span>${item.name}</span>
            <span>..............</span>
            <h5 class="d-inline-block float-end">${item.price}</h5>
            <p>${item.description}</p>
          </div>
        </div>
      </div>`;
    });
}
const Menu2 = document.getElementById("menu-2");
if (Menu2) {   // ✅ Check Menu2 exists
    singleMenu2.forEach(item => {
        Menu2.innerHTML += `
      <div class="col-md-12 py-2" data-key="${item.id}">
        <div class="menuCardBox text-center d-flex flex-nowrap">
          <div class="menuCardImage">
            <img src="${item.imgSrc}" alt="${item.name}" height="100" width="100" class="img-fluid"/>
          </div>
          <div class="content text-start m-3">
            <span>${item.name}</span>
            <span>..............</span>
            <h5 class="d-inline-block float-end">${item.price}</h5>
            <p>${item.description}</p>
          </div>
        </div>
      </div>`;
    });
}
const Blogs2 = [
    {
        id: 1,
        imgSrc: "assets/images/blog4.jfif",
        title: "Discover the Art of Tsukemen at FUUNJI",
        content: "At FUUNJI, ramen isn’t just food—it’s a soulful experience. Tucked away in Shinjuku, our restaurant has become a must-visit destination for ramen lovers from around the world. What makes us truly special is our dedication to tsukemen—dipping noodles served with our signature rich chicken and seafood broth.",
        content2: "From the moment you step inside, the aroma of simmering broth welcomes you. Guests can enjoy perfectly cooked noodles, flavorful toppings, and a cozy atmosphere that makes every visit unforgettable.",
        content3: "Join us at FUUNJI and taste why ramen enthusiasts line up daily for a bowl that goes beyond ordinary noodles. Here, every bite is a celebration of Japanese craftsmanship and love for food.",
        comment1: "“The tsukemen here changed how I think about ramen. The broth is unbeatable!”",
        name1: "Kenji S.",
        person1: "assets/images/comment1.jpg",
        comment2: "“I visited FUUNJI during my Tokyo trip, and it was the highlight of my food journey.”",
        name2: "Maria L.",
        person12: "assets/images/comment2.jpg",
        comment3: "“Hands down the best ramen experience. Worth every minute of waiting in line.”",
        name3: "David P.",
        person3: "assets/images/comment3.jfif"
    },
    {
        id: 2,
        imgSrc: "assets/images/blog5.jpg",
        title: "The Secret Behind FUUNJI’s Famous Broth",
        content: "What makes FUUNJI stand out in Tokyo’s ramen scene is the depth of flavor found in every bowl of broth. Unlike ordinary ramen, our soup blends rich chicken stock with carefully balanced seafood notes, creating a taste that’s both comforting and unforgettable. Each batch is simmered for hours, bringing out a harmony of flavors that perfectly complement our springy noodles.",
        content2: "This attention to detail has made FUUNJI a favorite among locals and travelers alike. From first sip to last bite, the experience is more than just a meal—it’s a reflection of Japan’s culinary artistry and passion for ramen.",
        comment1: "“The broth is unlike anything I’ve had before—so rich and smooth!”",
        name1: "Thomas R.",
        person1: "assets/images/comment1.jpg",
        comment2: "“I finally understand why people wait in line. Absolutely worth it.”",
        name2: "Maria L.",
        person12: "assets/images/comment2.jpg",
        comment3: "“The combination of noodles and broth here is perfection. Pure comfort.”",
        name3: "Naomi W.",
        person3: "assets/images/comment3.jfif"
    },
    {
        id: 3,
        imgSrc: "assets/images/blog6.jpg",
        title: "How to Enjoy Tsukemen the FUUNJI Way",
        content: "Eating tsukemen is more than just dipping noodles—it’s about balance and savoring each step. At FUUNJI, the noodles are served chilled to preserve their chewy texture, while the broth arrives steaming hot and full of flavor. The secret is to dip only a small portion of noodles each time, ensuring they stay firm and flavorful with every bite.",
        content2: "Once you’ve enjoyed the noodles, don’t forget the final touch: adding “soup-wari”, a lighter broth poured into your dipping sauce, turning it into a warm soup you can drink to the last drop. This ritual is what makes FUUNJI’s tsukemen a complete and unforgettable dining experience.",
        comment1: "“I never knew there was a right way to enjoy tsukemen. FUUNJI taught me!”",
        name1: "Liam J.",
        person1: "assets/images/comment1.jpg",
        comment2: "“The soup-wari at the end made the meal so satisfying. Loved it!”",
        name2: "Haruka K.",
        person12: "assets/images/comment2.jpg",
        comment3: "“Amazing guide—I tried it exactly this way, and the flavors were perfect.”",
        name3: "Sophia M.",
        person3: "assets/images/comment3.jfif"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const myForm = document.getElementById("NreservationForm");
    const bookingForm = document.getElementById("NbookingForm");
    const thankYouCard = document.getElementById("NthankYouCard");
    const bookAnother = document.getElementById("bookAnother");

    if (myForm && bookingForm && thankYouCard) {
        // Handle form submit
        myForm.addEventListener("submit", function (e) {
            e.preventDefault();
            bookingForm.classList.add("d-none");    // hide booking form
            thankYouCard.classList.remove("d-none"); // show thank you card
        });

        // Handle "Book Another Table"
        bookAnother.addEventListener("click", function () {
            thankYouCard.classList.add("d-none");   // hide thank you
            bookingForm.classList.remove("d-none"); // show form
            myForm.reset(); // reset values
        });
    } else {
        console.warn("❌ One or more elements not found in DOM");
    }
});



window.addEventListener("load", function () {
    if (window.cookieconsent) {
        window.cookieconsent.run({
            notice_banner_type: "simple",
            consent_type: "express",
            palette: "light",
            language: "en",
            page_load_consent_levels: ["strictly-necessary"],
            notice_banner_reject_button_hide: false,
            preferences_center_close_button_hide: false,
            page_refresh_confirmation_buttons: false,
            website_name: "Fuunji Shinjuku",
            website_privacy_policy_url: "/privacy"
        });

        // ✅ Attach click event to open preferences
        const prefLink = document.getElementById("open_preferences_center");
        if (prefLink) {
            prefLink.addEventListener("click", function (e) {
                e.preventDefault();
                if (window.cookieconsent.preferences) {
                    window.cookieconsent.preferences.show(); // ✅ Opens preferences center
                }
            });
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const thankYouCard = document.getElementById("thankYouCard");

    if (contactForm && thankYouCard) {
        // Handle form submission
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // stop page reload
            contactForm.classList.add("d-none");   // hide form
            thankYouCard.classList.remove("d-none"); // show thank you card
            contactForm.reset(); // reset inputs
        });
    }

    // Reset to form view
    window.resetForm = function () {
        if (thankYouCard && contactForm) {
            thankYouCard.classList.add("d-none");  // hide thank you card
            contactForm.classList.remove("d-none"); // show form
        }
    }
});

