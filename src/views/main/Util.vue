<template>
    <div class="container-util">
        <el-row :gutter="10">
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="util-item">
                        <img width="100%"
                            @click="link('/UtilDetail/Time')"
                            class="util-item-image"
                            :src="time" alt="">
                    </div>
                    <div class="pl15 pt15 pb15 pr15">
                        <div class="mb20">
                            时间国度<br />
                            <small>这个小东西是用来提醒我该干什么的, 我从来就不是一个时间观念很强的人
                            </small>
                        </div>
                        <el-button type="primary"
                            class="full-width"
                            @click.native="link('/UtilDetail/Time')">进入</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="util-item" style="background-color: #feaabb;"></div>
                    <div class="pl15 pt15 pb15 pr15">
                        <div class="mb20">some description</div>
                        <el-button type="primary" class="full-width">进入</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="util-item" style="background-color: #abcdef;"></div>
                    <div class="pl15 pt15 pb15 pr15">
                        <div class="mb20">some description</div>
                        <el-row :gutter="15">
                            <el-col :span="12">
                                <el-button type="success" class="full-width">记录</el-button>
                            </el-col>
                            <el-col :span="12">
                                <el-button type="primary" class="full-width">进入</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<style>
.util-item {
    height: 250px;
    width: 100%;
    overflow: hidden;
    text-align: center;
}
.util-item:hover .util-item-image {
    cursor: pointer;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
}
.util-item-image {
    -webkit-transition: all .5s;
    transition: all .5s;
}
</style>
<script>
import time from '../../resources/img/time.jpg'
export default {
    data () {
        return {
            time
        }
    }
}
</script>
