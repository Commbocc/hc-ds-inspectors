<template>
  <div>
    <p>
      <img v-if="image" :src="imgSrc" class="img-fluid d-block mx-auto border border-dark" />
    </p>

    <div class="text-center">
      <h2>{{ fullName }}</h2>
      <p v-if="inspectorType" class="lead">{{ inspectorType }} Inspector</p>
      <p>
        <a :href="`tel:${phone}`" class="btn btn-sm btn-secondary mx-1">
          <i class="fa fa-phone mx-1" aria-hidden="true"></i>
          Call {{ firstName }}
        </a>
        <a :href="`mailto:${email}`" class="btn btn-sm btn-secondary mx-1">
          <i class="fa fa-envelope mx-1" aria-hidden="true"></i>
          Email {{ firstName }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inspectorId: {
      type: String,
      required: true
    }
  },
  data: () => ({
    id: null,
    fullName: null,
    firstName: null,
    lastName: null,
    image: null,
    inspectorType: null,
    email: null,
    phone: null
  }),
  methods: {
    setInspector() {
      let inspector = this.$inspectors.find(this.inspectorId)

      for (let [key, value] of Object.entries(inspector)) {
        this.$set(this, key, value)
      }
    }
  },
  computed: {
    imgSrc() {
      return this.image ? `${this.$inspectors.mediaPath}/${this.image}` : null
    }
  },
  mounted() {
    this.setInspector()
  }
}
</script>