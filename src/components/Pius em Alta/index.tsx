import React from 'react';
import * as S from './styles';

interface Props {
    ArquivoImagem: string;
    TextoDoEmAlta: string;
    TítuloDoEmAlta: string;
}
export const PiuEmAlta: React.FC<Props> = ({
    ArquivoImagem,
    TextoDoEmAlta,
    TítuloDoEmAlta
}) => {
    return (
        <S.Wrapper>
            <S.CaixaDaNoticia>
                <S.Imagem src={ArquivoImagem} alt="imagem do em alta" />

                <S.CaixaDoTextoDaNotícia>
                    <S.TítuloNoticia>{TítuloDoEmAlta}</S.TítuloNoticia>
                    <S.TextoDaNotícia>{TextoDoEmAlta}</S.TextoDaNotícia>
                </S.CaixaDoTextoDaNotícia>
            </S.CaixaDaNoticia>
            <S.Linha />
        </S.Wrapper>
    );
};
