import Vue from 'vue';
import BScroll from 'better-scroll';
/*
* better-scroll 配置指令
*/
Vue.directive('betterScroll', {
    inserted (el, binding) {
        const options = {
            scrollbar: {
                fade: false,
                interactive: true
            },
            mouseWheel: true, // 以上为默认配置
            ...(binding.value && binding.value.options)
        },
            events = (binding.value && binding.value.events) || {};
        const scroller = new BScroll(el, options);

        for (let key in events) { // 绑定事件
            if (events.hasOwnProperty(key)) {
                scroller.on(key, events[key]);
            }
        }
        if (binding.value && binding.value.init) { // 把BScroll对象回传以便进行额外操作
            binding.value.init(scroller);
        }
        el.style.position = 'relative';
        el.style.overflow = 'hidden';
    }
});