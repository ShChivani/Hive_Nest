document.addEventListener("DOMContentLoaded", function () {
    const imageSources = [
        "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        "https://th.bing.com/th/id/OIP.tcSQ-uvCb_Z1uCLSHDiYXQHaE8?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://ts2.mm.bing.net/th?id=OIP.0CCOIpqRvumGKSE8bnFuRgHaHa&pid=15.1",
        "https://ts3.mm.bing.net/th?id=OIP.2nHm12IRsIsZ-I4sniHfSAHaJq&pid=15.1",
        "https://th.bing.com/th/id/OIP.JbhsI6d_DpTV6QnMGzvO_wHaE8?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.yIhn_OFCKt72Zc_Lzq71OAHaE6?w=276&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.YsDIJG5M4KTFRJcuhbEJtQHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.0RiFhmW4erqteWXOOwk1DQHaEo?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.-MxRHwIZIum_yZNq3f9jsAHaEr?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.qW1pK4IpnBQYEGlt27r4sAHaEK?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    ];

    let currentIndex = 0;
    const slider = document.getElementById("imageSlider");
    const dotsContainer = document.getElementById("dotsContainer");

    function createImages() {
        imageSources.forEach((src, index) => {
            let img = document.createElement("img");
            img.src = src;
            img.classList.add("slider-image");
            slider.appendChild(img);

            let dot = document.createElement("div");
            dot.classList.add("dot");
            dot.addEventListener("click", () => moveToSlide(index));
            dotsContainer.appendChild(dot);
        });

        updateDots();
        moveToSlide(0); // Show the first image initially
    }

    function updateDots() {
        document.querySelectorAll(".dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    function moveToSlide(index) {
        const images = document.querySelectorAll(".slider-image");

        images.forEach((img, i) => {
            if (i === index) {
                img.style.top = "0"; // Move into view
                img.style.opacity = "1";
            } else {
                img.style.top = "-100%"; // Move out of view
                img.style.opacity = "0";
            }
        });

        currentIndex = index;
        updateDots();
    }

    function autoSlide() {
        let nextIndex = (currentIndex + 1) % imageSources.length;
        moveToSlide(nextIndex);
    }

    createImages();
    setInterval(autoSlide, 5000); // Slide every 5 seconds
});