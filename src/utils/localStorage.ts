export interface LocalStoreItem {
  key: string;
  value: any;
}

export const saveToLocalStorage = (element: LocalStoreItem): void => {
  if (!element.key || typeof element.key !== "string") {
    console.error("La clave del elemento es inválida.");
    return;
  }

  try {
    const serializedValue = JSON.stringify(element.value);
    localStorage.setItem(element.key, serializedValue);
  } catch (error) {
    console.error("Error al guardar el elemento en localStorage:", error);
  }
};

export const getFromLocalStorage = (key: string): any => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    console.error("Error al recuperar el elemento de localStorage:", error);
    return null;
  }
};
