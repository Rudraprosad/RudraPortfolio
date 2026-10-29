import { Howl, Howler } from "howler";
import { useAudioStore } from "../Experience/stores/audioStore";

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const resolveAudioPath = (path) =>
  path.startsWith("/") ? `${baseUrl}${path.slice(1)}` : path;

// Create sound instances (background music excluded to save bandwidth)
const sounds = {
  buttonClick: new Howl({
    src: [resolveAudioPath("/audio/sfx/ButtonClick.mp3")],
    volume: 1.0,
  }),
  doorOpening: new Howl({
    src: [resolveAudioPath("/audio/sfx/DoorOpening.mp3")],
    volume: 0.4,
  }),
  doorClosing: new Howl({
    src: [resolveAudioPath("/audio/sfx/DoorClosing.mp3")],
    volume: 0.4,
  }),
};

// Audio control functions
export const playSound = (soundId) => {
  if (!useAudioStore.getState().isAudioEnabled) return;
  sounds[soundId]?.play();
};

export const stopSound = (soundId) => {
  sounds[soundId]?.stop();
};

export const pauseSound = (soundId) => {
  sounds[soundId]?.pause();
};

export const resumeSound = (soundId) => {
  if (!useAudioStore.getState().isAudioEnabled) return;
  sounds[soundId]?.play();
};

// Background music controls (no-ops so no components break)
export const playBackgroundMusic = () => {};
export const stopBackgroundMusic = () => {};
export const pauseBackgroundMusic = () => {};
 
// Volume controls
export const setVolume = (soundId, volume) => {
  sounds[soundId]?.volume(volume);
};

export const setGlobalVolume = (volume) => {
  Howler.volume(volume);
};

// Mute controls
export const muteAll = () => {
  Howler.mute(true);
};

export const unmuteAll = () => {
  Howler.mute(false);
};

// Export sounds object for direct access if needed
export { sounds };
