<template>
  <section class="search-container">
    <form action="/search" method="get">
      <input class="search-bar" type="search" :value="this.$route.query.text" name="text" autocomplete="off" />
      <info-button class='info-button' :filePath="'/other/searchHelp.pdf'" />

    </form>
    <div class='checkboxes'>

      <label for="cprs">CPRS</label>
      <input v-on:click="onCheck" class='checkbox' type="checkbox" id="cprs" value="CPRS" v-model="checkedPrograms">
      <label for="quest">Quest</label>
      <input v-on:click="onCheck" class='checkbox' type="checkbox" id="quest" value="Quest" v-model="checkedPrograms">
      <label for="cprs">Cerner</label>
      <input v-on:click="onCheck" class='checkbox' type="checkbox" id="cerner" value="Cerner" v-model="checkedPrograms">

    </div>


    <div class="list-wrapper" v-if="emrs.length > 0">
    <ul class="items">
      <li v-for="(emr, index) in filteredEmrs" :key="index" class="item">
        <h2>
          <div v-if="emr.fileType == 'txt'">
            <nuxt-link :to="{ name: 'emrs-id', params: { id: emr._id }}">
              {{ emr.name }}: {{emr.description.short}}
            </nuxt-link>
          </div>
          <div v-else>
            <nuxt-link target="_blank" :to="emr.filePath" >
              {{ emr.name }}: {{emr.description.short}}
            </nuxt-link>
          </div>
        </h2>
        <p><b>{{emr.program.name}}: {{emr.type}}</b></p>
        <p class='author-subtitle'>By: {{emr.author.name}} {{emr.author.degree}}, {{emr.author.institution}}</p>
      </li>
    </ul>
    </div>
    <div class='no-matches' v-else>
      <h2>Looks like <b>{{this.$route.query.text}}</b> doesn't exist yet.</h2>
      <p>Email submissions here: <b><a href="mailto:hello@emrworx.com">hello@emrworx.com</a></b></p>
    </div>

  </section>
</template>

<script>
import axios from '~/plugins/axios'
import {getJSON, setJSON} from '~/plugins/tiny-cookie'
import InfoButton from '~/components/InfoButton.vue'

export default {
  components: {
    InfoButton
  },
  layout: 'search',
  async asyncData (context) {
    var searchText = context.query.text.replace(/&/g, '%26')
    var url = ('/api/proxies?text=' + searchText)
    let { data } = await axios.get(url)
    return { emrs: data, filteredEmrs: [], checkedPrograms: [] }
  },
  head () {
    return {
      title: 'EMRS'
    }
  },
  mounted () {
    this.onLoad()
  },
  methods: {
    onLoad: function () {
      this.filterEmrs()
    },
    onCheck: function () {
      setJSON('programs', this.checkedPrograms)
      this.filterEmrs()
    },
    filterEmrs: function () {
      var programs = getJSON('programs')
      if (!programs) { programs = ['CPRS', 'Quest', 'Cerner'] }
      var newList = []
      for (var emr of this.emrs) {
        if (programs.includes(emr.program.name)) {
          newList.push(emr)
        }
      }
      this.filteredEmrs = newList
      this.checkedPrograms = programs
    }
  }
}
</script>

<style scoped>
.checkbox {
  margin-right: 10px;
}
.checkboxes {
  margin-left: 22px;
}
.author-subtitle {
  font-size: 12px;
}
.no-matches {
  margin-top: 40px;
  text-align: center;
}
.search-bar {
  width: 30%;
  font-size: 20px;
  margin-left: 20px;
}
.container {
  text-align: left;
  margin-left: 10px;
}
.title
{
  margin: 30px 0;
}
.items
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.item
{
  margin: 40px 80px;
}
a {
  font-size: 22px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  text-decoration: none;
  color: purple;
}
h2 {
  margin-bottom: 0px;
}
p {
  margin-top: 0px;
  margin-bottom: 2px;
  font-size: 16px;
}
a:hover {
  text-decoration: underline;
}
</style>
