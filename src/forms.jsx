import React, { useState } from 'react';
import { calcularIMC, getClassificacao } from './utils';

function Form() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [erro, setErro] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!altura.includes('.') && !altura.includes(',')) {
            setErro('Por favor, certifique-se de usar "." ou "," como separador decimal.');
            return;
        }
        const imc = calcularIMC(altura, peso);
        const classificacao = getClassificacao(imc);
        setMensagem(`IMC: ${imc} - Classificação: ${classificacao}`);
        setErro(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Altura (em metros):
                <input type="number" value={altura} onChange={(event) => setAltura(event.target.value)} />
            </label>
            {erro && (
                <p className="erro" style={{ color: 'red', marginBottom: '10px' }}>{erro}</p>
            )}
            <br />
            <label>
                Peso (em quilogramas):
                <input type="number" value={peso} onChange={(event) => setPeso(event.target.value)} />
            </label>
            {mensagem && (
                <p className='mensagem' style={{ color: '#333', marginBottom: '10px' }}>{mensagem}</p>
            )}
            <button type="submit">Calcular IMC</button>
        </form>
    );
}

export default Form;