<!--  -->
<template>
  <div class="page-part fix guide-bg">
    <div class="page-content">
      <div class="login-box" v-if="logout">
        <div class="text-c">
          <van-image width="100" height="100" :src="require('./../assets/logo.png')" />
        </div>

        <div class="form-box">
          <van-cell-group>
            <van-field
              v-model="user.username"
              label="用户名"
              placeholder="请输入用户名"
            />
            <van-field v-model="user.password" type="password" label="密码" />
          </van-cell-group>
        </div>

       <router-link to="/index"> <van-button type="primary" size="large">进入</van-button></router-link>
       
      </div>
    </div>
    <!-- <van-popup v-model="popupVisible" popup-transition="popup-fade" position="center">
            <div class="guide-address-popup clearfix">
                <p>
                    您当前不在干窑范围内，不能参加此处活动。
                </p>
                <div class="row text-c">
                    <van-button size="small" type="default" @click="popupHidden">确定</van-button>

                </div>

            </div>

        </van-popup> -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      logout: true,
      user: {
        username: "姓名",
        password: "13586407072",
      },
      popupVisible: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
