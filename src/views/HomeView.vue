<template>
<div>
  <navbar/>
<mainPage/>
<footerSection/>
</div>

</template>

<script>
import axios from "axios";
import navbar from "../components/nav.vue";
import footerSection from "../components/footer.vue";
import mainPage from "../components/mainPage.vue";
export default {
  name: "HomeView",
  components: {
     navbar,
     footerSection,
     mainPage
  },
  data() {
    return {
      selectedSong: null,
      search: "",
      songs: [
        {
          id: 1,
          name: "Girl Like You",
          amount: 1000,
          audioMusic:
            "https://res.cloudinary.com/dtlkiv19d/video/upload/v1656665568/Kallery/seventeenmusic/m1_cyotkp.mp3",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658457/Kallery/seventeenmusic/WhatsApp_Image_2022-06-26_at_7.55.29_AM_fqghzv.jpg",
        },
        {
          id: 2,
          name: "Nsonyiwa",
          amount: 1000,
          audioMusic:
            "https://res.cloudinary.com/dtlkiv19d/video/upload/v1656667008/Kallery/seventeenmusic/m2_l37vlz.mp3",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658285/Kallery/seventeenmusic/s2_qynpuc.jpg",
        },
        {
          id: 3,
          name: "Nkooye",
          amount: 1000,
          audioMusic:
            "https://res.cloudinary.com/dtlkiv19d/video/upload/v1656667087/Kallery/seventeenmusic/m3_jyk2hz.mp3",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656658065/Kallery/seventeenmusic/s2_p9izel.jpg",
        },
        {
          id: 4,
          name: "Nabagereka",
          amount: 1000,
          audioMusic:
            "https://res.cloudinary.com/dtlkiv19d/video/upload/v1656667091/Kallery/seventeenmusic/m4_ciuup3.mp3",
          photo:
            "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656657292/Kallery/seventeenmusic/s1_bfk6on.jpg",
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
        amount: 1000,
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
          title: "Seventeen Music Ug",
          description: "Pay Using mobile money and download",
          logo: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1656922199/Kallery/seventeenmusic/back2_vpstxs.png",
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
      console.log('Song Id',song)
      this.selectedSong = song
    },
    makePaymentCallback(response) {
      console.log("Pay", response);
      const song = this.selectedSong
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
#titles {
  margin-left: 45vw;
}
.images {
  width: 100%;
  height: 390px;
}
#account{
  margin-right: 20px;
  margin-top: 15px;
}
#search {
  width: 500px;
  margin-top: 20px;
}
.search-div {
  margin-left: 30vw;
}
 #main-title{
    font-size: 40px;
    
  }
  #banner-title2{
    display: none;
  }
#banner-title{
  animation: shake 2s;
  animation-iteration-count: infinite;
  margin-top: 15vw; margin-left: 5vw;
}
@keyframes shake {
              0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
            40% {transform: translateY(-20px);} 
            60% {transform: translateY(-15px);} 
}
@media only screen and (max-width: 600px) {
  #account{
  margin-right: 2px;
  margin-top: 13px;
}
  #main-title{
    font-size: 20px;
    
  }
    #banner-title2{
    animation: shake 2s;
    animation-iteration-count: infinite;
    display: inline;
    margin-top: 150px;
    margin-left: -85vw;
    width: 90%;
    position: absolute;
  }
  #iconss{
    display: none;
  }
  #titles {
    margin-left: 30vw;
  }
  #banner-title{
 display: none;
}
  .search-div {
    margin-left: 28px;
  }
  #search {
    width: 280px;
    margin-top: 20px;
  }
  .images {
    height: 330px;
  }
}
</style>
