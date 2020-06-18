<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">C1</th>
          <th scope="col">C2</th>
          <th scope="col">C3</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) in items" :key="i">
          <th scope="row">{{item.title}}</th>
          <td>{{item.time}}</td>
          <td>{{item.rate}}</td>
          <td>{{item.price}}</td>
        </tr>
      </tbody>
    </table>

    <div>
      <div class="col-md-1">
        <button @click="toggleModal" id="plusBtn" class="btn btn-outline-dark" ref="btnToggle">
          <span class="glyphicon">&#x2b;</span>
        </button>
      </div>

      <b-modal id="modal-1" title="Add Item" hide-footer>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
          </div>
          <input type="text" class="form-control" v-model="prepareItem.title" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{criterion.C1.name}}</span>
          </div>
          <input type="text" class="form-control" v-model="prepareItem.time" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{criterion.C2.name}}</span>
          </div>
          <input type="text" class="form-control" v-model="prepareItem.rate" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{criterion.C3.name}}</span>
          </div>
          <input type="text" class="form-control" v-model="prepareItem.price" />
        </div>
        <hr class="my-4" />

        <div class="d-flex flex-row-reverse bd-highlight mb-2" id="btnGroup">
          <button type="button" class="btn btn-primary" @click="addItem">Add</button>
          <button type="button" class="btn btn-outline-dark" @click="toggleModal">Cancel</button>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import getData from "../actions/get";
import postData from "../actions/post";
export default {
  data() {
    return {
      prepareItem: {
        name: "",
        rate: "",
        price: "",
        time: ""
      },
      criterion: {
        C1: {
          name: "Price",
          weight: 0.1
        },
        C2: {
          name: "Rate",
          weight: 0.1
        },
        C3: {
          name: "Time",
          weight: 0.1
        }
      },
      items: []
    };
  },
  mixins: [getData, postData],
  components: {},
  created() {
    this.getData("items");
  },
  methods: {
    addItem() {
      if (
        this.prepareItem.title !== "" &&
        this.prepareItem.price !== "" &&
        this.prepareItem.rate !== "" &&
        this.prepareItem.time !== ""
      ) {
        this.postData("items", {
          title: this.prepareItem.title,
          price: this.prepareItem.price,
          rate: this.prepareItem.rate,
          time: this.prepareItem.time
        });
        this.prepareItem.name = "";
        this.prepareItem.c1 = "";
        this.prepareItem.c2 = "";
        this.prepareItem.c3 = "";
        this.toggleModal;
        this.$root.$emit("bv::toggle::modal", "modal-1", "#btnToggle");
        $("input").removeClass("is-invalid");
      } else {
        $("input:text")
          .filter(function() {
            return this.value == "";
          })
          .addClass("is-invalid");
        $("input:text")
          .filter(function() {
            return this.value !== "";
          })
          .removeClass("is-invalid");
      }
    },
    toggleModal() {
      this.$root.$emit("bv::toggle::modal", "modal-1", "#btnToggle");
    }
  }
};
</script>

<style>
@import url("../assets/table.css");
</style>
