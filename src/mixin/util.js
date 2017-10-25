import moment from 'moment'
let initDesktop = false
export default {
    methods: {
        link (route) {
            this.$router.push(route)
        },
        $datetimeFormat (date) {
            return moment(date).format('YYYY-MM-DD HH:mm:ss')
        },
        $desktop (msg) {
            if (!initDesktop) window.PNotify.desktop.permission()
            let notify = new window.PNotify({
                title: '时间到!!!',
                text: msg,
                desktop: {
                    desktop: true
                }
            })
            return notify
        }
    }
}
