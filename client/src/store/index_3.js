import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#FFFFAA',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
    isDownload: false,
});

export default state;