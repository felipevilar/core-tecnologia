<template>
  <a
    href="https://wa.me/yournumber"
    class="whatsapp-btn"
    target="_blank"
    aria-label="Fale conosco no WhatsApp"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
    />
  </a>
</template>

<style scoped>
.whatsapp-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  transition: transform 0.2s;
}

.whatsapp-btn:hover {
  transform: scale(1.1);
}

.whatsapp-btn img {
  width: 35px;
  height: 35px;
  filter: brightness(0) invert(1); /* Make icon white */
}
</style>
