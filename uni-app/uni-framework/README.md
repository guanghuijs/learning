## 模版介绍

由于公司各家小程序都需要重构，为了后续维护和更新及新同事的加入，在开发时需要统一些规范。

*   该模版是基于 `uniapp` `vue2` 的版本进行开发,不采用vue3的原因是目前(2014/9/10)有一些插件或是ui框架对vue3的支持还不完善,已经之后部分项目会涉及多语言及app原生更能的应用如:蓝牙,nfc等功能。
*   该模版默认使用的ui框架是 `uviiew` [链接](https://www.uviewui.com/)
*   该模版只是作为商城端的模版,若要用做其他项目的开发可以修改文件目录使用。

## 风格化

*   为了更好的团队协作与高效的开发和维护,需要统一页面和组件的风格。

> 页面风格化

    <template>
    </template>

    <script>
    	export default {
    		data() {
    			return {}
    		},
    		components: {},
    		computed: {},
    		watch: {},
    		onLoad() {},
    		onShow() {},
    		methods: {},
    		onReachBottom() {},
    		onPageScroll() {},
    		onUnload() {}
    	}
    </script>

    <style lang="scss" scoped>
    </style>

> 组件风格化

```
<template>
</template>

<script>
	export default {
		props: {},
		data() {
			return {}
		},
		components: {},
		computed: {},
		watch: {},
		mounted() {},
		methods: {},
	}
</script>

<style lang="scss" scoped>
</style>

```

> 编辑器配置及使用

*   右键点击需要创建vue的文件夹 -> 【新建】 —> 【vue文件】 —> 【在弹出的窗口右上角点击\[自定义模版]】 —> 【在打开的vue文件中创建两个vue文件,将模版分别放在两个vue文件里】

<img src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/3479202491191849.png" width="600" alt="参考代码">

<img src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/578120249119194.png" width="600" alt="参考代码">

*   这样下次在创建页面或者组件的时候就可以直接使用模版

> 格式化

*   为保证代码格式化的风格一致，统一使用 `HBuilderX` 中的代码格式化 `ctrl + k` 进行代码的统一。
*   代码缩进统一为一个tab等于两个空格，编辑器设置为 HBuilderX —> 【编辑】 —> 【缩进】 —> 【tab宽度】，进行设置。

## 注释规范

> 插件安装

**为了更好保证项目的易读性,新重构的项目都需要有注释。**

*   点击 [链接]('https://ext.dcloud.net.cn/plugin?id=6815') 安装 `HBuilderX` 插件。 `https://ext.dcloud.net.cn/plugin?id=6815`
*   安装好后,在编辑器中找到【工具】—> 【安装插件】—> 【已安装插件】—> 【annotation-注释插件】—> 【配置】

<img src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/86762024911103058.png" width="600" alt="参考代码">

<img src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/67262024911103215.png" width="600" alt="参考代码">

*   需要配置的地方就是红色框中的名字,最好是设置成自己的名字或是名字的英文名字缩写,方便后续问题的排查与追责

> 页面文件注释

*   在创建一个页面或是一个组件时 **都需要在文件头生成后注释,填写该文件的作用**  生成注释快捷键 mac `ctrl + i` windows `ctrl + alt + i` 不生效的话 鼠标右键能找到。

<img src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/49602024911104020.png" width="600" alt="参考代码">

> 参数注释

*   在 `data` 中的参数都需要写单行参数注释,方便别人理解用途。

<img src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/34612024911104934.png" width="600" alt="参考代码">

> 函数注释

*   在创建函数时也需要对函数添加注释,需要填写的部分分别是 函数作用，函数传值类型，函数的返回值。添加函数注释的快捷键 mac `ctrl + t`, windows `ctrl + alt + t` 不生效的话 鼠标右键能找到。对于函数注释如果有不会的需要自行百度学习 **函数必须添加注释**

<img src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/39132024911105747.png" width="600" alt="参考代码">

## 文件相关

> 文件结构

    ├─ common
    │   ├─ api 「公用api文件,该文件只能存放一些全局公共的api」
    │   ├─ iconfont 「项目iconfont图标文件[https://www.iconfont.cn/invite?type=project&token=wzutILqJZWKuMYnI#邀请你加入「deom」]」
    │   ├─ request 「请求封装文件」
    │   │   ├─ index 「请求封装」
    │   │   ├─ method 「请求方式」
    │   ├─ utils 
    │   │   ├─ page 「页面通用公共函数」
    │   │   ├─ system 「系统公共函数,挂载全局,不建议修改，若是要挂载其他函数到全局请自行添加文件」
    │   └─ config 「项目配置文件」
    ├─ components  「项目公共组件存放位置」
    │   ├─ HeadToast 「头部弹窗提示组件」
    │   ├─ Toast 「自定义Toast」
    │   └─ ShowLoading 「自定义加载效果组件,与请求方式配合使用」
    ├─ pages  「主包」
    │   ├─ billboard 「开屏广告页,项目没有开屏广告可以不用管」
    │   ├─ classify 「一级分类页」
    │   ├─ extend 「第五个底部tab扩展,项目如果没有五个tab可以不用管」
    │   ├─ index 「首页」
    │   ├─ login 「登录页」
    │   ├─ myCart 「购物车页」
    │   ├─ personal 「个人中心页」
    │   ├─ register 「注册页」
    │   ├─ updPass 「修改密码页」
    ├─ pkg_main  「主分包」
    │   ├─ pages 「分包的页面集合文件」
    │   │   ├─ goodsDesc 「商品详情」
    │   │   └─ subCat 「二级分类,如果项目没有就不管」
    │   └─ static 「分包静态文件」
    ├─ static  「主包静态资源文件」
    ├─ store  「vuex」
    │   ├─ modules 「各模块vuex」
    │   │   └─ system 「系统vuex文件」
    │   └─ index 「vuex总入口」
    ├─ uni_modules  「插件集合」
    ├─ unpackage  「打包,编译文件,不要上传git」
    ├─ .gitignore  「上传排除文件」
    ├─ App  「主页面」
    ├─ index  「主html」
    ├─ main  「入口文件」
    ├─ manifest  「项目配置文件」
    ├─ pages  「路由文件」
    ├─ uni  「颜色配置文件」
    └─ README.md  

> 数据请求根据不同人的喜好设置了 **直接调用** 和 **和api调用** 两种方式

*   直接调用
    *   在页面中引入 `uni_get`, `uni_post`, 代码 `import {uni_get,uni_post
        } from '@/common/request/method.js'` 就可以直接填写参数进行请求。

<img src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/7586202491114411.png" width="400" alt="参考代码">

*   `uni_get`, `uni_post` 参数

|    字段   |   描述   |   类型   |
| :-----: | :----: | :----: |
|   url   | 请求链接路由 | String |
|   data  |  请求参数  | String |
| loading |  加载效果  | String |

*   `loading` 可选值

| loading值 |   描述  |   类型   |
| :------: | :---: | :----: |
|    max   |  全屏加载 | String |
|   mini   | 自定小加载 | String |
|    byo   |  原生加载 | String |

不填写 loading 值默认不展示任何加载效果

*   api调用

    *   如果是接口是项目公共接口,例如 字典接口,后端配置接口等可以写在【common】—>【api】文件里,其他接口api则需要在页面文件下单独建立api.js 文件进行存放api接口。api调用方式传参如上。

    <img src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/7586202491114411.png" width="400" alt="参考代码">

    <img src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/5125202491114531.png" width="400" alt="参考代码">

    <img src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/5336202491114547.png" width="400" alt="参考代码">

> 文件创建规范

*   组件创建规范

    *   如果组件是公共组件或者多页面通用时，可以将组件创建在  `components` 中,并且命名规则为 **大驼峰** 。
    *   如果组件只是在单一页面中使用,并不和其他页面有交际的话，例如：页面很复杂对页面的拆块组件等，就需要在当前页面文件下创建组件，命名规则不做强制要求。
*   文件创建规范

    *   主包 `pages` 除了模版中自带的那些页面,如果不是特殊需求不建议在里面再创建页面,页面的命名规范为 **小驼峰** 。
    *   单页面文件参考

    <!---->

        ├─ homePage 「创建了一个名为 homePage 的页面文件」
        │   ├─ index.vue 「index.vue 就是这个页面的主入口文件,建议都使用文件下的index作为主入口文件」
        │   ├─ api.js 「如果是api调用进口的话需要创建一个api.js 的文件用于存放当前页面的api接口」
        │   ├─ widget1.vue 「如果该页面有一个只属于当前页面的组件时就直接创建在页面文件里」
        │   ├─ widget2.vue 「其他属于该页面的组件」
        │   └─ widget3.vue 「其他属于该页面的组件」

> 分包创建

*   为了适配微信小程序端每个包不能超过 **2M** 的需求项可能会出现多个分包,主包 `pages` 如果不是特殊需求，不建议再往里面加页面。
*   分包的规范
    *   如果项目添加其他不同的板块时就可以考虑创建分包,分包的名命规范为 `pkg` 开头,后面添加 `_包名`,包名是多单词的话使用 **小驼峰** 。模版中自带了一个 `pkg_main` 主要分包,
    *   分包目录参考

<!---->

    ├─ pkg_delivery 「创建了一个配送的分包」

<!---->

    │   ├─ static 「分包的静态文件存放文件」
    │   ├─ components 「如果分包也存在多个页面共用的组件时,可以创建components存放分包公共组件」
    │   ├─ pages 「分包的页面存放处」
    │   │   ├─ page1 「页面1」
    │   │   ├─ page2 「页面2」
    │   │   ├─ page3 「页面3」
    ...

## 模板扩展功能

> 头部弹窗

*   使用  `this.$sys.HeadToast.success(title, content,url,second)`  并且在页面中引入 `<HeadToast></HeadToast>` 可以调用头部弹窗功能。 `<HeadToast></HeadToast>` 不需要注册可以直接引用
*   `this.$sys.HeadToast` 可以调用不同样式的头部弹窗。

|    调用函数    |     描述    |
| :--------: | :-------: |
| .success() | 成功样式的头部弹窗 |
|  .error()  | 失败样式的头部弹窗 |
| .warning() | 警告样式的头部弹窗 |
|  .notice() | 通知样式的头部弹窗 |

*   传入参数

|    字段   |     描述     |   类型   |
| :-----: | :--------: | :----: |
|  title  |   头部弹窗标题   | String |
| content |   头部弹窗内容   | String |
| navigation |   当前窗口类型('custom'自定义导航窗口)   | String |
|   url   | 点击头部弹窗跳转链接 | String |
|  second |   弹窗持续时间   | Number |

*   由于是函数式传参,如果过要跳过某个参数传下一个参数时需要有默认值。

> 自定义Toast

*   使用  `this.$sys.Toast.success(content,second);`  并且在页面中引入 `<Toast></Toast>` 可以调用自定义Toast功能。 `<Toast></Toast>` 不需要注册可以直接引用。
*   `this.$sys.Toast` 可以调用不同样式的自定义Toast。

|    调用函数    |       描述      |
| :--------: | :-----------: |
| .success() | 成功样式的自定义Toast |
|  .error()  | 失败样式的自定义Toast |

*   传入参数

|    字段   |       描述      |   类型   |
| :-----: | :-----------: | :----: |
| content | 自定义Toast 提示内容 | String |
|  second |  自定义Toast持续时间 | Number |

> 自定义加载效果

*   使用  `this.$sys.loading.max();`  并且在页面中引入 `<ShowLoading></ShowLoading>` 可以调用自定义加载样式。 `<ShowLoading></ShowLoading>` 不需要注册可以直接引用。
*   `this.$sys.loading ` 可以调用不同样式的自定义加载效果。

|   调用函数  |    描述    |
| :-----: | :------: |
|  .max() |  全屏加载效果  |
| .mini() | 自定义小加载效果 |

*   若是在请求接口需要调用加载效果的话,可以直接设置请求方式中的  `loading` 值。

## 其他约束

*   为了提高代码的易读单vue文件代码尽量不要超过 **1000** 行。
*   禁止在 html 标签上使用 .length 语法。
    *   建议做法是引用 【common】—> 【utils】—>【page.js】—> isArrayZero 函数作为判断,如果在 html 标签上使用 .length 语法报错时打包移动端会出现乱码。
*   css样式编写时尽量减少嵌套和使用相同css变量名,推荐使用外层只嵌套一层。

      <img src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/39942024911163024.png" width="300" alt="参考代码">
      
*   数据提交地方的按钮需要做loading效果,就是点击提交按钮后，必须等接口返回后 才可以继续点击、不管服务器返回200还是500。

> 后续会根据项目的需求进行持续的更新该模版



## 版本更新

### 【版本】1.0.0
> 更新内容
* 模版第一次上传


### 【版本】1.0.1
> 更新内容
* 添加了商品详情页的文件,空状态组件。
* 新增对按钮加载的约束。


### 【版本】1.0.2
> 更新内容
* 添加图片,视屏上传组件。
* 使用方式,将【components】—> 【ImgUpload】或【VideoUpload】组件直接下载下来放到 【components】文件夹里，打开组件将获取oss获取阿里云签名的接口换了。
<img src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/871920241028174827.jpeg" width="400" alt="参考代码">


### 【版本】1.0.3  2024/12/16
> 更新内容
* 图片视屏组件新增每行显示图片张数和禁用，

|    字段   |       描述      |   类型   |
| :-----:  | :-----------:   | :----:  |
| row      | 每行显示几张图片   | String  |
| disabled |  是否禁用         | Boolean |
|  radius  |  圆角            | String |

* 修复，HeadToast 提示组件在tab页中弹出高度错误的问题，现在如果是在自定义头部页面中`navigationStyle": "custom`使用时需要加 `custom` 参数
* 例：`this.$sys.HeadToast.error('系统提示', '请输入正确的手机号', 'custom');`  如果不是自定义头部导航页面时不加`custom`