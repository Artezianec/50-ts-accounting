export const base_url = "https://webaccounting.herokuapp.com/v2/";
export const createToken = (login: string, password: string) =>
{
    return `Basic ${btoa(login + ":" + password)}`;
}