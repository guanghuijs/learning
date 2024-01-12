Component({
	/**
	 * 页面的初始数据
	 */
	data: {
		loaded: false
	},
	methods:{
		handleReady: function ({detail}) {
			this.scene = detail.value;
			const xrFrameSystem = wx.getXrFrameSystem();
			this.camera = this.scene.getElementById('camera').getComponent(xrFrameSystem.Camera);
			this.helmet = {el: this.scene.getElementById('helmet'), color: 'rgba(44, 44, 44, 0.5)'};
			this.miku = {el: this.scene.getElementById('miku'), color: 'rgba(44, 44, 44, 0.5)'};
			this.tmpV3 = new (xrFrameSystem.Vector3)();
		},
		handleAssetsLoaded: function ({detail}) {
			this.setData({loaded: true});
		},
		handleTrackerSwitch: function ({detail}) {
			const active = detail.value;
			const video = this.scene.assets.getAsset('video-texture', 'hikari');
			active ? video.play() : video.stop();
		}
	}
})