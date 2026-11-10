import React from 'react';
import { useApp } from '../data/store.tsx';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Server } from 'lucide-react';

export const CaseStudyModal: React.FC = () => {
  const { selectedProject, setSelectedProject, language, t } = useApp();

  if (!selectedProject) return null;

  const proj = selectedProject;
  const isAr = language === 'ar';
  const details = proj.caseStudyDetails;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div
        className="w-full max-w-3xl my-8 bg-white dark:bg-[#111111] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#B00018]"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {proj.category} · {t.featuredProjects}
            </span>
          </div>
          <button
            onClick={() => setSelectedProject(null)}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {isAr ? proj.titleAr : proj.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {isAr ? proj.subtitleAr : proj.subtitle}
            </p>
          </div>

          {/* Tech stack tags */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {proj.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 font-mono text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>

          {details && (
            <div className="space-y-6">
              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                    {isAr ? 'التحدي التشغيلي' : 'The Challenge'}
                  </span>
                  <p className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {isAr ? details.challengeAr : details.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B00018]">
                    {isAr ? 'الحل البرمجي المنفذ' : 'Engineered Solution'}
                  </span>
                  <p className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {isAr ? details.solutionAr : details.solution}
                  </p>
                </div>
              </div>

              {/* Architecture points */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5" />
                  <span>{isAr ? 'العمارة التقنية ومسار البيانات' : 'Technical Architecture & Pipeline'}</span>
                </h4>
                <div className="space-y-2">
                  {(isAr ? details.architectureAr : details.architecture).map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/20 text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{isAr ? 'النتائج المحققة' : 'Verified Outcomes'}</span>
                </h4>
                <div className="space-y-2">
                  {(isAr ? details.outcomesAr : details.outcomes).map((res, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2.5"
                    >
                      <span className="text-[#B00018] font-mono font-bold">0{idx + 1}.</span>
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {proj.githubUrl && (
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-neutral-400">{isAr ? 'كود المشروع مفتوح المصدر' : 'Open Source Repository'}</span>
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs font-semibold text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{t.githubRepo}</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
