<template>
  <div class="pagination">
    <button @click="previousPage" :disabled="currentPage == 1">Previous</button>
    <span>{{ currentPage }}</span>
    <button @click="nextPage" :disabled="currentPage == pageSize">Next</button>
  </div>
</template>

<script setup>
defineProps({
  previousPage: Function,
  nextPage: Function,
  currentPage: Number,
  pageSize: Number,
});
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 20px;
  margin-top: 30px;
}

.pagination button {
  margin: 0 10px;
  padding: .5em 1em;
  font-weight: bold;
  border-radius: 8px;
  background-color: #977f53;
  border: none;
  cursor: pointer;
}

.pagination button:hover {
  background-color: #f8ead0;
}
</style>
