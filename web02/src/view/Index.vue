<template>
  <div id="Index">
    <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in swiperList" :key="index">
          <img :src="item" alt="">
        </van-swipe-item>
      </van-swipe>

      <!-- 类型 -->
      <div class="pan-kinds">
        <ul>
          <li
            v-for="(item, index) in kindList"
            :key="index"
            @click="onClcikTo(index)">
            <span>
              <img :src="item.image" />
            </span>
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
  <!-- 名师阵容 -->
  <div class="pan-teacher">
    <div class="pan-title">名师阵容</div>
    <div v-for="(item, index) in teacherList" 
         :key="index"
         class="pan-teacher-content">
      <div><img :src="item.img" alt=""></div>
      <div>
        <div class="content-name">{{item.name}}</div>
        <div class="content-intro">{{item.intro}}</div>
      </div>
    </div>
  </div>
  <!-- 精品课程 -->
  <div class="pan-good">
    <div class="pan-good-title">精品课程</div>
    <div v-for="(item, index) in goodList" 
         :key="index"
         class="pan-good-content">
      <div class="pan-good-content-wrapper">
        <div>{{item.intro}}</div>
        <div>{{item.total}}</div>
        <div>
          <img :src="item.img" alt="">
          <span>{{item.name}}</span>
        </div>
        <div>
          <div class="wrapper-apply">{{item.apply}}</div>
          <div :class="item.offer =='免费'?'wrapper-offer':'wrapper-offer-red'">{{item.offer}}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 推荐课程 -->
  <div class="pan-good">
    <div class="pan-good-title">推荐课程</div>
    <div v-for="(item, index) in recommendList" 
         :key="index"
         class="pan-good-content">
      <div class="pan-good-content-wrapper">
        <div>{{item.intro}}</div>
        <div>{{item.total}}</div>
        <div>
          <img :src="item.img" alt="">
          <span>{{item.name}}</span>
        </div>
        <div>
          <div class="wrapper-apply">{{item.apply}}</div>
          <div :class="item.offer =='免费'?'wrapper-offer':'wrapper-offer-red'">{{item.offer}}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 明星讲师 -->
  <div class="pan-teacher">
    <div class="pan-title">名师阵容</div>
    <div v-for="(item, index) in superList" 
         :key="index"
         class="pan-teacher-content">
      <div><img :src="item.img" alt=""></div>
      <div>
        <div class="content-name">{{item.name}} <span>{{item.grade}}</span></div>
        <div class="content-intro">{{item.intro}}</div>
      </div>
    </div>
  </div>
  <div class="pan-empty"></div>

  </div>
</template>

<script>
import axios from "axios"

export default {
  name:"Index",
  data() {
    return {
      swiperList:[],
      kindList:[],
      teacherList:[],
      goodList:[],
      recommendList:[],
      superList:[],
      selectIndex:0
    }
  },
  methods: {
    onClcikTo(index){
      this.selectIndex = index
      if(index == 0){
        this.$router.push("/home/kecheng")
      }
    }
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    axios.get("http://localhost:8080/data.json").then((response)=>{
      window.console.log(response.data.teacher.first)
      this.swiperList = response.data.swiper
      this.kindList = response.data.list
      this.teacherList = response.data.teacher.first
      this.goodList = response.data.teacher.second
      this.recommendList = response.data.teacher.third
      this.superList = response.data.teacher.fourth
    }).catch((error)=>{
      window.consowl.log(error)
    })
  }
}

</script>

<style scoped>
  /* @import url(); 引入css类 */
#Index{
    font-size: 0.14rem;
    width: 100%;
    height: 6.67rem;
    background:rgb(240,242,245);
    overflow: scroll;
}
.pan-empty
{
  width: 100%;
  height: 0.5rem;
}
/* 轮播图 */
.my-swipe .van-swipe-item 
{
  width: 100%;
  height: 1.8rem;
  background-color: red;
}
.my-swipe .van-swipe-item img
{
  width: 100%;
  height: 1.8rem;
}
/* 类型 */
.pan-kinds
{
  position:relative;
  margin-top:-0.2rem;
  margin-bottom:0.2rem;
  width: 100%;
}
.pan-kinds ul
{
  display:flex;
  justify-content: space-around;
}
.pan-kinds>ul>li
{
  width: 28%;
  height: 1rem;
  background-color: #fff;
  border-radius: 0.1rem;
  display:flex;
  justify-content: center;
  /* 横排 */
  flex-direction: column;
  text-align: center;
}
.pan-kinds>ul>li>span
{
  margin:0.07rem 0;
  color:#A1A1A1;
  font-size:0.12rem;
}
.pan-kinds>ul>li>span>img
{
  width: 0.23rem;
}
/* 名师阵容、明星讲师*/
.pan-teacher
{
  width: 94%;
  padding:0 3%;
  margin-bottom:0.2rem;
}
.pan-title
{
  border-left:3px solid red;
  padding-left:2%;
  font-size:0.16rem;
}
.pan-teacher-content
{
  width: 100%;
  height: 1rem;
  background-color: #fff;
  margin-top:0.1rem;
  border-radius: 0.1rem;
  display:flex;
  justify-content: flex-start;
  align-items: center;
}
.pan-teacher-content>div:nth-child(1)
{
  width: 20%;
  display:flex;
  justify-content: center;
  align-items: center;
}
.pan-teacher-content>div:nth-child(1)>img
{
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
}
.content-name
{
  font-size:0.155rem;
}
.content-name>span
{
  padding-left:0.02rem;
  color:orange;
  font-size:0.12rem;
}
.content-intro
{
  font-size: 0.115rem;
  margin-top:0.08rem;
  margin-left:0.1rem;
  color:#ccc
}
/* 精品课程 、推荐课程*/
.pan-good
{
  width: 94%;
  padding:0 3%;
  margin-bottom:0.2rem;
}
.pan-good-title
{
   border-left:3px solid red;
  padding-left:2%;
  font-size:0.16rem;
}
.pan-good-content
{
  width: 100%;
  height: 2rem;
  background-color: #fff;
  margin-top:0.15rem;
  border-radius: 0.1rem;
  display:flex;
  justify-content: center;
}
.pan-good-content-wrapper
{
  width: 94%;
  height: 1.8rem;
  /* background-color: red; */
  margin-top:0.2rem;
}
.pan-good-content-wrapper>div:nth-child(1)
{
  font-size:0.16rem;
  margin-bottom:0.03rem
}
.pan-good-content-wrapper>div:nth-child(2)
{
  font-size:0.13rem;
  color:#414040
}
.pan-good-content-wrapper>div:nth-child(3)
{
  width: 100%;
  height: 0.7rem;
  font-size:0.13rem;
  color:#646363;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom:1px solid rgb(233, 230, 230);
}
.pan-good-content-wrapper>div:nth-child(3)>img
{
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  margin-right:3%;
}
.pan-good-content-wrapper>div:nth-child(4)
{
  width: 100%;
  height: 0.47rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.wrapper-apply
{
  color:#A1A1A1;
}
.wrapper-offer
{
  color:green;
  font-size:0.165rem;
}
.wrapper-offer-red
{
  color:red;
   font-size:0.165rem; 
}

</style>