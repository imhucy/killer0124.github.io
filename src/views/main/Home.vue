<template>
    <div>
        <el-menu :style="{background: 'url(' + logo + ') #324157 no-repeat'}" theme="dark" class="el-menu-demo" mode="horizontal" :router="true">
            <div class="fl" @click="$router.push('/')" style="width: 150px;height: 60px;cursor: pointer;"></div>
            <el-menu-item  :index="item.url" v-for="(item, index) in navData" :key="item.text">
                {{item.text}}
            </el-menu-item>
        </el-menu>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import navData from '../../resources/data/nav'
import logo from '../../resources/img/logo.png'
export default {
    data () {
        return {
            navData,
            logo
        }
    }
}
</script>
<style scoped>
.container {
    width: 1000px;
    margin: 0 auto;
    padding: 15px 15px 15px;
    background-color: #fff;
}
.el-menu--horizontal.el-menu--dark .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu__title:hover {
    background: rgba(50, 65, 87, 0.5);
}
</style>
