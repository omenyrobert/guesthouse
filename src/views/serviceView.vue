<template>
    <div>
        <navVue/>
        <br/><br/><br/><br/><br/><br/>
    <servicesVue/>
    <br/><br/><br/>
    <footerVue/>
    </div>
   
</template>
<script>
import navVue from '../components/nav.vue';
import footerVue from '../components/footer.vue';
import servicesVue from '../components/services.vue';
export default{
    name:'serviceView',
    components:{
        navVue ,
        servicesVue,
        footerVue
    }
}
</script>