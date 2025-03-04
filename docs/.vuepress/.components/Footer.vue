<template>
    <footer class="vp-footer">
      <div class="footer-content">
        <img src="/images/EN-Funded by the EU-POS.jpg" alt="Footer Logo" style="height: 40px; float: right; margin-right: 100px;"/> 
        <p>© 2024 BrightSpace Grant agreement ID 101060075</p>
      </div>
    </footer>
</template>


<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Footer',
});
</script>


<!-- <style scoped>
.vp-footer {
  padding: 3rem !important;
  border-top: 1px solid var(--vp-c-border) !important;
  color: var(--vp-c-text-mute) !important;
  text-align: center !important;
  transition: border-color var(--vp-t-color) !important;
  margin-top: 300px; /* 增加顶部外边距，以将边框向下移动 */
}
</style> -->

<style scoped>
.vp-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  border-top: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-mute);
  /* background-color: white; 或者自定义背景颜色 */
  text-align: center;
  z-index: 10; /* 确保 footer 在最上层 */
}


.footer-content {
  display: flex;
  justify-content: center; /* 居中对齐 */
  align-items: center; /* 垂直居中对齐 */
  gap: 20rem; /* 控制文字和图片的间距 */
}

.footer-content img {
  height: 30px; /* 调整图片大小 */
}
</style>