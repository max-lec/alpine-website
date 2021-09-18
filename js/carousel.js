/* Carousel */

// maps a pixel value to viewport
function getVw() {
    const currWidth = document.querySelector('.carousel-content .img-wrapper').offsetWidth;
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