import React, { useState } from 'react';
import { CriaçãoPiu } from 'components/CriaçãoPiu';
import { PiuEmAlta } from 'components/Pius em Alta';
import { Pius } from 'components/Piu';
import { Sidebar } from 'components/SideBar';
import * as S from './styles';

const ExampleTemplate = () => {
    const [inputText, setInputText] = useState('');
    type Piu = {
        id: number;
        texto: string;
    };
    const [pius, setPius] = useState<Piu[]>([]);

    const enviarPiu = () => {
        if (inputText.trim() !== '' && inputText.length <= 140) {
            const novoPiu = {
                id: Date.now(), // gera um ID único baseado na data
                texto: inputText
            };
            setPius([...pius, novoPiu]);
            setInputText('');
        }
    };
    const deletarPiu = (id: number) => {
        setPius(pius.filter((piu) => piu.id !== id));
    };
    return (
        <S.Tudo>
            <S.ComponentOpções>
                <S.CaixaOpções>
                    <S.LogoPiuPiu>
                        <img
                            src="/imagens/chick-svgrepo-com 1.png"
                            alt="Logo da PiuPiu"
                            width="48px"
                            height="48px"
                        />
                        <S.StylePIUPIUWER>PIUPIUWER</S.StylePIUPIUWER>
                    </S.LogoPiuPiu>
                    <S.EscolhaOpções>
                        <Sidebar
                            NomeDaImagemDaOpção="/imagens/bx_home.png"
                            NomeDaOpção="Página Inicial"
                        />
                        <Sidebar
                            NomeDaImagemDaOpção="/imagens/ic_outline-notifications.png"
                            NomeDaOpção="Notificações"
                        />
                        <Sidebar
                            NomeDaImagemDaOpção="/imagens/jam_messages-alt.png"
                            NomeDaOpção="Mensagens"
                        />
                        <Sidebar
                            NomeDaImagemDaOpção="/imagens/Cloud_Check.png"
                            NomeDaOpção="Salvos"
                        />
                        <Sidebar
                            NomeDaImagemDaOpção="/imagens/pajamas_profile.png"
                            NomeDaOpção="Perfil"
                        />
                        <Sidebar
                            NomeDaImagemDaOpção="/imagens/akar-icons_gear.svg"
                            NomeDaOpção="Configurações"
                        />
                    </S.EscolhaOpções>
                </S.CaixaOpções>
                <S.Quadrado>
                    <img
                        src="/imagens/quadrados 1.png"
                        alt="quadrado"
                        align-self="stretch"
                    />
                </S.Quadrado>
            </S.ComponentOpções>
            <S.StyleFeed>
                <CriaçãoPiu
                    enviar={enviarPiu}
                    Digitação={inputText}
                    setDigitação={setInputText}
                />
                {pius.map((piu) => (
                    <Pius
                        key={piu.id}
                        NomeDaImagemTipoDeArquivo="/imagens/goku.jpg"
                        TextoDaPostagem={piu.texto}
                        QuantidadeDeComentários="0"
                        QuantidadeDeRepostagens="0"
                        NomeDaConta="SeuNome"
                        Arroba="@seuarroba"
                        Lixo={() => deletarPiu(piu.id)}
                    />
                ))}
                <Pius
                    NomeDaImagemTipoDeArquivo="/imagens/goku.jpg"
                    TextoDaPostagem="Me ajudem para eu derrotar o Kid boo com a Genki Dama"
                    QuantidadeDeComentários="10000"
                    QuantidadeDeRepostagens="200000"
                    NomeDaConta="Goku"
                    Arroba="@Goku"
                />
                <Pius
                    NomeDaImagemTipoDeArquivo="/imagens/kid boo.jpg"
                    TextoDaPostagem="kya kya aahhh(Tradução vai se fuder universo)"
                    QuantidadeDeComentários="10"
                    QuantidadeDeRepostagens="20"
                    NomeDaConta="Kid Boo"
                    Arroba="@Majin Boo"
                />
            </S.StyleFeed>
            <S.PiusemAlta>
                <S.LogoPiuEmAlta>
                    <S.ImagemEmAlta src="/imagens/fogo.png" />
                    <S.TextoPiuEmAlta>Pius em Alta</S.TextoPiuEmAlta>
                </S.LogoPiuEmAlta>
                <PiuEmAlta
                    ArquivoImagem="/imagens/Poli.jpg"
                    TextoDoEmAlta="Escola Politecnica pega fogo e alunos comemoram, 'finalmente posso ver a minha mãe' "
                    TítuloDoEmAlta="Fogo na Poli"
                />
                <PiuEmAlta
                    ArquivoImagem="/imagens/batman.jpg/"
                    TextoDoEmAlta="Nem o Batman está tancando a volta da segunda feira"
                    TítuloDoEmAlta="Segunda-Feira"
                />
                <PiuEmAlta
                    ArquivoImagem="/imagens/neymar gordo.jpg/"
                    TextoDoEmAlta="Neymar sofre sua centécima lesão e perde o jogo que concretiza o rebaixamento do Santos"
                    TítuloDoEmAlta="Santos rebaixado"
                />
                <PiuEmAlta
                    ArquivoImagem="/imagens/gat.jpg/"
                    TextoDoEmAlta="GTA VI é adiado e Davi Jones já prepara uma baita fez para sua mãe para jogar o jogo em paz"
                    TítuloDoEmAlta="ADIADO"
                />
            </S.PiusemAlta>
        </S.Tudo>
    );
};
export default ExampleTemplate;
