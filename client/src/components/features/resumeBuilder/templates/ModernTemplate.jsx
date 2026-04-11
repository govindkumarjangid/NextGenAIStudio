import React from 'react';
import { Phone, Mail, MapPin, Globe, Linkedin, Github } from 'lucide-react';

const ModernTemplate = ({ data, accentColor = '#3B82F6' }) => {
  const personal = data?.personal_info || {};
  const experience = data?.experience || [];
  const education = data?.education || [];
  const skills = data?.skills || [];
  const projects = data?.project || [];

  return (
    <div className="mx-auto h-[297mm] min-min-w-[210mm] w-[210mm] min-w-[210mm] w-[210mm] bg-white text-slate-800 flex flex-col text-xs leading-snug overflow-hidden box-border printable-page">

      {/* Header */}
      <header className="px-6 py-4 shrink-0" style={{ backgroundColor: accentColor, color: '#ffffff' }}>
        <h1 className="wrap-break-word text-2xl sm:text-3xl font-normal tracking-wide mb-2.5">
          {personal.full_name || 'Your Name'}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-2 text-[10px] font-medium opacity-90">
          {personal.email && (
            <div className="flex items-center gap-1.5">
              <Mail size={11} className="shrink-0" />
              <span className="break-all">{personal.email}</span>
            </div>
          )}
          {personal.phone && (
            <div className="flex items-center gap-1.5">
              <Phone size={11} className="shrink-0" />
              <span className="wrap-break-word">{personal.phone}</span>
            </div>
          )}
          {personal.location && (
            <div className="flex items-center gap-1.5">
              <MapPin size={11} className="shrink-0" />
              <span className="wrap-break-word">{personal.location}</span>
            </div>
          )}
          {personal.linkedin && (
            <div className="flex items-center gap-1.5">
              <Linkedin size={11} className="shrink-0" />
              <span className="wrap-break-word">{personal.linkedin}</span>
            </div>
          )}
          {personal.website && (
            <div className="flex items-center gap-1.5">
              <Globe size={11} className="shrink-0" />
              <span className="wrap-break-word">{personal.website}</span>
            </div>
          )}
          {personal.github && (
            <div className="flex items-center gap-1.5">
              <Github size={11} className="shrink-0" />
              <span className="wrap-break-word">{personal.github}</span>
            </div>
          )}
        </div>
      </header>

      {/* Body */}
      <main className="flex-1 flex flex-col gap-3 px-6 py-4">

        {/* Summary */}
        <section>
          <h2 className="text-[12px] font-normal text-slate-800 mb-1">Professional Summary</h2>
          <div className="w-full border-t border-slate-200 mb-1.5"></div>
          <p className="wrap-break-word text-[10px] leading-relaxed text-slate-800 font-medium">
            {data?.professional_summary || 'Highly analytical professional with experience building solutions and creating meaningful user experiences using modern development technologies.'}
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-[12px] font-normal text-slate-800 mb-1">Experience</h2>
          <div className="w-full border-t border-slate-200 mb-2.5"></div>
          <div className="space-y-3">
            {(experience.length ? experience : [
              { job_title: 'Senior Full Stack Developer', company_name: 'Example Technologies.', location: '', start_date: 'Jun 2023', end_date: 'Present', description: 'Architected, developed, and deployed innovative full-stack applications at Example Technologies.\ncreating robust back-end systems.' },
              { job_title: 'Full Stack Developer', company_name: 'Example Technologies.', location: '', start_date: 'Aug 2019', end_date: 'May 2023', description: 'Engineered and deployed scalable full-stack web applications for Example Technologies, translating complex requirements into robust front-end interfaces and efficient back-end services.' }
            ]).map((item, index) => (
              <div key={index} className="relative pl-3.5">
                <span className="absolute left-0 top-1 h-1 w-1 rounded-full" style={{ backgroundColor: accentColor }}></span>
                <div className="flex justify-between items-baseline mb-0.5">
                  <p className="wrap-break-word text-[11px] font-bold text-slate-900">{item.job_title}</p>
                  <p className="text-[8px] text-slate-500 bg-slate-100 px-1 py-0.5 rounded font-medium shrink-0">
                    {(item.start_date || item.end_date) ? `${item.start_date || ''} - ${item.end_date || ''}` : 'Duration'}
                  </p>
                </div>
                <p className="wrap-break-word text-[10px] font-semibold mb-1" style={{ color: accentColor }}>{item.company_name}</p>
                <div className="wrap-break-word text-[10px] leading-relaxed text-slate-700 font-medium">
                  {item.description ? item.description.split('\n').filter(Boolean).map((line, i) => (
                    <div key={i} className="mb-0.5">{line.replace(/^-\s*/, '').trim()}</div>
                  )) : 'Describe your responsibilities.'}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        {projects && projects.length > 0 && (
          <section>
            <h2 className="text-[12px] font-normal text-slate-800 mb-1">Projects</h2>
            <div className="w-full border-t border-slate-200 mb-2"></div>
            <div className="space-y-2.5">
              {projects.map((item, index) => (
                 <div key={index} className="relative pl-3.5">
                  <span className="absolute left-0 top-1 h-1 w-1 rounded-full" style={{ backgroundColor: accentColor }}></span>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <p className="wrap-break-word text-[11px] font-bold text-slate-900">{item.title}</p>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[8px] text-slate-500 hover:text-blue-500 hover:underline shrink-0">Link</a>
                    )}
                  </div>
                  {item.tech_stack && item.tech_stack.length > 0 && (
                    <p className="wrap-break-word text-[9px] font-medium mb-1" style={{ color: accentColor }}>{item.tech_stack.join(' • ')}</p>
                  )}
                  <div className="wrap-break-word text-[10px] leading-relaxed text-slate-700 font-medium">
                    {item.description ? item.description.split('\n').filter(Boolean).map((line, i) => (
                      <div key={i} className="mb-0.5">{line.replace(/^-\s*/, '').trim()}</div>
                    )) : 'Project highlights.'}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Split */}
        <div className="grid grid-cols-2 gap-4 mt-1">
          <section>
            <h2 className="text-[12px] font-normal text-slate-800 mb-1">Education</h2>
            <div className="w-full border-t border-slate-200 mb-1.5"></div>
            <div className="space-y-2">
              {(education.length ? education : [
                { degree: 'B.TECH in CSE', institution: 'Example Institute of Technology', start_date: 'Mar 2023', score: '8.7' },
                { degree: 'HIGHER SECONDARY in PCM', institution: 'Example Public School', start_date: 'Apr 2019' }
              ]).map((item, index) => (
                <div key={index}>
                  <p className="wrap-break-word text-[10px] font-bold text-slate-900">{item.degree}</p>
                  <p className="wrap-break-word text-[10px] font-medium mt-0.5" style={{ color: accentColor }}>{item.institution}</p>
                  <div className="flex justify-between items-center text-[9px] text-slate-600 mt-0.5 font-medium">
                    <span>{(item.start_date || item.end_date) ? `${item.start_date || ''}${item.end_date ? ' - ' + item.end_date : ''}` : 'Duration'}</span>
                    {item.score && <span>GPA: {item.score}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[12px] font-normal text-slate-800 mb-1">Skills</h2>
            <div className="w-full border-t border-slate-200 mb-1.5"></div>
            <div className="flex flex-wrap gap-1">
              {(skills.length ? skills : ['JavaScript', 'React JS', 'Full Stack', 'Git', 'NextJS', 'Express']).map((skill, index) => (
                <span key={index} className="px-2 py-0.5 rounded-full text-[9px] font-semibold text-white tracking-wide" style={{ backgroundColor: accentColor }}>
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

      </main>
    </div>
  );
};

export default ModernTemplate;