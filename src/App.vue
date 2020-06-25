<template>
  <div>
    <router-view class="application"></router-view>
    <div class="spinner-border" role="status" id="loader">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      result: null
    };
  },
  created() {
    $(window).on("load", function() {
      setTimeout(function() {
        $(".application").show();
        $("#loader").hide();
      }, 800);
    });
  }
};
</script>

<style>
#loader {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  width: 100px;
  height: 100px;
}
</style>
