<template>
  <header class="header">
    <div class="container header-content">
      <div class="logo">
        <a href="/">
          <img
            src="https://3core.com.br/wp-content/uploads/2025/04/marca_assinatura-300x127.png"
            alt="3CORE Tecnologia"
          />
        </a>
      </div>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <ul>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/servicos">Serviços</a></li>
          <li><a href="/portfolio">Portfólio</a></li>
          <li><a href="/precos">Preços</a></li>
          <li><a href="/contato">Contato</a></li>
          <li><a href="/" class="active">Inicial</a></li>
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="mobile-menu-btn"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Mobile Navigation Overlay -->
      <div class="mobile-nav-overlay" :class="{ 'is-open': isMenuOpen }">
        <div class="mobile-nav-header">
          <div class="logo">
            <img
              src="https://3core.com.br/wp-content/uploads/2025/04/marca_assinatura-300x127.png"
              alt="3CORE Tecnologia"
            />
          </div>
          <button
            class="close-menu-btn"
            @click="isMenuOpen = false"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <nav class="mobile-nav">
          <ul>
            <li><a href="/sobre" @click="isMenuOpen = false">Sobre</a></li>
            <li>
              <a href="/servicos" @click="isMenuOpen = false">Serviços</a>
            </li>
            <li>
              <a href="/portfolio" @click="isMenuOpen = false">Portfólio</a>
            </li>
            <li><a href="/precos" @click="isMenuOpen = false">Preços</a></li>
            <li><a href="/contato" @click="isMenuOpen = false">Contato</a></li>
            <li><a href="/" @click="isMenuOpen = false">Inicial</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>

<style scoped>
.header {
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 50px; /* Adjust based on actual logo aspect ratio */
  width: auto;
}

/* Desktop Nav */
.desktop-nav {
  display: none; /* Hidden on mobile */
}

.desktop-nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.desktop-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s;
}

.desktop-nav a:hover,
.desktop-nav a.active {
  color: #333; /* Or strictly black as per image? keeping it subtle */
}

/* Mobile Nav */
.mobile-menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
}

.hamburger-line {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
}

.mobile-nav-overlay {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%; /* Or just a sidebar width */
  height: 100vh;
  background-color: #fff;
  transition: right 0.3s ease-in-out;
  z-index: 1001;
  display: flex;
  flex-direction: column;
}

.mobile-nav-overlay.is-open {
  right: 0;
}

.mobile-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.close-menu-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;
}

.mobile-nav {
  padding: 2rem;
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav li {
  margin-bottom: 1.5rem;
}

.mobile-nav a {
  text-decoration: none;
  color: #333;
  font-size: 1.25rem;
  font-weight: 600;
  display: block;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: block;
  }
  .mobile-menu-btn {
    display: none;
  }
}
</style>
