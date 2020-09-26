export function moneyFormat(total: number = 0): string {
    let totalStrs: string[] = String(total).split('');
    let result = '';

    let commaPoint = 3;
    for (let i = totalStrs.length - 1, ii = 0; i >= ii; i--) {
        if (commaPoint === 0) {
            result = totalStrs[i] + ',' + result;
            commaPoint = 2;
        } else {
            result = totalStrs[i] + result;
            commaPoint--;
        }
    }
    return result;
}