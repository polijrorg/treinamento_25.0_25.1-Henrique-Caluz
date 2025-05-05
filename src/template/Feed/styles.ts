import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    min-height: 100vh;
    width: 100%;
    padding: ${({ theme }) => `${theme.space[5]}px`};
    flex-direction: column;
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.sky1} 0%,
        ${({ theme }) => theme.colors.sky3} 100%
    );
    overflow-x: hidden;

    @media (max-width: 768px) {
        padding: ${({ theme }) => `${theme.space[3]}px`};
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    padding: ${({ theme }) => `${theme.space[6]}px`};
    border-radius: ${({ theme }) => `${theme.radii.md}px`};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    animation: ${fadeIn} 0.6s ease-out;

    @media (max-width: 768px) {
        padding: ${({ theme }) => `${theme.space[4]}px`};
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: ${({ theme }) => `${theme.space[4]}px`};
    text-align: center;
    letter-spacing: -0.5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    animation: ${fadeIn} 0.6s ease-out;

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`;

export const Comment = styled.p`
    color: ${({ theme }) => theme.colors.sky10};
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => `${theme.space[3]}px`};
    text-align: center;
    font-weight: 500;
    animation: ${fadeIn} 0.8s ease-out;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.slate11};
    font-size: 1.2rem;
    margin-bottom: ${({ theme }) => `${theme.space[5]}px`};
    text-align: center;
    line-height: 1.6;
    max-width: 540px;
    animation: ${fadeIn} 1s ease-out;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ComponentWrapper = styled.div`
    margin-top: ${({ theme }) => `${theme.space[4]}px`};
    animation: ${fadeIn} 1.2s ease-out;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Tudo = styled.div`
    width: 100%;
    display: flex;
    background: #fff;
    height: 100vh;
`;
export const ComponentOpções = styled.div`
    display: flex;
    height: 100vh;
    width: 320px;
    padding: 32px 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-right: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
`;
export const CaixaOpções = styled.div`
    display: flex;
    height: 528px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
    align-self: stretch;
`;
export const LogoPiuPiu = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;
export const StylePIUPIUWER = styled.p`
    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 6px;
`;
export const EscolhaOpções = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    padding-left: 16px;
    align-items: center;
`;
export const CadaOpção = styled.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
`;
export const TextOpção = styled.p`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const Quadrado = styled.div`
    display: flex;
    width: 64px;
    height: 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #fff;
    flex: 1 0 0;
    align-self: stretch;
`;
export const StyleFeed = styled.div`
    display: flex;
    width: 784px;
    padding: 32px;
    flex-direction: column;
    align-items: center;
    gap: 46px;
    background: var(--Slate-1, #151718);
    overflow-y: scroll;
`;
export const Linha = styled.hr`
    border: none;
    height: 10px;
    background-color: #4c5155;
    width: 100%;
`;
export const PiusemAlta = styled.div`
    display: flex;
    width: 336px;
    padding: 32px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-left: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
`;
export const LogoPiuEmAlta = styled.div`
    display: flex;
    align-items: center;
`;
export const ImagemEmAlta = styled.img`
    width: 32px;
    height: 32px;
`;
export const TextoPiuEmAlta = styled.p`
    color: var(--Slate-12, #ecedee);
    /* Headline/Bold */
    font-family: Nunito;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
