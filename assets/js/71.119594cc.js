(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{414:function(v,e,t){"use strict";t.r(e);var _=t(4),i=Object(_.a)({},(function(){var v=this,e=v._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"货拉拉ios弹窗调度方案设计与实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#货拉拉ios弹窗调度方案设计与实践"}},[v._v("#")]),v._v(" 货拉拉iOS弹窗调度方案设计与实践")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.cn/user/1768489241815070/posts",target:"_blank",rel:"noopener noreferrer"}},[v._v("货拉拉技术"),e("OutboundLink")],1)]),v._v(" "),e("p",[v._v("2023-06-1314,376阅读18分钟")]),v._v(" "),e("blockquote",[e("p",[v._v("作者简介")]),v._v(" "),e("p",[v._v("jun.liu，货拉拉高级客户端工程师，主要负责货拉拉iOS移动端的开发工作。")])]),v._v(" "),e("h1",{attrs:{id:"一、背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、背景"}},[v._v("#")]),v._v(" 一、背景")]),v._v(" "),e("p",[v._v("随着货拉拉移动端APP的业务不断的发展，为了兼顾需求迭代效率，以及降低项目的维护复杂度，我们做了很多的性能和业务逻辑架构上的优化，其中就包括iOS端的弹窗调度管理治理，那么这篇文章就详细阐述下弹窗调度优化项目的一些细节和原理。")]),v._v(" "),e("p",[v._v("在进入正题之前，我们先来聊一下为什么我们要做弹窗调度组件，以及目前市面上是否有类似成熟的解决方案，「弹窗调度」这个名词对于有些开发者可能感觉有点陌生，但是「弹窗」这个词大家都会比较熟悉，UIKit中的"),e("code",[v._v("UIAlertController")]),v._v("就是Apple为开发者提供的最基础的系统弹窗控件，但是往往我们在具体的项目开发中，会需要不同UI风格的弹窗样式，且场景也是随着业务场景各式各样，所以不同风格样式的弹窗，以及不同场景的弹窗就会随着业务的迭代，变的越来越多且比较零散不好管理维护，下面就拿我们货拉拉APP的一些场景举几个例子：")]),v._v(" "),e("ul",[e("li",[v._v("首页启动后的一些弹窗（优惠活动、未完单信息、版本更新提示、公告等）之类的弹窗应该怎样更好的进行顺序展示？弹窗实现上怎样能更好的逻辑解耦？")]),v._v(" "),e("li",[v._v("业务开发中的一些辅助半页弹窗，通常是当前页面用来填写交互信息的弹窗，这些半页之类的弹窗应该怎样在业务中方便的去实现，让业务同学只关注弹窗内容，而不去考虑当前页面的其他弹窗之间的交互。")]),v._v(" "),e("li",[v._v("一些强业务关联性的场景，比如：司机报价通知、用户报价、用户加价等交互性比较强的弹窗，如何在业务中更好更方便的实现？")])]),v._v(" "),e("p",[v._v("等等这些都是我们开发中随着业务的迭代，出现的一些痛点，而弹窗调度的设计初衷就是力求解决这些痛点，而目前市面并没有一个可以说很好解决当前痛点的一些开源方案，也是因为这些场景比较依赖业务逻辑，没有特定的复杂业务场景去测试，很难去提炼出好的适合的一个解决方案。")]),v._v(" "),e("p",[v._v("因此，我们开始了自研「iOS弹窗调度」方案，一方面为了更好的解决我们项目中的痛点，另一方面也打算通过开源方式来吸取更多的优秀建议，让它越来越完善。")]),v._v(" "),e("blockquote",[e("p",[v._v("这是我们GitHub的开源代码："),e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FHuolalaTech%2Fhll-popupsmanager-ios",title:"https://github.com/HuolalaTech/hll-popupsmanager-ios",target:"_blank",rel:"noopener noreferrer"}},[v._v("github.com/HuolalaTech…"),e("OutboundLink")],1)])]),v._v(" "),e("h1",{attrs:{id:"二、聊一聊都有哪些弹窗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、聊一聊都有哪些弹窗"}},[v._v("#")]),v._v(" 二、聊一聊都有哪些弹窗？")]),v._v(" "),e("p",[v._v("其实现在咱们大部分人都是手机的重度使用者，我们在使用手机上的APP时，或多或少都会看到过各种类型的弹窗视图，比如：新版本升级提示啊、优惠活动啊、或者一些手机权限的申请弹窗等等。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a13b199006c440ef973d3e460ae02334~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?",alt:"image.png"}})]),v._v(" "),e("p",[v._v("虽然弹窗的样式有很多，但如果我们按照类型可大致分为以下几类：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ecf9af47d3b4edaa212a96320f752fb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?",alt:"screenshot-20230613-113440.png"}})]),v._v(" "),e("p",[e("strong",[v._v("各类型弹窗的具体解释：")])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("运营相关")]),v._v(" "),e("ul",[e("li",[v._v("这类主要以APP相关运营概念的一些弹窗，比如电商类APP的优惠券下发，以及一些活动海报等，通常展示在手机屏幕中央，曝光给用户")]),v._v(" "),e("li",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a99636f6d9d443cbd8521d748aa6f68~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""}})])])]),v._v(" "),e("li",[e("p",[v._v("业务相关")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("这类就比较属于功能类的弹窗了，通常和用户的使用场景密切相关，比如有司机给用户下的拉货单报价了一个新价格，我们要及时展示给用户查看等，这些就比较多了，所以归属于APP产品的功能业务这块，展示的样式也是最复杂多样的。")])]),v._v(" "),e("li",[e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28ed74efcf584e05b2db9006206552f0~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""}}),e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7e81e4919bf4d7ab142001f7f6e58ae~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""}})])])])]),v._v(" "),e("li",[e("p",[v._v("轻提示（APP内顶部通知条）")]),v._v(" "),e("ul",[e("li",[v._v("这类严格意义上不属于弹窗，因为弹窗有一个基本的判定因素是：必须让用户聚焦当前弹窗，什么意思呢，就是要让用户立刻处理掉当前的弹窗，比如点击按钮关闭，或者点击背景关闭，而通知条作为一个轻提示，在APP中也是不乏出现，所以我们暂且也给他算做一类，但是具体处理的时候会根据通知条的特性区别对待。")]),v._v(" "),e("li",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e9f9bb7ddaf4bfb9f01ae103c30697e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""}})])])]),v._v(" "),e("li",[e("p",[v._v("不规则弹窗")]),v._v(" "),e("ul",[e("li",[v._v("为什么分出来一类不规则弹窗呢，因为有些样式对于用户而言第一次看并不会觉得是一个弹窗，但是对于我们写程序而言它也是可以被兼容到弹窗处理中的，比如一些闪屏页、一些新版本对用户进行引导的一些视图、或则是一些页面上出现的小的提示视图等，这些虽然是不规则的，但是只要他满足了弹窗的基本特性，那么就能用程序给他归类兼容。")])])])]),v._v(" "),e("p",[v._v("看到这里有些同学会问，为什么通知条也算是弹窗呢？其实这里我们只是把通知条类型也纳入到弹窗调度概念中来，其实你可以抽象一点，把它理解为调度管理APP页面中会动态出现的一些widget，这样就不会仅仅局限于普通弹窗形式里面了，但我们的出发点更多的还是以弹窗为主，只是让调度更加的能兼容其他类型。")]),v._v(" "),e("p",[v._v("剖析完了弹窗的各种样式后，我们来看下通常我们项目开发中的一些常规弹窗实现方式。")]),v._v(" "),e("h1",{attrs:{id:"三、常规实现方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、常规实现方式"}},[v._v("#")]),v._v(" 三、常规实现方式")]),v._v(" "),e("p",[v._v("在讲实现原理之前我们先来看下通常情况下，我们是如何简单快速的Pop出一个弹窗视图的。")]),v._v(" "),e("h2",{attrs:{id:"通常弹窗代码的写法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通常弹窗代码的写法"}},[v._v("#")]),v._v(" 通常弹窗代码的写法")]),v._v(" "),e("p",[v._v("我们一般在开发的过程中要进行一个弹窗展示通常第一步会创建一个自定义View来编写弹窗的具体UI页面，然后通过实现一个基础的动画来将其添加到我们的当前的视图上，代码大概是这样的：")]),v._v(" "),e("p",[v._v("less")]),v._v(" "),e("p",[v._v("代码解读")]),v._v(" "),e("p",[v._v("复制代码")]),v._v(" "),e("p",[e("code",[v._v("//创建一个自定义的View类来编写弹窗UI视图 @interface XXX_PopView : UIView + (instancetype)show; @end //然后在业务中需要弹窗的地方触发 [XXX_PopView show]; ...")])]),v._v(" "),e("p",[v._v("我们在项目规模较小或者业务不复杂的时候，这样写可能更简单一点，但是慢慢的你会发现，业务中弹窗多了之后。每新增一个弹窗不光要单独造一个弹窗出来，如果业务当前逻辑中有和其他地方的弹窗有依赖，那么还要考虑其他地方的弹窗是否有冲突或者谁先展示的问题。")]),v._v(" "),e("p",[v._v("面临难维护的问题：")]),v._v(" "),e("ul",[e("li",[v._v("弹窗通常都有一个统一的黑色加了透明的背景遮挡，每次写一个弹窗也要考虑处理这块的代码，代码无法复用")]),v._v(" "),e("li",[v._v("弹窗如果想支持一些出现或消失的动画，需要在自己弹窗中单独实现")]),v._v(" "),e("li",[v._v("弹窗和弹窗之间没有优先级以及其他的约束限制，可能会造成弹窗之间pop时候的冲突")]),v._v(" "),e("li",[v._v("业务实现起来需要考虑太多重复的逻辑，这些重复的逻辑其实都是所有弹窗通用的，可以进行抽离")])]),v._v(" "),e("p",[v._v("以上这些问题还只是我们开发和维护时发现比较繁琐的问题需要解决，如果项目中弹窗越来越多，那么后续的维护难度可能会更大。")]),v._v(" "),e("h2",{attrs:{id:"期望的弹窗实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#期望的弹窗实现"}},[v._v("#")]),v._v(" 期望的弹窗实现")]),v._v(" "),e("p",[v._v("发现了弊端，那么我们怎么去优化改造，优化的目标就是我们期望的弹窗实现方式，我们期望业务中使用弹窗的流程是这样的：")]),v._v(" "),e("ol",[e("li",[v._v("创建自定义View编写弹窗具体业务UI代码（这块必须由业务来做，并且这里的UI代码只包含弹窗的内容，不包含弹窗的动画、键盘适应、自动隐藏等逻辑）")]),v._v(" "),e("li",[v._v("简单配置弹窗属性后，直接丢给弹窗调度组件就可以了")]),v._v(" "),e("li",[v._v("弹窗的生命周期等回调，业务中只需要接收该回调即可")])]),v._v(" "),e("p",[v._v("通过改造优化后，我们业务开发中关注的焦点就主要集中在弹窗视图的UI和逻辑处理了，而不再关心弹窗会不会和其他弹窗有影响，弹出动画的编写，以及背景色和触摸手势等一系列通用问题了，这些问题都交给弹窗调度组件去统一管理了。")]),v._v(" "),e("h1",{attrs:{id:"四、弹窗调度的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、弹窗调度的原理"}},[v._v("#")]),v._v(" 四、弹窗调度的原理")]),v._v(" "),e("p",[v._v("前面说了这么多关于弹窗的种类和通常的实现，接下来就具体说下弹窗调度的实现原理，其实弹窗调度的原理并不复杂，主要的逻辑处理就是在「调度」一词中，弹窗在业务而调度在管理，你可以想像一下我们生活中的十字路口红绿灯的设计，通过红绿灯系统的调控，是如何解决南来北往的车辆和行人的。")]),v._v(" "),e("h2",{attrs:{id:"类图设计分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类图设计分析"}},[v._v("#")]),v._v(" 类图设计分析")]),v._v(" "),e("p",[v._v("弹窗调度的类文件总共分为三大类：")]),v._v(" "),e("ol",[e("li",[v._v("调度管理类")]),v._v(" "),e("li",[v._v("弹窗属性配置类")]),v._v(" "),e("li",[v._v("接口协议")])]),v._v(" "),e("p",[v._v("内部的类图大致如下：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28ee8e1f58134d1f978b4a24ca194fd5~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?",alt:"image.png"}})]),v._v(" "),e("p",[v._v("类图说明：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("HLLPopupInterface 协议")]),v._v(" "),e("ul",[e("li",[v._v("这个协议主要是提供给业务中的弹窗类来实现的，里面提供了一些必要和非要的协议方法，例如弹窗类需要必须实现："),e("code",[v._v("- (UIView *)supplyCustomPopupView;")]),v._v("方法来给调度组件提供一个用来展示弹窗UI内容的View对象，除此之外还有一些弹窗当前的显示生命周期函数回调等。")])])]),v._v(" "),e("li",[e("p",[v._v("HLLPopupConfigure 配置类")]),v._v(" "),e("ul",[e("li",[v._v("这个类是一个弹窗配置类，主要是给弹窗进行一些属性配置，例如：")]),v._v(" "),e("li",[v._v("配置场景类型，是属于底部弹窗还是中心弹窗，或者是顶部通知栏")]),v._v(" "),e("li",[v._v("配置你的优先级，来决定你的弹窗的展示顺序")]),v._v(" "),e("li",[v._v("配置动画类型，里面提供了几种基础动画可供使用")]),v._v(" "),e("li",[v._v("弹窗的消失时间")]),v._v(" "),e("li",[v._v("等等这些属性大家可以在源码中看到使用的注释。")])])]),v._v(" "),e("li",[e("p",[v._v("HLLPopupsManager 弹窗调度管理类")]),v._v(" "),e("ul",[e("li",[v._v("这个类主要功能就是弹窗调度的管理核心类，它是一个单例类，通过公开的一些API接口，来让业务中方便的加入/移除弹窗")])])])]),v._v(" "),e("p",[v._v("剖析完了类图之后，我们对弹窗调度的大体设计有了一个轮廓，那么下面我们就来具体看下内部的实现。")]),v._v(" "),e("h2",{attrs:{id:"调度原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调度原理"}},[v._v("#")]),v._v(" 调度原理")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("容器")])])]),v._v(" "),e("p",[v._v("下面我们来分析下弹窗的调度原理，首先我们要知道弹窗在APP上出现肯定是要有一个superview父视图来承载的，")]),v._v(" "),e("p",[e("code",[v._v("HLLPopupConfigure")]),v._v("配置类中提供了一个"),e("code",[v._v("containerView")]),v._v("属性，所以调度组件支持业务中去决定你的弹窗应该加到哪个父视图中，默认会放到 "),e("code",[v._v("[UIApplication sharedApplication].keyWindow")]),v._v(" 上，这样就避免了一些弹窗会依赖当前页面的ViewController来实现逻辑的麻烦了。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("存储队列")])])]),v._v(" "),e("p",[e("code",[v._v("HLLPopupsManager")]),v._v("内部用了一个数组的属性来存放所有加入到调度管理中的弹窗对象，并且在加入到队列之前内部会根据设置的属性来调整其在队列中的位置，保证数组中的顺序就是弹窗的显示顺序。")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17ecf2c640ff4eb89b4cceb77f77469e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?",alt:"image.png"}})]),v._v(" "),e("p",[v._v("除了优先级的因素以外，我们还设置了一些其他的配置功能，比如：有些弹窗弹出后会把其他弹窗给挤掉，那么内部就会清空掉这些弹窗，再比如一些需要和键盘进行交互的底部弹窗，键盘的升起可能会和弹窗有冲突，这种内部也进行了适配处理。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("分组处理")])])]),v._v(" "),e("p",[v._v("分组的概念是虽然我们的弹窗最终是根据优先级排列存储起来待展示的，但是每个弹窗对象会有一个分组ID叫做GroupID,这个分组ID的作用则是会将弹窗进行分组，不同分组的优先级顺序并不会影响到其他分组。")]),v._v(" "),e("p",[v._v("举个例子：我们货拉拉APP下单后在一些议价的场景中，用户会和司机进行一些议价交互，双方会进行报价，在APP中体现则是会随时有价格的提示和价格输入等交互弹窗，一些议价弹窗场景就不想被其他的一些弹窗优先级和策略影响，比如我在报价的时候进行价格输入时如果有其他高优先级的弹窗所干扰，但是其他的弹窗又需要展示出来，那么通过分组的形式就可解决这种弹窗冲突场景，你可以把它理解为在弹窗这个调度队列中通过GroupID区分了很多个容器出来，各个容器的弹窗互不影响。")]),v._v(" "),e("p",[v._v("通知条在实现的时候就是通过GroupID的形式设计的，这样通知条的显示和其他弹窗并不会有冲突，从APP的通常使用习惯设计上来讲，这种设计目前来看是合理的，虽然是通知条但是从抽象的角度来说，他也算是一种「弹窗」。")]),v._v(" "),e("h2",{attrs:{id:"丰富的特性配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#丰富的特性配置"}},[v._v("#")]),v._v(" 丰富的特性配置")]),v._v(" "),e("p",[v._v("除了上面介绍的调度原理之外，在此基础上弹窗调度还提供了很多个性化的配置属性，方便我们开发中在一些特殊场景中能够更好的解决需求，比如：")]),v._v(" "),e("ul",[e("li",[v._v("弹窗的宿主视图")]),v._v(" "),e("li",[v._v("定时消失")]),v._v(" "),e("li",[v._v("弹窗时是否需要清空之前的弹窗队列")]),v._v(" "),e("li",[v._v("背景遮罩的颜色")])]),v._v(" "),e("p",[v._v("等等这些属性配置可以你解决大部分的弹窗需求，且配置起来也很方便，只需要创建一个"),e("code",[v._v("HLLPopupConfigure")]),v._v("配置对象，将其传入到弹窗API参数中即可。")]),v._v(" "),e("p",[v._v("示例代码：")]),v._v(" "),e("p",[v._v("objectivec")]),v._v(" "),e("p",[v._v("代码解读")]),v._v(" "),e("p",[v._v("复制代码")]),v._v(" "),e("p",[e("code",[v._v("/// 弹窗场景风格 @property (nonatomic, assign) HLLPopupScene sceneStyle; /// 点击弹窗背景（弹窗内容之外的区域）弹窗是否消失 default NO @property (nonatomic, assign, getter=isClickOutsideDismiss) BOOL clickOutsideDismiss; /// 弹窗的容器视图，默认是当前APP的keywindow,可以设置成其他容器 @property (nonatomic, weak) UIView *containerView; /// 持续时长 设置后会在设定时间结束后自动dismiss,不设置不会自动消失 @property (nonatomic, assign) NSTimeInterval dismissDuration; /// 该属性默认NO。设置YES会让之前的所有同组弹窗全部清除掉（优先级属性失效) @property (nonatomic, assign, getter=isAloneMode) BOOL aloneMode; /// 和aloneMode模式类似，不过terminatorMode会清除掉之前所有分组的弹窗 @property (nonatomic, assign, getter=isTerminatorMode) BOOL terminatorMode;")])]),v._v(" "),e("h1",{attrs:{id:"五、具体场景实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、具体场景实践"}},[v._v("#")]),v._v(" 五、具体场景实践")]),v._v(" "),e("p",[v._v("接下来通过几个小的具体业务场景来看下「弹窗调度」的具体实践，")]),v._v(" "),e("ul",[e("li",[v._v("顶部通知条")])]),v._v(" "),e("p",[v._v("首先我们先来看下顶部通知条这种使用弹窗调度组件应该怎样去管理，首先我们需要一个通知条的自定义view类，那么通常他是继承自UIView的，然后遵守我们的弹窗调度协议：")]),v._v(" "),e("p",[v._v("less")]),v._v(" "),e("p",[v._v("代码解读")]),v._v(" "),e("p",[v._v("复制代码")]),v._v(" "),e("p",[e("code",[v._v("@interface TopBarPopView : UIView<HLLPopupInterface> @end")])]),v._v(" "),e("p",[v._v("根据协议提供的方法进行实现配置，必要方法是你要提供给「弹窗调度」一个具体的弹窗view视图，其他的比如生命周期回调，则可以根据具体场景选择实现。")]),v._v(" "),e("p",[v._v("之后就可以在通知条触发的地方将它交给「弹窗调度」进行展示了：")]),v._v(" "),e("p",[v._v("ini")]),v._v(" "),e("p",[v._v("代码解读")]),v._v(" "),e("p",[v._v("复制代码")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("`// 特性配置     HLLPopupConfigure *config = [[HLLPopupConfigure alloc] init];     config.sceneStyle = HLLPopupSceneTopNoticeView;//类型     config.dismissDuration = 3;//延迟消失     config.cornerRadius = 8;//UI圆角风格     //业务自定义弹窗类     TopBarPopView *topBar = [[TopBarPopView alloc] init];     //「弹窗调度」组件     [HLLPopupsManager addPopup:topBar options:config];`\n")])])]),e("p",[v._v("上述代码完成之后，你的顶部通知条就可以在触发的时候进入队列正常显示了，如果有比它优先级高的，那么它会进入等待，如果它的优先级最高，则会立即展示，之后规定时间内自动隐藏，而业务代码中只需要关心顶部通知条的样式应该如何写就可以了。")]),v._v(" "),e("ul",[e("li",[v._v("用户引导蒙层")])]),v._v(" "),e("p",[v._v("这种业务需求我们一样可以将其放入到「弹窗调度」组件中管理，甚至我们可以利用分组形式来解决一些弹窗需要和引导蒙层同时出现的场景，我们我们的用户蒙层出现时，如果有重要的弹窗需要给用户展示，或则用户的订单有司机议价通知等场景都可以满足，而我们开发的时候只需要管理如何写弹窗界面UI即可，不需要去考弹窗之间的交互和影响，只要你配置好了属性，一切交给弹窗调度实现就行了。")]),v._v(" "),e("p",[v._v("objectivec")]),v._v(" "),e("p",[v._v("代码解读")]),v._v(" "),e("p",[v._v("复制代码")]),v._v(" "),e("p",[e("code",[v._v("@property (nonatomic, copy) NSString *groupID;")])]),v._v(" "),e("ul",[e("li",[v._v("特殊属性")])]),v._v(" "),e("p",[v._v("说到一些个别场景，比如用户被挤下线了，或者订单被取消了，这些场景有些需要弹窗给用户，然后之前的弹窗就无需保留了，因为被挤下线或订单取消后假如之前有一些弹窗在队列中，比如报价通知，订单状态等和用户或者订单强关联的交互场景，这些弹窗也就没必要展示了，此时你就可以配置弹窗的"),e("code",[v._v("terminatorMode")]),v._v("属性，这意味着该弹窗出现后，之前的队列内的弹窗会被清空。")]),v._v(" "),e("p",[v._v("objectivec")]),v._v(" "),e("p",[v._v("代码解读")]),v._v(" "),e("p",[v._v("复制代码")]),v._v(" "),e("p",[e("code",[v._v("/// 该属性默认NO。设置YES会让之前的所有同组弹窗全部清除掉（优先级属性失效) @property (nonatomic, assign, getter=isAloneMode) BOOL aloneMode; /// 和aloneMode模式类似，不过terminatorMode会清除掉之前所有分组的弹窗 @property (nonatomic, assign, getter=isTerminatorMode) BOOL terminatorMode;")])]),v._v(" "),e("ul",[e("li",[v._v("页面消失")])]),v._v(" "),e("p",[v._v("组件内还提供了一些便捷的清理弹窗和查询弹窗的一些方法，比如一些场景需要页面消失的时候关闭掉当前展示的弹窗，或者某些弹窗只在特定的页面展示，查看某一弹窗当前是否正在展示等都可以通过下面这些API进行操作")]),v._v(" "),e("p",[v._v("objectivec")]),v._v(" "),e("p",[v._v("代码解读")]),v._v(" "),e("p",[v._v("复制代码")]),v._v(" "),e("p",[e("code",[v._v("/// 移除指定弹窗 /// @param popup popup：触发弹窗时传入的遵守协议的对象 + (void)dismissWithPopup:(id<HLLPopupInterface>)popup; /// 移除指定弹窗 /// @param identifier identifier: 业务调用中设置的唯一标识符 + (void)dismissPopupWithIdentifier:(NSString *)identifier; /// 从指定容器中移除所有的弹窗 /// @param containerView 指定容器，传nil则移除当前APP的keywindow上的 + (void)removeAllPopupFromContainerView:(UIView *)containerView; /// 移除调度管理中之前加入的所有弹窗 + (void)removeAllPopup; /// 获取指定容器中的所有弹窗个数 /// @param containerView 容器view + (NSInteger)getAllPopupCountFromContainerView:(UIView *)containerView;")])]),v._v(" "),e("p",[v._v("前面大致归类的这几种场景有兴趣的同学可以结合源码来应用的自己的应用中进行实践操作下，根据自己的业务场景来具体体验下「弹窗调度」的作用，场景很多怎样更好的去兼容实现达到需求的目的才是最重要的，同时也欢迎有兴趣的同学提出一些更好的场景案例，来一起交流学习，如果不支持的我也会考虑进行一些扩展和优化来对其进行支持。")]),v._v(" "),e("h1",{attrs:{id:"六、总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、总结"}},[v._v("#")]),v._v(" 六、总结")]),v._v(" "),e("p",[v._v("文章到这里就接近尾声了，目前货拉拉iOS项目中已经有部分业务在渐进式的进行使用这套弹窗调度组件去开发了，场景包含：确认页、下单后的一些做单页面等，大概有40+的弹窗的业务场景在使用，后续的一些新增相关弹窗方面的需求，我们也是优先考虑使用弹窗调度组件去管理，业务代码上对比之前精简了很多，很多复杂的场景可以只关注弹窗的页面和逻辑即可，而不在去花时间关注弹窗的调度逻辑。")]),v._v(" "),e("p",[v._v("弹窗调度其实主要的核心就是以调度为轴心，通过业务中不同弹窗的属性特征，来有序且正确的对每个场景，以及每个弹窗进行展示和隐藏，最大限度的做到和业务逻辑解耦，优化常规弹窗实现的弊端，通过归纳、分类再到调度实现，来更好的解决我们前面所提到的开发痛点。")]),v._v(" "),e("p",[v._v("最后感谢大家对文章的阅读，感兴趣的同学可以在github上找到我们货拉拉技术的开源项目（"),e("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FHuolalaTech%25EF%25BC%2589%25E6%259D%25A5%25E4%25B8%2580%25E8%25B5%25B7%25E8%25BF%259B%25E8%25A1%258C%25E4%25BA%25A4%25E6%25B5%2581%25E5%25AD%25A6%25E4%25B9%25A0%25E3%2580%2582",title:"https://github.com/HuolalaTech%EF%BC%89%E6%9D%A5%E4%B8%80%E8%B5%B7%E8%BF%9B%E8%A1%8C%E4%BA%A4%E6%B5%81%E5%AD%A6%E4%B9%A0%E3%80%82",target:"_blank",rel:"noopener noreferrer"}},[v._v("github.com/HuolalaTech…"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);