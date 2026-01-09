<template>
  <section class="features-section">
    <div class="container features-container">
      <div class="features-content">
        <h2>
          Temos Técnicos de informática em todo Brasil com
          <br />
          Experiência e confiabilidade.
        </h2>
        <p>
          Na 3CORE, nossa missão é simplificar a tecnologia para você ou sua
          empresa, alinhando valores com inovação, eficiência e confiabilidade
          às necessidades dos nossos clientes. Nossos técnicos de Field Service
          estão disponível em todo território brasileiro.
        </p>
        <a href="#discover" class="btn-discover">Descubra mais</a>
      </div>
      <div class="features-image">
        <img
          src="/technician.png"
          alt="Técnico de informática reparando equipamento"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: 4rem 1rem;
  background-color: #f8f9fa; /* Light gray background from image */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}

.features-content {
  flex: 1;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

p {
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.btn-discover {
  display: inline-block;
  padding: 0.8rem 2rem;
  border: 1px solid #000;
  color: #000;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  background-color: transparent;
}

.btn-discover:hover {
  background-color: #000;
  color: #fff;
}

.features-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.features-image img {
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (min-width: 900px) {
  .features-container {
    flex-direction: row;
    text-align: left;
  }

  h2 {
    font-size: 2.5rem;
  }
}
</style>
