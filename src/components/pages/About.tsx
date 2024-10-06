export default function About() {
  return (
    <>
      <header className='bg-slate-400 shadow-sm '>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-slate-800'>
            Sobre o projeto
          </h1>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-full grid grid-cols-1 gap-4'>
          <div className='text-slate-700'>
            <div className='flex'>
              <div className='flex-grow'>
                <h1 className='text-lg font-bold pb-2'>
                  Como nasceu a ideia deste recurso?
                </h1>
                <p>
                  Esta prova de conceito nasceu de um desafio proposto pelo
                  professor{" "}
                  <a
                    href='http://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=625913AC1701CA8A77CA3DFDAD1CC065.buscatextual_0'
                    target='blank'
                    className='font-bold italic'
                  >
                    {" "}
                    Abdias José da Silva Filho
                  </a>{" "}
                  , na disciplina{" "}
                  <span className='italic'>
                    disciplina PRÁTICAS INTEGRATIVAS NO ENSINO DE FÍSICA IV -
                    EGE
                  </span>
                  . Ele nos incentivou a criar um recurso que pudesse auxiliar
                  no ensino de conceitos relacionados à Física Ambiental.
                </p>
                <h1 className='text-lg font-bold pt-2 pb-2'>Objetivo</h1>
                <ol className='pl-4'>
                  <li className='list-disc'>
                    Construção de um instrumento para o cálculo do impacto da
                    reciclagem de resíduos sólidos sobre o ambiente.
                  </li>
                  <li className='list-disc'>
                    Desenvolvemos dinâmicas interativas em que os alunos podem
                    interagir com o recurso e observar como suas ações
                    cotidianas impactam o meio ambiente.
                  </li>
                  <li className='list-disc'>
                    Disponibilizar o recurso online permite uma ampla divulgação
                    sem barreiras geográficas. Além disso, utilizar a plataforma
                    GitHub possibilita que o projeto evolua de maneira
                    colaborativa, oferecendo a oportunidade para que outros
                    contribuam e desenvolvam novos desdobramentos a partir da
                    proposta inicial.
                  </li>
                  <li className='list-disc'>
                    A utilização de dinâmicas lúdicas, como uma “gincana”, é um
                    exemplo de abordagem que facilita a construção dos conceitos
                    de maneira leve e envolvente. No entanto, há diversas outras
                    possibilidades que podem ser exploradas com a plataforma.
                  </li>
                </ol>
                <h1 className='text-lg font-bold pt-2 pb-2'>
                  Sobre o uso recurso
                </h1>
                <p className='pb-2'>
                  A aplicação se propõe a calcular através do quantitativo de
                  itens encontrados pelos alunos o impacto que a reciclagem
                  destes itens proporciona ao meio ambiente e sociedade.
                </p>
                <p className='pt-2 pb-2'>
                  Trazendo como referência o impacto financeiro, em economia
                  elétrica e na emissão do co2 no ambiente.
                </p>
                <p className='pt-2 pb-2'>
                  Sendo uma ferramenta interessante para os professores levar
                  colaborativa onde os professores e outros desenvolvedores
                  poderão colaborar com insights e reports sobre o uso.
                </p>
                <p className='pt-2 pb-2'>
                  Insira a quantidade dos tipos plásticos listados que foram
                  encontrados durante a dinâmica.{" "}
                </p>
                <p className='pt-2 pb-2'>
                  Cada item deste possui um peso diferente cadastrado no
                  sistema, com base nele calculamos o valor do montante total.{" "}
                </p>
                <p className='pt-2 pb-2'>
                  Para calcularmos o valor (R$) economizado seguimos a seguinte
                  fórmula.
                </p>
                <p className='pt-2 pb-2'>
                  <b>
                    ((preçoBarrilDePetroleo * kgTotalColetado) /
                    kgEquivalenteaUmBarrilDePetroleo) * porcentagemDareciclagem
                  </b>
                </p>
                <p className='pt-2 pb-2'>
                  Para o futuro, a ideia é calcular de acordo com o tipo de
                  material utilizado para produção
                </p>
                <p className='pt-2 pb-2'>
                  Durante a pesquisa, observou-se que o custo de produção de
                  cada material envolve várias variáveis, tornando a análise
                  inviável neste momento. Isso se deve à necessidade de focar em
                  uma região específica e à existência de métodos de produção
                  que, muitas vezes, são segredos industriais. Diante dessa
                  limitação, optei por usar o barril de petróleo como referência
                  para as estimativas.
                </p>
                <p className='pt-2 pb-2'>
                  Para calcular a economia energética, utilizei o valor da
                  economia financeira, considerando o preço do kWh em
                  Pernambuco. Com isso, chegamos ao valor da energia
                  economizada. À medida que os dados são preenchidos, o sistema
                  demonstra o impacto da energia economizada, mostrando como ela
                  poderia ser usada em outros contextos, como acender uma
                  lâmpada ou abastecer uma cidade.
                </p>
                <h1 className='text-lg font-bold pt-2 pb-2'>
                  Conceitos da física
                </h1>
                <p className='pt-2 pb-2'>
                  O conceito de energia economizada é relacionado com a primeira
                  lei da termodinâmica (conservação de energia). A reciclagem
                  economiza energia que, de outra forma, seria gasta na extração
                  e produção de novos materiais.
                </p>

                <p className='pt-2 pb-2'>
                  O cálculo do tempo de operação dos aparelhos com base na
                  energia economizada pode ilustrar o conceito de potência
                  elétrica (P = E / t), conectando com a eficiência de
                  eletrodomésticos e a conversão de energia.
                </p>

                <h1 className='text-lg font-bold pt-2 pb-2'>REFERÊNCIAS</h1>
                <p className='pt-2 pb-2'>
                  WWF-Brasil. A reciclagem do plástico economiza até 80% de
                  energia e cerca de 1 tonelada de petróleo. Disponível{" "}
                  <a
                    href='https://www.wwf.org.br/?14001/#:~:text=A%20reciclagem%20do%20pl%C3%A1stico%20economiza,de%201%20tonelada%20de%20petr%C3%B3leo.'
                    className='font-bold'
                    target='blank'
                  >
                    aqui
                  </a>
                  Acesso em: 04 out. 2024.
                </p>
                <p className='pt-2 pb-2'>
                  MELHOR C MBIO. O valor do barril de petróleo hoje. Disponível
                  <a
                    href='https://www.melhorcambio.com/petroleo-hoje#:~:text=O%20valor%20do%20barril%20de,em%20R%24%20426%2C33'
                    className='font-bold'
                    target='blank'
                  >
                    aqui
                  </a>
                  . Acesso em: 04 out. 2024.
                </p>
                <p className='pt-2 pb-2'>
                  LABEEE – Laboratório de Eficiência Energética em Edificações.
                  Consumo energético de chuveiros. Disponível{" "}
                  <a
                    href='https://labeee.ufsc.br/pt-br/node/480#:~:text=Observou%2Dse%20que%20o%20consumo,3%20kWh%2Fm%C3%AAs%20no%20inverno'
                    className='font-bold'
                    target='blank'
                  >
                    aqui
                  </a>
                  . Acesso em: 04 out. 2024.
                </p>
                <p className='pt-2 pb-2'>
                  neoenergiapernambuco - Disponível{" "}
                  <a
                    href='https://servicos.neoenergiapernambuco.com.br/residencial-rural/Documents/01_NEOENERGIA%20PERNAMBUCO_TARIFAS%20DE%20ENERGIA%20EL%C3%89TRICA%20GRUPO%20B%20_MAIO_2023_REH_N%C2%BA%203.195.pdf'
                    className='font-bold'
                    target='blank'
                  >
                    aqui
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
