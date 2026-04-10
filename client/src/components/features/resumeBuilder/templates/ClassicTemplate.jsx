import React from 'react';

const ClassicTemplate = ({ data, accentColor = '#3B82F6' }) => {
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
    <div className="mx-auto h-full w-full max-w-205 overflow-hidden rounded-lg border border-slate-200 bg-white text-slate-800">
      <div className="p-5 sm:p-6">
        <header className="flex flex-col items-center gap-4 pb-5 text-center sm:flex-row sm:items-center sm:text-left">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-slate-200 ring-4 ring-[#6fd2d0]/35 sm:h-24 sm:w-24" style={{ backgroundColor: `${accentColor}1f` }}>
            {profileImage ? (
              <img src={profileImage} alt="profile" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xl font-bold text-slate-600">
                {(personal.full_name || 'Y').charAt(0)}
              </div>
            )}
          </div>

          <div className="flex-1">
            <h1 className="wrap-break-word text-3xl font-semibold tracking-[0.18em] text-slate-700 sm:text-4xl">
              {personal.full_name || 'Your Name'}
            </h1>
            <p className="mt-2 wrap-break-word text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 sm:text-sm">
              {personal.profession || 'Professional Title'}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-0 border-t border-slate-200 md:grid-cols-[280px_1fr]">
          <aside className="border-b border-slate-200 bg-white py-5 pr-0 md:border-b-0 md:border-r md:pr-6">
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Contact</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p className="wrap-break-word">{personal.phone || '0123456789'}</p>
                <p className="wrap-break-word">{personal.email || 'alex@example.com'}</p>
                <p className="wrap-break-word">{personal.location || 'NY, USA'}</p>
                {personal.website && <p className="wrap-break-word">{personal.website}</p>}
                {personal.linkedin && <p className="wrap-break-word">{personal.linkedin}</p>}
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Education</h2>
              <div className="mt-4 space-y-5">
                {(education.length ? education : [{ degree: '', school: '', year: '' }]).map((item, index) => (
                  <div key={index}>
                    <p className="wrap-break-word text-sm font-semibold text-slate-700">{item.degree || 'Degree'}</p>
                    <p className="wrap-break-word text-sm text-slate-600">{item.school || 'Institution'}</p>
                    <p className="text-xs text-slate-500">{item.year || 'Year'}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Skills</h2>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                {(skills.length ? skills : ['JavaScript', 'React JS', 'Full Stack Development']).map((skill, index) => (
                  <p key={index} className="wrap-break-word">{skill}</p>
                ))}
              </div>
            </section>
          </aside>

          <main className="py-5 md:pl-6">
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: accentColor }}>Summary</h2>
              <p className="mt-3 wrap-break-word text-sm leading-7 text-slate-700">
                {data?.professional_summary || 'Write a short professional summary here.'}
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: accentColor }}>Experience</h2>
              <div className="mt-4 space-y-6">
                {(experience.length ? experience : [{ role: '', company: '', duration: '', description: '' }]).map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="wrap-break-word text-sm font-semibold text-slate-800">{item.role || 'Role'}</p>
                        <p className="wrap-break-word text-sm text-slate-600">{item.company || 'Company'}</p>
                      </div>
                      <p className="text-xs text-slate-500">{item.duration || 'Duration'}</p>
                    </div>
                    <p className="mt-2 wrap-break-word text-sm leading-6 text-slate-700">
                      {item.description || 'Your key impact and responsibilities.'}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: accentColor }}>Projects</h2>
              <div className="mt-4 space-y-5">
                {(projects.length ? projects : [{ name: '', title: '', description: '' }]).map((item, index) => (
                  <div key={index} className="border-l-2 pl-4" style={{ borderColor: `${accentColor}66` }}>
                    <p className="wrap-break-word text-sm font-semibold text-slate-800">{item.name || item.title || 'Project'}</p>
                    <p className="mt-1 wrap-break-word text-sm leading-6 text-slate-700">
                      {item.description || 'Project highlights will appear here.'}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ClassicTemplate;