import { loopCreator, imgCreator } from "./loopCreator.js";
import { selector, selectorAll } from "./selector.js";
import arr from "./variables.js";
import reset from "./reset.js";

const dataContainer = selector("#dataContainer");

loopCreator(
  dataContainer,
  "li",
  arr,
  2,
  [
    "justify-between",
    "justify-around",
    "justify-center xl:m-auto w-full xl:w-[50%]",
  ],
  "lis tShadow overflow-x-hidden overflow-y-auto p-3 text-white w-[50%] xl:w-[15vw] grid grid-cols-2 justify-center items-center upDown rounded-lg drop-shadow-[0_0_1rem_blue] font-bold list-none border-b-8 border-b-cyan-500/50"
);

let theInput = selector("#theInput");
let containerImgs = selector("#containerImgs");

theInput.addEventListener("input", async (e) => {
  let lis = selectorAll(".lis");
  if (e.target.value == "") {
    reset(lis);
    containerImgs.innerHTML = `<p class="text-9xl upDown h-[60%] font-bold gradientText">?</p>`;
  }
  try {
    const res = await axios.get(
      `https://restcountries.com/v3.1/capital/${e.target.value}`
    );
    containerImgs.innerHTML = "";
    imgCreator(containerImgs, res.data);
    reset(lis);
    res.data.forEach((res) => {
      let { population, timezones, area, independent, name, region } = res;
      let neededData = {
        population,
        timezones,
        name: name.common,
        region,
        area,
        independent,
      };
      for (let i = 0; i < lis.length; i++) {
        lis[i].innerHTML += `<p>${
          Object.keys(neededData)[i]
        }:</p><p class="flex flex-col justify-center">${
          Object.values(neededData)[i] || "N/A"
        }</p>`;
      }
    });
  } catch (error) {}
});
