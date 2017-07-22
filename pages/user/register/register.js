// pages/user/register/register.js
var status = true;
Page({

    /**
     * 页面的初始数据
     */
    data: {},
    login: function() {
        wx.navigateBack({
            url: '/pages/user/user'
        })
    },

    toastShow: function(event) {
        status = false
        console.log('注册成功!');
        this.setData({ status: status })　　　　 //setData方法可以建立新的data属性，从而起到跟视图实时同步的效果
        setTimeout(function() {
            wx.navigateBack({
                url: '/pages/user/user'
            })
        }, 3000);
    },

    toastHide: function(event) {
        status = true
        this.setData({ status: status })
    },

    data: {
        status: status　　　　　　　　　　　　 //data里面的属性可以传递到视图
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})