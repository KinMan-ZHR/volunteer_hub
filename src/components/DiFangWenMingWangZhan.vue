<template>
    <div>
        <div style="margin-top: 34px;">四川地方文明网站</div>
        <div style="margin-top: 17px;display: flex;">
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Chengdu" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="http://cd.wenming.cn/" target="_blank" size="large"> 成都市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Zigong" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="http://sczg.wenming.cn/" target="_blank" size="large"> 自贡市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Panzhihua" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="http://scpzh.wenming.cn/" target="_blank" size="large"> 攀枝花市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Luzhou" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="http://sclz.wenming.cn/" target="_blank" size="large"> 泸州市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <!-- <t-dropdown :options="Deyang" :min-column-width="88" :hideAfterItemClick="false"> -->
                <t-button theme="primary" variant="base" href="http://scdy.wenming.cn/" target="_blank" size="large"> 德阳市 </t-button>
                <!-- </t-dropdown> -->
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Mianyang" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="http://scmy.wenming.cn/" target="_blank" size="large"> 绵阳市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Guangyuan" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="https://zm.sm-tc.cn/?src=l4uLj8XQ0JiG0YyciJKI0ZyR0NyOk5WGz8w%3D&uid=&restype=1&from=&depth=146&v=1&link_type=270" target="_blank" size="large"> 广元市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Suining" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="http://scsn.wenming.cn/" target="_blank" size="large"> 遂宁市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Neijiang" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="https://zm.sm-tc.cn/?src=l4uLj8XQ0JGV0YyciJKI0ZyR0A%3D%3D&uid=&restype=1&from=derive&depth=221&link_type=60&force=true&bu=ss_doc&v=1" target="_blank" size="large"> 内江市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <!-- <t-dropdown :options="Leshan" :min-column-width="88" :hideAfterItemClick="false"> -->
                <t-button theme="primary" variant="base" href="https://zm.sm-tc.cn/?src=l4uLj8XQ0JOM0YyciJKI0ZyR0A%3D%3D&uid=&restype=1&from=&depth=95&link_type=60&v=1" target="_blank" size="large"> 乐山市 </t-button>
                <!-- </t-dropdown> -->
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Nanchong" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="https://zm.sm-tc.cn/?src=l4uLj8XQ0JGc0YyciJKI0ZyR0JiY&uid=&restype=1&from=derive&depth=156&force=true&v=1&link_type=270" target="_blank" size="large"> 南充市 </t-button>
                </t-dropdown>
                </t-space>
            </div>

        </div>
        <div style="display: flex;">
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Yibin" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="http://yb.wenming.cn/" target="_blank" size="large"> 宜宾市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Guangan" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="http://ga.wenming.cn/" target="_blank" size="large"> 广安市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Dazhou" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="https://zm.sm-tc.cn/?src=l4uLj8XQ0JuF0YyciJKI0ZyR0A%3D%3D&uid=&restype=1&from=derive&depth=228&force=true&v=1&link_type=250" target="_blank" size="large"> 达州市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Bazhong" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="http://scbz.wenming.cn/" target="_blank" size="large"> 巴中市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Yaan" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="https://zm.sm-tc.cn/?src=l4uLj8XQ0Iae0YyciJKI0ZyR0IiSnJXQlpGbmoegzNGXi5I%3D&uid=&restype=1&from=derive&depth=35&link_type=60&v=1" target="_blank" size="large"> 雅安市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Meishan" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="https://zm.sm-tc.cn/?src=l4uLj8XQ0JKM0YyciJKI0ZyR0A%3D%3D&uid=&restype=1&from=derive&depth=2&v=1&link_type=250" target="_blank" size="large"> 眉山市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Ziyang" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="http://sc.wenming.cn/zbsc/zy/index_1.shtml" target="_blank" size="large"> 资阳市 </t-button>
                </t-dropdown>
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <!-- <t-dropdown :options="Abazhou" :min-column-width="88" :hideAfterItemClick="false"> -->
                <t-button theme="primary" variant="base" href="https://zm.sm-tc.cn/?src=l4uLj8XQ0J6d0YyciJKI0ZyR0A%3D%3D&uid=&restype=1&from=&depth=95&link_type=60&v=1" target="_blank" size="large"> 阿坝州 </t-button>
                <!-- </t-dropdown> -->
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <!-- <t-dropdown :options="Ganzi" :min-column-width="88" :hideAfterItemClick="false"> -->
                <t-button theme="primary" variant="base" href="https://zm.sm-tc.cn/?src=l4uLj8XQ0JiF0YyciJKI0ZyR0A%3D%3D&uid=&restype=1&from=&depth=145&v=1&link_type=250" target="_blank" size="large"> 甘孜州 </t-button>
                <!-- </t-dropdown> -->
                </t-space>
            </div>
            <div style="padding: 10px;">
                <t-space>
                <t-dropdown :options="Liangshan" :min-column-width="88" :hideAfterItemClick="false">
                <t-button theme="primary" variant="base" href="https://zm.sm-tc.cn/?src=l4uLj8XQ0JOMhdGMnIiSiNGckdA%3D&uid=&restype=1&from=&depth=73&link_type=60&v=1" target="_blank" size="large"> 凉山州 </t-button>
                </t-dropdown>
                </t-space>
            </div>
        </div>
    </div>

    
