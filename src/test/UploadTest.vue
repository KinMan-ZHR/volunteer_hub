<template>
  <div>
    <button @click="openDialog">上传视频</button>
    <dialog v-if="isOpen">
      <input type="file" @change="handleFileUpload" accept="video/*" multiple>
      <div v-for="file in files" :key="file.name">
        <span>{{ file.name }}</span>
        <progress :value="file.progress" max="100"></progress>
      </div>
      <button @click="uploadAll">上传所有视频</button>
      <button @click="closeDialog">关闭</button>
    </dialog>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const isOpen = ref(false);
    const files = ref([]);

    const openDialog = () => {
      isOpen.value = true;
    };

    const closeDialog = () => {
      isOpen.value = false;
    };

    const handleFileUpload = (event) => {
      const selectedFiles = Array.from(event.target.files);
      selectedFiles.forEach(file => {
        files.value.push({
          file,
          progress: 0
        });
      });
    };

    const uploadAll = async () => {
      const formData = new FormData();
      files.value.forEach(({ file }) => {
        formData.append('videos', file);
      });

      try {
        await axios.post('/your-upload-endpoint', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            files.value.forEach(file => {
              file.progress = percentCompleted;
            });
          },
        });

        closeDialog();
      } catch (error) {
        console.error('Upload failed:', error);
      }
    };

    return {
      isOpen,
      files,
      openDialog,
      closeDialog,
      handleFileUpload,
      uploadAll
    };
  }
};
</script>
