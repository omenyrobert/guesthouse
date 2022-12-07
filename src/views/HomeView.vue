<template>
	<div>
		<navbar />
		<mainPage />
<aboutCompVue/>
		<div class="container">
			<h4
				class="text-primary text-center mt-5"
				v-vue-aos="{ animationClass: 'fadeIn animated' }"
			>
				Latest Rooms
			</h4>
			<center>
				<div
					style="border: 1px #ccc solid; border-radius: 10px; width: 70%"
					class="p-1 m-3"
					v-vue-aos="{ animationClass: 'fadeIn animated' }"
				>
					<input
						type="search"
						class="form-control"
						style="border: none"
						placeholder="Search for room here ..."
					/>
				</div>
			</center>

			<div class="row">
				<div class="col-md-4" v-for="house in houses" :key="house.id">
					<div
						class="m-2 p-2 shadow rounded-3 cardDiv"
						role="button"
						data-bs-toggle="modal"
						:data-bs-target="`#details${house.id}`"
						v-vue-aos="{ animationClass: 'fadeIn animated' }"
					>
						<p
							class="bg-white py-1 px-2 rounded m-2"
							style="position: absolute; font-size: 13px"
						>
							Per Night
						</p>
						<img
							:src="house.photo1"
							style="width: 100%; height: 300px; object-fit: cover"
						/>
						<div class="d-flex justify-content-between mt-2">
							<div>
								<h5 class="mt-2">{{ house.name }}</h5>
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
							<div
								class="bg-light rounded-3 p-2 text-center"
								style="width: 80px"
							>
								<i class="bi bi-whatsapp text-primary text-center"></i>
								<p class="text-primary text-xs" style="font-size: 10px">
									WhatsApp
								</p>
							</div>
							<div
								class="bg-light rounded-3 p-2 text-center"
								style="width: 80px"
							>
								<i class="bi bi-envelope-fill text-primary"></i>
								<p class="text-primary" style="font-size: 10px">Email</p>
							</div>
							<div
								class="bg-light rounded-3 p-2 text-center"
								style="width: 80px"
							>
								<i class="bi bi-telephone-fill text-primary"></i>
								<p class="text-primary" style="font-size: 10px">Phone</p>
							</div>
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
		<servicesVue />
		<footerSection />
	</div>
</template>

