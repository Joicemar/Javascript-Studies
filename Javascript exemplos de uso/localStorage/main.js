/**
 * 
 */
let theme = document.querySelector('.theme');
// Verifica se há uma preferência de tema no localStorage ao carregar a página
const savedTheme = localStorage.getItem('theme') || 'light'; // Valor padrão 'light'
if (savedTheme === 'dark') {
    theme.classList.remove('theme');
    theme.classList.add('dark');
}
if (savedTheme === 'light') {
    theme.classList.remove('theme');
    theme.classList.add('light');
}

function changeTheme() {
    theme.classList.toggle('dark');
    if (theme.classList.contains('dark')) {
        theme.classList.remove('light');
        localStorage.setItem('theme', 'dark'); //Salva 'dark' no localStorage
    } else {
        theme.classList.add('light');
        localStorage.setItem('theme', 'light'); //Salva 'light' no localStorage
    }
}