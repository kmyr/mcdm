<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Weight</th>
          <th scope="col">Type</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cr, i) in criterions" :key="i">
          <th scope="row">{{ cr.name }}</th>
          <td>{{ cr.weight }}</td>
          <td>{{ cr.type }}</td>
          <td>
            <button
              @click="deleteCr(i)"
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
              @click="editCrModal(i)"
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
    <button
      @click="newCrModal()"
      id="actionBtn"
      class="btn btn-outline-dark"
      ref="btnToggle"
      style="margin:5px"
    >
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
      to="/"
      class="btn btn-outline-warning"
      style="margin-left: 30px; font-size:20px;padding-top:0px"
      exact
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
    </router-link>
    <div>
      <b-modal id="editCrModal" title="Edit Criterion" hide-footer>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
          </div>
          <input type="text" class="form-control" v-model="editingCr.name" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Weight</span>
          </div>
          <input type="text" class="form-control" v-model="editingCr.weight" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Type</span>
          </div>
          <input type="text" class="form-control" v-model="editingCr.type" />
        </div>

        <hr class="my-4" />

        <div class="d-flex flex-row-reverse bd-highlight mb-2" id="btnGroup">
          <button type="button" class="btn btn-primary" @click="updateCr(currentCr)">Update</button>
          <button type="button" class="btn btn-outline-dark" @click="editCrModal()">Cancel</button>
        </div>
      </b-modal>
    </div>
    <div>
      <b-modal id="newCrModal" title="Add Item" hide-footer>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
          </div>
          <input type="text" class="form-control" v-model="prepareCr.name" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Weight</span>
          </div>
          <input type="number" class="form-control" v-model="prepareCr.weight" />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Type</span>
          </div>
          <input type="text" class="form-control" v-model="prepareCr.type" />
        </div>

        <hr class="my-4" />

        <div class="d-flex flex-row-reverse bd-highlight mb-2" id="btnGroup">
          <button type="button" class="btn btn-primary" @click="addCr()">Add</button>
          <button type="button" class="btn btn-outline-dark" @click="newCrModal()">Cancel</button>
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
      prepareCr: {
        name: "",
        weight: "",
        type: ""
      },
      editingCr: {
        name: "",
        weight: "",
        type: ""
      },
      currentCr: null
    };
  },
  components: {},
  created() {
    this.getCr("criterions", this.criterions);
  },
  methods: {
    updateCr(i) {
      this.criterions[0].name;
      if (
        this.editingCr.name !== "" &&
        this.editingCr.weight !== "" &&
        this.editingCr.type !== ""
      ) {
        this.updateData(
          this.criterions[i].name,
          "criterions",
          this.editingCr,
          "name"
        );
        this.editCrModal();
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
    editCrModal(i) {
      this.$root.$emit("bv::toggle::modal", "editCrModal", "#btnToggle");
      if (i !== undefined) {
        this.editingCr.name = this.criterions[i].name;
        this.editingCr.weight = this.criterions[i].weight;
        this.editingCr.type = this.criterions[i].type;
        this.currentCr = i;
      }
    },
    deleteCr(i) {
      this.postData("refresh", {});
      this.deleteData("criterions", this.criterions[i].name, "name");
    },
    newCrModal() {
      this.$root.$emit("bv::toggle::modal", "newCrModal", "#btnToggle");
    },
    addCr() {
      if (
        this.prepareCr.name !== "" &&
        this.prepareCr.weight !== "" &&
        this.prepareCr.type !== ""
      ) {
        this.postData("criterions", this.prepareCr);
        this.prepareCr.name = "";
        this.prepareCr.weight = "";
        this.prepareCr.type = "";
        this.newCrModal();
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
    }
  }
};
</script>

<style>
@import url("../assets/table.css");
</style>
