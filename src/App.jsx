import React, { useState, useEffect } from 'react';
import './index.css';

// SVG Icons
const HomeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const InterfaceIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>;
const ShieldIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const CodeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const UsersIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const CopyIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>;
const DownloadIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const GitHubIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;

function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [simText, setSimText] = useState('');
  const [simResult, setSimResult] = useState(null);
  const [copiedText, setCopiedText] = useState('');

  // Auto detect active section while scrolling
  useEffect(() => {
    const sections = ['inicio', 'interfaz', 'simulador', 'instalacion', 'equipo'];
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -55% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTab(id);
    }
  };

  // Predefined Mock responses matching the real ones in Django backend
  const respuestasNivel1 = [
    "Lamento mucho que estés pasando por esto. No tienes que cargarlo solo, estoy aquí para escucharte. ¿Qué está haciendo que tu día sea tan difícil?",
    "Gracias por confiarme lo que sientes. Te prometo que no voy a juzgarte. ¿Quieres contarme qué te ha llevado a sentirte así?",
    "Debe ser muy pesado lo que estás viviendo. Podemos ir paso a paso, si te parece. ¿Qué fue lo que pasó hoy?"
  ];

  const respuestasNivel2 = [
    "Eso que sientes es profundamente doloroso, y te agradezco que lo compartas conmigo. Estoy aquí contigo, sin presionarte. ¿Qué pensamiento fue el que te llevó a sentir que no quieres existir?",
    "Entiendo que estás cansado y agotado. No estás solo. Podemos hablar de esto con calma. ¿Qué te ha hecho sentir así últimamente?",
    "Es muy fuerte cargar con pensamientos así. Estoy aquí para acompañarte, de verdad. ¿Qué crees que detonó este momento?"
  ];

  const respuestaNivel3 = 
    `Lamento mucho que estés pasando por un momento tan difícil. Quiero que sepas que no estás solo y que tu vida es valiosa.\n\nSi sientes que podrías hacerte daño a ti mismo, por favor contacta inmediatamente a alguien de confianza o a profesionales de ayuda:\n\n🇨🇴 Líneas de ayuda en Colombia:\n• (604) 540 71 80: Línea Salud para el alma (Medellín)\n• (604) 444 44 48: Línea Amiga Saludable (Medellín, disponible las 24 horas)\n• Línea 123: Emergencias generales\n• 01 8000 112 137: Línea Púrpura\n• WhatsApp: 333 0333588, para recibir apoyo psicológico gratuito\n\nTe recomiendo buscar un lugar seguro y hablar con alguien que pueda escucharte.`;

  const handleSimulate = (textToSimulate) => {
    const text = (textToSimulate || simText).toLowerCase().trim();
    if (!text) return;

    // Patrones reales del backend
    const patronesNivel3 = [
      "me voy a matar", "voy a matarme", "quiero matarme", "quiero suicidarme", 
      "tengo un plan", "hacerme daño ahora", "lo haré hoy", 
      "ya no quiero vivir y voy a hacerlo", "ya tomé una decisión",
      "quitarme la vida", "hacerme daño", "lastimarme"
    ];

    const patronesNivel2 = [
      "quisiera no existir", "quisiera desaparecer", "quisiera no despertarme", 
      "a veces pienso en morir", "ojalá no despertara", "me gustaría dejar de vivir", 
      "pensado en hacerme daño"
    ];

    const patronesNivel1 = [
      "me siento tan mal", "no quiero seguir así", "ya no puedo más", 
      "me siento vacío", "me siento destrozado", "estoy muy triste", 
      "no tengo fuerzas", "quiero rendirme", "quisiera morir", "odio mi vida", "no veo salida"
    ];

    let level = 0;
    let expectedAction = "";
    let responseText = "";

    // Detección
    if (patronesNivel3.some(p => text.includes(p))) {
      level = 3;
      expectedAction = "🔴 ELUSIÓN TOTAL DE IA: Detección de crisis grave. Se bloquea la comunicación con el LLM y se devuelven líneas de emergencia inmediata en Colombia.";
      responseText = respuestaNivel3;
    } else if (patronesNivel2.some(p => text.includes(p))) {
      level = 2;
      expectedAction = "🟡 RESPUESTA DE CONTENCIÓN: Se identifica ideación pasiva de muerte. Se selecciona una respuesta predefinida enfocada en validar y contener la emoción.";
      responseText = respuestasNivel2[Math.floor(Math.random() * respuestasNivel2.length)];
    } else if (patronesNivel1.some(p => text.includes(p))) {
      level = 1;
      expectedAction = "🟢 DOLOR EMOCIONAL LEVE: Identifica expresiones de profunda tristeza o desánimo. Envía una validación empática predefinida y continúa el flujo.";
      responseText = respuestasNivel1[Math.floor(Math.random() * respuestasNivel1.length)];
    } else {
      level = 0;
      expectedAction = "🔵 FLUJO CONVERSACIONAL NORMAL: Se detecta que el usuario no está en crisis. La petición viaja de forma segura al motor Ollama Local (LLaMA3.1) y recupera contexto semántico enriquecido desde MongoDB.";
      responseText = `[OLLAMA MOGI]: Agradezco mucho que me hables de eso. Me alegra acompañarte. Recuerda que puedes contarme lo que desees y estoy aquí para escucharte con toda la calidez y sin ningún tipo de juicio. ¿De qué te gustaría hablar en este momento?`;
    }

    setSimResult({
      input: textToSimulate || simText,
      level,
      expectedAction,
      responseText
    });
  };

  const triggerExample = (exampleText) => {
    setSimText(exampleText);
    handleSimulate(exampleText);
  };

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedText(id);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <div className="manual-app">
      {/* Top Banner */}
      <header className="manual-navbar">
        <div className="nav-brand">
          <div className="brand-logo-container">
            <img src="/images/mogi_logo.png" alt="Mogi Logo" className="brand-logo-img" />
          </div>
          <div>
            <h1>Mogi Assistant</h1>
            <p>Manual Digital de Usuario & Funcionamiento</p>
          </div>
        </div>
        <div className="nav-actions">
          <a href="https://github.com/Skywalk3rcode/mogi_new.git" target="_blank" rel="noreferrer" className="github-nav-btn">
            <GitHubIcon /> GitHub Repo
          </a>
          <a href="/Formato_Proyecto_Ingenieria_de_Software.pdf" download="Formato_Proyecto_Ingenieria_de_Software.pdf" className="download-pdf-nav-btn">
            <DownloadIcon /> Descargar Formato (PDF)
          </a>
        </div>
      </header>

      {/* Main Layout Grid */}
      <div className="manual-layout">
        
        {/* Sidebar Nav */}
        <aside className="manual-sidebar">
          <nav>
            <button className={activeTab === 'inicio' ? 'active' : ''} onClick={() => scrollToSection('inicio')}>
              <HomeIcon /> <span>1. Introducción</span>
            </button>
            <button className={activeTab === 'interfaz' ? 'active' : ''} onClick={() => scrollToSection('interfaz')}>
              <InterfaceIcon /> <span>2. Guía de Interfaz</span>
            </button>
            <button className={activeTab === 'simulador' ? 'active' : ''} onClick={() => scrollToSection('simulador')}>
              <ShieldIcon /> <span>3. Simulador de Crisis</span>
            </button>
            <button className={activeTab === 'instalacion' ? 'active' : ''} onClick={() => scrollToSection('instalacion')}>
              <CodeIcon /> <span>4. Guía de Instalación</span>
            </button>
            <button className={activeTab === 'equipo' ? 'active' : ''} onClick={() => scrollToSection('equipo')}>
              <UsersIcon /> <span>5. Autores y Equipo</span>
            </button>
          </nav>
        </aside>

        {/* Content Display (One scrollable page) */}
        <main className="manual-content scroll-container">
          
          {/* SECTION 1: INICIO */}
          <section id="inicio" className="section-block">
            <h2>1. Introducción y Propósito de Mogi</h2>
            <p className="lead-paragraph">
              <strong>Mogi</strong> es una plataforma de apoyo emocional y escucha activa orientada a ofrecer contención emocional primaria mediante Inteligencia Artificial Local. Su diseño visual y lógico está enfocado en mitigar la ansiedad y brindar un espacio confidencial.
            </p>
            
            <div className="disclaimer-banner">
              <span className="banner-icon">⚠️</span>
              <div>
                <strong>Aviso de Responsabilidad Importante</strong>
                <p>Mogi no es un terapeuta clínico, no brinda diagnósticos clínicos ni reemplaza las consultas profesionales médicas. Es una herramienta de primera ayuda conversacional.</p>
              </div>
            </div>

            <div className="document-download-card">
              <div className="doc-info">
                <h3>Documentación Oficial del Proyecto</h3>
                <p>Descarga la propuesta, especificación de requisitos y diseño de software en formato PDF listo para impresión:</p>
              </div>
              <a href="/Formato_Proyecto_Ingenieria_de_Software.pdf" download="Formato_Proyecto_Ingenieria_de_Software.pdf" className="download-large-btn">
                <DownloadIcon /> Descargar Formato Proyecto (PDF)
              </a>
            </div>

            <h3>Principios de Acompañamiento</h3>
            <div className="features-grid">
              <div className="feature-card">
                <h4>Validación Emocional</h4>
                <p>El modelo local de lenguaje está instruido para priorizar el respeto, la calidez y la validación de las emociones del usuario antes de sugerir guías prácticas.</p>
              </div>
              <div className="feature-card">
                <h4>Privacidad del Usuario</h4>
                <p>Al ejecutarse sobre <strong>Ollama</strong> localmente, las conversaciones nunca son transmitidas a servidores externos, garantizando el secreto y confidencialidad.</p>
              </div>
              <div className="feature-card">
                <h4>Escalabilidad Emocional</h4>
                <p>Mogi detecta si el usuario está en crisis mediante filtros heurísticos, lo que le permite alternar entre empatía guiada o redirigir a líneas de emergencia.</p>
              </div>
            </div>

            <h3>Arquitectura Simplificada del Flujo</h3>
            <p className="section-subtitle">Cómo viaja la información en el sistema:</p>
            <div className="flow-container">
              <div className="flow-node">
                <span className="node-number">1</span>
                <h5>Entrada</h5>
                <p>Usuario escribe/habla</p>
              </div>
              <div className="flow-arrow-dir">→</div>
              <div className="flow-node highlight">
                <span className="node-number">2</span>
                <h5>Filtro de Crisis</h5>
                <p>Regex + LLaMA3 clasifican</p>
              </div>
              <div className="flow-arrow-dir">→</div>
              <div className="flow-node">
                <span className="node-number">3</span>
                <h5>Contexto</h5>
                <p>Embeddings en MongoDB</p>
              </div>
              <div className="flow-arrow-dir">→</div>
              <div className="flow-node success">
                <span className="node-number">4</span>
                <h5>Ollama LLM</h5>
                <p>Respuesta cálida local</p>
              </div>
            </div>
          </section>

          <hr className="section-divider" />

          {/* SECTION 2: INTERFAZ */}
          <section id="interfaz" className="section-block">
            <h2>2. Guía Visual de la Interfaz</h2>
            <p className="lead-paragraph">La interfaz de Mogi está desarrollada en React bajo principios de diseño receptivo y de baja fatiga visual.</p>

            <div className="screenshot-box">
              <img src="/images/mogi_screenshot.png" alt="Mogi Interfaz de Usuario" className="app-img" />
            </div>

            <h3>Componentes e Interacción</h3>
            <div className="components-list">
              <div className="comp-item">
                <span className="comp-tag sidebar-tag">Sidebar Lateral</span>
                <p>Panel izquierdo con opciones para chatear, acceder a configuraciones (modo claro/oscuro y parámetros de voz) o salir de la sesión actual de forma segura.</p>
              </div>
              <div className="comp-item">
                <span className="comp-tag chat-tag">Ventana de Chat</span>
                <p>Zona central donde se muestran las burbujas de diálogo. Cada mensaje enviado por el usuario cuenta con un botón rápido de edición para replantear consultas.</p>
              </div>
              <div className="comp-item">
                <span className="comp-tag voice-tag">Controles de Audio y Voz</span>
                <p>Barra inferior equipada con soporte de audio. Permite reproducir mediante síntesis de voz la última respuesta del chatbot, con botones de reproducción, pausa y detención.</p>
              </div>
            </div>
          </section>

          <hr className="section-divider" />

          {/* SECTION 3: SIMULADOR */}
          <section id="simulador" className="section-block">
            <h2>3. Simulador del Detector de Crisis</h2>
            <p className="lead-paragraph">
              El detector de crisis clasifica las entradas en tiempo real para evitar que la inteligencia artificial simule diagnósticos en situaciones de riesgo vital.
              Prueba el algoritmo escribiendo frases o haciendo clic en los botones rápidos:
            </p>

            <div className="sim-box">
              <div className="sim-form">
                <input 
                  type="text" 
                  placeholder="Escribe algo, ej: 'me siento triste' o 'quiero hacerme daño'"
                  value={simText}
                  onChange={(e) => setSimText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSimulate()}
                />
                <button onClick={() => handleSimulate()} className="sim-btn">Analizar Frase</button>
              </div>

              <div className="sim-examples">
                <span>Pruebas rápidas:</span>
                <button onClick={() => triggerExample('Hola Mogi, cuéntame un cuento.')}>Normal (Lvl 0)</button>
                <button onClick={() => triggerExample('Me siento muy triste y vacío hoy.')}>Dolor Emocional (Lvl 1)</button>
                <button onClick={() => triggerExample('Quisiera desaparecer de este mundo.')}>Riesgo Moderado (Lvl 2)</button>
                <button onClick={() => triggerExample('Me voy a matar, ya tengo la soga lista.')}>Crisis Grave (Lvl 3)</button>
              </div>

              {simResult && (
                <div className={`sim-result-panel level-${simResult.level} fade-in`}>
                  <div className="result-panel-header">
                    <strong>Análisis del Filtro</strong>
                    <span className="lvl-badge">Nivel {simResult.level}</span>
                  </div>
                  <div className="result-panel-body">
                    <div className="result-action">
                      <strong>Comportamiento del Backend:</strong>
                      <p>{simResult.expectedAction}</p>
                    </div>
                    <div className="result-chat">
                      <strong>Respuesta Simulada de Mogi:</strong>
                      <pre className="chat-bubble-sim">{simResult.responseText}</pre>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="sim-note">
              <p><strong>Nota técnica:</strong> En producción, los niveles 1, 2 y 3 devuelven de forma instantánea frases empáticas precargadas y contención sin pasar por el LLM si se detecta ideación directa, asegurando respuestas seguras frente a conductas de autolesión.</p>
            </div>
          </section>

          <hr className="section-divider" />

          {/* SECTION 4: INSTALACION */}
          <section id="instalacion" className="section-block">
            <h2>4. Guía de Instalación del Proyecto</h2>
            <p className="lead-paragraph">Sigue las siguientes instrucciones detalladas para instalar y levantar las dependencias de Mogi de forma local en tu sistema.</p>

            <h3>Requisitos</h3>
            <ul className="list-bullets">
              <li><strong>Python:</strong> Versión 3.10 o superior (Django Backend).</li>
              <li><strong>Node.js:</strong> Versión 18 o superior (React Frontend).</li>
              <li><strong>Ollama:</strong> Servidor de IA local instalado.</li>
              <li><strong>MongoDB:</strong> Base de datos ejecutándose en <code>localhost:27017</code>.</li>
            </ul>

            <div className="code-container-vite">
              <div className="code-header-vite">
                <span>Paso 1: Clonación del Repositorio</span>
                <button onClick={() => handleCopyCode('git clone https://github.com/Skywalk3rcode/mogi_new.git\ncd mogi_new', 'git')}>
                  {copiedText === 'git' ? '¡Copiado!' : <><CopyIcon /> Copiar</>}
                </button>
              </div>
              <pre><code>{`git clone https://github.com/Skywalk3rcode/mogi_new.git
cd mogi_new`}</code></pre>
            </div>

            <div className="code-container-vite">
              <div className="code-header-vite">
                <span>Paso 2: Generar Modelo en Ollama</span>
                <button onClick={() => handleCopyCode('ollama pull llama3.1\ncd mogi_backend/chatbot\nollama create mogi -f Modelfile', 'ollama')}>
                  {copiedText === 'ollama' ? '¡Copiado!' : <><CopyIcon /> Copiar</>}
                </button>
              </div>
              <pre><code>{`ollama pull llama3.1
cd mogi_backend/chatbot
ollama create mogi -f Modelfile`}</code></pre>
            </div>

            <div className="code-container-vite">
              <div className="code-header-vite">
                <span>Paso 3: Levantar Servidor Django (Windows)</span>
                <button onClick={() => handleCopyCode('cd ../\npython -m venv venv\n.\\venv\\Scripts\\activate\npip install -r requirements.txt\n$env:PYTHONIOENCODING="utf-8"\npython manage.py runserver', 'django')}>
                  {copiedText === 'django' ? '¡Copiado!' : <><CopyIcon /> Copiar</>}
                </button>
              </div>
              <pre><code>{`cd ../
python -m venv venv
.\\venv\\Scripts\\activate
pip install -r requirements.txt
# Activar UTF-8 en PowerShell para impresión de emojis:
$env:PYTHONIOENCODING="utf-8"
python manage.py runserver`}</code></pre>
            </div>

            <div className="code-container-vite">
              <div className="code-header-vite">
                <span>Paso 4: Inicializar Frontend en React</span>
                <button onClick={() => handleCopyCode('cd ../mogi_frontend\nnpm install\nnpm start', 'react')}>
                  {copiedText === 'react' ? '¡Copiado!' : <><CopyIcon /> Copiar</>}
                </button>
              </div>
              <pre><code>{`cd ../mogi_frontend
npm install
npm start`}</code></pre>
            </div>
          </section>

          <hr className="section-divider" />

          {/* SECTION 5: EQUIPO */}
          <section id="equipo" className="section-block">
            <h2>5. Autores y Equipo Creador</h2>
            <p className="lead-paragraph">Este proyecto fue diseñado, programado e implementado como respuesta a la necesidad de acompañamiento en salud mental:</p>

            <div className="creators-grid">
              <div className="creator-card">
                <div className="creator-avatar-box">
                  <img src="/images/author_pedro.jpg" alt="Pedro Juan Mendoza Ovallos" />
                </div>
                <h3>Pedro Juan Mendoza Ovallos</h3>
                <span className="role-badge">Co-Creador y Front-End/IA Dev</span>
                <p>Lideró el diseño de la interfaz interactiva, la accesibilidad de síntesis de voz y la conexión mediante Supabase.</p>
              </div>

              <div className="creator-card">
                <div className="creator-avatar-box">
                  <img src="/images/author_miguel.jpg" alt="Miguel Ángel Ramírez Corredor" />
                </div>
                <h3>Miguel Ángel Ramírez Corredor</h3>
                <span className="role-badge">Co-Creador y Back-End/DB Dev</span>
                <p>Lideró la estructuración de la lógica Django, la integración con MongoDB, embeddings de palabras y el detector de crisis.</p>
              </div>
            </div>

            <div className="github-card-promo">
              <h3>📁 Código Fuente Disponible</h3>
              <p>El código se distribuye bajo términos de código abierto en GitHub. Puedes acceder directamente al repositorio presionando el botón de abajo:</p>
              <a href="https://github.com/Skywalk3rcode/mogi_new.git" target="_blank" rel="noreferrer" className="promo-btn">
                Acceder a GitHub
              </a>
            </div>
          </section>

        </main>

      </div>
    </div>
  );
}

export default App;
