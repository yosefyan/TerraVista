const reset = (lis) => {
  [...lis].forEach((li) => {
    li.innerText = "";
  });
};

export default reset;
