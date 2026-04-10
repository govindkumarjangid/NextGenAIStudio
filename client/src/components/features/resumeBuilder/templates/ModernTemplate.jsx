import React from 'react';

const ModernTemplate = ({ data, accentColor = '#3B82F6' }) => {
  const personal = data?.personal_info || {};
  const experience = data?.experience || [];
  const education = data?.education || [];
  const skills = data?.skills || [];
  const projects = data?.project || [];

  return (
    <div className="mx-auto h-full w-full max-w-205 overflow-hidden rounded-lg border border-white/10 bg-slate-950 text-white">
      <div className="relative p-5" style={{ background: `linear-gradient(130deg, ${accentColor}, #0f172a 70%)` }}>
        <div className="absolute right-6 top-6 h-14 w-14 rounded-full border border-white/30 bg-white/10" />
        <h1 className="wrap-break-word pr-12 text-xl font-bold sm:text-2xl">{personal.full_name || 'Your Name'}</h1>
        <p className="mt-1 wrap-break-word text-[11px] font-medium uppercase tracking-[0.2em] text-white/90">{personal.profession || 'Professional Title'}</p>
        <p className="mt-2 break-all text-[10px] text-white/85 sm:text-[11px]">
          {[personal.email, personal.phone, personal.location].filter(Boolean).join(' • ') || 'Email • Phone • Location'}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 bg-linear-to-b from-slate-900 to-slate-950 p-4 md:grid-cols-12">
        <section className="space-y-4 md:col-span-8">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Professional Summary</h2>
            <p className="mt-2 wrap-break-word text-[11px] leading-5 text-slate-200">
              {data?.professional_summary || 'Add your summary to show strengths, experience, and career direction.'}
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Experience</h2>
            <div className="mt-3 space-y-3">
              {(experience.length ? experience : [{ job_title: '', company_name: '', location: '', start_date: '', end_date: '', description: '' }]).map((item, index) => (
                <div key={index} className="relative rounded-md bg-black/20 p-3 pl-4">
                  <span className="absolute left-0 top-0 h-full w-1 rounded-l-md" style={{ backgroundColor: accentColor }} />
                  <div className="flex justify-between items-start gap-2">
                    <p className="wrap-break-word text-[11px] font-semibold text-white">{item.job_title || 'Role'} - {item.company_name || 'Company'}</p>
                    <p className="text-[10px] text-slate-400 shrink-0">{(item.start_date || item.end_date) ? `${item.start_date || ''} - ${item.end_date || ''}` : 'Duration'}</p>
                  </div>
                  {(item.location) && <p className="text-[10px] text-slate-400 mt-0.5">{item.location}</p>}
                  <p className="mt-1.5 wrap-break-word text-[11px] text-slate-300 whitespace-pre-wrap">{item.description || 'Show role responsibilities and achievements with measurable impact.'}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-4 md:col-span-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Skills</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {(skills.length ? skills : ['React', 'Node.js', 'Communication']).map((skill, index) => (
                <span key={index} className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] text-slate-100 sm:text-[11px]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Education</h2>
            <div className="mt-2 space-y-2 text-[11px] text-slate-200">
              {(education.length ? education : [{ degree: '', institution: '', location: '', start_date: '', end_date: '', score: '' }]).map((item, index) => (
                <div key={index} className="flex flex-col gap-0.5">
                  <div className="flex justify-between gap-2">
                    <p className="wrap-break-word font-medium">{item.degree || 'Degree'}</p>
                    {item.score && <p className="text-[10px] font-medium text-white/70 shrink-0">{item.score}</p>}
                  </div>
                  <p className="wrap-break-word ext-white/80">{item.institution || 'Institution'}{item.location ? `, ${item.location}` : ''}</p>
                  <p className="text-[10px] text-slate-400">{(item.start_date || item.end_date) ? `${item.start_date || ''} - ${item.end_date || ''}` : 'Year'}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Projects</h2>
            <div className="mt-3 space-y-3">
              {(projects.length ? projects : [{ title: '', link: '', tech_stack: [], description: '' }]).map((item, index) => (
                <div key={index} className="rounded-md border border-white/10 bg-black/20 p-3">
                  <div className="flex justify-between items-center gap-2">
                     <p className="wrap-break-word text-[11px] font-semibold text-white">{item.title || 'Project Name'}</p>
                     {item.link && <a href={item.link} className="text-[10px] text-blue-400 hover:underline shrink-0" target="_blank" rel="noopener noreferrer">Link</a>}
                  </div>
                  {item.tech_stack && item.tech_stack.length > 0 && (
                     <p className="text-[10px] text-slate-400 mt-1 italic">{item.tech_stack.join(', ')}</p>
                  )}
                  <p className="mt-1.5 wrap-break-word text-[11px] text-slate-300 whitespace-pre-wrap">{item.description || 'Project highlights will appear here.'}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ModernTemplate;