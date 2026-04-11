import React from 'react';
import { Phone, Mail, MapPin, Globe, Linkedin, Github } from 'lucide-react';

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
    <div className="mx-auto h-[297mm] min-min-w-[210mm] w-[210mm] min-w-[210mm] w-[210mm] bg-white text-slate-800 flex flex-col p-6 text-xs leading-snug overflow-hidden box-border printable-page">
      
      <header className="grid grid-cols-[180px_1fr] gap-4 mb-4 shrink-0">
        <div className="flex justify-center items-center">
          <div className="h-20 w-20 overflow-hidden rounded-full bg-slate-100">
            {profileImage ? (
              <img src={profileImage} alt="profile" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-slate-300">
                {(personal.full_name || 'Y').charAt(0)}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="wrap-break-word text-3xl font-bold text-slate-800">
            {personal.full_name || 'Your Name'}
          </h1>
          <p className="mt-1 wrap-break-word text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
            {personal.profession || 'Professional Title'}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-[180px_1fr] flex-1">
        <aside className="border-r-[1.5px] border-slate-300 pr-4 flex flex-col gap-4">
          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: accentColor }}>Contact</h2>
            <div className="space-y-2 text-[10px] font-medium text-slate-800">
              {personal.phone && (
                <div className="flex items-center gap-1.5">
                  <Phone size={12} className="shrink-0" style={{ color: accentColor }} />
                  <span className="wrap-break-word block">{personal.phone}</span>
                </div>
              )}
              {personal.email && (
                <div className="flex items-center gap-1.5">
                  <Mail size={12} className="shrink-0" style={{ color: accentColor }} />
                  <span className="break-all block">{personal.email}</span>
                </div>
              )}
              {personal.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} className="shrink-0" style={{ color: accentColor }} />
                  <span className="wrap-break-word block">{personal.location}</span>
                </div>
              )}
              {personal.linkedin && (
                <div className="flex items-center gap-1.5">
                  <Linkedin size={12} className="shrink-0" style={{ color: accentColor }} />
                  <span className="wrap-break-word block">{personal.linkedin}</span>
                </div>
              )}
              {personal.website && (
                <div className="flex items-center gap-1.5">
                  <Globe size={12} className="shrink-0" style={{ color: accentColor }} />
                  <span className="wrap-break-word block">{personal.website}</span>
                </div>
              )}
              {personal.github && (
                <div className="flex items-center gap-1.5">
                  <Github size={12} className="shrink-0" style={{ color: accentColor }} />
                  <span className="wrap-break-word block">{personal.github}</span>
                </div>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: accentColor }}>Education</h2>
            <div className="space-y-2">
              {(education.length ? education : [{ degree: 'B.TECH in CSE', institution: 'Example Institute of Technology', start_date: 'Mar 2023', end_date: '', score: '8.7' }, { degree: 'HIGHER SECONDARY in PCM', institution: 'Example Public School', start_date: 'Apr 2019', end_date: '' }]).map((item, index) => (
                <div key={index}>
                  <p className="wrap-break-word text-[10px] font-bold text-slate-800">{item.degree}</p>
                  <p className="wrap-break-word text-[10px] text-slate-700 mt-0.5">{item.institution}</p>
                  <p className="text-[9px] text-slate-500 mt-0.5">
                    {(item.start_date || item.end_date) ? `${item.start_date || ''}${item.end_date ? ' - ' + item.end_date : ''}` : 'Duration'}
                  </p>
                  {item.score && <p className="wrap-break-word text-[9px] text-slate-600 mt-0.5 font-medium">GPA: {item.score}</p>}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: accentColor }}>Skills</h2>
            <div className="flex flex-col gap-1 text-[10px] font-medium text-slate-900 shrink-0">
              {(skills.length ? skills : ['JavaScript', 'React JS', 'Full Stack Development', 'Git', 'GitHub', 'NextJS', 'Express', 'NodeJS', 'TypeScript']).map((skill, index) => (
                <span key={index} className="wrap-break-word block leading-tight">{skill}</span>
              ))}
            </div>
          </section>
        </aside>

        <main className="pl-4 flex flex-col gap-4">
          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: accentColor }}>Summary</h2>
            <p className="wrap-break-word text-[10px] leading-relaxed text-slate-800 font-medium">
              {data?.professional_summary || 'Highly analytical Data Analyst with experience transforming complex datasets into actionable insights using SQL, Python, and advanced visualization tools.'}
            </p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: accentColor }}>Experience</h2>
            <div className="space-y-3">
              {(experience.length ? experience : [{ job_title: 'Senior Full Stack Developer', company_name: 'Example Technologies.', location: '', start_date: 'Jun 2023', end_date: 'Present', description: 'Architected, developed, and deployed innovative full-stack applications at \nExample Technologies.\ncreating robust back-end systems and intuitive front- end interfaces' }, { job_title: 'Full Stack Developer', company_name: 'Example Technologies.', location: '', start_date: 'Aug 2019', end_date: 'May 2023', description: 'Engineered and deployed scalable full-stack web applications for Example \nTechnologies, translating complex requirements into robust front-end \ninterfaces and efficient back-end services.' }]).map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <p className="wrap-break-word text-[11px] font-bold text-slate-900">{item.job_title}</p>
                    <p className="text-[9px] text-slate-600 font-semibold shrink-0">
                      {(item.start_date || item.end_date) ? `${item.start_date || ''} - ${item.end_date || ''}` : 'Duration'}
                    </p>
                  </div>
                  <p className="wrap-break-word text-[10px] text-slate-600 font-semibold mb-1.5">{item.company_name}</p>
                  <div className="wrap-break-word text-[10px] leading-relaxed text-slate-700 font-medium">
                    {item.description ? item.description.split('\n').filter(Boolean).map((line, i) => (
                      <span key={i} className="flex items-start mb-0.5">
                         <span className="mr-1 text-slate-500 font-bold">•</span>
                         <span className="flex-1">{line.replace(/^-\s*/, '').trim()}</span>
                      </span>
                    )) : 'Describe your responsibilities and achievements.'}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {projects && projects.length > 0 && (
            <section>
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: accentColor }}>Projects</h2>
              <div className="space-y-3">
                {projects.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <p className="wrap-break-word text-[11px] font-bold text-slate-900">{item.title}</p>
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[9px] text-blue-500 hover:underline shrink-0">Link</a>
                      )}
                    </div>
                    {item.tech_stack && item.tech_stack.length > 0 && (
                      <p className="text-[9px] font-medium text-slate-500 mb-1">{item.tech_stack.join(' • ')}</p>
                    )}
                    <div className="wrap-break-word text-[10px] leading-relaxed text-slate-700 font-medium">
                      {item.description ? item.description.split('\n').filter(Boolean).map((line, i) => (
                        <span key={i} className="flex items-start mb-0.5">
                           <span className="mr-1 text-slate-500 font-bold">•</span>
                           <span className="flex-1">{line.replace(/^-\s*/, '').trim()}</span>
                        </span>
                      )) : 'Project highlights will appear here.'}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;
