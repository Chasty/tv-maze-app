export type Serie = {
    score: number
    show: {
        name: string
        summary: string
        schedule: {
            time: string
            days: Array<string>
        }
        genres: Array<string>
        image: {
            original: string
        }
    }
}