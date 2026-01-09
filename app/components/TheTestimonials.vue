<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="testimonials-header">
        <h2>Soluções de TI Personalizadas para o Seu Negócio</h2>
        <p>
          Confira o que nossos clientes dizem sobre a excelência dos nossos
          serviços de TI.
        </p>
      </div>

      <div class="testimonials-grid">
        <!-- Review 1 -->
        <div class="testimonial-card">
          <div class="stars">
            <span v-for="i in 5" :key="i" class="star">★</span>
          </div>
          <p class="review-text">
            Ótimo atendimento, qualidade no serviço e o mais importante para mim
            é a honestidade, difícil achar pessoas corretas nessa ramo de
            tecnologia.
          </p>
          <div class="author-info">
            <p class="author-name">Crisley Sarmento</p>
            <p class="author-role">Gerente da Fisiokids</p>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="testimonial-card">
          <div class="stars">
            <span v-for="i in 5" :key="i" class="star">★</span>
          </div>
          <p class="review-text">
            Gostei muito do atendimento, eficiência e atenção da Empresa e me
            congratulo pelo serviço
          </p>
          <div class="author-info">
            <p class="author-name">Maria Silvia</p>
            <p class="author-role">Cliente Pessoa Física</p>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="testimonial-card">
          <div class="stars">
            <span v-for="i in 5" :key="i" class="star">★</span>
          </div>
          <p class="review-text">
            Venho agradecer a equipe em nome da HC Pneus, pelo ótimo serviço
            prestado em nossos computadores! Recomendo
          </p>
          <div class="author-info">
            <p class="author-name">Leandra Pinheiro</p>
            <p class="author-role">Assistente Administrativa da HC Pneus</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  padding: 4rem 1rem;
  background-color: #f5f5f7; /* Very light gray matching background */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.testimonials-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem auto;
}

.testimonials-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.testimonials-header p {
  color: #4a4a4a;
  font-size: 1rem;
  line-height: 1.5;
}

.testimonials-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.testimonial-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stars {
  color: #e64a19; /* Orange/Red color from screenshot */
  font-size: 1.25rem;
  display: flex;
  gap: 2px;
}

.review-text {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  flex: 1; /* Pushes content down */
}

.author-info {
  margin-top: 1rem;
}

.author-name {
  font-weight: 700;
  color: #1a1a1a;
  font-size: 0.95rem;
  margin: 0;
}

.author-role {
  color: #666;
  font-size: 0.85rem;
  margin: 0.2rem 0 0 0;
}

@media (min-width: 768px) {
  .testimonials-header h2 {
    font-size: 2.25rem;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
</style>
