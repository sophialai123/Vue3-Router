<template>
  <h1>This is Jobs view page</h1>
  <div v-for="job in jobs" :key="job.id" class="jobs">


    <!-- v:blind the router name
       link different router params with an object-->
    <router-link :to="{name:'JobDetails',params:{id:job.id}}">
      {{job.title}}
    </router-link>
   
  </div>

  
  
  
</template>

<script>
export default {
  data(){
    return {
      jobs:[
       {id:1,title:"Frontend job developer"},
       {id:2,title:"Backend job developer"},
       {id:3,title:"Full stack job developer"}
      ]
    }
  }

}
</script>

<style scoped>
  .jobs{
    padding:20px;
    margin-bottom: 20px;
  }
  a{
    font-size:24px;
    border: 1px solid;
    padding: 20px;
    text-decoration: none;
    background-color: beige;
    cursor: pointer;
    border-radius: 8px;
    
  }

</style>>
