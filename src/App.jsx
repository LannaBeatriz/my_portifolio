import './App.css'
import Lanna from './components/Lanna.jpg'

function App() {
  return (
    <>
      <header className="header">
        <div className="profile-row">
          <img src={Lanna} alt="Foto de Lanna" className="profile-image" />
          <div className="profile-text">
            <h1 className="name">Lanna Beatriz</h1>
            <p className="role">Programadora & Administradora</p>
          </div>
        </div>

        <nav className="navbar">
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#experiencias">Experiências</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      </header>

      <section id="profissional" className="professional fade-in">
        <h2>Área Profissional</h2>
        <div className="info-grid">
          <div>
            <h3>Atuações</h3>
            <ul>
              <li>Desenvolvedora de Sistemas</li>
              <li>Administradora</li>
            </ul>
          </div>
          <div>
            <h3>Especialidades</h3>
            <ul>
              <li>JavaScript, HTML, CSS, Python</li>
              <li>Banco de Dados (SQL, MySQL)</li>
              <li>Gestão de Projetos</li>
              <li>Comunicação e Liderança</li>
            </ul>
          </div>
        </div>
      </section>

      <main className="grid-layout">
        <section id="sobre" className="fade-in">
          <h2>Sobre mim</h2>
          <p>
            Olá, meu nome é Lanna Beatriz. Sou desenvolvedora de sistemas e administradora, com uma sólida formação técnica e ampla experiência em linguagens de programação como JavaScript, HTML, CSS e Python, além de conhecimento em bancos de dados como SQL e MySQL.

            Ao longo da minha trajetória, atuei tanto no desenvolvimento de sistemas web quanto na gestão de projetos e processos administrativos, unindo a lógica da tecnologia com a organização e estratégia do mundo corporativo. Tenho um olhar analítico, foco em resultados e gosto de propor soluções criativas e eficientes para desafios do dia a dia.
          </p>
        </section>

        <section id="experiencias" className="fade-in">
          <h2>Experiências Profissionais</h2>
          <div className="projects-list">
            <div className="project-card">
              <h3>Desenvolvedora Júnior - TechWave Solutions</h3>
              <p><strong>Período:</strong> jan/2023 - dez/2023</p>
              <p>Desenvolvimento de sistemas web usando React, integração com APIs REST e manutenção de sistemas legados.</p>
            </div>
            <div className="project-card">
              <h3>Estágio em Desenvolvimento - CodeStart</h3>
              <p><strong>Período:</strong> mar/2022 - dez/2022</p>
              <p>Auxílio no desenvolvimento de sites institucionais, testes manuais e suporte técnico à equipe.</p>
            </div>
          </div>
        </section>

        <section id="projetos" className="fade-in">
          <h2>Projetos</h2>
          <div className="projects-list">
            <div className="project-card">
              <h3>TaskFlow</h3>
              <p>Aplicativo web para organização de tarefas, com sistema de login, temas claros/escuros e armazenamento em nuvem.</p>
            </div>
            <div className="project-card">
              <h3>Clínica+</h3>
              <p>Sistema de gerenciamento para clínicas de saúde, com agendamento de consultas, prontuários e relatórios financeiros.</p>
            </div>
            <div className="project-card">
              <h3>Clone do Netflix</h3>
              <p>Projeto front-end utilizando React e integração com API de filmes. Interface moderna e responsiva.</p>
            </div>
          </div>
        </section>

        <section id="contato" className="fade-in">
          <h2>Contato</h2>
          <p className="contact">
            Estou sempre aberta a novas oportunidades e colaborações. Se você deseja entrar em contato, sinta-se à vontade para me enviar uma mensagem através dos canais abaixo.
          </p>
          <div>
            Email: <a href="mailto:lanna@example.com">lanna@example.com</a><br />
            GitHub: <a href="https://github.com/lannabeatriz" target="_blank" rel="noopener noreferrer">github.com/lannabeatriz</a><br />
            LinkedIn: <a href="https://linkedin.com/in/lannabeatriz" target="_blank" rel="noopener noreferrer">linkedin.com/in/lannabeatriz</a><br />
            Contato: <a href="https://api.whatsapp.com/send?phone=5519992698271" target="_blank" rel="noopener noreferrer">+55 (19) 99269-8271</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App