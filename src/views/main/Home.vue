<template>
    <div>
        <el-menu theme="dark"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect">
            <el-menu-item 
                :index="index + ''"
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
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
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
    },
    methods: {
        gotoDetail () {
            this.$router.push('/main-detail')
        },
        handleSelect () {
            console.log('handleSelect')
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
