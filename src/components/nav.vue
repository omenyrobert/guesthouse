<template>
    <div class="fixed-top">
<div class="superNav border-bottom py-2 bg-white">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
        <span class="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3"></span>
        <span class="me-3"><i class="fa-solid fa-phone me-1 text-warning"></i><i class="bi bi-telephone-fill text-primary"></i>&nbsp; +256 (0) 706110187 </span>
        <span class="me-3"><i class="fa-solid fa-phone me-1 text-warning"></i><i class="bi bi-whatsapp text-primary"></i> &nbsp; +256 (0) 772510187 </span>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
        <span class="me-3"><i class="bi bi-geo-alt text-primary"></i>&nbsp;Ikori Road Plot 81, Kumi Municipality.</span>
        <span class="me-3"><i class="bi bi-facebook text-primary" style="font-size: 18px;"></i></span>
        <span class="me-3"><i class="bi bi-twitter text-primary" style="font-size: 18px;"></i></span>
        <span class="me-3"><i class="bi bi-telegram text-primary" style="font-size: 18px;"></i></span>
        <span class="me-3"> <i class="bi bi-instagram text-primary" style="font-size: 18px;"></i></span>
      </div>
    </div>
  </div>
</div>
<nav class="navbar navbar-expand-lg bg-white  navbar-light p-3 shadow-sm">
  <div class="container">
    <router-link to="/home" class="navbar-brand" style="display: flex;"><img src="../../public/logo.jpg" style="width: 50px;"><h4 class="text-primary" style="margin-top: 5px; margin-left: 5px;">Bethany home kumi</h4></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
     
      <ul class="navbar-nav ms-auto ">
      
      </ul>
      <ul class="navbar-nav ms-auto ">
        <li class="nav-item">
          <router-link to="/home" class="nav-link mx-2 text-uppercase">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link mx-2 text-uppercase">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/service" class="nav-link mx-2 text-uppercase">Services</router-link>
        </li>
        <li class="nav-item">
          <a href="#hous" class="btn btn-primary">Book Now</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default{
    name:'nav'
}
</script>

<style scoped>
	a {
  font-size:14px;
  font-weight:700
}
.superNav {
  font-size:13px;
}
.form-control {
  outline:none !important;
  box-shadow: none !important;
}
@media screen and (max-width:540px){
  .centerOnMobile {
    text-align:center
  }
}
</style>