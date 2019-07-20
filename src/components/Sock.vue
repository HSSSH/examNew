
<template>
  <div>
	<p>在本页面实现效果:在消息框能显示服务端主动推送的消息；当点击发送，消息发送到服务端并在消息框显示服务端反馈的信息；</p>
	<input type="text" v-model="params.msg"><button @click="sendMsg()">发送</button><br/>
	<label>消息：</label><br/>
	<textarea v-model="params.response"></textarea>
</div>
</template>

<script>
export default {
  name: 'Sock',
  data () {
      return {
          params: {
            msg: '',
            response: '',
          },
      }
  },
  methods: {
      sendMsg () {
      }
  },
}
</script>
