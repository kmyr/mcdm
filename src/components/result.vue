<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <template v-for="(cr, i) in criterions">
            <th scope="col" :key="i">{{ cr.name }}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in itemsToShow" :key="i">
          <th scope="row">{{ item.title }}</th>
          <td>{{ item.c1 }}</td>
          <td>{{ item.c2 }}</td>
          <td>{{ item.c3 }}</td>
          <td>{{ item.c4 }}</td>
          <td>{{ item.c5 }}</td>
          <td>{{ item.c6 }}</td>
          <td>{{ item.c7 }}</td>
          <td>{{ item.c8 }}</td>
          <td>{{ item.c9 }}</td>
        </tr>
      </tbody>
    </table>

    <button
      class="btn btn-outline-warning"
      style="margin-left: 30px; font-size:20px;padding-top:0px"
      @click="startOver()"
    >
      <svg
        class="bi bi-arrow-left-circle"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fill-rule="evenodd"
          d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
        />
        <path
          fill-rule="evenodd"
          d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import getData from "../actions/get";

export default {
  mixins: [getData],
  data() {
    return {
      itemsToShow: null
    };
  },
  components: {},
  created() {
    this.getCr("criterions", this.criterions);
    this.getData("items", this.items);
    this.itemsToShow = this.$parent.$data.result;
  },
  methods: {
    startOver() {
      this.$parent.$data.result = null;
      this.$router.push("/");
    }
  }
};
</script>

<style>
@import url("../assets/table.css");
</style>
