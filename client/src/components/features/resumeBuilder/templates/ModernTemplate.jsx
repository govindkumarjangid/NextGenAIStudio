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
        <h1 className="wrap-break-word pr-12 text-2xl font-bold">{personal.full_name || 'Your Name'}</h1>
        <p className="mt-1 wrap-break-word text-xs text-white/90">{personal.profession || 'Professional Title'}</p>
        <p className="mt-2 break-all text-[11px] text-white/85">
          {[personal.email, personal.phone, personal.location].filter(Boolean).join(' • ') || 'Email • Phone • Location'}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 bg-linear-to-b from-slate-900 to-slate-950 p-4 md:grid-cols-12">
        <section className="space-y-4 md:col-span-8">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: accentColor }}>Professional Summary</h2>
            <p className="mt-2 wrap-break-word text-xs leading-5 text-slate-200">
              {data?.professional_summary || 'Add your summary to show strengths, experience, and career direction.'}
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: accentColor }}>Experience</h2>
            <div className="mt-3 space-y-3">
              {(experience.length ? experience : [{ role: '', company: '', duration: '', description: '' }]).map((item, index) => (
                <div key={index} className="relative rounded-md bg-black/20 p-3 pl-4">
                  <span className="absolute left-0 top-0 h-full w-1 rounded-l-md" style={{ backgroundColor: accentColor }} />
                  <p className="wrap-break-word text-xs font-semibold text-white">{item.role || 'Role'} - {item.company || 'Company'}</p>
                  <p className="text-xs text-slate-400">{item.duration || 'Duration'}</p>
                  <p className="mt-1 wrap-break-word text-xs text-slate-300">{item.description || 'Show role responsibilities and achievements with measurable impact.'}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-4 md:col-span-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: accentColor }}>Skills</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {(skills.length ? skills : ['React', 'Node.js', 'Communication']).map((skill, index) => (
                <span key={index} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-slate-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: accentColor }}>Education</h2>
            <div className="mt-2 space-y-2 text-xs text-slate-200">
              {(education.length ? education : [{ degree: '', school: '', year: '' }]).map((item, index) => (
                <div key={index}>
                  <p className="wrap-break-word font-medium">{item.degree || 'Degree'}</p>
                  <p className="wrap-break-word">{item.school || 'Institution'}</p>
                  <p className="text-xs text-slate-400">{item.year || 'Year'}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: accentColor }}>Projects</h2>
            <p className="mt-2 wrap-break-word text-xs text-slate-300">
              {projects.length
                ? projects.map((item) => item.name || item.title || 'Project').join(', ')
                : 'Project highlights will appear here.'}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ModernTemplate;