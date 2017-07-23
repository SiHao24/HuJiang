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
tips:小程序中`flex`布局基本无兼容性问题 ，可大胆使用<br>
父元素设置display:flex,对主元素设置flex:1,其他的元素设置宽度，即可实现响应式布局。so easy.<br>
由于没有接口调用，自己只能在js的data里面自己设置数据来传输了（有点垃圾哈，努力成长中
）


***
## 有帮助可以Star
18届小前端求职中`['html/html5', 'css/css3', 'js/es5/es6']`
<a href="mailto:1424254461@qq.com">2441284795@qq.com</a>
