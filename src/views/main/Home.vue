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
    </div>
</template>
<style type="text/css">
* {margin:0;padding: 0;}
</style>
<script>
import navData from '../../resources/data/nav'
export default {
    data () {
        return {
            navData
        }
    }
}
</script>
