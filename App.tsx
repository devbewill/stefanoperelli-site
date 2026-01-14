import React, { useState, useEffect } from 'react';
import { ExperienceItem } from './components/ExperienceItem';
import { CONTENT } from './constants';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<'it' | 'en'>('it');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else if (savedTheme === 'dark' || prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const savedLang = localStorage.getItem('lang') as 'it' | 'en';
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLang = () => {
    const newLang = lang === 'it' ? 'en' : 'it';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = CONTENT[lang];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <header className="px-6 py-12 md:px-12 md:py-16 flex justify-between items-start max-w-[1600px] mx-auto">
        <div>
          <h1 className="text-xl font-medium tracking-tight">Stefano Perelli,</h1>
          <p className="text-xl text-zinc-500">Project & Delivery Manager</p>
        </div>
        <nav className="flex items-center gap-6 md:gap-8">
          <a href="#about" className="text-xl font-medium hover:opacity-50 transition-opacity hidden sm:block">
            {t.labels.about}
          </a>
          <div className="flex gap-2">
            <button 
              onClick={toggleLang}
              className="text-[10px] font-mono tracking-widest border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-full uppercase hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              {lang === 'it' ? 'EN' : 'IT'}
            </button>
            <button 
              onClick={toggleTheme}
              className="text-[10px] font-mono tracking-widest border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-full uppercase hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
          </div>
        </nav>
      </header>

      <main className="px-6 md:px-12 max-w-[1600px] mx-auto pb-32">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-[368px] md:shrink-0">
            <div className="md:sticky md:top-16 space-y-12">
              <div id="about" className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
                  {t.bio}
                </p>
              </div>
              <div className="space-y-0">
                <div className="py-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                  <a href="mailto:hello@stefanoperelli.com" className="text-sm hover:opacity-50 transition-opacity underline underline-offset-4">
                    hello@stefanoperelli.com
                  </a>
                </div>
                <div className="py-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                  <span className="text-sm text-zinc-500">+39 347 000 0000</span>
                </div>
                <div className="py-4 border-t border-zinc-200 dark:border-zinc-800 border-b flex justify-between items-center">
                  <a href="#" className="text-sm hover:opacity-50 transition-opacity underline underline-offset-4">
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-32">
            <section id="experience">
              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 mb-12">
                <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{t.labels.experience}</h2>
              </div>
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {t.experiences.map((exp, idx) => (
                  <ExperienceItem key={idx} item={exp} />
                ))}
              </div>
            </section>

            <section id="projects">
              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 mb-12">
                <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{t.labels.projects}</h2>
              </div>
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {t.projects.map((project, idx) => (
                  <div key={idx} className="py-12 first:pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                      <div>
                        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                        <p className="text-zinc-500 text-sm italic">{project.role}</p>
                      </div>
                      <div>
                        <p className="text-sm leading-relaxed max-w-xl text-zinc-500 dark:text-zinc-400">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="skills">
              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 mb-12">
                <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{t.labels.skills}</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {t.skills.map((cat, idx) => (
                  <div key={idx} className="space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">{cat.title}</h3>
                    <ul className="space-y-3">
                      {cat.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="text-sm flex gap-3 items-start text-zinc-800 dark:text-zinc-300">
                          <span className="text-zinc-500 mt-1">•</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="px-6 py-20 md:px-12 max-w-[1600px] mx-auto border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-[10px] uppercase font-mono tracking-widest">
          <span>{t.labels.footer}</span>
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-100 transition-opacity underline underline-offset-4">CV / PDF</a>
            <a href="#" className="hover:opacity-100 transition-opacity underline underline-offset-4">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;