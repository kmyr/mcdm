<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">{{criterion.C1.name}}</th>
          <th scope="col">{{criterion.C2.name}}</th>
          <th scope="col">{{criterion.C3.name}}</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) in items" :key="i">
          <th scope="row">{{item.title}}</th>
          <td>{{item.time}}</td>
          <td>{{item.rate}}</td>
          <td>{{item.price}}</td>
          <td>
            <button
              @click="deleteItem(i)"
              id="actionBtn"
              class="btn btn-outline-danger"
              ref="btnToggle"
            >
              <span class="glyphicon">
                <svg
                  class="bi bi-trash-fill"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                  />
                </svg>
              </span>
            </button>
            <button
              @click="editItemModal(i)"
              id="actionBtn"
              class="btn btn-outline-primary"
              ref="btnToggle"
            >
              <span class="glyphicon">
                <svg
                  class="bi bi-pencil-square"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <div id="tableBtn">
        <button @click="newItemModal()" id="actionBtn" class="btn btn-outline-dark" ref="btnToggle">
          <span class="glyphicon">
            <svg
              class="bi bi-file-plus"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8h-1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5V1z"
              />
              <path
                fill-rule="evenodd"
                d="M13.5 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V1.5a.5.5 0 0 1 .5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M13 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"
              />
            </svg>
          </span>
        </button>

        <span class="float-right">
          <button type="button" class="btn btn-success" @click="convertItems()">Convert</button>
        </span>
      </div>

      <b-modal id="newItemModal" title="Add Item" hide-footer>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
          </div>
          <input type="text" class="form-control" v-model="prepareItem.title" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterion.C1.name }}</span>
          </div>
          <input type="number" class="form-control" v-model="prepareItem.time" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterion.C2.name }}</span>
          </div>
          <input type="number" class="form-control" v-model="prepareItem.rate" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterion.C3.name }}</span>
          </div>
          <input type="number" class="form-control" v-model="prepareItem.price" />
        </div>
        <hr class="my-4" />

        <div class="d-flex flex-row-reverse bd-highlight mb-2" id="btnGroup">
          <button type="button" class="btn btn-primary" @click="addItem()">Add</button>
          <button type="button" class="btn btn-outline-dark" @click="newItemModal()">Cancel</button>
        </div>
      </b-modal>
      <b-modal id="editItemModal" title="Edit Item" hide-footer>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
          </div>
          <input type="text" class="form-control" v-model="editingItem.title" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterion.C1.name }}</span>
          </div>
          <input type="number" class="form-control" v-model="editingItem.time" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterion.C2.name }}</span>
          </div>
          <input type="number" class="form-control" v-model="editingItem.rate" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterion.C3.name }}</span>
          </div>
          <input type="number" class="form-control" v-model="editingItem.price" />
        </div>
        <hr class="my-4" />

        <div class="d-flex flex-row-reverse bd-highlight mb-2" id="btnGroup">
          <button type="button" class="btn btn-primary" @click="updateItem(currentItem)">Update</button>
          <button type="button" class="btn btn-outline-dark" @click="editItemModal()">Cancel</button>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import getData from "../actions/get";
import postData from "../actions/post";
import deleteData from "../actions/delete";
import updateData from "../actions/update";
// import db from "../components/firebaseInit";

export default {
  mixins: [getData, postData, deleteData, updateData],
  data() {
    return {
      prepareItem: {
        title: "",
        rate: "",
        price: "",
        time: ""
      },
      editingItem: {
        title: "",
        rate: "",
        price: "",
        time: ""
      },
      criterion: {
        C1: {
          name: "Price",
          weight: 0.4
        },
        C2: {
          name: "Rate",
          weight: 0.4
        },
        C3: {
          name: "Time",
          weight: 0.2
        }
      },
      tableData: [],
      currentItem: null
    };
  },
  components: {},
  created() {
    this.getData("items");
  },
  methods: {
    updateItem(i) {
      this.updateData(this.items[i].title, "items");
    },
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
        this.prepareItem.title = "";
        this.prepareItem.price = "";
        this.prepareItem.rate = "";
        this.prepareItem.time = "";
        this.newItemModal();
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
    newItemModal() {
      this.$root.$emit("bv::toggle::modal", "newItemModal", "#btnToggle");
    },
    editItemModal(i) {
      this.$root.$emit("bv::toggle::modal", "editItemModal", "#btnToggle");
      if (i !== undefined) {
        this.editingItem.title = this.items[i].title;
        this.editingItem.rate = this.items[i].rate;
        this.editingItem.price = this.items[i].price;
        this.editingItem.time = this.items[i].time;
        this.currentItem = i;
      }
    },
    convertItems() {
      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        const resultData = [item.price, item.rate, item.time];
        this.tableData.push(resultData);
      }
      const cr = this.criterion;
      const linearAlgebra = require("linear-algebra")();
      const Matrix = linearAlgebra.Matrix;

      const topsis = require("topsis");

      let matrix = new Matrix(this.tableData);
      // m argument is the alternative matrix. Each row is an alternative and each column is a criterion.

      let weights = [cr.C1.weight, cr.C2.weight, cr.C3.weight]; // This argument indicates the weights of each criteria.
      let type = ["min", "min", "min"]; // This argument indicates if a criterion is beneficial or not.

      const returnItem = topsis.getBest(matrix, weights, type);
      console.log(returnItem);
      for (let i = 0; i < this.items.length; i++) {
        const target = this.items[i];
        if (
          target.price == returnItem[0] &&
          target.rate == returnItem[1] &&
          target.time == returnItem[2]
        ) {
          console.log(target.title);
        }
      }
    },
    deleteItem(i) {
      this.postData("refresh", {});
      this.deleteData("items", this.items[i].title);
    }
  }
};
</script>

<style>
@import url("../assets/table.css");
</style>
