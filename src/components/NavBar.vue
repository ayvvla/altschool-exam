<script setup>
import { RouterLink } from "vue-router";
import logo from "../assets/logo.png"
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/" class="logo">
        <img :src="logo" style="height: 40px;"/>
        <span>Github</span>
      </RouterLink>

      <div class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <RouterLink to="/view-repo">Repositories</RouterLink>
      </div>
    </nav>
  </header>
</template>
