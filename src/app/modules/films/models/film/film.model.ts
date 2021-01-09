export class Film {
  constructor(
    public id: number,
    public avatar: string,
    public title: string,
    public producer: string,
    public director: string,
    public episodeId: number,
    public releaseDate: string,
    public created: string,
    public edited: string,
    public description: string
  ) {}
}
