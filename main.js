
document.getElementById("root").innerHTML = `
  <div style='padding:20px;text-align:center'>
    <h1 style='color:green;'>Bot WhatsApp Aluguel</h1>
    <p>Automatize seu grupo com comandos inteligentes!</p>

    <nav style='margin: 20px 0;'>
      <button onclick="showTab('home')">Início</button>
      <button onclick="showTab('plans')">Planos</button>
      <button onclick="showTab('contact')">Contato</button>
    </nav>

    <div id="content"></div>

    <footer style='margin-top:40px;font-size:12px;color:#777'>
      © 2025 Bot WhatsApp Aluguel. Todos os direitos reservados.
    </footer>
  </div>

  <script>
    function showTab(tab) {
      const content = document.getElementById('content');
      if (tab === 'home') {
        content.innerHTML = \`
          <h2>Recursos do Bot</h2>
          <ul style='text-align:left;max-width:400px;margin:auto'>
            <li>📷 Criar Figurinhas</li>
            <li>🔮 Horóscopo Diário</li>
            <li>🛡️ Proteção Contra Ataques</li>
            <li>🎮 Jogos no Grupo</li>
            <li>🚫 Anti-Propaganda</li>
          </ul>
          <a class='whatsapp' href='https://wa.me/5521982882464' target='_blank'>Falar no WhatsApp</a>
        \`;
      } else if (tab === 'plans') {
        content.innerHTML = \`
          <h2>Planos disponíveis</h2>
          <div class='card'><strong>Básico:</strong> R$20,00/mês<br/>Comandos básicos + suporte 12h às 15h</div>
          <div class='card'><strong>Intermediário:</strong> R$35,00/mês<br/>Comandos básicos + suporte 24h</div>
          <div class='card'><strong>Avançado:</strong> R$50,00/mês<br/>Todos os comandos + suporte personalizado</div>
          <a class='whatsapp' href='https://wa.me/5521982882464' target='_blank'>Contratar via WhatsApp</a>
        \`;
      } else if (tab === 'contact') {
        content.innerHTML = \`
          <h2>Fale comigo</h2>
          <p>Entre em contato diretamente pelo WhatsApp:</p>
          <a class='whatsapp' href='https://wa.me/5521982882464' target='_blank'>(21) 98288-2464</a>
        \`;
      }
    }
    showTab('home');
  </script>
`;
