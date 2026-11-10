import React from 'react';
import { useApp } from '../data/store.tsx';
import { PROJECTS_DATA } from '../data/projects.ts';
import { Github, ExternalLink, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { language, setSelectedProject, t } = useApp();
  const isAr = language === 'ar';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B00018]">
          <span>Portfolio &amp; Case Studies</span>
          <span aria-hidden="true">·</span>
          <span>Verified Deployments</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
          {t.navProjects}
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {isAr
            ? 'نماذج من أعمال كود برنت البرمجية ودراسات الحالة الواقعية. منصات، تطبيقات، وأنظمة أتمتة بُنيت بعناية هندسية.'
            : 'Production systems, software applications, and client case studies architected and shipped by CodePrint.'}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {PROJECTS_DATA.map((proj) => (
          <div
            key={proj.id}
            className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Project Visual */}
              <div className="lg:col-span-5">
                <div
                  onClick={() => setSelectedProject(proj)}
                  className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-900 cursor-pointer group"
                >
                  <img
                    src={proj.image}
                    alt={isAr ? proj.titleAr : proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      {isAr ? proj.categoryAr : proj.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-500 font-medium">{proj.status}</span>
                  </div>

                  {proj.isCaseStudy && (
                    <span className="text-[11px] font-semibold text-[#B00018] uppercase tracking-wider">
                      ★ {isAr ? 'دراسة حالة موثقة' : 'In-Depth Case Study'}
                    </span>
                  )}
                </div>

                <div>
                  <h2
                    onClick={() => setSelectedProject(proj)}
                    className="text-2xl font-bold text-neutral-950 dark:text-white hover:text-[#B00018] cursor-pointer transition-colors"
                  >
                    {isAr ? proj.titleAr : proj.title}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {isAr ? proj.subtitleAr : proj.subtitle}
                  </p>
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {isAr ? proj.descriptionAr : proj.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {proj.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between text-xs">
                  {proj.isCaseStudy ? (
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="px-4 py-2 font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>{t.viewCaseStudy}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="font-semibold text-[#B00018] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{t.viewDetails}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>
                  )}

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{t.githubRepo}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
                  )}
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
