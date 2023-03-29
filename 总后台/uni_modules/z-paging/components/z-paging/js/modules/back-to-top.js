// [z-paging]点击返回顶部view模块
import u from '.././z-paging-utils'

const ZPBackToTop = {
	props: {
		//自动显示点击返回顶部按钮，默认为否
		autoShowBackToTop: {
			type: Boolean,
			default: u.gc('autoShowBackToTop', false)
		},
		//点击返回顶部按钮显示/隐藏的阈值(滚动距离)，单位为px，默认为400rpx
		backToTopThreshold: {
			type: [Number, String],
			default: u.gc('backToTopThreshold', '400rpx')
		},
		//点击返回顶部按钮的自定义图片地址，默认使用z-paging内置的图片
		backToTopImg: {
			type: String,
			default: u.gc('backToTopImg', '')
		},
		//点击返回顶部按钮返回到顶部时是否展示过渡动画，默认为是
		backToTopWithAnimate: {
			type: Boolean,
			default: u.gc('backToTopWithAnimate', true)
		},
		//点击返回顶部按钮与底部的距离，注意添加单位px或rpx，默认为160rpx
		backToTopBottom: {
			type: [Number, String],
			default: u.gc('backToTopBottom', '160rpx')
		},
		//点击返回顶部按钮的自定义样式
		backToTopStyle: {
			type: Object,
			default: function() {
				return u.gc('backToTopStyle', {});
			},
		},
		//iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向，默认为是
		enableBackToTop: {
			type: Boolean,
			default: u.gc('enableBackToTop', true)
		},
	},
	data() {
		return {
			backToTopClass: 'zp-back-to-top zp-back-to-top-hide',
			lastBackToTopShowTime: 0,
			showBackToTopClass: false,
		}
	},
	computed: {
		finalEnableBackToTop() {
			return this.usePageScroll ? false : this.enableBackToTop;
		},
		finalBackToTopThreshold() {
			return u.convertTextToPx(this.backToTopThreshold);
		},
		finalBackToTopStyle() {
			let tempBackToTopStyle = this.backToTopStyle;
			if (!tempBackToTopStyle.bottom) {
				tempBackToTopStyle.bottom = this.windowBottom + u.convertTextToPx(this.backToTopBottom) + 'px';
			}
			if(!tempBackToTopStyle.position){
				tempBackToTopStyle.position = this.usePageScroll ? 'fixed': 'absolute';
			}
			return tempBackToTopStyle;
		},
	},
	methods: {
		//点击返回顶部
		_backToTopClick() {
			!this.backToTopWithAnimate && this._checkShouldShowBackToTop(1, 0);
			this.scrollToTop(this.backToTopWithAnimate);
		},
		//判断是否要显示返回顶部按钮
		_checkShouldShowBackToTop(newVal, oldVal) {
			if (!this.autoShowBackToTop) {
				this.showBackToTopClass = false;
				return;
			}
			if (newVal !== oldVal) {
				if (newVal > this.finalBackToTopThreshold) {
					if (!this.showBackToTopClass) {
						this.showBackToTopClass = true;
						this.lastBackToTopShowTime = new Date().getTime();
						setTimeout(() => {
							this.backToTopClass = 'zp-back-to-top zp-back-to-top-show';
						}, 300)
					}
				} else {
					if (this.showBackToTopClass) {
						const currentTime = new Date().getTime();
						let dalayTime = 300;
						if(currentTime - this.lastBackToTopShowTime < 500){
							dalayTime = 0;
						}
						this.backToTopClass = 'zp-back-to-top zp-back-to-top-hide';
						setTimeout(() => {
							this.showBackToTopClass = false;
						}, dalayTime)
					}
				}
			}
		},
	}
}

export default ZPBackToTop;
