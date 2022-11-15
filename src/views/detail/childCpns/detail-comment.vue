<template>
  <div class="detail-comment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="user-evaluate">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="user-logo">
      <img :src="commentInfo.user.avatar" alt="">
      <div class="user-name">{{commentInfo.user.uname}}</div>
    </div>
    <div class="user-comment">
      <p>{{commentInfo.content}}</p>
      <span>{{commentInfo.created | showDate}}</span>
      <span>{{commentInfo.style}}</span>
      <div class="comment-Image">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" alt="">
      </div>
      <!-- <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" alt=""> -->
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils.js'
export default {
  name: 'detail-comment',
  props: {
    commentInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      //1. 将时间戳转换成Date对象
      const date = new Date(value * 1000)
      //2.将date进行格式化
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }

}
</script>

<style>
.detail-comment {
  color: #333;
}
.user-evaluate {
  display: flex;
  justify-content: space-between;
  padding: 12px 20px 12px 16px;
  border-bottom: 3px solid #eee;
}
.user-logo {
  display: flex;
  font-size: 20px;
  align-items: center;
}
.user-logo img {
  width: 42px;
  height: auto;
  margin: 12px;
}
.user-comment {
  font-size: 14px;
  color: #666;
  line-height: 20px;
}
.user-comment p {
  font-size: 16px;
  padding: 8px 10px;
}
.user-comment span {
  padding: 10px 0 10px 10px;
  color: #aaa;
  font-weight: 700;
}
/* .user-comment img {
  width: 60px;
  height: auto;
  margin: 12px 0 12px 10px;
} */
.comment-Image {
  display: flex;
  padding: 8px 12px;
}
.comment-Image img {
  width: 60px;
  height: auto;
  margin-right: 5px;
}
</style>