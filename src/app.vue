<template>
  <div class="app">
    <p v-bind:title="now">鼠标悬停显示时间</p>
    {{ message }}
    {{ reversedMessage }}
    <p v-once>我不会变化的：{{ message }}</p>
    <p v-if="seen">现在你看到我了</p>
    <button v-on:click="reverseMessage">反转消息</button>
    <input type="text" v-model="message">
    <p>{{rawHtml}}</p>
    <p v-html="rawHtml"></p>
    <button v-bind:disabled="isButtonDisabled">Button</button>
    <ol>
      <grocery
        class="grocery"
        v-for="grocery in groceryList"
        v-bind:key="grocery.id"
        v-bind:grocery="grocery"
        v-bind:fontSize="groceryFontSize"
        v-on:enlarge-text="enlargeGroceryFontSize"
      />
    </ol>
    <custom-input
      v-bind:searchValue="searchValue"
      placeholder="please input search value..."
      v-on:input="searchValue = $event"
    />
    <alert-box>
      Something bad happened.
    </alert-box>
    <select v-model="selectedCmp">
      <option disabled value="">请选择</option>
      <option value="home">Home</option>
      <option value="post">Post</option>
      <option value="archive">Other</option>
    </select>
    <component :is="selectedCmp"></component>
  </div>
</template>

<script>
import Grocery from './components/grocery.vue';
import CustomInput from './components/custom-input.vue';
import AlertBox from './components/alert-box.vue';
import Home from './components/home.vue';
import Post from './components/post.vue';
import Archive from './components/archive.vue';

import './css/app.css';

export default {
  name: 'App',
  data() {
    return {
      message: 'vue app.',
      seen: true,
      rawHtml: '<span style="color: red">This should be red.</span>',
      isButtonDisabled: undefined,
      groceryList: [
        {id: 0, name: '蔬菜'},
        {id: 1, name: '奶酪'},
        {id: 2, name: '随便其它什么人吃的东西'},
      ],
      groceryFontSize: 12,
      searchValue: '',
      selectedCmp: '',
    };
  },
  components: {
    'grocery': Grocery,
    'custom-input': CustomInput,
    'alert-box': AlertBox,
    'home': Home,
    'post': Post,
    'archive': Archive,
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('');
    },
    now: function() {
      return new Date().toLocaleString();
    },
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    },
    enlargeGroceryFontSize: function(size) {
      this.groceryFontSize = this.groceryFontSize + size;
    },
  },
};
</script>
