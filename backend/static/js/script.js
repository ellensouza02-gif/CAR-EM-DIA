// Garantir que o mapa só inicie quando a página carregar totalmente
window.onload = function() {
    window.map = L.map('map').setView([-15.78, -47.92], 4);
    L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        subdomains:['mt0','mt1','mt2','mt3'],
        attribution: 'Google'
    }).addTo(window.map);
};

function irPara(id) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    // Força o mapa a se ajustar ao tamanho da tela quando a tela 3 for exibida
    if(id === 'tela3' && window.map) {
        setTimeout(() => { window.map.invalidateSize(); }, 200);
    }
}

function buscarCoordenadas() {
    const lat = document.getElementById('lat').value;
    const lng = document.getElementById('lng').value;
    if(lat && lng) window.map.setView([parseFloat(lat), parseFloat(lng)], 15);
}

function analisarComIA() {
    event.target.innerText = "Analisando...";
    setTimeout(() => { irPara('tela4'); }, 1500);
}