<script>
import axios from "axios";
import navbar from "../components/nav.vue";
import footerSection from "../components/footer.vue";
import mainPage from "../components/mainPage.vue";
import servicesVue from "../components/services.vue";
import aboutCompVue from "../components/aboutComp.vue";
export default {
	name: "HomeView",
	components: {
		navbar,
		footerSection,
		mainPage,
		servicesVue,
		aboutCompVue
	},
	data() {
		return {
			selectedSong: null,
			search: "",
			houses: [
				{
					id: 1,
					name: "one bedroom",
					amount: "70,000",
					bath: 2,
					bed: 1,
					photo1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829436/gallery-2_g3qlb1.jpg",
					photo2:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829436/coming-soon_kdtxnd.jpg",
					photo3:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829437/gallery-4_k3odcq.jpg",
					service1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829493/food2_foyice.jpg",
					service1Words: "Decent breakfast for free",
					service2:
						"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service2Words: "Free DSTV fully subscribed",
					service3:
						"https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service3Words: "Free Wifi",
				},
				{
					id: 2,
					name: "Bedroom and sitting room",
					amount: "270,000",
					bath: 1,
					bed: 2,
					photo1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829410/blog-1_si4cwy.jpg",
					photo2:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829410/blog-15_xdujde.jpg",
					photo3:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829437/gallery-4_k3odcq.jpg",
					service1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829493/food2_foyice.jpg",
					service1Words: "Decent breakfast for free",
					service2:
						"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service2Words: "Free DSTV fully subscribed",
					service3:
						"https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service3Words: "Free Wifi",
				},
				{
					id: 3,
					name: "Nkooye",
					amount: "70,000",
					bath: 2,
					bed: 3,
					photo1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829408/blog-2_wtwaf9.jpg",
					photo2:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829436/coming-soon_kdtxnd.jpg",
					photo3:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829437/gallery-4_k3odcq.jpg",
					service1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829493/food2_foyice.jpg",
					service1Words: "Decent breakfast for free",
					service2:
						"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service2Words: "Free DSTV fully subscribed",
					service3:
						"https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service3Words: "Free Wifi",
				},
				{
					id: 4,
					name: "Nabagereka",
					amount: "70,000",
					bath: 1,
					bed: 2,
					photo1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829436/gallery-2_g3qlb1.jpg",
					photo2:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829436/coming-soon_kdtxnd.jpg",
					photo3:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829437/gallery-4_k3odcq.jpg",
					service1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829493/food2_foyice.jpg",
					service1Words: "Decent breakfast for free",
					service2:
						"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service2Words: "Free DSTV fully subscribed",
					service3:
						"https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service3Words: "Free Wifi",
				},
				{
					id: 5,
					name: "Nabagereka",
					amount: "70,000",
					bath: 2,
					bed: 1,
					photo1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829408/blog-3_tgqlb5.jpg",
					photo2:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829436/coming-soon_kdtxnd.jpg",
					photo3:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829437/gallery-4_k3odcq.jpg",
					service1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829493/food2_foyice.jpg",
					service1Words: "Decent breakfast for free",
					service2:
						"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service2Words: "Free DSTV fully subscribed",
					service3:
						"https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service3Words: "Free Wifi",
				},
				{
					id: 6,
					name: "Sitting room and Bedroom",
					amount: "70,000",
					bath: 2,
					bed: 1,
					photo1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829408/blog-6_u3entx.jpg",
					photo2:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829436/coming-soon_kdtxnd.jpg",
					photo3:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829437/gallery-4_k3odcq.jpg",
					service1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829493/food2_foyice.jpg",
					service1Words: "Decent breakfast for free",
					service2:
						"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service2Words: "Free DSTV fully subscribed",
					service3:
						"https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service3Words: "Free Wifi",
				},
				{
					id: 7,
					name: "Nabagereka",
					amount: "70,000",
					bath: 3,
					bed: 1,
					photo1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829436/gallery-2_g3qlb1.jpg",
					photo2:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829436/coming-soon_kdtxnd.jpg",
					photo3:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829437/gallery-4_k3odcq.jpg",
					service1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829493/food2_foyice.jpg",
					service1Words: "Decent breakfast for free",
					service2:
						"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service2Words: "Free DSTV fully subscribed",
					service3:
						"https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service3Words: "Free Wifi",
				},
				{
					id: 8,
					name: "Classic Treat",
					amount: "470,000",
					bath: 1,
					bed: 2,
					photo1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829299/5_lmdvjc.png",
					photo2:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829436/coming-soon_kdtxnd.jpg",
					photo3:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829437/gallery-4_k3odcq.jpg",
					service1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829493/food2_foyice.jpg",
					service1Words: "Decent breakfast for free",
					service2:
						"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service2Words: "Free DSTV fully subscribed",
					service3:
						"https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service3Words: "Free Wifi",
				},
				{
					id: 9,
					name: "Single Bedroom",
					amount: "100,000",
					bath: 1,
					bed: 2,
					photo1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829299/2_gsegyr.png",
					photo2:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829436/coming-soon_kdtxnd.jpg",
					photo3:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829437/gallery-4_k3odcq.jpg",
					service1:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829493/food2_foyice.jpg",
					service1Words: "Decent breakfast for free",
					service2:
						"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZXZpc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service2Words: "Free DSTV fully subscribed",
					service3:
						"https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lmaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					service3Words: "Free Wifi",
				},
			],
			gallery: [
				{
					id: 1,
					name: "Girl Like You",
					photo:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658457/Kallery/seventeenmusic/WhatsApp_Image_2022-06-26_at_7.55.29_AM_fqghzv.jpg",
				},
				{
					id: 2,
					name: "Nsonyiwa",
					photo:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658285/Kallery/seventeenmusic/s2_qynpuc.jpg",
				},
				{
					id: 3,
					name: "Nkooye",
					photo:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658065/Kallery/seventeenmusic/s2_p9izel.jpg",
				},
				{
					id: 4,
					name: "Nabagereka",
					photo:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1656657292/Kallery/seventeenmusic/s1_bfk6on.jpg",
				},
			],
			updates: [
				{
					id: 1,
					name: "Interview at NBS",
					amount: 1000,
					audioMusic:
						"https://res.cloudinary.com/dtlkiv19d/video/upload/v1656665568/Kallery/seventeenmusic/m1_cyotkp.mp3",
					photo:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658457/Kallery/seventeenmusic/WhatsApp_Image_2022-06-26_at_7.55.29_AM_fqghzv.jpg",
				},
				{
					id: 2,
					name: "Freedom city party",
					photo:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658285/Kallery/seventeenmusic/s2_qynpuc.jpg",
				},
				{
					id: 3,
					name: "Nkooye Launch",
					photo:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658065/Kallery/seventeenmusic/s2_p9izel.jpg",
				},
				{
					id: 4,
					name: "Charity giving",
					photo:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1656657292/Kallery/seventeenmusic/s1_bfk6on.jpg",
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
					logo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1669829436/gallery-2_g3qlb1.jpg",
				},
				callback: this.makePaymentCallback,
				onclose: this.closedPaymentModal,
			},
		};
	},
	computed: {
		filteredSong() {
			return this.songs.filter((song) =>
				song.name.toLowerCase().includes(this.search.toLowerCase())
			);
		},
	},
	methods: {
		payViaService(song) {
			this.payWithFlutterwave(this.paymentData);
			console.log("Song Id", song);
			this.selectedSong = song;
		},
		makePaymentCallback(response) {
			console.log("Pay", response);
			const song = this.selectedSong;
			axios({
				url: song.audioMusic,
				method: "GET",
				responseType: "blob",
			}).then((response) => {
				var fileURL = window.URL.createObjectURL(new Blob([response.data]));
				var fileLink = document.createElement("a");

				fileLink.href = fileURL;
				fileLink.setAttribute("download", `${song.name}.mp3`);
				document.body.appendChild(fileLink);

				fileLink.click();
			});
		},
		closedPaymentModal() {
			console.log("payment is closed");
		},
		generateReference() {
			let date = new Date();
			return date.getTime().toString();
		},
		downloadSong() {
			console.log("download starting here");
			// axios({
			//   url: "https://res.cloudinary.com/dtlkiv19d/video/upload/v1656665568/Kallery/seventeenmusic/m1_cyotkp.mp3",
			//   method: "GET",
			//   responseType: "blob",
			// }).then((response) => {
			//   var fileURL = window.URL.createObjectURL(new Blob([response.data]));
			//   var fileLink = document.createElement("a");

			//   fileLink.href = fileURL;
			//   fileLink.setAttribute("download", "file.mp3");
			//   document.body.appendChild(fileLink);

			//   fileLink.click();
			// });
		},
	},
};
</script>
<style>
.bookBtn {
	display: none;
}
.cardDiv:hover .bookBtn {
	display: block;
}
</style>
