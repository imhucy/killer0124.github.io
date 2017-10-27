<template>
    <div>
        <!-- <el-input v-model="" placeholder="请输入内容"></el-input> -->
        
        <el-row :gutter="20">
            <el-col :span="16">
                <el-row>
                    <el-col :span="24">
                        <el-button-group>
                            <el-button type="primary" icon="plus" @click.native="addOne">新建提醒</el-button>
                            <el-button type="primary" icon="plus" @click.native="addLoop">新建组</el-button>
                            <el-button type="primary" icon="plus" @click.native="addCountDown">倒计时?</el-button>
                        </el-button-group>
                    </el-col>
                </el-row>
                <div class="diver"></div>
                <el-row>
                    <el-col :span="24">
                        <el-form ref="form" :model="form" label-position="top">

                            <el-form-item label="提示类型">
                                <el-select style="width:100%;" v-model="form.type" placeholder="请选择">
                                    <el-option
                                        v-for="item in TypeOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="循环类型">
                                <el-select style="width:100%;" v-model="form.loopType" placeholder="请选择">
                                    <el-option
                                        v-for="item in LoopTypeOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="提示信息">
                                <el-input v-model="form.msg" placeholder="请输入提示信息"></el-input>
                            </el-form-item>

                            <el-form-item label="提醒时间">
                                <el-date-picker
                                    style="width:100%;"
                                    v-model="form.time"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                </el-date-picker>
                            </el-form-item>

                        </el-form>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="12" v-for="(item, index) in notifyList" :key="item.name">
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
                                            placeholder="选择日期时间">
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
                    <div v-for="group in groups">
                        <div class="group-header mt40">
                            <div class="fl">{{group.group_name}}</div>
                        </div>
                        <div class="diver cb"></div>
                    </div>
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
            </el-col>
            <el-col :span="8">
                <el-card>
                    <div slot="header" class="clearfix">
                        任务列表
                    </div>
                    <el-collapse v-model="activeGroup">
                        <el-collapse-item title="默认组" name="default">
                            <ul>
                                <li style="border-bottom: 1px solid #ccc;margin-bottom: 10px;" v-for="(item, i) in TaskQueue.queue.filter(a => a.started)">
                                    <div :class="{'text-primary': !i}"><i v-show="!item.isLoop" class="el-icon el-icon-refresh"></i>{{item.msg}}</div>
                                    <div class="fl time" :class="{'text-info': !!i, 'text-danger': !i}">{{$timeFormat(item.time)}}</div>
                                    <div v-show="!i" class="fr mt15">剩余 {{$time(item.count_down)}}</div>
                                    <div class="cb"></div>
                                </li>
                            </ul>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>
                <!-- <div class="group-header">
                    <div class="fl">任务列表</div>
                </div>
                <div class="diver cb"></div>
                <div class="task-list">
                    <ul>
                        <li style="border-bottom: 1px solid #ccc;padding-bottom: 10px;margin-bottom: 10px;" v-for="(item, i) in TaskQueue.queue.filter(a => a.started)">
                            <div>{{item.msg}}</div>
                            <div class="fl time" :class="{'text-info': !!i, 'text-danger': !i}">{{$timeFormat(item.time)}}</div>
                            <div v-show="!i" class="fr">剩余 {{$time(item.count_down)}}</div>
                            <div class="cb"></div>
                        </li>
                    </ul>
                </div> -->
            </el-col>
        </el-row>
    </div>
</template>
<script>
import UtilMixin from '../../mixin/util.js'
import TaskQueue from './time_task_queue.js'

export default {
    mixins: [UtilMixin],
    created () {
        TaskQueue.queue.forEach((item, i) => {
            if (item.time.getTime() < Date.now()) return
            setTimeout(() => {
                this.notifyAction[item.name](item)
            }, 100 * i)
        })
    },
    data () {
        return {
            TaskQueue,
            activeGroup: ['default'],
            form: {},
            TypeOptions: [
                {value: '提醒一次', label: '提醒一次'}
            ],
            LoopTypeOptions: [
                {value: '每小时', label: '每小时'},
                {value: '每分钟', label: '每分钟'},
                {value: '每5分钟', label: '每5分钟'},
                {value: '每30分钟', label: '每30分钟'}
            ],
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
            notifyList: [],
            groups: [],
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
                        item.voice.play()
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
                count_down: 0,
                voice: TaskQueue.voices[0]
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
.group-header {font-size: 16px;height: 30px; line-height: 30px;color: #aaa;cursor: default;}
.group-header:hover {color: #666}
.time {font-size: 26px; font-weight: 700;font-family: Helvetica;}
.el-collapse {border: none;}
.el-collapse-item__header__arrow{float: right;margin-top: 15px;}
/*.el-row {margin-bottom: 20px;}
.el-row:last-child {margin-bottom: 0;}*/
</style>
