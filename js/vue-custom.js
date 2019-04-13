var app = new Vue({
  el: '#app',
  data: {
    balls: [
      { 
      	heading: 'Learn JavaScript',
      	description: 'Learn JavaScript',
      	counter: 0
      },
      { 
      	heading: 'Learn JavaScript',
      	description: 'Learn JavaScript',
      	counter: 0
      },
      { 
      	heading: 'Learn JavaScript',
      	description: 'Learn JavaScript',
      	counter: 0
      },
    ]
  },
  methods: {
    addCount: function (ball) {
		ball.counter ++;
    }
  },
  mounted() {
  	axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (
      	console.log(response)
      	))
  }
})