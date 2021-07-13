import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSidebar({ githubUser }) {
  return (
    <Box >
      <img src={`https://github.com/${githubUser}.png`} />
    </Box>
  );
}

export default function Home() {
  const githubUser = 'badaroz';
  const pessoasFovoritas = ['juunegreiros', 'peas', 'omariosouto', 'rafaballerini', 'felipefialho']
  return (<>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={githubUser} />
      </div>
      <div style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title"> Bem vindo(a)</h1>
          <OrkutNostalgicIconSet />
        </Box>
      </div>
      <div style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFovoritas.length})
          </h2>
          <ul>
            {pessoasFovoritas.map(pessoa =>
              <li key={pessoa}>
                <a href={`/users/${pessoa}`} >
                  <img src={`https://github.com/${pessoa}.png`} />
                  <span>{pessoa}</span>
                </a>
              </li>
            )}
          </ul>

        </ProfileRelationsBoxWrapper>
        <Box>
          Comunidade
        </Box>
      </div>
    </MainGrid>
  </>
  )
}
