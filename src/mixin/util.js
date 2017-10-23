import moment from 'moment'
export default {
    methods: {
        link (route) {
            this.$router.push(route)
        },
        $datetimeFormat (date) {
            return moment(date).format('YYYY-MM-DD HH:mm:ss')
        }
    }
}
