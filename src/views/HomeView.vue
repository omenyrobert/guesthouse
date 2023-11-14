<template>
  <div>
    <navbar />
    <banaVue/>
<slideVue/>
<aboutCompVue/>
    <div class="container">
		
			<div class="d-flex justify-content-center"  data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1500"><h1 class="text-primary">Latest</h1><h1 class="text-info">Rooms</h1></div> 
		
		
      <div class="row">
        <div class="col-md-4" id="hous" v-for="house in houses" :key="house.id">
          <div
            class="m-2 p-2 shadow rounded-3 cardDiv"
            role="button"
            
            data-aos="zoom-in"
            data-aos-delay="500"
           
          >
            <div
              class="bg-white py-1 px-2 rounded m-2"
              style="position: absolute; width: 100px; height: 30px;"
            >
             <p style="font-size: 12px;" class="text-primary">{{house.single}}&nbsp;Single</p>
		</div>
            <img
              :src="house.photo1"
              style="width: 100%; height: 300px; object-fit: cover"
			  data-aos-duration="1500"
			  data-bs-toggle="modal"
            :data-bs-target="`#details${house.id}`"
            />
            <div class="d-flex justify-content-between mt-2">
              <div>
                <h6 class="mt-2">{{ house.name }}</h6>
                <p style="color: #787878">UGX: {{ house.amount }}</p>
              </div>
              <div class="d-flex justify-content-between" style="width: 120px">
                <div class="d-flex">
                  <div><img src="./bath.svg" style="width: 20px" /></div>
                  <div
                    class="text-center bg-light border rounded-circle text-primary pt-1"
                    style="
                      font-size: 12px;
                      width: 25px;
                      height: 25px;
                      margin-left: 5px;
                    "
                  >
                    <p>{{ house.bath }}</p>
                  </div>
                </div>
                <div class="d-flex" style="margin-left: 15px">
                  <div>
                    <img src="./bed.svg" style="width: 20px" />
                  </div>
                  <div
                    class="text-center bg-light border rounded-circle text-primary pt-1"
                    style="
                      font-size: 12px;
                      width: 25px;
                      height: 25px;
                      margin-left: 5px;
                    "
                  >
                    <p>{{ house.bed }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-between">
              <a href="https://wa.me/+256 761257383"
                class="bg-light rounded-3 p-2 text-center"
                style="width: 80px; text-decoration: none;"
              >
                <i class="bi bi-whatsapp text-primary text-center"></i>
                <p class="text-primary text-xs" style="font-size: 10px">
                  WhatsApp
                </p>
			</a>
			<a href="mailto:bethanyhomekumi@gmail.com"
                class="bg-light rounded-3 p-2 text-center"
                style="width: 80px; text-decoration: none;"
              >
                <i class="bi bi-envelope-fill text-primary"></i>
                <p class="text-primary" style="font-size: 10px">Email</p>
		</a>
		<a href="tel:+256 706110187"
                class="bg-light rounded-3 p-2 text-center"
                style="width: 80px; text-decoration: none;"
              >
                <i class="bi bi-telephone-fill text-primary"></i>
                <p class="text-primary" style="font-size: 10px">Phone</p>
	</a>
            </div>

            <div class="w-full p-3 bg-white bookBtn">
              <center>
                <button
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  :data-bs-target="`#details${house.id}`"
                  style="width: 80%"
                >
                  Book Now
                </button>
              </center>
            </div>
          </div>
          <!-- modal begin -->
          <div
            class="modal fade"
            :id="`details${house.id}`"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    {{ house.name }}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div
                        id="carouselExampleIndicators"
                        class="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div class="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img
                              :src="house.photo1"
                              style="
                                width: 100%;
                                height: 300px;
                                object-fit: cover;
                              "
                              alt="..."
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              :src="house.photo2"
                              style="
                                width: 100%;
                                height: 300px;
                                object-fit: cover;
                              "
                              alt="..."
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              :src="house.photo3"
                              style="
                                width: 100%;
                                height: 300px;
                                object-fit: cover;
                              "
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          class="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                          class="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                      <div class="mt-3 d-flex justify-content-between">
                        <div>
                          <img
                            :src="house.photo1"
                            style="
                              width: 150px;
                              height: 100px;
                              object-fit: cover;
                            "
                            alt="..."
                          />
                        </div>
                        <div>
                          <img
                            :src="house.photo2"
                            style="
                              width: 150px;
                              height: 100px;
                              object-fit: cover;
                            "
                            alt="..."
                          />
                        </div>
                        <div>
                          <img
                            :src="house.photo3"
                            style="
                              width: 150px;
                              height: 100px;
                              object-fit: cover;
                            "
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <h4 class="m-3 text-primary">{{ house.name }}</h4>
                      <br />
                      <h6>Single:&nbsp;&nbsp;{{ house.single }}</h6>
                      <br />
                      <h6>Double:&nbsp;&nbsp;{{ house.amount }}</h6>
                      <p>{{ house.des }}</p>
                      <div class="mt-3">
                        <div class="m-1 d-flex p-2 shadow mt-3">
                          <div>
                            <img
                              :src="house.service1"
                              style="
                                width: 50px;
                                height: 50px;
                                object-fit: cover;
                              "
                            />
                          </div>
                          <div>
                            {{ house.service1Words }}
                          </div>
                        </div>
                        <div class="m-1 d-flex p-2 shadow mt-3">
                          <div>
                            <img
                              :src="house.service2"
                              style="
                                width: 50px;
                                height: 50px;
                                object-fit: cover;
                              "
                            />
                          </div>
                          <div>
                            {{ house.service2Words }}
                          </div>
                        </div>
                        <div class="m-1 d-flex p-2 shadow mt-3">
                          <div>
                            <img
                              :src="house.service3"
                              style="
                                width: 50px;
                                height: 50px;
                                object-fit: cover;
                              "
                            />
                          </div>
                          <div>
                            {{ house.service3Words }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-2">
                      <label>Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div class="col-md-2">
                      <label>Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div class="col-md-2">
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div class="col-md-2">
                      <label>Note</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Send with a note"
                        required
                      />
                    </div>
                    <div class="col-md-2 mt-3">
                      <button @click="payViaService" class="btn btn-primary">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- modal end -->
        </div>
      </div>
    </div>
    <br/><br/><br/>
    <div class="container-fluid" style="background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264382/gh_4_-min_meegci.jpg');  background-attachment: fixed; background-size: 100%;">
    <div class="choos">

    <div>
    <h1 class="text-white"  data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1500">Why Choose Us?</h1>
    <ul  data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-duration="1500">
    <li class="text-white">High Level of cleanliness</li>
    <li class="text-white">Affordable Prices</li>
    <li class="text-white">Accessibility</li>
    </ul>
    </div>
    
    </div>
    
    </div>
    <servicesVue />
	<br/><br/><br/><br/><br/>
    <footerSection />
  </div>
</template>

<script>
import slideVue from "../components/slide.vue";
import banaVue from '../components/bana.vue';
import navbar from '../components/nav.vue'
import footerSection from '../components/footer.vue'
import servicesVue from '../components/services.vue'
import aboutCompVue from "../components/aboutComp.vue";
export default {
  name: "HomeView",
  components: {
    navbar,
    footerSection,
    servicesVue,
    slideVue,
    banaVue,
	aboutCompVue
  },
  data() {
    return {
      selectedSong: null,
      search: "",
      houses: [
        {
          id: 1,
          name: "Excutive Delux ",
          amount: "65,000",
          bath: 1,
          bed: 1,
          single: " 52,000",
          des: "Comes with Breakfast, Free Wi-Fi and TV. Bottle of Rwenzori water. 52,000 for single",
          photo1:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008083/gh_21_zj6rc0.jpg",
          photo2:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008083/gh_21_zj6rc0.jpg",
          photo3:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008083/gh_21_zj6rc0.jpg",
          service1:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670010454/faa_blmlu6.jpg",
          service1Words: "Decent breakfast for free",
          service2:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008102/gh_16_mpiupo.jpg",
          service2Words: "Free DSTV fully subscribed",
          service3:
            "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          service3Words: "Free Wifi",
        },
        {
          id: 2,
          name: "Delux bedroom",
          amount: "55,000",
          single: "42,000",
          bath: 1,
          bed: 1,
          des: "Comes with Breakfast, Free Wi-Fi and Tv.",
          photo1:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008069/gh_22_mbhjyz.jpg",
          photo2:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008069/gh_22_mbhjyz.jpg",
          photo3:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008069/gh_22_mbhjyz.jpg",
          service1:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670010454/faa_blmlu6.jpg",
          service1Words: "Decent breakfast for free",
          service2:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008102/gh_16_mpiupo.jpg",
          service2Words: "Free DSTV fully subscribed",
          service3:
            "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          service3Words: "Free Wifi",
        },
        {
          id: 3,
          name: "Double twin bedroom",
          amount: "55,000",
          bath: 1,
          bed: 1,
		  single:"27,000",
		  des: "Comes with Breakfast, Free Wi-Fi and Tv.",
          photo1:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008081/gh_19_g3vma2.jpg",
          photo2:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008081/gh_19_g3vma2.jpg",
          photo3:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008081/gh_19_g3vma2.jpg",
          service1:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670010454/faa_blmlu6.jpg",
          service1Words: "Decent breakfast for free",
          service2:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008102/gh_16_mpiupo.jpg",
          service2Words: "Free DSTV fully subscribed",
          service3:
            "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          service3Words: "Free Wifi",
        },
        {
          id: 4,
          name: "Double decker bedroom",
          amount: "65,000",
          bath: 1,
          bed: 1,
		  single: " 17,000",
		  des: "Comes with Breakfast, Free Wi-Fi and Tv.",
          photo1:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008084/gh_24_cl5sqe.jpg",
          photo2:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008084/gh_24_cl5sqe.jpg",
          photo3:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008084/gh_24_cl5sqe.jpg",
          service1:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670010454/faa_blmlu6.jpg",
          service1Words: "Decent breakfast for free",
          service2:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008102/gh_16_mpiupo.jpg",
          service2Words: "Free DSTV fully subscribed",
          service3:
            "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          service3Words: "Free Wifi",
        },
        {
          id: 5,
          name: "Twin bedroom",
          amount: "45,000",
          bath: 1,
          bed: 1,
		  des: "Comes with Breakfast, Free Wi-Fi and Tv.",
          photo1:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008083/gh_29_pxaesi.jpg",
          photo2:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008083/gh_29_pxaesi.jpg",
          photo3:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008083/gh_29_pxaesi.jpg",
          service1:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670010454/faa_blmlu6.jpg",
          service1Words: "Decent breakfast for free",
          service2:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008102/gh_16_mpiupo.jpg",
          service2Words: "Free DSTV fully subscribed",
          service3:
            "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          service3Words: "Free Wifi",
        },
       
      ],
     
      paymentData: {
        tx_ref: this.generateReference(),
        amount: 30000,
        currency: "UGX",
        public_key: "FLWPUBK_TEST-8c1f4d871cb37a96bb33191bbcb6cdcb-X",
        payment_options: "mobilemoney",
        redirect_url: "",
        meta: {
          counsumer_id: "7898",
          consumer_mac: "kjs9s8ss7dd",
        },
        customer: {
          name: "Customer  Name",
          email: "customer@mail.com",
          phone_number: "081845***044",
        },
        customizations: {
          title: "Bethany home and guest house",
          description: "Pay Using mobile money or Bank card",
          logo: "../../public/logo.jpg",
        },
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal,
      },
    };
  },
  computed: {
  
  },
  methods: {
    payViaService(song) {
      this.payWithFlutterwave(this.paymentData);
      console.log("Song Id", song);
      this.selectedSong = song;
    },
    makePaymentCallback(response) {
     
    },
    closedPaymentModal() {
      console.log("payment is closed");
    },
    generateReference() {
      let date = new Date();
      return date.getTime().toString();
    },
  },
};
</script>
<style scoped>
.choos{
  background-color: rgba(0,0,0, 0.7); height: 70vh; padding: 150px;
}
.bookBtn {
  display: none;
}
.cardDiv:hover .bookBtn {
  display: block;
}
.banner {
  height: 70vh;
  margin-top: 150px;
  background-image: url("https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008078/gh_23_nv4fvx.jpg");
  background-size: 100%;
}
.banner-content {
  background-color: rgba(0, 0, 0, 0.8);
  height: 70vh;
  background-size: 100%;
}
.slid{
	width: 100%; object-fit: cover;
	height: 100px;
	border-radius: 10px;
	margin-top: -70px;
}
.banner-title{
	font-size: 60px;
	margin-top: 20vh;
	margin-left: 10vh;
	animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
@media (max-width:600px){
   .banner-title{
	font-size: 36px;
   }
   .choos{
    height: 40vh; padding: 50px;
   }
   .banner{
	height: 40vh;
   }
   .banner-content{
	height: 40vh;
   }
   .slid{
	display: none;
   }
}
@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
}
</style>
