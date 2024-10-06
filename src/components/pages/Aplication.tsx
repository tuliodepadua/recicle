export default function Aplication() {
  return (
    <>
      <header className='bg-slate-400 shadow-sm '>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-slate-800'>
            Dinâmica
          </h1>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-full grid grid-cols-1 gap-4'>
          <div className='text-slate-700'>
            <div className='flex'>
              <div className='flex-grow'>
                <h1 className='text-lg font-bold pb-2'>
                  Que tal propor uma gincana para seus alunos ?
                </h1>
                <h2 className='text-base font-bold'>Objetivo:</h2>
                <p className='text-base  pt-1 pb-1'>
                  Promover a conscientização sobre o impacto da reciclagem no
                  meio ambiente, estimulando os alunos a aplicar conceitos de
                  sustentabilidade de forma prática e interativa, utilizando a
                  aplicação desenvolvida.
                </p>
                <h2 className='text-base font-bold  pt-1 pb-1'>
                  Participantes:
                </h2>
                <p className='text-base  pt-1 pb-1'>
                  Grupos de alunos (pode ser individual ou em equipes de 3 a 5
                  pessoas).
                </p>
                <p className='text-base pt-1 pb-1'>
                  Cada grupo utilizará a aplicação online para simular suas
                  decisões sobre a reciclagem de resíduos.
                </p>
                <h2 className='text-base font-bold  pt-1 pb-1'>
                  Etapas da Gincana:
                </h2>
                <ol className='pl-4'>
                  <li className='list-disc'>Divida a turma em grupos</li>
                  <li className='list-disc'>
                    Peça para que eles coletem / contabilizem os resíduos
                    plásticos na região em que moram e aos arredores da escola.
                  </li>
                  <li className='list-disc'>
                    Com estes dados em mãos, solicite que acessem pelo telefone
                    ou pelo computador este{" "}
                    <a
                      href='https://tuliodepadua.github.io/recicle/'
                      className='font-bold'
                      target='blank'
                    >
                      link
                    </a>
                    .
                  </li>
                  <li className='list-disc'>Lancem os valores no site</li>
                  <li className='list-disc'>
                    Apresentem o resultado para a turma.
                  </li>
                  <li className='list-disc'>
                    Com o valor economizado (kWh), calcule com os alunos outros
                    exemplos de aplicação.
                  </li>
                  <li className='list-disc'>
                    Caso seja possível, colabore com o repositório, trazendo
                    sugestões ou contribuições.{" "}
                    <a
                      href='https://github.com/tuliodepadua/recicle/issues'
                      className='font-bold'
                      target='blank'
                    >
                      link
                    </a>
                  </li>
                </ol>
                <h2 className='text-base font-bold  pt-1 pb-1'>
                  Relatório Final:
                </h2>
                <p className='text-base pt-1 pb-1'>
                  No final da gincana, cada equipe deverá gerar um relatório de
                  impacto ambiental, usando a aplicação para documentar os
                  ganhos obtidos pela reciclagem, explicando suas escolhas e
                  estratégias. Esse relatório deve destacar:
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
