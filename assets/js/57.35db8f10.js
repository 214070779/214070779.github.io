(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{402:function(e,i,t){"use strict";t.r(i);var a=t(4),r=Object(a.a)({},(function(){var e=this,i=e._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"事件的传递-响应链"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#事件的传递-响应链"}},[e._v("#")]),e._v(" 事件的传递（响应链）")]),e._v(" "),i("p",[e._v("当你点击了屏幕会产生一个触摸事件，系统会将该事件加入到一个由UIApplication管理的事件队列中，UIApplication会从消息队列里取事件分发下去，首先传给UIWindow，UIWindow会使用hitTest:withEvent:方法找到此次触摸事件初始点所在的视图，找到这个视图之后他就会调用视图的touchesBegan:withEvent:方法来处理事件。以消息的形式将事件发送给第一响应者，使其有机会首先处理事件。如果第一响应者没有进行处理，系统就将事件（通过消息）传递给响应者链中的下一个响应者，看看它是否可以进行处理。（这是一个完整的事件响应链流程")]),e._v(" "),i("p",[e._v("用户点击屏幕时，产生一个触摸事件，事件加入到一个由UIApplication管理的事件队列中")]),e._v(" "),i("p",[e._v("UIApplication从事件队列中取出最前面的事件进行分发处理，先发送事件给应用程序的主窗口(UIWindow)")]),e._v(" "),i("p",[e._v("主窗口会调用hitTest:withEvent:方法在视图(UIView)层次结构中找到一个最合适的UIView来处理触摸事件")]),e._v(" "),i("p",[e._v("为什么是队列而不是栈？\n因为队列的特定是先进先出，先产生的事件先处理才符合常理，所以把事件添加到队列。")]),e._v(" "),i("p",[e._v("如果hitTest:withEvent:找到的第一响应者initial view没有处理该事件，那么事件会沿着响应者链向上传递：第一响应者 -> 父视图 -> 视图控制器，如果传递到最顶级视图还没处理事件，那么就传递给UIWindow处理，若window对象也不处理->交给UIApplication处理，如果UIApplication对象还不处理，就丢弃该事件。")]),e._v(" "),i("h3",{attrs:{id:"既然理解了事件传递流程-那什么是事件响应链又是什么"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#既然理解了事件传递流程-那什么是事件响应链又是什么"}},[e._v("#")]),e._v(" 既然理解了事件传递流程，那什么是事件响应链又是什么？")]),e._v(" "),i("p",[e._v("提到事件响应链 ，先得说下 UIResponder 这个类，UIResponder是所有响应者对象的基类，UIResponder类定义了很多处理事件方法和抽象接口。 nextResponder 就是响应链里最重要的方法。")]),e._v(" "),i("p",[e._v("iOS系统在处理事件时，通过UIApplication对象和每个UIWindow对象的sendEvent:方法将事件以消息的形式分发给具体处理此事件的第一响应者，使其有机会首先处理事件。如果第一响应者没有进行处理，第一响应者将事件将处理事件的责任传递给下一个，更高级的对象,即当前responder对象的nextResponder。")]),e._v(" "),i("p",[e._v("通过下面代码打印的结果可以看到响应链的传递路径。 事件通过UIResponder实现响应，就是响应链。\n复制代码")]),e._v(" "),i("h3",{attrs:{id:"既然uiresponder这个类在响应链里这么重要-那再问一个跟uiresponder相关的简单问题-uibutton的父类或uibutton-继承关系是什么"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#既然uiresponder这个类在响应链里这么重要-那再问一个跟uiresponder相关的简单问题-uibutton的父类或uibutton-继承关系是什么"}},[e._v("#")]),e._v(" 既然UIResponder这个类在响应链里这么重要，那再问一个跟UIResponder相关的简单问题，UIButton的父类或UIButton 继承关系是什么？")]),e._v(" "),i("p",[e._v("UIButton UIDatePicker这些控件 都继承了 UIControl， UIControl 继承于 UIView ,UIView继承于UIResponder。")]),e._v(" "),i("h3",{attrs:{id:"那视图上有很多子视图-那怎么判断是哪个子视图对事件作出响应呢"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#那视图上有很多子视图-那怎么判断是哪个子视图对事件作出响应呢"}},[e._v("#")]),e._v(" 那视图上有很多子视图，那怎么判断是哪个子视图对事件作出响应呢？")]),e._v(" "),i("p",[e._v("用View的SubViews这个成员变量来遍历子视图实现。遍历的方式是用倒序方式来 遍历。 最后添加到UIWindow中的视图会最先遍历到。 可以理解为递归调用。每个视图都会调用自己的子视图的·hitTest方法来查找是否是自己响应了事件。")]),e._v(" "),i("p",[e._v("(hitTest:withEvent:其实是UIView的一个方法，UIWindow继承自UIView，因此主窗口UIWindow也是属于视图的一种)")]),e._v(" "),i("h2",{attrs:{id:"drawrect-layoutsubviews调用时机"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#drawrect-layoutsubviews调用时机"}},[e._v("#")]),e._v(" drawrect & layoutsubviews调用时机")]),e._v(" "),i("p",[e._v("layoutSubviews:(相当于layoutSubviews()函数)在以下情况下会被调用：")]),e._v(" "),i("ul",[i("li",[e._v("init初始化不会触发layoutSubviews。")]),e._v(" "),i("li",[e._v("addSubview会触发layoutSubviews。")]),e._v(" "),i("li",[e._v("设置view的Frame会触发layoutSubviews (frame发生变化触发)。")]),e._v(" "),i("li",[e._v("滚动一个UIScrollView会触发layoutSubviews。")]),e._v(" "),i("li",[e._v("旋转Screen会触发父UIView上的layoutSubviews事件。")]),e._v(" "),i("li",[e._v("改变一个UIView大小的时候也会触发父UIView上的layoutSubviews事件。")]),e._v(" "),i("li",[e._v("直接调用setLayoutSubviews。")])]),e._v(" "),i("p",[e._v("drawrect:(drawrect()函数)在以下情况下会被调用：")]),e._v(" "),i("ul",[i("li",[e._v("drawrect:是在UIViewController的loadView:和ViewDidLoad:方法之后调用.")]),e._v(" "),i("li",[e._v("当我们调用[UIFont的 sizeToFit]后,会触发系统自动调用drawRect:")]),e._v(" "),i("li",[e._v("当设置UIView的contentMode或者Frame后会立即触发触发系统调用drawRect:")]),e._v(" "),i("li",[e._v("直接调用setNeedsDisplay设置标记 或setNeedsDisplayInRect:的时候会触发drawRect:\n知识点扩充: 当我们操作drawRect方法的时候实际是在操作内存中存放视图的backingStore区域,用于后续图形的渲染操作,如果不理解可以看下UIView的渲染过程.")])]),e._v(" "),i("h2",{attrs:{id:"imagename-imagewithcontentsoffile区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#imagename-imagewithcontentsoffile区别"}},[e._v("#")]),e._v(" imageName&imageWithContentsOfFile区别")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("区别")]),e._v(" "),i("th",[e._v("UIView")]),e._v(" "),i("th",[e._v("imageWithContentsOfFile")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("不同点")]),e._v(" "),i("td",[e._v("会图片缓存到内存中")]),e._v(" "),i("td",[e._v("无缓存")])])])]),e._v(" "),i("h2",{attrs:{id:"多个相同的图片-会重复加载吗"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#多个相同的图片-会重复加载吗"}},[e._v("#")]),e._v(" 多个相同的图片，会重复加载吗")]),e._v(" "),i("p",[e._v("不会,GPU有 像素点缓存的mask.")]),e._v(" "),i("h2",{attrs:{id:"图片是什么时候解码的-如何优化"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#图片是什么时候解码的-如何优化"}},[e._v("#")]),e._v(" 图片是什么时候解码的，如何优化")]),e._v(" "),i("p",[e._v("是加载到内存中,从UIImge->CGImage->CGImageSourceCreateWithData(data) 创建ImageSource变成bitmap位图,这些工作都是CoreAnimation在图片被加载到内存中存在在backingStore里,送给GPU流水线处理之前被解码.")]),e._v(" "),i("p",[e._v("如何优化\n自己手动操作图片的编码API")]),e._v(" "),i("p",[e._v("CGImageSource开头的哪些,根据合理利用时机和操作系统资源调整出一套缓存小加载快的库.")]),e._v(" "),i("h2",{attrs:{id:"uiview-和-calayer-是什么关系"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#uiview-和-calayer-是什么关系"}},[e._v("#")]),e._v(" UIView 和 CALayer 是什么关系？")]),e._v(" "),i("p",[e._v("UIView 继承 UIResponder，而 UIResponder 是响应者对象，可以对iOS 中的事件响应及传递，CALayer 没有继承自 UIResponder，所以 CALayer 不具备响应处理事件的能力。CALayer 是 QuartzCore 中的类，是一个比较底层的用来绘制内容的类，用来绘制UI")]),e._v(" "),i("p",[e._v("UIView 对 CALayer 封装属性，对 UIView 设置 frame、center、bounds 等位置信息时，其实都是UIView 对 CALayer 进一层封装，使得我们可以很方便地设置控件的位置；例如圆角、阴影等属性， UIView 就没有进一步封装，所以我们还是需要去设置 Layer 的属性来实现功能。")]),e._v(" "),i("p",[e._v("UIView 是 CALayer 的代理，UIView 持有一个 CALayer 的属性，并且是该属性的代理，用来提供一些 CALayer 行的数据，例如动画和绘制。")]),e._v(" "),i("h2",{attrs:{id:"与-有何区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#与-有何区别"}},[e._v("#")]),e._v(" .与->有何区别")]),e._v(" "),i("p",[e._v(".（点语法）是访问类的属性，本质是调用set、get方法。")]),e._v(" "),i("p",[e._v("->是访问成员变量，但成员变量默认受保护，所以常常报错，手动设为public即可解决")]),e._v(" "),i("p",[e._v("->是指针指向其成员的运算符 .是结构体的成员运算符。最大的区别是->前面放的是指针，而.前面跟的是结构体变量")]),e._v(" "),i("h1",{attrs:{id:"问题系列"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#问题系列"}},[e._v("#")]),e._v(" 问题系列")]),e._v(" "),i("h2",{attrs:{id:"viewcontroller-生命周期"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#viewcontroller-生命周期"}},[e._v("#")]),e._v(" ViewController 生命周期")]),e._v(" "),i("h3",{attrs:{id:"单个viewcontroller的生命周期"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#单个viewcontroller的生命周期"}},[e._v("#")]),e._v(" 单个viewController的生命周期")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),i("ul",[i("li",[e._v("initWithCoder:(NSCoder *)aDecoder：（如果使用storyboard或者xib）")]),e._v(" "),i("li",[e._v("loadView：加载view")]),e._v(" "),i("li",[e._v("viewDidLoad：view加载完毕")]),e._v(" "),i("li",[e._v("viewWillAppear：控制器的view将要显示")]),e._v(" "),i("li",[e._v("viewWillLayoutSubviews：控制器的view将要布局子控件")]),e._v(" "),i("li",[e._v("viewDidLayoutSubviews：控制器的view布局子控件完成")]),e._v(" "),i("li",[e._v("viewDidAppear:控制器的view完全显示")]),e._v(" "),i("li",[e._v("viewWillDisappear：控制器的view即将消失的时候")]),e._v(" "),i("li",[e._v("viewDidDisappear：控制器的view完全消失的时候")]),e._v(" "),i("li",[e._v("dealloc 控制器销毁")])])]),e._v(" "),i("p",[e._v("两个控制器AB进行跳转调用顺序:")]),e._v(" "),i("p",[e._v("A控制器先展示调用")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),i("ul",[i("li",[e._v("[ViewControllerA loadView]")]),e._v(" "),i("li",[e._v("[ViewControllerA viewWillAppear:]")]),e._v(" "),i("li",[e._v("[ViewControllerA viewWillLayoutSubviews]")]),e._v(" "),i("li",[e._v("[ViewControllerA viewDidLayoutSubviews]")]),e._v(" "),i("li",[e._v("[ViewControllerA viewDidAppear:]")])])]),e._v(" "),i("p",[e._v("B控制器跳转调用顺序")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),i("ul",[i("li",[e._v("[ViewControllerB loadView]")]),e._v(" "),i("li",[e._v("[ViewControllerB viewDidLoad]")]),e._v(" "),i("li",[e._v("[ViewControllerA viewWillDisappear:]")]),e._v(" "),i("li",[e._v("[ViewControllerB viewWillAppear:]")]),e._v(" "),i("li",[e._v("[ViewControllerB viewWillLayoutSubviews]")]),e._v(" "),i("li",[e._v("[ViewControllerB viewDidLayoutSubviews]")]),e._v(" "),i("li",[e._v("[ViewControllerA viewDidDisappear:]")]),e._v(" "),i("li",[e._v("[ViewControllerB viewDidAppear:]")])])]),e._v(" "),i("p",[e._v("B控制器返回A顺序")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),i("ul",[i("li",[e._v("[ViewControllerB viewWillDisappear:]")]),e._v(" "),i("li",[e._v("[ViewControllerA viewWillAppear:]")]),e._v(" "),i("li",[e._v("[ViewControllerB viewDidDisappear:]")]),e._v(" "),i("li",[e._v("[ViewControllerA viewDidAppear:]")])])]),e._v(" "),i("h2",{attrs:{id:"uiview-的frame-bounds-center"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#uiview-的frame-bounds-center"}},[e._v("#")]),e._v(" UIView 的frame，bounds，center")]),e._v(" "),i("p",[e._v("frame: 描述当前界面元素在其父界面元素中的位置和大小。\nbounds: 描述当前界面元素在其自身坐标系统中的位置和大小。\ncenter: 描述当前界面元素的中心点在其父界面元素中的位置.")]),e._v(" "),i("h2",{attrs:{id:"calayer的frame-bounds-anchorpoint-position"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#calayer的frame-bounds-anchorpoint-position"}},[e._v("#")]),e._v(" CALayer的frame，bounds，anchorPoint,position")]),e._v(" "),i("p",[e._v("frame：与view中的frame概念相同，（x,y）subLayer左上角相对于supLayer坐标系的位置关系；width, height表示subLayer的宽度和高度。")]),e._v(" "),i("p",[e._v("bounds：与view中的bounds概念相同，（x,y）subLayer左上角相对于自身坐标系的关系；width, height表示subLayer的宽度和高度。")]),e._v(" "),i("p",[e._v("anchorPoint(锚点)：锚点在自身坐标系中的相对位置，默认值为（0.5，0.5），左上角为（0，0），右下角为（1，1），其他位置以此类推；锚点都是对于自身来讲的. 确定自身的锚点,通常用于做相对的tranform变换.当然也可以用来确定位置；\nposition：锚点在supLayer坐标系中的位置；")]),e._v(" "),i("h2",{attrs:{id:"ios-为什么必须在主线程中操作ui"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ios-为什么必须在主线程中操作ui"}},[e._v("#")]),e._v(" iOS 为什么必须在主线程中操作UI")]),e._v(" "),i("p",[e._v("UIKit不是线程安全的(多个线程访问修改,可能一个线程已经释放了,另一个线程会访问,以及资源抢夺问题等)\n主线程上默认是开始 runloop 的,子线程没有 runloop 也无法监听一些事件,手势刷新UI等操作\n在子线程更新UI可能会无效,也可能会崩溃")]),e._v(" "),i("h2",{attrs:{id:"autolayout-中的优先级是什么"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#autolayout-中的优先级是什么"}},[e._v("#")]),e._v(" AutoLayout 中的优先级是什么?")]),e._v(" "),i("p",[e._v("AutoLayout中添加的约束也有优先级,优先级的数值是1~1000")]),e._v(" "),i("ul",[i("li",[e._v("一种情况是我们经常添加的各种约束,默认的优先级是1000，也就是最高级别，条件允许的话系统会满足我们所有的约束需求。")]),e._v(" "),i("li",[e._v("另外一种情况就是固有约束(intinsic content size)")]),e._v(" "),i("li",[e._v("Content Hugging Priority 抗拉伸优先级值越小，越容易被拉伸")]),e._v(" "),i("li",[e._v("Content Compression Resistance 抗压缩优先级 优先级越小，越先被压缩")])]),e._v(" "),i("h2",{attrs:{id:"calayer如何添加点击事件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#calayer如何添加点击事件"}},[e._v("#")]),e._v(" CALayer如何添加点击事件")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("通过 touchesBegan: withEvent 方法,监听屏幕点击事件,在这个方法中通过 convertPoint 找到点击位置,进行判断,如果点击了 layer 视图内坐标,就触发点击事件")])]),e._v(" "),i("li",[i("p",[e._v("通过 hitTest方法找到包含坐标系的 layer 视图")]),e._v(" "),i("div",{staticClass:"language-objectivec line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-objectivec"}},[i("code")]),e._v(" "),i("div",{staticClass:"line-numbers-wrapper"})])])]),e._v(" "),i("ul",[i("li",[i("p",[e._v('(void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event{\n//  方法一,通过 convertPoint 转为为 layer 坐标系进行判断\nCGPoint point = [[touches anyObject]   locationInView:self.view];\nCGPoint redPoint = [self.redLayer  convertPoint:point fromLayer:self.view.layer];\nif ([self.redLayer containsPoint:redPoint]) {\nNSLog(@"点击了calayer");\n}\n//  方法二 通过 hitTest 返回包含坐标系的 layer 视图\nCGPoint point1 = [[touches anyObject] locationInView:self.view];\nCALayer *layer = [self.view.layer hitTest:point1];\nif (layer == self.redLayer) {')]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v(' NSLog(@"点击了calayer");\n')])])]),i("p",[e._v("}\n}")]),e._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("\n")])]),e._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[e._v("1")]),i("br")])])])]),e._v(" "),i("h2",{attrs:{id:"_10-介绍下layoutsubview和drawrect"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-介绍下layoutsubview和drawrect"}},[e._v("#")]),e._v(" 10.介绍下layoutSubview和drawRect")]),e._v(" "),i("p",[e._v("layoutSubviews调用情况:")]),e._v(" "),i("ul",[i("li",[e._v("init初始化UIView不会触发调用")]),e._v(" "),i("li",[e._v("addSubview会触发调用")]),e._v(" "),i("li",[e._v("改变view的width和height的时候回触发调用")]),e._v(" "),i("li",[e._v("一个UIScrollView滚动会触发调用")]),e._v(" "),i("li",[e._v("旋转screen会触发调用")]),e._v(" "),i("li",[e._v("改变一个UIView大小的时候会触发superView的layoutSubviews事件")]),e._v(" "),i("li",[e._v("直接调用setLayoutSubviews会触发调用")]),e._v(" "),i("li",[e._v("-(void)viewWillAppear:(BOOL)animated会触发一次调用")]),e._v(" "),i("li",[e._v("-(void)viewDidAppear:(BOOL)animated 看情况，可能有调用")])]),e._v(" "),i("p",[e._v("drawRect调用情况")]),e._v(" "),i("ul",[i("li",[e._v("如果UIView没有设置frame大小，直接导致drawRect不能被自动调用。")]),e._v(" "),i("li",[e._v("drawRect在loadView和viewDidLoad这两个方法之后调用")]),e._v(" "),i("li",[e._v("调用sizeToFit后自动调用drawRect")]),e._v(" "),i("li",[e._v("通过设置contentMode值为UIViewContentModeRedraw。那么每次设置或者更改frame自动调用drawRect。")]),e._v(" "),i("li",[e._v("直接调用setNeedsDisplay或者setNeedsDisplayInRect会触发调用")])]),e._v(" "),i("h2",{attrs:{id:"_11-layoutifneeded-layoutsubviews和-setneedslayout区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_11-layoutifneeded-layoutsubviews和-setneedslayout区别"}},[e._v("#")]),e._v(" 11. layoutIfNeeded , layoutSubViews和 setNeedsLayout区别?")]),e._v(" "),i("p",[e._v("layoutIfNeeded 方法一点被调用,主线程会立即强制重新布局,它会从当前视图开始,一直到完成所有子视图的布局")]),e._v(" "),i("p",[e._v("layoutSubViews 用来自定义视图尺寸,他是系统自动调用的,开发者不能手动调用,可以重写改方法,让系统在调整布局时候按照我们希望的方式进行布局.这个方法在旋转屏幕,滑动或者触摸屏幕,修改子视图时候被触发.")]),e._v(" "),i("p",[e._v("setNeedsLayout 和 layoutIfNeeded相似,唯一不同的是他不会立即强制视图重新布局,而是在下一个布局周期才会触发更新.他主要用于多个视图布局先后更新的场景;")]),e._v(" "),i("h2",{attrs:{id:"_12-假如controller太臃肿-如何优化"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_12-假如controller太臃肿-如何优化"}},[e._v("#")]),e._v(" 12.假如Controller太臃肿，如何优化?")]),e._v(" "),i("ul",[i("li",[e._v("将网络请求抽象到单独的类中,方便在基类中处理公共逻辑；方便在基类中处理缓存逻辑，以及其它一些公共逻辑；方便做对象的持久化。")]),e._v(" "),i("li",[e._v("将界面的封装抽象到专门的类中, 构造专门的 UIView 的子类，来负责这些控件的拼装。这是最彻底和优雅的方式，不过稍微麻烦一些的是，你需要把这些控件的事件回调先接管，再都一一暴露回 Controller。")]),e._v(" "),i("li",[e._v("构造 ViewModel, 借鉴MVVM。具体做法就是将 ViewController 给 View 传递数据这个过程，抽象成构造 ViewModel 的过程。")]),e._v(" "),i("li",[e._v("专门构造存储类,专门来处理本地数据的存取。")]),e._v(" "),i("li",[e._v("整合常量")])]),e._v(" "),i("h2",{attrs:{id:"程序启动过程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#程序启动过程"}},[e._v("#")]),e._v(" 程序启动过程")]),e._v(" "),i("h3",{attrs:{id:"main-函数执行前"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#main-函数执行前"}},[e._v("#")]),e._v(" main 函数执行前:")]),e._v(" "),i("ul",[i("li",[e._v("首先当程序启动时，系统会读取程序的可执行文件（mach-o）, 从里面获取动态加载器(dylb)的路径;")]),e._v(" "),i("li",[e._v("加载dylb, dylb会初始化运行环境，配合ImageLoader将二进制文件加载到内存中去;")]),e._v(" "),i("li",[e._v("动态链接依赖库, 初始化依赖库，初始化 runtime;")]),e._v(" "),i("li",[e._v("runtime 会对项目中的所有类进行类结构初始化，调用所有的 load 方法;")]),e._v(" "),i("li",[e._v("最后 dylb 会返回 main 函数地址，main 函数被调用，进入程序入口")])]),e._v(" "),i("h3",{attrs:{id:"main-函数执行后"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#main-函数执行后"}},[e._v("#")]),e._v(" main 函数执行后:")]),e._v(" "),i("ul",[i("li",[e._v("内部会调用 UIApplicationMain 函数，创建一个UIApplication对象和它的代理，就是我们项目中的 Appdelegate 类")]),e._v(" "),i("li",[e._v("开启一个事件循环(main runloop), 监听系统事件")]),e._v(" "),i("li",[e._v("程序启动完毕时，通知代理Appdelegate, 调用 didFinishLaunching 代理方法，在这里会创建 UIWindow,设置它的rootViewController,")]),e._v(" "),i("li",[e._v("最后调用 self.window makeKeyAndVisable显示窗口")])]),e._v(" "),i("h2",{attrs:{id:"渲染以及图像显示原理过程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#渲染以及图像显示原理过程"}},[e._v("#")]),e._v(" 渲染以及图像显示原理过程?")]),e._v(" "),i("ul",[i("li",[e._v("每一个UIView都有一个layer，每一个layer都有个content，这个content指向的是一块缓存，叫做backing store。")]),e._v(" "),i("li",[e._v("UIView的绘制和渲染是两个过程，当UIView被绘制时，CPU执行drawRect，通过context将数据写入backing store。")]),e._v(" "),i("li",[e._v("当backing store写完后，通过render server交给GPU去渲染，将backing store中的bitmap数据显示在屏幕上。")]),e._v(" "),i("li",[e._v("说到底CPU就是做绘制的操作把内容放到缓存里，GPU负责从缓存里读取数据然后渲染到屏幕上。")])]),e._v(" "),i("h2",{attrs:{id:"离屏渲染是什么"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#离屏渲染是什么"}},[e._v("#")]),e._v(" 离屏渲染是什么")]),e._v(" "),i("ul",[i("li",[e._v("离屏渲染，指的是 GPU （图形处理器）在当前屏幕缓冲区以外新开辟一个缓冲区进行渲染操作。为什么离屏这么耗时？原因主要有创建缓冲区和上下文切换。创建新的缓冲区代价都不算大，付出最大代价的是上下文切换。")]),e._v(" "),i("li",[e._v("GPU屏幕渲染有两种方式:\n"),i("ul",[i("li",[e._v("On-Screen Rendering (当前屏幕渲染) 指的是GPU的渲染操作是在当前用于显示的屏幕缓冲区进行。")]),e._v(" "),i("li",[e._v("Off-Screen Rendering (离屏渲染) 指的是在GPU在当前屏幕缓冲区以外开辟一个缓冲区进行渲染操作。")])])])]),e._v(" "),i("h3",{attrs:{id:"那些情况会造成离屏渲染"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#那些情况会造成离屏渲染"}},[e._v("#")]),e._v(" 那些情况会造成离屏渲染?")]),e._v(" "),i("ul",[i("li",[e._v("为图层设置遮罩（layer.mask）")]),e._v(" "),i("li",[e._v("将图层的layer.masksToBounds / view.clipsToBounds属性设置为true")]),e._v(" "),i("li",[e._v("将图层layer.allowsGroupOpacity属性设置为YES和layer.opacity小于1.0")]),e._v(" "),i("li",[e._v("为图层设置阴影（layer.shadow *）。")]),e._v(" "),i("li",[e._v("为图层设置layer.shouldRasterize=true")]),e._v(" "),i("li",[e._v("具有layer.cornerRadius，layer.edgeAntialiasingMask，layer.allowsEdgeAntialiasing的图层")]),e._v(" "),i("li",[e._v("文本（任何种类，包括UILabel，CATextLayer，Core Text等）。")])]),e._v(" "),i("h2",{attrs:{id:"uiscrollview-原理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#uiscrollview-原理"}},[e._v("#")]),e._v(" UIScrollView 原理")]),e._v(" "),i("p",[e._v("UIScrollView继承自UIView，内部有一个 UIPanGestureRecongnizer手势。 frame 是相对父视图坐标系来决定自己的位置和大小，而bounds是相对于自身坐标系的位置和尺寸的。改视图 bounds 的 origin 视图本身没有发生变化，但是它的子视图的位置却发生了变化，因为 bounds 的 origin 值是基于自身的坐标系，当自身坐标系的位置被改变了，里面的子视图肯定得变化， bounds 和 panGestureRecognize 是实现 UIScrollView 滑动效果的关键技术点。")]),e._v(" "),i("h2",{attrs:{id:"loadview-的作用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#loadview-的作用"}},[e._v("#")]),e._v(" loadView 的作用?")]),e._v(" "),i("p",[e._v("loadView 用来自定义 view，只要实现了这个方法，其他通过 xib 或 storyboard 创 建的 view 都不会被加载")]),e._v(" "),i("h2",{attrs:{id:"iboutlet-连出来的视图属性为什么可以被设-置成-weak"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#iboutlet-连出来的视图属性为什么可以被设-置成-weak"}},[e._v("#")]),e._v(" IBOutlet 连出来的视图属性为什么可以被设 置成 weak?")]),e._v(" "),i("p",[e._v("因为父控件的 subViews 数组已经对它有一个强引用")]),e._v(" "),i("h2",{attrs:{id:"请简述-uitableviewcell的复用机制"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#请简述-uitableviewcell的复用机制"}},[e._v("#")]),e._v(" 请简述 UITableViewCell的复用机制")]),e._v(" "),i("p",[e._v("每次创建 cell 的时候通过 dequeueReusableCellWithIdentifier:方法创建 cell，它先到 缓存池中找指定标识的 cell，如果没有就直接返回 nil\n如果没有找到指定标识的 cell，那么会通过 initWithStyle:reuseIdentifier:创建一个 cell\n当 cell 离开界面就会被放到缓存池中，以供下次复用")]),e._v(" "),i("h2",{attrs:{id:"使用-drawrect-有什么影响"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用-drawrect-有什么影响"}},[e._v("#")]),e._v(" 使用 drawRect 有什么影响?")]),e._v(" "),i("ul",[i("li",[e._v("drawRect 方法依赖 Core Graphics 框架来进行自定义的绘制")]),e._v(" "),i("li",[e._v("缺点:它处理 touch 事件时每次按钮被点击后，都会用 setNeddsDisplay 进行强制")]),e._v(" "),i("li",[e._v("重绘;而且不止一次，每次单点事件触发两次执行。这样的话从性能的角度来 说，对 CPU 和内存来说都是欠佳的。特别是如果在我们的界面上有多个这样的 UIButton 实例，那就会很糟糕了")]),e._v(" "),i("li",[e._v("这个方法的调用机制也是非常特别. 当你调用 setNeedsDisplay 方法时, UIKit 将会 把当前图层标记为 dirty,但还是会显示原来的内容,直到下一次的视图渲染周期,才会 将标记为 dirty 的图层重新建立 Core Graphics 上下文,然后将内存中的数据恢复出 来, 再使用 CGContextRef 进行绘制")])]),e._v(" "),i("h2",{attrs:{id:"能否在一个控制器-嵌入2个-tableviewcontroller-控制器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#能否在一个控制器-嵌入2个-tableviewcontroller-控制器"}},[e._v("#")]),e._v(" 能否在一个控制器 嵌入2个 TableViewController 控制器")]),e._v(" "),i("p",[e._v("可以, 控制器可以添加子控制器")]),e._v(" "),i("h2",{attrs:{id:"一个-tableview-是否可以关联2个不同的datasource"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#一个-tableview-是否可以关联2个不同的datasource"}},[e._v("#")]),e._v(" 一个 TableView 是否可以关联2个不同的dataSource?")]),e._v(" "),i("p",[e._v("可以关联多个数据源,重点只要处理好数据源和 tableView 的对接工作即可")]),e._v(" "),i("h2",{attrs:{id:"maskstobounds-和clipstobounds"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#maskstobounds-和clipstobounds"}},[e._v("#")]),e._v(" masksToBounds 和clipsToBounds")]),e._v(" "),i("p",[e._v("masksToBounds 是指子 layer 在超出父 layer时是否被裁剪,YES表示参见,NO 表示不裁剪, 默认是NO\nclipsToBounds 是指子 View 在超出父 View时是否被裁剪")]),e._v(" "),i("h2",{attrs:{id:"tintcolor-是什么"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tintcolor-是什么"}},[e._v("#")]),e._v(" tintColor 是什么?")]),e._v(" "),i("p",[e._v("tintColor 是 ios7以后 UIView类添加的一个新属性,用于改变应用的主色调,默认是 nil")]),e._v(" "),i("h2",{attrs:{id:"imagenamed-和-imagewithcontentsoffile区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#imagenamed-和-imagewithcontentsoffile区别"}},[e._v("#")]),e._v(" imageNamed 和 imageWithContentsOfFile区别")]),e._v(" "),i("p",[e._v("imageNamed 会自动缓存新加载的图片,并切重复利用缓存图片,一般用于App 内经常使用的尺寸不大的图片\nimageWithContentsOfFile 根据路径加载没有 取缓存和缓存的过程,用于一些大图,使用完毕会释放内存")]),e._v(" "),i("h2",{attrs:{id:"view-和-view-传值方式有哪些"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#view-和-view-传值方式有哪些"}},[e._v("#")]),e._v(" View 和 View 传值方式有哪些")]),e._v(" "),i("ul",[i("li",[e._v("通过视图类对外提供的属性直接传值")]),e._v(" "),i("li",[e._v("通过代理传值")]),e._v(" "),i("li",[e._v("通过通知传值")]),e._v(" "),i("li",[e._v("通过 Block 传值")]),e._v(" "),i("li",[e._v("通过NSUserDefault, 不建议")])]),e._v(" "),i("h2",{attrs:{id:"为什么ios提供-uiview-和calayer-两个个平行的层级结构"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#为什么ios提供-uiview-和calayer-两个个平行的层级结构"}},[e._v("#")]),e._v(" 为什么iOS提供 UIView 和CAlayer 两个个平行的层级结构")]),e._v(" "),i("p",[e._v("UIView 和CAlayer2个平行的层级结构主要是用于职责分离,实现视图的绘制,显示,布局解耦,避免重复代码")]),e._v(" "),i("p",[e._v("在iOS 和 Mac OS两个平台上,事件和用户交互有很多不同的地方,创建2个层级结构,可以在2个平台上共享代码,从而使得开发快捷.")]),e._v(" "),i("h2",{attrs:{id:"uiwindow是什么-有什么特点"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#uiwindow是什么-有什么特点"}},[e._v("#")]),e._v(" UIWindow是什么,有什么特点?")]),e._v(" "),i("p",[e._v("UIWindow 继承自 UIView, 作为根视图来装置 View元素, UIWindow提供一个区域用于显示UIView,并且将事件分发给 UIView,一般一个应用只有一个 UIWindow;")]),e._v(" "),i("h2",{attrs:{id:"什么是隐式动画和显示动画"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#什么是隐式动画和显示动画"}},[e._v("#")]),e._v(" 什么是隐式动画和显示动画")]),e._v(" "),i("p",[e._v("隐式动画是系统框架自动完成的。Core Animation在每个runloop周期中自动开始一次新的事务，即使你不显式的用[CATransaction begin]开始一次事务，任何在一次runloop循环中属性的改变都会被集中起来，然后做一次0.25秒的动画。在iOS4中，苹果对UIView添加了一种基于block的动画方法：+animateWithDuration:animations:。这样写对做一堆的属性动画在语法上会更加简单，但实质上它们都是在做同样的事情。CATransaction的+begin和+commit方法在+animateWithDuration:animations:内部自动调用，这样block中所有属性的改变都会被事务所包含,多用于简单动画效果")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("[UIView animateWithDuration:1 animations:^{\n        view.center = self.view.center;\n    }];\n")])]),e._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[e._v("1")]),i("br"),i("span",{staticClass:"line-number"},[e._v("2")]),i("br"),i("span",{staticClass:"line-number"},[e._v("3")]),i("br")])])]),e._v(" "),i("p",[e._v("显式动画，Core Animation提供的显式动画类型，既可以直接对layer层属性做动画，也可以覆盖默认的图层行为。我们经常使用的CABasicAnimation，CAKeyframeAnimation，CATransitionAnimation，CAAnimationGroup等都是显式动画类型，这些CAAnimation类型可以直接提交到CALayer上。显式动画可用于实现更为复杂的动画效果.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v('CABasicAnimation *positionAnima = [CABasicAnimation animationWithKeyPath:@"position.y"];\npositionAnima.duration = 0.8;\npositionAnima.fromValue = @(self.imageView.center.y);\npositionAnima.toValue = @(self.imageView.center.y-30);\npositionAnima.timingFunction = [CAMediaTimingFunction functionWithName:kCAMediaTimingFunctionEaseIn];\npositionAnima.repeatCount = HUGE_VALF;\npositionAnima.repeatDuration = 2;\npositionAnima.removedOnCompletion = NO;\npositionAnima.fillMode = kCAFillModeForwards;\n[self.imageView.layer addAnimation:positionAnima forKey:@"AnimationMoveY"];\n')])]),e._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[e._v("1")]),i("br"),i("span",{staticClass:"line-number"},[e._v("2")]),i("br"),i("span",{staticClass:"line-number"},[e._v("3")]),i("br"),i("span",{staticClass:"line-number"},[e._v("4")]),i("br"),i("span",{staticClass:"line-number"},[e._v("5")]),i("br"),i("span",{staticClass:"line-number"},[e._v("6")]),i("br"),i("span",{staticClass:"line-number"},[e._v("7")]),i("br"),i("span",{staticClass:"line-number"},[e._v("8")]),i("br"),i("span",{staticClass:"line-number"},[e._v("9")]),i("br"),i("span",{staticClass:"line-number"},[e._v("10")]),i("br")])])]),e._v(" "),i("h2",{attrs:{id:"uibutton-和uitableview的层级结构"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#uibutton-和uitableview的层级结构"}},[e._v("#")]),e._v(" UIButton 和UITableView的层级结构")]),e._v(" "),i("h3",{attrs:{id:"继承结构"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#继承结构"}},[e._v("#")]),e._v(" 继承结构")]),e._v(" "),i("ul",[i("li",[e._v("UIButton -> UIControl -> UIView -> UIResponder -> NSObject")]),e._v(" "),i("li",[e._v("UITableView -> UIScrollView -> UIView -> UIResponder -> NSObject")])]),e._v(" "),i("h3",{attrs:{id:"内部子控件结构"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#内部子控件结构"}},[e._v("#")]),e._v(" 内部子控件结构")]),e._v(" "),i("ul",[i("li",[e._v("UIButton内部子控件结构: 默认有两个, 一个UIImageView, 一个UILable, 分别可以设置图片和文字, button设置属性基本都是set方法")]),e._v(" "),i("li",[e._v("UITableView内部子控件结构: UITableView中每一行数据都是UITableViewCell, UITableViewCell内部有一个UIView控件 (contentView, 作为其它元素的父控件) , 两个UILable 控件 (textLable, detailTextLable) , 一个UIImageView控件 (imageView) , 分别用于容器, 显示内容, 详情和图片")])]),e._v(" "),i("h2",{attrs:{id:"storyboard-xib-和-纯代码ui相比-有哪些优缺点"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#storyboard-xib-和-纯代码ui相比-有哪些优缺点"}},[e._v("#")]),e._v(" Storyboard/xib 和 纯代码UI相比,有哪些优缺点")]),e._v(" "),i("p",[e._v("优点:")]),e._v(" "),i("p",[e._v("简单直接快速, 通过拖拽和点选即可配置UI,界面所见即所得\n在 Storybord可以清楚的区分ViewController 界面之间的跳转关系")]),e._v(" "),i("p",[e._v("缺点:")]),e._v(" "),i("p",[e._v("协作冲突,多人编辑时,容易发生冲突,很难解决冲突\n很难做到界面继承和重用\n不便于进行模块化管理\n影响性能")]),e._v(" "),i("h2",{attrs:{id:"autolayout-和-frame在ui布局和渲染上有什么区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#autolayout-和-frame在ui布局和渲染上有什么区别"}},[e._v("#")]),e._v(" AutoLayout 和 Frame在UI布局和渲染上有什么区别?")]),e._v(" "),i("ul",[i("li",[e._v("AutoLayout是针对多尺寸屏幕的设计,其本质是通过线性不等式设置UI控件的相对位置,从而适配多种屏幕设备")]),e._v(" "),i("li",[e._v("Frame 是基于XY坐标轴系统布局机制,它从数学上限定了UI 控件的具体位置,是 iOS'开发中最低层,最基本的界面布局方式")]),e._v(" "),i("li",[e._v("AutoLayout性能比 Frame 差很多,AutoLayout布局过程是首先求解线性不等式,然后在转化为Frame进行布局,其中求解计算量非常大,很损耗性能;")])]),e._v(" "),i("h2",{attrs:{id:"safearea-safearealayoutguide-safeareainsets-关键词的比较说明"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#safearea-safearealayoutguide-safeareainsets-关键词的比较说明"}},[e._v("#")]),e._v(" SafeArea, SafeAreaLayoutGuide, SafeAreaInsets 关键词的比较说明?")]),e._v(" "),i("p",[e._v("由于 iphoneX 采用了刘海设计,iOS11引入了安全区域(SafeArea)概念")]),e._v(" "),i("ul",[i("li",[e._v("SafeArea是指App 显示内容的区域,不包括StatusBar,Navigationbar,tabbar,和 toolbar, 在 iPhoneX 中一般是指扣除了statusBar(44像素),和底部home indicator(高度为34像素)的区域.这样操作不会被刘海或者底部手势影响了.")]),e._v(" "),i("li",[e._v("SafeAreaLayoutGuide 是指 Safe Area 的区域范围和限制, 在布局设置中,可以取得他的上下左右4个边界位置进行相应的布局")]),e._v(" "),i("li",[e._v("SafeAreaInsets限定了Safe Area区域与整个屏幕之间的布局关系,一般用上下左右4个值来获取 SafeArea 与屏幕边缘之间的距离;")])]),e._v(" "),i("h2",{attrs:{id:"uiscrollview-的-contentview-contentinset-contentsize-contentoffset-关键字比较"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#uiscrollview-的-contentview-contentinset-contentsize-contentoffset-关键字比较"}},[e._v("#")]),e._v(" UIScrollView 的 contentView, contentInset, contentSize, contentOffset 关键字比较?")]),e._v(" "),i("ul",[i("li",[e._v("contentView 是指 UIScrollView上显示内容的区域,用户 addSubView 都是在 contentView上进行的;")]),e._v(" "),i("li",[e._v("contentInset 是指 contentView与 UIScrollView的边界;")]),e._v(" "),i("li",[e._v("contentSize 是指 contentView 的大小,表示可以滑动范围;")]),e._v(" "),i("li",[e._v("contentOffset 是当前 contentView 浏览位置左上角点的坐标;")])]),e._v(" "),i("h2",{attrs:{id:"图片png与jpg的区别是什么"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#图片png与jpg的区别是什么"}},[e._v("#")]),e._v(" 图片png与jpg的区别是什么?")]),e._v(" "),i("p",[e._v("png:\n优点：无损格式，不论保存多少次，理论上图片质量都不会受任何影响；支持透明\n缺点：尺寸过大；打开速度与保存速度和jpg没法比\njpg:\n优点：尺寸较小，节省空间；打开速度快\n缺点：有损格式，在修图时不断保存会导致图片质量不断降低；不支持透明\n在开发中，尺寸比较大的图片（例如背景图片）一般适用jpg格式，减小对内存的占用！")])])}),[],!1,null,null,null);i.default=r.exports}}]);