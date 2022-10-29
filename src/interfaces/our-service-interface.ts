export interface OurServiceInterface {
    packageName: string
    price: string|number,
    measurement: string,
    hyperlink?: string | null,
    buttonText?: string,
    buttonEnabled: boolean,
    benefit : string[]
}