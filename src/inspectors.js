import axios from 'axios'

export default {
    data: () => ({
        index: []
    }),
    computed: {
        mediaPath() {
            return '/library/images/dsd-inspectors'
        }
    },
    methods: {
        async fetchInspectors() {
            let { data } = await axios.get(`${this.mediaPath}/index`)
            this.index = data
        },
        find(id) {
            return this.index.find(i => i.id == id)
        }
    },
    created() {
        this.fetchInspectors()
    }
}