import React from 'react';

const MinimalTemplate = ({ data, accentColor = '#3B82F6' }) => {
  
  const personal = data?.personal_info || {};
  const experience = data?.experience || [];
  const education = data?.education || [];
  const skills = data?.skills || [];

  return (
    <div className="mx-auto h-full w-full max-w-205 rounded-lg border border-slate-200 bg-white p-6 text-slate-800">
      <div className="mb-6 flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="wrap-break-word text-2xl font-semibold tracking-tight">{personal.full_name || 'Your Name'}</h1>
          <p className="mt-1 wrap-break-words text-xs" style={{ color: accentColor }}>{personal.profession || 'Professional Title'}</p>
        </div>
        <div className="max-w-38 text-right text-[11px] text-slate-600">
          <p className="break-all">{personal.email || 'you@mail.com'}</p>
          <p className="wrap-break-words">{personal.phone || '+00 00000 00000'}</p>
          <p className="wrap-break-words">{personal.location || 'City, Country'}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
        <aside className="border-b pb-4 md:col-span-4 md:border-b-0 md:border-r md:pb-0 md:pr-4" style={{ borderColor: `${accentColor}30` }}>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: accentColor }}>Skills</h2>
          <ul className="mt-2 space-y-1 text-xs text-slate-700">
            {(skills.length ? skills : ['React', 'Node.js', 'Communication']).map((skill, index) => (
              <li key={index} className="wrap-break-word flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accentColor }} />
                <span>{skill}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: accentColor }}>Education</h2>
          <div className="mt-2 space-y-2 text-xs text-slate-700">
            {(education.length ? education : [{ degree: '', school: '', year: '' }]).map((item, index) => (
                  <div key={index} className="rounded-md border border-slate-100 bg-slate-50/60 p-2">
                <p className="wrap-break-words font-medium">{item.degree || 'Degree'}</p>
                <p className="wrap-break-words">{item.school || 'Institution'}</p>
                <p className="text-xs text-slate-500">{item.year || 'Year'}</p>
              </div>
            ))}
          </div>
        </aside>

        <main className="md:col-span-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: accentColor }}>Summary</h2>
          <p className="mt-2 wrap-break-words text-xs leading-5 text-slate-700">
            {data?.professional_summary || 'Your professional summary will appear here.'}
          </p>

          <h2 className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: accentColor }}>Experience</h2>
          <div className="mt-2 space-y-3">
            {(experience.length ? experience : [{ role: '', company: '', duration: '', description: '' }]).map((item, index) => (
              <div key={index} className="relative rounded-md border border-slate-100 bg-slate-50/50 p-3 pl-4">
                <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                <p className="wrap-break-words text-xs font-semibold">{item.role || 'Role'} - {item.company || 'Company'}</p>
                <p className="text-xs text-slate-500">{item.duration || 'Duration'}</p>
                <p className="mt-1 wrap-break-words text-xs text-slate-700">{item.description || 'Describe your key work impact and achievements.'}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MinimalTemplate;