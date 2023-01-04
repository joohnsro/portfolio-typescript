export interface Field<T> {
    template(
        id: string, 
        labeled: boolean,
        name?: string | undefined
    ): T;
}