(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{386:function(s,e,a){"use strict";a.r(e);var n=a(4),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"引用计数器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引用计数器"}},[s._v("#")]),s._v(" 引用计数器")]),s._v(" "),e("h2",{attrs:{id:"引用计数的存储策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引用计数的存储策略"}},[s._v("#")]),s._v(" 引用计数的存储策略")]),s._v(" "),e("ol",[e("li",[s._v("有些对象如果支持使用"),e("code",[s._v("Tagged Pointer")]),s._v("，苹果会直接将其指针值作为引用计数返回；")]),s._v(" "),e("li",[s._v("如果当前设备是"),e("code",[s._v("64")]),s._v("位环境并且使用"),e("code",[s._v("Objective-C 2.0")]),s._v("，那么“一些”对象会使用其"),e("code",[s._v("isa")]),s._v("指针的一部分空间来存储它的引用计数；")]),s._v(" "),e("li",[s._v("否则"),e("code",[s._v("Runtime")]),s._v("会使用一张散列表来管理引用计数。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// objc.h\nstruct objc_object {\n    Class isa;  // 在 arm64 架构之前\n};\n\n// objc-private.h\nstruct objc_object {\nprivate:\n    isa_t isa;  // 在 arm64 架构开始\n};\n\nunion isa_t \n{\n    isa_t() { }\n    isa_t(uintptr_t value) : bits(value) { }\n\n    Class cls;\n    uintptr_t bits;\n\n#if SUPPORT_PACKED_ISA\n\n    // extra_rc must be the MSB-most field (so it matches carry/overflow flags)\n    // nonpointer must be the LSB (fixme or get rid of it)\n    // shiftcls must occupy the same bits that a real class pointer would\n    // bits + RC_ONE is equivalent to extra_rc + 1\n    // RC_HALF is the high bit of extra_rc (i.e. half of its range)\n\n    // future expansion:\n    // uintptr_t fast_rr : 1;     // no r/r overrides\n    // uintptr_t lock : 2;        // lock for atomic property, @synch\n    // uintptr_t extraBytes : 1;  // allocated with extra bytes\n\n# if __arm64__  // 在 __arm64__ 架构下\n#   define ISA_MASK        0x0000000ffffffff8ULL  // 用来取出 Class、Meta-Class 对象的内存地址\n#   define ISA_MAGIC_MASK  0x000003f000000001ULL\n#   define ISA_MAGIC_VALUE 0x000001a000000001ULL\n    struct {\n        uintptr_t nonpointer        : 1;  // 0：代表普通的指针，存储着 Class、Meta-Class 对象的内存地址\n                                          // 1：代表优化过，使用位域存储更多的信息\n        uintptr_t has_assoc         : 1;  // 是否有设置过关联对象，如果没有，释放时会更快\n        uintptr_t has_cxx_dtor      : 1;  // 是否有C++的析构函数（.cxx_destruct），如果没有，释放时会更快\n        uintptr_t shiftcls          : 33; // 存储着 Class、Meta-Class 对象的内存地址信息\n        uintptr_t magic             : 6;  // 用于在调试时分辨对象是否未完成初始化\n        uintptr_t weakly_referenced : 1;  // 是否有被弱引用指向过，如果没有，释放时会更快\n        uintptr_t deallocating      : 1;  // 对象是否正在释放\n        uintptr_t has_sidetable_rc  : 1;  // 如果为1，代表引用计数过大无法存储在 isa 中，那么超出的引用计数会存储在一个叫 SideTable 结构体的 RefCountMap（引用计数表）散列表中\n        uintptr_t extra_rc          : 19; // 里面存储的值是对象本身之外的引用计数的数量，retainCount - 1\n#       define RC_ONE   (1ULL<<45)\n#       define RC_HALF  (1ULL<<18)\n    };\n......  // 在 __x86_64__ 架构下\n};\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br")])]),e("p",[s._v("如果"),e("code",[s._v("isa")]),s._v("非"),e("code",[s._v("nonpointer")]),s._v("，即 arm64 架构之前的"),e("code",[s._v("isa")]),s._v("指针。由于它只是一个普通的指针，存储着"),e("code",[s._v("Class")]),s._v("、"),e("code",[s._v("Meta-Class")]),s._v("对象的内存地址，所以它本身不能存储引用计数，所以以前对象的引用计数都存储在一个叫"),e("code",[s._v("SideTable")]),s._v("结构体的"),e("code",[s._v("RefCountMap")]),s._v("（引用计数表）散列表中。")]),s._v(" "),e("p",[s._v("如果"),e("code",[s._v("isa")]),s._v("是"),e("code",[s._v("nonpointer")]),s._v("，则它本身可以存储一些引用计数。从以上"),e("code",[s._v("union isa_t")]),s._v("的定义中我们可以得知，"),e("code",[s._v("isa_t")]),s._v("中存储了两个引用计数相关的东西："),e("code",[s._v("extra_rc")]),s._v("和"),e("code",[s._v("has_sidetable_rc")]),s._v("。")]),s._v(" "),e("ul",[e("li",[s._v("extra_rc：里面存储的值是对象本身之外的引用计数的数量，这 19 位如果不够存储，"),e("code",[s._v("has_sidetable_rc")]),s._v("的值就会变为 1；")]),s._v(" "),e("li",[s._v("has_sidetable_rc：如果为 1，代表引用计数过大无法存储在"),e("code",[s._v("isa")]),s._v("中，那么超出的引用计数会存储"),e("code",[s._v("SideTable")]),s._v("的"),e("code",[s._v("RefCountMap")]),s._v("中。")])]),s._v(" "),e("p",[s._v("所以，如果"),e("code",[s._v("isa")]),s._v("是"),e("code",[s._v("nonpointer")]),s._v("，则对象的引用计数存储在它的"),e("code",[s._v("isa_t")]),s._v("的"),e("code",[s._v("extra_rc")]),s._v("中以及"),e("code",[s._v("SideTable")]),s._v("的"),e("code",[s._v("RefCountMap")]),s._v("中。")]),s._v(" "),e("h2",{attrs:{id:"tagged-pointer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tagged-pointer"}},[s._v("#")]),s._v(" Tagged Pointer")]),s._v(" "),e("h2",{attrs:{id:"isa指针"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isa指针"}},[s._v("#")]),s._v(" isa指针")]),s._v(" "),e("p",[s._v("为什么既要使用一个"),e("code",[s._v("extra_rc")]),s._v("又要使用"),e("code",[s._v("SideTables")]),s._v("？")]),s._v(" "),e("p",[s._v("可能是因为历史问题，以前cpu是"),e("code",[s._v("32")]),s._v("位的，"),e("code",[s._v("isa")]),s._v("中能存储的引用计数就只有$2^7=128$。因此在"),e("code",[s._v("arm64")]),s._v("下，引用计数通常是存储在"),e("code",[s._v("isa")]),s._v("中的。")]),s._v(" "),e("h2",{attrs:{id:"sidetable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sidetable"}},[s._v("#")]),s._v(" SideTable")]),s._v(" "),e("h3",{attrs:{id:"alloc实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alloc实现"}},[s._v("#")]),s._v(" alloc实现")]),s._v(" "),e("p",[s._v("经过一系列调用，最终调用了C函数calloc,此时"),e("strong",[s._v("并没有设置引用计数为1")])]),s._v(" "),e("p",[s._v("此时"),e("strong",[s._v("并没有设置引用计数为1")])]),s._v(" "),e("h3",{attrs:{id:"retain实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retain实现"}},[s._v("#")]),s._v(" retain实现")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SideTable &table = SideTables()[this];\n//在tables里面，根据当前对象指针获取对应的sidetable\n\nsize_t &refcntStorage = table.refcnts[this];\n//获得引用计数\n\n//添加引用计数\nrefcntStorage += SIDE_TABLE_RC_ONE(4,位计算)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"release-实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#release-实现"}},[s._v("#")]),s._v(" release 实现")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SideTable &table = SideTables()[this];\nRefcountMap::iterator it = table.refcnts.find[this];\nit->second -= SIDE_TABLE_RC_ONE\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"retiancount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retiancount"}},[s._v("#")]),s._v(" retianCount")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SideTable &table = SideTables()[this];\nsize_t refcnt_result = 1;\nRefcountMap::iterator it = table.refcnts.find[this];\nrefcnt_result += it->second >> SIDE_TABLE_RC_SHIFT;(将向右偏移操作)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"引用计数的获取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引用计数的获取"}},[s._v("#")]),s._v(" 引用计数的获取")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("- (NSUInteger)retainCount {\n    return ((id)self)->rootRetainCount();\n}\n\ninline uintptr_t objc_object::rootRetainCount() {\n    if (isTaggedPointer()) return (uintptr_t)this;\n\n    sidetable_lock();\n    // 加锁，用汇编指令ldxr来保证原子性\n    isa_t bits = LoadExclusive(&isa.bits);\n    // 释放锁，使用汇编指令clrex\n    ClearExclusive(&isa.bits);\n    if (bits.nonpointer) {\n        uintptr_t rc = 1 + bits.extra_rc;\n        if (bits.has_sidetable_rc) {\n            rc += sidetable_getExtraRC_nolock();\n        }\n        sidetable_unlock();\n        return rc;\n    }\n\n    sidetable_unlock();\n    return sidetable_retainCount();\n}\n\n//sidetable_retainCount()函数实现\nuintptr_t objc_object::sidetable_retainCount() {\n    SideTable& table = SideTables()[this];\n\n    size_t refcnt_result = 1;\n\n    table.lock();\n    RefcountMap::iterator it = table.refcnts.find(this);\n    if (it != table.refcnts.end()) {\n        // this is valid for SIDE_TABLE_RC_PINNED too\n        refcnt_result += it->second >> SIDE_TABLE_RC_SHIFT;\n    }\n    table.unlock();\n    return refcnt_result;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br")])]),e("p",[s._v("从上面的代码可知，获取引用计数的时候分为三种情况：")]),s._v(" "),e("ol",[e("li",[e("code",[s._v("Tagged Pointer")]),s._v("的话，直接返回isa本身；")]),s._v(" "),e("li",[s._v("非"),e("code",[s._v("Tagged Pointer")]),s._v("，且开启了指针优化，此时引用计数先从"),e("code",[s._v("extra_rc")]),s._v("中去取（这里将取出来的值进行了+1操作，所以在存的时候需要进行-1操作），接着判断是否有"),e("code",[s._v("SideTable")]),s._v("，如果有再加上存在"),e("code",[s._v("SideTable")]),s._v("中的计数；")]),s._v(" "),e("li",[s._v("非"),e("code",[s._v("Tagged Pointer")]),s._v("，没有开启了指针优化，使用"),e("code",[s._v("sidetable_retainCount()")]),s._v("函数返回。")])]),s._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("引用计数存在什么地方？")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("Tagged Pointer")]),s._v("不需要引用计数，苹果会直接将对象的指针值作为引用计数返回；")]),s._v(" "),e("li",[s._v("开启了指针优化（"),e("code",[s._v("nonpointer == 1")]),s._v("）的对象其引用计数优先存在"),e("code",[s._v("isa")]),s._v("的"),e("code",[s._v("extra_rc")]),s._v("中，大于"),e("code",[s._v("524288")]),s._v("便存在"),e("code",[s._v("SideTable")]),s._v("的"),e("code",[s._v("RefcountMap")]),s._v("或者说是"),e("code",[s._v("DenseMap")]),s._v("中；")]),s._v(" "),e("li",[s._v("没有开启指针优化的对象直接存在"),e("code",[s._v("SideTable")]),s._v("的"),e("code",[s._v("RefcountMap")]),s._v("或者说是"),e("code",[s._v("DenseMap")]),s._v("中。")])])]),s._v(" "),e("li",[e("p",[s._v("retain/release的实质")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("Tagged Pointer")]),s._v("不参与"),e("code",[s._v("retain")]),s._v("/"),e("code",[s._v("release")]),s._v("；")]),s._v(" "),e("li",[s._v("找到引用计数存储区域，然后+1/-1，并根据是否开启指针优化，处理进位/借位的情况；")]),s._v(" "),e("li",[s._v("当引用计数减为0时，调用"),e("code",[s._v("dealloc")]),s._v("函数。")])])]),s._v(" "),e("li",[e("p",[s._v("isa是什么")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// ISA() assumes this is NOT a tagged pointer object\nClass ISA();\n\n// getIsa() allows this to be a tagged pointer object\nClass getIsa();\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("首先要知道，isa指针已经不一定是类指针了，所以需要用"),e("code",[s._v("ISA()")]),s._v("获取类指针；")]),s._v(" "),e("li",[e("code",[s._v("Tagged Pointer")]),s._v("的对象没有"),e("code",[s._v("isa")]),s._v("指针，有的是"),e("code",[s._v("isa_t")]),s._v("的结构体；")]),s._v(" "),e("li",[s._v("其他对象的isa指针还是类指针。")])])]),s._v(" "),e("li",[e("p",[s._v("对象的值是什么")]),s._v(" "),e("ul",[e("li",[s._v("如果是"),e("code",[s._v("Tagged Pointer")]),s._v("，对象的值就是指针；")]),s._v(" "),e("li",[s._v("如果非"),e("code",[s._v("Tagged Pointer")]),s._v("， 对象的值是指针指向的内存区域中的值。")])]),s._v(" "),e("p",[s._v("如何查找引用计数")]),s._v(" "),e("p",[s._v("，查找对象的引用计数表需要经过两次哈希查找：")]),s._v(" "),e("ul",[e("li",[s._v("① 第一次根据当前对象的内存地址，经过哈希查找从"),e("code",[s._v("SideTables()")]),s._v("中取出它所在的"),e("code",[s._v("SideTable")]),s._v("；")]),s._v(" "),e("li",[s._v("② 第二次根据当前对象的内存地址，经过哈希查找从"),e("code",[s._v("SideTable")]),s._v("中的"),e("code",[s._v("refcnts")]),s._v("中取出它的引用计数")])]),s._v(" "),e("p",[e("strong",[s._v("Q：为什么不是一个"),e("code",[s._v("SideTable")]),s._v("，而是使用多个"),e("code",[s._v("SideTable")]),s._v("组成"),e("code",[s._v("SideTables()")]),s._v("结构？")])]),s._v(" "),e("p",[s._v("如果只有一个"),e("code",[s._v("SideTable")]),s._v("，那我们在内存中分配的所有对象的引用计数或者弱引用都放在这个"),e("code",[s._v("SideTable")]),s._v("中，那我们对对象的引用计数进行操作时，为了多线程安全就要加锁，就存在效率问题。\n系统为了解决这个问题，就引入 “分离锁” 技术方案，提高访问效率。把对象的引用计数表分拆多个部分，对每个部分分别加锁，那么当所属不同部分的对象进行引用操作的时候，在多线程下就可以并发操作。所以，使用多个"),e("code",[s._v("SideTable")]),s._v("组成"),e("code",[s._v("SideTables()")]),s._v("结构。")])])]),s._v(" "),e("h2",{attrs:{id:"补充-一道多线程安全的题目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#补充-一道多线程安全的题目"}},[s._v("#")]),s._v(" 补充: 一道多线程安全的题目")]),s._v(" "),e("p",[s._v("以下代码运行结果")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@property (nonatomic, strong) NSString *target;\n//....\n\ndispatch_queue_t queue = dispatch_queue_create("parallel", DISPATCH_QUEUE_CONCURRENT);\nfor (int i = 0; i < 1000000 ; i++) {\n    dispatch_async(queue, ^{\n        self.target = [NSString stringWithFormat:@"ksddkjalkjd%d",i];\n    });\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("答案：大概率地发生Crash。")]),s._v(" "),e("p",[s._v("Crash的原因：过度释放。")]),s._v(" "),e("p",[s._v("这道题看着虽然是多线程范围的，但是解题的最重要思路确是在引用计数上，更准确的来说是看对强引用的理解程度。关键知识点如下：")]),s._v(" "),e("ol",[e("li",[s._v("全局队列和自定义并行队列在异步执行的时候会根据任务系统决定开辟线程个数；")]),s._v(" "),e("li",[e("code",[s._v("target")]),s._v("使用"),e("code",[s._v("strong")]),s._v("进行了修饰，Block是会截获对象的修饰符的；")]),s._v(" "),e("li",[s._v("即使使用"),e("code",[s._v("_target")]),s._v("效果也是一样，因为默认使用"),e("code",[s._v("strong")]),s._v("修饰符隐式修饰；")]),s._v(" "),e("li",[e("code",[s._v("strong")]),s._v("的源代码如下：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("objc_storeStrong(id *location, id obj) {\n    id prev = *location;\n    if (obj == prev) {\n        return;\n    }\n    objc_retain(obj);\n    *location = obj;\n    objc_release(prev);\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("假设这个并发队列创建了两个线程A和B，由于是异步的，可以同时执行。因此会出现这么一个场景，在线程A中，代码执行到了"),e("code",[s._v("objc_retain(obj)")]),s._v("，但是在线程B中可能执行到了"),e("code",[s._v("objc_release(prev)")]),s._v("，此时"),e("code",[s._v("prev")]),s._v("已经被释放了。那么当A在执行到"),e("code",[s._v("objc_release(prev)")]),s._v("就会过度释放，从而导致程序crash。")]),s._v(" "),e("p",[s._v("解决方法：")]),s._v(" "),e("ol",[e("li",[s._v("加个互斥锁")]),s._v(" "),e("li",[s._v("使用串行队列，使用串行队列的话，其实内部是靠"),e("code",[s._v("DISPATCH_OBJ_BARRIER_BIT")]),s._v("设置阻塞标志位")]),s._v(" "),e("li",[s._v("使用weak")]),s._v(" "),e("li",[s._v("Tagged Pointer，如果说上面的"),e("code",[s._v("self.target")]),s._v("指向的是一个"),e("code",[s._v("Tagged Pointer")]),s._v("技术的"),e("code",[s._v("NSString")]),s._v("，那程序就没有问题。")])])])}),[],!1,null,null,null);e.default=t.exports}}]);