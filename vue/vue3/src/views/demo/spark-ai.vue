<script setup lang="ts">
  import { ref, unref } from 'vue';
  import { NButton, useMessage } from 'naive-ui';
  import CryptoJs from 'crypto-js';

  import { Page } from '@packages/components';

  const message = useMessage();
  const {
    GLOBAL_SPARK_AI_APPID,
    GLOBAL_SPARK_AI_APISECRET,
    GLOBAL_SPARK_AI_APIKEY,
  } = import.meta.env;

  const getWebsocketUrl = () => {
    const url = 'wss://spark-api.xf-yun.com/v3.5/chat';
    const host = 'spark-api.xf-yun.com';
    const apiKeyName = 'api_key';
    const date = new Date().toGMTString();
    const algorithm = 'hmac-sha256';
    const headers = 'host date request-line';
    const signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v3.5/chat HTTP/1.1`;
    const signatureSha = CryptoJs.HmacSHA256(
      signatureOrigin,
      GLOBAL_SPARK_AI_APISECRET
    );
    const signature = CryptoJs.enc.Base64.stringify(signatureSha);
    const authorizationOrigin = `${apiKeyName}="${GLOBAL_SPARK_AI_APIKEY}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`;
    const authorization = btoa(authorizationOrigin);
    // 将空格编码
    return `${url}?authorization=${authorization}&date=${encodeURI(
      date
    )}&host=${host}`;
  };

  const url = getWebsocketUrl();
  const isLoading = ref(false);
  const sMsg = ref();
  const chartContentRef = ref<HTMLDivElement>();
  const sendMsg = () => {
    if (unref(isLoading)) {
      message.warning('加载中...');
      return;
    }
    if (!unref(sMsg)) {
      message.warning('请输入内容');
      return;
    }
    const userMsg = document.createElement('div');
    userMsg.classList.add('msg-user');
    const msgMain = document.createElement('div');
    msgMain.innerHTML = unref(sMsg);
    userMsg.appendChild(msgMain);
    chartContentRef.value?.appendChild(userMsg);
    const socket = new WebSocket(url);
    socket.addEventListener('open', (e) => {
      isLoading.value = true;
      const params = {
        header: {
          app_id: GLOBAL_SPARK_AI_APPID,
          uid: '星火网页测试',
        },
        parameter: {
          chat: {
            domain: 'generalv3.5',
            temperature: 0.5,
            max_tokens: 1024,
          },
        },
        payload: {
          // 如果想获取结合上下文的回答，需要开发者每次将历史问答信息一起传给服务端，如下示例
          // 注意：text里面的所有content内容加一起的tokens需要控制在8192以内，开发者如有较长对话需求，需要适当裁剪历史信息
          message: {
            text: [
              { role: 'user', content: '你是谁' }, //# 用户的历史问题
              { role: 'assistant', content: '我是AI助手' }, //# AI的历史回答结果
              // ....... 省略的历史对话
              { role: 'user', content: unref(sMsg) }, //# 最新的一条问题，如无需上下文，可只传最新一条问题
            ],
          },
        },
      };
      socket.send(JSON.stringify(params));
    });

    let resMsgText = '';
    const resMsg = document.createElement('div');
    resMsg.classList.add('msg-ai');
    const resMsgMain = document.createElement('div');
    resMsg.appendChild(resMsgMain);
    chartContentRef.value?.appendChild(resMsg);
    socket.addEventListener('message', ({ data }) => {
      isLoading.value = false;
      resMsgText += JSON.parse(data).payload.choices.text[0].content;
      resMsgMain.innerHTML = resMsgText;
    });
  };
</script>

<template>
  <page title="科大讯飞3.5" padding="0">
    <div class="chat-content" ref="chartContentRef"></div>
    <div class="ask-content">
      <textarea v-model="sMsg"></textarea>
      <div class="opt">
        <n-button type="primary" size="large" @click="sendMsg">发送</n-button>
      </div>
    </div>
  </page>
</template>

<style lang="less" scoped>
  .chat-content {
    flex: 1;
    overflow-y: scroll;
    .msg-ai {
      background: white;
      text-align: left;
    }
    .msg-user {
      margin-bottom: 10px;
      text-align: right;
    }
  }
  .ask-content {
    height: 150px;
    background: white;
    border: 1px solid #eee;
    padding: 8px;
    position: sticky;
    bottom: 0;
    textarea {
      border: none;
      width: 100%;
      height: 100%;
      padding: 10px;
      background: #f2f2f2;
      outline: none;
    }
    .opt {
      text-align: right;
      position: absolute;
      inset: auto 10px 10px auto;
    }
  }
</style>

<route lang="yaml">
meta:
  title: 星火ai
  sort: 12
</route>
