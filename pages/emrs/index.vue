<template>
  <section class="container">
    <h1>Submit {{this.option}}</h1>
    <div v-show="showFill">
      <label for="template">Note Template</label>
      <input class='radio' type="radio" id="template" value="Note Template" v-model="option">
      <label for="order">Order Instructions</label>
      <input class='radio' type="radio" id="order" value="Order Instructions" v-model="option">
    </div>
    <div v-show="showFill" v-if="this.option == 'Order Instructions'">
      <form v-on:submit.prevent="onFill">
        <label id="title"  autocomplete="off">Title:</label>
        <input id="long" name="title" v-model="title" type="text" />
        <label>Instructions:</label>
        <textarea id="instructions" v-model="instructions"></textarea>
        <input type='submit' value='next'/>
      </form>
    </div>
    <div v-show="showFill" v-else>
      <form v-on:submit.prevent="onFill">
        <label id="title" autocomplete="off">Title:</label>
        <input id="long" name="title" v-model="title" type="text" />
        <label>Template:</label>
        <textarea id="template" v-model="template"></textarea>
        <input type='submit' value='next'/>
      </form>
    </div>

    <div v-show="showAuthor">
      <form v-on:submit.prevent="onAuthor">
        <input v-on:click.prevent="showFillForm" type="submit" value="back" /> <br />
        <label>Author (Your name):</label>
        <input name="author" v-model="author" type="text" />
        <label>Affiliated Institution:</label>
        <input name="institution" v-model="institution" type="text" />
        <label>Degree: (MD, DO, BS)</label>
        <input name="degree" v-model="degree" type="text" />
        <input type="submit" value="next" />
      </form>
    </div>
    <div v-show="showKeywords">
      <form v-on:submit.prevent="onSubmit">
        <input v-on:click.prevent="showAuthorForm" type="submit" value="back" /> <br />
        <label>Suggest keywords for this EMR:</label>
        <textarea v-model="proxies" id="proxies" ></textarea>
        <input type="submit" />
      </form>
    </div>

  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  head () {
    return {
      title: 'EMR Worx: Submit'
    }
  },
  data () {
    return {
      title: '',
      instructions: '1. \n2. \n3. ',
      template: '',
      option: 'Order Instructions',
      showAuthor: false,
      showFill: true,
      showKeywords: false,
      author: '',
      institution: '',
      degree: '',
      proxies: ''
    }
  },
  methods: {
    onFill: function () {
      this.showAuthorForm()
    },
    onAuthor: function () {
      this.showKeywordsForm()
    },
    onSubmit: function () {
      this.createCurate()
    },
    createCurate: function () {
      axios.post('/api/curates/emr', {
        title: this.title,
        instructions: this.instructions,
        template: this.template,
        author: this.author,
        institution: this.institution,
        degree: this.degree,
        proxies: this.proxies,
        option: this.option
      }).then((res) => {
        console.log(res.data)
        alert('EMR created! Refresh to make another.')
      }).catch((e) => {
        alert(e.response.statusText)
      })
    },
    showAuthorForm: function () {
      this.showAuthor = true
      this.showFill = false
      this.showKeywords = false
    },
    showFillForm: function () {
      this.showFill = true
      this.showAuthor = false
      this.showKeywords = false
    },
    showKeywordsForm: function () {
      this.showKeywords = true
      this.showAuthor = false
      this.showFill = false
    }
  }
}
</script>

<style scoped>

input[type=text]{
  width: 200px;
  margin-bottom: 10px;
}
#long {
  width: 400px;
}
#proxies {
  width: 500px;
  height: 200px;
}
h1 {
  margin-bottom: 10px;
}
.radio {
  margin-right: 10px;
  margin-bottom: 30px;
}
textarea {
  width: 400px;
  height: 150px;
  margin-bottom: 10px;
}
.title
{
  margin: 15px 0;
}
.search-bar {
  width: 30%;
  font-size: 20px;
}
form {
  display: inline-grid;
}
</style>
