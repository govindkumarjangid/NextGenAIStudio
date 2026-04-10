import React from 'react';

const MinimalImageTemplate = ({ data, accentColor = '#3B82F6' }) => {
  const personal = data?.personal_info || {};
  const experience = data?.experience || [];
  const education = data?.education || [];
  const skills = data?.skills || [];
  const projects = data?.project || [];
  const profileImage = personal.image
    ? typeof personal.image === 'string'
      ? personal.image
      : URL.createObjectURL(personal.image)
    : '';

  return (
    <div className="mx-auto h-full w-full max-w-205 overflow-hidden rounded-lg border border-gray-200 bg-white text-slate-800 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <aside className="p-5 text-white md:col-span-4" style={{ background: `linear-gradient(180deg, ${accentColor}, #1e293b)` }}>
          <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-white/60 bg-white/20">
            {profileImage ? (
              <img src={profileImage} alt="profile" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-2xl font-bold">
                {(personal.full_name || 'Y').charAt(0)}
              </div>
            )}
          </div>

          <h1 className="text-center text-base font-semibold wrap-break-word sm:text-lg">{personal.full_name || 'Your Name'}</h1>
          <p className="text-center text-[11px] uppercase tracking-[0.2em] text-white/90 wrap-break-word">{personal.profession || 'Professional Title'}</p>

          <div className="mt-6 space-y-2 rounded-xl bg-black/20 p-3 text-[10px] leading-5 text-white/90 ring-1 ring-white/10 sm:text-[11px]">
            <p className="break-all">{personal.email || 'you@mail.com'}</p>
            <p className="wrap-break-word">{personal.phone || '+00 00000 00000'}</p>
            <p className="wrap-break-word">{personal.location || 'City, Country'}</p>
            <p className="break-all">{personal.linkedin || 'linkedin.com/in/username'}</p>
            <p className="break-all">{personal.website || 'yourwebsite.com'}</p>
          </div>

          <h2 className="mt-6 border-t border-white/30 pt-4 text-[10px] font-semibold uppercase tracking-[0.22em]">Skills</h2>
          <ul className="mt-2 space-y-1 text-[11px] text-white/95">
            {(skills.length ? skills : ['React', 'Node.js', 'UI Design']).map((skill, index) => (
              <li key={index} className="wrap-break-word flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/90" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </aside>

        <main className="p-5 md:col-span-8 md:p-6">
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Summary</h2>
          <p className="mt-2 wrap-break-word text-[11px] leading-5 text-slate-700">
            {data?.professional_summary || 'A brief professional summary appears here.'}
          </p>

          <h2 className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Experience</h2>
          <div className="mt-2 space-y-3">
            {(experience.length ? experience : [{ job_title: '', company_name: '', location: '', start_date: '', end_date: '', description: '' }]).map((item, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                <div className="flex justify-between items-start">
                  <p className="wrap-break-word text-[11px] font-semibold">{item.job_title || 'Role'} - {item.company_name || 'Company'}</p>
                  <p className="text-[10px] text-slate-500 shrink-0">{(item.start_date || item.end_date) ? `${item.start_date || ''} - ${item.end_date || ''}` : 'Duration'}</p>
                </div>
                {(item.location) && <p className="text-[10px] text-slate-500 mt-0.5">{item.location}</p>}
                <p className="mt-1.5 wrap-break-word text-[11px] text-slate-700 whitespace-pre-wrap">{item.description || 'Describe your work, impact, and outcomes.'}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Education</h2>
          <div className="mt-2 space-y-2">
            {(education.length ? education : [{ degree: '', institution: '', location: '', start_date: '', end_date: '', score: '' }]).map((item, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="flex justify-between items-start gap-2">
                  <p className="wrap-break-word text-[11px] font-semibold">{item.degree || 'Degree'}</p>
                  {item.score && <p className="text-[10px] font-medium text-slate-600 shrink-0">{item.score}</p>}
                </div>
                <div className="flex justify-between items-start mt-0.5">
                   <p className="wrap-break-word text-[11px] text-slate-700">{item.institution || 'Institution'}{item.location ? `, ${item.location}` : ''}</p>
                   <p className="text-[10px] text-slate-500 shrink-0">{(item.start_date || item.end_date) ? `${item.start_date || ''} - ${item.end_date || ''}` : 'Year'}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Projects</h2>
          <div className="mt-2 space-y-2">
            {(projects.length ? projects : [{ title: '', link: '', tech_stack: [], description: '' }]).map((item, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                <div className="flex items-center justify-between">
                   <p className="wrap-break-word text-[11px] font-semibold">{item.title || 'Project'}</p>
                   {item.link && <a href={item.link} className="text-[10px] text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Link</a>}
                </div>
                {item.tech_stack && item.tech_stack.length > 0 && (
                   <p className="text-[10px] text-slate-500 mt-1 italic">{item.tech_stack.join(', ')}</p>
                )}
                <p className="mt-1.5 wrap-break-word text-[11px] text-slate-700 whitespace-pre-wrap">{item.description || 'Project highlights will appear here.'}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;