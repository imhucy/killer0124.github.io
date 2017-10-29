<template>
    <div>
        <!-- <el-input v-model="" placeholder="请输入内容"></el-input> -->
        
        <el-row :gutter="20">
            <el-col :span="16">
                <el-row>
                    <el-col :span="24">
                        <el-button-group>
                            <el-button type="primary" icon="plus" @click.native="addNew">新建提醒</el-button>
                            <el-button type="primary" icon="plus" @click.native="addLoop">新建组</el-button>
                            <el-button type="primary" icon="plus" @click.native="addCountDown">倒计时</el-button>
                        </el-button-group>
                    </el-col>
                </el-row>
                <div class="diver"></div>
                <el-row>
                    <el-col :span="24">
                        <el-form ref="form" :model="form" label-position="top">

                            <el-form-item label="选择任务组">
                                <el-select style="width:100%;" v-model="form.GroupType" placeholder="请选择">
                                    <el-option
                                        v-for="item in GroupTypeOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>                                
                            </el-form-item>

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

                            <el-form-item label="提示声音">
                                <el-select style="width:100%;" v-model="form.voice_name" placeholder="请选择">
                                    <el-option
                                        v-for="item in VoiceNameTypeOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item v-show="form.type === '循环提醒'" label="循环类型">
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
                <!-- 
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
                                </el-button-group>
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
                </el-row> -->
            </el-col>
            <el-col :span="8">
                <el-card>
                    <div slot="header" class="clearfix">任务列表</div>
                    <el-collapse v-model="activeGroup">
                        <el-collapse-item :title="group.name" :name="group.name" v-for="group in groups" :key="group.name">
                            <ul>
                                <li style="border-bottom: 1px solid #ccc;margin-bottom: 10px;" v-for="(item, i) in group.tasks.filter(a => a.started)">
                                    <div :class="{'text-primary': !i}"><i v-show="!item.isLoop" class="el-icon el-icon-refresh"></i>{{item.msg}}</div>
                                    <div class="fl time" :class="{'text-info': !!i, 'text-danger': !i}">{{$timeFormat(item.time)}}</div>
                                    <div v-show="!i" class="fr mt15">剩余 {{$time(item.count_down)}}</div>
                                    <div class="cb"></div>
                                </li>
                            </ul>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>
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
        TaskQueue.time_report.forEach(this.startTasks)
        TaskQueue.default.forEach(this.startTasks)
    },
    data () {
        return {
            TaskQueue,
            activeGroup: ['默认组', '报时组'],
            form: {
                type: '提醒一次',
                GroupType: '默认组',
                time: new Date(),
                voice_name: 'default'
            },
            TypeOptions: [
                {value: '提醒一次', label: '提醒一次'},
                {value: '循环提醒', label: '循环提醒'}
            ],
            LoopTypeOptions: [
                {value: '每小时', label: '每小时'},
                {value: '每分钟', label: '每分钟'},
                {value: '每5分钟', label: '每5分钟'},
                {value: '每30分钟', label: '每30分钟'}
            ],
            GroupTypeOptions: [
                {value: '默认组', label: '默认组'},
                {value: '报时组', label: '报时组'}
            ],
            VoiceNameTypeOptions: [
                {value: 'default', label: '默认提示音'},
                {value: 'general', label: 'General'},
                {value: 'ding', label: 'Ding'},
                {value: '15点', label: 'VM慧-15点报时'},
                {value: '16点', label: 'VM慧-16点报时'},
                {value: '17点', label: 'VM慧-17点报时'},
                {value: '18点', label: 'VM慧-18点报时'},
                {value: '18点半', label: 'VM慧-18点半报时'},
                {value: '19点', label: 'VM慧-19点报时'},
                {value: '20点', label: 'VM慧-20点报时'},
                {value: '21点', label: 'VM慧-21点报时'},
                {value: '22点', label: 'VM慧-22点报时'},
                {value: '23点', label: 'VM慧-23点报时'},
                {value: '23点半', label: 'VM慧-23点半报时'}
            ],
            notifyList: [],
            groups: [
                {
                    name: '默认组',
                    tasks: TaskQueue.default
                },
                {
                    name: '报时组',
                    tasks: TaskQueue.time_report
                }
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
        addNew () {
            let groupName = this.form.GroupType
            let group = this.$lodash(this.groups).find(['name', groupName])
            let voiceName = this.form.voice_name
            let voice = TaskQueue.voices[voiceName] ? TaskQueue.voices[voiceName] : TaskQueue.voices.default
            group.tasks.push({
                name: this.form.type,
                time: this.form.time,
                msg: this.form.msg,
                started: false,
                stop: null,
                count_down: 0,
                voice: voice
            })
            group.tasks.forEach(this.startTasks)
            // this.notifyList.push({
            //     name: '提醒一次',
            //     time: new Date(),
            //     msg: '',
            //     started: false,
            //     stop: null,
            //     count_down: 0,
            //     voice: TaskQueue.voices[0]
            // })
        },
        startTasks (item, i) {
            if (item.time.getTime() < Date.now()) return
            if (item.started) return
            console.log('startTask(%s, %s)', item, i)
            setTimeout(() => {
                this.notifyAction[item.name](item)
            }, 100 * i)
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
