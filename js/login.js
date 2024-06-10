const supabaseUrl = 'https://ikbfxtcpcvwkseaukfuc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrYmZ4dGNwY3Z3a3NlYXVrZnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0NTg2NjcsImV4cCI6MjAzMzAzNDY2N30.9Z50MMjXpUYvJDO78hTcYdiAZ4oDRsrq-5FOWE9gsT4';

const database = supabase.createClient(supabaseUrl, supabaseKey);
var email
var senha
var entrar_but


async function getCliente(email) {
    let { data: clientes, error } = await database
        .from('clientes')
        .select('senha')
        .eq('email',email)

    return clientes
}


getCliente('lucask8rodrigues@gmail.com').then( data => {
    console.log(data[0])
})

document.addEventListener("DOMContentLoaded", function (){

    email = document.getElementById('email')
    senha = document.getElementById('senha')
    entrar_but = document.getElementById('entrar')

    entrar_but.addEventListener('click', function (){
        
        getCliente(email.value).then(cliente => {
            if (cliente[0]['senha'] === senha.value){
                window.location.href = "../BestBeerTickets.html";
            }else{
                alert('Senha Incorreta')
            }
        })

    })



})