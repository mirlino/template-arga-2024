export const useRenderingImage = () => {
  
  function getImageUrl(route: string, name: string, ext: string = 'png') {
    if(ext === 'png') return new URL(`../assets/img/${route}/${name}.png`, import.meta.url).href;
    if(ext === 'jpg') return new URL(`../assets/img/${route}/${name}.jpg`, import.meta.url).href;
  }

  return {
    getImageUrl,
  };
};