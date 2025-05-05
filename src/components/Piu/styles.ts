import styled from 'styled-components';

export const StylePiu = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-3, #202425);
`;
export const Usuário = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`;
export const CaixaNome = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const Lixo = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    background: var(--Slate-3, #202425);
`;
export const FotoUsuário = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    order: 4px solid var(--Institutional-Blue-Fade, #004c97);
`;
export const FotoFofa = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
export const NomeDoUsuário = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;
export const TextoDoNome = styled.p`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const TextoDoArroba = styled.p`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    /* Body/Body Normal */
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
export const TextoDaPostagem = styled.p`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const EscolhasPiu = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;
export const BotõesdoPiu = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const TextoDaQuantida = styled.p`
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Normal */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const Foto = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 40px;
`;
export const BotãoLike = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--Slate-3, #202425);
    border: none;
`;
