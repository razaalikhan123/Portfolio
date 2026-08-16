import React, { useEffect } from 'react';
import {
  FaShieldAlt,
  FaClipboardCheck,
  FaUserShield,
  FaSearch,
  FaDatabase,
  FaServer,
  FaCloud,
  FaKey,
  FaFileContract,
  FaChartLine,
} from 'react-icons/fa';
import './SkillsSection.css';

const skills = [
  { label: 'IT Governance', icon: <FaClipboardCheck />, color: '#61dafb' },
  { label: 'Technology Risk', icon: <FaChartLine />, color: '#e67e22' },
  { label: 'ITGC', icon: <FaFileContract />, color: '#5b7cfa' },
  { label: 'ISO/IEC 27001', icon: <FaShieldAlt />, color: '#2e7d32' },
  { label: 'PCI DSS', icon: <FaShieldAlt />, color: '#c0392b' },
  { label: 'IAM / PAM', icon: <FaUserShield />, color: '#7c5cff' },
  { label: 'VAPT', icon: <FaSearch />, color: '#8b8fd6' },
  { label: 'Internal & External Audit', icon: <FaClipboardCheck />, color: '#2f9ed6' },
  { label: 'Disaster Recovery & BCP', icon: <FaCloud />, color: '#17a2b8' },
  { label: 'Database Security', icon: <FaDatabase />, color: '#9d4edd' },
  { label: 'Infrastructure & Backup', icon: <FaServer />, color: '#64748b' },
  { label: 'Privileged Access (Delinea)', icon: <FaKey />, color: '#a855f7' },
];

const softSkills = [
  'Regulatory Compliance',
  'Governance Reporting',
  'Risk Assessment',
  'Stakeholder Communication',
  'Control Reviews',
  'Attention to Detail',
];

const SkillCard = ({ skill, hidden }) => (
  <div className="skill-card" aria-hidden={hidden || undefined}>
    <div className="skill-icon" style={{ color: skill.color }}>
      {skill.icon}
    </div>
    <p>{skill.label}</p>
  </div>
);

const SkillsSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="heai animate-on-scroll">Technical Skills</div>
      <div className="skills-marquee">
        <div className="skills-track">
          {skills.map((skill, index) => (
            <SkillCard key={`a-${index}`} skill={skill} />
          ))}
          {skills.map((skill, index) => (
            <SkillCard key={`b-${index}`} skill={skill} hidden />
          ))}
        </div>
      </div>

      <div className="heai animate-on-scroll">Core Strengths</div>
      <div className="soft-skills-list">
        {softSkills.map((skill, index) => (
          <div key={index} className="soft-skill-item animate-on-scroll">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
