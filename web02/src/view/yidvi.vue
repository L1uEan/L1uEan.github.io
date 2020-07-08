<template>
  <div class="yiduiyi">
      <!-- 头部 -->
   <van-nav-bar title="一对一辅导" left-arrow @click-left="onClickLeft" size="20">
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>
<!-- 菜单 -->

<van-dropdown-menu>
  <van-dropdown-item v-model="value" :options="option" />
  <van-dropdown-item title="选择老师条件" ref="item">
    <van-switch-cell v-model="switch1" title="包邮" />
    <van-switch-cell v-model="switch2" title="团购" />
    <van-button block type="info">确认</van-button>
  </van-dropdown-item>
</van-dropdown-menu>

<div class="teacher">
<ul>
    <li v-for="(item,index) in list" :key="index">
        <img :src="item.avatar" alt="">
        <div class="nav">
            <p>{{ item.real_name }}</p> 
            <p class="lf">{{item.sex}} <span>{{item.teach_age}}</span>年教龄 </p>
        </div>
       <div class="anniu">
           <input type="button" value="预约">
       </div>
    </li>
</ul>
</div>



  </div>
</template>

<script>
import axios from "axios"
import "../assets/rem"
export default {
    data() {
        return {
             value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '选择上课时间', value: 0 },
        { text: '你好', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      list:[],

        }
    },
    mounted() {
        axios.get("https://www.365msmk.com/api/app/otoCourse?page=1&limit=10&start_time=&end_time=&level_id=4&is_collect=0&is_attended=0&sex=&attr_val_id=&level_id").then((msg)=>{
            // console.log(msg)
            this.list= msg.data.data
                    })
    },
    methods: {
        // 返回首页
        onClickLeft(){
            this.$router.push("/shop/home")
        }
    },
}
</script>

<style scoped>
.teacher{
    width: 100%;
}
.teacher ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
    background: #ccc;
}
.teacher ul li {
    width: 100%;
    height:1rem;
    background: #fff;
    margin-bottom: 0.1rem;
    line-height: 0.8rem;
   
}
.teacher ul li img{
    width: 0.45rem;
    height:0.45rem;
    display: block;
    float: left;
    border-radius: 50%;
    margin-top:0.3rem;
    margin-left: 0.4rem;
}
.teacher ul li .nav{
    float: left;
    width: 1.5rem;
   height: 0.4rem;
   line-height: 0.3rem;
   margin-top: 0.3rem;
   margin-left: 0.3rem;

}
.teacher ul li .nav p{
    font-size:0.26rem;
}
.teacher ul li .nav .lf{
    font-size:0.22rem;
    color:#ccc;
    font-weight: normal;

}
.teacher ul li .anniu{
  
    float: right;
    margin-right: 0.2rem;
    margin-top: 0.2rem;
}
.teacher ul li .anniu input{
    width: 1rem;
    height:0.5rem;
border-radius: 45%;
line-height: 0.4rem;
color:red;
border:0;
background:cyan;
outline: none;
font-size:0.2rem;
font-weight: bold;
}
</style>