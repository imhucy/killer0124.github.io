<template>
    <div>
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item 
                :index="index"
                v-for="(item, index) in navData"
                :key="index">{{item.text}}</el-menu-item>
            <!-- 下拉菜单 -->
            <!-- 
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            -->
        </el-menu>
        <div class="container">
            <Timeline>
                <Timeline-item class="timeline-item-custom">
                    <p class="time">1976年</p>
                    <p class="content">Apple I 问世</p>
                </Timeline-item>
                <Timeline-item class="timeline-item-custom">
                    <p class="time">1984年</p>
                    <p class="content">发布 Macintosh</p>
                    <el-card>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </Timeline-item>
                <Timeline-item class="timeline-item-custom" color="green">
                    <!-- <span slot="dot">step 1</span> -->
                    <!-- <Icon type="trophy" slot="dot"></Icon> -->
                    <i class="el-icon-time" slot="dot"></i>
                    <p class="time">2007年</p>
                    <p class="content">发布 iPhone</p>
                </Timeline-item>
                <Timeline-item class="timeline-item-custom">
                    <p class="time">2010年</p>
                    <p class="content">发布 iPad</p>
                </Timeline-item>
                <Timeline-item class="timeline-item-custom">
                    <p class="time">2011年10月5日</p>
                    <p class="content">史蒂夫·乔布斯去世</p>
                </Timeline-item>
            </Timeline>
        </div>
    </div>
</template>
<script>
import navData from '../../resources/data/nav'
import Icon from 'iview/src/components/icon'
import Timeline from 'iview/src/components/timeline'
import TimelineItem from 'iview/src/components/timeline/timeline-item'
export default {
    components: { Icon, Timeline, TimelineItem },
    data () {
        return {
            navData
        }
    }
}
</script>
<style scoped>
.container {
    width: 1000px;
    margin: 20px auto;
    /*
    border: 1px solid #ccc;
    border-radius: 8px;
    */
    padding: 30px 15px 15px;
}
.time {
    font-size: 30px;
    margin-top: -15px;
}
.content {
    font-size: 16px;
}
.timeline-item-custom {
    /*background-color: #efefef;*/
    cursor: pointer;
    /*border-bottom: 1px dashed #000;*/
    /*margin-bottom: 15px;*/
}
</style>
