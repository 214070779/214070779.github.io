(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{448:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、双指针的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、双指针的概念"}},[t._v("#")]),t._v(" 一、双指针的概念")]),t._v(" "),s("h3",{attrs:{id:"_1-1、什么是双指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、什么是双指针"}},[t._v("#")]),t._v(" 1.1、什么是双指针？")]),t._v(" "),s("p",[t._v("顾名思议，双指针就是两个指针，但是该指针不同于 C，C++中的指针地址，而是一种记录两个索引的算法思想。")]),t._v(" "),s("p",[t._v("实际上，在很多简单题目中，我们经常使用"),s("strong",[t._v("单指针")]),t._v("，比如我们通过索引来遍历某数组：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 可以这样\nfor i in range(n):\n    print(nums[i])\n# 当然也可以这样\ni = 0\nwhile i<n:\n    print(nums[i])\n    i+=1\n# 这样写为了引申出双指针，因为双指针一般用while来遍历\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://i-blog.csdnimg.cn/blog_migrate/11f7ebb7ce83fb1f9defc6045fc5dcd2.png",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("那么双指针实际上就是有两个这样的指针，最为经典的就是二分法中的左右双指针。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("left, right = 0, len(nums)-1\n\nwhile left<right:\n    if 一定条件:\n        return 合适的值，一般是 l 和 r 的中点\n    elif 一定条件:\n        l+=1\n    else:\n        r-=1\n# 因为 l == r，因此返回 l 和 r 都是一样的\nreturn l\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://i-blog.csdnimg.cn/blog_migrate/c48b9d1062927a0d246131d1380b64fd.png",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("其实双指针是一个很宽泛的概念，就好像数组，链表一样，其类型会有很多很多， 比如二分法经常用到左右端点双指针。滑动窗口会用到快慢指针和固定间距指针。 因此双指针其实是一种综合性很强的类型，类似于数组，栈等。 但是我们这里所讲述的双指针，往往指的是某几种类型的双指针，而不是“只要有两个指针就是双指针了”。")]),t._v(" "),s("p",[t._v("有了这样一个算法框架，或者算法思维，有很大的好处。它能帮助你理清思路，当你碰到新的问题，在脑海里进行搜索的时候，双指针这个词就会在你脑海里闪过，闪过的同时你可以根据双指针的所有套路和这道题进行穷举匹配，这个思考解题过程本来就像是算法。")]),t._v(" "),s("h3",{attrs:{id:"_1-2、常见类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、常见类型"}},[t._v("#")]),t._v(" 1.2、常见类型")]),t._v(" "),s("p",[t._v("指针一般情况下将分为三种类类型，分别是：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("特点")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("快慢指针")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("两个指针步长不同，一般情况下，快的走两步，慢的走一步")])]),t._v(" "),s("tr",[s("td",[t._v("左右端点指针(对撞指针)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("两个指针分别指向头尾，并往中间移动，步长不确定，一般为1")])]),t._v(" "),s("tr",[s("td",[t._v("区间指针(滑动窗口)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("一般为滑动窗口，两个指针及其间距视作整体，窗口有定长有变长，每次操作窗口整体向右滑动")])])])]),t._v(" "),s("p",[t._v("不管是哪一种双指针，只考虑双指针部分的话 ，由于最多还是会遍历整个数组一次，因此时间复杂度取决于步长，如果步长是 1，2 这种常数的话，那么时间复杂度就是 O(N)，如果步长是和数据规模有关（比如二分法），其时间复杂度就是 O(logN)。并且由于不管规模多大，我们都只需要最多两个指针，因此空间复杂度是 O(1)。下面我们就来看看双指针的常见套路有哪些。")]),t._v(" "),s("h4",{attrs:{id:"_1-2-1、快慢指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1、快慢指针"}},[t._v("#")]),t._v(" 1.2.1、快慢指针")]),t._v(" "),s("p",[t._v("本方法需要我们对「Floyd 判圈算法」（又称龟兔赛跑算法）有所了解。")]),t._v(" "),s("p",[t._v("假想「乌龟」和「兔子」在链表上移动，「兔子」跑得快，「乌龟」跑得慢。当「乌龟」和「兔子」从链表上的同一个节点开始移动时，如果该链表中没有环，那么「兔子」将一直处于「乌龟」的前方；如果该链表中有环，那么「兔子」会先于「乌龟」进入环，并且一直在环内移动。等到「乌龟」进入环时，由于「兔子」的速度快，它一定会在某个时刻与乌龟相遇，即套了「乌龟」若干圈。")]),t._v(" "),s("p",[t._v("我们可以根据上述思路来解决本题。具体地，我们定义两个指针，一快一慢。慢指针每次只移动一步，而快指针每次移动两步。初始时，慢指针在位置 head，而快指针在位置 head.next。这样一来，如果在移动的过程中，快指针反过来追上慢指针，就说明该链表为环形链表。否则快指针将到达链表尾部，该链表不为环形链表。")]),t._v(" "),s("p",[t._v("具体的的示意图如下，同时也可以参考相似思路的，且比较简单的例题 [141. 环形链表]("),s("a",{attrs:{href:"https://leetcode.cn/problems/linked-list-cycle/description/",target:"_blank",rel:"noopener noreferrer"}},[t._v(". - 力扣（LeetCode）"),s("OutboundLink")],1),t._v(")。\n"),s("img",{attrs:{src:"https://i-blog.csdnimg.cn/blog_migrate/ea8927f4ce06df3e716af29351c67292.png",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("2.乌龟走得慢每次走一步，兔子走得快，每次走两步。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i-blog.csdnimg.cn/blog_migrate/45f74c05a4e0fd100d676de915d52c75.png",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("继续走，兔子先进入环。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i-blog.csdnimg.cn/blog_migrate/1c5ae57dc935562179cb8ee75910541d.png",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("继续走，兔子一圈环快走完了，而乌龟刚进入环")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i-blog.csdnimg.cn/blog_migrate/7b50500b97fd5102dc11afcee0f85491.png",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("最后乌龟走第一圈的时候，兔子第二圈刚好遇上。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i-blog.csdnimg.cn/blog_migrate/fd5c064dec9aaae73ee8ac8845d11c9c.png",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("注意：\n当然具体第几圈遇上是不确定的，根据步长与环的大小相关，但是乌龟与兔子在圈中循环跑时，只要步长不一致，他们之间的最近距离会不断减少，总会相遇。")]),t._v(" "),s("p",[t._v("但是一般情况下会设置slow走一步，fast走两步，这个设定会产生很多有规律的数学推导，比如："),s("a",{attrs:{href:"https://leetcode.cn/problems/linked-list-cycle-ii/description/",target:"_blank",rel:"noopener noreferrer"}},[t._v("142. 环形链表 II 中的快慢指针"),s("OutboundLink")],1),t._v("做法。")]),t._v(" "),s("p",[t._v("细节：")]),t._v(" "),s("p",[t._v("为什么我们要规定初始时慢指针在位置 head，快指针在位置 head.next，而不是两个指针都在位置 head（即与「乌龟」和「兔子」中的叙述相同）？")]),t._v(" "),s("p",[t._v("观察下面的代码，我们使用的是 while 循环，循环条件先于循环体。由于循环条件一定是判断快慢指针是否重合，如果我们将两个指针初始都置于 head，那么 while 循环就不会执行。因此，我们可以假想一个在 head 之前的虚拟节点，慢指针从虚拟节点移动一步到达 head，快指针从虚拟节点移动两步到达 head.next，这样我们就可以使用 while 循环了。")]),t._v(" "),s("p",[t._v("当然，我们也可以使用 do-while 循环或者其他方法。此时，我们就可以把快慢指针的初始值都置为 head。（所以，从这里可以得知，快慢指针初始化的值，可以相同也可以不同，具体取决于后面的判断条件）")]),t._v(" "),s("p",[t._v("细节：")]),t._v(" "),s("p",[t._v("为什么我们要规定初始时慢指针在位置 head，快指针在位置 head.next，而不是两个指针都在位置 head（即与「乌龟」和「兔子」中的叙述相同）？")]),t._v(" "),s("p",[t._v("观察下面的代码，我们使用的是 while 循环，循环条件先于循环体。由于循环条件一定是判断快慢指针是否重合，如果我们将两个指针初始都置于 head，那么 while 循环就不会执行。因此，我们可以假想一个在 head 之前的虚拟节点，慢指针从虚拟节点移动一步到达 head，快指针从虚拟节点移动两步到达 head.next，这样我们就可以使用 while 循环了。")]),t._v(" "),s("p",[t._v("当然，我们也可以使用 do-while 循环或者其他方法。此时，我们就可以把快慢指针的初始值都置为 head。（所以，从这里可以得知，快慢指针初始化的值，可以相同也可以不同，具体取决于后面的判断条件）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("时间复杂度：O ( N ) ，其中 N 是链表中的节点数。")]),t._v(" "),s("th",[t._v("空间复杂度：O ( 1 )")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("当链表中不存在环时，快指针将先于慢指针到达链表尾部，链表中每个节点至多被访问两次；当链表中存在环时，每一轮移动后，快慢指针的距离将减小一。而初始距离为环的长度，因此至多移动 N NN 轮。")]),t._v(" "),s("td",[t._v("我们只使用了两个指针的额外空间。")])])])]),t._v(" "),s("p",[t._v("题目类型：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("序号")]),t._v(" "),s("th",[t._v("问题")]),t._v(" "),s("th",[t._v("例题")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("判断链表是否有环；寻找入环节点")]),t._v(" "),s("td",[t._v("141. 环形链表 | 142. 环形链表 II | 287. 寻找重复数")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("读写指针。将快指针的内容记录到慢指针的位置，典型的题目是原地删除(前置移动)重复元素。")]),t._v(" "),s("td",[t._v("26. 删除有序数组中的重复项 | 80. 删除有序数组中的重复项 II | 202. 快乐数")])])])]),t._v(" "),s("p",[s("strong",[t._v("伪代码模板：")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 1.fast与slow初始化不同\n\nfast, slow = head, head.next\n# 有环则一定相遇 退出循环后，后面return True\nwhile fast!=slow :\n    if not fast or not fast.next:\n        return False\n    slow=slow.next\n    fast=fast.next.next\nreturn True\n\n# 2.fast与slow初始化相同\n# fast = slow = head\nfast = head\nslow = head\nwhile fast and fast.next:\n  slow=slow.next\n  fast=fast.next.next\n  # 有环则一定相遇 return True\n  if slow == fast:\n      return True\nreturn False\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br")])]),s("h4",{attrs:{id:"_1-2-2、左右端点指针-相向双指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2、左右端点指针-相向双指针"}},[t._v("#")]),t._v(" 1.2.2、左右端点指针（相向双指针）")])])}),[],!1,null,null,null);s.default=n.exports}}]);