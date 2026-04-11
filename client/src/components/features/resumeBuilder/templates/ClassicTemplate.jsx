import React from 'react';
import { Phone, Mail, MapPin, Globe, Linkedin, Github } from 'lucide-react';

const ClassicTemplate = ({ data, accentColor = '#3B82F6' }) => {
  const personal = data?.personal_info || {};
  const experience = data?.experience || [];
  const education = data?.education || [];
  const skills = data?.skills || [];
  const projects = data?.project || [];

  return (
    <div className="mx-auto h-[11in] min-w-[8.5in] w-[8.5in] overflow-hidden bg-white text-slate-800 flex flex-col p-8 text-sm leading-normal box-border printable-page">
      <header className="flex flex-col items-center text-center pb-4 shrink-0">
        <h1 className="wrap-break-word text-3xl font-extrabold tracking-widest" style={{ color: accentColor }}>
          {personal.full_name || 'Your Name'}
        </h1>
        
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-slate-700 font-semibold">
           {personal.email && (
             <div className="flex items-center gap-1">
               <Mail size={12} className="text-slate-500" />
               <span>{personal.email}</span>
             </div>
           )}
           {personal.phone && (
             <div className="flex items-center gap-1">
               <Phone size={12} className="text-slate-500" />
               <span>{personal.phone}</span>
             </div>
           )}
           {personal.location && (
             <div className="flex items-center gap-1">
               <MapPin size={12} className="text-slate-500" />
               <span>{personal.location}</span>
             </div>
           )}
           {personal.linkedin && (
             <div className="flex items-center gap-1">
               <Linkedin size={12} className="text-slate-500" />
               <span>{personal.linkedin}</span>
             </div>
           )}
           {personal.website && (
             <div className="flex items-center gap-1">
               <Globe size={12} className="text-slate-500" />
               <span>{personal.website}</span>
             </div>
           )}
           {personal.github && (
             <div className="flex items-center gap-1">
               <Github size={12} className="text-slate-500" />
               <span>{personal.github}</span>
             </div>
           )}
        </div>
      </header>

      <div className="w-full border-t-[2px] mb-4 shrink-0" style={{ borderColor: accentColor }} />

      <main className="flex-1 flex flex-col gap-4">
        <section>
          <h2 className="text-[13px] font-bold uppercase tracking-widest mb-1.5" style={{ color: accentColor }}>
            Professional Summary
          </h2>
          <p className="wrap-break-word text-[12px] leading-relaxed text-slate-800 font-medium">
            {data?.professional_summary || 'Write a short professional summary here.'}
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-bold uppercase tracking-widest mb-2" style={{ color: accentColor }}>
            Professional Experience
          </h2>
          <div className="space-y-3">
            {(experience.length ? experience : [{ job_title: 'Senior Full Stack Developer', company_name: 'Example Technologies.', location: '', start_date: 'Jun 2023', end_date: 'Present', description: 'Architected, developed, and deployed innovative full-stack applications at Example Technologies, creating robust back-end systems and intuitive front-end interfaces to deliver meaningful digital experiences' }]).map((item, index) => (
              <div key={index} className="border-l-[3px] pl-3" style={{ borderColor: accentColor }}>
                <div className="flex justify-between items-baseline">
                  <p className="wrap-break-word text-[13px] font-bold text-slate-900">{item.job_title}</p>
                  <p className="text-[10px] text-slate-600 font-bold shrink-0 uppercase tracking-wide">
                    {(item.start_date || item.end_date) ? `${item.start_date || ''} - ${item.end_date || ''}` : 'Duration'}
                  </p>
                </div>
                <p className="wrap-break-word text-[12px] text-slate-700 font-bold mt-0.5">{item.company_name}</p>
                <p className="mt-1 wrap-break-word text-[12px] leading-relaxed text-slate-700 whitespace-pre-wrap font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-[13px] font-bold uppercase tracking-widest mb-2" style={{ color: accentColor }}>
            Education
          </h2>
          <div className="space-y-2">
            {(education.length ? education : [{ degree: 'B.TECH in CSE', institution: 'Example Institute of Technology', start_date: 'Mar 2023', end_date: '', score: '8.7' }]).map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline">
                  <p className="wrap-break-word text-[13px] font-bold uppercase text-slate-900">{item.degree}</p>
                  <p className="text-[10px] text-slate-600 font-bold shrink-0 uppercase tracking-wide">
                    {(item.start_date || item.end_date) ? `${item.start_date || ''}${item.end_date ? ' - ' + item.end_date : ''}` : 'Duration'}
                  </p>
                </div>
                <p className="wrap-break-word text-[12px] text-slate-700 mt-0.5 font-medium">{item.institution}</p>
                {item.score && <p className="wrap-break-word text-[11px] text-slate-600 mt-0.5 font-medium">GPA: {item.score}</p>}
              </div>
            ))}
          </div>
        </section>

        {projects && projects.length > 0 && (
          <section>
            <h2 className="text-[13px] font-bold uppercase tracking-widest mb-2" style={{ color: accentColor }}>
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline">
                    <p className="wrap-break-word text-[13px] font-bold text-slate-900">{item.title}</p>
                    {item.link && (
                       <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-500 hover:underline">Link</a>
                    )}
                  </div>
                  {item.tech_stack && item.tech_stack.length > 0 && (
                    <p className="text-[10px] font-semibold text-slate-500 mt-0.5">{item.tech_stack.join(' • ')}</p>
                  )}
                  <p className="mt-1 wrap-break-word text-[12px] leading-relaxed text-slate-700 whitespace-pre-wrap font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-[13px] font-bold uppercase tracking-widest mb-2" style={{ color: accentColor }}>
            Core Skills
          </h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[12px] font-medium text-slate-800">
            {(skills.length ? skills : ['JavaScript', 'React JS', 'Full Stack Development', 'Git', 'GitHub', 'NextJS', 'Express', 'NodeJS']).map((skill, index) => (
              <span key={index} className="flex items-center">
                <span className="mr-2 text-slate-400 font-bold text-[16px] leading-none">•</span>
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClassicTemplate;
