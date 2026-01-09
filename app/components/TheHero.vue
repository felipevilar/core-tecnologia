<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1 class="hero-title">
        Na 3CORE você Encontra Soluções Sob Medida para Suporte Técnico de TI e
        Outsourcing
      </h1>
      <p class="hero-subtitle">
        Serviços de TI Confiáveis para Impulsionar Seu Negócio em todo o Brasil.
        <br class="hidden-mobile" />
        Não se preocupe em procurar técnicos de TI, a 3CORE faz isso para você
      </p>
      <a href="#more" class="hero-btn">Saiba Mais</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 80vh; /* Adjust as needed */
  min-height: 500px;
  background-image: url("/hero-bg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  margin: 1rem; /* The image shows it has rounded corners and margin */
  border-radius: 20px;
  overflow: hidden;
}

/* Fallback background if image missing or while loading */
.hero {
  background-color: #333;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay */
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 0 1rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  opacity: 0.9;
}

.hero-btn {
  display: inline-block;
  background-color: #eee;
  color: #333;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s;
}

.hero-btn:hover {
  background-color: #fff;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

.hidden-mobile {
  display: none;
}

@media (min-width: 768px) {
  .hidden-mobile {
    display: inline;
  }
}
</style>
