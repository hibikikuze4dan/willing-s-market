export const handleLocalSaveClick = (saveName = "", dataToSave = {}) => {
  let saves = JSON.parse(localStorage.getItem("saves")) || [];
  const saveObject = { saveName, saveData: dataToSave };
  const currentSaveIndex = saves.findIndex(
    (save) => save.saveName === saveName
  );
  if (currentSaveIndex !== -1) saves[currentSaveIndex] = saveObject;
  else saves = [...saves, saveObject];
  localStorage.setItem("saves", JSON.stringify(saves));
};
