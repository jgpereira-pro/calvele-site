// Hamburgers Images
import imgCostelaco from "../assets/costelaco.webp";
import imgAustraliano from "../assets/australiano.webp";
import imgCalvele from "../assets/calvele.webp";
import imgDa_Juju from "../assets/da_juju.webp";
import imgDu_Joquinha from "../assets/du_joquinha.webp";
import imgExplosao from "../assets/explosao.webp";
import imgFreitas from "../assets/freitas.webp";
import imgGostosura from "../assets/gostosura.webp";
import imgNacho from "../assets/nacho.webp";
import imgOrgasmo_Da_Penosa from "../assets/orgasmo_da_penosa.webp";
import imgOrgasmo from "../assets/orgasmo.webp";
import imgPenosa_Caramelada from "../assets/penosa_caramelada.webp";
import imgPenosa_Do_Ze from "../assets/penosa_do_ze.webp";
import imgPenosa_Gorgo from "../assets/penosa_gorgo.webp";
import imgPenosa_Sedutora from "../assets/penosa_sedutora.webp";
import imgSeducao from "../assets/seducao.webp";

// Entradas Images
import imgAlmofadas_De_Queijo_Gouda from "../assets/almofadas_de_queijo_gouda.webp";
import imgBatata_Frita from "../assets/batata_frita.webp";
import imgBatata_Moda_Calvele from "../assets/batata_moda_calvele.webp";
import imgSupreme_De_Frango from "../assets/supreme_de_frango.webp";

// Molhos Images
import imgMaionese_Especial_Calvele from "../assets/maionese_especial_calvele.webp";
import imgMaionese_Trufada from "../assets/maionese_trufada.webp";
import imgMolho_Agridoce_Calvele from "../assets/molho_agridoce_calvele.webp";
import imgBacannaiser from "../assets/bacannaiser.webp";

// Bebidas Images
import imgCerveja_Extra_Corona from "../assets/cerveja_extra_corona.webp";
import imgCerveja_Heineken from "../assets/cerveja_heineken.webp";
import imgCha_Matte_Leao from "../assets/cha_matte_leao.webp";
import imgCha_Matte_Limao_Leao from "../assets/cha_matte_limao_leao.webp";
import imgCoca_Cola from "../assets/coca_cola.webp";
import imgCoca_Cola_Sem_Acucar from "../assets/coca_cola_sem_acucar.webp";
import imgGuarana_Antartica from "../assets/refrigerante_guarana_antartica.webp";
import imgGuarana_Antartica_Sem_Acucar from "../assets/refrigerante_guarana_sem_acucar_antartica.webp";
import imgSuco_Nectar_Del_Valle_Uva from "../assets/suco_nectar_del_valle_uva.webp";

// Links
const IFOOD_LINK = "https://www.ifood.com.br/delivery/rio-de-janeiro-rj/calvele-burguer-jardim-guanabara/f34f5af4-e095-42dc-849c-0b5ff080b44f?utm_source=orderfood";
const LINK_99 = "#";

