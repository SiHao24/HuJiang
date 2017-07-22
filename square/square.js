// pages/square/square.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navbar: ['最热', '最新'],
        currentTab: 0,
        areaIndex: 0,
        area: ['英语', '日语', '韩语', '法语'],
        hotest: [{
                id: 0,
                'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136220&di=9e545f019ff063f2e2d40ff093e69ca4&imgtype=jpg&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fcaef76094b36acaf90900d7d76d98d1001e99c3b.jpg',
                'name': '暗香疏影49938',
                "type": '综合能力',
                "text": '我住在宿舍里，学校宿舍没有网，沪江的课程可以下载到手机里离线听吗？',
                "apply": '6人回答'
            },
            {
                id: 1,
                'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136231&di=df09010b54644a6d6de64813e448295a&imgtype=jpg&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F63d0f703918fa0ec7f92ff8c2c9759ee3c6ddbde.jpg',
                'name': '青涩不及当初',
                "type": '英语词汇',
                "text": '一般英语考什么？',
                "apply": '4人回答'
            },
            {
                id: 2,
                'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501135857&di=fa29ccd79a69991fed6e61aa53a2636a&imgtype=jpg&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F562c11dfa9ec8a13165ec961fd03918fa1ecc0ef.jpg',
                'name': '暗香疏影49938',
                "type": '综合能力',
                "text": '我住在宿舍里，学校宿舍没有网，沪江的课程可以下载到手机里离线听吗？',
                "apply": '6人回答'
            },
            {
                id: 3,
                'url': "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501135905&di=f05bd295743084fe249d3727169d58fb&imgtype=jpg&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F5ab5c9ea15ce36d371ed1db130f33a87e850b142.jpg",
                'name': '老老',
                "type": '综合能力',
                "text": '王翰怎么说？',
                "apply": '4人回答'
            },
            {
                id: 4,
                'url': "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136337&di=3901868532c26c893342ba8746ce3c07&imgtype=jpg&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F94cad1c8a786c9177d1fc8b8c33d70cf3bc75716.jpg",
                'name': '暄翔',
                "type": '综合能力',
                "text": '我在背单词软件上复习不小心点了标记认识？',
                "apply": '4人回答'
            },
            {
                id: 5,
                'url': "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136325&di=b58a79af6074b024887dccba02cdb91d&imgtype=jpg&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fe61190ef76c6a7ef1d0732a7f7faaf51f3de660a.jpg",
                'name': 'uyj85cdaa33',
                "type": '英语词汇',
                "text": '姜可心张恒哲一直会守候你？',
                "apply": '1人回答'
            },
            {
                id: 6,
                'url': "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501135997&di=b744bfb0dc901894d893a416377e3f2f&imgtype=jpg&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F03087bf40ad162d99d67fb9d1bdfa9ec8b13cda2.jpg",
                'name': 'uyj85cdaa33',
                "type": '英语词汇',
                "text": '姜可心张恒哲一直会守候你？',
                "apply": '1人回答'
            },
            {
                id: 7,
                'url': "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136022&di=60955fc5afa9f938cfc0d7b45d3c765d&imgtype=jpg&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8c1001e93901213f7fced75d5ee736d12e2e95b6.jpg",
                'name': 'uyj85cdaa33',
                "type": '英语词汇',
                "text": '姜可心张恒哲一直会守候你？',
                "apply": '1人回答'
            },
            {
                id: 8,
                'url': "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136073&di=09a42cb8dbdf58230fb24b2ff354bc96&imgtype=jpg&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F54fbb2fb43166d22ce538d154c2309f79052d20f.jpg",
                'name': 'uyj85cdaa33',
                "type": '英语词汇',
                "text": '姜可心张恒哲一直会守候你？',
                "apply": '1人回答'
            },
        ],
        newest: [{
                id: 0,
                'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136337&di=3901868532c26c893342ba8746ce3c07&imgtype=jpg&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F94cad1c8a786c9177d1fc8b8c33d70cf3bc75716.jpg',
                'name': 'urtv4ihuysk',
                "type": '英语口语',
                "text": '学口语是不是要词汇量足？基础好？',
                "apply": '待回答'
            },
            {
                id: 1,
                'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136325&di=b58a79af6074b024887dccba02cdb91d&imgtype=jpg&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fe61190ef76c6a7ef1d0732a7f7faaf51f3de660a.jpg',
                'name': 'uku6ezbexruk',
                "type": '欧美文化',
                "text": '有首歌开始是oh~so damn i.got feeling you,i got feeling ah no no no 然后是一段一个男的唱的rap这是什么 ？',
                "apply": '待人回答'
            },
            {
                id: 2,
                'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501135997&di=b744bfb0dc901894d893a416377e3f2f&imgtype=jpg&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F03087bf40ad162d99d67fb9d1bdfa9ec8b13cda2.jpg',
                'name': '雨亦是泪',
                "type": '英语口语',
                "text": '2017.07.16的每日一句有个单词发音错了。says应该是发[se-z]不是[sei-z。say原型发[sei],says/said发[se-z]。',
                "apply": '6人回答'
            },
            {
                id: 3,
                'url': "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136315&di=0debe0cdc33a5f7997a6a3e9ba682e51&imgtype=jpg&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F77094b36acaf2edd1d88d368871001e939019332.jpg",
                'name': '夜晚星辰79867',
                "type": '英语词汇',
                "text": '王翰怎么说？',
                "apply": '4人回答'
            },
            {
                id: 4,
                'url': "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136604&di=4b5e8e19fac0205881a037292342955b&imgtype=jpg&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F6a63f6246b600c33091c5a49104c510fd8f9a1ce.jpg",
                'name': '暄翔',
                "type": '综合能力',
                "text": '我在背单词软件上复习不小心点了标记认识？',
                "apply": '4人回答'
            },
            {
                id: 5,
                'url': "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136585&di=43d8f7110171943db0c063d67ddddc98&imgtype=jpg&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff703738da9773912fe4b01e0f2198618377ae2c6.jpg",
                'name': 'uyj85cdaa33',
                "type": '英语词汇',
                "text": '姜可心张恒哲一直会守候你？',
                "apply": '1人回答'
            },
            {
                id: 6,
                'url': "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136567&di=6ede3efd05b6d6a6c5ae559a94c04b64&imgtype=jpg&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd058ccbf6c81800ae9ca0d8fbb3533fa828b4700.jpg",
                'name': 'uyj85cdaa33',
                "type": '英语词汇',
                "text": '姜可心张恒哲一直会守候你？',
                "apply": '1人回答'
            },
            {
                id: 7,
                'url': "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136547&di=499ea07c2af253ca03ddc0961b9d9d62&imgtype=jpg&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F9922720e0cf3d7cafc15baf7f81fbe096a63a954.jpg",
                'name': 'uyj85cdaa33',
                "type": '英语词汇',
                "text": '姜可心张恒哲一直会守候你？',
                "apply": '1人回答'
            },
            {
                id: 8,
                'url': "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136661&di=6fe0ad906f268acb4b2cff11c641ee9a&imgtype=jpg&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F79f0f736afc37931349a02a8e1c4b74542a91144.jpg",
                'name': 'uyj85cdaa33',
                "type": '英语词汇',
                "text": '姜可心张恒哲一直会守候你？',
                "apply": '1人回答'
            },
        ]
    },

    navbarTap: function(e) {
        this.setData({
            currentTab: e.currentTarget.dataset.idx
        })
    },

    bindPickerChange: function(e) {
        this.setData({
            areaIndex: e.detail.value
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
    ask: function() {
        wx.navigateTo({
            url: '/pages/square/question/question'
        })
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