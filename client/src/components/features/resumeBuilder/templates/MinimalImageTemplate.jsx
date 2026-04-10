import React from 'react';

const MinimalImageTemplate = ({ data, accentColor = '#3B82F6' }) => {
  const personal = data?.personal_info || {};
  const experience = data?.experience || [];
  const education = data?.education || [];
  const skills = data?.skills || [];
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

          <h1 className="text-center text-lg font-semibold wrap-break-word">{personal.full_name || 'Your Name'}</h1>
          <p className="text-center text-xs text-white/90 wrap-break-word">{personal.profession || 'Professional Title'}</p>

          <div className="mt-6 space-y-2 rounded-xl bg-black/20 p-3 text-[11px] text-white/90 ring-1 ring-white/10">
            <p className="break-all">{personal.email || 'you@mail.com'}</p>
            <p className="wrap-break-word">{personal.phone || '+00 00000 00000'}</p>
            <p className="wrap-break-word">{personal.location || 'City, Country'}</p>
            <p className="break-all">{personal.linkedin || 'linkedin.com/in/username'}</p>
            <p className="break-all">{personal.website || 'yourwebsite.com'}</p>
          </div>

          <h2 className="mt-6 border-t border-white/30 pt-4 text-xs font-semibold uppercase tracking-[0.2em]">Skills</h2>
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
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: accentColor }}>Summary</h2>
          <p className="mt-2 wrap-break-word text-xs leading-5 text-slate-700">
            {data?.professional_summary || 'A brief professional summary appears here.'}
          </p>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: accentColor }}>Experience</h2>
          <div className="mt-2 space-y-3">
            {(experience.length ? experience : [{ role: '', company: '', duration: '', description: '' }]).map((item, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                <p className="wrap-break-word text-xs font-semibold">{item.role || 'Role'} - {item.company || 'Company'}</p>
                <p className="text-xs text-slate-500">{item.duration || 'Duration'}</p>
                <p className="mt-1 wrap-break-word text-xs text-slate-700">{item.description || 'Describe your work, impact, and outcomes.'}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: accentColor }}>Education</h2>
          <div className="mt-2 space-y-2">
            {(education.length ? education : [{ degree: '', school: '', year: '' }]).map((item, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="wrap-break-word text-xs font-semibold">{item.degree || 'Degree'}</p>
                <p className="wrap-break-word text-xs text-slate-700">{item.school || 'Institution'}</p>
                <p className="text-xs text-slate-500">{item.year || 'Year'}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;