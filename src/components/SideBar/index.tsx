import React from 'react';
import * as S from './styles';

interface Props {
    NomeDaOpção: string;
    NomeDaImagemDaOpção: string;
}
export const Sidebar: React.FC<Props> = ({
    NomeDaImagemDaOpção,
    NomeDaOpção
}) => {
    return (
        <S.CadaOpção>
            <S.ImagemDaOpção src={NomeDaImagemDaOpção} alt="imagem da opção" />
            <S.TextOpção>{NomeDaOpção}</S.TextOpção>
        </S.CadaOpção>
    );
};
