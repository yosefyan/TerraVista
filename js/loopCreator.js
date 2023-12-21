const loopCreator = (
  container,
  ele,
  arr,
  subEleLength,
  containerClasses,
  classes
) => {
  for (let i = 0; i < arr.length / 2; i++) {
    container.innerHTML += `
    <div class="containers flex h-[33%] ${containerClasses[i]}">
      ${`<${ele} class="${classes}"><span class="key"></span>${arr[i]}</${ele}>`.repeat(
        subEleLength
      )}
    </div>
    `;
  }
};

const imgCreator = (container, arr) => {
  arr.forEach((a) => {
    container.innerHTML += `<img class="w-[20%] h-[40%] rounded-lg opacity-50 shadow-[0_15px_1rem_rgb(6,102,212)]" src="${a.flags.png}" />`;
  });
};
export { loopCreator, imgCreator };
