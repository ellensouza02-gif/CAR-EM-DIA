<div class="content">
    <!-- Tela 1: Início -->
    <section id="tela1" class="tela">
        <h1>Bem-vindo ao CAR em Dia</h1>
        <p>Escolha sua jornada para simplificar o Cadastro Ambiental Rural:</p>
        <button class="btn-primary" onclick="mostrarTela('tela2')">Iniciar Nova Jornada</button>
    </section>

    <!-- Tela 2: Dados -->
    <section id="tela2" class="tela" style="display:none;">
        <h1>Dados do Imóvel</h1>
        <input type="text" placeholder="Nome do Imóvel">
        <input type="text" placeholder="Município">
        <button class="btn-primary" onclick="mostrarTela('tela3')">Avançar para o Mapa</button>
    </section>

    <!-- Tela 3: Mapa -->
    <section id="tela3" class="tela" style="display:none;">
        <h1>Mapa Guiado</h1>
        <div class="mapa-placeholder">Simulação de mapa geoespacial aqui</div>
        <button class="btn-primary" onclick="mostrarTela('tela4')">Validar Dados</button>
    </section>

    <!-- Tela 4: Validação -->
    <section id="tela4" class="tela" style="display:none;">
        <h1>Pré-validação</h1>
        <div class="semaforo">🟡 Atenção: Pendências detectadas</div>
        <p>Termos técnicos simplificados e alertas de APP/RL.</p>
        <button class="btn-primary" onclick="mostrarTela('tela5')">Gerar Dossiê</button>
    </section>

    <!-- Tela 5: Dossiê -->
    <section id="tela5" class="tela" style="display:none;">
        <h1>Dossiê Final</h1>
        <p>Relatório gerado com sucesso para seu apoio técnico.</p>
        <button class="btn-primary" onclick="window.print()">Salvar/Imprimir PDF</button>
    </section>
</div>