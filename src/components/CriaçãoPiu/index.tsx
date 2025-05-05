import React from 'react';
import * as S from './styles';

interface Props {
    enviar?: () => void;
    Digitação?: string;
    setDigitação: (value: string) => void;
}
export const CriaçãoPiu: React.FC<Props> = ({
    enviar,
    Digitação,
    setDigitação
}) => {
    return (
        <S.STCriaçãoPiu>
            <S.TextoDigitado
                placeholder="Quero dar um piu"
                value={Digitação}
                onChange={(event) => setDigitação(event.target.value)}
                rows={5}
                cols={28}
            />
            <S.CaixaDeEscolhas>
                <S.Icones>
                    <S.Imagens
                        src="/imagens/pictures.png"
                        alt="adicionar fotos"
                    />
                    <S.Imagens src="/imagens/Video.png" alt="vídeo" />
                    <S.Imagens src="/imagens/Sorriso.png" alt="smile" />
                    <S.Imagens src="/imagens/Tag.png" alt="salvados?" />
                    <S.Imagens src="/imagens/gif.png" alt="gif" />
                </S.Icones>
                <S.Enviar onClick={enviar}>
                    <S.Imagens src="/imagens/Envio.png" alt="enviar piu" />
                </S.Enviar>
            </S.CaixaDeEscolhas>
        </S.STCriaçãoPiu>
    );
};
