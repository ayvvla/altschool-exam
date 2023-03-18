<script setup>
import close from "../assets/close.svg";

defineProps({
  repository: Object,
  toggle: Function,
});
</script>

<template>
  <section class="single--repo">
    <div class="single--repo__main">
      <div class="single--repo__header">
        <button class="btn" @click="toggle({})">
          <img :src="close" style="height: 30px;" />
        </button>
        <h3 class="repo--title">{{ repository.name }}</h3>
      </div>

      <div class="single--repo__items">
        <p><span> Branch: </span> {{ repository.default_branch }}</p>
      </div>

      <div class="single--repo__items">
        <p><span>Forks: </span>{{ repository.forks }}</p>
      </div>

      <div class="single--repo__items">
        <p><span>Language: </span> {{ repository.language ?? "Language not specified" }}</p>
      </div>

      <div class="single--repo__items">
        <span style="margin-right:4px ;">Link:</span>
        <a :href="repository.clone_url" target="blank">{{ repository.clone_url }}</a>
      </div>

    </div>
  </section>
</template>

