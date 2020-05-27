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
          <th scope="row">{{item.name}}</th>
          <td>{{item.c1}}</td>
          <td>{{item.c2}}</td>
          <td>{{item.c3}}</td>
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
          <input type="text" class="form-control" v-model="prepareItem.name" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{criterion.C1.name}}</span>
          </div>
          <input type="text" class="form-control" v-model="prepareItem.c1" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{criterion.C2.name}}</span>
          </div>
          <input type="text" class="form-control" v-model="prepareItem.c2" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{criterion.C3.name}}</span>
          </div>
          <input type="text" class="form-control" v-model="prepareItem.c3" />
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
export default {
  data() {
    return {
      prepareItem: {
        name: "",
        c1: "",
        c2: "",
        c3: ""
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
  components: {},
  methods: {
    addItem() {
      if (
        this.prepareItem.name !== "" &&
        this.prepareItem.c1 !== "" &&
        this.prepareItem.c2 !== "" &&
        this.prepareItem.c3 !== ""
      ) {
        this.items.push({
          name: this.prepareItem.name,
          c1: this.prepareItem.c1,
          c2: this.prepareItem.c2,
          c3: this.prepareItem.c3
        });
        this.prepareItem.name = "";
        this.prepareItem.c1 = "";
        this.prepareItem.c2 = "";
        this.prepareItem.c3 = "";
        this.toggleModal;
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
