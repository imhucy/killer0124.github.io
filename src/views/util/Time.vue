<template>
    <div>
        <!-- <el-input v-model="" placeholder="请输入内容"></el-input> -->
        <el-row :gutter="10">
            <el-col :span="24">
                <el-button-group>
                    <el-button type="primary" icon="plus" @click.native="addOne">One</el-button>
                    <el-button type="primary" icon="plus" @click.native="addLoop">Loop</el-button>
                    <el-button type="primary" icon="plus" @click.native="addCountDown">CountDown</el-button>
                </el-button-group>
            </el-col>
        </el-row>
        <div class="diver"></div>
        <el-row :gutter="10">
            <el-col :span="8" v-for="(item, index) in notifyList" :key="item.name">
                <el-card class="box-card mb20">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">{{item.name}}</span>
                        <el-button-group style="float: right;">
                            <el-button type="primary" icon="me-play"
                                @click.native="notifyAction[item.name](item)"
                                :loading="item.started"></el-button>
                            <el-button type="primary" icon="me-stop"
                                @click.native="item.stop"
                                :disabled="!item.started"></el-button>
                            <!-- <el-button type="warning" icon="delete"></el-button> -->
                        </el-button-group>
                        <!-- <el-button type="primary" :disabled="item.started">{{item.started ? '计时中...' : '开启定时提醒'}}</el-button> -->
                    </div>
                    <div>
                        <el-form v-show="!item.started" ref="form" :model="item" label-position="top">
                            <el-form-item label="提示信息">
                                <el-input v-model="item.msg" placeholder="请输入提示信息"></el-input>
                            </el-form-item>

                            <el-form-item label="提醒时间">
                                <el-date-picker
                                    v-model="item.time"
                                    type="datetime"
                                    placeholder="选择日期时间"
                                    :picker-options="pickerOptions1">
                                </el-date-picker>
                            </el-form-item>
                        </el-form>
                        <div v-show="item.started">
                            {{ item.count_down }} s后提醒<br />
                            <span style="color: #20A0FF">{{ item.msg }}</span>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <!-- <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">循环提醒</span>
                        <el-button style="float: right;" type="primary" @click.native="notifyLoop">开启定时</el-button>
                    </div>
                    <el-date-picker
                        v-model="datetime"
                        type="datetime"
                        placeholder="选择日期时间"
                        :picker-options="pickerOptions1">
                    </el-date-picker>
                </el-card>
            </el-col> -->
        </el-row>
    
    </div>
</template>
<script>
import UtilMixin from '../../mixin/util.js'
import TipVoice from '../../resources/audio/tip.mp3'

let voice = document.createElement('audio')
voice.src = TipVoice
voice.load()
setTimeout(function () {
    voice.play()
}, 2000)
setTimeout(function () {
    voice.play()
}, 20000)
export default {
    mixins: [UtilMixin],
    data () {
        return {
            datetime: new Date(),
            pickerOptions1: {
                shortcuts: [{
                    text: '今天',
                    onClick (picker) {
                        picker.$emit('pick', new Date())
                    }
                }, {
                    text: '昨天',
                    onClick (picker) {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24)
                        picker.$emit('pick', date)
                    }
                }, {
                    text: '一周前',
                    onClick (picker) {
                        const date = new Date()
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                        picker.$emit('pick', date)
                    }
                }]
            },
            notifyList: [
                // {
                //     name: '提醒一次',
                //     time: new Date(),
                //     msg: '',
                //     started: false,
                //     stop: null,
                //     count_down: 0
                // },
                // {
                //     name: '提醒一次',
                //     time: new Date(),
                //     msg: '',
                //     started: false,
                //     stop: null,
                //     count_down: 0
                // },
                // {
                //     name: '循环提醒',
                //     time: new Date(),
                //     started: false
                // }
            ],
            notifyAction: {
                '提醒一次': (item) => {
                    let targetTime = item.time.getTime()
                    let sourceTime = Date.now()
                    let delayTime = targetTime - sourceTime
                    let msg = item.msg || '提醒一次, 时间到'

                    item.started = true
                    this.$notify({
                        title: '提醒开启成功',
                        message: `将于${this.$datetimeFormat(item.time)}进行桌面提醒`,
                        type: 'success'
                    })
                    // 倒计时显示
                    let timer = setInterval(() => {
                        let ms = (targetTime - Date.now()) / 1000
                        item.count_down = parseInt(ms)
                    }, 1000)
                    // 计时开始
                    let timer2 = setTimeout(() => {
                        this.$desktop(msg)
                        item.started = false
                        clearInterval(timer)
                    }, delayTime)
                    // 启动停止函数
                    item.stop = (event) => {
                        clearInterval(timer)
                        clearTimeout(timer2)
                        item.stop = null
                        item.started = false
                        this.$notify({
                            title: '提醒关闭成功',
                            message: `已关闭提醒, "${item.name}"`,
                            type: 'success'
                        })
                    }
                },
                '循环提醒': (item) => {
                    item.started = true
                    this.$notify({
                        title: '提醒开启成功',
                        message: `最近一次将于${this.$datetimeFormat(item.time)}进行桌面提醒`,
                        type: 'success'
                    })
                }
            }
        }
    },
    methods: {
        addOne () {
            this.notifyList.push({
                name: '提醒一次',
                time: new Date(),
                msg: '',
                started: false,
                stop: null,
                count_down: 0
            })
        },
        addLoop () {
        },
        addCountDown () {
        }
    }
}
</script>
<style>
.diver { border-bottom: 1px solid #ddd;margin-top: 10px;margin-bottom: 10px; }
/*.el-row {margin-bottom: 20px;}
.el-row:last-child {margin-bottom: 0;}*/
</style>
