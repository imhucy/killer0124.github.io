import TipVoice from '../../resources/audio/default.mp3'
import moment from 'moment'

let voiceList = [
    'default', 'ding', 'general',
    '15点', '16点', '17点', '18点', '18点半',
    '19点', '20点', '21点', '22点', '23点',
    '23点半'
]
let voices = {}
voiceList.forEach(item => {
    let v = require('../../resources/audio/' + item + '.mp3')
    let audio = document.createElement('audio')
    audio.src = v
    audio.load()
    voices[item] = audio
})

let today = moment().format('YYYY/MM/DD')
let voice = document.createElement('audio')
voice.src = TipVoice
voice.load()
export default {
    voices: voices,
    time_report: [
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '14:00:00'),
            msg: '下午2点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices.default
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '15:00:00'),
            msg: '下午3点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices['15点']
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '16:00:00'),
            msg: '下午4点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices['16点']
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '17:00:00'),
            msg: '下午5点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices['17点']
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '18:00:00'),
            msg: '下午6点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices['18点']
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '19:00:00'),
            msg: '下午7点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices['19点']
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '20:00:00'),
            msg: '晚上8点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices['20点']
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '21:00:00'),
            msg: '晚上9点, 还不滚去运动!',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices['21点']
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '22:00:00'),
            msg: '晚上10点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices['22点']
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '23:00:00'),
            msg: '晚上11点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices['23点']
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '23:30:00'),
            msg: '晚上11点半',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices['23点半']
        }
    ],
    default: [
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '14:00:00'),
            msg: '上午11点,该点外卖了',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices.default
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '15:30:00'),
            msg: '下午3点半',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices.default
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '18:30:00'),
            msg: '下班啦!!!',
            started: false,
            stop: null,
            count_down: 0,
            voice: voices.default
        }
    ]
}
