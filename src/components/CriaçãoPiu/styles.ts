import styled from 'styled-components';

export const STCriaçãoPiu = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 55px;
    align-self: stretch;
    border-radius: 16px;
    background: #4c5155;
`;
export const TextoDigitado = styled.textarea`
    background: #4c5155;
    color: white;
    width: 100%;
    text-align: center;
    /* Subtitle/Normal */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    ::placeholder {
        color: white;
    }
`;
export const CaixaDeEscolhas = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;
export const CadaEscolha = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const Imagens = styled.img`
    width: 24px;
    height: 24px;
`;
export const Icones = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const Enviar = styled.button`
    background: #4c5155;
    border: none;
`;
