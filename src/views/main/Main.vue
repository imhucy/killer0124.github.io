<template>
    <div class="container">
        <Timeline id="timeline">
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
            <Timeline-item class="timeline-item-custom">
                <p class="time" @click="moveTo100()">moveTo100</p>
            </Timeline-item>
            <Timeline-item class="timeline-item-custom" color="green">
                <!-- <span slot="dot">step 1</span> -->
                <!-- <Icon type="trophy" slot="dot"></Icon> -->
                <i class="el-icon-time" slot="dot"></i>
                <p class="time" @click="gotoDetail()">2007年</p>
                <p class="content">发布 iPhone</p>
            </Timeline-item>
            <Timeline-item class="timeline-item-custom">
                <p class="time">2010年</p>
                <p class="content">发布 iPad</p>
            </Timeline-item>
            <Timeline-item class="timeline-item-custom" v-for="n in 30" :key="n">
                <p class="time">2011年10月5日</p>
                <p class="content">史蒂夫·乔布斯去世</p>
            </Timeline-item>
            <Timeline-item class="timeline-item-custom">
                <p class="time">2011年10月5日</p>
                <p class="content">史蒂夫·乔布斯去世</p>
            </Timeline-item>
            <Timeline-item>
                <a href="javascript:;" @click="gotoDetail">可以的</a>
            </Timeline-item>
        </Timeline>
    </div>
</template>
<script>
import Icon from 'iview/src/components/icon'
import Timeline from 'iview/src/components/timeline'
import TimelineItem from 'iview/src/components/timeline/timeline-item'
export default {
    components: { Icon, Timeline, TimelineItem },
    methods: {
        gotoDetail () {
            this.$router.push('/main-detail')
        },
        moveTo100 () {
            let container = document.getElementById('timeline')
            container.className = container.className + ' ' + 'move-list'
        }
    }
}
</script>
<style scoped>
.container {
    width: 1000px;
    height: 400px;
    overflow-x: hidden;
    margin: 20px auto;
    cursor: move;
    /*
    height: 400px;
    border: 1px solid #ccc;
    border-radius: 8px;
    */
    padding: 30px 15px 15px;
}
.move-list {
    transform: translateY(-200px);
}
.time {
    font-size: 30px;
    margin-top: -15px;
}
.content {
    font-size: 16px;
}
.timeline-item-custom {
}
</style>
