<template>
   
   <div>
    <section v-if="!datareceived">
    <form @submit.prevent="submit" >
        <p><strong>Name </strong> <input type="text" v-model="formdata.name_u"></p>
         <p><strong>Email </strong><input type="text" v-model="formdata.email"></p>
         <p>
             <strong>City </strong>
         <select v-model="formdata.city" size="1">
                 <option v-for="(option,index) in cities" :key="index" :value="option">{{ option }}</option>             
         </select>
         </p>
         <p> 
             <strong>Gender </strong>
             <label v-for="(option, index) in options" :key="index">
       <input type="radio" v-model="formdata.gender" :value="option">
       {{ option }}
     </label></p>
         <p>  
         <strong>Age </strong><input type="checkbox" v-model="formdata.age"> Age greater than 35</p>
         <button v-mouse-highlight="'lightblue'">Submit</button>     
 
    </form>
   </section>
   <div v-else>
   
    <p><strong>Name -</strong> {{ formdata.name_u }}</p>
         <p><strong>Email -</strong>{{ formdata.email }}</p>
         <p><strong>City -</strong> {{ formdata.city }}</p>
         <p><strong>Gender -</strong> {{ formdata.gender }} </p>
         <p> <strong>Age - </strong> {{ formdata.age }}</p>
   </div>

  
 </div>

   
   
    
</template>

<script>
export default {
    name : 'ChildComponent',
    data (){
        return {
            formdata :{
             name_u :'',
             email:'',
             city:'',
             gender:'',
             age :'',
 
             },
            //  age :'',
            cities : ['Bangalore','Chennai','Delhi','Mumbai','Pune'],
            options :['Male','Female'],
            datareceived : false
        }
    },
    methods :{
        submit(){
           if(this.formdata.age == 'true' || this.formdata.age == true) {
            this.formdata.age ="Age is greater than 35"
            }else{
                this.formdata.age ="Age is less than 35"  
            }
            this.datareceived=true
            
        }
    },
    
    directives: {
    'my-search' :{
        beforeMount(el){
            el.style.color = 'red'
        },
        updated(el){
            el.style.color ='blue'
        }
    },
    'mouse-highlight': {
      beforeMount(el, binding) {
        // bind hook: initial setup
        el.style.transition = 'background-color 0.3s';
        el.style.backgroundColor = '';
        el.addEventListener('mouseover', () => {
          el.style.backgroundColor = binding.value;
        });
        // Mouse out event listener
        el.addEventListener('mouseout', () => {
          el.style.backgroundColor = '';
        })
      },
    },
  },
   
}
</script>
