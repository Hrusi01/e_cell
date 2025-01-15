document.addEventListener("DOMContentLoaded", function () {
    const eventGallery = document.createElement("div");
    eventGallery.classList.add("event-gallery");

    const eventGalleryHeading = document.createElement("div");
    eventGalleryHeading.classList.add("event-gallery-heading");
    eventGalleryHeading.textContent = "EVENTS GALLERY";

    const mainScrollDiv = document.createElement("div");
    mainScrollDiv.classList.add("main-scroll-div");

    const cover = document.createElement("div");
    cover.classList.add("cover");

    const scrollImages = document.createElement("div");
    scrollImages.classList.add("scroll-images");

    const images = [
        "images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg",
        "images/img5.jpg", "images/img6.jpg", "images/img7.jpg"
    ];

    images.forEach((src) => {
        const child = document.createElement("div");
        child.classList.add("child");

        const img = document.createElement("img");
        img.classList.add("child-img");
        img.setAttribute("src", src);
        img.setAttribute("alt", "Event image");

        child.appendChild(img);
        scrollImages.appendChild(child);
    });

    // Duplicate images for seamless scrolling
    const duplicateScrollImages = scrollImages.cloneNode(true);
    scrollImages.classList.add("scroll-images");
    duplicateScrollImages.classList.add("scroll-images");

    cover.appendChild(scrollImages);
    cover.appendChild(duplicateScrollImages);

    mainScrollDiv.appendChild(cover);
    eventGallery.appendChild(eventGalleryHeading);
    eventGallery.appendChild(mainScrollDiv);

    document.getElementById("eventGallery").appendChild(eventGallery);
});


document.getElementById("menu-icon").addEventListener("click", function () {
    this.classList.toggle("active");
});
function menuAnimation() {

    var menu = document.getElementById("menu")
    var full = document.querySelector("#full-scr")
    var nav = document.getElementById("navbar")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            nav.style.background ="transparent";
            flag = 1
        } else {
            full.style.top = "-200%"
            nav.style.background ="#622f91";
            flag = 0
        }
    })
}

menuAnimation();
