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
        $dateFormat (date) {
            return moment(date).format('YYYY-MM-DD')
        },
        $timeFormat (date) {
            return moment(date).format('HH:mm')
        },
        $time (ms) {
            let h = parseInt(ms / 3600)
            let m = parseInt((ms - h * 3600) / 60)
            let s = ms - h * 3600 - m * 60
            h = h < 10 ? '0' + h : h
            m = m < 10 ? '0' + m : m
            s = s < 10 ? '0' + s : s
            return [h, m, s].join(':')
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
