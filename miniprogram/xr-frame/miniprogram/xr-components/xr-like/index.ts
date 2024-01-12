// components/xr-1/index.ts
Component({
	properties: {},
	data: {
	},
	methods: {
		handleAssetsLoaded: function ({detail}) {
			// this.setData({loaded: true});
			// const el = this.scene.getElementById('tracker');
			// this.tracker = el.getComponent(wx.getXrFrameSystem().ARTracker);
			// this.gesture = -1;
		},
		handleTick: function() {
			if (!this.tracker) return;
			const {gesture, score} = this.tracker;
			if (score < 0.5 || gesture === this.gesture) {
				return;
			}
			this.gesture = gesture;
			gesture === 6 && wx.showToast({title: '好！'});
			gesture === 14 && wx.showToast({title: '唉...'});
		}
	}
})