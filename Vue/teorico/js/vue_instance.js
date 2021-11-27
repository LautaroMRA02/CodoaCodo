// const vm = new Vue({
//   el: '#computed_props',
//   data: {
//     firstname: 'Lautaro',
//     lastname: 'marcel'
//   },
//   computed: {
//     getfullname: function () {
//       return this.firstname + " " + this.lastname;
//     }
//   }
// });

// const vvm = new Vue({
//   el: '#vue_det',
//   data: {
//     firstname: 'Lautaro',
//     lastname: 'marcel'
//   },
// });


// const app = new Vue({
//   el: '#app',
//   methods: {
//     addText() {
//       const text = app.$refs.text.value;
//       const textField = app.$refs.textField;

//       textField.innerHTML = '<p v-on:mouseover="delete">' + textField.innerHTML + '</p><br />' + text;
//     },
//     deleteText() {
//       const textField = app.$refs.textField.innerHTML = ''
//     },
//     delete() {
//       textField.$destroy()
//     },

//   }
// });



// /*const vmm = new Vue({
//   el: '#component_test',
//   components: {
//     'testcomponent': {
//       template: '<div><h1>This is coming from component</h1></div>'
//     }
//   }
// });*/

// Vue.component('testcomponent', {
//   template: '<div v-on:mouseover="changename()" v-on:mouseout="originalname();"> <h1>Custom Component created by <span id="name">{{name}}</span></h1></div>',
//   data: function () {
//     return {
//       name: "Ria"
//     }
//   },
//   methods: {
//     changename: function () {
//       this.name = "Ben";
//     },
//     originalname: function () {
//       this.name = "Ria";
//     }
//   }
// });

// const avm = new Vue({
//   el: '#component_test'
// });
// const avm1 = new Vue({
//   el: '#component_test1'
// });


// const vmLink = new Vue({
//   el:'#databinding',
//   data: {
//     title: "Titulo",
//     hreflink: "http://google.com"
//   }
// });



// Vue.component('alert-box', {
//   template: `
//     <div class="demo-alert-box">
//       <strong>Error!</strong>
//       <slot></slot>
//     </div>
//   `
// })




// const vmAlert = new Vue({

//   el: '#classbinding',
  
//   data: {
  
//   title : "This is class binding example",
  
//   isActive : true,
  
//   hasError : false
  
//   }
  
//   });



// const vn = new Vue({
//   el: '#classbinding',
//   data: {
//     title: 'this is a binding example',
//     info: 'info',
//     errorclass: 'displayERROR',
//     isActive:'false',
//     hasError:'false',
//   },
//   components: {
//     'componenteBinding': {
//     template: '<div class="info">Class Binding for components</div>',
//   }
// }
// })

//app.js
