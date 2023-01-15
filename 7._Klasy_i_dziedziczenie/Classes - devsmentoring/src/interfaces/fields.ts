export interface CatFields {
    name: string;
    levelOfHappiness: number;
    levelOfHunger: number;
    levelOfLoneliness: number;
    play(attention: number, fun: number): void | [number, number];
    feed(feeding: number): void | number;
    sleep(sleep: number): void | number;
    catStatus(): string;

    // feed(feeding: number, notFeeding: number): number;
    // sleep(slept: number, notSlept: number): number;
}
