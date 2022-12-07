<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div class="card11 card">
        <div class="row">
          <div
            class="col-md-6"
          >
          <div class="left-card">
            <h1
              data-aos="zoom-up"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              Welcome To Bethany Home and guesthouse
            </h1>
            <p
              data-aos="zoom-left"
              data-aos-delay="1000"
              data-aos-duration="1500"
            >
              All the comfort at place
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1500"
              data-aos-duration="1500"
              class="btn btn-primary"
            >
              Book Now
            </button>
          </div>
           
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
      <div class="card1 card">
        <div class="row">
          <div
            class="col-md-6"
          >
          <div class="left-card">
            <h1
              data-aos="zoom-up"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              Comfortable Soft bed For A Night
            </h1>
            <p
              data-aos="zoom-left"
              data-aos-delay="1000"
              data-aos-duration="1500"
            >
              All the comfort at place
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1500"
              data-aos-duration="1500"
              class="btn btn-primary"
            >
              Book Now
            </button>
          </div>
           
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
      <div class="card2 card">
        <div class="row">
          <div
            class="col-md-6"
          >
          <div class="left-card">
            <h1
              data-aos="zoom-up"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              Meals at Comfortable Dining
            </h1>
            <p
              data-aos="zoom-left"
              data-aos-delay="1000"
              data-aos-duration="1500"
            >
              Enjoy every meal at a nice Dining Table
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1500"
              data-aos-duration="1500"
              class="btn btn-primary"
            >
              Book Now
            </button>
          </div>
           
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
      <div class="card3 card">
        <div class="row">
          <div
            class="col-md-6"
          >
          <div class="left-card">
            <h1
              data-aos="zoom-up"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              Organized Conference Hall
            </h1>
            <p
              data-aos="zoom-left"
              data-aos-delay="1000"
              data-aos-duration="1500"
            >
              We offer a very good place to conduct Conferences from
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1500"
              data-aos-duration="1500"
              class="btn btn-primary"
            >
              Book Now
            </button>
          </div>
           
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
      <div class="card4 card">
        <div class="row">
          <div
            class="col-md-6"
          >
          <div class="left-card">
            <h1
              data-aos="zoom-up"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
             Bethany Home and Guest House
            </h1>
            <p
              data-aos="zoom-left"
              data-aos-delay="1000"
              data-aos-duration="1500"
            >
              A guest house for one to rest
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1500"
              data-aos-duration="1500"
              class="btn btn-primary"
            >
              Book Now
            </button>
          </div>
           
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
      <div class="card5 card">
        <div class="row">
          <div
            class="col-md-6"
          >
          <div class="left-card">
            <h1
              data-aos="zoom-up"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              Business Lounge
            </h1>
            <p
              data-aos="zoom-left"
              data-aos-delay="1000"
              data-aos-duration="1500"
            >
              This gives a warm environment for Business matters
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1500"
              data-aos-duration="1500"
              class="btn btn-primary"
            >
              Book Now
            </button>
          </div>
           
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
    </VueSlickCarousel>
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
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        infinite: true,
      },
    };
  },
};
</script>

<style scoped>
.card {
  height: 90vh;
  background-size: 100%;
  padding: 150px;
}
card11{
  background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264382/gh_4_-min_meegci.jpg');
}
.card1 {
  background-image: url("https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264441/sl4_vuqwiq.jpg");
}

.card2 {
  background-image: url("https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264440/sl2_rdocso.jpg");
}

.card3 {
  background-image: url("https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264439/sl1_n0566v.jpg");
}

.card4 {
  background-image: url("https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264389/gh_9_-min_bzdtfa.jpg");
}

.card5 {
  background-image: url("https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264442/sl3_ilvi0o.jpg");
}
.left-card{
  background-color: rgba(0,0,0, 0.5); color: #fff; padding: 50px;
  margin-top: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
@media screen and (max-width:540px){
  .left-card {
    padding: 15px;
    margin-top: 150px;
    height: 25vh;
  }
  .card{
    padding: 20px;
    height: 55vh;
    background-size: cover;
  }
}
</style>
