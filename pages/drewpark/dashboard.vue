<template>
  <section class="container">
      <h1>Welcome to your dashboard Drew</h1>
      <p>All important information for your day will be listed here.</p>
      <hr>
      <h2>Pre-rounding Information</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hours Slept</th>
            <th>Last Bowel Movement</th>
            <th>% of Meals Eaten</th>
            <th>PRN Medications</th>
            <th>Labs/Fishbone</th>
          </tr>
          <tr>
            <td>Silly Frog</td>
            <td>9</td>
            <td>09-28-2017</td>
            <td>100%</td>
            <td>None</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Manson Worthfort</td>
            <td>9</td>
            <td>09-28-2017</td>
            <td>100%</td>
            <td>None</td>
            <td><img src="https://storage.googleapis.com/emrworx.com/experimental/slice1.png"/></td>

          </tr>
          <tr>
            <td>Slimy Popsicle</td>
            <td>6.25</td>
            <td>09-27-2017</td>
            <td>100%</td>
            <td>None</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Lila Lickington</td>
            <td>9</td>
            <td>09-28-2017</td>
            <td>100%</td>
            <td>None</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Final Lollipop</td>
            <td>6</td>
            <td>09-27-2017</td>
            <td>100%</td>
            <td>None</td>
            <td><img src="https://storage.googleapis.com/emrworx.com/experimental/slice2.png"/></td>
          </tr>
          <tr>
            <td>Hatty Monkey</td>
            <td>7.25</td>
            <td>09-28-2017</td>
            <td>100%</td>
            <td>alum hydrox/mag hydrox/simit 15 mL x 2, Atarax 25 mg x 1</td>
            <td><img src="https://storage.googleapis.com/emrworx.com/experimental/slice3.png"/></td>
          </tr>
          <tr>
            <td>Penguini Linguini</td>
            <td>6.5</td>
            <td>Denied Problems/No Complaints</td>
            <td>100%</td>
            <td>None</td>
            <td><img src="https://storage.googleapis.com/emrworx.com/experimental/slice4.png"/></td>
          </tr>
          <tr>
            <td>Lionel Pocketman</td>
            <td>0.5</td>
            <td>09-27-20</td>
            <td>100%</td>
            <td>Benadyrl 25 mg x 1, Atarax 10 mg x 1, Ambien 5 mg x 1</td>
            <td>None</td>
          </tr>
        </thead>
      </table>

  </section>
</template>

<script>

export default {
  layout: 'landing',
  name: 'dashboard',
  head () {
    return {
      title: 'EMR Worx: Drew Park'
    }
  },
  data () {
    return {
      showPatients: []
    }
  },
  beforeMount () {
    this.showPatients = new Array(5).fill(false)
  },
  methods: {
    toggleShowBundle: function (index) {
      var array = this.showPatients.slice()
      array[index] = !array[index]
      this.showPatients = array
    }
  }
}
</script>

<style scoped>
.container {
  text-align: left;
  margin-left: 80px;
}
.patient {
  font-size: 22px;
  margin-top: 20px;
  color: #6093e5;
  cursor: pointer;
}
table {
  border: 2px solid #6093e5;;
  border-radius: 3px;
  background-color: #fff;
  width: 80%;
}

th {
  background-color: #6093e5;;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 100px;
  padding: 10px 20px;
}

</style>
