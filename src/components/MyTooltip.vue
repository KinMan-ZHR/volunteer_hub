<script setup>
import {defineProps} from "vue";
import { Card as TCard, Icon as TIcon, Link as TLink} from "tdesign-vue-next";

defineProps({
  name: String,
  cover: String,
  state: Number,
  link: String
})
</script>

<template>
  <div>
    <t-card :cover="cover" bordered :style="{ width: '300px' }">
      <template #footer>
          <div style="display: flex;"><p style="width: 170px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{ name }}</p>
              <div style="display: flex;justify-content: center;align-items: center;">
                  <t-icon name="refresh" v-if="state[0] === 3" style="color: green; line-height: 22px;margin-top: 4px; margin-left: 8px;" ></t-icon>
                  <t-icon name="pending" v-if="state[0] === 2" style="color: var(--td-brand-color-4); line-height: 22px;margin-top: 4px; margin-left: 8px;" ></t-icon>
                  <t-icon name="assignment" v-if="state[0] === 4" style="color: red; line-height: 22px;margin-top: 4px; margin-left: 8px;" ></t-icon>
              </div>
              <div style="padding: 0px 4px ;">
                  <p class="note" v-if="state[0] === 3" style="color: green;">进行中</p>
                  <p class="note" v-if="state[0] === 2" style="color: var(--td-brand-color-4);">待启动</p>
                  <p class="note" v-if="state[0] === 4" style="color: red;">已结项</p>
              </div>

          </div>
          <div style="margin-top: 12px;">
            <t-link theme="default" underline :href="link" target="_blank">
              <t-icon name="link"></t-icon>
              跳转链接
            </t-link>
          </div>

      </template>
  </t-card>
  </div>
</template>


<style scoped>


</style>
