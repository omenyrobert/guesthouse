<template>
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
		</div>
	</div>
</template>

<script>
export default {
	name: "aboutComp",
};
</script>
<style scoped>
.small-pic {
	width: 200px;
	height: 200px;
	border: 5px #fff solid;
	border-radius: 100%;
	z-index: 1000;
	margin-top: -35%;
	margin-left: 75%;
	object-fit: cover;

}
@media (max-width:600px){
  .small-pic {
    margin-left: 70%;
	margin-top: -50%;
	width: 120px;
	height: 120px;
  }

}
</style>
