<template>
    <div class="container-util">
        <el-row :gutter="10">
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div style="background-color: #acdbac;height: 250px;width: 100%;"></div>
                    <div class="pl15 pt15 pb15 pr15">
                        <div class="mb20">定时提醒</div>
                        <el-button type="primary" class="full-width" @click="link('/UtilDetail/Time')">进入</el-button>
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
<style>
    .container-util {
        
    }
</style>
