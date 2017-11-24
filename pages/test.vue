<template>
  <section class="search-container">
    <div>
      <form class="form"  v-on:submit.prevent="onSubmit">
        <div class='input-group'>
          <label>Diagnosis:</label>
          <input v-on:focus.self="displayFocus" placeholder='Search "Hyperglycemia, unspecified (R73.9)" or "Psychosis"'  type="text" v-bind:class="{ completed: selectedType, error: retryType }" class='form-search-field ' name="type" v-on:keyup="filterNote" autocomplete="off" v-model="selectedType">
          <ul class='dropdown'>
            <li class='clickable-list-item' v-show="focused === 0" v-on:click.stop="highlightType" v-for="text in display">{{text}}</li>
          </ul>
        </div>
        <div class='input-group inline'>
          <select name="noteType" v-model="noteType">
            <option value="History and Physical">History and Physical</option>
            <option value="Consultation">Consultation Note</option>
            <option value="Initial Evaluation">Inital Evaluation Note</option>
          </select>
        </div>
        <div class='input-group inline'>
          <select name="specialty" v-model="specialty">
            <option value="Psychiatry">Psychiatry</option>
            <option value="Internal Medicine">Internal Medicine</option>
            <option value="Family Practice">Family Practice</option>
          </select>
        </div>
      </form>

    </div>
  </section>
</template>

<script>

export default {
  head () {
    return {
      title: 'EMR Worx'
    }
  },
  data () {
    return {
      noteType: 'History and Physical',
      specialty: 'Psychiatry'
    }
  },
  methods: {
    onSubmit: function (event) {

    }
  }
}
</script>

<style scoped>
.inline {
  display: inline;
}
.clickable-list-item {
  list-style: none;
  text-decoration: underline;
  padding: 0px 20px 0px 0px;
}
.clickable-list-item:hover {
  color: #0043ff;
  cursor: pointer;
}
</style>
