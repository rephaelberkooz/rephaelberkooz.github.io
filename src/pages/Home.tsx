import React, { ReactNode } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import profile from '../images/IMG_1158.jpg'

export const Home = () => {
    return (
        <>
            <div style={{
                textAlign: 'center',
                background: 'lightgray',
                maxHeight: '100%',
            }}>
                <img
                    src={profile}
                    alt="Casual Headshot"
                    style={{
                        maxWidth: '256px',
                        height: 'auto',
                        borderRadius: '50%',
                        padding: '64px',
                    }}
                />

            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                maxWidth: '100%',
            }}>
                <div style={{
                    maxWidth: '50%',
                    flexDirection: 'column',
                    textAlign: 'left'
                }}>
                    <p>
                        My name is Rephael Berkooz - welcome to my website!
                    </p>
                    <p>
                        I'm currently a software engineer at&nbsp;<Link to={'https://tulip.co'} style={{ color: 'inherit' }}>Tulip Interfaces</Link>.
                        My work centers on creating technology for data insights in manufacturing.
                        This includes process control methods, data visualization, and data query languages.
                    </p>
                </div>
            </div>
        </>

    );
}