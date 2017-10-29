<template>
    <div>
        <el-menu theme="dark" class="el-menu-demo" mode="horizontal" :router="true">
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
export default {
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
    margin: 0 auto;
    padding: 15px 15px 15px;
    background-color: #fff;
}
</style>
