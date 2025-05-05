<template>
</template>
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";

	// 骨架屏动画--白底灰影
	.skeleton {
		background-image: linear-gradient(90deg, #ffffff 25%, #f4f4f4 37%, #ffffff 63%);
		background-size: 400% 100%;
		animation: loading 2s ease infinite;
	}

	@keyframes loading {
		0% {
			background-position: 100% 50%
		}

		to {
			background-position: 0 50%
		}
	}

	// 骨架动画--灰底白影
	.ossature {
		background-image: linear-gradient(90deg, #f4f4f4 25%, #ffffff 37%, #f4f4f4 63%);
		background-size: 400% 100%;
		animation: loading 2s ease infinite;
	}
</style>


<style>
	/*
	字体图标
	由于app端字体图标不支持在min.js中应用所以需要以css的方式在app.vue中全局引用，
	注：在添加图标替换文件时需要修改 iconfont.css 中引用路径的iconfont 更改为@/common/iconfont/iconfont
	*/
	@import url("@/common/iconfont/iconfont.css");
</style>