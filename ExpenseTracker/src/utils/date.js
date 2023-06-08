export const getFormattedDate = ( date ) =>
{
    try
    {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    } catch {
        return date;
    }
};

export const getDateMinusDays = ( date, days ) =>
{
    return new Date( date.getFullYear(), date.getMonth(), date.getDate() - days );

};