import styled from 'styled-components';

export const CaixaDaNoticia = styled.div`
    display: flex;
    flex-direction: row;
    width: 304px;
    height: 120px;
    align-items: center;
    gap: 8px;
`;
export const ImagemDaNoticia = styled.div`
    display: flex;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 2px;
    background: #fff;
`;
export const Imagem = styled.img`
    width: 112px;
    height: 112px;
    flex-shrink: 0;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;
export const CaixaDoTextoDaNotícia = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
    align-self: stretch;
`;
export const TítuloNoticia = styled.p`
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const TextoDaNotícia = styled.p`
    align-self: stretch;
    color: var(--Slate-12, #ecedee);
    font-feature-settings: 'liga' off, 'clig' off;
    /* Body/Body Normal */
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
export const Linha = styled.div`
    height: 1px;
    width: 100%;
    background-color: #4c5155;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
