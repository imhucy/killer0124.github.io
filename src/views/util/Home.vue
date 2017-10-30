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
    min-height: 700px;
    margin: 50px auto 0;
    padding: 15px 15px 15px;
    background-color: rgba(1000, 100, 100, 0.2);
    box-shadow: 5px 5px 25px #999;
}
</style>
