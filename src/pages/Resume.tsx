import React, { ReactNode } from 'react';
import resume from '../images/resume_image.png'

export const Resume = () => {
    return (
      <div style={{
        textAlign: 'center',
        height: '100%'
      }}
      >
        <img
            style={{maxWidth: '512px'}}
            src={resume}
            alt='Resume'
        />
      </div>
    );
  }