<template>
  <div>
    <navVue/>
    <br/><br/><br/><br/><br/><br/>
    <div class="row my-5">
		<div class="col-md-7 p-2">
			<img
				src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264389/gh_9_-min_bzdtfa.jpg"
				style="width: 85%"
			/>
			<img
				src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1670264441/sl4_vuqwiq.jpg"
				class="small-pic"
			/>
		</div>
		<div class="col-md-5 p-5 bg-light">
			<div class="d-flex my-3 justify-content-center">
				<h1 class="text-primary">About</h1>
				<h1 class="text-info">Us</h1>
			</div>
			<p>
				Welcome to Bethany Home and Guest House Kumi. We are christian
				guesthouse located along Ikori Road plot 81 Kumi Municipality with
				enough space for parking and quiet peaceful environment
			</p>
			<h6>Services</h6>
			<ul>
				<li>Enough car parking</li>
				<li>Accommodation of different packages</li>
				<li>Business lounge</li>
				<li>Conference Hall</li>
				<li>Wifi</li>
				<li>Warm shower</li>
				<li>Descent meal</li>
			</ul>

      <div class="row">
        <div class="col-md-6 p-2">
          <div class="bg-white p-4 rounded-3 shadow" style="font-size: 13px; height: 280px;" >
            <h4 class="text-primary text-center">Packages</h4>
<p>
  Master bedroom 62,000 per night  <br/>
Comes with Breakfast, Free Wi-Fi and TV. Bottle of Rwenzori water<br/>
Delux bedroom 52,000 per night  <br/>
Comes with Breakfast, Free Wi-Fi and Tv.<br/>
Double twin bedroom 27,000 per night  <br/>
Double decker bedroom 17,000 per night  <br/>
Twin bedroom 22,000 per night <br/>
</p>
          </div>

        </div>
        <div class="col-md-6 p-2">
          <div class="bg-white p-4 rounded-3 shadow" style="font-size: 13px; height: 280px;">
            <h4 class="text-primary">Food</h4>
          <ul>
  <li>Lunch plate  10,000/= </li>
<li>Teas and Bites 3,000/=</li>
<li>Mineral Water 1,500/=</li>
<li>Meeting Hall 20,000/=</li>
<li>The above rates exclude 18% VAT</li>
</ul>
          </div>
     
        </div>

      </div>

		</div>
	</div>

<br/>
    <footerVue/>
    </div>
</template>

<script>
import navVue from '../components/nav.vue';
import footerVue from '../components/footer.vue';
export default {
  name: 'about',
  components:{
    navVue,
    footerVue
  }
}
</script>
<style scoped>
.small-pic {
	width: 200px;
	height: 200px;
	border: 5px #fff solid;
	border-radius: 100%;
	z-index: 1000;
	margin-top: -35%;
	margin-left: 70%;
	object-fit: cover;
}
</style>
