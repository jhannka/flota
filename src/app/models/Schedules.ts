export class Schedules {
  constructor(
    public id: number,
    public route: string,
    public week_num: string,
    public fromm: string,
    public too: string,
    public active: boolean
  ) {}
}