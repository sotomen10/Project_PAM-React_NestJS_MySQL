import { Pet } from "src/entities/pet.entity";
import { CreatePetDto, UpdatePetDto, FindBySpeciesDto,FindBySize, GetByIdPetDto } from "../../../dto/pet/pet.barrel";

export interface PetInterface {
  newPetInterface(entity: CreatePetDto): Promise<Pet>;

  getAllPetsInterface(): Promise<Pet[]>;

  getByIdPetInterface(id: GetByIdPetDto): Promise<Pet>;

  updatePetInterface(newData: UpdatePetDto, id: GetByIdPetDto): Promise<Pet>;

  deletePetByIdInterface(id: GetByIdPetDto): Promise<void>;

  findBySpeciesAndEstimatedSize(specie:FindBySpeciesDto, size:FindBySize): Promise<Pet[]>;
}



