declare module '*.png';
declare module '*.mp4';
declare module '*.svg' {
  const content: string;
  export default content;
}
