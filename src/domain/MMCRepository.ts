
export default interface MMCRepository {
    checkIsAllowed(mmc: string): Promise<Boolean>;
}