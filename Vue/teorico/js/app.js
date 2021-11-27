Vue.component('picture-card',{
    props:['title', 'picture_url'],
    template: '#template-picture'
});

const vm = new Vue({
    el: '#main',
    data:{
        pictures:[
            {id:1, title:'Title 1', picture_url:'https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
            {id:2, title:'Title 2', picture_url:'https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
            {id:3, title:'Title 3', picture_url:'https://images.pexels.com/photos/3841338/pexels-photo-3841338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
        ]
    }
});