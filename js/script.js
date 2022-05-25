const mySlides = new Vue({
    el : '#app',
    data : {
        activeSlide : 0,
        interval : 0,
        slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ]
    },
    created: function () {
        window.addEventListener('keyup', this.keyControl);
        this.automaticNext();
    },
    methods : {
        nextSlide(){
            if(this.activeSlide<(this.slides.length - 1))
                this.activeSlide++;
            else
                this.activeSlide = 0;
        },
        prevSlide(){
            if(this.activeSlide>0)
                this.activeSlide--;
            else
                this.activeSlide = this.slides.length - 1;
        },
        goSlide(id){
            this.activeSlide = id;
        },
        keyControl(e){
            console.log(e);
            switch (e.keyCode) {
                case 40:
                    this.nextSlide();
                    break;
                case 38:
                    this.prevSlide();
                    break;
                default:
                    break;
            }
        },
        automaticNext(){
            this.interval = setInterval(this.nextSlide, 500);
        },
        mouseOver(){
            console.log(this.interval);
            clearInterval(this.interval);
        }
    }
});