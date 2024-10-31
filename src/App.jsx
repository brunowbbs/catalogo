/* eslint-disable react/jsx-key */
import "./index.css";

let PRODUTOS = [
  {
    id: 1,
    name: "Controle Joystick Xbox Shock Blue",
    original_price: 449,
    discounted_price: 399,
    img: "https://i.ibb.co/DWSptSR/image-removebg-preview-3.png",
    category: "jogos",
    items: [
      "Possui Bluetooth",
      "Controle sem fio",
      "Compatível com: Xbox Series X",
      "Com sistema de vibração incorporado",
      "Diversão garantida com o seu controle da Xbox",
      "Design ergonômico.",
    ],
    imgs: [
      "https://i.ibb.co/V3hzMnc/image-removebg-preview.png",
      "https://ibb.co/4FNKvwW",
      "https://ibb.co/0Dr4Dk1",
    ],
    description:
      "Este controle combina funções revolucionárias, preservando precisão, conforto e exatidão em cada movimento. Graças à sua ergonomia especialmente projetada para a posição da sua mão, você pode passar horas jogando com total conforto. Permite que você jogue sem a necessidade de cabos no meio. Ele é projetado não só para controlar melhor seus videogames, mas também para aumentar seu realismo e experiência. Possui uma conexão Bluetooth de alta tecnologia para uso em qualquer computador ou dispositivo; você não precisará mais de aplicativos de terceiros ou cabo USB. Além disso, possui uma grande capacidade anti-interferência, fácil manuseio e sinal de conexão estável.",
  },
  {
    id: 2,
    name: "Caixa De Som Charge 5 Azul JBL",
    original_price: 949,
    discounted_price: 399,
    img: "https://i.ibb.co/s2gbKf0/image-removebg-preview-4.png",
    category: "eletronicos",
    items: [
      "Bluetooth 5.1 para conexão sem fio",
      "Resistência à água IP67",
      "Bateria de longa duração (até 20 horas)",
      "Som potente com graves profundos",
      "Design compacto e portátil",
      "Funciona com assistentes de voz.",
    ],
    imgs: [
      "https://i.ibb.co/vczVyC1/image-removebg-preview-2.png",
      "https://i.ibb.co/V3hzMnc/image-removebg-preview.png",
      "https://i.ibb.co/8K9vKJG/image-removebg-preview-1.png",
    ],
    description:
      "A Caixa De Som Charge 5 Azul JBL é perfeita para quem deseja qualidade de áudio em qualquer lugar. Com conexão Bluetooth 5.1, você pode conectar seu smartphone ou tablet facilmente. A resistência à água IP67 garante que você possa usá-la na praia ou na piscina sem preocupações. Com uma bateria que dura até 20 horas, você poderá aproveitar suas músicas favoritas o dia todo. O design compacto e portátil torna fácil levá-la para qualquer lugar, enquanto os graves profundos oferecem uma experiência sonora incrível.",
  },
  {
    id: 3,
    name: "Apple iPhone 15 (256 GB) - Azul",
    original_price: 6999,
    discounted_price: 6499,
    img: "https://i.ibb.co/wrqkQxN/image-removebg-preview-7.png",
    category: "eletronicos",
    items: [
      "Display Super Retina XDR de 6,1 polegadas",
      "Processador A16 Bionic para desempenho rápido",
      "Câmera dupla de 48 MP com Modo Noite",
      "Capacidade de 256 GB para armazenamento amplo",
      "Compatível com 5G para internet ultra-rápida",
      "Sistema iOS 17 com recursos avançados.",
    ],
    imgs: [
      "https://i.ibb.co/rv4JGNF/image-removebg-preview-10.png",
      "https://i.ibb.co/d5qXbRB/image-removebg-preview-8.png",
      "https://i.ibb.co/wrqkQxN/image-removebg-preview-7.png",
    ],
    description:
      "O Apple iPhone 15 (256 GB) - Azul oferece uma experiência móvel incomparável com seu display Super Retina XDR de 6,1 polegadas e processador A16 Bionic, garantindo desempenho ágil e eficiente. A câmera dupla de 48 MP com Modo Noite permite capturar fotos impressionantes, mesmo em ambientes com pouca luz. Com 256 GB de armazenamento, você terá espaço suficiente para seus aplicativos, fotos e vídeos. Além disso, a compatibilidade com 5G assegura que você esteja sempre conectado à internet de alta velocidade. O sistema iOS 17 traz uma interface intuitiva e novos recursos que facilitam o uso do seu smartphone.",
  },
  {
    id: 4,
    name: "Roma Boneco Stitch Coleção Amor",
    original_price: 129.9,
    discounted_price: 99.9,
    img: "https://i.ibb.co/XLbKV34/image-removebg-preview-11.png",
    category: "brinquedos",
    items: [
      "Boneco de pelúcia macio e aconchegante",
      "Altura de 30 cm, ideal para abraços",
      "Design exclusivo da coleção Amor",
      "Perfeito para presentear amantes de Stitch",
      "Material seguro e durável",
      "Lavável em máquina.",
    ],
    imgs: [
      "https://i.ibb.co/XLbKV34/image-removebg-preview-11.png",
      "https://i.ibb.co/k2b1Vjn/image-removebg-preview-12.png",
      "https://i.ibb.co/v45XWLc/image-removebg-preview-13.png",
    ],
    description:
      "O Roma Boneco Stitch Coleção Amor é a companhia perfeita para quem ama a adorável criatura azul da Disney. Com 30 cm de altura, este boneco de pelúcia é macio e aconchegante, ideal para abraços e momentos de carinho. Seu design exclusivo da coleção Amor torna-o um presente especial para amigos e familiares. Feito de material seguro e durável, é fácil de cuidar e pode ser lavado na máquina, garantindo que fique sempre limpo e pronto para a diversão.",
  },
  {
    id: 5,
    name: "Jogo De Cartas Uno Super Mario Bros Mattel Original",
    original_price: 79.9,
    discounted_price: 59.9,
    img: "https://i.ibb.co/Ld0Bxr5/image-removebg-preview-14.png",
    category: "jogos",
    items: [
      "Versão temática do clássico Uno com personagens de Super Mario",
      "Inclui cartas especiais e efeitos únicos",
      "Ideal para 2 a 10 jogadores",
      "Aumenta a diversão em família e entre amigos",
      "Regras fáceis de aprender",
      "Ótimo para crianças e adultos.",
    ],
    imgs: [
      "https://i.ibb.co/MkFZ9GB/image-removebg-preview-15.png",
      "https://i.ibb.co/YjZRB1J/image-removebg-preview-16.png",
      "https://i.ibb.co/Ld0Bxr5/image-removebg-preview-14.png",
    ],
    description:
      "O Jogo De Cartas Uno Super Mario Bros Mattel Original traz uma nova e divertida perspectiva ao clássico jogo de cartas Uno. Com personagens icônicos do universo Super Mario, cada carta apresenta efeitos especiais que tornam o jogo ainda mais emocionante. É perfeito para 2 a 10 jogadores e proporciona horas de diversão em família ou entre amigos. As regras são simples e fáceis de aprender, tornando este jogo uma ótima escolha tanto para crianças quanto para adultos que desejam se divertir juntos.",
  },
  {
    id: 6,
    name: "Alexa Echo 5 Geração Cor Azul-marinho",
    original_price: 699.9,
    discounted_price: 499.9,
    img: "https://i.ibb.co/2SP6k2j/image-removebg-preview-17.png",
    category: "eletronicos",
    items: [
      "Tela de 5,5 polegadas com resolução HD",
      "Controle de dispositivos de casa inteligente",
      "Assistente de voz Alexa integrado",
      "Conexão Wi-Fi e Bluetooth",
      "Reprodução de música e vídeos",
      "Função de relógio e despertador.",
    ],
    imgs: [
      "https://i.ibb.co/2SP6k2j/image-removebg-preview-17.png",
      "https://i.ibb.co/wymWxV0/image-removebg-preview-18.png",
      "https://i.ibb.co/wymWxV0/image-removebg-preview-18.png",
    ],
    description:
      "O Alexa Echo 5 Geração Cor Azul-marinho é um dispositivo inteligente que combina tecnologia e estilo. Com uma tela de 5,5 polegadas em resolução HD, ele permite fácil visualização de conteúdos, como vídeos e receitas. O assistente de voz Alexa facilita o controle de dispositivos de casa inteligente, a reprodução de música e o acesso a informações em tempo real. Além de funcionar como um despertador e relógio, ele se integra perfeitamente ao seu dia a dia, tornando sua casa mais inteligente e conectada.",
  },
  {
    id: 7,
    name: "Câmera instantânea Fujifilm Instax Mini 12 azul",
    original_price: 599.9,
    discounted_price: 449.9,
    img: "https://i.ibb.co/BLyfgH0/image-removebg-preview-19.png",
    category: "eletronicos",
    items: [
      "Design leve e portátil",
      "Imagens instantâneas em formato credit card",
      "Lente com abertura de f/12.7 para fotos nítidas",
      "Modo de exposição automática para melhores resultados",
      "Flash embutido para uso em ambientes com pouca luz",
      "Compatível com filmes Instax Mini.",
    ],
    imgs: [
      "https://i.ibb.co/BLyfgH0/image-removebg-preview-19.png",
      "https://i.ibb.co/931b8K6/image-removebg-preview-20.png",
      "https://i.ibb.co/GHpvPmG/image-removebg-preview-21.png",
    ],
    description:
      "A Câmera instantânea Fujifilm Instax Mini 12 azul é perfeita para capturar momentos especiais de forma divertida e rápida. Com seu design leve e portátil, você pode levá-la para qualquer lugar. A câmera produz imagens instantâneas em um formato prático, similar ao de um cartão de crédito, tornando-as fáceis de compartilhar e exibir. Com uma lente de abertura de f/12.7 e um modo de exposição automática, ela garante fotos nítidas e vibrantes em diferentes condições de iluminação. O flash embutido ajuda a registrar momentos mesmo em ambientes com pouca luz, e a compatibilidade com filmes Instax Mini oferece várias opções para personalizar suas impressões.",
  },
  {
    id: 8,
    name: "Controle Joystick Xbox Shock Blue",
    original_price: 449,
    discounted_price: 399,
    img: "https://i.ibb.co/DWSptSR/image-removebg-preview-3.png",
    category: "jogos",
    items: [
      "Possui Bluetooth",
      "Controle sem fio",
      "Compatível com: Xbox Series X",
      "Com sistema de vibração incorporado",
      "Diversão garantida com o seu controle da Xbox",
      "Design ergonômico.",
    ],
    imgs: [
      "https://i.ibb.co/V3hzMnc/image-removebg-preview.png",
      "https://ibb.co/4FNKvwW",
      "https://ibb.co/0Dr4Dk1",
    ],
    description:
      "Este controle combina funções revolucionárias, preservando precisão, conforto e exatidão em cada movimento. Graças à sua ergonomia especialmente projetada para a posição da sua mão, você pode passar horas jogando com total conforto. Permite que você jogue sem a necessidade de cabos no meio. Ele é projetado não só para controlar melhor seus videogames, mas também para aumentar seu realismo e experiência. Possui uma conexão Bluetooth de alta tecnologia para uso em qualquer computador ou dispositivo; você não precisará mais de aplicativos de terceiros ou cabo USB. Além disso, possui uma grande capacidade anti-interferência, fácil manuseio e sinal de conexão estável.",
  },
  {
    id: 9,
    name: "Caixa De Som Charge 5 Azul JBL",
    original_price: 949,
    discounted_price: 399,
    img: "https://i.ibb.co/s2gbKf0/image-removebg-preview-4.png",
    category: "eletronicos",
    items: [
      "Bluetooth 5.1 para conexão sem fio",
      "Resistência à água IP67",
      "Bateria de longa duração (até 20 horas)",
      "Som potente com graves profundos",
      "Design compacto e portátil",
      "Funciona com assistentes de voz.",
    ],
    imgs: [
      "https://i.ibb.co/vczVyC1/image-removebg-preview-2.png",
      "https://i.ibb.co/V3hzMnc/image-removebg-preview.png",
      "https://i.ibb.co/8K9vKJG/image-removebg-preview-1.png",
    ],
    description:
      "A Caixa De Som Charge 5 Azul JBL é perfeita para quem deseja qualidade de áudio em qualquer lugar. Com conexão Bluetooth 5.1, você pode conectar seu smartphone ou tablet facilmente. A resistência à água IP67 garante que você possa usá-la na praia ou na piscina sem preocupações. Com uma bateria que dura até 20 horas, você poderá aproveitar suas músicas favoritas o dia todo. O design compacto e portátil torna fácil levá-la para qualquer lugar, enquanto os graves profundos oferecem uma experiência sonora incrível.",
  },
  {
    id: 10,
    name: "Apple iPhone 15 (256 GB) - Azul",
    original_price: 6999,
    discounted_price: 6499,
    img: "https://i.ibb.co/wrqkQxN/image-removebg-preview-7.png",
    category: "eletronicos",
    items: [
      "Display Super Retina XDR de 6,1 polegadas",
      "Processador A16 Bionic para desempenho rápido",
      "Câmera dupla de 48 MP com Modo Noite",
      "Capacidade de 256 GB para armazenamento amplo",
      "Compatível com 5G para internet ultra-rápida",
      "Sistema iOS 17 com recursos avançados.",
    ],
    imgs: [
      "https://i.ibb.co/rv4JGNF/image-removebg-preview-10.png",
      "https://i.ibb.co/d5qXbRB/image-removebg-preview-8.png",
      "https://i.ibb.co/wrqkQxN/image-removebg-preview-7.png",
    ],
    description:
      "O Apple iPhone 15 (256 GB) - Azul oferece uma experiência móvel incomparável com seu display Super Retina XDR de 6,1 polegadas e processador A16 Bionic, garantindo desempenho ágil e eficiente. A câmera dupla de 48 MP com Modo Noite permite capturar fotos impressionantes, mesmo em ambientes com pouca luz. Com 256 GB de armazenamento, você terá espaço suficiente para seus aplicativos, fotos e vídeos. Além disso, a compatibilidade com 5G assegura que você esteja sempre conectado à internet de alta velocidade. O sistema iOS 17 traz uma interface intuitiva e novos recursos que facilitam o uso do seu smartphone.",
  },
  {
    id: 11,
    name: "Roma Boneco Stitch Coleção Amor",
    original_price: 129.9,
    discounted_price: 99.9,
    img: "https://i.ibb.co/XLbKV34/image-removebg-preview-11.png",
    category: "brinquedos",
    items: [
      "Boneco de pelúcia macio e aconchegante",
      "Altura de 30 cm, ideal para abraços",
      "Design exclusivo da coleção Amor",
      "Perfeito para presentear amantes de Stitch",
      "Material seguro e durável",
      "Lavável em máquina.",
    ],
    imgs: [
      "https://i.ibb.co/XLbKV34/image-removebg-preview-11.png",
      "https://i.ibb.co/k2b1Vjn/image-removebg-preview-12.png",
      "https://i.ibb.co/v45XWLc/image-removebg-preview-13.png",
    ],
    description:
      "O Roma Boneco Stitch Coleção Amor é a companhia perfeita para quem ama a adorável criatura azul da Disney. Com 30 cm de altura, este boneco de pelúcia é macio e aconchegante, ideal para abraços e momentos de carinho. Seu design exclusivo da coleção Amor torna-o um presente especial para amigos e familiares. Feito de material seguro e durável, é fácil de cuidar e pode ser lavado na máquina, garantindo que fique sempre limpo e pronto para a diversão.",
  },
  {
    id: 12,
    name: "Jogo De Cartas Uno Super Mario Bros Mattel Original",
    original_price: 79.9,
    discounted_price: 59.9,
    img: "https://i.ibb.co/Ld0Bxr5/image-removebg-preview-14.png",
    category: "jogos",
    items: [
      "Versão temática do clássico Uno com personagens de Super Mario",
      "Inclui cartas especiais e efeitos únicos",
      "Ideal para 2 a 10 jogadores",
      "Aumenta a diversão em família e entre amigos",
      "Regras fáceis de aprender",
      "Ótimo para crianças e adultos.",
    ],
    imgs: [
      "https://i.ibb.co/MkFZ9GB/image-removebg-preview-15.png",
      "https://i.ibb.co/YjZRB1J/image-removebg-preview-16.png",
      "https://i.ibb.co/Ld0Bxr5/image-removebg-preview-14.png",
    ],
    description:
      "O Jogo De Cartas Uno Super Mario Bros Mattel Original traz uma nova e divertida perspectiva ao clássico jogo de cartas Uno. Com personagens icônicos do universo Super Mario, cada carta apresenta efeitos especiais que tornam o jogo ainda mais emocionante. É perfeito para 2 a 10 jogadores e proporciona horas de diversão em família ou entre amigos. As regras são simples e fáceis de aprender, tornando este jogo uma ótima escolha tanto para crianças quanto para adultos que desejam se divertir juntos.",
  },
  {
    id: 13,
    name: "Alexa Echo 5 Geração Cor Azul-marinho",
    original_price: 699.9,
    discounted_price: 499.9,
    img: "https://i.ibb.co/2SP6k2j/image-removebg-preview-17.png",
    category: "eletronicos",
    items: [
      "Tela de 5,5 polegadas com resolução HD",
      "Controle de dispositivos de casa inteligente",
      "Assistente de voz Alexa integrado",
      "Conexão Wi-Fi e Bluetooth",
      "Reprodução de música e vídeos",
      "Função de relógio e despertador.",
    ],
    imgs: [
      "https://i.ibb.co/2SP6k2j/image-removebg-preview-17.png",
      "https://i.ibb.co/wymWxV0/image-removebg-preview-18.png",
      "https://i.ibb.co/wymWxV0/image-removebg-preview-18.png",
    ],
    description:
      "O Alexa Echo 5 Geração Cor Azul-marinho é um dispositivo inteligente que combina tecnologia e estilo. Com uma tela de 5,5 polegadas em resolução HD, ele permite fácil visualização de conteúdos, como vídeos e receitas. O assistente de voz Alexa facilita o controle de dispositivos de casa inteligente, a reprodução de música e o acesso a informações em tempo real. Além de funcionar como um despertador e relógio, ele se integra perfeitamente ao seu dia a dia, tornando sua casa mais inteligente e conectada.",
  },
  {
    id: 14,
    name: "Câmera instantânea Fujifilm Instax Mini 12 azul",
    original_price: 599.9,
    discounted_price: 449.9,
    img: "https://i.ibb.co/BLyfgH0/image-removebg-preview-19.png",
    category: "eletronicos",
    items: [
      "Design leve e portátil",
      "Imagens instantâneas em formato credit card",
      "Lente com abertura de f/12.7 para fotos nítidas",
      "Modo de exposição automática para melhores resultados",
      "Flash embutido para uso em ambientes com pouca luz",
      "Compatível com filmes Instax Mini.",
    ],
    imgs: [
      "https://i.ibb.co/BLyfgH0/image-removebg-preview-19.png",
      "https://i.ibb.co/931b8K6/image-removebg-preview-20.png",
      "https://i.ibb.co/GHpvPmG/image-removebg-preview-21.png",
    ],
    description:
      "A Câmera instantânea Fujifilm Instax Mini 12 azul é perfeita para capturar momentos especiais de forma divertida e rápida. Com seu design leve e portátil, você pode levá-la para qualquer lugar. A câmera produz imagens instantâneas em um formato prático, similar ao de um cartão de crédito, tornando-as fáceis de compartilhar e exibir. Com uma lente de abertura de f/12.7 e um modo de exposição automática, ela garante fotos nítidas e vibrantes em diferentes condições de iluminação. O flash embutido ajuda a registrar momentos mesmo em ambientes com pouca luz, e a compatibilidade com filmes Instax Mini oferece várias opções para personalizar suas impressões.",
  },
];

export default function Home() {
  return (
    <div>
      <header className="cabecalho">
        <p className="logo">XPTO</p>
      </header>

      <h1 className="titulo">Produtos</h1>

      <div className="containerCards">
        {PRODUTOS.map((produto) => {
          return (
            <div className="card">
              <img
                className="image"
                src={produto.img}
              />
             
             <div className="containerTexts">
             <p className="nomeProduto">{produto.name}</p>
              <p className="categoriaProduto">{produto.category}</p>

              <p className="precoProduto">
                <span className="precoNormal">R${produto.original_price}</span>
                <span className="precoPromocional">R${produto.discounted_price}</span>
              </p>
            </div>

              <a href={`https://wa.me/5538988485170?text=Olá Tenho interesse no produto ${produto.name}`}>
                <button className="btn">Visualizar</button>
              </a>

            </div>
          );
        })}
      </div>
    </div>
  );
}
