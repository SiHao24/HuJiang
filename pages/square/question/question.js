// pages/square/question/question.js
var status = true;
Page({
    data: {
        types: ['英语', '日语', '韩语', '法语'],
        English: ['英语词汇', '英语口语', '英语阅读', '综合能力', '四六级', '专四专八', '商务英语', '翻译考试', '考研英语',
            '留学考试', '其他考试', '影视娱乐', '原版书', '欧美文化'
        ],
        Jan: ['初级日语', '日语教材', '日语听说读写', '日语翻译', 'N1', 'N2', 'N3N4N5', '其他日语考试', '日本留学'],
        Koa: ['韩语入门', '韩语口语', '韩语翻译', '留学就业', 'TOPIK初级', 'TOPIK中高级', '其他考试', '韩剧韩综'],
        France: ['法语语法', '法语考试', '留学法国', '翻译互助', '法国文化', '法国口语', '法语听力', '法语写作', '法语语音',
            '法语词汇'
        ],
        currentTab: 0,
        current: 0
    },

    toastShow: function(event) {
        console.log("提交成功");
        status = false
        this.setData({ status: status })　　　　 //setData方法可以建立新的data属性，从而起到跟视图实时同步的效果
        setTimeout(function() {
            wx.navigateBack({
                url: '/pages/search/search/search'
            })
        }, 3000);
    },

    toastHide: function(event) {
        status = true
        this.setData({ status: status })
    },



    /**
     * 页面的初始数据
     */
    navbarTap: function(e) {
        this.setData({
            currentTab: e.currentTarget.dataset.idx
        })
    },

    currentTap: function(e) {
        this.setData({
            current: e.currentTarget.dataset.idx
        })
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