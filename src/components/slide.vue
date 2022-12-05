<template>
  <div>
    <br /><br />
    <div class="container">
        <center>
            <h4 class="text-primary">Sample Services</h4>
        </center>
      
        <br/>
      <VueSlickCarousel v-bind="settings">
        <div class="card">
          <img
            src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1670010457/faa2_y11tqm.jpg"
            class="slid"
          />
          <div class="p-2 rounded-3 cap">Breakfast</div>
        </div>
        <div class="card">
          <img
            src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264441/sl4_vuqwiq.jpg"
            class="slid"
          />
          <div class="p-2 rounded-3 cap">Bedroom</div>
        </div>
        <div class="card">
          <img
            src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264442/sl3_ilvi0o.jpg"
            class="slid"
          />
          <div class="p-2 rounded-3 cap">Lounge</div>
        </div>
        <div class="card">
          <img
            src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264440/sl2_rdocso.jpg"
            class="slid"
          />
          <div class="p-2 rounded-3 cap">Dining Room</div>
        </div>
        <div class="card">
          <img
            src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264439/sl1_n0566v.jpg"
            class="slid"
          />
          <div class="p-2 rounded-3 cap">Conference Hall</div>
        </div>
        <div class="card">
          <img
            src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008096/gh_2_jpq8eb.jpg"
            class="slid"
          />
          <div class="p-2 rounded-3 cap">Business Lounge</div>
        </div>
        <div class="card">
          <img
            src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1670008102/gh_16_mpiupo.jpg"
            class="slid"
          />
          <div class="p-2 rounded-3 cap">Flatscreen TV</div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "slide",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        infinite: true,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.card {
  height: 150px;
  margin: 10px;
  border: none;
}
.slid {
  width: 95%;
  object-fit: cover;
  height: 150px;
  border-radius: 10px;
}
.cap{
    color: #fff; background-color: rgba(0,0,0, 0.8); 
    position: absolute;
    margin-top: -50px;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 12px;
    
}
</style>
