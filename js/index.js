/* Video autoplay off after click the body and crossbutton */
const iframes = document.querySelectorAll('iframe');
const crossButtons = document.querySelectorAll('.crossButton');

for (let i = 0; i < crossButtons.length; i++) {
    crossButtons[i].addEventListener('click', function() {
        const currentSrc = iframes[i].src;

        const newSrc = currentSrc.replace('autoplay=1', 'autoplay=0');

        iframes[i].src = newSrc;
    });
}
document.body.addEventListener('click', function() {
    for (let i = 0; i < iframes.length; i++) {
        const currentSrc = iframes[i].src;
        const newSrc = currentSrc.replace('autoplay=1', 'autoplay=0');
        iframes[i].src = newSrc;
    }
});

/* Show more videos section */

const showMoreBtn = document.getElementById("show-more");
const content = document.querySelector(".more-video");
const items = content.querySelectorAll(".show-more-video");
const itemsPerLoad = 3;
let currentItemCount = 0;

showMoreBtn.addEventListener("click", () => {
    for (let i = currentItemCount; i < currentItemCount + itemsPerLoad; i++) {
        if (items[i]) {
            items[i].classList.remove("hidden");
        } else {
            showMoreBtn.disabled = true;
            break;
        }
    }
    currentItemCount += itemsPerLoad;
});

// Hide all items except for the first 3
for (let i = itemsPerLoad; i < items.length; i++) {
    items[i].classList.add("hidden");
}