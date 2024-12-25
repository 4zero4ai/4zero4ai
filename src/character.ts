import { Character, defaultCharacter } from "@ai16z/eliza";
import { imageGenerationPlugin } from "@ai16z/plugin-image-generation";

export const character: Character = {
  ...defaultCharacter,
  plugins: [imageGenerationPlugin],
};
