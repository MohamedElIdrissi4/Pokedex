export function cleanInput(input: string): string[] {
    const trimInput = input.trim();
    const arrInput = trimInput.split(" ");
    const cleanInput = arrInput.filter((item) => item !== "");
    return cleanInput;
}