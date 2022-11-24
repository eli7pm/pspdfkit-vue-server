<template>
  <h1>Document List</h1>
  <section class='flex-container'>
    <div v-for="item in data" :key="item.id" class="flex-items">
      <router-link :to="`/documents/${item.document_id}`">{{item.document_id}}</router-link>
    </div>
  </section>
</template>

<script>
export default {

  name: "Home",
  data(){
    return{
      data: {},
    }
  },
  async beforeMount() {
    const jsonData = await this.requestList();
    const {documents} = jsonData.data
    this.$data.data = await documents
  },
  methods:{
    async requestList(){
      const data = await fetch("/getdocuments");
      return data.json()
    }
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: normal;
  align-content: normal;
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.flex-items:nth-child(2) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.flex-items:nth-child(3) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}
</style>