export const CATEGORIAS = [
    {
        id: "novidades",
        menuLabel: "Novidades",
        titulo: "Apaixone-se por essa novidade",
        itens: [
            {
                titulo: "Costelaco Trufado",
                descricao: "Pão australiano, 150g de carne suculenta, queijo prato, cobertos com costela bovina desfiada, maionese trufada e cebola roxa. ( Bruto, Macio e Inesquecível)",
                preco: "R$ 49,90",
                imagem: imgCostelaco,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            }
        ]
    },
    {
        id: "entradas",
        menuLabel: "Entradas",
        titulo: "Nossas Entradas",
        itens: [
            {
                titulo: "Almofadas de Queijo Gouda",
                descricao: "12 unidades do delicioso aperitivo crocante com recheio cremoso de Queijo Gouda, acompanhado com nosso molho agridoce com um toque de pimenta e alho.",
                preco: "R$ 36,90",
                imagem: imgAlmofadas_De_Queijo_Gouda,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Batata Moda Calvele",
                descricao: "320gr de batata ondulada, nosso queijo cheddar, cebolinha e farofa de bacon",
                preco: "R$ 38,90",
                imagem: imgBatata_Moda_Calvele,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Supreme de frango",
                descricao: "12 unidades de suculentos supremes de frango, acompanhados do nosso molho agridoce ou mostarda com mel.",
                preco: "R$ 29,90",
                imagem: imgSupreme_De_Frango,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Batata Frita",
                descricao: "200gr de fritas onduladas",
                preco: "R$ 17,90",
                imagem: imgBatata_Frita,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
        ]
    },
    {
        id: "penosas",
        menuLabel: "Penosas",
        titulo: "A Família Penosa Aumentou!",
        itens: [
            {
                titulo: "Penosa do Zé",
                descricao: "Pão brioche, delicioso empanado de frango, queijo prato, alface, tomate, cebola roxa e nosso molho calvele.",
                preco: "R$ 37,90",
                imagem: imgPenosa_Do_Ze,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Orgasmo da Penosa",
                descricao: "Pão prime, delicioso empanado de frango, cream cheese, geleia de pimenta e raspas de limão.",
                preco: "R$ 41,00",
                imagem: imgOrgasmo_Da_Penosa,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Penosa Caramelada",
                descricao: "Pão australiano, delicioso empanado de frango, mix de queijo cheddar e a nossa cebola caramelizada.",
                preco: "R$ 39,90",
                imagem: imgPenosa_Caramelada,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Penosa Sedutora",
                descricao: "Pão brioche, delicioso empanado de frango, queijo cheddar, picles e bacon.",
                preco: "R$ 39,90",
                imagem: imgPenosa_Sedutora,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Penosa Gorgo",
                descricao: "Pão prime, delicioso empanado de frango, queijo gorgonzola, geleia de damasco e rúculas.",
                preco: "R$ 41,00",
                imagem: imgPenosa_Gorgo,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            }
        ]
    },
    {
        id: "mais-vendidos",
        menuLabel: "Favoritos",
        titulo: "Mais Vendidos",
        itens: [
            {
                titulo: "Calvele",
                descricao: "Pão prime com gergelin, duplo smach de 80gr, queijo cheddar, tomate seco e fatias bacon crocante.",
                preco: "R$ 42,90",
                imagem: imgCalvele,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Nacho´s",
                descricao: "Pão gergelim, 150gr de carne, creme cheddar, deliciosos Nacho´s e farofa de bacon.",
                preco: "R$ 39,90",
                imagem: imgNacho,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Orgasmo",
                descricao: "Pão prime com gergelin, 150gr de carne, cream cheese, geleia de pimenta e raspas de limão.",
                preco: "R$ 43,90",
                imagem: imgOrgasmo,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Explosão",
                descricao: "Pão prime, 150gr de carne, queijo gorgonzola, geleia de damasco e rúculas.",
                preco: "R$ 43,90",
                imagem: imgExplosao,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Freitas",
                descricao: "Pão, 150gr de carne, nosso molho pesto (manjericão, nozes, queijo parmesão e azeite) e tomate seco.",
                preco: "R$ 43,90",
                imagem: imgFreitas,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            }
        ]
    },
    {
        id: "hamburgers-calvele",
        menuLabel: "Classicos",
        titulo: "Hambúrgueres Calvele",
        itens: [
            {
                titulo: "Sedução",
                descricao: "Pão, 150gr de carne, nosso molho pesto (manjericão, nozes, queijo parmesão e azeite) e tomate seco.",
                preco: "R$ 43,90",
                imagem: imgSeducao,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Gostosura",
                descricao: "Pão brioche, 150gr de carne, queijo prato, alface, tomate, anéis de cebola roxa e molho Calvele.",
                preco: "R$ 39,90",
                imagem: imgGostosura,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Australiano",
                descricao: "Pão australiano, 150gr de carne, mix de cheddar e cebola caramelizada artesanal.",
                preco: "R$ 41,90",
                imagem: imgAustraliano,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Dá Jujú",
                descricao: "Pão brioche, 150gr de carne e queijo cheddar.",
                preco: "R$ 31,90",
                imagem: imgDa_Juju,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Dú Joquinha",
                descricao: "Pão brioche e 150gr de carne.",
                preco: "R$ 22,90",
                imagem: imgDu_Joquinha,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            }
        ]
    },
    {
        id: "molhos",
        menuLabel: "Molhos",
        titulo: "Molhos Extras",
        itens: [
            {
                titulo: "Maionese Trufada",
                descricao: "Maionese Trufada 30ml",
                preco: "R$ 5,00",
                imagem: imgMaionese_Trufada,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Baconnaise",
                descricao: "Maionese Calvele com bacon 30ml.",
                preco: "R$ 5,00",
                imagem: imgBacannaiser,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Molho Agridoce Calvele",
                descricao: "Molho adocicado com um toque de pimenta e alho 30ml.",
                preco: "R$ 5,00",
                imagem: imgMolho_Agridoce_Calvele,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Maionese Especial Calvele",
                descricao: "Maionese da casa temperada 30ml.",
                preco: "R$ 5,00",
                imagem: imgMaionese_Especial_Calvele,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            }
        ]
    },
    {
        id: "bebidas",
        menuLabel: "Bebidas",
        titulo: "Bebidas Geladas",
        itens: [
            {
                titulo: "Coca-Cola Original 350ml",
                descricao: "Lata 350ml",
                preco: "R$ 8,00",
                imagem: imgCoca_Cola,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Coca-Cola sem Açúcar 350ml",
                descricao: "Lata 350ml",
                preco: "R$ 8,00",
                imagem: imgCoca_Cola_Sem_Acucar,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Refrigerante Guaraná Antarctica 350ml",
                descricao: "Lata 350ml",
                preco: "R$ 8,00",
                imagem: imgGuarana_Antartica,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Refrigerante Guaraná Antarctica sem Açúcar 350ml",
                descricao: "Lata 350ml",
                preco: "R$ 8,00",
                imagem: imgGuarana_Antartica_Sem_Acucar,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Chá Matte Leão Limão 300ml",
                descricao: "Garrafa 300ml",
                preco: "R$ 8,00",
                imagem: imgCha_Matte_Limao_Leao,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Chá Matte Leão 300ml",
                descricao: "Garrafa 300ml",
                preco: "R$ 8,00",
                imagem: imgCha_Matte_Leao,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Suco Néctar Del Valle Uva 290ml",
                descricao: "Lata 290ml",
                preco: "R$ 8,50",
                imagem: imgSuco_Nectar_Del_Valle_Uva,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Cerveja Extra Corona 330ml",
                descricao: "Produto para maiores de 18 anos",
                preco: "R$ 12,50",
                imagem: imgCerveja_Extra_Corona,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            },
            {
                titulo: "Cerveja Heineken Gelada 330ml",
                descricao: "Produto para maiores de 18 anos",
                preco: "R$ 12,50",
                imagem: imgCerveja_Heineken,
                linkIfood: IFOOD_LINK,
                link99: LINK_99
            }
        ]
    }
]
