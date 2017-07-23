# HuJiangTeach
小程序模仿--沪江问答<br>
***
![](https://img.shields.io/badge/language-js-orange.svg)
![](https://img.shields.io/badge/platform-wechat-lightgrey.svg)


## 从一个hello world开始
微信开发者工具生成 目录如下：
```
.
|-- app.js
|-- app.json
|-- app.wxss
|-- pages     
|   |-- index   # 主页
|   |   |-- index.js
|   |   |-- index.json
|   |   |-- index.wxml
|   |   `-- index.wxss
|   `-- log # 日志页面
|   |   |-- log.js
|   |   |-- log.json
|   |   |-- log.wxml
|   |   `-- log.wxss
`-- utils       # 工具
    `-- util.js
```
大体为:
每一个page即是一个页面文件 ，每个页面有一个js/wxml/wxss/json文件 规定：**描述页面的这四个文件必须具有相同的路径与文件名。**<br>
全局下同路，为公共的逻辑，样式，配置<br>
与html不同:用`view text navigator` 代替 `div span a`

## 开发者文档走马观花
**app.json:** 注册pages window tabBar networkTimeout<br>
[组件说明](https://mp.weixin.qq.com/debug/wxadoc/dev/component/)<br>
***.js:** 作为逻辑层 与wxml交互 有着丰富的 
网络，
媒体，
文件，
数据缓存，
位置，
设备，
界面...的api<br>
[官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/api/)<br>
***.wxml:** 数据驱动的视图层 +  微信提供了大量的组件 表单 导航 媒体 ...
## 一切具备 马上动工
生成目录
```
.
|-- app.js
|-- app.json
|-- app.wxss
|-- common.js #公用js
|-- images #存放项目图片
|-- style
|   |-- weui.wxss   # 引入weui样式  万一你自己不想写css样式呢
|-- pages
|   |-- search   # 首页
|   |   |-- search.js
|   |   |-- search.json
|   |   |-- search.wxml
|   |   `-- search.wxss
|   |   |--search # 搜索
|   |   |   |-- search.js
|   |   |   |-- search.json
|   |   |   |-- search.wxml
|   |   |   `-- search.wxss
|   |--square   # 广场
|   |   |-- square.js
|   |   |-- square.json
|   |   |-- square.wxml
|   |   `-- square.wxss
|   |   |--question # 提问
|   |   |   |-- question.js
|   |   |   |-- question.json
|   |   |   |-- question.wxml
|   |   |   `-- question.wxss
|   |--topics  # 话题
|   |   |-- topics.js
|   |   |-- topics.json
|   |   |-- topics.wxml
|   |   `-- topics.wxss
|   |--user   # 我的
|   |   |-- user.js
|   |   |-- user.json
|   |   |-- user.wxml
|   |   `-- user.wxss
|   |   |--register # 注册登录
|   |   |   |-- register.js
|   |   |   |-- register.json
|   |   |   |-- register.wxml
|   |   |   `-- register.wxss
|   |   |--user-index # 用户
|   |   |   |-- user-index.js
|   |   |   |-- user-index.json
|   |   |   |-- user-index.wxml
|   |   |   `-- user-index.wxss
|   `-- log # 日志页面
`-- utils       # 工具
    `-- util.js
```
请先在在app.json中注册页面，设置navigation，配置tabbar<br>
```js
{
    "pages": [
        "pages/search/search",
        "pages/search/search/search",
        "pages/square/square",
        "pages/square/question/question",
        "pages/topics/topics",
        "pages/user/user",
        "pages/user/register/register",
        "pages/user/user-index/user-index"
    ],
    "window": {
        "backgroundTextStyle": "light",
        "backgroundColor": "#fff",
        "navigationBarBackgroundColor": "#11CF7E",
        "navigationBarTitleText": "沪江问答",
        "navigationBarTextStyle": "black",
        "enablePullDownRefresh": "true"
    },
    "tabBar": {
        "color": "black",
        "selectedColor": "#19FA28",
        "backgroundColor": "#ffffff",
        "borderStyle": "black",
        "list": [{
                "pagePath": "pages/search/search",
                "text": "搜索",
                "iconPath": "images/search.png",
                "selectedIconPath": "images/search_selected.png"
            },
            {
                "pagePath": "pages/square/square",
                "text": "广场",
                "iconPath": "images/square.png",
                "selectedIconPath": "images/square_selected.png"
            },
            {
                "pagePath": "pages/topics/topics",
                "text": "话题",
                "iconPath": "images/topics.png",
                "selectedIconPath": "images/topics_selected.png"
            },
            {
                "pagePath": "pages/user/user",
                "text": "我的",
                "iconPath": "images/user.png",
                "selectedIconPath": "images/user_selected.png"
            }
        ]
    }
}
```
### 1.**block**对数据的渲染
![](https://github.com/SiHao24/HuJiangTeach/blob/master/results/sear.png)<br>
![](https://github.com/SiHao24/HuJiangTeach/blob/master/results/square.png)<br>
![](https://github.com/SiHao24/HuJiangTeach/tree/master/results/search.gif)<br>
布局分为搜索框,文本提示区域<br>
提问模块用block进行渲染三个tabs，以及搜索的类型<br>
```js
//js
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
    navbarTap: function(e) {
        this.setData({
            currentTab: e.currentTarget.dataset.idx
        })
    },

    currentTap: function(e) {
        this.setData({
            current: e.currentTarget.dataset.idx
        })
    }
})
```
### 2.用**flex布局**实现tabbar的布局<br>
![](https://github.com/SiHao24/HuJiangTeach/blob/master/results/topics.png)<br>
![](https://github.com/SiHao24/HuJiangTeach/blob/master/results/user.png)<br>
tips:小程序中`flex`布局基本无兼容性问题 ，可大胆使用<br>
父元素设置display:flex,对主元素设置flex:1,其他的元素设置宽度，即可实现响应式布局。so easy.<br>
由于没有接口调用，自己只能在js的data里面自己设置数据来传输了（有点垃圾哈，努力成长中😜<br>
```js
//js
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
    ask: function() {
        wx.navigateTo({
            url: '/pages/square/question/question'
        })
    },
})
```
## 踩过的坑
刚接触小程序，讲真，刚开始他一脸懵逼，无从下手啊，在网上找了几个例子，看了下，自己开始照猫画虎。也顺利的完成了一个对自己来说小小的项目吧。<br>
#### 1.flex布局的问题
刚开始不是很了解，一直得不到想要的效果，看了[flex布局](http://www.cnblogs.com/module/p/5578533.html),自己也对display的几个属性值做了下总结,[来自前端菜鸟对 css display属性的理解](http://www.jianshu.com/p/7bf07a763d83),不足的地方还请老司机们指正。<br>
#### 2.对于数据存储的问题
这里给自己挖了个超级大的坑，在本地存储了好多图片（自己做数据嘛，好多头像只能自己搞定了），我擦，在上传到github上面的时候，死活上不去，查来查去，数据他多了，好吧，这样的话，老铁们，那就不要存在本地，悲催，还是老老实实写网址吧。<br>
#### 3.navifator的跳转
navigator也就相当于html中的a标签，但是我觉得啊，它们还是有差距的，只要看到跳转，是不是就想到navigator。但是呢，不要在一个页面反复使用它，不然它跳不过去啊。我觉得有必要看一波[navigator](https://mp.weixin.qq.com/debug/wxadoc/dev/component/navigator.html)，了。对于有些页面的跳转，没必要全部写navigator，可以在它们的标签里面给它们绑定事件，我觉得这样会更好。wx.navigateTo，wx.redirectTo，wx.switchTab，wx.reLaunch，wx.navigateBack等来实现页面跳转。


***
## 有帮助可以Star
18届小前端求职中`['html/html5', 'css/css3', 'js/es5/es6']`
<a href="mailto:2441284795@qq.com">2441284795@qq.com</a>
