import TipVoice from '../../resources/audio/tip.mp3'
import moment from 'moment'

let voiceList = ['tip.mp3', 'tip.mp3', 'tip.mp3', 'tip.mp3', 'tip.mp3']
let voices = []
voiceList.forEach(item => {
    let v = require('../../resources/audio/' + item)
    let audio = document.createElement('audio')
    audio.src = v
    audio.load()
    voices.push(audio)
})

let today = moment().format('YYYY/MM/DD')
let voice = document.createElement('audio')
voice.src = TipVoice
voice.load()
export default {
    voices: voices,
    queue: [
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '14:00:00'),
            msg: '下午2点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voice
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '15:00:00'),
            msg: '下午3点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voice
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '15:30:00'),
            msg: '下午3点半',
            started: false,
            stop: null,
            count_down: 0,
            voice: voice
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '16:00:00'),
            msg: '下午4点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voice
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '17:00:00'),
            msg: '下午5点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voice
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '18:00:00'),
            msg: '下午6点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voice
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '18:30:00'),
            msg: '下班啦!!!',
            started: false,
            stop: null,
            count_down: 0,
            voice: voice
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '19:00:00'),
            msg: '下午7点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voice
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '20:00:00'),
            msg: '晚上8点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voice
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '21:00:00'),
            msg: '晚上9点, 还不滚去运动!',
            started: false,
            stop: null,
            count_down: 0,
            voice: voice
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '22:00:00'),
            msg: '晚上10点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voice
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '23:00:00'),
            msg: '晚上11点',
            started: false,
            stop: null,
            count_down: 0,
            voice: voice
        },
        {
            name: '提醒一次',
            time: new Date(today + ' ' + '23:30:00'),
            msg: '晚上11点半',
            started: false,
            stop: null,
            count_down: 0,
            voice: voice
        }
    ]
}
