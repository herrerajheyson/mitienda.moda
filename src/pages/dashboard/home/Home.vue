<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center bd-highlight mb-3">
      <div class="bd-highlight">
        <div class="row mb-2 d-flex justify-content-center">
          <div class="col-9">
            <img
              src="https://mitienda.moda/img/productos-de-entrega-inmediata.9ad72bec.jpg"
              class="img-fluid"
              alt="..."
            />
            <button type="button" class="banner-1 btn btn-dark">VER MÁS</button>
          </div>
        </div>
        <div class="row mb-5 d-flex justify-content-center">
          <div class="col-9">
            <SlideItem :showArrow="true" :data="slides" />
          </div>
        </div>
        <template v-for="(item, index) in categoriesSections" :key="index">
          <div class="row mb-2 d-flex justify-content-center">
            <div class="col-9">
              <img
                :src="`https://v3.tissini.app/` + item.image"
                class="img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div class="row mb-2 d-flex justify-content-center">
            <div
              class="col-6 product-sections"
              v-for="(product, key) in 4"
              :key="key"
            >
              <img
                :src="
                  `https://v3.tissini.app/` +
                  item.products[product - 1].image.url
                "
                class="img-fluid product-sections-img"
                alt="..."
              />
              <div class="px-2">
                <p class="truncate mb-0">
                  <strong>{{ item.products[product - 1].name }}</strong>
                </p>
                <p class="text-uppercase grey--text mb-0">
                  <strong>{{
                    item.products[product - 1].categories.category.toUpperCase()
                  }}</strong>
                </p>
                <p class="primary--text">
                  <strong>{{ `$` + item.products[product - 1].price }}</strong>
                </p>
              </div>
            </div>
          </div>
        </template>
        <div class="row mb-2 d-flex justify-content-center">
          <div class="col-9">
            <img
              src="https://v3.tissini.app/img/categories/multivendor/product-lines.png"
              class="img-fluid"
              alt="..."
            />
          </div>
        </div>
        <div
          v-for="(item, index) in categories"
          :key="index"
          class="row mb-2 d-flex justify-content-center"
        >
          <div class="col-9 text-center">
            <img
              :src="`https://v3.tissini.app/` + item.image"
              class="img-fluid"
              alt="..."
            />
            <!-- <button type="button" class="banner-2 btn btn-primary">
              VER MÁS
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Axios } from "/src/objects/Axios.js";
import SlideItem from "/src/components/layout/SlideItem";

export default {
  name: "HomeComponent",
  components: {
    [SlideItem.name]: SlideItem,
  },
  data() {
    return {
      id: this.$store.getters["customer"].id,
      categoriesCustomerLists: [],
      categories: [],
      categoriesSections: [],
      slides: [],
      linesImages: {
        591: "img/categories/multivendor/calzado.jpg",
        1: "img/categories/multivendor/textiles2.jpg",
        4: "img/categories/multivendor/hogar.jpg",
        5: "img/categories/multivendor/textiles-jeans.jpg",
        6: "img/categories/multivendor/textiles-fajas.jpg",
        7: "img/categories/multivendor/textiles-body-control.jpg",
        8: "img/categories/multivendor/textiles-ropa-interior.jpg",
        9: "img/categories/multivendor/textiles-leggings.jpg",
        10: "img/categories/multivendor/textiles-sport.jpg",
        157: "img/categories/multivendor/textiles-ofertas-especiales.jpg",
        309: "img/categories/multivendor/textiles-blusas.jpg",
        429: "img/categories/multivendor/textiles-tapabocas.jpg",
        442: "img/categories/multivendor/textiles-zapatos.jpg",
        529: "img/categories/multivendor/textiles-pantalones.jpg",
        589: "img/categories/multivendor/textiles-leggings.jpg",
        620: "",
        17: "img/categories/multivendor/joyas-oro-plata.jpg",
        18: "img/categories/multivendor/joyas-plata-ley-925.jpg",
        19: "img/categories/multivendor/joyas-bano-rodio.jpg",
      },
    };
  },
  created() {
    Promise.all([
      Axios.getMasters("stock/multivendor/" + this.id),
      Axios.getMasters("categories"),
      Axios.getMasters("categories/sections"),
    ])
      .then((response) => {
        this.categoriesCustomerLists = response[0].data;
        this.categories = response[1].data.filter((item) => {
          item.image = this.linesImages[item.id];
          return item;
        });
        this.categoriesSections = response[2].data;
      })
      .catch(() => {
        this.$swal({
          type: "error",
          html: "Ha ocurrido un error al listar las categorías.",
          confirmButtonClass: "btn btn-danger btn-fill",
          buttonsStyling: false,
        });
      });
  },
  mounted() {
    this.slides = [
      {
        slide: true,
        image: "img/categories/multivendor/jeans-prominent.jpg",
      },
      {
        slide: false,
        image: "img/categories/multivendor/fajas-prominent.jpg",
      },
      {
        slide: false,
        image: "img/categories/multivendor/blusas-prominent.jpg",
      },
      {
        slide: false,
        image: "img/categories/multivendor/zapatos-prominent.jpg",
      },
      {
        slide: false,
        image: "img/categories/multivendor/ropa-interior-prominent.jpg",
      },
      {
        slide: false,
        image: "img/categories/multivendor/seamless-prominent.jpg",
      },
      {
        slide: false,
        image: "img/categories/multivendor/concord-ozzy-prominent.jpg",
      },
      {
        slide: false,
        image: "img/categories/multivendor/tapabocas-prominent.jpg",
      },
    ];
  },
};
</script>
<style scoped>
button.banner-1 {
  font-family: Montserrat, sans-serif;
  font-weight: 700 !important;
  left: 63% !important;
  margin-left: -50px;
  position: absolute;
  bottom: 62.6% !important;
  border-radius: 28px;
  font-size: 14px;
  height: 32px;
  padding: 0 8px;
}

button.banner-2 {
  font-family: Montserrat, sans-serif;
  font-weight: 700 !important;
  border-radius: 28px;
  font-size: 14px;
  height: 32px;
  padding: 0 8px;
  background-color: #f06292 !important;
  border-color: #f06292 !important;
  color: white;
  position: absolute;
  left: 59%;
  margin-top: 18%;
}

.product-sections {
  margin-bottom: -10px;
}

.product-sections:nth-child(2n-1) {
  text-align: right;
}

.product-sections:nth-child(2n) {
  text-align: left;
}

.product-sections-img {
  width: 150px;
  height: 190px;
}

p {
  font-family: Montserrat, sans-serif;
}

.grey--text {
  color: #9e9e9e !important;
  caret-color: #9e9e9e !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}
</style>
