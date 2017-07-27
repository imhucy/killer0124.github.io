<template>
    <div>
        <el-row :gutter="10" class="mb20">
            <el-col :span="16">
                <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :span="8">
                <el-card style="height: 300px;">
                    <div v-for="item in 12">{{item}}</div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div style="background-color: #acdbac;height: 250px;width: 100%;"></div>
                    <div class="pl15 pt15 pb15 pr15">
                        <div class="mb20">some description</div>
                        <el-button type="primary" class="full-width">进入</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div style="background-color: #feaabb;height: 250px;width: 100%;"></div>
                    <div class="pl15 pt15 pb15 pr15">
                        <div class="mb20">some description</div>
                        <el-button type="primary" class="full-width">进入</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div style="background-color: #abcdef;height: 250px;width: 100%;"></div>
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
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    text-align: center;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
