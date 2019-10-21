<style src="@/sass/global.scss" lang="scss"></style>
<style lang="scss" scoped>
.test{
    height: 100%;
}
.aside,.main{
    width: 150px;
    height: 100%;
    display: inline-block;
    vertical-align: top;
}
.aside{
    overflow-x: hidden;
    overflow-y: auto;
}
.main{
    width: calc(100% - 150px);
    &>div{
        width: 100%;
        height: 100%;
        float: left;
        &.c1{
            background: url('background.png') no-repeat;
            div {
                border: 10px solid hsla(0,0%,100%,.5);
                background: white;
                background-clip: padding-box;
                max-width: 20em;
                padding: 2em;
                margin: 2em auto 0;
                font: 100%/1.5 sans-serif;
            }
        }
        &.c2{
            div {
                width: 100px;
                height: 60px;
                margin: 25px;
                background: yellowgreen;
                box-shadow: 0 0 0 10px #655,
                        0 0 0 15px deeppink,
                        0 2px 5px 15px rgba(0,0,0,.6);
            }
        }
        &.c3{
            div {
                background: url(http://csssecrets.io/images/code-pirate.svg)
                            no-repeat bottom right #58a;
                background-position: right 20px bottom 10px;
                
                /* Styling */
                max-width: 10em;
                min-height: 5em;
                padding: 10px;
                color: white;
                font: 100%/1 sans-serif;
            }
        }
        &.c4{
            div {
                background: url(http://csssecrets.io/images/code-pirate.svg)
                            no-repeat bottom right #58a;
                background-origin: content-box;
                
                /* Styling */
                max-width: 10em;
                min-height: 5em;
                padding: 10px;
                color: white;
                font: 100%/1 sans-serif;
            }
        }
        &.c5{
            div {
                background: url(http://csssecrets.io/images/code-pirate.svg)
                            no-repeat bottom right #58a;
                background-position: calc(100% - 20px) calc(100% - 10px);
                
                /* Styling */
                max-width: 10em;
                min-height: 5em;
                padding: 10px;
                color: white;
                font: 100%/1 sans-serif;
            }
        }
        &.c6{
            div {
                outline: .6em solid #655;
                box-shadow: 0 0 0 .4em #655; /* todo calculate max of this */
                
                max-width: 10em;
                border-radius: .8em;
                padding: 1em;
                margin: 1em;
                background: tan;
                font: 100%/1.5 sans-serif;
            }
        }
        &.c7{
            background: linear-gradient(#fb3 50%, #58a 0);
            background-size: 100% 30px;
        }
        &.c8{
            background: linear-gradient(to right, #fb3 50%, #58a 0);
            background-size: 30px 100%;
        }
        &.c9{
            background: linear-gradient(45deg, 
              #fb3 25%, #58a 0, #58a 50%,
              #fb3 0, #fb3 75%, #58a 0);
            background-size: 42.4px 42.4px;
        }
        &.c10{
            background: repeating-linear-gradient(60deg, 
              #fb3, #fb3 15px,
              #58a 0, #58a 30px);
            height: 100%;
        }
        &.c11{
            background: #58a;
            background-image: repeating-linear-gradient(30deg, 
                        hsla(0,0%,100%,.1), hsla(0,0%,100%,.1) 15px,
                        transparent 0, transparent 30px);

            height: 100vh;
        }
        &.c12{
            background: #58a;
            background-image: linear-gradient(white 2px, transparent 0),
                  linear-gradient(90deg, white 2px, transparent 0),
                  linear-gradient(hsla(0,0%,100%,.3) 1px, transparent 0),
                  linear-gradient(90deg, hsla(0,0%,100%,.3) 1px, transparent 0);
            background-size: 50px 50px, 50px 50px,
                 10px 10px, 10px 10px;
        }
        &.c13{
            background: #655;
            background-image: radial-gradient(tan 20%, transparent 0),
                  radial-gradient(tan 20%, transparent 0);
            background-size: 30px 30px;
            background-position: 0 0, 15px 15px;
        }
        &.c14{
            background: #eee;
            background-image: 
                linear-gradient(45deg, rgba(0,0,0,.25) 25%, transparent 0, transparent 75%, rgba(0,0,0,.25) 0),
                linear-gradient(45deg, rgba(0,0,0,.25) 25%, transparent 0, transparent 75%, rgba(0,0,0,.25) 0);
            background-position: 0 0, 15px 15px;
            background-size: 30px 30px;

            min-height: 100%;
        }
        &.c15{
            background: #eee url('data:image/svg+xml,\
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".25" >\
            <rect x="50" width="50" height="50" />\
            <rect y="50" width="50" height="50" />\
            </svg>');
            background-size: 30px 30px;
        }
        &.c16{
            background: red;
            background: repeating-linear-gradient(-45deg, limegreen 0 20px, green 20px 60px);
            min-height: 100%;
        }
        &.c17{
            background: red;
            background: conic-gradient(limegreen, green, limegreen);
            min-height: 100%;
        }
        &.c18{
            margin: 0;
            display: flex;
            min-height: 100vh;
            text-align: center;
            background: #655;
            color: white;
            @keyframes spin { to { transform: rotate(1turn); } }
            @keyframes radius { 50% { border-radius: 50%; } }
            @keyframes color { 33% { color: orange; } 66% { color: deeppink } }
            @keyframes width { 50% { border-width: .3em; } }
            .loading:before {
                content: '';
                display: block;
                width: 4em;
                height: 4em;
                margin: 0 auto 1em;
                border: 1.5em solid;
                color: yellowgreen;
                box-sizing: border-box;
                animation: 1s spin, .7s radius, 1.1s color, 1.3s width;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
            }
            .loading {
                margin: auto;
            }
        }
        &.c19{
            background: hsl(20, 40%, 90%);
            background-image: 
                linear-gradient(90deg, #fb3 11px, transparent 0),
                linear-gradient(90deg, #ab4 23px, transparent 0),
                linear-gradient(90deg, #655 23px, transparent 0);
            background-size: 83px 100%, 61px 100%, 41px 100%;
        }
        &.c20{
            div {
                border: 40px solid transparent;
                border-image: 33.334% url('data:image/svg+xml,<svg xmlns="http:%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="30"> \
                                    <circle cx="5" cy="5" r="5" fill="%23ab4"%2F><circle cx="15" cy="5" r="5" fill=" %23655"%2F> \
                                    <circle cx="25" cy="5" r="5" fill="%23e07"%2F><circle cx="5" cy="15" r="5" fill=" %23655"%2F> \
                                    <circle cx="15" cy="15" r="5" fill="hsl(15, 25%, 75%)"%2F> \
                                    <circle cx="25" cy="15" r="5" fill=" %23655"%2F><circle cx="5" cy="25" r="5" fill="%23fb3"%2F> \
                                    <circle cx="15" cy="25" r="5" fill=" %23655"%2F><circle cx="25" cy="25" r="5" fill="%2358a"%2F><%2Fsvg>');
                padding: 1em;
                max-width: 20em;
                font: 130%/1.6 Baskerville, Palatino, serif;
            }

            div:nth-child(2) {
                margin-top: 1em;
                border-image-repeat: round;
            }
        }
        &.c21{
            div {
                border: 1em solid transparent;
                background: linear-gradient(white, white) padding-box,
                            url('background.png') border-box  0 / cover;
                width: 40em;
                padding: 1em;
                overflow: hidden;
                resize: both;
                font: 100%/1.6 Baskerville, Palatino, serif;
            }
        }
        &.c22{
            div {
                padding: 1em;
                border: 1em solid transparent;
                background: linear-gradient(white, white) padding-box,
                            repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, 
                            #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0 / 6em 6em;
                
                max-width: 20em;
                font: 100%/1.6 Baskerville, Palatino, serif;
            }
        }
        &.c23{
            div {
                padding: 1em;
                border: 16px solid transparent;
                border-image: 16 repeating-linear-gradient(-45deg, red 0, red 1em, transparent 0, transparent 2em,
                            #58a 0, #58a 3em, transparent 0, transparent 4em);
                
                max-width: 20em;
                font: 100%/1.6 Baskerville, Palatino, serif;
            }
        }
        &.c24{
            @keyframes ants { to { background-position: 100% 100% } }

            div {
                padding: 1em;
                border: 1px solid transparent;
                background: linear-gradient(white, white) padding-box,
                            repeating-linear-gradient(-45deg, black 0, black 25%, transparent 0, transparent 50%) 0 / .6em .6em;
                animation: ants 12s linear infinite;
                
                max-width: 20em;
                font: 100%/1.6 Baskerville, Palatino, serif;
            }
        }
        &.c25{
            .footnote {
                border-top: .15em solid transparent;
                border-image: 100% 0 0 linear-gradient(90deg, currentColor 4em, transparent 0);
                padding-top: .5em;
                font: 220%/1.4 Baskerville, Palatino, serif;
            }
        }
        &.c26{
            div {
                width: 16em;
                height: 10em;
                background: #fb3;
                border-radius: 50%;
            }
        }
        &.c27{
            div {
                display: inline-block;
                width: 16em;
                height: 10em;
                margin: 1em;
                background: #fb3;
                border-radius: 50% / 100% 100% 0 0;
            }

            div:nth-of-type(2) { border-radius: 50% / 0 0 100% 100%; }
            div:nth-of-type(3) { border-radius: 100% 0 0 100% / 50%; }
            div:nth-of-type(4) { border-radius: 0 100% 100% 0 / 50%; }
        }
        &.c28{
            div {
                display: inline-block;
                width: 16em;
                height: 10em;
                margin: 1em;
                background: #fb3;
                border-radius: 100% 0 0 0;
            }

            div:nth-of-type(2) { border-radius: 0 100% 0 0; }
            div:nth-of-type(3) { border-radius: 0 0 100% 0; }
            div:nth-of-type(4) { border-radius: 0 0 0 100%; }
        }
        &.c29{
            .button { transform: skewX(45deg); }
            .button > div { transform: skewX(-45deg); }

            .button {
                display: inline-block;
                padding: .5em 1em;
                border: 0; margin: .5em;
                background: #58a;
                color: white;
                text-transform: uppercase;
                text-decoration: none;
                font: bold 200%/1 sans-serif;
            }
        }
        &.c30{
            .button {
                position: relative;
                display: inline-block;
                padding: .5em 1em;
                border: 0; margin: .5em;
                background: transparent;
                color: white;
                text-transform: uppercase;
                text-decoration: none;
                font: bold 200%/1 sans-serif;
            }

            .button::before {
                content: ''; /* To generate the box */
                position: absolute;
                top: 0; right: 0; bottom: 0; left: 0;
                z-index: -1;
                background: #58a;
                transform: skew(45deg);
            }
        }
        &.c31{
            .diamond {
                width: 250px;
                height: 250px;
                transform: rotate(45deg);
                overflow: hidden;
                margin: 100px;
            }

            .diamond img {
                max-width: 100%;
                transform: rotate(-45deg) scale(1.42);
                z-index: -1;
                position: relative;
            }
        }
        &.c32{
            img {
                max-width: 250px;
                margin: 20px;
                -webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
                clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
                transition: 1s;
            }

            img:hover {
                -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
        }
        &.c33{
            div {
                background: #58a;
                background: linear-gradient(135deg, transparent 15px, #58a 0) top left,
                            linear-gradient(-135deg, transparent 15px, #58a 0) top right,
                            linear-gradient(-45deg, transparent 15px, #58a 0) bottom right,
                            linear-gradient(45deg, transparent 15px, #58a 0) bottom left;
                background-size: 50% 50%;
                background-repeat: no-repeat;
                
                padding: 1em 1.2em;
                max-width: 12em;
                color: white;
                font: 150%/1.6 Baskerville, Palatino, serif;
            }
        }
        &.c34{
            div {
                background: #58a;
                background:	radial-gradient(circle at top left, transparent 15px, #58a 0) top left,
                            radial-gradient(circle at top right, transparent 15px, #58a 0) top right,
                            radial-gradient(circle at bottom right, transparent 15px, #58a 0) bottom right,
                            radial-gradient(circle at bottom left, transparent 15px, #58a 0) bottom left;
                background-size: 50% 50%;
                background-repeat: no-repeat;
                
                padding: 1em 1.2em;
                max-width: 12em;
                color: white;
                font: 130%/1.6 Baskerville, Palatino, serif;
            }
        }
        &.c35{
            div {
                border: 21px solid transparent;
                border-image: 1 url('data:image/svg+xml,\
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%2358a">\
                                    <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2" />\
                                    </svg>');
                background: #58a;
                background-clip: padding-box;
                
                padding: .2em .3em;
                max-width: 12em;
                color: white;
                font: 150%/1.6 Baskerville, Palatino, serif;
            }
        }
        &.c36{
            div {
                background: #58a;
                -webkit-clip-path: 
                    polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px),
                    calc(100% - 20px) 100%,
                    20px 100%, 0 calc(100% - 20px), 0 20px);
                clip-path:
                        polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px),
                        calc(100% - 20px) 100%,
                        20px 100%, 0 calc(100% - 20px), 0 20px);
                
                padding: 1em 1.2em;
                max-width: 12em;
                color: white;
                font: 150%/1.6 Baskerville, Palatino, serif;
            }
        }
        &.c37{
            padding: 40px;
            font: 130%/2 Frutiger LT Std, sans-serif;

            nav {
                position: relative;
                z-index: 1;
                padding-left: 1em;
            }

            nav > a {
                position: relative;
                display: inline-block;
                padding: .3em 1em 0;
                color: inherit;
                text-decoration: none;
                margin: 0 -.3em;
            } 

            nav > a::before,
            main {
                border: .1em solid rgba(0,0,0,.4);
            }

            nav a::before {
                content: ''; /* To generate the box */
                position: absolute;
                top: 0; right: 0; bottom: 0; left: 0;
                z-index: -1;
                border-bottom: none;
                border-radius: .5em .5em 0 0;
                background: #ccc linear-gradient(hsla(0,0%,100%,.6), hsla(0,0%,100%,0));
                box-shadow: 0 .15em white inset;
                transform: scale(1.1, 1.3) perspective(.5em) rotateX(5deg);
                transform-origin: bottom;
            }

            nav a.selected { z-index: 2;}

            nav a.selected::before {
                background-color: #eee;
                margin-bottom: -.08em;
            }

            main {
                display: block;
                margin-bottom: 1em;
                background: #eee;
                padding: 1em;
                border-radius: .15em;
            }

            nav.left > a::before {
                transform: scale(1.2, 1.3) perspective(.5em) rotateX(5deg);
                transform-origin: bottom left;
            }

            nav.right { padding-left: 2em; }

            nav.right > a::before {
                transform: scale(1.2, 1.3) perspective(.5em) rotateX(5deg);
                transform-origin: bottom right;
            }
        }
        &.c38{
            .pie {
                width: 100px; height: 100px;
                border-radius: 50%;
                background: yellowgreen;
                background-image: linear-gradient(to right, transparent 50%, currentColor 0);
                color: #655;
            }

            .pie::before {
                content: '';
                display: block;
                margin-left: 50%;
                height: 100%;
                border-radius: 0 100% 100% 0 / 50%;
                background-color: inherit;
                transform-origin: left;
                animation: spin 3s linear infinite, bg 6s step-end infinite;
            }

            @keyframes spin {
                to { transform: rotate(.5turn); }
            }
            @keyframes bg {
                50% { background: currentColor; }
            }
        }
        &.c39{
            .pie {
                display: inline-block;
                position: relative;
                width: 100px;
                line-height: 100px;
                border-radius: 50%;
                background: yellowgreen;
                background-image: linear-gradient(to right, transparent 50%, #655 0);
                color: transparent;
                text-align: center;
            }

            @keyframes spin {
                to { transform: rotate(.5turn); }
            }
            @keyframes bg {
                50% { background: #655; }
            }   

            .pie::before {
                content: '';
                position: absolute;
                top: 0; left: 50%;
                width: 50%; height: 100%;
                border-radius: 0 100% 100% 0 / 50%;
                background-color: inherit;
                transform-origin: left;
                animation: spin 50s linear infinite, bg 100s step-end infinite;
                animation-play-state: paused;
                animation-delay: inherit;
            }
        }
        &.c40{
            /**
            * Static interpolation via paused animations
            * This technique becomes more useful if you need to interpolate more than 1 properties, and/or if you need multiple values in the spectrum
            * Currently works in every modern browser except Safari
            */

            @keyframes foo {
                from { background: red }
                to { background: yellowgreen }
            }

            div {
                display: inline-block;
                width: 100px; height: 100px;
                
                animation: foo 1s both linear;
                animation-play-state: paused;
            }

            div:nth-of-type(2) { animation-delay: -.2s; }
            div:nth-of-type(3) { animation-delay: -.4s; }
            div:nth-of-type(4) { animation-delay: -.6s; }
            div:nth-of-type(5) { animation-delay: -.8s; }
            div:nth-of-type(6) { animation-delay: -1s; }
        }
        &.c41{
            .pie {
                width: 100px;
                height: 100px;
                display: inline-block;
                margin: 10px;
                transform: rotate(-90deg);
            }

            svg {
                background: yellowgreen;
                border-radius: 50%;
            }

            circle {
                fill: yellowgreen;
                stroke: #655;
                stroke-width: 32;
            }

            @keyframes grow { to { stroke-dasharray: 100 100 } }

            .pie.animated circle {
                animation: grow 2s infinite linear;
            }
        }
        &.c42{
            div {
                width: 1.6in;
                height: 1in;
                background: #fb3;
                box-shadow: 0 5px 4px -4px black;
            }
        }
        &.c43{
            div {
                width: 1.6in;
                height: 1in;
                background: #fb3;
                box-shadow: 3px 3px 6px -3px black;
            }
        }
        &.c44{
            div {
                width: 1.6in;
                height: 1in;
                background: #fb3;
                box-shadow: 5px 0 5px -5px black,
                        -5px 0 5px -5px black;
            }
        }
        &.c45{
            div {
                position: relative;
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                vertical-align: bottom;
                box-sizing: border-box;
                width: 5.9em;
                height: 5.2em;
                margin: .6em;
                background: #fb3;
                /*box-shadow: .1em .1em .3em rgba(0,0,0,.5);*/
                -webkit-filter: drop-shadow(.1em .1em .1em rgba(0,0,0,.5));
                filter: drop-shadow(.1em .1em .1em rgba(0,0,0,.5));
                font: 200%/1.6 Baskerville, Palatino, serif;
                text-align: center;
            }

            .speech {
                border-radius: .3em;
            }

            .speech::before {
                content: '';
                position: absolute;
                top: 1em;
                right: -.7em;
                width: 0;
                height: 0;
                border: 1em solid transparent;
                border-left-color: #fb3;
                border-right-width: 0;
            }

            .dotted {
                background: transparent;
                border: .3em dotted #fb3;
            }

            .cutout {
                border: .5em solid #58a;
                border-image: 1 url('data:image/svg+xml,\
                                    <svg xmlns="http://www.w3.org/2000/svg"\
                                    width="3" height="3" fill="%23fb3">\
                                    <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/>\
                            </svg>');
                background-clip: padding-box;
            }
        }
        &.c46{
            img {
                max-width: 640px;
                transition: 1s filter, 1s -webkit-filter;
                -webkit-filter: sepia() saturate(4) hue-rotate(295deg);
                filter: sepia() saturate(4) hue-rotate(295deg);
            }

            img:hover,
            img:focus {
                -webkit-filter: none;
                filter: none;
            }
        }
        &.c47{
            .tinted-image {
                width: 640px; height: 440px;
                background-size: cover;
                background-color: hsl(335, 100%, 50%);
                background-blend-mode: luminosity;
                transition: .5s background-color;
            }

            .tinted-image:hover {
                background-color: transparent;
            }
        }
        &.c48{
            min-height: 100vh;
            box-sizing: border-box;
            margin: 0;
            padding-top: calc(50vh - 6em);
            font: 150%/1.6 Baskerville, Palatino, serif;
            background: url("http://csssecrets.io/images/tiger.jpg") 0 / cover fixed;
            main {
                position: relative;
                margin: 0 auto;
                padding: 1em;
                max-width: 23em;
                background: hsla(0,0%,100%,.25) border-box;
                overflow: hidden;
                border-radius: .3em;
                box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
                            0 .5em 1em rgba(0, 0, 0, 0.6);
                text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
            }

            main::before {
                content: '';
                position: absolute;
                top: 0; right: 0; bottom: 0; left: 0;
                margin: -30px;
                z-index: -1;
                -webkit-filter: blur(20px);
                filter: blur(20px);
            }

            blockquote { font-style: italic }
            blockquote cite { font-style: normal; }
        }
        &.c49{
            div {
                width: 12em;
                background: #58a; /* Fallback */
                background:
                    linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.4) 0) 100% 0 no-repeat,
                    linear-gradient(-135deg, transparent 1.5em, #58a 0);
                background-size: 2em 2em, auto;
                
                padding: 2em;
                color: white;
                font: 100%/1.6 Baskerville, Palatino, serif;
            }
        }
        &.c50{
            div {
                position: relative;
                width: 12em;
                background: #58a; /* Fallback */
                background: linear-gradient(-150deg, transparent 1.5em, #58a 0);
                padding: 2em;
                color: white;
                font: 100%/1.6 Baskerville, Palatino, serif;
                border-radius: .5em;
            }

            div::before {
                content: '';
                position: absolute;
                top: 0; right: 0;
                width: 1.73em; height: 3em;
                background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4)) 100% 0 no-repeat;
                transform: translateY(-1.3em) rotate(-30deg);
                transform-origin: bottom right;
                border-bottom-left-radius: .5em;
                box-shadow: -.2em .2em .3em -.1em rgba(0,0,0,.15)
            }
        }
        &.c51{
            background: repeating-linear-gradient(-45deg, #ddd 0, #ddd 25%, white 0, white 50%) 0 / 6px 6px;
            box-sizing: border-box;
            padding: 1em;
            height: 100vh;

            @mixin folded-corner($background, $size, $angle: 30deg) {
                position: relative;
                background: $background; /* Fallback */
                background: linear-gradient($angle - 180deg, transparent $size, $background 0);
                border-radius: .5em;

                $x: $size / sin($angle);
                $y: $size / cos($angle);

                &::before {
                    content: '';
                    position: absolute;
                    top: 0; right: 0;
                    background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4)) 100% 0 no-repeat;
                    width: $y;
                    height: $x;
                    transform: translateY($y - $x) rotate(2*$angle - 90deg);
                    transform-origin: bottom right;
                    border-bottom-left-radius: inherit;
                    box-shadow: -.2em .2em .3em -.1em rgba(0,0,0,.15);
                }
            }

            .note {
                position: relative;
                display: inline-block;
                vertical-align: top;
                width: 15em;
                padding: 2em;
                margin: 0 1rem;
                color: white;
                font: 100%/1.6 Baskerville, Palatino, serif;
                border-radius: .5em;
                @include folded-corner(#58a, 1.5em, 25deg);
            }

            .note + .note {
                font-size: 130%;
                @include folded-corner(#655, 2em, 70deg);
            }

            .note:nth-child(3) {
                width: 20em;
                @include folded-corner(yellowgreen, 1.8em, 45deg);
            }
        }
        &.c52{
            width: 8.7em;
            font: 180%/1.4 Baskerville, serif;
            text-align: justify;
            hyphens: auto;
        }
        &.c53{
            font: 150%/1.6 Baskerville, Palatino, serif;
            dt, dd {
                display: inline;
                margin: 0;
            }

            dd {
                font-weight: 600;
            }

            dd + dt::before {
                content: "\A";
                white-space: pre;
            }

            dd + dd::before {
                content: ', ';
                font-weight: normal;
                margin-left: -.25em;
            }
        }
        &.c54{
            pre { 
                padding: .5em;
                line-height: 1.5;
                background: hsl(20, 50%, 95%);
                background-image: linear-gradient(
                                rgba(120,0,0,.1) 50%, transparent 0);
                background-size: auto 3em;
                background-origin: content-box;
                font-family: Consolas, Monaco, monospace;
            }

            code { font: inherit }
        }
        &.c55{
        }
        &.c56{
            font: 200%/1.6 "Adobe Caslon Pro", Baskerville, serif;
            font-variant-ligatures: common-ligatures discretionary-ligatures historical-ligatures;
        }
        &.c57{
            @font-face {
                font-family: Ampersand;
                src: local('Baskerville-Italic'), local('GoudyOldStyleT-Italic'), local('Garamond-Italic'), local('Palatino-Italic');
                unicode-range: U+26;
            }

            h1 {
                font-family: Ampersand, Helvetica, sans-serif;
            }
        }
        &.c58{
            font: 250%/1.6 Baskerville, Palatino, serif;

            a {
                background: linear-gradient(gray, gray) no-repeat;
                background-size: 100% 1px;
                background-position: 0 1.02em;
                text-shadow: .05em 0 white, -.05em 0 white;
            }

            p:nth-child(2) a {
                background: linear-gradient(90deg, gray 66%, transparent 0) repeat-x;
                background-size: .2em 2px;
                background-position: 0 1em;
            }
        }
        &.c59{
            font: 250%/1.6 Baskerville, Palatino, serif;

            a {
                background: linear-gradient(-45deg, transparent 40%, red 0, red 60%, transparent 0) 0 1em,
                            linear-gradient(45deg, transparent 40%, red 0, red 60%, transparent 0) .1em 1em;
                background-repeat: repeat-x;
                background-size: .2em .1em;
                text-shadow: .05em 0 white, -.05em 0 white;
            }
        }
        &.c60{
            font: 250%/1.6 Baskerville, Palatino, serif;

            p {
                padding: .8em 1em;
                background: hsl(210, 13%, 60%);
                color: hsl(210, 13%, 30%);
                text-shadow: 0 1px 1px hsla(0,0%,100%,.8);
            }

            p + p {
                background: hsl(210, 13%, 30%);	
                color: hsl(210, 13%, 60%);
                text-shadow: 0 -1px 1px black;
            }
        }
        &.c61{
            background: deeppink;
	        font: bold 200%/1 Rockwell, serif;
            h1 {
                margin: 0;
                color: white;
            }

            h1:first-child { text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black; }

            h1 text { fill: currentColor }
            h1 use {
                stroke: black; 
                stroke-width: 6;
                stroke-linejoin: round;
            }
        }
        &.c62{
            background: #203;
	        font: bold 500%/1 Rockwell, serif;
            a {
                color: #ffc;
                text-decoration: none;
                transition: 1s;
            }

            a:hover { text-shadow: 0 0 .1em, 0 0 .3em; }
        }
        &.c63{
            background: #58a;
            color: white;
            text-shadow: 0 1px hsl(0,0%,85%),
                        0 2px hsl(0,0%,80%),
                        0 3px hsl(0,0%,75%),
                        0 4px hsl(0,0%,70%),
                        0 5px hsl(0,0%,65%),
                        0 5px 10px black;
            font: bold 500%/1 Rockwell, serif;
        }
        &.c64{
            font: bold 120% Helvetica, sans-serif;

            .circular {
                width: 30em;
                height: 30em;
                margin: 4em auto 0;
            }

            .circular svg {
                display: block;
                overflow: visible;
                transition: 10s linear transform;
            }

            .circular svg:hover { transform: rotate(-2turn); }

            .circular text { fill: currentColor }
            .circular path { fill: none; }
        }
        &.c65{
            :disabled, [disabled], [aria-disabled="true"] {
                cursor: not-allowed;
            }
        }
        &.c66{
            button {
                padding: .3em .5em;
                border: 10px solid transparent;
                border-radius: 50%;
                background: #58a;
                background-clip: padding-box;
                box-shadow: 0 0 0 1px rgba(0,0,0,.3) inset;
                color: white;
                font: bold 150%/1 sans-serif;
                cursor: pointer;
            }
        }
        &.c67{
            button {
                position: relative;
                padding: .3em .5em;
                background: #58a;
                border-radius: 50%;
                border: 1px solid rgba(0,0,0,.3);
                box-shadow:  0 .1em .2em -.05em rgba(0,0,0,.5);
                color: white;
                font: bold 150%/1 sans-serif;
                cursor: pointer;
            }

            button:before {
                content: '';
                position: absolute;
                top: -10px; right: -10px;
                bottom: -10px; left: -10px;
            }
        }
        &.c68{
            font: 150%/1.6 sans-serif;

            input[type="checkbox"] {
                position: absolute;
                clip: rect(0,0,0,0);
            }

            input[type="checkbox"] + label::before {
                content: '\a0';
                display: inline-block;
                vertical-align: .2em;
                width: .8em;
                height: .8em;
                margin-right: .2em;
                border-radius: .2em;
                background: silver;
                text-indent: .15em;
                line-height: .65;
            }

            input[type="checkbox"]:checked + label::before {
                content: '\2713';
                background: yellowgreen;
            }

            input[type="checkbox"]:focus + label::before {
                box-shadow: 0 0 .1em .1em #58a;
            }

            input[type="checkbox"]:disabled + label::before {
                background: gray;
                box-shadow: none;
                color: #555;
                cursor: not-allowed;
            }
        }
        &.c69{
            font: 150%/1.6 sans-serif;

            input[type="checkbox"] {
                position: absolute;
                clip: rect(0,0,0,0);
            }

            input[type="checkbox"] + label {
                display: inline-block;
                padding: .35em .5em .2em;
                background: #ccc;
                background-image: linear-gradient(#ddd, #bbb);
                border: 1px solid rgba(0,0,0,.2);
                border-radius: .3em;
                box-shadow: 0 1px white inset;
                text-align: center;
                text-shadow: 0 1px 1px white;
                cursor: pointer;
            }

            input[type="checkbox"]:checked + label,
            input[type="checkbox"]:active + label {
                box-shadow: .04em .1em .2em rgba(0,0,0,.6) inset;
                border-color: rgba(0,0,0,.3);
                background: #bbb;
            }
        }
        &.c70{
            .lightbox {
                position: fixed;
                top: 50%; left: 50%;
                margin: -200px;
                box-shadow: 0 0 0 50vmax rgba(0,0,0,.8);
            }
        }
        &.c71{
            dialog::backdrop {
                background: rgba(0,0,0,.8)
            }
        }
        &.c72{
            font: 150%/1.6 Baskerville, Palatino, serif;
            main {
                transition: .6s;
                background: white;
            }

            main.de-emphasized {
                -webkit-filter: blur(3px);
                filter: blur(3px);
            }

            dialog {
                position: fixed;
                top: 50%; left: 50%;
                z-index: 1;
                width: 10em;
                padding: 2em;
                margin: -5em;
                border: 1px solid silver;
                border-radius: .5em;
                box-shadow: 0 .2em .5em rgba(0,0,0,.5),
                            0 0 0 100vmax rgba(0,0,0,.2);
            }

            dialog:not([open]) {
                display: none;
            }
        }
        &.c73{
            ul {
                display: inline-block;
                overflow: auto;
                width: 7.2em;
                height: 7em;
                border: 1px solid silver;
                padding: .3em .5em;
                list-style: none;
                margin-top: 2em;
                font: 100 200%/1.6 'Frutiger LT Std', sans-serif;
                background: linear-gradient(white 15px, hsla(0,0%,100%,0)) 0 0 / 100% 50px,
                            radial-gradient(at top, rgba(0,0,0,.2), transparent 70%) 0 0 / 100% 15px,
                            linear-gradient(to top, white 15px, hsla(0,0%,100%,0)) bottom / 100% 50px,
                            radial-gradient(at bottom, rgba(0,0,0,.2), transparent 70%) bottom / 100% 15px;
                background-repeat: no-repeat;
                background-attachment: local, scroll, local, scroll;
                margin-top: 30px;
            }
        }
        &.c74{
            .image-slider {
                position:relative;
                display: inline-block;
            }

            .image-slider > div {
                position: absolute;
                top: 0; bottom: 0; left: 0;
                width: 50%;
                max-width: 100%;
                overflow: hidden;
                resize: horizontal;
            }

            .image-slider > div:before {
                content: '';
                position: absolute;
                right: 0; bottom: 0;
                width: 12px; height: 12px;
                padding: 5px;
                background: linear-gradient(-45deg, white 50%, transparent 0);
                background-clip: content-box;
                cursor: ew-resize;
                -webkit-filter: drop-shadow(0 0 2px black);
                filter: drop-shadow(0 0 2px black);
            }

            .image-slider img {
                display: block;
                user-select: none;
            }
        }
        &.c75{
            figure {
                max-width: 300px;
                max-width: min-content;
                margin: auto;
            }

            figure > img { max-width: inherit }

            /* Basic styling */

            figure {
                padding: 10px;
                border: 1px solid silver;
            }
        }
        &.c76{
            background: #ddd;

            section {
                width: 500px;
                margin: 2em;
                background: white;
            }

            table {
                border-collapse: collapse;
                margin-bottom: 1em;
                width: 100%;
            }

            section + section table { table-layout: fixed }

            td {
                border: 1px solid #aaa;
            }

            td.preformatted {
                white-space: pre;
                font-family: Consolas, Monaco, monospace;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
        &.c77{
            .palette li:first-child:nth-last-child(n+4) .color-options a:after,
            .palette li:first-child:nth-last-child(n+4) ~ li .color-options a:after {
                content: none;
            }

            /* Hide word when 6 items or more */
            .palette li:first-child:nth-last-child(n+6) .color-options a,
            .palette li:first-child:nth-last-child(n+6) ~ li .color-options a {
                color: transparent;
                font-size: 0;
            }

            .palette li:only-child .delete {
                display:none;
            }

            /* From this point it’s just styling */
            .palette {
                display: flex;
                height: 200px;
                max-width:900px;
                font: bold 90%/1 sans-serif;
            }

            .palette li {
                flex: 1;
                list-style: none;
                background: #D6E055;
            }
		
            .color-options {
                background: rgba(0,0,0,.5);
                padding: 10px;
                margin: 0 10px;
                overflow:hidden;
                border-radius:0 0 10px 10px;
            }
			
			.color-options .add { float:left; }
			.color-options .delete { float:right; }
			
			.color-options a {
				color: white;
				text-decoration:none;
			}
			
			.color-options a:before {
				display:inline-block;
				font-size: 1rem;
				width:1.3rem;
				margin-right:.3rem;
				text-align: center;
				line-height: 1.3;
				background:white;
				border-radius: 50%;
				letter-spacing: normal;
			}
			
			.color-options .add:before {
				content:'✚';
				color:#590;
			}
			
			.color-options .delete:before {
				content:'✖';
				color:#b00;
			}
			
			.color-options a:after {
				content: ' color';
				font-weight: normal;
			}
        }
        &.c78{
	        font: 100%/1.5 sans-serif;
            header, section, footer {
                padding: 1em calc(50% - 350px);
            }

            footer {
                background: #333;
                color: white;
            }

            header {
                background: orange;
                color: white;
            }

            section + section {
                background: #eee;
            }
        }
        &.c79{
            display: flex;
            align-items: center;
            min-height: 100%;
            margin: 0;
            background: #fb3;
	        font: 100%/1.5 sans-serif;

            main {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 18em;
                height: 10em;
                padding: 1em 1.5em;
                margin: 0 auto;
                box-sizing: border-box;
                background: #655;
                color: white;
                text-align: center;
            }

            h1 {
                margin: 0 0 .2em;
                font-size: 150%;
            }

            p {
                margin: 0;
            }
        }
        &.c80{
            display: flex;
            min-height: 100vh;
            background: #fb3;
            font: 100%/1.5 sans-serif;

            main {
                padding: 1em 2em;
                margin: auto;
                box-sizing: border-box;
                background: #655;
                color: white;
                text-align: center;
            }

            h1 {
                margin-bottom: .2em;
                font-size: 150%;
            }
        }
        &.c81{
            background: #fb3;
            font: 100%/1.5 sans-serif;
            main {
                width: 18em;
                padding: 1em 1.5em;
                margin: 50vh auto 0;
                transform: translateY(-50%);
                box-sizing: border-box;
                background: #655;
                color: white;
                text-align: center;
            }

            h1 {
                margin: 0 0 .2em;
                font-size: 150%;
            }

            p {
                margin: 0;
            }
        }
        &.c82{
            background: #fb3;
            font: 100%/1.5 sans-serif;

            main {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                
                padding: 1em 1.5em;
                box-sizing: border-box;
                background: #655;
                color: white;
                text-align: center;
            }

            h1 {
                margin: 0 0 .2em;
                font-size: 150%;
            }

            p {
                margin: 0;
            }
        }
        &.c83{
            margin: 0;
            font: 100%/1.5 Palatino Linotype, Palatino, serif;
            main {
                min-height: calc(100vh - 5em - 7em);
            }
            /* Toggle checkbox to alternate between short/long content */
            #contents:checked ~ p { display: none }
            /* Basic styling */
            h1 { margin: .5em 0 0; }

            header { text-align: center; height: 3em; }

            main, footer {
                display: block;
                padding: .5em calc(50% - 400px);
            }

            footer {
                background: linear-gradient(#222, #444);
                color: white;
                height: 6em;
            }
        }
        &.c84{
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            font: 100%/1.5 Baskerville, Palatino Linotype, Palatino, serif;
            main {
                flex: 1;
            }

            /* Toggle checkbox to alternate between short/long content */
            #contents:checked ~ p { display: none }

            h1 { margin: .5em 0 0; }

            header { text-align: center; height: 3em; }

            main, footer {
                display: block;
                padding: .5em calc(50% - 400px);
            }

            footer {
                background: linear-gradient(#222, #444);
                color: white;
            }
        }
        &.c85{
            background: linear-gradient(skyblue, white 450px, yellowgreen 0);
            min-height: 100vh;

            @keyframes bounce {
                60%, 80%, to {
                    transform: translateY(400px);
                    animation-timing-function: ease;
                }
                70% { transform: translateY(300px); }
                90% { transform: translateY(360px); }
            }

            .ball {
                width: 0; height: 0; padding: 1.5em;
                border-radius: 50%;
                margin: auto;
                background: red radial-gradient(at 30% 30%, #fdd, red);
                animation: bounce 2s cubic-bezier(.1,.25,1,.25) forwards;
            }
        }
        &.c86{
            padding: 1.5em;
            font: 200%/1.6 Baskerville;

            input:not(:focus) + .callout:not(:hover) {
                transform: scale(0);
                transition: .25s transform;
            }

            .callout {
                transition: .5s cubic-bezier(.25,.1,.3,1.5) transform;
                transform-origin: 1.4em -.4em;
            }

            input {
                display: block;
                padding: 0 .4em;
                font: inherit;
            }

            .callout {	
                position: absolute;
                max-width: 14em;
                padding: .6em .8em;
                border-radius: .3em;
                margin: .3em 0 0 -.2em;
                background: #fed;
                border: 1px solid rgba(0,0,0,.3);
                box-shadow: .05em .2em .6em rgba(0,0,0,.2);
                font-size: 75%;
            }

            .callout:before {
                content: "";
                position: absolute;
                top: -.4em;
                left: 1em;
                padding: .35em;
                background: inherit;
                border: inherit;
                border-right: 0;
                border-bottom: 0;
                transform: rotate(45deg);
            }
        }
        &.c87{
            background: rgb(100%, 0%, 40%);
            transition: 1s cubic-bezier(.25,.1,.2,3);
            &:hover {
                background: gray;
            }
        }
        &.c88{
            @keyframes loader {
                to { background-position: -800px 0; }
            }

            .loader {
                width: 100px; height: 100px;
                text-indent: 999px; overflow: hidden; /* Hide text */
                background: url(http://dabblet.com/img/loader.png) 0 0;
                animation: loader 1s infinite steps(8);
            }
        }
        &.c89{
            @keyframes blink-1 { 50% { color: transparent } }
            @keyframes blink-2 { to { color: transparent } }

            p {
                padding: 1em;
                background: gold;
            }

            .blink-smooth-1 {
                animation: 1s blink-1 3;
            }

            .blink-smooth-2 {
                animation: .5s blink-2 6;
                animation-direction: alternate;
            }

            .blink {
                animation: 1s blink-1 3 steps(1);
            }
        }
        &.c90{
            @keyframes typing {
                from { width: 0 }
            }

            @keyframes caret {
                50% { border-right-color: transparent; }
            }

            h1 {
                font: bold 200% Consolas, Monaco, monospace;
                /*width: 8.25em;*/
                width: 15ch;
                white-space: nowrap;
                overflow: hidden;
                border-right: .05em solid;
                animation: typing 8s steps(15),
                        caret 1s steps(1) infinite;
            }
        }
        &.c91{
            @keyframes panoramic {
                to { background-position: 100% 0; }
            }

            .panoramic {
                width: 150px; height: 150px;
                background: url('http://c3.staticflickr.com/3/2671/3904743709_74bc76d5ac_b.jpg');
                background-size: auto 100%;	
                animation: panoramic 10s linear infinite alternate;
                animation-play-state: paused;
            }

            .panoramic:hover, .panoramic:focus {
                animation-play-state: running;
            }
        }
        &.c92{
            @keyframes spin {
                to { transform: rotate(1turn); }
            }

            .avatar {
                animation: spin 3s infinite linear;
                transform-origin: 50% 150px;
            }

            .avatar > img {
                animation: inherit;
                animation-direction: reverse;
            }

            /* Anything below this is just styling */

            .avatar {
                width: 50px;
                margin: 0 auto;
                border-radius: 50%;
                overflow: hidden;
            }

            .avatar > img {
                display: block;
                width: inherit;
            }

            .path {
                width: 300px; height: 300px;
                padding: 20px;
                border-radius: 50%;
                background: #fb3;
            }
        }
        &.c93{
            @keyframes spin {
                from {
                    transform: rotate(0turn)
                            translateY(-150px) translateY(50%)
                            rotate(1turn)
                }
                to {
                    transform: rotate(1turn)
                            translateY(-150px) translateY(50%)
                            rotate(0turn);
                }
            }

            .avatar {
                animation: spin 3s infinite linear;
            }

            /* Anything below this is just styling */

            .avatar {
                display: block;
                width: 50px;
                margin: calc(50% - 25px) auto 0;
                border-radius: 50%;
                overflow: hidden;
            }

            .path {
                width: 300px; height: 300px;
                padding: 20px;
                margin: 100px auto;
                border-radius: 50%;
                background: #fb3;
            }
        }
    }
}
</style>
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
                <el-menu-item v-for="item in titleList" :key="item.id" @click="current = item.id">{{item.id}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
    <div class="main">
        <div v-if="current == 1" class="c1">
            <div>
            Can I haz semi-transparent borders?
            Pretty please?
            </div>
        </div>
        <div v-if="current == 2" class="c2">
            <div></div>
        </div>
        <div v-if="current == 3" class="c3">
            <div>Code Pirate</div>
        </div>
        <div v-if="current == 4" class="c4">
            <div>Code Pirate</div>
        </div>
        <div v-if="current == 5" class="c5">
            <div>Code Pirate</div>
        </div>
        <div v-if="current == 6" class="c6">
            <div>I have a nice subtle inner rounding, don’t I look pretty?</div>
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
                <img src="http://csssecrets.io/images/adamcatlace.jpg" />
            </div>
        </div>
        <div v-if="current == 32" class="c32">
            <img src="http://csssecrets.io/images/adamcatlace.jpg" />
            <img src="http://csssecrets.io/images/adam-sleeping.jpg" />
        </div>
        <div v-if="current == 33" class="c33">
            <div>Hey, focus! You’re supposed to be looking at my corners, not reading my text. The text is just placeholder!</div>
        </div>
        <div v-if="current == 34" class="c34">
            <div>Hey, focus! You’re supposed to be looking at my corners, not reading my text. The text is just placeholder!</div>
        </div>
        <div v-if="current == 35" class="c35">
            <div>Hey, focus! You’re supposed to be looking at my corners, not reading my text. The text is just placeholder!</div>
        </div>
        <div v-if="current == 36" class="c36">
            <div>Hey, focus! You’re supposed to be looking at my corners, not reading my text. The text is just placeholder!</div>
        </div>
        <div v-if="current == 37" class="c37">
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
            <div class="pie">0%</div>
            <div class="pie">20%</div>
            <div class="pie">40%</div>
            <div class="pie">60%</div>
            <div class="pie">80%</div>
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
            <div class="pie">20%</div>
            <div class="pie">60%</div>
            <div class="pie animated">0%</div>
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
            <img src="http://csssecrets.io/images/tiger.jpg" />
        </div>
        <div v-if="current == 47" class="c47">
            <div style="background-image:url(http://csssecrets.io/images/tiger.jpg)" class="tinted-image"></div>
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
                // titleList:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29']
                titleList:[]
            }
        },
        watch: {
        },
        created() {
            for(let i = 1;i < 94;i++){
                this.titleList.push({id:String(i)})
            }
        },
        mounted () {
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    };
</script>