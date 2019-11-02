<style src="@/sass/global.scss" lang="scss"></style>
<style src="@/login/test.scss" lang="scss"></style>
<template>
<div class="test">
    <div class="aside">
        <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
            <el-submenu index="0">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>菜单</span>
                </template>
                <el-menu-item v-for="item in titleList" :key="item.id" @click="changeCurrent(item.id)">{{item.id}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
    <div class="main">
        <div v-if="current == 1" class="c1">
            <div>
            background-clip:padding-box
            <br/>默认：background-clip:border-box
            <br/>背景延伸到边框
            </div>
        </div>
        <div v-if="current == 2" class="c2">
            <div>扩张半径,元素圈外,用inset向内</div>
            <!-- <div>元素2</div> -->
            <!-- <div>outline轮廓线矩形描边，不会占据空间</div> -->
        </div>
        <div v-if="current == 3" class="c3">
            <div>背景图定位，扩展和回退方案</div>
        </div>
        <div v-if="current == 4" class="c4">
            <div>偏移量与内边距一致，background-origin方案，默认padding-box</div>
        </div>
        <div v-if="current == 5" class="c5">
            <div>calc(左，上)</div>
        </div>
        <div v-if="current == 6" class="c6">
            <div>边框内圆角，用box-shadow填补空隙</div>
        </div>
        <div v-if="current == 7" class="c7">
        </div>
        <div v-if="current == 8" class="c8">
        </div>
        <div v-if="current == 9" class="c9">
        </div>
        <div v-if="current == 10" class="c10">
        </div>
        <div v-if="current == 11" class="c11">
        </div>
        <div v-if="current == 12" class="c12">
        </div>
        <div v-if="current == 13" class="c13">
        </div>
        <div v-if="current == 14" class="c14">
        </div>
        <div v-if="current == 15" class="c15">
        </div>
        <div v-if="current == 16" class="c16">
        </div>
        <div v-if="current == 17" class="c17">
        </div>
        <div v-if="current == 18" class="c18">
            <p class="loading">Loading…</p>
        </div>
        <div v-if="current == 19" class="c19">
        </div>
        <div v-if="current == 20" class="c20">
            <svg width="90" height="90" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="#ab4"/>
                <circle cx="45" cy="15" r="15" fill="#655"/>
                <circle cx="75" cy="15" r="15" fill="#e07"/>
                <circle cx="15" cy="45" r="15" fill="#655"/>
                <circle cx="45" cy="45" r="15" fill="hsl(15, 25%, 75%)"/>
                <circle cx="75" cy="45" r="15" fill="#655"/>
                <circle cx="15" cy="75" r="15" fill="#fb3"/>
                <circle cx="45" cy="75" r="15" fill="#655"/>
                <circle cx="75" cy="75" r="15" fill="#58a"/>
            </svg>
            <div>Bacon ipsum dolor amet eu adipisicing elit tongue ground round ex fatback proident kielbasa ham hock. Sausage beef beef ribs aliquip t-bone mollit. Quis beef tri-tip sunt, cupim ut magna salami t-bone. Ut laboris bresaola ribeye biltong landjaeger. Chuck pork belly sed sausage.</div>
            <div>Bacon ipsum dolor amet eu adipisicing elit tongue ground round ex fatback proident kielbasa ham hock. Sausage beef beef ribs aliquip t-bone mollit. Quis beef tri-tip sunt, cupim ut magna salami t-bone. Ut laboris bresaola ribeye biltong landjaeger. Chuck pork belly sed sausage.</div>
        </div>
        <div v-if="current == 21" class="c21">
            <div>Bacon ipsum dolor amet eu adipisicing elit tongue ground round ex fatback proident kielbasa ham hock. Sausage beef beef ribs aliquip t-bone mollit. Quis beef tri-tip sunt, cupim ut magna salami t-bone. Ut laboris bresaola ribeye biltong landjaeger. Chuck pork belly sed sausage.</div>
        </div>
        <div v-if="current == 22" class="c22">
            <div>Bacon ipsum dolor amet eu adipisicing elit tongue ground round ex fatback proident kielbasa ham hock. Sausage beef beef ribs aliquip t-bone mollit. Quis beef tri-tip sunt, cupim ut magna salami t-bone. Ut laboris bresaola ribeye biltong landjaeger. Chuck pork belly sed sausage.</div>
        </div>
        <div v-if="current == 23" class="c23">
            <div>Bacon ipsum dolor amet eu adipisicing elit tongue ground round ex fatback proident kielbasa ham hock. Sausage beef beef ribs aliquip t-bone mollit. Quis beef tri-tip sunt, cupim ut magna salami t-bone. Ut laboris bresaola ribeye biltong landjaeger. Chuck pork belly sed sausage.</div>
        </div>
        <div v-if="current == 24" class="c24">
            <div>Bacon ipsum dolor amet eu adipisicing elit tongue ground round ex fatback proident kielbasa ham hock. Sausage beef beef ribs aliquip t-bone mollit. Quis beef tri-tip sunt, cupim ut magna salami t-bone. Ut laboris bresaola ribeye biltong landjaeger. Chuck pork belly sed sausage.</div>
        </div>
        <div v-if="current == 25" class="c25">
            <div class="footnote"><sup>1</sup> This is a footnote.</div>
        </div>
        <div v-if="current == 26" class="c26">
            <div></div>
        </div>
        <div v-if="current == 27" class="c27">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div v-if="current == 28" class="c28">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div v-if="current == 29" class="c29">
            <a href="#yolo" class="button"><div>Click me</div></a>
            <button class="button"><div>Click me</div></button>
        </div>
        <div v-if="current == 30" class="c30">
            <a href="#yolo" class="button"><div>Click me</div></a>
            <button class="button"><div>Click me</div></button>
        </div>
        <div v-if="current == 31" class="c31">
            <div class="diamond">
                <img src="@/login/adamcatlace.jpg" />
            </div>
        </div>
        <div v-if="current == 32" class="c32">
            <img src="@/login/adamcatlace.jpg" />
            <img src="@/login/adam-sleeping.jpg" />
        </div>
        <div v-if="current == 33" class="c33">
            <div>Hey, focus! You’re supposed to be looking at my corners, not reading my text. The text is just placeholder!</div>
        </div>
        <div v-if="current == 34" class="c34">
            <div>Hey, focus! You’re supposed to be looking at my corners, not reading my text. The text is just placeholder!</div>
        </div>
        <div v-if="current == 35" class="c35">
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="#58a">
                <polygon points="0,100 100,0 200,0 300,100 300,200 200,300 100,300 0,200" />
            </svg>
            <div>Hey, focus! You’re supposed to be looking at my corners, not reading my text. The text is just placeholder!</div>
        </div>
        <div v-if="current == 36" class="c36">
            <div>Hey, focus! You’re supposed to be looking at my corners, not reading my text. The text is just placeholder!</div>
        </div>
        <div v-if="current == 37" class="c37">
            <div>梯形</div>
            <nav>
                <a href="#">Home</a>
                <a href="#" class="selected">Projects</a>
                <a href="#">About</a>
            </nav>
            <main>
                Content area
            </main>

            <nav class="left">
                <a href="#">Home</a>
                <a href="#" class="selected">Projects</a>
                <a href="#">About</a>
            </nav>
            <main>
                Content area
            </main>

            <nav class="right">
                <a href="#">Home</a>
                <a href="#" class="selected">Projects</a>
                <a href="#">About</a>
            </nav>
            <main>
                Content area
            </main>
        </div>
        <div v-if="current == 38" class="c38">
            <div class="pie"></div>
        </div>
        <div v-if="current == 39" class="c39">
            <div class="pie39" :style="{'animation-delay':'0s'}"></div>
            <div class="pie39" :style="{'animation-delay':'-20s'}"></div>
            <div class="pie39" :style="{'animation-delay':'-40s'}"></div>
            <div class="pie39" :style="{'animation-delay':'-60s'}"></div>
            <div class="pie39" :style="{'animation-delay':'-80s'}"></div>
        </div>
        <div v-if="current == 40" class="c40">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div v-if="current == 41" class="c41">
            <!-- <div class="pie">
                <svg width="100" height="100">
                    <circle r="32" cx="50" cy="50" stroke-dasharray="5 5"></circle>
                </svg>
            </div> -->
            <div class="pie">
                <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle r="16" cx="16" cy="16" stroke-dasharray="20 100"></circle>
                </svg>
            </div>
            <div class="pie">
                <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle r="16" cx="16" cy="16" stroke-dasharray="60 100"></circle>
                </svg>
            </div>
            <div class="pie animated">
                <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle r="16" cx="16" cy="16" stroke-dasharray="0 100"></circle>
                </svg>
            </div>
        </div>
        <div v-if="current == 42" class="c42">
            <div></div>
        </div>
        <div v-if="current == 43" class="c43">
            <div></div>
        </div>
        <div v-if="current == 44" class="c44">
            <div></div>
        </div>
        <div v-if="current == 45" class="c45">
            <div class="speech">Speech bubble</div>
            <div class="dotted">Dotted border</div>
            <div class="cutout">Cutout corners</div>
        </div>
        <div v-if="current == 46" class="c46">
            <img src="@/login/adamcatlace.jpg" />
        </div>
        <div v-if="current == 47" class="c47">
            <div class="tinted-image"></div>
        </div>
        <div v-if="current == 48" class="c48">
            <main>
            <blockquote>“The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful.”</em>
            <footer>— <cite>Oscar Wilde, The Picture of Dorian Gray</cite></footer>
            </blockquote>
            </main>
        </div>
        <div v-if="current == 49" class="c49">
            <div>“The only way to get rid of a temptation is to yield to it.”
                — Oscar Wilde, The Picture of Dorian Gray</div>
        </div>
        <div v-if="current == 50" class="c50">
            <div>“The only way to get rid of a temptation is to yield to it.”
                — Oscar Wilde, The Picture of Dorian Gray</div>
        </div>
        <div v-if="current == 51" class="c51">
            <div class="note">“The only way to get rid of a temptation is to yield to it.”
            — Oscar Wilde, The Picture of Dorian Gray</div>
            <div class="note">“The only way to get rid of a temptation is to yield to it.”
            — Oscar Wilde, The Picture of Dorian Gray</div>
            <div class="note">“The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful.”
            — Oscar Wilde, The Picture of Dorian Gray</div> 
        </div>
        <div v-if="current == 52" class="c52">
            “The only way to get rid of a temptation is to yield to it.”
        </div>
        <div v-if="current == 53" class="c53">
            <dl>
                <dt>Name:</dt>
                <dd>Lea Verou</dd>
                
                <dt>Email:</dt>
                <dd>lea@verou.me</dd>
                <dd>leaverou@mit.edu</dd>
                
                <dt>Location:</dt>
                <dd>Earth</dd>
            </dl>
        </div>
        <div v-if="current == 54" class="c54">
            <pre><code>while (true) {
                var d = new Date();
                if (d.getDate()==1 &amp;&amp;
                    d.getMonth()==3) {
                    alert("TROLOLOL");
                }
            }</code></pre>
        </div>
        <div v-if="current == 55" class="c55">
        </div>
        <div v-if="current == 56" class="c56">
            Common ligatures: fi ff fl ffi ffl <br />
            Discretionary ligatures: st ct
        </div>
        <div v-if="current == 57" class="c57">
            <h1>HTML & CSS</h1>
        </div>
        <div v-if="current == 58" class="c58">
            <p>“The only way to <a>get rid of a temp­ta­tion</a> is to <a>yield</a> to it.”</p>
            <p>“The only way to <a>get rid of a temp­ta­tion</a> is to <a>yield</a> to it.”</p>
        </div>
        <div v-if="current == 59" class="c59">
            <p>“The only way to <a>get rrid of a temp­ta­toin</a> is to <a>yeild</a> to it.”</p>
        </div>
        <div v-if="current == 60" class="c60">
            <p>“The only way to get rid of a temp­ta­tion is to yield to it.”</p>
            <p>“The only way to get rid of a temp­ta­tion is to yield to it.”</p>
        </div>
        <div v-if="current == 61" class="c61">
            <h1>CSS</h1>
            <h1><svg overflow="visible" width="2em" height="1.2em"><use xlink:href="#css" /><text id="css" y="1em">CSS</text></svg></h1>
        </div>
        <div v-if="current == 62" class="c62">
            <a href="http://csssecrets.io">Glow</a>
        </div>
        <div v-if="current == 63" class="c63">
            CSS3d
        </div>
        <div v-if="current == 64" class="c64">
            <div class="circular">
                circular reasoning works because
            </div>
        </div>
        <div v-if="current == 65" class="c65">
            <button>Button</button>
            <button disabled>Disabled button</button>
        </div>
        <div v-if="current == 66" class="c66">
            <button>+</button>
        </div>
        <div v-if="current == 67" class="c67">
            <button>+</button>
        </div>
        <div v-if="current == 68" class="c68">
            <input type="checkbox" id="awesome" autofocus />
            <label for="awesome">Awesome!</label>
            <br />
            <input type="checkbox" id="awesome2" checked />
            <label for="awesome2">Awesome!</label>
            <br />
            <input type="checkbox" id="awesome3" disabled />
            <label for="awesome3">Awesome!</label>
            <br />
            <input type="checkbox" id="awesome4" checked disabled />
            <label for="awesome4">Awesome!</label>
        </div>
        <div v-if="current == 69" class="c69">
            <input type="checkbox" id="awesome" autofocus />
            <label for="awesome">Awesome!</label>

            <input type="checkbox" id="awesome2" checked />
            <label for="awesome2">Awesome!</label>
        </div>
        <div v-if="current == 70" class="c70">
            <img src="http://csssecrets.io/images/adamcatlace.jpg" class="lightbox" />
            <p>Bacon ipsum dolor amet consectetur xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxx xx xxxxxxx xxxxx  xxxxxx xxxxxxxx xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxx xxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxx xx xxxxxxx xxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxx xxxxxxx xxxxxx xxxxxxx xxxx xxxx xxxx</p>
            <p>Bacon ipsum dolor amet consectetur xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxx xx xxxxxxx xxxxx  xxxxxx xxxxxxxx xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxx xxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxx xx xxxxxxx xxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxx xxxxxxx xxxxxx xxxxxxx xxxx xxxx xxxx</p>
            <p>Bacon ipsum dolor amet consectetur xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxx xx xxxxxxx xxxxx  xxxxxx xxxxxxxx xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxx xxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxx xx xxxxxxx xxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxx xxxxxxx xxxxxx xxxxxxx xxxx xxxx xxxx</p>
            <p>Bacon ipsum dolor amet consectetur xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxx xx xxxxxxx xxxxx  xxxxxx xxxxxxxx xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxx xxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxx xx xxxxxxx xxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxx xxxxxxx xxxxxx xxxxxxx xxxx xxxx xxxx</p>
        </div>
        <div v-if="current == 71" class="c71">
            <button onclick="document.querySelector('#modal').showModal()">Click me</button>
            <dialog id="modal">
                O HAI!
                <button onclick="this.parentNode.close()">Close</button>
            </dialog>
        </div>
        <div v-if="current == 72" class="c72">
            <dialog>O HAI, I’m a dialog. Click on me to dismiss.</dialog>
            <main>
                <button>Show dialog</button>
                <p>Bacon ipsum dolor amet consectetur xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxx xx xxxxxxx xxxxx  xxxxxx xxxxxxxx xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxx xxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxx xx xxxxxxx xxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxx xxxxxxx xxxxxx xxxxxxx xxxx xxxx xxxx</p>
                <p>Bacon ipsum dolor amet consectetur xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxx xx xxxxxxx xxxxx  xxxxxx xxxxxxxx xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxx xxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxx xx xxxxxxx xxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxx xxxxxxx xxxxxx xxxxxxx xxxx xxxx xxxx</p>
                <p>Bacon ipsum dolor amet consectetur xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxx xx xxxxxxx xxxxx  xxxxxx xxxxxxxx xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxx xxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxx xx xxxxxxx xxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxx xxxxxxx xxxxxx xxxxxxx xxxx xxxx xxxx</p>
                <p>Bacon ipsum dolor amet consectetur xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxx xx xxxxxxx xxxxx  xxxxxx xxxxxxxx xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxxxxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxxxxx xxxxxxxxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxxx xx xxxxxxx xxx xxxxxxx xxxx xxxx xxxx xxxxxx xxxxxxxx  xxxxxx xxx xxx xxx xxxxxxx xxxxxx xxxxxxx xxxx xxxx xxxx</p>
            </main>
        </div>
        <div v-if="current == 73" class="c73">
            <ul>	
                <li>Ada Catlace</li>	
                <li>Alan Purring</li>
                <li>Schrödingcat</li>
                <li>Tim Purrners-Lee</li>
                <li>Webkitty</li>	
                <li>Json</li>
                <li>Void</li>
                <li>Neko</li>	
                <li>NaN</li>
                <li>Cat5</li>
                <li>Vector</li>
            </ul>
        </div>
        <div v-if="current == 74" class="c74">
            <div class="image-slider">
                <div>
                    <img src="http://csssecrets.io/images/adamcatlace-before.jpg" alt="Before" />
                </div>
                <img src="http://csssecrets.io/images/adamcatlace.jpg" />
            </div>
        </div>
        <div v-if="current == 75" class="c75">
            <p>Let’s assume we have some text here. Bacon ipsum dolor sit amet turkey veniam shankle, culpa short ribs kevin t-bone occaecat.</p>
            <figure>
                <img src="http://csssecrets.io/images/adamcatlace.jpg" />
                <figcaption>
                    The great Sir Adam Catlace was named after Countess Ada Lovelace, the first programmer ever.
                </figcaption>
            </figure>
            <p>We also have some more text here. Et laborum venison nostrud, ut veniam sint kielbasa ullamco pancetta.</p>
        </div>
        <div v-if="current == 76" class="c76">
            <section>
            <h1>With table-layout: auto</h1>
            <div>
                <table>
                    <tr>
                        <td>If we don’t…</td>
                        <td>specify a cell width, they will be assigned one that depends on their contents. Notice how the cell with the more content here is much wider.</td>
                    </tr>
                </table>
                
                <table>
                    <tr>
                        <td>If we don’t…</td>
                        <td>specify a cell width, they will be assigned one that depends on their contents. Notice how the cell with the more content here is much wider.</td>
                    </tr>
                    <tr>
                        <td>All rows take part in calculating the widths, not just the first one.</td>
                        <td>Notice how the dimensions here are different than the previous example.</td>
                    </tr>
                </table>
                
                <table>
                    <tr>
                        <td style="width: 1000px">If we specify a width, it will not always be followed. I have a width of <code>1000px</code>…</td>
                        <td style="width: 2000px">…and I have a width of <code>2000px</code>. Because there’s not enough space for <code>3000px</code>, they are reduced proportionally, to 33.3% and 66.6% of the total width.</td>
                    </tr>
                </table>
                
                <table>
                    <tr>
                        <td>If we prevent word wrapping, the table can become so wide it grows beyond its container.</td>
                        <td class="preformatted">…and <code>text-overflow: ellipsis</code> doesn’t help either.</td>
                    </tr>
                </table>
                
                <table>
                    <tr>
                        <td>Large images and blocks of code can also cause the same issue.</td>
                        <td><img src="http://lea.verou.me/book/panoramic.jpg" /></td>
                    </tr>
                </table>
            </div>
        </section>
        <section>
            <h1>With table-layout: fixed</h1>
            <div></div>
        </section>
        </div>
        <div v-if="current == 77" class="c77">
            <ul class="palette">
                <li>
                    <div class="color-options">
                        <a class="add" href="#">Add</a>
                        <a class="delete" href="#">Delete</a>
                    </div>
                </li>
            </ul>
        </div>
        <div v-if="current == 78" class="c78">
            <header>
                <h1>Fluid background, <br />fixed content</h1>
            </header>
            <section>
                <h1>Heading</h1>
                <p>Bacon ipsum dolor amet voluptate et shoulder, ipsum flank tongue exercitation commodo sed beef ribs drumstick in venison laborum. Laboris ut enim id drumstick, et aute esse. Consequat ad kielbasa anim pork loin turkey qui cupidatat drumstick doner labore. Nulla sirloin jerky do sed magna meatloaf. Ribeye ea ut elit leberkas laboris sausage corned beef drumstick cillum non.</p>
            </section>
            <section>
                <h1>Another heading</h1>
                <p>Nostrud landjaeger cillum beef cow tail cupidatat non mollit voluptate jowl. Enim sunt in, flank hamburger proident qui. Id aute excepteur chuck magna tempor ipsum pork chop t-bone. Frankfurter meatball pork loin beef et leberkas pork. Pig ball tip pancetta in.</p>
                <p>Ribeye in veniam ipsum flank. Elit incididunt t-bone proident meatball. Porchetta exercitation prosciutto sausage chuck ut eu brisket shank pastrami turkey sunt laboris tenderloin anim. Landjaeger do venison laboris kevin.</p>
            </section>
            <footer>
                <p>&copy; 2015 Lea Verou (j/k, feel free to use wherever)</p>
                <p>Consectetur et t-bone pork loin. Tri-tip cupim in, spare ribs velit exercitation in. Tempor cillum fugiat, nisi leberkas reprehenderit anim laboris proident cow. Eu fatback kevin sint, ad shoulder in venison picanha. Sausage drumstick capicola, culpa boudin pork belly minim aute ipsum biltong picanha venison nulla adipisicing.</p>
            </footer>
        </div>
        <div v-if="current == 79" class="c79">
            <main>
                Center me, please!
            </main>
        </div>
        <div v-if="current == 80" class="c80">
            <main>
                <h1>Am I centered yet?</h1>
                <p>Center me, please!</p>
            </main>
        </div>
        <div v-if="current == 81" class="c81">
            <main>
                <h1>Am I centered yet?</h1>
                <p>Center me, please!</p>
            </main>
        </div>
        <div v-if="current == 82" class="c82">
            <main>
                <h1>Am I centered yet?</h1>
                <p>Center me, please!</p>
            </main>
        </div>
        <div v-if="current == 83" class="c83">
            <header>
                <h1>Site name</h1>
            </header>
            <main>
                <input type="checkbox" id="contents" /><label for="contents">Toggle contents</label>
                <p>Bacon ipsum dolor sit amet turkey veniam shankle, culpa short ribs kevin t-bone occaecat. Et laborum venison nostrud, ut veniam sint kielbasa ullamco pancetta. Qui drumstick tail, bacon leberkas shoulder capicola laborum. Minim ipsum bacon, mollit laboris t-bone pariatur. Ham hock reprehenderit sint beef, sausage pig eiusmod t-bone shankle strip steak.</p>
                <p>Cow enim excepteur, boudin dolore lorem magna fugiat consequat voluptate. Picanha fugiat chicken, cupim aliquip magna filet mignon prosciutto ut nostrud. Kielbasa rump frankfurter sunt corned beef. Andouille in cillum deserunt, rump et picanha landjaeger tongue anim.</p>
                <p>Ad meatball ipsum ground round shank. Quis ipsum meatball exercitation. Laborum swine spare ribs, sunt ball tip magna t-bone venison. Velit doner voluptate non occaecat do ribeye kevin strip steak et. Esse biltong shank ribeye dolor pariatur aute deserunt non est eiusmod pork belly pancetta pork chop. Pork chop id consectetur rump, meatball short loin brisket tail andouille deserunt alcatra irure prosciutto do.</p>
                <p>Dolore reprehenderit ex, meatball doner commodo consectetur ea ribeye. Ad aliqua kevin, chuck excepteur minim et cow esse ham hock landjaeger. Alcatra bresaola dolore tempor do, excepteur in velit flank officia dolore meatloaf corned beef picanha. Eu pancetta brisket eiusmod ipsum aute sausage, culpa rump shoulder excepteur nostrud venison sed pork loin. Tempor proident do magna ground round. Ut venison frankfurter et veniam dolore. Pig pork belly beef ribs kevin, doner exercitation magna esse shankle.</p>
                <p>Flank anim chuck boudin id consectetur bresaola ham pork loin cupim andouille frankfurter. Proident do ball tip nostrud nulla sed, frankfurter ut commodo corned beef ut. Ex aute in, pig deserunt beef ribs turducken pastrami irure ball tip pork belly pork chop sausage id. Chicken sunt nisi tempor sed. In eiusmod non fatback tempor tenderloin pastrami adipisicing cow lorem ut tail jerky cupidatat venison. Jowl consequat commodo pork loin ipsum pork belly prosciutto aute beef. Ball tip shoulder aliqua, fugiat landjaeger kevin pork chop beef ribs leberkas hamburger cillum turkey ut doner culpa.</p>
            </main>
            <footer>
                <p>© 2015 No rights reserved.</p>
                <p>Made with ♥ by an anonymous pastafarian.</p>
            </footer>
        </div>
        <div v-if="current == 84" class="c84">
            <header>
                <h1>Site name</h1>
            </header>
            <main>
                <input type="checkbox" id="contents" /><label for="contents">Toggle contents</label>
                <p>Bacon ipsum dolor sit amet turkey veniam shankle, culpa short ribs kevin t-bone occaecat. Et laborum venison nostrud, ut veniam sint kielbasa ullamco pancetta. Qui drumstick tail, bacon leberkas shoulder capicola laborum. Minim ipsum bacon, mollit laboris t-bone pariatur. Ham hock reprehenderit sint beef, sausage pig eiusmod t-bone shankle strip steak.</p>
                <p>Cow enim excepteur, boudin dolore lorem magna fugiat consequat voluptate. Picanha fugiat chicken, cupim aliquip magna filet mignon prosciutto ut nostrud. Kielbasa rump frankfurter sunt corned beef. Andouille in cillum deserunt, rump et picanha landjaeger tongue anim.</p>
                <p>Ad meatball ipsum ground round shank. Quis ipsum meatball exercitation. Laborum swine spare ribs, sunt ball tip magna t-bone venison. Velit doner voluptate non occaecat do ribeye kevin strip steak et. Esse biltong shank ribeye dolor pariatur aute deserunt non est eiusmod pork belly pancetta pork chop. Pork chop id consectetur rump, meatball short loin brisket tail andouille deserunt alcatra irure prosciutto do.</p>
                <p>Dolore reprehenderit ex, meatball doner commodo consectetur ea ribeye. Ad aliqua kevin, chuck excepteur minim et cow esse ham hock landjaeger. Alcatra bresaola dolore tempor do, excepteur in velit flank officia dolore meatloaf corned beef picanha. Eu pancetta brisket eiusmod ipsum aute sausage, culpa rump shoulder excepteur nostrud venison sed pork loin. Tempor proident do magna ground round. Ut venison frankfurter et veniam dolore. Pig pork belly beef ribs kevin, doner exercitation magna esse shankle.</p>
                <p>Flank anim chuck boudin id consectetur bresaola ham pork loin cupim andouille frankfurter. Proident do ball tip nostrud nulla sed, frankfurter ut commodo corned beef ut. Ex aute in, pig deserunt beef ribs turducken pastrami irure ball tip pork belly pork chop sausage id. Chicken sunt nisi tempor sed. In eiusmod non fatback tempor tenderloin pastrami adipisicing cow lorem ut tail jerky cupidatat venison. Jowl consequat commodo pork loin ipsum pork belly prosciutto aute beef. Ball tip shoulder aliqua, fugiat landjaeger kevin pork chop beef ribs leberkas hamburger cillum turkey ut doner culpa.</p>
            </main>
            <footer>
                <p>© 2015 No rights reserved.</p>
                <p>Made with ♥ by an anonymous pastafarian.</p>
            </footer>
        </div>
        <div v-if="current == 85" class="c85">
            <div class="ball"></div>
        </div>
        <div v-if="current == 86" class="c86">
            <label>
                Your username:
                <input value="leaverou"></input>
                <span class="callout">
                Only letters, numbers, underscores (_) and hyphens (-) allowed!
                </span>
            </label>
        </div>
        <div v-if="current == 87" class="c87">
        </div>
        <div v-if="current == 88" class="c88">
            <div class="loader">Loading…</div>
        </div>
        <div v-if="current == 89" class="c89">
            <p class="blink-smooth-1">Peek-a-boo!</p>
            <p class="blink-smooth-2">Peek-a-boo!</p>
            <p class="blink">Peek-a-boo!</p>
        </div>
        <div v-if="current == 90" class="c90">
            <h1>CSS is awesome!</h1>
        </div>
        <div v-if="current == 91" class="c91">
            <div class="panoramic"></div>
        </div>
        <div v-if="current == 92" class="c92">
            <div class="path">
                <div class="avatar">
                    <img src="http://lea.verou.me/book/adamcatlace.jpg" />
                </div>
            </div>
        </div>
        <div v-if="current == 93" class="c93">
            <div class="path">
                <img src="http://lea.verou.me/book/adamcatlace.jpg" class="avatar" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                current:'1',
                titleList:[]
            }
        },
        watch: {
        },
        created() {
            for(let i = 1;i < 52;i++){
                this.titleList.push({id:String(i)})
            }
        },
        mounted () {
        },
        methods: {
            handleOpen(key, keyPath) {
            },
            handleClose(key, keyPath) {
            },
            changeCurrent(id){
                this.current = id;
            },
        }
    };
</script>