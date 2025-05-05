import React, { useState } from 'react';
import * as S from './styles';

// O nome da imagem precisa estar como /imagens/nome do arquivo.tipo de arquivo
interface Props {
    NomeDaImagemTipoDeArquivo: string;
    TextoDaPostagem: string;
    QuantidadeDeRepostagens: string;
    QuantidadeDeComentários: string;
    NomeDaConta: string;
    Arroba: string;
    Lixo?: () => void;
}
export const Pius: React.FC<Props> = ({
    NomeDaImagemTipoDeArquivo,
    TextoDaPostagem,
    QuantidadeDeRepostagens,
    QuantidadeDeComentários,
    NomeDaConta,
    Arroba,
    Lixo
}) => {
    const [like, setLike] = useState(0);
    const [ImagemLike, SetImagemLike] = useState('/imagens/Like_vazio.svg');
    return (
        <S.StylePiu>
            <S.Usuário>
                <S.CaixaNome>
                    <S.FotoUsuário>
                        <S.FotoFofa>
                            <S.Foto
                                src={NomeDaImagemTipoDeArquivo}
                                alt="Foto de perfil"
                            />
                        </S.FotoFofa>
                    </S.FotoUsuário>
                    <S.NomeDoUsuário>
                        <S.TextoDoNome>{NomeDaConta}</S.TextoDoNome>
                        <S.TextoDoArroba>{Arroba}</S.TextoDoArroba>
                    </S.NomeDoUsuário>
                </S.CaixaNome>
                <S.Lixo type="button" onClick={Lixo}>
                    <img src="/imagens/Trash_Full.svg" alt="lixo" />
                </S.Lixo>
            </S.Usuário>
            <S.TextoDaPostagem>{TextoDaPostagem}</S.TextoDaPostagem>
            <S.EscolhasPiu>
                <S.BotõesdoPiu>
                    <img src="/imagens/Retuitar vazio.svg" alt="retuitar" />
                    <S.TextoDaQuantida>
                        {QuantidadeDeRepostagens}
                    </S.TextoDaQuantida>
                </S.BotõesdoPiu>
                <S.BotõesdoPiu>
                    <img src="/imagens/Comentário_vazio.svg" alt="comentário" />
                    <S.TextoDaQuantida>
                        {QuantidadeDeComentários}
                    </S.TextoDaQuantida>
                </S.BotõesdoPiu>
                <S.BotãoLike
                    type="button"
                    onClick={() => {
                        if (like !== 1) {
                            setLike(like + 1);
                            SetImagemLike('/imagens/Heart_02.svg');
                        }
                        if (like === 1) {
                            setLike(like - 1);
                            SetImagemLike('/imagens/Like_vazio.svg');
                        }
                    }}
                >
                    <img src={ImagemLike} alt="likes" />
                    <S.TextoDaQuantida>{like}</S.TextoDaQuantida>
                </S.BotãoLike>
            </S.EscolhasPiu>
        </S.StylePiu>
    );
};
