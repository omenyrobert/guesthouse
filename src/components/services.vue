<template>
	<div class="container mt-4">
       
        <div class="d-flex my-3 justify-content-center" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1500"><h1 class="text-primary text-center">Our</h1><h1 class="text-info text-center">Services</h1></div> 
       
      
		<div class="row mt-5">
			<div class="col-md-6 mt-3" v-for="service in services" :key="service.id">
				<div class="d-flex rounded-3 shadow m-1"  data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1500" style="height: 200px;">
					<div class="w-50" >
                    <img :src="service.photo" style="width: 100%; height: 200px; object-fit: cover; margin-left: -12px;">
                </div>
					<div class="p-3 w-50"> <h5> {{ service.name }}</h5>
                    <p class="mt-2" style="font-size: 13px;"> {{ service.des }}</p></div>
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
                    des: "We have very affordable rooms of different types like Master bedroom, twin beds, double decker etc",
                    photo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008083/gh_21_zj6rc0.jpg"
                },
                {
                    id:2,
                    name:"Warm Shower",
                    des: "Well supplied warm shower for all the guest that come to stay at the guest house",
                    photo: "https://media.istockphoto.com/id/941482120/photo/shower-head-with-drops-of-water-falling-down.jpg?s=612x612&w=0&k=20&c=BGLGprZ5gmvdU5e-itkVQtXAhzt0a1f3GW6NIGQo93M="
                },
                {
                    id:3,
                    name:"Conference Hall",
                    des: "For the guest that need to have conference while staying at the guest house are offered conference hall",
                    photo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264439/sl1_n0566v.jpg"
                },
                {
                    id:4,
                    name:"Television Full Subscribed",
                    des: "Catching up with sports, music, news and other sorts of entertainment while at the guest house is covered",
                    photo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008102/gh_16_mpiupo.jpg"
                },
                {
                    id:5,
                    name:"Decent Meals",
                    des: "This include free breakfast and other meals that you can buy from our restaurant",
                    photo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670010453/break2_etti1t.jpg"
                },
                {
                    id:6,
                    name:"Free wifi",
                    des: "Very fast secure and reliable internet connection for catching with work, friends and family",
                    photo: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                },
                {
                    id:7,
                    name:"Business Lounge",
                    des: "Very comfortable  seats at the lounge for relaxing and refreshing ones minds",
                    photo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008096/gh_2_jpq8eb.jpg"
                }
              
            ]
        }
    }
}
</script>
