document.addEventListener('DOMContentLoaded', function() {
    // Navegação entre páginas
    document.getElementById('btnSobre').addEventListener('click', function() {
        const mainContent = document.getElementById('mainContent');
        const sobreSection = document.getElementById('sobreSection');
        
        if (sobreSection.classList.contains('active')) {
            sobreSection.classList.remove('active');
            mainContent.style.display = 'flex';
        } else {
            sobreSection.classList.add('active');
            mainContent.style.display = 'none';
        }
    });
});

// Adicione este código ao seu script.js
function initCronogramaAnimation() {
    const cronograma = document.querySelector('.cronograma-texto');
    const items = document.querySelectorAll('.evento-item, .dia');
    const container = document.querySelector('.cronograma-container');
    
    // Clona os itens para criar um loop contínuo
    items.forEach(item => {
        const clone = item.cloneNode(true);
        cronograma.appendChild(clone);
    });
    
    // Ajusta a velocidade baseada na quantidade de itens
    const duration = items.length * 3;
    cronograma.style.animationDuration = `${duration}s`;
}

document.addEventListener('DOMContentLoaded', function() {
    initCronogramaAnimation();
    
    // Seu código existente de navegação...
    document.getElementById('btnSobre').addEventListener('click', function() {
        const mainContent = document.getElementById('mainContent');
        const sobreSection = document.getElementById('sobreSection');
        
        if (sobreSection.classList.contains('active')) {
            sobreSection.classList.remove('active');
            mainContent.style.display = 'flex';
        } else {
            sobreSection.classList.add('active');
            mainContent.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCadastro');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const cpf = document.getElementById('cpf').value;
        const email = document.getElementById('email').value;
        const expectativas = document.getElementById('expectativas').value;
        
        if(nome && idade && cpf && email && expectativas) {
            // Simulação de envio
            alert('Cadastro enviado com sucesso! Entraremos em contato em breve.');
            form.reset();
            
            // Aqui você pode adicionar AJAX para enviar para um servidor
            // fetch('url-do-servidor', { method: 'POST', body: new FormData(form) })
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
    
    // Máscara para CPF
    const cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if(value.length > 3) {
            value = value.replace(/^(\d{3})/, '$1.');
        }
        if(value.length > 7) {
            value = value.replace(/^(\d{3})\.(\d{3})/, '$1.$2.');
        }
        if(value.length > 11) {
            value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})/, '$1.$2.$3-');
        }
        
        e.target.value = value.substring(0, 14);
    });
});