const mySlides = new Vue({
    el : '#app',
    data : {
        activeSlide : 0,
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
        window.addEventListener('keyup', function(e){
            console.log(e.keyCode);
            switch (e.keyCode) {
                case 40:
                    console.log(this);
                    this.nextSlide;
                    break;
                case 38:
                    this.prevSlide;
                    break;
                default:
                    break;
            }
        });
},
    methods : {
        nextSlide(){
            console.log(this);
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
        }
    }
});