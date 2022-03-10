// converts html to string
 export const convertToString = (html: any) => {
    const tempElem = document.createElement('div');
    tempElem.innerHTML = html;
    return tempElem.textContent;
  }

  // shuffles an array
  export const shuffleArray = (arr : any[]) => arr.sort(() => Math.random() - 0.5);