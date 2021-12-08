import React from 'react';
/*
Takes in following properties
className : specify the css class-name of the component
width: sets width of the logo
height: sets height of the logo
fill: the color to fill, takes a color string as input

*/
export default class LogoComp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <svg 
            className={this.props.className}
            xmlns="http://www.w3.org/2000/svg"
            width={this.props.width} 
            height={this.props.height} 
            viewBox="0 0 1000.000000 800.000000"
            //preserveAspectRatio="xMidYMid meet"
            >
            
            <g 
            transform="translate(0.000000,800.000000) scale(0.100000,-0.100000)"
            fill={this.props.fill} 
            stroke="none">
            <path d="M6910 7990 c-8 -5 -39 -10 -69 -10 -30 0 -68 -4 -85 -9 -17 -6 -67
            -17 -111 -26 -44 -9 -88 -20 -97 -26 -10 -5 -25 -9 -33 -9 -8 0 -23 -4 -33 -9
            -9 -5 -48 -21 -87 -36 -82 -31 -255 -120 -337 -173 -32 -20 -107 -74 -168
            -119 l-110 -82 0 75 0 74 -150 0 -150 0 0 -215 0 -214 -131 -153 c-130 -151
            -296 -367 -418 -543 -34 -49 -119 -173 -189 -274 -70 -101 -139 -200 -154
            -220 -15 -20 -33 -49 -41 -66 -8 -16 -67 -108 -131 -204 -98 -146 -156 -242
            -156 -258 0 -2 80 -3 179 -3 l179 0 5 28 c7 36 243 433 268 450 10 7 19 19 19
            26 0 8 7 19 15 26 8 7 19 27 24 45 12 45 292 511 465 773 l61 94 3 -721 2
            -721 150 0 150 0 0 919 0 919 66 71 c135 145 342 301 499 375 106 50 105 50
            215 84 104 33 346 33 450 0 54 -16 161 -60 195 -78 159 -88 283 -150 349 -177
            l78 -32 47 22 c36 17 51 33 70 70 17 32 21 51 14 55 -6 4 -27 33 -47 64 -42
            67 -55 76 -156 118 -146 60 -290 87 -520 96 -68 2 -121 0 -130 -6z"/>
            <path d="M8304 6986 c-40 -45 -267 -473 -346 -651 -15 -33 -38 -85 -51 -115
            -100 -223 -187 -458 -187 -504 1 -32 20 -66 37 -66 15 0 38 31 53 70 26 69
            100 211 141 273 48 70 154 177 176 177 18 0 21 8 -44 -111 -81 -148 -103 -269
            -57 -320 25 -27 85 -25 133 5 120 76 273 319 221 351 -16 10 -37 -12 -92 -93
            -66 -98 -123 -154 -151 -150 -12 2 -23 11 -25 20 -6 31 59 166 134 279 83 125
            91 157 48 186 -26 17 -28 16 -99 -21 -40 -21 -100 -63 -134 -93 -34 -31 -65
            -53 -68 -49 -12 12 217 459 344 672 41 69 47 90 33 125 -13 31 -46 39 -66 15z"/>
            <path d="M7686 6738 c-20 -24 -62 -86 -95 -138 -33 -52 -66 -102 -74 -112 -8
            -9 -41 -22 -74 -29 -73 -15 -103 -33 -103 -62 0 -31 18 -47 51 -47 15 0 30 -4
            33 -9 3 -5 -12 -44 -33 -87 -36 -75 -74 -172 -102 -259 -7 -22 -13 -84 -13
            -137 -1 -94 0 -98 28 -127 75 -78 181 -30 305 138 82 112 110 182 76 195 -26
            10 -38 -2 -98 -94 -61 -94 -137 -170 -168 -170 -42 0 -50 76 -20 180 43 148
            142 366 186 406 14 13 64 30 141 48 65 15 125 31 133 35 27 14 36 38 23 65
            -10 22 -18 26 -57 26 -26 0 -66 -5 -91 -11 -25 -6 -47 -9 -50 -6 -3 3 17 43
            45 88 52 84 61 115 39 137 -22 22 -47 13 -82 -30z"/>
            <path d="M7015 6392 c-60 -21 -131 -68 -172 -116 -66 -74 -68 -164 -7 -275 85
            -152 88 -163 48 -210 -37 -44 -82 -43 -129 4 -32 33 -35 41 -35 94 0 32 7 75
            15 95 9 20 13 41 10 46 -11 17 -41 11 -63 -13 -56 -60 -70 -189 -29 -268 64
            -121 218 -135 313 -28 32 36 47 85 41 129 -5 37 -13 57 -81 184 -40 75 -43
            112 -15 164 30 57 111 112 174 119 73 9 97 -28 51 -78 -23 -25 -34 -31 -121
            -61 -36 -13 -40 -17 -40 -48 l0 -35 50 0 c84 1 176 59 216 137 19 37 25 101
            13 133 -18 45 -143 59 -239 27z"/>
            <path d="M8719 6371 c-96 -48 -204 -170 -269 -305 -52 -107 -73 -193 -68 -274
            4 -58 8 -68 36 -93 42 -38 82 -37 149 1 75 43 144 132 221 286 61 121 85 199
            86 281 1 63 -2 75 -23 97 -30 31 -78 34 -132 7z m59 -128 c4 -38 -22 -90 -77
            -161 -43 -54 -48 -71 -29 -90 9 -9 8 -18 -2 -39 -29 -58 -80 -120 -114 -138
            -34 -19 -35 -19 -57 0 -33 30 -20 107 38 223 55 113 175 246 215 240 18 -2 24
            -10 26 -35z"/>
            <path d="M6381 6355 c-124 -55 -272 -231 -320 -384 -6 -19 -11 -66 -11 -106 0
            -91 23 -130 93 -159 47 -20 50 -20 115 -3 94 25 164 69 262 167 92 92 121 139
            100 165 -7 8 -16 15 -21 15 -5 0 -52 -44 -106 -98 -107 -108 -170 -147 -240
            -147 -48 0 -89 32 -95 75 -3 22 6 29 86 68 143 71 259 207 273 320 5 45 3 53
            -20 76 -30 30 -65 33 -116 11z m36 -111 c9 -24 -22 -80 -76 -137 -49 -52 -134
            -107 -147 -95 -14 15 62 131 123 188 65 62 89 72 100 44z"/>
            <path d="M1910 5145 l0 -265 3730 0 3730 0 0 265 0 265 -3730 0 -3730 0 0
            -265z"/>
            <path d="M3675 4718 c-142 -163 -401 -382 -567 -479 -154 -90 -395 -186 -511
            -204 -12 -2 -62 -10 -112 -18 -199 -32 -443 -17 -587 36 -114 41 -170 83 -304
            225 -141 148 -218 212 -256 212 -49 0 -96 -28 -114 -67 -10 -21 -22 -41 -28
            -45 -6 -4 6 -38 28 -84 99 -206 334 -327 716 -369 74 -8 177 -15 228 -15 159
            0 426 33 582 71 57 14 245 76 285 94 17 7 50 21 75 31 117 45 370 193 496 289
            l49 38 3 -172 2 -171 1975 0 1975 0 0 185 0 185 -1961 0 -1960 0 63 52 c35 29
            117 105 183 170 l120 118 -155 -1 -155 0 -70 -81z"/>
            <path d="M5480 4670 l0 -130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130z"/>
            <path d="M5480 2030 l0 -1980 150 0 150 0 0 1980 0 1980 -150 0 -150 0 0
            -1980z"/>
            <path d="M0 3901 c0 -138 44 -340 108 -495 84 -203 203 -356 351 -451 72 -46
            319 -170 326 -163 2 2 -3 32 -10 68 -14 63 -47 288 -60 400 l-7 55 -83 48
            c-222 130 -435 328 -574 535 -23 34 -44 62 -46 62 -3 0 -5 -27 -5 -59z"/>
            <path d="M6900 3654 c-203 -43 -390 -205 -458 -398 -36 -101 -36 -259 0 -362
            86 -245 334 -414 608 -414 179 0 337 65 460 189 123 124 171 238 171 411 0
            164 -49 278 -171 401 -156 157 -384 222 -610 173z"/>
            <path d="M866 3197 c18 -133 57 -351 72 -407 l17 -64 90 -28 c224 -70 496
            -112 867 -133 361 -21 495 -38 638 -82 l55 -17 -65 -8 c-36 -4 -231 -10 -435
            -14 -481 -9 -706 9 -973 76 -64 16 -118 28 -120 25 -8 -7 57 -184 113 -308 79
            -175 161 -316 188 -322 120 -26 514 -32 692 -10 375 46 840 171 1083 290 l102
            51 88 -27 c48 -15 105 -34 127 -42 l40 -15 -60 -27 c-239 -109 -631 -246 -865
            -304 -283 -69 -566 -97 -897 -88 -117 3 -213 4 -213 2 0 -8 126 -163 194 -239
            39 -43 116 -119 171 -169 l100 -89 125 6 c256 14 543 61 765 126 162 46 284
            94 450 174 237 115 411 231 603 404 l94 84 59 -12 c33 -7 62 -16 64 -20 8 -13
            -201 -219 -305 -302 -141 -113 -297 -211 -465 -293 -349 -171 -689 -259 -1179
            -307 -27 -3 -19 -10 83 -81 208 -146 532 -327 584 -327 29 0 311 95 435 146
            436 180 801 485 1058 886 38 58 77 120 86 137 l17 31 56 -27 c30 -15 55 -32
            55 -37 0 -14 -95 -179 -152 -264 -176 -261 -441 -517 -701 -679 -123 -75 -324
            -172 -477 -228 -69 -25 -132 -48 -140 -52 -32 -12 225 -80 412 -108 l108 -17
            59 37 c89 54 306 209 392 281 159 132 316 312 449 514 62 94 220 401 220 427
            0 7 3 13 6 13 13 0 104 -54 104 -61 0 -30 -120 -290 -188 -408 -57 -101 -168
            -255 -256 -358 -131 -153 -227 -236 -496 -432 l-45 -33 205 6 c300 9 279 4
            378 105 271 278 454 582 553 918 l21 72 39 -45 c21 -25 39 -51 39 -58 0 -27
            -61 -226 -95 -311 -76 -189 -198 -391 -331 -548 -36 -43 -64 -81 -61 -83 2 -2
            65 6 139 18 l136 22 35 65 c84 156 163 366 217 576 l39 150 26 -60 c37 -83 40
            -112 20 -202 -22 -99 -87 -303 -131 -407 -19 -44 -32 -81 -30 -83 7 -7 195 39
            292 73 55 19 113 34 127 34 l27 0 0 323 0 322 -63 62 c-108 107 -176 245 -233
            471 -44 173 -51 269 -30 444 21 182 21 330 -1 399 -24 75 -106 156 -188 188
            -150 56 -399 63 -720 21 -277 -37 -479 -59 -670 -71 -236 -14 -754 -7 -1025
            16 -690 57 -1066 132 -1466 295 l-144 58 6 -41z"/>
            <path d="M8980 3036 c-22 -60 -160 -303 -236 -417 -184 -279 -357 -408 -694
            -520 l-125 -41 -71 -197 -70 -196 183 -3 c101 -1 183 -6 183 -10 0 -4 -63
            -203 -139 -442 l-138 -435 -477 -3 c-327 -1 -476 1 -476 8 0 6 90 294 200 640
            110 346 200 632 200 635 0 3 -194 4 -432 3 l-431 -3 -205 -640 -205 -640 -1
            -101 c-1 -93 1 -105 29 -160 25 -47 41 -65 84 -91 87 -52 127 -55 746 -51
            l560 3 73 27 c105 38 176 84 242 156 58 63 70 65 70 11 0 -33 37 -95 76 -127
            20 -16 61 -38 92 -48 54 -18 103 -19 807 -19 831 0 802 -2 939 67 118 60 236
            205 236 292 l0 36 -636 0 c-505 0 -635 3 -631 13 2 6 39 122 81 257 43 135
            104 329 137 433 l60 187 115 0 c137 0 244 20 334 62 90 43 193 148 243 249 20
            41 37 79 37 82 0 4 -133 7 -295 7 -162 0 -295 4 -295 8 0 7 231 741 304 970
            l7 22 -236 0 -235 0 -10 -24z"/>
            <path d="M140 2956 c0 -29 31 -163 56 -241 118 -368 409 -637 802 -741 51 -14
            96 -23 99 -21 2 3 -22 58 -55 123 -66 133 -149 339 -183 456 l-23 77 -90 37
            c-170 70 -380 180 -523 276 -79 53 -83 54 -83 34z"/>
            <path d="M504 1941 c133 -296 366 -545 592 -633 117 -45 204 -60 394 -65 l175
            -5 -116 118 c-119 123 -201 221 -289 347 l-51 74 -102 18 c-147 25 -343 77
            -488 128 l-127 44 12 -26z"/>
            <path d="M1029 1082 c42 -60 206 -217 296 -285 50 -37 126 -85 170 -107 224
            -113 604 -142 950 -74 44 9 84 18 88 21 5 3 -40 31 -100 63 -180 95 -331 192
            -548 353 l-50 37 -360 4 c-198 2 -384 7 -414 12 l-55 7 23 -31z"/>
            <path d="M2660 514 c-188 -53 -663 -144 -757 -144 -18 0 -33 -4 -33 -8 0 -12
            240 -125 340 -160 135 -47 241 -65 375 -65 137 0 226 17 378 69 102 36 321
            140 366 173 l24 18 -49 7 c-95 14 -278 58 -399 97 -67 21 -131 39 -141 38 -11
            0 -57 -11 -104 -25z"/>
            <path d="M4988 512 l-98 -27 -55 -94 c-30 -51 -78 -124 -105 -162 -28 -38 -47
            -69 -43 -69 4 0 48 20 98 44 100 49 178 118 243 214 47 68 75 122 65 121 -5 0
            -52 -13 -105 -27z"/>
            <path d="M4527 419 l-158 -28 -67 -62 c-92 -84 -230 -194 -336 -267 -49 -34
            -82 -62 -74 -62 9 0 55 7 104 15 257 44 443 133 588 280 71 71 133 156 114
            154 -7 -1 -84 -14 -171 -30z"/>
            <path d="M3573 352 c-40 -30 -308 -181 -447 -253 l-150 -77 40 -8 c77 -16 392
            -10 484 10 182 38 378 145 575 315 l30 26 -257 0 c-196 0 -262 -3 -275 -13z"/>
            </g>
            </svg>

        )
    }
}