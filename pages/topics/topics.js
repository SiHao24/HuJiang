// pages/topics/topics.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList: [],
        navbar: ['正在进行', '往期回顾'],
        currentTab: 0,
        areaIndex: 0,
        area: ['英语', '日语', '韩语', '法语'],
        now: [{
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136735&di=b36492c7e2173533f5973e1e167d0e5e&imgtype=jpg&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd31b0ef41bd5ad6ec7b2e36b8bcb39dbb7fd3ce3.jpg',
                'topics': "HeyJoe助你讲流利英语",
                "count": "226个提问 | 8695人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136746&di=2ecc34592348d5b4ae0e8b10b667d176&imgtype=jpg&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F3c6d55fbb2fb431616fafdfb2aa4462308f7d34e.jpg',
                'topics': "四六级写作名师答疑会",
                "count": "45个提问 | 879人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136756&di=1ae279eba64b0929e02467b5e5053416&imgtype=jpg&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F83025aafa40f4bfbcd5c19d5094f78f0f63618a6.jpg',
                'topics': "#四六级#口语考试答疑区",
                "count": "17个回答 | 151人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136766&di=4781bf001038e937d72a76591b7dd0b1&imgtype=jpg&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F503d269759ee3d6d2d1a004a49166d224e4ade57.jpg',
                'topics': "#四六级#口语考试答疑区",
                "count": "17个回答 | 151人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136777&di=c6c3f92ecff22abc1f72081b6a23ca6f&imgtype=jpg&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fcaef76094b36acaf9460117d76d98d1000e99cab.jpg',
                'topics': "英语考试考试答疑区",
                "count": "8个提问 | 147人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136792&di=c340077b9689c90b4379159e5911865a&imgtype=jpg&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8d5494eef01f3a29f719524f9325bc315d607c5a.jpg',
                topics: "#四六级#口语考试答疑区",
                "count": "17个回答 | 151人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136931&di=a8bd44acded1b39b9012675f36fabece&imgtype=jpg&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff703738da9773912f93604e0f2198618367ae21b.jpg',
                'topics': "#一个月干掉四六级#问答社区",
                "count": "120个问题 | 1077人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136940&di=82e3233fb54ef5608fe2173a6a8097ee&imgtype=jpg&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fc8ea15ce36d3d5392a318e423087e950352ab027.jpg',
                'topics': "如何高效地学习英语？",
                "count": "30个提问 | 970人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136952&di=7b08807e26b1842a5deb0f7eb101ca0f&imgtype=jpg&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0ff41bd5ad6eddc4488e357a33dbb6fd536633c1.jpg',
                'topics': "Toto老师教你学语法",
                "count": "59个提问 | 634人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136966&di=33ab4a83659437107a00fc51245adb0f&imgtype=jpg&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F18d8bc3eb13533fa73d212afa2d3fd1f40345bcf.jpg',
                'topics': "我们都爱英美剧",
                "count": "25个提问 | 456人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501137086&di=c3e1d488afb6e20e410d9a773fb650b4&imgtype=jpg&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F48540923dd54564e761e64b8b9de9c82d1584f3c.jpg',
                'topics': "#四六级#口语考试答疑区",
                "count": "17个回答 | 151人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501137075&di=e5d2cca56ea48b1cc0d19d9df5615dba&imgtype=jpg&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb3b7d0a20cf431ad78bcc3b84136acaf2fdd98c1.jpg',
                'topics': "四六级考后吐槽狂欢趴",
                "count": "118个提问 | 2363人参与"
            }
        ],
        past: [{
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501137065&di=2a294046043d60dc10ca31470d28b3b2&imgtype=jpg&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fcdbf6c81800a19d85102048439fa828ba61e462a.jpg',
                'topics': "四六级备考名师答疑",
                "count": "31个提问 | 444人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501137052&di=68a2fccd9eebb68b34919f40360ff660&imgtype=jpg&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fac345982b2b7d0a2bdc3841cc1ef76094b369a2d.jpg',
                'topics': "那年高考，你印象最深刻的回忆",
                "count": "10个提问 | 97人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501137037&di=c362066692ba61bd5b752d827667e0f7&imgtype=jpg&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4b90f603738da97770f907aaba51f8198718e359.jpg',
                'topics': "四六级查分吐槽大会",
                "count": "34个提问 | 665人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136735&di=b36492c7e2173533f5973e1e167d0e5e&imgtype=jpg&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd31b0ef41bd5ad6ec7b2e36b8bcb39dbb7fd3ce3.jpg',
                'topics': "四六级查分答疑",
                "count": "118个提问 | 151人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501137086&di=c3e1d488afb6e20e410d9a773fb650b4&imgtype=jpg&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F48540923dd54564e761e64b8b9de9c82d1584f3c.jpg',
                'topics': "语言学习与难题？快向学霸A+讨经验",
                "count": "4个提问 | 28人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136777&di=c6c3f92ecff22abc1f72081b6a23ca6f&imgtype=jpg&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fcaef76094b36acaf9460117d76d98d1000e99cab.jpg',
                topics: "干掉英语，就问大魔王!",
                "count": "29个提问 | 306人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136766&di=4781bf001038e937d72a76591b7dd0b1&imgtype=jpg&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F503d269759ee3d6d2d1a004a49166d224e4ade57.jpg',
                'topics': "四六级考后吐槽狂欢趴",
                "count": "441个提问 | 2746人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136766&di=4781bf001038e937d72a76591b7dd0b1&imgtype=jpg&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F503d269759ee3d6d2d1a004a49166d224e4ade57.jpg',
                'topics': "#四六级#翻译写作名师答疑专区",
                "count": "24个提问 | 101人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136756&di=1ae279eba64b0929e02467b5e5053416&imgtype=jpg&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F83025aafa40f4bfbcd5c19d5094f78f0f63618a6.jpg',
                'topics': "#四六级#阅读名师",
                "count": "11个提问 | 327人参与"
            },
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1501136746&di=2ecc34592348d5b4ae0e8b10b667d176&imgtype=jpg&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F3c6d55fbb2fb431616fafdfb2aa4462308f7d34e.jpg',
                'topics': "#四六级#听力名师答疑区",
                "count": "16个提问 | 75人参与"
            }
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
        wx.request({
                url: "https://www.easy-mock.com/project/595f3f139adc231f357b0622",
                method: "GET",
                success: function(res) {
                    console.log(res);
                }
            })
            //     setTimeout(() => {
            //         this.setData({
            //             hidden: true
            //         })
            //     }, 3000)
        var api_url = 'https://cnodejs.org/api/v1/topics';
        api_url += '?tab=all&page=0&limit=10';
        console.log(api_url);
        var that = this;
        wx.request({
            url: api_url,
            method: "GET",
            success: function(res) {
                console.log();
                that.setData({
                    hidden: true,
                    postsList: res.data.data
                })
            }
        })

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