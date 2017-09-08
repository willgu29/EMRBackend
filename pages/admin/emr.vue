<template>
  <section class="container">
    <h1 class="title">
      Create EMR
    </h1>
    <form v-on:submit.prevent="onSubmit">
      Name: <input type="text" id="name" v-model="name" autocomplete="off" />
      Short: <input type="text"id="short" v-model="description.short"  autocomplete="off" />
      Category (inpatient, etc.): <input type="text" id="category" v-model="description.category"  autocomplete="off"  />
      Domain (psychiatry ward, etc.): <input type="text" id="domain" v-model="description.domain"  autocomplete="off" />
      Author Name: <input type="text" id="authorName" v-model="author.name"  autocomplete="off" />
      Author Institution: <input type="text" id="authorInstitution" v-model="author.institution"  autocomplete="off" />
      Author Degree: <input type="text" id="authorDegree" v-model="author.degree"  autocomplete="off" />
      Program Name (CPRS, etc.): <input type="text" id="programName" v-model="program.name" autocomplete="off"  />
      Program Version: <input type='text' id="programVersion" v-model="program.version"  autocomplete="off" />
      Type (Note Template, Order): <input type='text' id='type' v-model="type" autocomplete="off" />
      File Type (txt, pdf): <input type='text' id="fileType" v-model="fileType" autocomplete="off"  />
      File Path: <input type='text' id='filePath' v-model="filePath" autocomplete="off" />
      <br />
      <input type='submit' />
    </form>

  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  validate ({ params, query }) {
    console.log(query)
    if (query.user === 'drew' && query.pw === 'toocool2') {
      return true
    } else {
      return false
    }
  },
  data () {
    return {
      name: '',
      description: {
        short: '',
        category: '',
        domain: ''
      },
      author: {
        name: '',
        institution: '',
        degree: ''
      },
      program: {
        name: '',
        version: ''
      },
      type: '',
      fileType: '',
      filePath: ''
    }
  },
  head () {
    return {
      title: 'Admin: EMR Worx'
    }
  },
  methods: {
    onSubmit: function () {
      axios.post('/api/emrs/', {
        name: this.name,
        description: {
          short: this.description.short,
          category: this.description.category,
          domain: this.description.domain
        },
        author: {
          name: this.author.name,
          institution: this.author.institution,
          degree: this.author.degree
        },
        program: {
          name: this.program.name,
          version: this.program.version
        },
        type: this.type,
        fileType: this.fileType,
        filePath: this.filePath
      })
        .then((res) => {
          prompt('Copy and paste id in /admin/proxy', res.data._id)
        })
        .catch((e) => {
          alert(e.response.statusText)
        })
    }
  }
}
</script>

<style scoped>
form {
  display: inline-grid;
}
.title
{
  margin: 15px 0;
}
#about {
  margin-left: 100px;
  margin-right: 100px;
  text-align: left;
}
</style>
