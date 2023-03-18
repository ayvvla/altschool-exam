<script setup>
import Spinner from "../components/Spinner.vue";
import AllRepos from "../components/AllRepos.vue";
import OneRepo from "./OneRepo.vue";
import { ref, onMounted, onBeforeUpdate, onBeforeMount } from "vue";
import { UseFetchGithub } from "../composables/useFetchGithub";

const name = ref("ayvvla");
const { fetchData } = UseFetchGithub();

const loading = ref(true);
let repos = ref([]);

const isSingleRepo = ref(false);
const repository = ref({});

const switchRepoView = (item) => {
  isSingleRepo.value = !isSingleRepo.value;
  repository.value = item;
};

const callGithubApi = async () => {
  try {
    const result = await fetchData(name.value);
    repos.value = result;
    loading.value = false;
  } catch (error) {
    console.log(error.message);
  }
};

onBeforeMount(() => {});

onMounted(() => {
  if (loading.value) {
    callGithubApi();
  }
});

</script>

<template>
  <section class="">
    <h1 class="main--title">Github Repos</h1>
    <Spinner v-if="loading" />
    <AllRepos v-else-if="!loading && !isSingleRepo" :repos="repos" :toggle="switchRepoView" />
    <OneRepo v-else-if="isSingleRepo" :toggle="switchRepoView" :repository="repository" />
  </section>
</template>
