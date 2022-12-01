<template>
	<div>
		<div
			id="carouselExampleCaptions"
			class="carousel slide"
			data-bs-ride="carousel"
		>
			<div class="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="0"
					class="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
        <button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="3"
					aria-label="Slide 4"
				></button>
			</div>
			<div class="carousel-inner">
				<div
					class="carousel-item active slide1"
				
				>
        
					<div class="row carousel-caption">
						<div class="col-md-6" style="margin-top: -100px;">
							<h1 class="text-white">Behold the confort beyond</h1>
							<h6 class="text-white">
								Enjoy your night in soft warm bed at the lowest price
							</h6>
						</div>
						<div class="col-md-6"></div>
					</div>
				</div>
				<div
					class="carousel-item slide2"
		
				>
        <div class="row carousel-caption">
						<div class="col-md-6">
							<h1 class="text-white">Every Night of sleep is the best</h1>
							<h6 class="text-white">
								Enjoy your night in soft warm bed at the lowest price
							</h6>
						</div>
						<div class="col-md-6"></div>
					</div>
				</div>
				<div
					class="carousel-item slide3"
					
				>
        <div class="row carousel-caption">
						<div class="col-md-6">
							<h1 class="text-white">Behold the confort beyond</h1>
							<h6 class="text-white">
								Enjoy your night in soft warm bed at the lowest price
							</h6>
						</div>
						<div class="col-md-6"></div>
					</div>
				</div>
				<div
					class="carousel-item slide4"
				
				>
					<div class="row arousel-caption">
						<div class="col-md-6" >
							<h1 class="text-white">Behold the confort beyond</h1>
							<h6 class="text-white">
								Enjoy your night in soft warm bed at the lowest price
							</h6>
						</div>
						<div class="col-md-6"></div>
					</div>
				</div>
			</div>
			<button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "mainPage",
};
</script>
<style scoped>
.carousel-caption {
    margin-top: 100px;
    
}
.slide1{
  height: 80vh;
						background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1669876360/mm4_w952tr.png');
						background-size: 100%;
}
.slide2{
  height: 80vh;
						background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1669876360/mm3_zgskmy.png');
						background-size: 100%;
}
.slide3{
  height: 80vh;
						background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1669876359/mm1_achsel.png');
						background-size: 100%;
}
.slide4{
  height: 80vh;
						background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1669876358/mm2_yr0vkm.png');
						background-size: 100%;
}
@media only screen and (max-width: 600px) {
  .slide4{
    height: 400px;
    background-size: contain;
  } 
  .slide3{
    height: 400px;
    background-size: contain;
  }
  .slide2{
    height: 400px;
    background-size: contain;
  }
  .slide1{
    height: 400px;
    background-size: contain;
  }
}
</style>
