// Vue.component('app-user', );

new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue.js',
        message: 'Something',
        cssClass: '',
        clicks: 0,
        show: true,
        persons: [
            {name: 'Max', age: 27 },
            {name: 'Chris', age: 30 },
            {name: 'Anna', age: 25 }
        ],
    },
    methods: {
        changeTitle() {
            this.title = '3grd!'
        },
        increment(){
            this.clicks++;
        }
    },
    computed: {
        counter: function() {
            return this.clicks * 2;
        }
    },
    filters: {
        uppercase: function(value) {
            return value.toUpperCase();
        },
        lowercase: function(value) {
            return value.toLowerCase();
        }
    },
    components: {
        'app-user': {
            data: function() {
                return {
                    users: [
                        {username: 'Max'},
                        {username: 'Chris'},
                        {username: 'Anna'}
                    ]
                };
            },
            template: '<div><div class="user" v-for="user in users"> <p> Username: {{ user.username }} </p> </div></div>'
        }
    }
})