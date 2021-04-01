<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.page-part {
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;
}
.page-part.has-header {
  margin-top: 56px;
}
.page-part.fix {
  box-sizing: border-box;
  padding-bottom: 0;
  height: 100vh;
}

.page-content {
  padding: 0 16px;
}

.clearfix::after {
  content: "";
  display: inline-block;
  clear: both;
}
.text-c {
  text-align: center;
}
.text-r {
  text-align: right;
}

.text-ellipsis-1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-ellipsis-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.row {
  width: 100%;
  float: left;
}
.col-50 {
  width: 50%;
  float: left;
}
.row::after {
  content: "";
  display: inline-block;
  clear: both;
}

.van-button--large {
    width: 100%;
    height: 40px;
}
/* guide */
.login-box {
  position: absolute;
  width: 280px;
  height: 300px;
  bottom: 5px;
  left: 5px;
  right: 5px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 8px;
}
.form-box{
  margin-bottom: 20px;
}
.guide-address-popup {
  background-color: #fff;
  padding: 30px;
}
.guide-address-popup p {
  margin-bottom: 20px;
  width: 200px;
}
.guide-bg {
  background-color: #07c160;
  height: calc(100vh - 44px);
  width: 100%;
}

/* index */
.index-box {
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
}
.index-box li {
  border: 1px solid #fdd;
  padding: 10px 0;
  border-radius: 5px;
  margin-bottom: 15px;
}

/* history */
.history .title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* exercise-box */
.exercise-box {
  padding: 25px;
  width: 100%;
  box-sizing: border-box;
}

.exercise-box li {
  border: 1px solid #fdd;
  padding: 20px 0;
  border-radius: 5px;
  margin-bottom: 15px;
}

/* ranklist */
.list-rank {
  border: 1px solid #fdfdfd;
}
.list-title {
  background-color: #fdd;
}
.list-title,
.list-box {
  overflow: hidden;
}
.list-title li,
.list-box li {
  line-height: 2;
  float: left;
  width: 33.33%;
  box-sizing: border-box;
  border-bottom: 1px solid #fdfdfd;
  border-right: 1px solid #fdfdfd;
}
.list-box.myself li {
  background-color: #8e0002;
  color: #fff;
}

/* mark */
.title {
  font-size: 18px;
  margin-bottom: 10px;
}
.line {
  margin-bottom: 10px;
}

.user-box .line {
  font-size: 16px;
}
.rule-box {
  margin-top: 15px;
}
.rule-box .line {
  font-size: 12px;
  color: rgb(85, 85, 85);
}

/* prize */
.prize-box img {
  width: 120px;
  height: 120px;
}
.prize-footer {
  height: 44px;
  line-height: 44px;
  padding: 0 15px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 2px 2px 10px #efefef;
}
.prize-box ul li label {
}
.prize-box ul li input {
  vertical-align: baseline;
  height: 120px;
  line-height: 1;
}
.prize-box ul li span {
  vertical-align: middle;
  display: inline-block;
  margin-top: -120px;
}

/* exchange */
.exchange-footer {
  margin-top: 20px;
}
/* partClass */
.video-box {
  background-color: #ddd;
  height: auto;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.video-box .fill {
  display: none;
  visibility: hidden;
}

.class-second-box {
  margin-top: 15px;
}
.class-second-box .img-box {
  box-sizing: border-box;
  float: left;
  width: 50%;
  border: 1px solid #ddd;
  font-size: 0;
}
.class-second-box .img-box img {
  width: 100%;
}
.class-second-box .desc {
  float: left;
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
  color: #333;
}

.class-second-box li {
  width: 100%;
  float: left;
  margin-bottom: 10px;
  height: 100px;
  overflow: hidden;
}

.activity {
}

.activity li {
  box-sizing: border-box;
  height: 90px;
  overflow: hidden;
  margin-top: 10px;
}
.activity li:first-of-type {
  margin-top: 0;
}
.activity li .left {
  width: calc(100% - 120px);
  float: left;
  padding: 5px 10px 5px 0;
  box-sizing: border-box;
}
.activity li .foot {
  color: #707070;
  margin-top: 10px;
}
.activity li .title {
  font-weight: bold;
  font-size: 14px;
  height: 42px;
  color: #333;
}
.activity li .right {
  width: 120px;
  float: left;
}
.activity li .right img {
  width: 100%;
}
</style>
