<template>
  <section class="services-section">
    <div class="container">
      <div class="services-wrapper">
        <div class="services-header">
          <h2>Transformamos a Tecnologia em Soluções para Você</h2>
          <p>Conheça nossos serviços que impulsionam o seu negócio.</p>
        </div>

        <div class="services-grid">
          <!-- Service Item 1 -->
          <div class="service-item">
            <h3>Suporte de TI</h3>
            <p>
              Oferecemos suporte técnico completo para manter sua empresa
              conectada.
            </p>
          </div>

          <!-- Service Item 2 -->
          <div class="service-item">
            <h3>Infraestrutura de Redes</h3>
            <p>
              Projetamos e implementamos redes confiáveis para o seu negócio.
            </p>
          </div>

          <!-- Service Item 3 -->
          <div class="service-item">
            <h3>Loja de Informática</h3>
            <p>
              Encontre os melhores produtos de tecnologia na nossa loja online.
            </p>
          </div>

          <!-- Service Item 4 -->
          <div class="service-item">
            <h3>Outsourcing de TI</h3>
            <p>
              Gerenciamos sua Infraestrutura de TI para que você possa focar no
              crescimento.
            </p>
          </div>

          <!-- Service Item 5 -->
          <div class="service-item">
            <h3>Soluções de CFTV</h3>
            <p>Garantimos segurança com sistemas modernos de monitoramento.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: 4rem 1rem;
  background-color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.services-wrapper {
  background-color: #f5f5f7; /* Light gray container color */
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
}

.services-header {
  margin-bottom: 3rem;
  max-width: 800px;
}

.services-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.services-header p {
  color: #4a4a4a;
  font-size: 1.1rem;
}

.services-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.service-item h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.service-item p {
  color: #4a4a4a;
  line-height: 1.5;
  font-size: 0.95rem;
}

@media (min-width: 768px) {
  .services-wrapper {
    padding: 4rem;
  }

  .services-header h2 {
    font-size: 2.5rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns based on design */
    column-gap: 2rem;
    row-gap: 3rem;
  }
}
</style>
