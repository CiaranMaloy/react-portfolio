import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()

    useEffect(() => {
        let ctx = gsap.context(() => {

            gsap.registerPlugin(DrawSVGPlugin)

            gsap
                .timeline()
                .to(bgRef.current, {
                    duration: 1,
                    opacity: 1,
                })
                .from(outlineLogoRef.current, {
                    drawSVG: 0,
                    duration: 240,
                })
                
        });
        return () => ctx.revert(); // <- cleanup!
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                >
                    <path
                        ref={outlineLogoRef}
                        d="M1314 2609 c-27 -17 -70 -52 -96 -77 l-48 -46 -1 39 c-1 22 -4 51 -8
            65 -7 23 -10 19 -40 -43 -18 -37 -35 -84 -38 -104 l-6 -36 -18 24 -19 24 0
            -45 0 -45 -84 0 c-76 0 -87 -3 -110 -24 -14 -14 -26 -30 -26 -38 0 -22 -19
            -14 -34 15 -8 15 -15 22 -16 16 0 -5 -6 -59 -14 -120 -8 -60 -16 -135 -18
            -166 -1 -32 -6 -58 -9 -58 -3 0 -21 19 -40 43 l-34 42 -5 -121 -5 -120 -51
            -77 -52 -78 -4 93 c-3 71 -9 104 -27 141 -23 48 -70 88 -101 86 -10 0 -8 -3 5
            -9 30 -12 72 -60 91 -105 23 -55 23 -191 0 -269 -10 -33 -36 -96 -58 -140 -52
            -103 -156 -210 -244 -250 -131 -59 -146 -76 -152 -169 -4 -70 19 -129 53 -136
            10 -2 31 -16 46 -32 14 -15 39 -31 55 -35 16 -4 42 -20 58 -36 71 -71 158 -93
            299 -76 91 11 102 11 175 -11 103 -30 275 -114 245 -119 -27 -4 -31 -22 -5
            -22 10 0 38 -13 63 -28 85 -55 138 -140 139 -227 1 -41 3 -47 12 -31 6 10 11
            36 12 57 1 48 11 50 26 5 14 -43 5 -81 -26 -105 -13 -10 -24 -22 -24 -25 0 -9
            80 42 111 70 l25 24 21 -22 c56 -60 69 -138 32 -190 l-22 -30 34 17 c19 10 60
            35 92 57 33 22 61 37 64 34 3 -3 -5 -22 -18 -42 l-23 -37 43 24 c41 23 81 62
            108 105 11 18 12 17 12 -8 1 -35 -32 -124 -56 -151 -18 -20 -18 -20 7 -7 14 7
            54 32 88 57 l64 44 -7 -43 c-4 -24 -16 -60 -27 -82 -22 -44 -18 -43 67 25 73
            57 211 200 227 234 30 66 33 -22 3 -105 -7 -19 -16 -44 -19 -55 -16 -44 134
            128 161 185 15 32 32 59 37 59 4 1 7 -49 4 -109 -2 -61 -3 -110 -2 -110 8 0
            97 145 110 178 l17 43 17 -38 c20 -44 95 -131 105 -121 3 3 -10 28 -31 55 -20
            26 -45 66 -55 88 -19 41 -26 100 -11 91 17 -11 114 -216 109 -230 -3 -8 1 -20
            9 -26 12 -11 14 -2 14 61 1 64 2 72 14 56 13 -16 14 -16 20 5 3 13 6 57 6 98
            0 75 1 75 19 51 l18 -24 6 39 c4 22 7 55 7 74 1 37 2 36 37 -17 13 -18 12 8
            -3 106 -5 32 -4 34 12 20 16 -13 17 -10 12 44 -3 31 -2 57 1 57 3 0 24 -21 48
            -47 l43 -48 -6 50 c-3 28 -15 76 -26 109 -10 32 -17 60 -16 62 2 2 32 -22 67
            -53 52 -46 62 -52 56 -32 -17 56 -54 137 -83 184 -17 27 -29 51 -27 53 2 2 31
            -17 65 -43 35 -25 65 -44 67 -42 7 7 -37 115 -52 127 -27 23 -15 30 22 15 20
            -8 37 -14 39 -13 1 2 -23 38 -54 80 -60 80 -125 188 -114 188 4 -1 51 -22 104
            -49 53 -26 94 -43 91 -37 -24 40 -86 104 -142 146 -67 50 -95 64 -70 33 13
            -15 10 -15 -36 -9 -53 8 -99 28 -111 48 -5 7 -2 9 7 6 45 -19 47 -15 4 7 -27
            14 -61 35 -75 46 l-25 20 25 -6 c45 -11 104 -38 149 -69 27 -18 46 -25 49 -18
            2 6 9 9 15 7 7 -2 43 -6 81 -10 62 -5 68 -4 56 10 -7 8 -48 33 -92 55 l-79 39
            88 3 88 3 -50 31 c-84 53 -185 104 -185 94 0 -18 -72 -11 -85 7 -13 17 -14 17
            -33 -1 -23 -20 -67 -14 -58 9 3 8 -3 17 -15 20 -10 4 -19 10 -19 15 0 4 -12
            11 -27 15 -20 5 -24 9 -13 15 9 6 23 0 43 -16 16 -13 34 -24 40 -24 7 0 6 4
            -3 10 -33 21 2 20 68 -2 39 -13 68 -20 65 -15 -6 10 42 2 142 -23 39 -10 71
            -17 73 -15 6 6 -100 65 -160 91 -85 35 -95 47 -33 39 58 -8 223 -43 239 -51 6
            -3 -2 6 -19 21 -39 34 -108 75 -153 91 -37 12 -37 13 -12 22 23 9 20 11 -33
            21 -31 7 -55 17 -52 22 4 5 45 9 93 9 104 0 100 8 -24 55 l-87 33 41 26 c22
            14 43 30 46 35 7 11 -88 4 -144 -10 -49 -12 -58 -11 -36 6 11 8 14 15 8 15
            -22 0 -12 20 13 26 34 8 32 24 -4 24 -16 0 -31 5 -33 11 -2 7 -12 7 -29 0 -14
            -5 -55 -9 -90 -9 -61 0 -63 1 -34 13 44 19 146 30 154 16 5 -8 18 -7 47 3 l39
            14 -28 7 c-39 10 -134 11 -192 2 -47 -8 -49 -7 -25 7 44 27 5 17 -65 -16 -40
            -18 -89 -33 -119 -35 -50 -3 -50 -3 -21 11 25 12 27 14 10 18 -16 4 -12 9 20
            23 29 14 65 19 132 19 50 1 91 5 90 10 -1 5 34 17 78 26 l80 16 -75 22 c-41
            12 -101 22 -132 22 -32 0 -58 4 -58 9 0 4 26 20 58 35 l57 27 -98 -3 c-53 -2
            -97 -1 -97 3 0 3 19 15 43 26 l42 22 -60 0 c-33 0 -90 -8 -127 -18 -38 -9 -68
            -14 -68 -11 0 4 21 19 48 33 l47 27 -45 0 c-25 0 -65 -5 -89 -11 -24 -5 -45
            -8 -47 -6 -3 2 5 15 16 30 11 14 20 27 20 30 0 5 -119 -58 -202 -107 -27 -15
            -48 -23 -48 -18 0 6 33 40 73 77 75 71 70 77 -25 29 -27 -14 -48 -20 -48 -16
            0 5 14 28 31 51 17 24 29 44 27 46 -2 1 -54 -21 -117 -51 -63 -30 -116 -54
            -118 -54 -3 0 4 16 16 36 12 19 21 37 21 40 0 9 -38 -16 -105 -66 -36 -27 -65
            -44 -65 -37 0 7 13 40 30 75 16 34 28 62 27 62 -2 0 -25 -14 -53 -31z m281
            -63 c-14 -19 -42 -46 -60 -61 -21 -15 -32 -31 -29 -40 6 -15 -96 -125 -116
            -125 -19 0 6 35 60 83 28 25 45 47 39 49 -7 2 2 19 21 41 18 21 30 40 28 43
            -3 3 -17 -9 -31 -26 -14 -16 -29 -30 -32 -30 -4 0 -18 -9 -32 -20 -48 -38 -59
            -19 -16 25 33 33 100 68 113 60 6 -4 25 5 42 19 42 32 47 26 13 -18z m-315
            -50 c-21 -63 -57 -126 -70 -126 -5 0 -2 17 6 38 l15 37 -26 -32 c-36 -45 -50
            -42 -26 5 20 38 110 146 117 139 2 -2 -5 -30 -16 -61z m-135 -119 c-19 -74
            -41 -103 -31 -42 6 39 6 39 -8 15 l-15 -25 -1 26 c0 30 23 111 48 165 l17 39
            3 -58 c2 -32 -4 -86 -13 -120z m253 106 c-12 -33 -34 -70 -51 -85 -33 -30 -49
            -30 -26 0 8 10 -10 -7 -38 -37 -29 -31 -53 -51 -53 -45 0 30 161 224 186 224
            2 0 -6 -26 -18 -57z m247 6 c-41 -42 -107 -89 -125 -89 -22 0 47 73 95 101 68
            39 76 36 30 -12z m175 -60 c-55 -62 -103 -99 -127 -99 -4 0 11 19 32 42 22 23
            30 34 17 24 -43 -36 -32 -9 13 33 41 38 94 69 119 71 4 0 -20 -32 -54 -71z
            m-110 -24 c-45 -57 -92 -95 -116 -95 -4 0 3 12 17 26 18 20 12 17 -25 -10 -27
            -20 -51 -34 -54 -31 -10 10 73 87 147 136 41 27 76 47 78 45 3 -2 -19 -34 -47
            -71z m314 44 c-55 -36 -183 -91 -197 -86 -15 5 81 64 149 92 85 35 109 32 48
            -6z m-154 -12 c0 -2 -19 -21 -42 -42 -40 -38 -37 -26 6 23 17 19 36 29 36 19z
            m-472 -67 c-66 -94 -114 -129 -77 -57 14 26 100 117 111 117 5 0 -10 -27 -34
            -60z m757 30 c-54 -32 -117 -55 -180 -66 -45 -7 -41 4 8 24 18 7 22 10 10 8
            -38 -7 -26 11 20 29 49 20 108 32 157 34 l35 1 -50 -30z m-610 -47 c-48 -65
            -79 -94 -120 -115 l-40 -20 34 36 c45 47 34 46 -40 -5 -33 -22 -63 -39 -65
            -36 -16 15 237 195 255 181 2 -2 -9 -20 -24 -41z m395 7 c-26 -37 -68 -70 -88
            -70 -13 0 -12 3 4 15 17 14 15 14 -20 0 -46 -18 -65 -20 -50 -5 13 13 156 89
            167 90 5 0 -1 -13 -13 -30z m-741 -52 c-16 -30 -22 -57 -20 -88 2 -48 -32
            -174 -51 -186 -11 -7 -9 4 8 71 3 11 -9 -5 -27 -35 -24 -39 -34 -50 -37 -37
            -4 19 45 131 79 178 12 17 19 33 15 36 -3 3 -8 -2 -12 -11 -3 -9 -11 -16 -16
            -16 -5 0 -18 -10 -29 -22 -29 -36 -24 2 7 48 29 44 96 116 102 110 2 -2 -7
            -24 -19 -48z m96 -27 c-25 -63 -81 -148 -92 -138 -2 3 6 22 18 43 l23 39 -27
            -24 c-25 -23 -27 -23 -27 -5 0 20 119 168 128 160 2 -3 -8 -36 -23 -75z m1005
            70 c21 -7 16 -10 -35 -20 -33 -7 -64 -13 -70 -13 -26 -1 -36 3 -30 12 3 6 -4
            10 -17 10 -18 0 -20 2 -8 10 17 11 123 12 160 1z m-1249 -60 c-16 -14 -39 -53
            -52 -86 -13 -33 -26 -63 -29 -67 -3 -4 -14 8 -25 28 -26 48 -13 85 36 99 42
            12 71 33 63 46 -10 17 7 31 22 18 12 -10 10 -16 -15 -38z m1068 35 c-24 -22
            -158 -96 -174 -96 -14 0 -8 7 23 26 23 14 42 27 42 29 0 5 -155 -51 -171 -61
            -5 -3 -9 -1 -9 5 0 5 9 13 21 16 11 4 19 9 16 11 -2 3 -37 -11 -77 -31 -41
            -19 -76 -32 -79 -29 -3 3 1 9 8 13 10 7 10 10 1 13 -8 2 -1 12 16 23 20 14 48
            20 89 21 36 1 78 10 105 22 63 28 212 58 189 38z m-1118 -6 c11 0 19 -4 19
            -10 0 -5 -16 -10 -36 -10 -19 0 -43 -4 -53 -10 -11 -5 -35 -53 -56 -110 -21
            -55 -42 -100 -45 -100 -10 0 17 140 35 184 19 46 52 69 89 62 16 -4 37 -6 47
            -6z m619 -56 c-44 -44 -126 -101 -135 -92 -3 2 14 19 37 36 52 40 39 41 -31 2
            -30 -17 -56 -28 -58 -26 -13 12 73 76 133 99 97 36 105 34 54 -19z m115 11
            c-42 -37 -164 -105 -186 -105 -21 0 56 61 130 102 83 47 109 48 56 3z m-655
            -52 c0 -32 -5 -65 -10 -73 -5 -8 -10 -10 -10 -5 0 6 -14 -19 -32 -55 -46 -96
            -48 -50 -2 81 21 60 42 109 46 109 4 0 8 -26 8 -57z m354 -5 c-36 -62 -137
            -174 -176 -194 -56 -29 -58 -13 -4 32 58 47 74 68 31 40 -14 -9 -36 -23 -50
            -32 -35 -23 -31 -4 8 33 28 27 183 133 194 133 2 0 1 -6 -3 -12z m-634 -120
            c-14 -91 -32 -108 -25 -23 3 39 9 88 12 110 l6 40 8 -35 c5 -19 4 -61 -1 -92z
            m1345 86 c-115 -66 -204 -106 -249 -111 -66 -8 -57 8 20 36 70 25 82 37 20 20
            -20 -6 -42 -9 -48 -7 -22 8 65 40 154 58 49 10 95 23 101 29 6 6 22 11 37 11
            20 -1 14 -7 -35 -36z m-351 14 c-32 -53 -92 -115 -126 -130 -22 -10 -41 -18
            -43 -18 -1 0 0 11 2 24 6 31 44 65 113 105 63 35 64 36 54 19z m105 -37 c-47
            -44 -109 -80 -109 -65 0 3 10 14 23 25 22 19 22 19 -15 4 -46 -19 -49 -19 -41
            0 6 18 46 40 117 66 80 28 84 23 25 -30z m481 19 c0 -12 -26 -17 -125 -24 -77
            -6 -121 3 -96 18 6 4 19 5 29 2 9 -3 44 -1 77 3 87 12 115 12 115 1z m-1455
            -73 c17 -79 13 -103 -26 -158 -27 -39 -41 -37 -25 4 8 17 16 50 20 72 5 34 4
            37 -5 15 -66 -154 -84 -164 -43 -24 15 49 32 106 37 127 6 20 14 37 18 37 4 0
            15 -33 24 -73z m715 65 c0 -10 -138 -144 -170 -166 -54 -36 -48 -13 9 35 34
            28 61 53 61 55 0 6 0 6 -122 -73 -54 -35 -101 -63 -105 -63 -12 0 70 80 114
            111 41 28 191 108 206 109 4 0 7 -3 7 -8z m713 -30 c15 -6 10 -13 -30 -43 -70
            -52 -71 -53 -146 -55 -39 -2 -75 -8 -80 -13 -8 -8 -5 -11 10 -11 11 0 39 -7
            62 -15 22 -8 41 -10 41 -6 0 24 171 -42 262 -100 l33 -21 -64 6 c-36 3 -89 17
            -119 31 -55 25 -69 45 -18 25 51 -19 51 -9 1 11 -27 11 -55 25 -61 30 -6 5
            -23 5 -42 0 -17 -5 -39 -8 -49 -6 -10 2 -36 7 -57 10 -25 4 -35 9 -27 14 8 5
            -3 11 -29 15 -22 3 -39 10 -36 15 3 4 19 6 36 3 16 -2 36 0 43 6 6 6 43 22 80
            37 37 15 66 29 63 32 -2 2 -47 -8 -101 -22 -53 -15 -99 -24 -102 -21 -4 3 23
            19 60 36 83 38 224 60 270 42z m133 -44 c-33 -17 -46 -19 -80 -11 l-41 9 45
            11 c25 6 61 11 80 11 l35 1 -39 -21z m-27 -39 c36 -6 70 -15 74 -19 5 -4 -24
            -10 -63 -14 -55 -6 -77 -4 -102 8 -17 9 -38 16 -47 16 -14 0 -14 2 -1 10 20
            13 59 12 139 -1z m-849 -24 c11 -13 8 -21 -16 -46 -28 -30 -135 -89 -161 -89
            -7 0 -13 9 -13 19 0 11 -4 23 -10 26 -21 13 -9 24 24 23 35 -1 89 26 121 62
            22 24 38 25 55 5z m346 -11 c-27 -18 -44 -24 -53 -18 -24 15 -16 29 19 35 69
            13 74 10 34 -17z m-896 -9 c11 -13 6 -17 -26 -30 -22 -9 -47 -20 -56 -25 -14
            -8 -18 -6 -18 7 0 25 11 37 45 50 41 15 41 15 55 -2z m781 -13 c75 -48 137
            -132 154 -210 12 -56 -12 -129 -60 -178 -31 -33 -37 -44 -24 -44 32 0 50 12
            81 57 23 34 33 42 39 32 21 -34 -3 -99 -36 -99 -7 0 -20 -9 -30 -20 -14 -16
            -15 -24 -6 -51 6 -18 11 -34 11 -35 0 -10 -30 -1 -75 21 -27 13 -62 25 -76 25
            -64 0 -188 -57 -174 -81 4 -5 20 -1 38 8 58 31 183 19 357 -34 8 -2 -7 -14
            -35 -27 l-50 -23 40 -12 c60 -16 140 -66 166 -102 12 -18 18 -30 13 -27 -81
            38 -107 48 -144 52 l-45 6 40 -14 c55 -18 135 -59 165 -85 33 -27 19 -26 -68
            3 -40 14 -72 23 -72 21 0 -2 31 -20 69 -40 115 -60 233 -195 291 -331 25 -56
            21 -83 -5 -35 -42 83 -165 186 -305 256 l-55 28 75 -79 c143 -151 195 -307
            167 -506 -9 -60 -27 -80 -27 -30 0 53 -40 186 -82 275 -23 48 -43 85 -45 84
            -2 -2 6 -30 17 -62 24 -70 21 -82 -6 -23 -10 24 -35 61 -54 82 -33 37 -138
            112 -145 104 -2 -2 20 -22 49 -44 63 -49 130 -147 152 -220 21 -75 12 -90 -16
            -26 -15 35 -44 72 -87 113 -71 66 -92 72 -44 12 35 -44 56 -97 66 -171 5 -35
            3 -52 -4 -52 -6 0 -11 6 -11 13 0 13 -57 137 -63 137 -2 0 2 -24 10 -52 9 -35
            12 -76 9 -121 -6 -71 -43 -197 -57 -197 -5 0 -9 26 -9 58 -1 151 -62 263 -245
            448 -90 90 -211 143 -365 158 -47 5 -41 2 40 -19 231 -60 381 -191 419 -366
            17 -80 24 -189 12 -189 -6 0 -11 6 -11 14 0 7 -16 46 -36 86 -44 87 -143 196
            -223 244 -57 35 -161 70 -241 81 -57 8 -41 -7 25 -23 73 -18 183 -73 236 -118
            68 -57 152 -161 187 -230 34 -67 50 -80 79 -59 14 10 19 31 23 97 l6 83 22
            -46 c12 -25 28 -84 36 -130 8 -46 18 -95 21 -109 6 -22 -3 -34 -55 -84 l-62
            -59 -25 31 c-24 32 -56 42 -68 22 -11 -17 -25 0 -25 29 0 39 -32 66 -59 51
            -12 -6 -21 -15 -21 -20 0 -5 -11 -17 -25 -26 -20 -13 -28 -14 -39 -4 -12 9
            -25 7 -62 -9 -26 -12 -48 -20 -49 -19 -1 2 -8 23 -15 47 -20 62 -71 111 -115
            111 -25 0 -35 5 -40 20 -3 10 -20 31 -37 45 -18 15 -44 46 -59 69 -14 24 -46
            58 -69 77 -23 19 -59 51 -79 71 -37 37 -116 81 -206 113 -70 26 -81 36 -59 52
            25 18 43 16 63 -8 13 -17 31 -22 84 -25 36 -2 80 -10 96 -19 17 -8 63 -27 103
            -41 92 -33 169 -72 233 -118 60 -43 90 -49 54 -10 -61 65 -196 144 -280 163
            -24 5 -57 13 -74 17 l-30 7 40 8 c22 4 67 9 100 10 l60 2 -60 8 c-33 5 -98 7
            -145 4 l-85 -4 60 21 c52 19 82 22 230 23 161 0 174 -1 248 -28 93 -32 174
            -81 241 -146 60 -57 45 -26 -24 52 -121 134 -250 197 -420 203 -108 4 -108 1
            0 -28 l45 -12 -95 -7 c-97 -7 -186 -25 -299 -59 -73 -23 -71 -23 -71 -11 0 4
            27 21 61 36 67 30 73 40 15 24 -21 -6 -40 -8 -43 -6 -6 6 44 22 122 38 47 11
            54 14 31 17 -45 6 -167 -26 -245 -63 -69 -33 -121 -45 -121 -27 0 5 34 23 75
            42 42 18 74 34 72 36 -2 2 -30 -5 -62 -16 -76 -26 -86 -25 -50 5 30 25 30 25
            -36 -4 -95 -42 -122 -47 -59 -11 30 17 62 38 70 46 8 9 -15 -1 -53 -21 -73
            -40 -157 -69 -157 -55 0 5 -17 7 -38 4 -35 -4 -34 -3 16 17 59 24 53 44 -6 23
            -63 -22 -69 -15 -14 16 28 17 52 32 52 35 0 2 -21 -5 -47 -16 -59 -25 -138
            -36 -147 -20 -5 7 5 11 28 11 20 0 36 4 36 10 0 5 7 6 17 3 10 -4 14 -2 10 4
            -4 6 -27 9 -54 7 l-48 -5 50 24 c28 13 56 31 64 40 19 24 10 21 -29 -8 -19
            -14 -41 -25 -49 -25 -14 0 -14 1 -1 10 20 13 8 13 -26 0 -28 -11 -84 -5 -84
            10 0 4 18 7 41 6 34 -1 46 5 70 32 32 36 36 69 15 111 -24 46 -41 55 -76 41
            -28 -12 -29 -14 -15 -30 20 -22 19 -59 -1 -67 -9 -3 -19 -15 -24 -27 -7 -19
            -9 -20 -15 -3 -5 11 -1 25 10 37 22 25 13 50 -19 50 -17 0 -33 -11 -48 -30
            -25 -34 -38 -38 -38 -12 1 41 42 71 143 102 46 14 81 35 134 79 38 33 73 68
            77 78 6 14 9 15 16 3 5 -8 6 -19 2 -25 -3 -5 2 -4 11 4 21 17 35 7 18 -13 -19
            -23 14 -28 35 -5 24 27 29 16 8 -18 l-18 -28 32 29 c18 17 32 25 32 19 0 -5
            -9 -18 -20 -28 -11 -10 -18 -21 -15 -23 3 -3 19 7 35 23 17 16 30 24 30 18 0
            -5 -9 -18 -20 -28 -35 -32 -21 -38 25 -11 56 33 59 19 5 -19 -22 -15 -40 -30
            -40 -32 0 -6 42 18 77 43 47 36 52 29 10 -14 -21 -21 -34 -41 -31 -45 4 -4 1
            -7 -6 -7 -7 0 -11 -3 -7 -6 3 -3 29 6 58 20 63 32 75 27 22 -8 -49 -34 -33
            -34 24 0 56 32 65 26 16 -11 -35 -25 -33 -27 15 -8 15 6 14 3 -3 -17 l-20 -23
            30 17 c24 14 20 9 -15 -25 -47 -44 -41 -44 24 3 21 15 46 28 55 27 11 0 10 -3
            -6 -11 -12 -6 -24 -16 -27 -23 -6 -16 40 -7 55 11 6 8 19 14 28 15 10 0 7 4
            -9 11 -24 10 -24 10 -5 18 11 5 40 10 65 11 38 2 40 3 13 6 -18 2 -33 9 -33
            15 0 7 22 9 68 5 66 -6 66 -6 32 9 l-35 14 45 -5 c25 -2 63 -7 85 -10 l40 -5
            -37 13 c-79 26 -56 36 32 13 30 -8 57 -13 59 -10 2 2 -18 13 -44 24 -26 11
            -46 22 -44 25 2 2 35 -5 73 -16 38 -10 72 -17 74 -14 5 5 4 5 -68 25 -25 7
            -39 15 -32 17 6 3 10 8 7 13 -3 4 12 4 33 -1 60 -14 70 -9 25 11 -24 11 -43
            21 -43 24 0 2 28 2 63 0 l62 -4 -35 15 -35 15 49 -6 c27 -3 55 -8 64 -12 9 -3
            13 -1 9 5 -4 6 -31 14 -62 18 -30 3 -58 11 -61 17 -4 7 7 8 32 4 106 -16 139
            -18 129 -9 -11 10 -141 43 -170 43 -9 0 -26 11 -36 24 -11 14 -28 28 -39 31
            -11 4 -20 11 -20 16 0 6 5 7 10 4 6 -4 25 -3 42 0 l31 7 -32 14 c-19 8 -56 14
            -84 14 -69 0 -51 12 31 20 l67 7 -57 2 c-32 0 -78 -6 -103 -14 -43 -15 -65
            -14 -65 4 0 7 63 41 100 54 13 5 12 6 -1 6 -27 2 -86 -27 -124 -60 -44 -39
            -46 -26 -2 19 20 22 25 31 12 24 -28 -14 -59 -50 -80 -92 -10 -19 -20 -29 -23
            -22 -2 7 3 24 12 37 22 33 20 42 -4 20 -10 -9 -27 -38 -36 -64 -17 -48 -46
            -81 -70 -81 -10 0 -11 6 -3 26 5 15 7 29 5 32 -3 3 -9 -4 -12 -14 -12 -31 -44
            -73 -66 -85 -23 -12 -19 -2 11 36 9 10 -4 3 -28 -18 -56 -47 -72 -48 -32 -2
            17 20 31 41 31 47 0 6 -10 -4 -23 -22 -12 -19 -28 -35 -35 -38 -7 -2 -1 13 13
            33 14 21 25 43 25 49 0 6 -8 -2 -18 -19 -20 -32 -52 -63 -52 -49 0 4 -11 -3
            -25 -16 -28 -26 -34 -17 -8 12 18 20 5 25 -17 6 -7 -7 0 5 16 27 23 32 24 36
            6 21 -23 -20 -31 -9 -10 12 6 6 9 14 6 18 -7 7 -28 -29 -33 -58 -3 -11 -7 -23
            -11 -27 -4 -3 -4 2 -1 12 4 9 2 17 -2 17 -12 0 78 213 111 265 14 22 42 60 62
            84 21 24 40 57 43 73 10 49 23 30 23 -33 l0 -61 43 58 c39 52 105 114 122 114
            3 0 -9 -19 -28 -42 -19 -24 -42 -56 -52 -73 -14 -25 -12 -24 15 8 52 61 154
            127 243 158 103 36 156 39 82 5 -61 -28 -145 -93 -176 -138 l-24 -33 25 18
            c126 88 208 118 340 124 75 3 101 1 90 -6 -8 -6 -26 -11 -40 -11 -33 0 -140
            -51 -164 -79 -23 -26 -30 -25 99 -1 151 30 228 56 280 95 25 19 66 51 91 70
            59 45 110 47 175 7z m704 8 c-3 -5 -25 -10 -48 -10 -31 0 -38 3 -27 10 20 13
            83 13 75 0z m-496 -37 c56 -14 62 -18 41 -24 -50 -14 -93 -10 -117 13 -27 25
            -30 43 -6 34 9 -4 46 -14 82 -23z m395 6 c103 -27 116 -39 43 -39 -45 0 -66 6
            -97 26 -62 41 -58 42 54 13z m-1653 -1 c1 -7 0 -21 -1 -31 -1 -10 4 -25 11
            -33 10 -13 8 -20 -14 -42 -26 -26 -28 -26 -56 -9 -15 9 -31 14 -35 10 -3 -3
            -6 17 -6 46 0 46 2 52 18 47 10 -4 27 1 38 9 24 18 44 19 45 3z m1400 -68 c53
            -10 179 -67 179 -81 0 -4 -15 -6 -32 -4 -18 3 -62 7 -98 10 -36 4 -76 13 -90
            21 -24 15 -23 15 23 10 26 -3 47 -4 47 -2 0 3 -24 12 -52 21 -97 32 -84 45 23
            25z m395 -4 c92 -24 97 -36 14 -29 -41 3 -76 10 -78 15 -2 4 -10 8 -18 8 -8 0
            -14 5 -14 10 0 14 35 12 96 -4z m-511 -7 c4 -5 -1 -19 -11 -30 -14 -15 -15
            -24 -6 -43 8 -19 8 -27 -3 -36 -12 -10 -16 -9 -21 6 -3 11 -12 36 -20 57 -17
            47 -18 45 4 50 31 8 51 7 57 -4z m50 -54 c66 -20 185 -69 185 -76 0 -11 -115
            2 -157 17 -24 9 -43 22 -43 30 0 8 -4 14 -8 14 -12 0 -49 29 -37 30 6 0 33 -7
            60 -15z m434 -41 c8 -8 -30 -4 -74 7 -25 6 -42 15 -40 20 5 7 103 -16 114 -27z
            m-403 -65 c41 -17 74 -34 74 -38 0 -12 -100 -1 -135 14 -29 13 -29 13 -5 15
            24 1 23 2 -10 20 -56 31 -8 24 76 -11z m213 -30 c52 -23 154 -89 148 -95 -8
            -8 -136 25 -177 46 -44 22 -53 35 -17 25 12 -4 3 5 -20 20 -24 14 -43 28 -43
            31 0 9 62 -7 109 -27z m272 -30 c75 -33 58 -42 -23 -13 -85 31 -90 34 -54 34
            15 0 50 -10 77 -21z m-532 -10 c39 -24 163 -131 157 -136 -7 -7 -167 59 -188
            79 -23 20 -20 20 30 2 9 -4 -1 12 -23 35 -43 45 -32 54 24 20z m498 -16 c48
            -20 82 -38 76 -40 -6 -2 -42 3 -81 11 -79 16 -132 44 -110 57 19 13 22 12 115
            -28z m-322 -3 c22 -9 69 -36 105 -60 l65 -42 -53 5 c-53 6 -172 53 -172 68 0
            5 12 4 26 -2 43 -16 38 -4 -6 16 -22 10 -45 24 -52 32 -10 12 -7 13 18 7 16
            -3 47 -14 69 -24z m356 -82 c44 -24 79 -46 79 -49 0 -11 -122 11 -143 26 -15
            10 -17 15 -7 15 9 1 4 7 -10 15 -14 8 -19 14 -12 15 7 0 10 5 7 10 -11 17 5
            11 86 -32z m-430 -91 c83 -71 94 -91 37 -64 -18 8 -62 27 -97 41 -66 26 -131
            70 -131 87 0 5 27 -4 60 -21 33 -17 60 -29 60 -27 0 2 -20 18 -45 36 -25 18
            -45 36 -45 41 0 21 88 -30 161 -93z m-195 31 c-4 6 -4 12 1 12 17 -1 114 -150
            97 -150 -8 0 -80 73 -116 119 -36 43 -36 62 -1 30 14 -13 23 -18 19 -11z m374
            -63 c46 -46 87 -80 90 -75 3 5 29 -6 58 -26 29 -19 56 -33 61 -30 5 3 26 -7
            47 -23 53 -39 151 -141 136 -141 -25 0 -138 59 -172 89 l-35 32 43 -21 c59
            -29 52 -16 -15 27 -32 20 -71 47 -86 60 -16 13 -33 21 -37 18 -13 -8 -160 68
            -190 97 -14 14 -40 33 -58 42 -19 10 -32 20 -29 22 6 6 84 -32 112 -55 11 -8
            7 0 -10 18 -29 33 -20 34 20 2 11 -9 7 -1 -9 17 -17 17 -25 32 -20 32 5 0 47
            -38 94 -85z m53 46 c44 -30 126 -111 114 -111 -17 0 -95 56 -135 96 -49 51
            -40 57 21 15z m-1552 -20 c-12 -17 -21 -45 -21 -66 0 -20 -5 -45 -11 -56 -12
            -24 0 -42 44 -69 l27 -17 -60 -37 -61 -38 -28 29 c-16 15 -50 44 -74 63 -25
            19 -46 37 -46 40 0 7 92 50 107 50 7 0 40 29 74 65 67 71 81 81 49 36z m184
            -12 c29 -18 35 -25 22 -27 -9 -2 -32 6 -51 17 -61 38 -121 19 -141 -46 -3 -13
            -11 -23 -16 -23 -12 0 -12 5 6 46 27 65 102 79 180 33z m1514 -25 c36 -32 101
            -121 101 -137 0 -4 -25 9 -55 29 -30 21 -53 39 -50 42 3 3 -7 18 -22 34 -26
            28 -21 40 7 16 8 -7 2 2 -14 20 -40 43 -16 41 33 -4z m-1572 0 c8 -21 -19 -46
            -40 -38 -17 6 -23 35 -10 47 12 13 44 7 50 -9z m173 -44 c0 -10 -90 -90 -101
            -90 -13 0 -11 28 2 35 6 4 9 20 7 35 -1 17 5 37 16 49 l19 20 28 -20 c16 -11
            29 -24 29 -29z m1539 21 c30 -22 57 -51 47 -51 -16 0 -136 60 -136 68 0 15 60
            4 89 -17z m-546 -22 c14 -22 2 -49 -22 -49 -26 0 -30 9 -24 43 6 31 29 33 46
            6z m161 -109 c49 -64 109 -160 103 -166 -2 -3 -19 10 -38 27 -18 17 -59 51
            -90 76 -58 45 -109 108 -109 132 0 8 20 -5 45 -28 63 -58 65 -51 6 17 -28 32
            -51 62 -51 66 0 15 93 -71 134 -124z m-1254 102 c0 -14 -74 -80 -99 -87 -19
            -6 -73 10 -109 31 -1 0 0 9 4 18 5 14 10 13 36 -9 43 -36 75 -32 117 15 35 38
            51 49 51 32z m1401 -89 c55 -59 102 -123 90 -123 -15 0 -173 105 -196 130 -22
            24 -14 26 23 4 16 -9 8 2 -20 28 -27 24 -48 47 -48 51 0 16 117 -54 151 -90z
            m-221 -151 c46 -94 49 -132 5 -56 -16 27 -57 90 -92 140 -35 51 -63 95 -63
            100 0 5 25 -16 55 -46 37 -36 67 -80 95 -138z m237 -5 c13 -22 23 -41 21 -43
            -3 -2 -29 19 -59 47 -30 28 -45 48 -35 44 19 -6 19 -5 3 13 -9 10 -17 22 -17
            27 0 14 61 -47 87 -88z m145 44 c43 -20 146 -117 135 -127 -6 -6 -125 73 -165
            110 -19 17 -38 40 -44 51 -10 19 -10 19 8 4 10 -9 40 -26 66 -38z m-256 -104
            c20 -38 32 -68 27 -66 -22 9 -143 150 -143 166 0 15 4 14 20 -7 11 -14 20 -20
            20 -13 0 6 -4 15 -10 18 -5 3 -10 11 -10 17 0 25 61 -48 96 -115z m274 4 c22
            -33 40 -63 40 -66 0 -4 -29 19 -65 51 -36 31 -63 59 -60 62 3 3 15 -3 26 -14
            22 -19 22 -19 10 4 -24 46 9 20 49 -37z m-91 20 c69 -45 181 -171 181 -204 0
            -10 -77 44 -137 97 -52 46 -50 59 4 21 21 -15 4 4 -37 43 -81 77 -84 89 -11
            43z m-2323 -59 c-23 -23 -33 -6 -10 19 12 13 20 16 22 9 3 -7 -3 -19 -12 -28z
            m2204 3 c35 -36 57 -41 25 -5 -16 17 -16 20 -2 20 8 0 24 -12 35 -27 26 -38
            72 -129 72 -145 0 -16 -79 62 -136 135 -50 63 -47 76 6 22z m-2309 -2 c8 -9
            14 -32 14 -52 0 -31 5 -38 38 -53 36 -18 51 -48 24 -48 -23 0 -86 54 -87 73 0
            11 -9 30 -20 44 -15 20 -17 29 -9 39 15 18 24 18 40 -3z m2223 -34 c27 -40 88
            -101 95 -94 2 2 -7 18 -19 34 -28 41 -12 40 28 -1 29 -31 95 -158 86 -167 -8
            -8 -115 102 -135 139 -11 19 -17 26 -13 15 18 -55 13 -55 -21 0 -52 84 -67
            115 -57 115 5 0 21 -18 36 -41z m-2271 -24 c15 -21 16 -25 3 -25 -13 0 -36 28
            -36 44 0 13 16 4 33 -19z m2577 -141 c12 -35 20 -69 18 -74 -6 -19 -80 92 -93
            139 -7 25 -16 55 -20 66 -4 12 10 2 34 -23 26 -28 47 -65 61 -108z m-86 -14
            c16 -30 30 -90 21 -90 -7 0 -75 143 -75 157 1 10 37 -34 54 -67z m-2228 5 c37
            -28 90 -34 190 -21 51 7 62 5 67 -8 5 -12 -4 -17 -41 -22 -65 -11 -150 -9
            -197 4 -44 13 -89 48 -80 63 10 15 26 11 61 -16z m2104 6 c17 -33 11 -48 -10
            -22 -11 13 -20 27 -20 32 0 16 19 9 30 -10z m-85 -105 c45 -90 27 -94 -25 -6
            -27 47 -50 92 -50 100 0 21 44 -35 75 -94z m169 15 c24 -25 62 -118 52 -128
            -4 -4 -67 80 -85 114 -25 49 -8 57 33 14z m-84 -31 c23 -45 35 -54 20 -15 -16
            42 7 28 29 -18 20 -42 47 -155 38 -163 -6 -7 -97 152 -108 188 -17 62 -8 65
            21 8z m-105 -121 c9 -16 20 -27 24 -24 5 2 21 -11 35 -30 31 -41 91 -164 83
            -171 -6 -7 -129 150 -149 191 -9 17 -19 41 -23 54 -10 32 10 19 30 -20z m127
            -13 c13 -23 27 -126 18 -126 -4 0 -13 19 -20 43 -7 23 -21 59 -31 79 -11 21
            -19 43 -19 49 0 15 38 -18 52 -45z m-339 -26 c9 0 17 5 17 10 0 6 6 10 14 10
            9 0 20 -26 31 -72 20 -82 39 -111 67 -102 18 5 18 4 1 -30 -20 -42 -30 -45
            -42 -13 -5 13 -17 32 -26 41 -16 16 -19 16 -37 -1 -11 -10 -34 -37 -50 -60
            -29 -44 -48 -55 -48 -29 0 8 -12 24 -26 35 -25 19 -26 25 -20 73 5 37 16 62
            37 85 16 19 29 45 29 60 0 25 1 25 18 10 10 -10 26 -17 35 -17z"/>
                    <path d="M2228 2083 c-27 -14 -46 -28 -44 -30 2 -3 28 9 58 26 29 17 49 31 43
31 -5 0 -31 -12 -57 -27z"/>
                    <path d="M1653 1931 c-93 -78 -152 -102 -318 -132 l-100 -18 92 2 c50 2 90 -1
87 -5 -3 -4 -15 -8 -27 -8 -18 0 -19 -2 -7 -10 8 -5 30 -7 48 -4 49 9 38 -2
-20 -22 -29 -9 -47 -19 -40 -22 8 -2 34 4 58 13 59 22 68 12 12 -13 l-43 -20
45 -2 c39 -2 42 -3 20 -11 -18 -6 -10 -7 28 -3 65 6 68 -7 5 -23 -61 -14 -107
-32 -101 -39 3 -2 16 -1 29 4 37 14 139 25 139 15 0 -5 -22 -15 -50 -22 -63
-16 -75 -32 -14 -19 25 6 67 7 92 2 l47 -7 -72 -12 c-94 -15 -103 -25 -21 -25
67 0 128 -15 128 -31 0 -5 -9 -9 -20 -9 -12 0 -35 -7 -53 -16 -36 -18 -107
-83 -107 -98 0 -5 12 2 28 17 15 14 58 40 97 58 58 27 85 34 157 37 61 3 93 1
103 -8 9 -8 15 -9 15 -2 0 26 -45 42 -120 42 -77 0 -100 10 -127 53 -4 7 -20
20 -35 30 -31 20 -64 64 -54 74 9 9 53 -13 98 -48 42 -34 47 -29 19 17 -23 37
-76 64 -127 64 -28 0 -35 3 -27 11 7 7 28 9 58 5 52 -8 111 -53 121 -93 9 -34
26 -8 19 28 -4 17 0 30 10 39 33 27 14 76 -45 119 l-40 29 40 36 c66 60 114
44 186 -59 47 -66 57 -145 28 -213 -16 -40 -12 -51 11 -32 73 61 54 205 -41
310 -78 86 -127 91 -211 21z m8 -116 c27 -15 59 -56 59 -77 0 -6 -15 2 -32 20
-39 37 -95 62 -140 62 -26 0 -30 3 -18 10 18 13 94 3 131 -15z m-131 -25 c13
-8 12 -11 -5 -24 -25 -19 -30 -19 -46 0 -21 25 19 45 51 24z"/>
                    <path d="M1015 1721 c3 -6 18 -11 33 -11 68 0 186 -56 198 -92 5 -18 34 -25
34 -9 0 18 -70 70 -122 89 -66 24 -153 38 -143 23z"/>
                    <path d="M1028 1584 c-26 -8 -50 -19 -53 -24 -8 -13 1 -13 26 1 12 6 48 17 82
24 48 10 54 13 27 14 -19 0 -56 -7 -82 -15z"/>
                    <path d="M1685 1381 c45 -5 33 -9 -113 -30 -90 -14 -166 -29 -169 -34 -3 -4
10 -6 29 -3 18 3 83 13 143 21 132 19 278 45 284 51 2 2 -47 3 -110 2 -80 -1
-99 -3 -64 -7z"/>
                    <path d="M1710 1304 c-68 -7 -171 -26 -166 -31 7 -8 95 -21 181 -28 38 -4 103
-10 144 -16 72 -9 108 -6 60 6 -39 9 -222 35 -254 36 -53 1 3 17 63 18 28 1
52 6 52 11 0 10 -9 10 -80 4z"/>
                    <path d="M1530 1200 c-35 -5 -41 -8 -27 -15 20 -8 210 1 287 15 57 10 -192 10
-260 0z"/>
                    <path d="M1905 1140 c3 -5 13 -10 21 -10 25 0 188 -69 260 -110 47 -28 60 -32
39 -15 -51 43 -133 85 -227 116 -101 33 -102 33 -93 19z"/>
                    <path d="M848 1119 c-21 -12 -24 -35 -6 -41 7 -3 32 0 56 5 25 5 95 7 158 5
74 -2 110 0 103 7 -5 5 -70 11 -144 13 -75 3 -132 8 -129 13 7 12 -17 11 -38
-2z"/>
                    <path d="M1536 1081 c21 -20 420 -119 432 -107 5 6 -85 51 -118 60 -16 4 -14
1 9 -10 18 -8 32 -17 30 -19 -5 -4 -277 59 -322 74 -37 13 -44 14 -31 2z"/>
                    <path d="M734 1056 c-17 -13 -17 -15 -2 -21 20 -8 61 12 53 26 -9 13 -28 11
-51 -5z"/>
                    <path d="M1366 1052 c5 -5 40 -16 79 -26 38 -9 112 -37 163 -62 74 -35 110
-62 170 -120 43 -42 68 -71 57 -66 -11 6 -29 20 -40 32 -11 12 -33 32 -50 43
-16 12 5 -17 48 -63 52 -57 91 -110 117 -163 44 -87 51 -81 19 16 -65 194
-223 326 -469 392 -107 28 -108 28 -94 17z"/>
                    <path d="M827 1006 c-56 -15 -77 -32 -27 -22 19 4 59 10 88 13 34 4 49 9 40
14 -18 12 -44 10 -101 -5z"/>
                    <path d="M2165 818 c25 -54 56 -135 70 -180 13 -46 24 -72 24 -58 2 68 -68
251 -118 310 -13 16 -5 -10 24 -72z"/>
                    <path d="M1388 728 c56 -32 169 -135 159 -144 -3 -3 -27 10 -54 29 -65 47
-122 75 -222 108 -108 37 -121 36 -47 -1 60 -30 119 -75 175 -131 28 -28 31
-29 31 -10 0 26 10 26 62 0 29 -15 43 -18 51 -10 17 17 38 13 63 -10 12 -12
29 -19 36 -16 26 10 -106 122 -200 171 -103 52 -133 61 -54 14z"/>
                </g>
            </svg>

        </div>
    )
}

export default Logo