<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <template v-for="(cr, i) in criterions">
            <th scope="col" :key="i">{{ cr.name }}</th>
          </template>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
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
        <router-link
          tag="button"
          to="/setting"
          class="btn btn-outline-warning"
          style="margin-left: 30px; font-size:20px;padding-top:0px"
        >
          <svg
            class="bi bi-gear-wide-connected"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 0 0-9.995 4.998 4.998 0 0 0 0 9.996z"
            />
            <path
              fill-rule="evenodd"
              d="M7.375 8L4.602 4.302l.8-.6L8.25 7.5h4.748v1H8.25L5.4 12.298l-.8-.6L7.376 8z"
            />
          </svg>
        </router-link>

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
            <span class="input-group-text">{{ criterions[0].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="prepareItem.c1" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[1].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="prepareItem.c2" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[2].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="prepareItem.c3" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[3].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="prepareItem.c4" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[4].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="prepareItem.c5" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[5].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="prepareItem.c6" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[6].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="prepareItem.c7" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[7].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="prepareItem.c8" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[8].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="prepareItem.c9" />
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
            <span class="input-group-text">{{ criterions[0].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="editingItem.c1" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[1].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="editingItem.c2" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[2].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="editingItem.c3" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[3].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="editingItem.c4" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[4].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="editingItem.c5" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[5].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="editingItem.c6" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[6].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="editingItem.c7" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[7].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="editingItem.c8" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ criterions[8].name }}</span>
          </div>
          <input type="number" class="form-control" v-model="editingItem.c9" />
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

export default {
  mixins: [getData, postData, deleteData, updateData],
  data() {
    return {
      prepareItem: {
        title: "",
        c1: "",
        c2: "",
        c3: "",
        c4: "",
        c5: "",
        c6: "",
        c7: "",
        c8: "",
        c9: ""
      },
      editingItem: {
        title: "",
        c1: "",
        c2: "",
        c3: "",
        c4: "",
        c5: "",
        c6: "",
        c7: "",
        c8: "",
        c9: ""
      },
      tableData: [],
      currentItem: null,
      resultItems: []
    };
  },
  components: {},
  created() {
    this.getData("items", this.items);
    this.getCr("criterions", this.criterions);
  },
  methods: {
    updateItem(i) {
      if (
        this.editingItem.title !== "" &&
        this.editingItem.c1 !== "" &&
        this.editingItem.c2 !== "" &&
        this.editingItem.c3 !== "" &&
        this.editingItem.c4 !== "" &&
        this.editingItem.c5 !== "" &&
        this.editingItem.c6 !== "" &&
        this.editingItem.c7 !== "" &&
        this.editingItem.c8 !== "" &&
        this.editingItem.c9 !== ""
      ) {
        this.updateData(
          this.items[i].title,
          "items",
          this.editingItem,
          "title"
        );
        this.editItemModal();
        $("input").removeClass("is-invalid");
      } else {
        $("input")
          .filter(function() {
            return this.value == "";
          })
          .addClass("is-invalid");
        $("input")
          .filter(function() {
            return this.value !== "";
          })
          .removeClass("is-invalid");
      }
    },
    addItem() {
      if (
        this.prepareItem.title !== "" &&
        this.prepareItem.c1 !== "" &&
        this.prepareItem.c2 !== "" &&
        this.prepareItem.c3 !== "" &&
        this.prepareItem.c4 !== "" &&
        this.prepareItem.c5 !== "" &&
        this.prepareItem.c6 !== "" &&
        this.prepareItem.c7 !== "" &&
        this.prepareItem.c8 !== "" &&
        this.prepareItem.c9 !== ""
      ) {
        this.postData("items", this.prepareItem);
        this.prepareItem.title = "";
        this.prepareItem.c1 = "";
        this.prepareItem.c2 = "";
        this.prepareItem.c3 = "";
        this.prepareItem.c4 = "";
        this.prepareItem.c5 = "";
        this.prepareItem.c6 = "";
        this.prepareItem.c7 = "";
        this.prepareItem.c8 = "";
        this.prepareItem.c9 = "";
        this.newItemModal();
        $("input").removeClass("is-invalid");
      } else {
        $("input")
          .filter(function() {
            return this.value == "";
          })
          .addClass("is-invalid");
        $("input")
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
        this.editingItem.c1 = this.items[i].c1;
        this.editingItem.c2 = this.items[i].c2;
        this.editingItem.c3 = this.items[i].c3;
        this.editingItem.c4 = this.items[i].c4;
        this.editingItem.c5 = this.items[i].c5;
        this.editingItem.c6 = this.items[i].c6;
        this.editingItem.c7 = this.items[i].c7;
        this.editingItem.c8 = this.items[i].c8;
        this.editingItem.c9 = this.items[i].c9;
        this.currentItem = i;
      }
    },
    deleteItem(i) {
      this.postData("refresh", {});
      this.deleteData("items", this.items[i].title, "title");
    },
    convertItems() {
      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        const resultData = [
          item.c1,
          item.c2,
          item.c3,
          item.c4,
          item.c5,
          item.c6,
          item.c7,
          item.c8,
          item.c9
        ];
        this.tableData.push(resultData);
      }
      const cr = this.criterions;
      const linearAlgebra = require("linear-algebra")();
      const Matrix = linearAlgebra.Matrix;

      const topsis = require("topsis");

      let matrix = new Matrix(this.tableData);
      // m argument is the alternative matrix. Each row is an alternative and each column is a criterion.

      let weights = [
        cr[0].weight,
        cr[1].weight,
        cr[2].weight,
        cr[3].weight,
        cr[4].weight,
        cr[5].weight,
        cr[6].weight,
        cr[7].weight,
        cr[8].weight
      ]; // This argument indicates the weights of each criteria.
      let type = [
        cr[0].type,
        cr[1].type,
        cr[2].type,
        cr[3].type,
        cr[4].type,
        cr[5].type,
        cr[6].type,
        cr[7].type,
        cr[8].type
      ]; // This argument indicates if a criterion is beneficial or not.

      const returnItem = topsis.getBest(matrix, weights, type);
      // Get information of best item
      console.log(returnItem);
      for (let i = 0; i < this.items.length; i++) {
        const target = this.items[i];
        if (
          target.c1 == returnItem[1] &&
          target.c2 == returnItem[0] &&
          target.c3 == returnItem[2] &&
          target.c4 == returnItem[3] &&
          target.c5 == returnItem[4] &&
          target.c6 == returnItem[5] &&
          target.c7 == returnItem[6] &&
          target.c8 == returnItem[7] &&
          target.c9 == returnItem[8]
        ) {
          this.resultItems = [
            {
              title: target.title,
              c1: target.c1,
              c2: target.c2,
              c3: target.c3,
              c4: target.c4,
              c5: target.c5,
              c6: target.c6,
              c7: target.c7,
              c8: target.c8,
              c9: target.c9
            }
          ];
          console.log(target.title);
          this.$parent.$data.result = this.resultItems;
          this.$router.push("/result");
        }
      }
    }
  }
};
</script>

<style>
@import url("../assets/table.css");
</style>
