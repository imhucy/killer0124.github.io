<template>
    <div>
        <!-- <el-input v-model="" placeholder="请输入内容"></el-input> -->
        <el-row :gutter="10">
            <el-col :span="8" v-for="item in notifyList">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span style="line-height: 36px;">{{item.name}}</span>
                        <el-button style="float: right;" type="primary" :disabled="item.started" @click.native="notifyAction[item.name](item)">{{item.started ? '计时中...' : '开启定时提醒'}}</el-button>
                    </div>
                    <div>
                        <el-date-picker
                            v-model="item.time"
                            type="datetime"
                            placeholder="选择日期时间"
                            :picker-options="pickerOptions1">
                        </el-date-picker>
                    </div>
                    <div>
                        
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
    export default {
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
                    {
                        name: '提醒一次',
                        time: new Date(),
                        started: false
                    },
                    {
                        name: '循环提醒',
                        time: new Date(),
                        started: false
                    }
                ],
                notifyAction: {
                    '提醒一次': (item) => {
                        item.started = true
                        this.$notify({
                            title: '提醒开启成功',
                            message: `将于${this.$datetimeFormat(item.time)}进行桌面提醒`,
                            type: 'success'
                        })
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
        }
    }
</script>
