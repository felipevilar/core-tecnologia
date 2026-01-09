<template>
  <section class="solutions-section">
    <div class="container">
      <div class="solutions-header">
        <h2>Soluções Tecnológicas que Fazem a Diferença</h2>
        <p>
          Explore nossa ampla gama de serviços, projetados para garantir
          qualidade, rapidez nas soluções e a satisfação total do nosso cliente.
        </p>
      </div>

      <div class="solutions-grid">
        <!-- Card 1 -->
        <div class="solution-card">
          <h3>Suporte Técnico de Informática</h3>
          <p>
            Soluções ágeis para resolver problemas técnicos em equipamentos de
            informática, como notebook, computadores e impressoras.
          </p>
          <div class="card-image">
            <img src="/support-circuit.png" alt="Reparo de eletrônicos" />
          </div>
        </div>

        <!-- Card 2 -->
        <div class="solution-card">
          <h3>Outsourcing / Parceria</h3>
          <p>
            Precisando fechar uma parceria técnica para atendimentos de
            informática ou network. Temos técnicos de informática a nível
            Brasil.
          </p>
          <div class="card-image">
            <img src="/outsourcing-brazil.png" alt="Parceria em todo Brasil" />
          </div>
        </div>

        <!-- Card 3 -->
        <div class="solution-card">
          <h3>Infraestrutura de Redes</h3>
          <p>
            Aqui você encontra serviços de cabeamento estruturado, instalações,
            organização de Datacenter, variedades de serviços de network.
          </p>
          <div class="card-image">
            <img src="/network-cables.png" alt="Infraestrutura de Redes" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solutions-section {
  padding: 4rem 1rem;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.solutions-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem auto;
}

.solutions-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.solutions-header p {
  color: #4a4a4a;
  font-size: 1rem;
  line-height: 1.5;
}

.solutions-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.solution-card {
  background-color: #fff;
  border-radius: 20px;
  padding: 2rem 1.5rem 2rem 1.5rem; /* Padding bottom 0 to let image touch bottom if needed, or controlled by image container */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s;
  overflow: hidden;
}

.solution-card:hover {
  transform: translateY(-5px);
}

.solution-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.solution-card p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.5;
  flex: 1; /* Pushes image to bottom */
}

.card-image {
  width: 100%;
  display: flex;
  justify-content: center;
}

.card-image img {
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0; /* Or fully rounded depending on exact look, image implies rounded top inside card or just fit */
  border-radius: 12px; /* Making it look like the screenshot where image floats inside */
  object-fit: cover;
  aspect-ratio: 4/3;
}

@media (min-width: 768px) {
  .solutions-header h2 {
    font-size: 2.5rem;
  }

  .solutions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
</style>
