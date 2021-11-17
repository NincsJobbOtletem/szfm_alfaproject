<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Szabó Patrik',
        title: 'Egri Korona Borház Turán 2020 0,75 l édes vörösbor',
        content: 'Az Egri borvidék Magyarország egyik történelmi borvidéke. Északkelet-Magyarországon az Egri-Bükkalja déli lankáin, Heves megye területén helyezkedik el, egyes részei Borsod-Abaúj-Zemplén megye területére nyúlnak át. A 22 160 hektár (ebből 18 302 ha I. osztályú) teljes területéből napjainkban mintegy 6000 hektár a szőlőültetvény.[1] A borvidék névadója és központja Eger, amely mellett további 19 község tartozik hozzá. A borvidéki szőlő- és borkultúra közel 1000 éves múltra tekint vissza, ami alapvetően meghatározta és meghatározza ma is az itt élő emberek életét.',
        thumbnailLink: 'https://static.groby.hu/media/9cd/359/conv/25901_se2_cb4bc_back-full.png'
      }
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
