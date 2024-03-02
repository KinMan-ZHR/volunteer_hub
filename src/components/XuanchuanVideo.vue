<template>
    <div :id="`${path}#container`" class="anchor-demo anchor-container-demo">
        <t-anchor :id="`${path}#default`" container="#anchor-container" @click="handleClick" size="small">
            <t-anchor-item :href="`#${path}#content-1`" title="A分类" />
            <t-anchor-item :href="`#${path}#content-2`" title="B分类" />
            <t-anchor-item :href="`#${path}#content-3`" title="C分类" />
        </t-anchor>
        <t-space id="anchor-container" direction="vertical" :size="0">
            <div :id="`${path}#content-1`" class="anchor-content-1">
                <div class="title">A分类</div>
                <div class="line">
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px', cursor: 'pointer' }" hoverShadow="true" @click="visible = true">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                </div>
                <div class="line">
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                </div>
            </div>
            <div :id="`${path}#content-2`" class="anchor-content-2">
                <div class="title">B分类</div>
                <div class="line">
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                </div>
                <div class="line">
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                </div>
            </div>
            <div :id="`${path}#content-3`" class="anchor-content-3">
                <div class="title">C分类</div>
                <div class="line">
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                </div>
                <div class="line">
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                </div>
                <div class="line">
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                    <div class="card">
                        <t-card :cover="cover" theme="poster2" :style="{ width: '250px' }">
                            <template #footer>
                                <t-comment>
                                    <template #author>
                                        <div class="t-comment__name">标题</div>
                                    </template>
                                </t-comment>
                            </template>
                        </t-card>
                    </div>
                </div>
            </div>
        </t-space>
        <t-dialog
            :footer="false"
            :header="false"
            preventScrollThrough
            showOverlay
            placement="center"
            v-model:visible="visible"
            width="90%"
            >
            <WenZhangVideo></WenZhangVideo>
        </t-dialog>
    </div>
</template>

<script>
import { computed, getCurrentInstance } from 'vue';
import get from 'lodash/get';
import WenZhangVideo from './WenZhangVideo.vue';

export default {
    name:'XuanChuanVideo',
    components:{
        WenZhangVideo
    },
    setup() {
        const { appContext } = getCurrentInstance();
        const path = computed(() => get(appContext, '$route.path', ''));

        const handleClick = ({ e, href, title }) => {
        e.preventDefault();
        console.log('click', href, title);
        };

        const cover = 'https://tdesign.gtimg.com/site/source/card-demo.png';

        return {
            path,
            handleClick,
            cover
        };
    },
    data(){
        return{
            visible:'false',
        }
    },
    methods:{
        
    }
};
</script>

<style scoped>
.anchor-container-demo {
  display: flex;
}
#anchor-container {
  flex-grow: 1;
  height: calc(100vh - 74px);
  overflow: auto;

  .anchor-content-1 {
    background: #ecf2fe;
  }
  .anchor-content-2 {
    background: #d4e3fc;
  }
  .anchor-content-3 {
    background: #bbd3fb;
  }
}
.title{
    font-size: 25px;
    font-weight: bold;
    margin-left: 20px;
    padding-top: 25px;
}
.t-comment__name {
    font-weight: bold;
    height: 10px;
    align-items: center;
}
.card{
    padding: 25px;
}
.line{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
}
</style>