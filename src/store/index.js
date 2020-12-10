import inspectors from './inspectors.json'

export default {
  data: () => ({
    inspectors,
  }),
  methods: {
    find(id) {
      return this.inspectors.find((i) => i.id == id)
    },
  },
}
