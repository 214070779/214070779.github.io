(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{383:function(s,a,t){"use strict";t.r(a);var _=t(4),e=Object(_.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"isa指针是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isa指针是什么"}},[s._v("#")]),s._v(" isa指针是什么?")]),s._v(" "),a("p",[s._v("isa指针保存着指向类对象的内存地址,类对象全局只有一个,因此每个类创建出来的对象都会默认有一个isa属性,保存类对象的地址,也就是class,通过class就可以查询到这个对象的属性和方法,协议等;")]),s._v(" "),a("p",[s._v("当 ObjC 为一个对象分配内存，"),a("strong",[s._v("初始化实例变量后")]),s._v("，在这些对象的实例变量的结构体中的第一个就是 "),a("code",[s._v("isa")]),s._v("。(isa 存储该对象信息,例如引用计数器，弱引用表等)")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("isa")]),s._v("指针用来维护 “对象” 和 “类” 之间的关系，并确保对象和类能够通过"),a("code",[s._v("isa")]),s._v("指针找到对应的方法、实例变量、属性、协议等；")])]),s._v(" "),a("li",[a("p",[s._v("在 arm64 架构之前，"),a("code",[s._v("isa")]),s._v("就是一个普通的指针，直接指向"),a("code",[s._v("objc_class")]),s._v("，存储着"),a("code",[s._v("Class")]),s._v("、"),a("code",[s._v("Meta-Class")]),s._v("对象的内存地址。"),a("code",[s._v("instance")]),s._v("对象的"),a("code",[s._v("isa")]),s._v("指向"),a("code",[s._v("class")]),s._v("对象，"),a("code",[s._v("class")]),s._v("对象的"),a("code",[s._v("isa")]),s._v("指向"),a("code",[s._v("meta-class")]),s._v("对象；")])]),s._v(" "),a("li",[a("p",[s._v("从 arm64 架构开始，对"),a("code",[s._v("isa")]),s._v("进行了优化，用"),a("code",[s._v("nonpointer")]),s._v("表示，变成了一个共用体（"),a("code",[s._v("union")]),s._v("）结构，还使用位域来存储更多的信息。将 64 位的内存数据分开来存储着很多的东西，其中的 33 位才是拿来存储"),a("code",[s._v("class")]),s._v("、"),a("code",[s._v("meta-class")]),s._v("对象的内存地址信息。要通过位运算将"),a("code",[s._v("isa")]),s._v("的值"),a("code",[s._v("& ISA_MASK")]),s._v("掩码，才能得到"),a("code",[s._v("class")]),s._v("、"),a("code",[s._v("meta-class")]),s._v("对象的内存地址。")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// objc.h\nstruct objc_object {\n    Class isa;  // 在 arm64 架构之前\n};\n\n// objc-private.h\nstruct objc_object {\nprivate:\n    isa_t isa;  // 在 arm64 架构开始\n};\n\nunion isa_t \n{\n    isa_t() { }\n    isa_t(uintptr_t value) : bits(value) { }\n\n    Class cls;\n    uintptr_t bits;\n\n#if SUPPORT_PACKED_ISA\n\n    // extra_rc must be the MSB-most field (so it matches carry/overflow flags)\n    // nonpointer must be the LSB (fixme or get rid of it)\n    // shiftcls must occupy the same bits that a real class pointer would\n    // bits + RC_ONE is equivalent to extra_rc + 1\n    // RC_HALF is the high bit of extra_rc (i.e. half of its range)\n\n    // future expansion:\n    // uintptr_t fast_rr : 1;     // no r/r overrides\n    // uintptr_t lock : 2;        // lock for atomic property, @synch\n    // uintptr_t extraBytes : 1;  // allocated with extra bytes\n\n# if __arm64__  // 在 __arm64__ 架构下\n#   define ISA_MASK        0x0000000ffffffff8ULL  // 用来取出 Class、Meta-Class 对象的内存地址\n#   define ISA_MAGIC_MASK  0x000003f000000001ULL\n#   define ISA_MAGIC_VALUE 0x000001a000000001ULL\n    struct {\n        uintptr_t nonpointer        : 1;  // 0：代表普通的指针，存储着 Class、Meta-Class 对象的内存地址\n                                          // 1：代表优化过，使用位域存储更多的信息\n        uintptr_t has_assoc         : 1;  // 是否有设置过关联对象，如果没有，释放时会更快\n        uintptr_t has_cxx_dtor      : 1;  // 是否有C++的析构函数（.cxx_destruct），如果没有，释放时会更快\n        uintptr_t shiftcls          : 33; // 存储着 Class、Meta-Class 对象的内存地址信息\n        uintptr_t magic             : 6;  // 用于在调试时分辨对象是否未完成初始化\n        uintptr_t weakly_referenced : 1;  // 是否有被弱引用指向过，如果没有，释放时会更快\n        uintptr_t deallocating      : 1;  // 对象是否正在释放\n        uintptr_t has_sidetable_rc  : 1;  // 如果为1，代表引用计数过大无法存储在 isa 中，那么超出的引用计数会存储在一个叫 SideTable 结构体的 RefCountMap（引用计数表）散列表中\n        uintptr_t extra_rc          : 19; // 里面存储的值是对象本身之外的引用计数的数量，retainCount - 1\n#       define RC_ONE   (1ULL<<45)\n#       define RC_HALF  (1ULL<<18)\n    };\n......  // 在 __x86_64__ 架构下\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br")])]),a("p",[s._v("如果"),a("code",[s._v("isa")]),s._v("非"),a("code",[s._v("nonpointer")]),s._v("，即 arm64 架构之前的"),a("code",[s._v("isa")]),s._v("指针。由于它只是一个普通的指针，存储着"),a("code",[s._v("Class")]),s._v("、"),a("code",[s._v("Meta-Class")]),s._v("对象的内存地址，所以它本身不能存储引用计数，所以以前对象的引用计数都存储在一个叫"),a("code",[s._v("SideTable")]),s._v("结构体的"),a("code",[s._v("RefCountMap")]),s._v("（引用计数表）散列表中。")]),s._v(" "),a("p",[s._v("如果"),a("code",[s._v("isa")]),s._v("是"),a("code",[s._v("nonpointer")]),s._v("，则它本身可以存储一些引用计数。从以上"),a("code",[s._v("union isa_t")]),s._v("的定义中我们可以得知，"),a("code",[s._v("isa_t")]),s._v("中存储了两个引用计数相关的东西："),a("code",[s._v("extra_rc")]),s._v("和"),a("code",[s._v("has_sidetable_rc")]),s._v("。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("extra_rc：里面存储的值是对象本身之外的引用计数的数量，这 19 位如果不够存储，"),a("code",[s._v("has_sidetable_rc")]),s._v("的值就会变为 1；"),a("code",[s._v("extra_rc")]),s._v("占了19位，可以存储的最大引用计数：$2^{19}-1+1=524288$，超过它就需要进位到"),a("code",[s._v("SideTables")])]),s._v(" "),a("p",[a("code",[s._v("extra_rc")]),s._v("：表示该对象的引用计数值。"),a("code",[s._v("extra_rc")]),s._v("只是存储了额外的引用计数，实际的引用计数公式："),a("code",[s._v("实际引用计数 = extra_rc + 1")]),s._v("。这里占了8位，所以理论上可以存储的最大引用计数是："),a("code",[s._v("2^8 - 1 + 1 = 256")]),s._v("（"),a("code",[s._v("arm64")]),s._v("CPU架构下的"),a("code",[s._v("extra_rc")]),s._v("占19位，可存储的最大引用计数为"),a("code",[s._v("2^19 - 1 + 1 = 524288")]),s._v("）。")])]),s._v(" "),a("li",[a("p",[s._v("has_sidetable_rc：如果为 1，代表引用计数过大无法存储在"),a("code",[s._v("isa")]),s._v("中，那么超出的引用计数会存储"),a("code",[s._v("SideTable")]),s._v("的"),a("code",[s._v("RefCountMap")]),s._v("中，SideTables是一个Hash表，根据对象地址可以找到对应的"),a("code",[s._v("SideTable")]),s._v("，"),a("code",[s._v("SideTable")]),s._v("内包含一个"),a("code",[s._v("RefcountMap")]),s._v("，根据对象地址取出其引用计数，类型是"),a("code",[s._v("size_t")]),s._v("。"),a("br"),s._v("\n它是一个"),a("code",[s._v("unsigned long")]),s._v("，最低两位是标志位，剩下的62位用来存储引用计数。我们可以计算出引用计数的理论最大值：$2^{62+19}=2.417851639229258e24$。")]),s._v(" "),a("blockquote",[a("p",[s._v("其实isa能存储的524288在日常开发已经完全够用了，为什么还要搞个Side Table？我猜测是因为历史问题，以前cpu是32位的，isa中能存储的引用计数就只有$2^{7}=128$。因此在arm64下，引用计数通常是存储在isa中的。")])])])]),s._v(" "),a("p",[s._v("所以，如果"),a("code",[s._v("isa")]),s._v("是"),a("code",[s._v("nonpointer")]),s._v("，则对象的引用计数存储在它的"),a("code",[s._v("isa_t")]),s._v("的"),a("code",[s._v("extra_rc")]),s._v("中以及"),a("code",[s._v("SideTable")]),s._v("的"),a("code",[s._v("RefCountMap")]),s._v("中。")]),s._v(" "),a("p",[a("strong",[s._v("注:")]),s._v(" 有一些对象比较小则会使用 "),a("strong",[s._v("TaggedPointer")]),s._v("技术,不使用isa")]),s._v(" "),a("p",[s._v("isa本质是一个isa_t的类型，那isa_t是一个"),a("strong",[s._v("联合体位域结构")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("union isa_t {\n    isa_t() { }\n    isa_t(uintptr_t value) : bits(value) { }\n\n    Class cls;\n    uintptr_t bits;\n#if defined(ISA_BITFIELD)\n    struct {\n        ISA_BITFIELD;  // defined in isa.h\n    };\n#endif\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"什么是联合体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是联合体"}},[s._v("#")]),s._v(" 什么是联合体？")]),s._v(" "),a("p",[a("strong",[s._v("当多个数据需要共享内存或者多个数据每次只取其一时，可以利用联合体(union)，利用union可以用相同的存储空间存储不同型别的数据类型，从而节省内存空间。")])]),s._v(" "),a("p",[s._v("采用这种结构的原因也是基于内存优化的考虑（"),a("strong",[s._v("即二进制中每一位均可表示不同的信息")]),s._v("）。通常来说，isa指针占用的内存大小是"),a("strong",[s._v("8字节")]),s._v("，即"),a("strong",[s._v("64位")]),s._v("，已经足够存储很多的信息了，这样可以极大的节省内存，以提高性能。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://sylarimage.oss-cn-shenzhen.aliyuncs.com/2020-09-28-135637.jpg",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"http://sylarimage.oss-cn-shenzhen.aliyuncs.com/2020-09-28-135651.jpg",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"http://sylarimage.oss-cn-shenzhen.aliyuncs.com/2020-09-28-135839.jpg",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"http://sylarimage.oss-cn-shenzhen.aliyuncs.com/2020-09-28-135907.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"结构体-isa-t"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构体-isa-t"}},[s._v("#")]),s._v(" 结构体 isa_t")]),s._v(" "),a("p",[a("code",[s._v("isa_t")]),s._v(" 是一个 "),a("code",[s._v("union")]),s._v(" 类型的结构体,其中的 "),a("code",[s._v("isa_t")]),s._v("、"),a("code",[s._v("cls")]),s._v("、 "),a("code",[s._v("bits")]),s._v(" 还有结构体共用同一块地址空间。而 "),a("code",[s._v("isa")]),s._v(" 总共会占据 64 位的内存空间, 8 字节（决定于其中的结构体）")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://sylarimage.oss-cn-shenzhen.aliyuncs.com/2020-09-20-094253.jpg",alt:""}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("struct {\n   uintptr_t nonpointer        : 1;\n   uintptr_t has_assoc         : 1;\n   uintptr_t has_cxx_dtor      : 1;\n   uintptr_t shiftcls          : 44;\n   uintptr_t magic             : 6;\n   uintptr_t weakly_referenced : 1;\n   uintptr_t deallocating      : 1;\n   uintptr_t has_sidetable_rc  : 1;\n   uintptr_t extra_rc          : 8;\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("nonpointer")]),s._v("：表示是否对 isa 指针开启指针优化，0：纯isa指针，1：不⽌是类对象地址，isa 中包含了类信息、对象的引⽤计数等。 如果该实例对象启用了Non-pointer，那么会对isa的其他成员赋值，否则只会对cls赋值。")])]),s._v(" "),a("p",[s._v("是否关闭Non-pointer目前有这么几个判断条件，这些都可以在runtime源码objc-runtime-new.m中找到逻辑。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" 1：包含swift代码；\n  2：sdk版本低于10.11；\n  3：runtime读取image时发现这个image包含__objc_rawisa段；\n  4：开发者自己添加了OBJC_DISABLE_NONPOINTER_ISA=YES到环境变量中；\n  5：某些不能使用Non-pointer的类，GCD等；\n  6：父类关闭。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[a("p",[a("strong",[s._v("has_assoc")]),s._v("：关联对象标志位，0没有，1存在。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("has_cxx_dtor")]),s._v("：该对象是否有 C++ 或者 Objc 的析构器，如果有析构函数，则需要做析构逻辑，如果没有，则可以更快的释放对象。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("shiftcls")]),s._v("：存储类指针的值。开启指针优化的情况下，在 arm64 架构中有 33 位⽤来存储类指针。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("magic")]),s._v("：⽤于调试器判断当前对象是真的对象还是没有初始化的空间。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("weakly_referenced")]),s._v("：对象是否被指向或者曾经指向⼀个 ARC 的弱变量，没有弱引⽤的对象可以更快释放。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("deallocating")]),s._v("：标志对象是否正在释放内存。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("has_sidetable_rc")]),s._v("：当对象引⽤技术⼤于 10 时，则需要借⽤该变量存储进位。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("extra_rc")]),s._v("：当表示该对象的引⽤计数值，实际上是引⽤计数值减 1，例如，如果对象的引⽤计数为 10，那么 extra_rc 为 9。如果引⽤计数⼤于 10，则需要使⽤到上⾯的 has_sidetable_rc。")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://sylarimage.oss-cn-shenzhen.aliyuncs.com/2020-11-26-145612.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"isa-指针的作用与元类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isa-指针的作用与元类"}},[s._v("#")]),s._v(" isa 指针的作用与元类")]),s._v(" "),a("p",[a("strong",[s._v("Objective-C 中类也是一个对象")]),s._v("。")]),s._v(" "),a("p",[s._v("因为在 Objective-C 中，对象的方法并"),a("strong",[s._v("没有存储于对象的结构体中")]),s._v("（如果每一个对象都保存了自己能执行的方法，那么对内存的占用有极大的影响）。")]),s._v(" "),a("p",[s._v("当"),a("strong",[s._v("实例方法")]),s._v("被调用时，它要通过自己持有的 "),a("code",[s._v("isa")]),s._v(" 来查找对应的类，然后在这里的 "),a("code",[s._v("class_data_bits_t")]),s._v(" 结构体中查找对应方法的实现。同时，每一个 "),a("code",[s._v("objc_class")]),s._v(" 也有一个"),a("strong",[s._v("指向自己的父类的指针")]),s._v(" "),a("code",[s._v("super_class")]),s._v(" 用来查找继承的方法。")]),s._v(" "),a("p",[s._v("类方法的实现又是如何查找并且调用的呢？这时，就需要引入"),a("em",[s._v("元类")]),s._v("来保证无论是类还是对象都能"),a("strong",[s._v("通过相同的机制查找方法的实现")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://sylarimage.oss-cn-shenzhen.aliyuncs.com/2020-09-20-074153.jpg",alt:""}})]),s._v(" "),a("p",[s._v("让每一个类的 "),a("code",[s._v("isa")]),s._v(" 指向对应的元类，这样就达到了使类方法和实例方法的调用机制相同的目的：")]),s._v(" "),a("ul",[a("li",[s._v("实例方法调用时，通过对象的 "),a("code",[s._v("isa")]),s._v(" 在类中获取方法的实现")]),s._v(" "),a("li",[s._v("类方法调用时，通过类的 "),a("code",[s._v("isa")]),s._v(" 在元类中获取方法的实现")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://sylarimage.oss-cn-shenzhen.aliyuncs.com/2020-09-20-074337.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"什么是元类-meta-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是元类-meta-class"}},[s._v("#")]),s._v(" 什么是元类（meta-class）？")]),s._v(" "),a("p",[s._v("Objective-C 的一个类也是一个对象。这意味着你可以发送消息给一个类。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("NSStringEncoding defaultStringEncoding = [NSString defaultStringEncoding];\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在这个示例里，"),a("code",[s._v("defaultStringEncoding")]),s._v("被发送给了"),a("code",[s._v("NSString")]),s._v("类。")]),s._v(" "),a("p",[s._v("之所以能成功是因为 Objective-C 中每个类本身也是一个对象。如上面所看到的，这意味着类结构也必须以一个isa指针开始，从而可以和"),a("code",[s._v("objc_object")]),s._v("在二进制层面兼容，之后这个结构的下一字段必须是一个指向父类的指针（对于基类则为nil）。")]),s._v(" "),a("p",[s._v("正如我上周展示的，定义一个"),a("code",[s._v("Class")]),s._v("有很多种方式，取决于你的运行时库版本，但有一点，它们都以"),a("code",[s._v("isa")]),s._v("字段开始，并且仅跟着一个"),a("code",[s._v("superclass")]),s._v("字段")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef struct objc_class *Class;\nstruct objc_class {\n    Class isa;\n    Class super_class;\n    /* followed by runtime specific details... */\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("为了调用"),a("code",[s._v("Class")]),s._v("里的方法，该"),a("code",[s._v("Class")]),s._v("的"),a("code",[s._v("isa")]),s._v("指针也必须指向一个包含了该"),a("code",[s._v("Class")]),s._v("方法列表的"),a("code",[s._v("Class")]),s._v("。")]),s._v(" "),a("p",[s._v("这就引出了元类的定义：元类是"),a("code",[s._v("Class")]),s._v("的类。")]),s._v(" "),a("p",[s._v("简单来说就是：")]),s._v(" "),a("ul",[a("li",[s._v("当你给对象发送消息时，消息是在寻找这个对象的类的方法列表;")]),s._v(" "),a("li",[s._v("当你给类发消息时，消息是在寻找这个类的元类的方法列表。")])]),s._v(" "),a("p",[s._v("元类是必不可少的，因为它存储了类的类方法。每个类都必须有独一无二的元类，因为每个类都有独一无二的类方法。")]),s._v(" "),a("h2",{attrs:{id:"元类的类是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元类的类是什么"}},[s._v("#")]),s._v(" 元类的类是什么？")]),s._v(" "),a("p",[s._v("元类，就像之前的类一样，它也是一个对象。你也可以调用它的方法。自然的，这就意味着他必须也有一个类。")]),s._v(" "),a("p",[s._v("所有的元类都使用根元类（继承体系中处于顶端的类的元类）作为他们的类。这就意味着所有"),a("code",[s._v("NSObject")]),s._v("的子类（大多数类）的元类都会以"),a("code",[s._v("NSObject")]),s._v("的元类作为他们的类")]),s._v(" "),a("p",[s._v("根据这个规则，所有的元类使用根元类作为他们的类，根元类的元类则就是它自己。也就是说基类的元类的isa指针指向他自己")]),s._v(" "),a("h2",{attrs:{id:"类和元类的继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类和元类的继承"}},[s._v("#")]),s._v(" 类和元类的继承")]),s._v(" "),a("p",[s._v("类用"),a("code",[s._v("super_class")]),s._v("指针指向了父类，同样的，元类用"),a("code",[s._v("super_class")]),s._v("指向类的"),a("code",[s._v("super_class")]),s._v("的元类。")]),s._v(" "),a("p",[s._v("说的更拗口一点就是，根元类把它自己的基类设置成了"),a("code",[s._v("super_class")]),s._v("。")]),s._v(" "),a("p",[s._v("在这样的继承体系下，所有实例、类以及元类都继承自一个基类。")]),s._v(" "),a("p",[s._v("这意味着对于继承于"),a("code",[s._v("NSObject")]),s._v("的所有实例、类和元类，他们可以使用"),a("code",[s._v("NSObject")]),s._v("的所有实例方法，类和元类可以使用NSObject的所有类方法")]),s._v(" "),a("h2",{attrs:{id:"为什么要设计metaclass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要设计metaclass"}},[s._v("#")]),s._v(" 为什么要设计metaclass")]),s._v(" "),a("p",[s._v("metaClass是单一职责和扩展性: instance的信息由Class所有; Class的信息则由metaClass所有;")]),s._v(" "),a("p",[s._v("否则类方法，实际方法都在同一个流程中，类对象、元类对象能够复用消息发送流程机制；")]),s._v(" "),a("ul",[a("li",[s._v("根据消息接受者的"),a("code",[s._v("isa")]),s._v("指针找到"),a("code",[s._v("metaclass")]),s._v("（因为类方法存在元类中。如果调用的是实例方法，isa指针指向的是类对象。）")]),s._v(" "),a("li",[s._v("进入"),a("code",[s._v("CacheLookup")]),s._v("流程，这一步会去寻找方法缓存，如果缓存命中则直接调用方法的实现，如果缓存不存在则进入"),a("code",[s._v("objc_msgSend_uncached")]),s._v("流程。")])]),s._v(" "),a("h2",{attrs:{id:"类对象和元类对象分别是什么-他们之间有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类对象和元类对象分别是什么-他们之间有什么区别"}},[s._v("#")]),s._v(" 类对象和元类对象分别是什么，他们之间有什么区别？")]),s._v(" "),a("p",[s._v("实例对象可以通过isa指针找到它的类对象，类对象存储实例方法列表等信息。类对象可以通过isa指针找到它的元类对象，从而可以访问类方法列表等相关信息")]),s._v(" "),a("p",[s._v("类对象或是元类对象都是objc_class数据结构的，objc_class由于继承自objc_object,所以他们都有isa指针，所有实例可以找到类，类可以找到元类")])])}),[],!1,null,null,null);a.default=e.exports}}]);