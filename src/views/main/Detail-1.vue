<template>
    <div class="container1">
        详情页面，
        <a href="javascript:;" @click="gotoAbout()">跳转到about页面</a>
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
        gotoAbout () {
            this.$router.push('/about')
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
