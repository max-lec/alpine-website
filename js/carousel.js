/* Carousel */

// maps a pixel value to viewport
function getVw() {
    const currWidth = document.querySelector('.carousel-content .item-wrapper').offsetWidth;
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return Math.round((currWidth / w) * 100);
}

// carousel items
function carousel() {
    return {
        items: [
            { id: 1, img_src: './images/cute-dog.jpeg' },
            { id: 2, img_src: './images/cool-dog.jpeg' },
            { id: 3, img_src: './images/smiling-dog.jpeg' },
            { id: 4, img_src: './images/cute-dog.jpeg' },
            { id: 5, img_src: './images/cool-dog.jpeg' },
            { id: 6, img_src: './images/smiling-dog.jpeg' },
        ],

        current_item: 1,

        carousel_prev(){
            return this.current_item > this.items[0].id;
        },
        
        carousel_next(){
            return this.current_item < this.items.length;
        },
        
        slideLeft() {
            this.current_item--;
            this.$refs.carousel_content.style.left = (-getVw() * (this.current_item - 1)) + 'vw';
        },

        slideRight() {
            this.$refs.carousel_content.style.left = (-getVw() * this.current_item) + 'vw';
            this.current_item++;
        },
    };

}

var rotated = false;

// rotates the image for phone users
function rotate(){

    const button = document.querySelector('.carousel-button-top');
    const images = document.querySelectorAll('.carousel-content .item-wrapper img');

    if(rotated) {
        // reset
        Array.prototype.map.call(images, (image) => image.classList.remove("rotated-image"));
        rotated = false;
        button.setAttribute("style", "transform: translate(-50%, 0) scaleX(1) ");
    } else {
        // rotate
        Array.prototype.map.call(images, (image) => image.classList.add("rotated-image"));
        rotated = true;
        button.setAttribute("style", "transform: translate(-50%, 0) scaleX(-1) ");
    }
}
