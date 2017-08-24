//app.js
//App() 函数用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等。
App({
  //生命周期函数--监听小程序初始化
  //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  //生命周期函数--监听小程序显示
  //当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow: function () {
    // Do something when show.
  },

  //生命周期函数--监听小程序隐藏
  //当小程序从前台进入后台，会触发 onHide
  onHide: function () {
    // Do something when hide.
  },

  //错误监听函数
  //当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  onError: function (msg) {
    console.log(msg);
  },

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
