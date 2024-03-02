<template>
    <div class="all">
        <div class="container">
            <video width="100%" controls>
                <source :src="link" type="video/mp4">
            </video>
        </div>
        <div style="width: 16%;margin-left: 20px;">
            <div class="title">{{ title }}</div>
            <div class="main">日期：{{ date }}</div>
            <div class="main">简介：{{ intro }}</div>
        </div>
    </div>
</template>

<script>
export default{
    name:'WenZhangVideo',
    data(){
        return{
            title:'标题',
            date:'2023-2',
            intro:'fcesbdifhvskfcbashJiuebfuWEBFNwnfjksegrnjkvzsgbakgfnvjnsogwiohv,mnmisehgnlsgnujweh',
            link:'https://a5462a0a00cdede2829495b47fe56c8d.v.smtcdns.com/om.tc.qq.com/Aa_KRUeGlCQVO8R2dxyK9y78R_5lY-wMqk0Znz4oG6bU/B_JxNyiJmktHRgresXhfyMepNBqUi0rNULHXmHzThTLbhct0S7J8ZEOLI9qBzc0jb7/svp_50001/szg_78308739_50001_3a304177e8224eecbf7f2bde40edcc26.f632.mp4?sdtfrom=v1010&guid=524690aa801f54d6&vkey=33B39EB894F0C6B147B9AFAF11939409A558F07C0E2BA57C0CAADE4E5BC0CC2D2D689A01F050EC0303CC7EC743FEC9FCBA2AF4D409BE9337BCB2DD63B9E666E0D0ACF4F04361683390532AB60FCB03782172E38A3B016CFC8C74D8F9E1C708C0657C1E0D29B94FD4D354FAE5C3DA722514BD2E5580B9D6982818701459F1EE28FE7A8D41567B807D6D8EBEA9583BAC2D9D2AB230187E98CD8D99BFC5204F98910292285CF6F5D07B'
        }
    },
    methods:{

    }
}
</script>

<style scoped>
.all{
    background-color: white;
    border-radius: 8px;
    width: 90%;
    /* margin: 24px; */
    display: flex;
    padding: 20px;
}
.title{
    font-size: 35px;
    font-weight: bold;
}
.main{
    font-size: 20px;
    color: #999999;
    word-break: break-all;
    margin-top: 10px;
    line-height: 30px;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: antiquewhite;
    height: 100%;
    width: 80%;
}
video{
    max-width: 100%;
    max-height: 100%;
}
</style>