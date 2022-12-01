<template>
	<div class="container mt-4">
        <h4 class="text-primary text-center"  v-vue-aos="{animationClass:'fadeIn animated'}">Our Services</h4>
		<div class="row mt-5">
			<div class="col-md-6 mt-3" v-for="service in services" :key="id">
				<div class="row rounded-3 shadow m-1"  v-vue-aos="{animationClass:'fadeIn animated'}" style="height: 200px;">
					<div class="col-md-6" >
                    <img :src="service.photo" style="width: 100%; height: 200px; object-fit: cover; margin-left: -12px;">
                </div>
					<div class="p-3 col-md-6"> <h5>{{ service.name }}</h5>
                    <p class="mt-2"> {{ service.des }}</p></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
    name:'services',
    data(){
        return{
            services:[
                {
                    id:1,
                    name:"Accomodation",
                    des: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    photo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829410/blog-1_si4cwy.jpg"
                },
                {
                    id:2,
                    name:"Warm Shower",
                    des: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    photo: "https://media.istockphoto.com/id/941482120/photo/shower-head-with-drops-of-water-falling-down.jpg?s=612x612&w=0&k=20&c=BGLGprZ5gmvdU5e-itkVQtXAhzt0a1f3GW6NIGQo93M="
                },
                {
                    id:3,
                    name:"Accomodation",
                    des: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    photo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829410/blog-1_si4cwy.jpg"
                },
                {
                    id:4,
                    name:"Television Full Subscribed",
                    des: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    photo: "https://media.istockphoto.com/id/1216347742/photo/3-3d-rendering-elegant-and-spacious-bedroom-design-in-modern-apartment-large-wardrobe-next-to.jpg?s=612x612&w=0&k=20&c=haVRiQSMO-zDlOQf0UNIN_593kK6Zw4C9C9b6qY4HF8="
                },
                {
                    id:5,
                    name:"Decent Meal",
                    des: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    photo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829493/food4_vcmlna.jpg"
                },
                {
                    id:6,
                    name:"Free wifi",
                    des: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    photo: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                }
              
            ]
        }
    }
}
</script>
