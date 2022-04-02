<template>
  <div class="row d-flex justify-content-center">
    <div class="col-9">
      <div
        id="carousel"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            v-for="(item, index) in data"
            @click="changeSlide(index)"
            :key="index"
            type="button"
            data-bs-target="#carousel"
            :data-bs-slide-to="index"
            :class="`mt-3 ` + (item.slide ? `active` : ``)"
            :aria-current="item.slide"
            :aria-label="`Slide ` + index"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            v-for="(item, index) in data"
            :key="index"
            :class="`carousel-item ` + (item.slide ? `active` : ``)"
            :data-bs-interval="10000"
          >
            <img
              :src="`https://v3.tissini.app/` + item.image"
              :class="`d-block mx-auto rounded`"
              alt="..."
              :style="`width: 88%;`"
            />
          </div>
        </div>
        <button
          v-if="showArrow"
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
          @click="left"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">{{ textPreviousButton }}</span>
        </button>
        <button
          v-if="showArrow"
          class="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
          @click="rigth"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">{{ Next }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SlideItem",
  data() {
    return {
      first: 0,
      last: 0,
      position: 0,
    };
  },
  props: {
    showArrow: {
      type: Boolean,
      default: false,
    },
    textPreviousButton: {
      type: String,
      default: "Previous",
    },
    textNextButton: {
      type: String,
      default: "Next",
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    left() {
      if (this.last == 0 && this.data.length > 0) {
        this.last = this.data.length;
      }

      if (this.position > 0) {
        --this.position;
        this.changeSlide(this.position);
      }
    },

    rigth() {
      if (this.last == 0 && this.data.length > 0) {
        this.last = this.data.length;
      }

      if (this.position < this.last) {
        this.position++;
        this.changeSlide(this.position);
      }
    },

    changeSlide(index) {
      this.data.map((item, key) => {
        if (key == index) {
          this.position = index;
          item.slide = true;
        } else {
          item.slide = false;
        }
      });
    },
  },
};
</script>
<style scoped>
.carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #f06292;
  margin: 0 4px;
  cursor: pointer;
  width: 8px;
  height: 7px;
  border-radius: 100%;
}

.carousel-indicators {
  margin-bottom: -2rem;
}

.rounded {
  border-radius: 1.25rem !important;
}
</style>
