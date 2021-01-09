export class Character {
  constructor(
    public id: number,
    public avatar: string,
    public birthYear: string,
    public created: string,
    public edited: string,
    public eyeColor: string,
    public films: string[],
    public gender: string,
    public hairColor: string,
    public height: string,
    public homeworld: string,
    public mass: string,
    public name: string,
    public skinColor: string,
    public species: string[],
    public starships: string[],
    public url: string
  ) {}
}
