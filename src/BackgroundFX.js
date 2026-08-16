// src/BackgroundFX.js
import React from 'react';
import './BackgroundFX.css';

// Fixed, decorative, non-interactive layer that sits behind every page.
// Gives the dark canvas depth (grid + glowing orbs + noise) instead of a
// single flat gradient, and keeps the wide gutters on large screens from
// reading as empty.
const BackgroundFX = () => {
  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-fx-grid" />
      <div className="bg-fx-orb bg-fx-orb-1" />
      <div className="bg-fx-orb bg-fx-orb-2" />
      <div className="bg-fx-orb bg-fx-orb-3" />
      <div className="bg-fx-stars" />
      <div className="bg-fx-vignette" />
    </div>
  );
};

export default BackgroundFX;
