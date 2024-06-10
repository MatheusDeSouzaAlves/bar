const supabaseUrl = 'https://ikbfxtcpcvwkseaukfuc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrYmZ4dGNwY3Z3a3NlYXVrZnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0NTg2NjcsImV4cCI6MjAzMzAzNDY2N30.9Z50MMjXpUYvJDO78hTcYdiAZ4oDRsrq-5FOWE9gsT4';

const database = supabase.createClient(supabaseUrl, supabaseKey);
let name_input, email_input, cpf_input, password_input, phone_input, cadastrar_but;

const createUser = async (nome, email, cpf, senha, telefone) => {
    const { data, error } = await database
        .from('clientes')
        .insert([
            {
                nome: nome,
                email: email,
                cpf: cpf,
                senha: senha,
                telefone: telefone
            }
        ])
        .select();
    
    if (error) {
        console.error('Erro ao cadastrar usuário:', error.message);
    } else {
        console.log('Usuário cadastrado com sucesso:', data);
        window.location.href = 'login.html'; // Redireciona para a página inicial
    }
};

document.addEventListener("DOMContentLoaded", function () {
    name_input = document.getElementById('inputFullName');
    email_input = document.getElementById('inputEmail');
    cpf_input = document.getElementById('inputCPF');
    password_input = document.getElementById('inputPassword');
    phone_input = document.getElementById('inputPhone');
    cadastrar_but = document.getElementById('cadastrar');

    cadastrar_but.addEventListener('click', () => {
        createUser(
            name_input.value, 
            email_input.value, 
            cpf_input.value, 
            password_input.value, 
            phone_input.value
        )
    });
});
