import React from 'react';

const MinimalTemplate = ({ data, accentColor = '#3B82F6' }) => {
  const personal = data?.personal_info || {};
  const experience = data?.experience || [];
  const education = data?.education || [];
  const skills = data?.skills || [];
  const projects = data?.project || [];

  return (
    <div className="mx-auto min-h-[297mm] w-full flex flex-col bg-white p-4 sm:p-5 text-slate-800 text-xs leading-snug">
      <div className="mb-4 flex shrink-0 items-start justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <h1 className="wrap-break-word text-lg font-semibold tracking-tight sm:text-xl">{personal.full_name || 'Your Name'}</h1>
          <p className="mt-0.5 wrap-break-word text-[10px] font-medium uppercase tracking-[0.18em]" style={{ color: accentColor }}>
            {personal.profession || 'Professional Title'}
          </p>
        </div>
        <div className="max-w-38 text-right text-[10px] leading-tight text-slate-600 sm:text-[10px]">
          <p className="break-all">{personal.email || 'you@mail.com'}</p>
          <p className="wrap-break-word">{personal.phone || '+00 00000 00000'}</p>
          <p className="wrap-break-word">{personal.location || 'City, Country'}</p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-12 flex-1">
        <aside className="border-b pb-3 md:col-span-4 md:border-b-0 md:border-r md:pb-0 md:pr-3" style={{ borderColor: `${accentColor}30` }}>
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Skills</h2>
          <ul className="mt-1.5 space-y-1 text-[11px] text-slate-700">
            {(skills.length ? skills : ['React', 'Node.js', 'Communication']).map((skill, index) => (
              <li key={index} className="wrap-break-word flex items-start gap-1.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accentColor }} />
                <span>{skill}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Education</h2>
          <div className="mt-1.5 space-y-1.5 text-[11px] text-slate-700">
            {(education.length ? education : [{ degree: '', institution: '', location: '', start_date: '', end_date: '', score: '' }]).map((item, index) => (
              <div key={index} className="rounded border border-slate-100 bg-slate-50/60 p-1.5">
                <div className="flex justify-between gap-1.5">
                  <p className="wrap-break-word font-medium">{item.degree || 'Degree'}</p>
                  {item.score && <p className="text-[10px] font-medium text-slate-600 shrink-0">{item.score}</p>}
                </div>
                <p className="wrap-break-word mt-0.5">{item.institution || 'Institution'}{item.location ? `, ${item.location}` : ''}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{(item.start_date || item.end_date) ? `${item.start_date || ''} - ${item.end_date || ''}` : 'Year'}</p>
              </div>
            ))}
          </div>
        </aside>

        <main className="md:col-span-8">
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Summary</h2>
          <p className="mt-1.5 wrap-break-word text-[11px] leading-tight text-slate-700">
            {data?.professional_summary || 'Your professional summary will appear here.'}
          </p>

          <h2 className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Experience</h2>
          <div className="mt-1.5 space-y-2">
            {(experience.length ? experience : [{ job_title: '', company_name: '', location: '', start_date: '', end_date: '', description: '' }]).map((item, index) => (
              <div key={index} className="relative rounded border border-slate-100 bg-slate-50/50 p-2 pl-3">
                <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                <div className="flex justify-between">
                  <p className="wrap-break-word text-[11px] font-semibold">{item.job_title || 'Role'} - {item.company_name || 'Company'}</p>
                  <p className="text-[10px] text-slate-500 shrink-0">{(item.start_date || item.end_date) ? `${item.start_date || ''} - ${item.end_date || ''}` : 'Duration'}</p>
                </div>
                {(item.location) && <p className="text-[10px] text-slate-500 mt-0.5">{item.location}</p>}
                <p className="mt-1 wrap-break-word text-[11px] leading-tight text-slate-700 whitespace-pre-wrap">{item.description || 'Describe your key work impact and achievements.'}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accentColor }}>Projects</h2>
          <div className="mt-1.5 space-y-2">
            {(projects.length ? projects : [{ title: '', link: '', tech_stack: [], description: '' }]).map((item, index) => (
              <div key={index} className="rounded border border-slate-100 bg-white p-2 shadow-sm">
                <div className="flex justify-between items-center">
                  <p className="wrap-break-word text-[11px] font-semibold">{item.title || 'Project Name'}</p>
                  {item.link && <a href={item.link} className="text-[10px] text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Link</a>}
                </div>
                {item.tech_stack && item.tech_stack.length > 0 && (
                   <p className="text-[10px] text-slate-500 mt-0.5 italic">{item.tech_stack.join(', ')}</p>
                )}
                <p className="mt-1 wrap-break-word text-[11px] leading-tight text-slate-700 whitespace-pre-wrap">{item.description || 'Project highlights will appear here.'}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MinimalTemplate;