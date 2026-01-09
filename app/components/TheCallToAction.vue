<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-wrapper">
        <div class="cta-content">
          <h2>Soluções Tecnológicas de Alto Desempenho para Sua Empresa</h2>
          <p>
            Descubra como nossos serviços podem transformar seu negócio. Conheça
            agora e aproveite os benefícios!
          </p>
        </div>
        <div class="cta-action">
          <a href="#more" class="btn-cta">Saiba Mais</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 4rem 1rem;
  background-color: #fff; /* White background around the gray card */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.cta-wrapper {
  background-color: #f5f5f7; /* Very light gray */
  border-radius: 20px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
}

.cta-content {
  flex: 1;
}

.cta-content h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.cta-content p {
  color: #4a4a4a;
  font-size: 1rem;
  line-height: 1.5;
}

.cta-action {
  display: flex;
  align-items: center;
}

.btn-cta {
  background-color: #e64a19; /* Orange color from image */
  color: #fff;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  transition: background-color 0.2s;
  display: inline-block;
  white-space: nowrap;
}

.btn-cta:hover {
  background-color: #d84315;
}

@media (min-width: 768px) {
  .cta-wrapper {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4rem;
  }

  .cta-content h2 {
    font-size: 2rem;
    max-width: 80%; /* Prevent it from stretching too wide if short */
  }
}
</style>
