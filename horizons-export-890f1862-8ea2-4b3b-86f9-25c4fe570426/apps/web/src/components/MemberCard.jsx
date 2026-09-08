import React from 'react';
import { Linkedin } from 'lucide-react';

export default function MemberCard({ member, showPosition = false, nameClassName = 'text-lg' }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-sm bg-secondary">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          style={{ objectPosition: member.imagePosition || 'center' }}
          className={`aspect-[3/4] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] ${member.imageScale || (member.zoom ? 'scale-[1.02]' : '')}`}
        />
        <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          {member.roleFirst && member.role && (
            <p className="mb-1 text-xs font-semibold tracking-[0.12em] uppercase text-gold-dark">
              {member.role}
            </p>
          )}
          <h3 className={`font-display ${nameClassName} font-medium leading-snug text-foreground`}>
            {member.name}
          </h3>
          {showPosition && member.position && (
            <p className="mt-0.5 text-xs font-semibold tracking-[0.12em] uppercase text-gold-dark">
              {member.position}
            </p>
          )}
          <p className="mt-1 text-sm text-muted-foreground">
            {member.major}
            {member.minor && ` · Minor: ${member.minor}`}
            {` · Class of ${member.year}`}
          </p>
          {member.role && !member.roleFirst && <p className="mt-0.5 text-sm text-muted-foreground">{member.role}</p>}
          {member.company && (
            <p className="mt-0.5 text-sm text-muted-foreground">
              {member.position && !showPosition ? `${member.position}, ` : ''}
              {member.company}
            </p>
          )}
        </div>
        <a
          href={member.linkedin || 'https://www.linkedin.com/in/delta-sigma-pi-alpha-zeta/'}
          target="_blank"
          rel="noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="mt-1 text-muted-foreground/60 transition-colors hover:text-plum"
        >
          <Linkedin className="h-4 w-4" strokeWidth={1.75} />
        </a>
      </div>
    </div>
  );
}
