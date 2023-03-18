<script setup>
import { ref, defineProps, toRefs } from "vue";
import Pagination from "./Pagination.vue";
import { usePaginate } from "../composables/usePaginate";
import logo from "../assets/logo.png"
import moment from "moment";

const props = defineProps({
  repos: Array,
  toggle: Function,
});

const { repos } = toRefs(props);

const currentPage = ref(1);

const { paginatedData, totalPages } = usePaginate(repos, currentPage);

const previousPage = () => {
  currentPage.value--;
};

const nextPage = () => {
  currentPage.value++;
};
</script>

<template>
  <section class="main">
    <div class="main--grid">
      <div class="main--grid__item" v-for="item in paginatedData" :key="item.id">
        <div class="grid--item__title">
          <img :src="logo" style="height: 30px;" />
          <h2 class="">
            {{ item.name }}
          </h2>
        </div>
          <div class="grid--item__details">
            <p>Language : {{ item.language ?? "No Languages" }}</p>
            <p>Clone Url : {{ item.clone_url }}</p>
            <p>Created At : {{ moment(item.created_at).format("DD-MM-YYYY") }}</p>

            <a class="" @click="toggle(item)">View More</a>
          </div>
      </div>
    </div>
    <Pagination :previous-page="previousPage" :currentPage="currentPage" :nextPage="nextPage" :pageSize="totalPages" />
  </section>
</template>