</template>

<script>
export default{
    name:'SiChuanDiFangWenMingWangZhan',
    data(){
        return{
            Chengdu:[                
                { content: '都江堰', value: 1 ,onClick: () => window.open('http://scdjy.wenming.cn/', '_blank')},
                { content: '崇州', value: 2 ,onClick: () => window.open('https://www.scwmw.cn/topic/2021/czbyll/', '_blank')},
                { content: '简阳', value: 3 ,onClick: () => window.open('http://scjys.wenming.cn/', '_blank')},
                { content: '郫都', value: 4 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0Jybj5vRjJyIkojRnJHQhog%3D&uid=&restype=1&from=derive&depth=25&bu=web&v=1&link_type=270', '_blank')},
                { content: '蒲江', value: 5 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0Jybj5XRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=66&link_type=60&force=true&v=1', '_blank')},
                { content: '金堂', value: 6 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JyblYvRjJyIkojRnJHQ&uid=&restype=1&from=&depth=56&v=1&link_type=250', '_blank')},
                { content: '青白江', value: 7 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0I6dldGMnIiSiNGckdA%3D&uid=&restype=1&from=&depth=95&link_type=60&v=1', '_blank')},
            ],
            Zigong:[
                { content: '富顺', value: 1 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0IWYmYzRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=141&link_type=60&force=true&bu=ss_doc&v=1', '_blank')},
            ],
            Panzhihua:[
                { content: '米易', value: 1 ,onClick: () => window.open('http://scmyx.wenming.cn/', '_blank')},
                { content: '盐边', value: 2 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0I%2BFl4ad0YyciJKI0ZyR0IickY0%3D&uid=&restype=1&from=derive&depth=252&v=1&link_type=250', '_blank')},
            ],
            Luzhou:[
                { content: '合江', value: 1 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JOFl5XRjJyIkojRnJHQhog%3D&uid=&restype=1&from=derive&depth=140&force=true&bu=ss_doc&v=1&link_type=250', '_blank')},
                { content: '泸县', value: 2 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JOFk4fRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=159&link_type=60&force=true&v=1', '_blank')},
            ],
            Mianyang:[
                { content: '江油', value: 1 ,onClick: () => window.open('http://scjy.wenming.cn/', '_blank')},
                { content: '梓潼', value: 2 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JKGhYvRjJyIkojRnJHQ&uid=&restype=1&from=&depth=95&link_type=60&v=1', '_blank')},
                { content: '北川', value: 3 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JKGnZzRjJyIkojRnJHQ&uid=&restype=1&from=&depth=74&link_type=60&v=1', '_blank')},
                { content: '平武', value: 4 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JKGj4jRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=28&link_type=60&bu=web&v=1', '_blank')},
            ],
            Guangyuan:[
                { content: '剑阁', value: 1 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JiGlZjRjJyIkojRnJHQ&uid=&restype=1&from=&depth=95&link_type=60&v=1', '_blank')},
            ],
            Suining:[
                { content: '射洪', value: 1 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0IyRjJfRjJyIkojRnJHQhog%3D&uid=&restype=1&from=derive&depth=242&force=true&v=1&link_type=270', '_blank')},
                { content: '大英', value: 2 ,onClick: () => window.open('http://scdyx.wenming.cn/', '_blank')},
            ],
            Neijiang:[
                { content: '隆昌', value: 1 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JGVk5zRjJyIkojRnJHQ&uid=&restype=1&from=&depth=73&link_type=60&v=1', '_blank')},
            ],
            Nanchong:[
                { content: '阆中', value: 1 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0Iyck4WM0YiakZKWkZjRnJHQiIWO0IyciJKI&uid=&restype=1&from=&depth=75&v=1&link_type=250', '_blank')},
                { content: '西充', value: 2 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JGch5zRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=16&link_type=60&force=true&v=1', '_blank')},
                { content: '南部', value: 3 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JGckZ3RjJyIkojRnJHQhog%3D&uid=&restype=1&from=derive&depth=160&force=true&v=1&link_type=270', '_blank')},
            ],
            Yibin:[
                { content: '翠屏', value: 1 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0IadnI%2FRjJyIkojRnJHQ&uid=&restype=1&from=&depth=42&link_type=60&v=1', '_blank')},
                { content: '长宁', value: 2 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0IadnJHRjJyIkojRnJHQhog%3D&uid=&restype=1&from=derive&depth=98&force=true&v=1&link_type=250', '_blank')},
                { content: '筠连', value: 3 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0IadlZPRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=28&link_type=60&bu=web&v=1', '_blank')},
                { content: '珙县', value: 4 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0IadmIfRjJyIkojRnJHQh4abiw%3D%3D&uid=&restype=1&from=derive&depth=71&force=true&v=1&link_type=270', '_blank')},
                { content: '兴文', value: 5 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0Iadh4jRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=28&link_type=60&bu=web&v=1', '_blank')},
                { content: '屏山', value: 6 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0I%2BM0YyciJKI0ZyR0A%3D%3D&uid=&restype=1&from=&depth=95&link_type=60&v=1', '_blank')},
                { content: '高县', value: 7 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0IadmIeM0YyciJKI0ZyR0IaIlZU%3D&uid=&restype=1&from=derive&depth=134&force=true&v=1&link_type=270', '_blank')},
                { content: '江安', value: 8 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0IadlZ7RjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=66&link_type=60&force=true&v=1', '_blank')},
                { content: '南溪', value: 9 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0IadkYfRjJyIkojRnJHQhog%3D&uid=&restype=1&from=derive&depth=25&bu=web&v=1&link_type=270', '_blank')},
            
            ],
            Guangan:[
                { content: '华蓥', value: 1 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0Jiel4bRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=132&link_type=60&force=true&v=1', '_blank')},
                { content: '岳池', value: 2 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JiehpzRjJyIkojRnJHQ&uid=&restype=1&from=&depth=95&link_type=60&v=1', '_blank')},
                { content: '武胜', value: 3 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JieiIzRjJyIkojRnJHQ&uid=&restype=1&from=&depth=95&link_type=60&v=1', '_blank')},
                { content: '邻水', value: 4 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0Jiek4zRjJyIkojRnJHQmJKbmw%3D%3D&uid=&restype=1&from=&depth=58&v=1&link_type=250', '_blank')},
            ],
            Dazhou:[
                { content: '宣汉', value: 1 ,onClick: () => window.open('http://dzxh.scwmw.cn/', '_blank')},
                { content: '开江', value: 2 ,onClick: () => window.open('http://dzkj.scwmw.cn/', '_blank')},
                { content: '大竹', value: 3 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JuFm4XRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=25&link_type=60&bu=web&v=1', '_blank')},
                { content: '渠县', value: 4 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JuFjofRjJyIkojRnJHQ&uid=863ab67d572069d55d99ddb93d9e7a77&restype=1&from=derive&depth=6&link_type=60&bu=ss_doc&v=1', '_blank')},
                { content: '万源', value: 5 ,onClick: () => window.open('http://dzwy.scwmw.cn/', '_blank')},
                { content: '通川', value: 6 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JuFi5zRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=28&link_type=60&bu=web&v=1', '_blank')},
                { content: '达川', value: 7 ,onClick: () => window.open('https://www.dachuan.org.cn/', '_blank')},
            ],
            Bazhong:[
                { content: '平昌', value: 1 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0J2Fj5zRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=185&link_type=60&force=true&v=1', '_blank')},
                { content: '南江', value: 2 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0J2FkZXRjJyIkojRnJHQ&uid=&restype=1&from=&depth=95&link_type=60&v=1', '_blank')},
            ],
            Yaan:[
                { content: '雨城', value: 1 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0IaehpzRjJyIkojRnJHQ&uid=&restype=1&from=&depth=68&link_type=60&v=1', '_blank')},
                { content: '荥经', value: 2 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0Iae0YyciJKI0ZyR0I6Hm4vQjZU%3D&uid=&restype=1&from=&depth=62&link_type=60&v=1', '_blank')},
                { content: '汉源', value: 3 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0Iael4bRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=148&link_type=60&force=true&v=1', '_blank')},
                { content: '宝兴', value: 4 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0IaenYfRjJyIkojRnJHQ&uid=&restype=1&from=&depth=111&link_type=60&v=1', '_blank')},
                { content: '石棉', value: 5 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0IaejJLRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=24&link_type=60&bu=web&v=1', '_blank')},
                { content: '芦山', value: 6 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0Iaek4zRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=229&link_type=60&force=true&v=1', '_blank')},
            ],
            Meishan:[
                { content: '青神', value: 1 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0JKMjozRjJyIkojRnJHQ&uid=&restype=1&from=&depth=56&v=1&link_type=250', '_blank')},
            ],
            Ziyang:[
                { content: '乐至', value: 1 ,onClick: () => window.open('https://zm.sm-tc.cn/?src=l4uLj8XQ0IWGk4XRjJyIkojRnJHQ&uid=&restype=1&from=derive&depth=98&link_type=60&force=true&v=1', '_blank')},
                { content: '安岳', value: 2 ,onClick: () => window.open('https://www.anyue.gov.cn/news/show/473938', '_blank')},
            ],
            Liangshan:[
                { content: '西昌', value: 1 ,onClick: () => window.open('http://scxc.wenming.cn/', '_blank')},
            ],
        }
    },
    methods:{

    }
}
</script>

<script scoped>

</script>